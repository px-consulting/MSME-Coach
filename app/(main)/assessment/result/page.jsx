"use client";

import React, { useEffect, useState } from 'react';
import { getLatestBusinessmaturityReport } from '@/actions/assessment';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Loader2, Trophy } from 'lucide-react';
import Link from 'next/link';

const maturityConfig = {
  Leader:    { bg: 'rgba(16,185,129,0.12)', text: '#34d399', border: 'rgba(16,185,129,0.3)' },
  Achiever:  { bg: 'rgba(59,130,246,0.12)', text: '#60a5fa', border: 'rgba(59,130,246,0.3)' },
  Organised: { bg: 'rgba(139,92,246,0.12)', text: '#a78bfa', border: 'rgba(139,92,246,0.3)' },
  Beginner:  { bg: 'rgba(245,158,11,0.12)', text: '#fbbf24', border: 'rgba(245,158,11,0.3)'  },
  Struggler: { bg: 'rgba(239,68,68,0.12)',  text: '#f87171', border: 'rgba(239,68,68,0.3)'   },
};

const ResultPage = () => {
  const [report, setReport] = useState('');
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const result = await getLatestBusinessmaturityReport();
        if (result?.report) {
          setReport(result.report);
          setAssessment(result);
        } else {
          setReport('No report found.');
        }
      } catch {
        setReport('Error fetching report.');
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  }, []);

  const generatePDF = async () => {
    setDownloading(true);
    try {
      const rpt = document.getElementById('report-pdf');
      if (!rpt) return;
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          html: rpt.innerHTML,
          fileName: 'Business_Maturity_Report',
        }),
      });
      if (!response.ok) return;
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Business_Maturity_Report.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
    }
  };

  const config = assessment
    ? maturityConfig[assessment.maturityLevel] ?? maturityConfig.Beginner
    : null;

  return (
    <div className="space-y-8">
      {/* Back button */}
      <Link href="/assessment">
        <Button
          variant="ghost"
          className="gap-2 pl-0 text-white/50 hover:text-white hover:bg-transparent cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Assessment Hub
        </Button>
      </Link>

      {loading ? (
        <div className="flex flex-col items-center justify-center gap-4 py-32">
          <Loader2 className="h-10 w-10 animate-spin text-violet-400" />
          <p className="text-white/40">Loading your report…</p>
        </div>
      ) : (
        <>
          {/* Score card */}
          {assessment && (
            <div
              className="rounded-xl p-6 md:p-8"
              style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  {/* Trophy icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: config.bg }}
                  >
                    <Trophy className="h-7 w-7" style={{ color: config.text }} />
                  </div>

                  <div>
                    <p className="text-white/40 text-xs mb-1 uppercase tracking-widest">
                      Business Maturity Level
                    </p>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: config.text }}>
                        {assessment.maturityLevel}
                      </h2>
                      <span
                        className="text-sm font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: config.bg,
                          color: config.text,
                          border: `1px solid ${config.border}`,
                        }}
                      >
                        {assessment.score}%
                      </span>
                    </div>
                    <p className="text-white/30 text-xs mt-1">
                      Taken on{' '}
                      {new Date(assessment.dateTaken).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>

                {/* Download button */}
                <Button
                  onClick={generatePDF}
                  disabled={downloading}
                  className="bg-violet-600 hover:bg-violet-700 text-white border-0 cursor-pointer gap-2 flex-shrink-0"
                >
                  {downloading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Generating PDF…
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      Download PDF Report
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Report content (white bg for PDF compatibility) */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ background: '#111118', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <h3 className="text-white font-semibold text-sm">
                360° Business Maturity Report
              </h3>
              <span className="text-white/30 text-xs">Powered by Gemini AI</span>
            </div>

            {/* White container — used for PDF export */}
            <div className="bg-white text-black" id="report-pdf">
              <div className="p-6 md:p-10">
                <MDEditor.Markdown
                  source={report}
                  style={{ background: 'white', color: 'black' }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultPage;
