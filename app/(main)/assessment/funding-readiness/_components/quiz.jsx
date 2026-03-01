"use client";
import fundingQuestions from "@/questions/fundingReadinessAssessment";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import { saveFundingReadiness } from "@/actions/assessment";
import { toast } from "sonner";
import {
  Loader2,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const OPTIONS = [
  { label: "Strongly Agree",    value: 4 },
  { label: "Agree",             value: 3 },
  { label: "Disagree",          value: 2 },
  { label: "Strongly Disagree", value: 1 },
];

const allQuestions = fundingQuestions.flatMap((section) =>
  section.questions.map((question) => ({ section: section.title, question }))
);

const sectionOffsets = fundingQuestions.map((_, i) =>
  fundingQuestions.slice(0, i).reduce((sum, s) => sum + s.questions.length, 0)
);

const totalSections = fundingQuestions.length;

const getReadinessLevel = (score) => {
  if (score >= 80) return "Investor Ready";
  if (score >= 60) return "Near Ready";
  if (score >= 40) return "Developing";
  if (score >= 20) return "Early Stage";
  return "Not Ready";
};

// ─── Start Screen ──────────────────────────────────────────────────────────────
function StartScreen({ onStart }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="rounded-2xl p-8 md:p-12 text-center space-y-8"
        style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto">
          <DollarSign className="h-8 w-8 text-emerald-400" />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Funding Readiness Check
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-md mx-auto">
            {allQuestions.length} questions across {totalSections} dimensions. Rate each
            statement from <strong className="text-white/70">Strongly Agree</strong> to{" "}
            <strong className="text-white/70">Strongly Disagree</strong> based on your
            current business reality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-left">
          {fundingQuestions.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white/50"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(16,185,129,0.2)", color: "#34d399" }}
              >
                {i + 1}
              </span>
              <span className="truncate">{s.title}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          className="w-full py-3 rounded-xl font-semibold text-white text-base transition-all duration-150 cursor-pointer"
          style={{ background: "linear-gradient(135deg, #059669, #047857)" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Begin Assessment
        </button>
      </div>
    </div>
  );
}

// ─── Quiz ──────────────────────────────────────────────────────────────────────
export default function FundingReadinessQuiz() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers]               = useState(Array(allQuestions.length).fill(null));
  const [started, setStarted]               = useState(false);
  const [submitting, setSubmitting]         = useState(false);
  const router = useRouter();

  const { loading: saving, fn: saveFn } = useFetch(saveFundingReadiness);

  const sectionStart     = sectionOffsets[currentSection];
  const sectionEnd       = currentSection < totalSections - 1
    ? sectionOffsets[currentSection + 1]
    : allQuestions.length;
  const sectionQuestions = allQuestions.slice(sectionStart, sectionEnd);
  const sectionAnswers   = answers.slice(sectionStart, sectionEnd);
  const allCurrentDone   = sectionAnswers.every((a) => a !== null);
  const totalAnswered    = answers.filter((a) => a !== null).length;
  const progressPct      = Math.round((totalAnswered / allQuestions.length) * 100);
  const isLastSection    = currentSection === totalSections - 1;
  const isFirstSection   = currentSection === 0;

  const handleAnswer = (offsetInSection, value) => {
    const updated = [...answers];
    updated[sectionStart + offsetInSection] = value;
    setAnswers(updated);
  };

  const handlePrev = () => setCurrentSection((p) => Math.max(p - 1, 0));
  const handleNext = () => setCurrentSection((p) => Math.min(p + 1, totalSections - 1));

  const handleSubmit = async () => {
    if (submitting || saving) return;
    setSubmitting(true);
    const sum   = answers.reduce((acc, v) => acc + v, 0);
    const score = parseFloat(((sum / (allQuestions.length * 4)) * 100).toFixed(2));
    const level = getReadinessLevel(score);
    try {
      await saveFn(allQuestions, answers, score, level);
      toast.success("Report generated! Redirecting…");
      router.push("/assessment/funding-readiness/result");
    } catch (err) {
      toast.error(err.message ?? "Failed to generate report.", { duration: 8000 });
      setSubmitting(false);
    }
  };

  if (!started) return <StartScreen onStart={() => setStarted(true)} />;

  const card = { background: "#111118", border: "1px solid rgba(255,255,255,0.08)" };

  return (
    <div className="max-w-3xl mx-auto space-y-4">

      {/* Progress + section tabs */}
      <div className="rounded-xl px-5 py-4 space-y-3" style={card}>
        <div className="flex gap-1.5 flex-wrap">
          {fundingQuestions.map((s, i) => {
            const start = sectionOffsets[i];
            const end   = i < totalSections - 1 ? sectionOffsets[i + 1] : allQuestions.length;
            const done  = answers.slice(start, end).every((a) => a !== null);
            const active = i === currentSection;
            return (
              <button
                key={i}
                onClick={() => setCurrentSection(i)}
                className="text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-150 cursor-pointer"
                style={{
                  background: active ? "rgba(16,185,129,0.2)" : done ? "rgba(16,185,129,0.08)" : "rgba(255,255,255,0.04)",
                  color: active ? "#6ee7b7" : done ? "#10b981" : "rgba(255,255,255,0.35)",
                  border: active ? "1px solid rgba(16,185,129,0.4)" : done ? "1px solid rgba(16,185,129,0.2)" : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {done && !active ? <CheckCircle2 className="inline h-3 w-3 mr-1" /> : null}
                {s.title}
              </button>
            );
          })}
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            <span>{progressPct}% complete</span>
            <span>{totalAnswered} / {allQuestions.length} answered</span>
          </div>
          <div className="h-1 w-full rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
            <div
              className="h-1 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%`, background: "linear-gradient(90deg,#059669,#34d399)" }}
            />
          </div>
        </div>
      </div>

      {/* Section card */}
      <div className="rounded-xl overflow-hidden" style={card}>
        <div
          className="px-6 py-4 flex items-center gap-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(16,185,129,0.05)" }}
        >
          <span
            className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(16,185,129,0.2)", color: "#6ee7b7" }}
          >
            {currentSection + 1}
          </span>
          <div>
            <p className="text-white font-semibold text-base leading-tight">
              {fundingQuestions[currentSection].title}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
              {sectionQuestions.length} question{sectionQuestions.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          {sectionQuestions.map((q, qIdx) => {
            const answer = answers[sectionStart + qIdx];
            return (
              <div key={qIdx} className="px-6 py-5 space-y-3">
                <p className="text-white/80 text-sm leading-relaxed">
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold mr-2 flex-shrink-0 align-middle"
                    style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)" }}
                  >
                    {qIdx + 1}
                  </span>
                  {q.question}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {OPTIONS.map((opt) => {
                    const selected = answer === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(qIdx, opt.value)}
                        className="text-xs py-2 px-3 rounded-lg font-medium transition-all duration-150 cursor-pointer text-center"
                        style={{
                          background: selected ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.03)",
                          border: selected ? "1px solid rgba(16,185,129,0.4)" : "1px solid rgba(255,255,255,0.07)",
                          color: selected ? "#6ee7b7" : "rgba(255,255,255,0.45)",
                        }}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Nav */}
        <div
          className="px-6 py-4 flex items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
        >
          <button
            onClick={handlePrev}
            disabled={isFirstSection}
            className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>

          <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            {currentSection + 1} of {totalSections}
          </span>

          {isLastSection ? (
            <button
              onClick={handleSubmit}
              disabled={!allCurrentDone || submitting || saving}
              className="flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-white"
              style={{ background: allCurrentDone ? "linear-gradient(135deg,#059669,#047857)" : "rgba(255,255,255,0.08)" }}
            >
              {(submitting || saving) ? <><Loader2 className="h-4 w-4 animate-spin" /> Generating…</> : "Submit & Generate Report"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!allCurrentDone}
              className="flex items-center gap-1.5 text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-white"
              style={{ background: allCurrentDone ? "linear-gradient(135deg,#059669,#047857)" : "rgba(255,255,255,0.08)" }}
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
