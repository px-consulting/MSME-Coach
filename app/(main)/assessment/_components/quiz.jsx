"use client";
import assessmentQuestions from "@/questions/businessMaturityAssessment";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import { saveAssessment } from "@/actions/assessment";
import { toast } from "sonner";
import {
  Loader2,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const OPTIONS = [
  { label: "Strongly Agree",    value: 4 },
  { label: "Agree",             value: 3 },
  { label: "Disagree",          value: 2 },
  { label: "Strongly Disagree", value: 1 },
];

const allQuestions = assessmentQuestions.flatMap((section) =>
  section.questions.map((question) => ({ section: section.title, question }))
);

// Starting index in allQuestions for each section
const sectionOffsets = assessmentQuestions.map((_, i) =>
  assessmentQuestions.slice(0, i).reduce((sum, s) => sum + s.questions.length, 0)
);

const totalSections = assessmentQuestions.length;

const getMaturityLevel = (score) => {
  if (score >= 81) return "Leader";
  if (score >= 61) return "Achiever";
  if (score >= 41) return "Organised";
  if (score >= 21) return "Beginner";
  return "Struggler";
};

// ─── Start Screen ─────────────────────────────────────────────────────────────

function StartScreen({ onStart }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="rounded-2xl p-8 md:p-12 text-center space-y-8"
        style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto">
          <ClipboardCheck className="h-8 w-8 text-violet-400" />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            360° Business Maturity Assessment
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-md mx-auto">
            {allQuestions.length} questions across {totalSections} sections. Rate each
            statement from <strong className="text-white/70">Strongly Agree</strong> to{" "}
            <strong className="text-white/70">Strongly Disagree</strong> based on your
            current business reality.
          </p>
        </div>

        {/* Section list */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-left">
          {assessmentQuestions.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white/50"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(139,92,246,0.2)", color: "#a78bfa" }}
              >
                {i + 1}
              </span>
              <span className="truncate">{s.title}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onStart}
          className="w-full py-3 rounded-xl font-semibold text-white text-base transition-all duration-150 cursor-pointer"
          style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Begin Assessment
        </button>
      </div>
    </div>
  );
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────

export default function Quiz() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers]               = useState(Array(allQuestions.length).fill(null));
  const [started, setStarted]               = useState(false);
  const [submitting, setSubmitting]         = useState(false);
  const router = useRouter();

  const { loading: saving, fn: saveAssessmentFn } = useFetch(saveAssessment);

  /* ── derived state ── */
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

  /* ── handlers ── */
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
    const sum        = answers.reduce((acc, v) => acc + v, 0);
    const score      = parseFloat(((sum / (allQuestions.length * 4)) * 100).toFixed(2));
    const level      = getMaturityLevel(score);
    try {
      await saveAssessmentFn(allQuestions, answers, score, level);
      toast.success("Report generated! Redirecting…");
      router.push("/assessment/result");
    } catch (err) {
      const msg = err.message ?? "";
      const isQuota =
        msg.includes("quota") ||
        msg.includes("rate") ||
        msg.includes("429");
      toast.error(
        isQuota
          ? "Gemini API quota exceeded. Please get a new API key from a new project at aistudio.google.com, or enable billing."
          : msg,
        { duration: 8000 }
      );
      setSubmitting(false);
    }
  };

  if (!started) return <StartScreen onStart={() => setStarted(true)} />;

  /* ── styles shared ── */
  const card = {
    background: "#111118",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">

      {/* ── Top progress bar + section tabs ── */}
      <div
        className="rounded-xl px-5 py-4 space-y-3"
        style={card}
      >
        {/* Section tabs */}
        <div className="flex gap-1.5 flex-wrap">
          {assessmentQuestions.map((s, i) => {
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
                  background: active
                    ? "rgba(139,92,246,0.2)"
                    : done
                    ? "rgba(139,92,246,0.08)"
                    : "rgba(255,255,255,0.04)",
                  color: active ? "#c4b5fd" : done ? "#7c3aed" : "rgba(255,255,255,0.35)",
                  border: active
                    ? "1px solid rgba(139,92,246,0.4)"
                    : done
                    ? "1px solid rgba(139,92,246,0.2)"
                    : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {done && !active ? <CheckCircle2 className="inline h-3 w-3 mr-1" /> : null}
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            <span>{progressPct}% complete</span>
            <span>{totalAnswered} / {allQuestions.length} answered</span>
          </div>
          <div className="h-1 w-full rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
            <div
              className="h-1 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%`, background: "linear-gradient(90deg,#7c3aed,#a78bfa)" }}
            />
          </div>
        </div>
      </div>

      {/* ── Section card ── */}
      <div className="rounded-xl overflow-hidden" style={card}>

        {/* Section header */}
        <div
          className="px-6 py-4 flex items-center gap-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(139,92,246,0.05)" }}
        >
          <span
            className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(139,92,246,0.2)", color: "#c4b5fd" }}
          >
            {currentSection + 1}
          </span>
          <div>
            <p className="text-white font-semibold text-base leading-tight">
              {assessmentQuestions[currentSection].title}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
              {sectionQuestions.length} question{sectionQuestions.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Questions */}
        <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          {sectionQuestions.map((q, qIdx) => {
            const answer = answers[sectionStart + qIdx];
            return (
              <div key={qIdx} className="px-6 py-5 space-y-3">
                {/* Question */}
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                  <span className="font-bold mr-2" style={{ color: "rgba(139,92,246,0.7)" }}>
                    Q{qIdx + 1}.
                  </span>
                  {q.question}
                </p>

                {/* Options */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {OPTIONS.map((opt) => {
                    const selected = answer === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(qIdx, opt.value)}
                        className="py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer text-center"
                        style={
                          selected
                            ? {
                                background: "rgba(124,58,237,0.25)",
                                border: "1px solid rgba(139,92,246,0.6)",
                                color: "#c4b5fd",
                              }
                            : {
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.45)",
                              }
                        }
                        onMouseEnter={(e) => {
                          if (!selected) {
                            e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!selected) {
                            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                          }
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

        {/* Navigation footer */}
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.2)" }}
        >
          {/* Previous */}
          <button
            onClick={handlePrev}
            disabled={isFirstSection}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
            style={{
              background: isFirstSection ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: isFirstSection ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.7)",
              cursor: isFirstSection ? "not-allowed" : "pointer",
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>

          {/* Section dots */}
          <div className="hidden sm:flex items-center gap-1.5">
            {assessmentQuestions.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === currentSection ? "20px" : "6px",
                  height: "6px",
                  background: i === currentSection
                    ? "#7c3aed"
                    : answers.slice(sectionOffsets[i], i < totalSections - 1 ? sectionOffsets[i + 1] : allQuestions.length).every((a) => a !== null)
                    ? "rgba(139,92,246,0.5)"
                    : "rgba(255,255,255,0.12)",
                }}
              />
            ))}
          </div>

          {/* Next / Submit */}
          {isLastSection ? (
            <button
              onClick={handleSubmit}
              disabled={!allCurrentDone || saving || submitting}
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-150"
              style={{
                background:
                  !allCurrentDone || saving || submitting
                    ? "rgba(124,58,237,0.3)"
                    : "linear-gradient(135deg,#7c3aed,#6d28d9)",
                cursor:
                  !allCurrentDone || saving || submitting ? "not-allowed" : "pointer",
              }}
            >
              {saving || submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating Report… please wait
                </>
              ) : (
                <>
                  Submit & Generate Report
                  <CheckCircle2 className="h-4 w-4" />
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!allCurrentDone}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150"
              style={{
                background: allCurrentDone
                  ? "linear-gradient(135deg,#7c3aed,#6d28d9)"
                  : "rgba(124,58,237,0.3)",
                color: allCurrentDone ? "#fff" : "rgba(255,255,255,0.4)",
                cursor: allCurrentDone ? "pointer" : "not-allowed",
              }}
            >
              Next Section
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
