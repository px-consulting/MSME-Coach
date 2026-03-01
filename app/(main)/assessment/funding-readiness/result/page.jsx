"use client";

import React, { useEffect, useState } from 'react';
import { getFullFundingReadinessData } from '@/actions/assessment';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Loader2, TrendingUp, Building2, Calendar, User2 } from 'lucide-react';
import Link from 'next/link';
import fundingQuestions from '@/questions/fundingReadinessAssessment';

const readinessConfig = {
  'Investor Ready': { bg: 'rgba(16,185,129,0.12)',  text: '#34d399', border: 'rgba(16,185,129,0.3)',  bar: '#10b981', desc: 'Your business demonstrates strong investor appeal across all key dimensions.' },
  'Near Ready':     { bg: 'rgba(59,130,246,0.12)',  text: '#60a5fa', border: 'rgba(59,130,246,0.3)',  bar: '#3b82f6', desc: 'Solid fundamentals in place with a few gaps to address before approaching investors.' },
  'Developing':     { bg: 'rgba(139,92,246,0.12)', text: '#a78bfa', border: 'rgba(139,92,246,0.3)', bar: '#8b5cf6', desc: 'Moderate readiness — significant preparation needed before seeking external funding.' },
  'Early Stage':    { bg: 'rgba(245,158,11,0.12)',  text: '#fbbf24', border: 'rgba(245,158,11,0.3)',  bar: '#f59e0b', desc: 'Basic foundations exist but extensive work is required to become investor-ready.' },
  'Not Ready':      { bg: 'rgba(239,68,68,0.12)',   text: '#f87171', border: 'rgba(239,68,68,0.3)',   bar: '#ef4444', desc: 'Fundamental gaps need to be addressed before pursuing any form of external funding.' },
};

function computeSectionScores(answers) {
  if (!answers || !Array.isArray(answers)) return [];
  let offset = 0;
  return fundingQuestions.map((section) => {
    const count = section.questions.length;
    const slice = answers.slice(offset, offset + count);
    const sum = slice.reduce((a, b) => a + (b ?? 0), 0);
    const pct = Math.round((sum / (count * 4)) * 100);
    offset += count;
    return { title: section.title, score: pct };
  });
}

const ResultPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    getFullFundingReadinessData()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const generatePDF = async () => {
    if (!data?.assessment) return;
    setDownloading(true);
    try {
      const sectionScores = computeSectionScores(data.assessment.answers);
      const response = await fetch('/api/generate-funding-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: data.user,
          businessInsight: data.businessInsight,
          assessment: {
            score: data.assessment.score,
            readinessLevel: data.assessment.readinessLevel,
            issuedAt: data.assessment.issuedAt,
            report: data.assessment.report,
          },
          sectionScores,
        }),
      });
      if (!response.ok) { console.error('PDF failed', await response.text()); return; }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Funding_Readiness_Report_${data.businessInsight?.businessName ?? 'Report'}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
    }
  };

  const assessment = data?.assessment;
  const config = assessment ? (readinessConfig[assessment.readinessLevel] ?? readinessConfig['Early Stage']) : null;
  const sectionScores = assessment ? computeSectionScores(assessment.answers) : [];

  const DownloadBtn = ({ className = '' }) => (
    <Button onClick={generatePDF} disabled={downloading}
      className={`bg-emerald-600 hover:bg-emerald-700 text-white border-0 cursor-pointer gap-2 ${className}`}>
      {downloading
        ? <><Loader2 className="h-4 w-4 animate-spin" />Generating PDF…</>
        : <><Download className="h-4 w-4" />Download Full Report</>}
    </Button>
  );

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <Link href="/assessment">
        <Button variant="ghost" className="gap-2 pl-0 text-white/50 hover:text-white hover:bg-transparent cursor-pointer">
          <ArrowLeft className="h-4 w-4" /> Back to Assessment Hub
        </Button>
      </Link>

      {loading ? (
        <div className="flex flex-col items-center justify-center gap-4 py-32">
          <Loader2 className="h-10 w-10 animate-spin text-emerald-400" />
          <p className="text-white/40">Loading your report…</p>
        </div>
      ) : !assessment ? (
        <div className="rounded-xl p-10 text-center" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-white/40">No report found. Complete the assessment first.</p>
        </div>
      ) : (
        <div className="space-y-5">

          {/* Score card */}
          <div className="rounded-2xl p-6 md:p-8" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: config.bg }}>
                  <TrendingUp className="h-7 w-7" style={{ color: config.text }} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-1 uppercase tracking-widest">Funding Readiness Level</p>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl md:text-3xl font-bold" style={{ color: config.text }}>
                      {assessment.readinessLevel}
                    </h2>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full"
                      style={{ background: config.bg, color: config.text, border: `1px solid ${config.border}` }}>
                      {Math.round(assessment.score)}%
                    </span>
                  </div>
                  <p className="text-white/40 text-xs mt-1 max-w-xs">{config.desc}</p>
                  <p className="text-white/30 text-xs mt-1">
                    {new Date(assessment.issuedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    {' · '}
                    {new Date(assessment.issuedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
              <DownloadBtn className="flex-shrink-0 w-full sm:w-auto" />
            </div>
          </div>

          {/* Section breakdown */}
          <div className="rounded-2xl p-6" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Dimension Breakdown</h3>
            <div className="space-y-4">
              {sectionScores.map(({ title, score }) => {
                const lvl = score >= 80 ? 'Investor Ready' : score >= 60 ? 'Near Ready' : score >= 40 ? 'Developing' : score >= 20 ? 'Early Stage' : 'Not Ready';
                const c = readinessConfig[lvl];
                return (
                  <div key={title}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-white/70">{title}</span>
                      <span className="text-xs font-semibold" style={{ color: c.text }}>{score}%</span>
                    </div>
                    <div className="h-2 rounded-full w-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="h-2 rounded-full transition-all duration-700"
                        style={{ width: `${score}%`, background: c.bar }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Building2, label: 'Business', value: data.businessInsight?.businessName ?? '—' },
              { icon: User2,     label: 'Owner',    value: data.user?.name ?? '—' },
              { icon: Calendar,  label: 'Assessed', value: new Date(assessment.issuedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl p-4 flex items-center gap-3" style={{ background: '#15151F', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(16,185,129,0.1)' }}>
                  <Icon className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white/30 text-xs">{label}</p>
                  <p className="text-white/80 text-sm font-medium truncate">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.06))', border: '1px solid rgba(16,185,129,0.2)' }}>
            <div>
              <p className="text-white font-semibold">Your funding readiness report is ready</p>
              <p className="text-white/40 text-sm mt-0.5">Includes investor insights, gap analysis, action plan, and funding recommendations</p>
            </div>
            <DownloadBtn className="flex-shrink-0 w-full sm:w-auto" />
          </div>

        </div>
      )}
    </div>
  );
};

export default ResultPage;
