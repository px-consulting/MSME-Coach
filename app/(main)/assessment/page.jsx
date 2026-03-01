import { getUserOnboardingStatus } from '@/actions/user';
import { getLatestBusinessmaturityReport, getLatestFundingReadinessReport } from '@/actions/assessment';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ClipboardCheck,
  DollarSign,
  NotepadText,
  ArrowRight,
  Trophy,
  Calendar,
} from 'lucide-react';

const assessmentTools = [
  {
    icon: <ClipboardCheck className="h-6 w-6 text-violet-400" />,
    title: '360° Business Maturity Assessment',
    description:
      'A 29-question diagnostic across 6 dimensions of your business that reveals your maturity level and key growth opportunities.',
    href: '/assessment/business-maturity',
    isLive: true,
    sections: [
      'Strategic Planning',
      'Operational Efficiency',
      'Financial Management',
      'Marketing & Sales',
      'Leadership & Team',
      'Founders Legacy',
    ],
  },
  {
    icon: <DollarSign className="h-6 w-6 text-emerald-400" />,
    title: 'Funding Readiness Check',
    description:
      "Assess your business's readiness for external funding across 10 investor dimensions and get an AI-powered funding report.",
    href: '/assessment/funding-readiness',
    isLive: true,
    sections: [
      'Legal & Compliance',
      'Business Plan',
      'Financial Health',
      'Audited Financials',
      'Funding Purpose',
      'Debt-to-Equity Ratio',
      'CAC & LTV Metrics',
      'Scalability',
      'Exit Plan',
      'ROI Timeline',
    ],
  },
  {
    icon: <NotepadText className="h-6 w-6 text-violet-400" />,
    title: 'Business Plan Generator',
    description:
      'Answer a few guided questions and let AI build a comprehensive, investor-ready business plan tailored to your business.',
    href: '#',
    isLive: false,
    sections: [],
  },
];

const Assessment = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  if (!isOnboarded) {
    redirect(`/onboarding?redirectTo=${encodeURIComponent('/assessment')}`);
  }

  let latestAssessment = null;
  let latestFunding = null;
  try { latestAssessment = await getLatestBusinessmaturityReport(); } catch (_) {}
  try { latestFunding = await getLatestFundingReadinessReport(); } catch (_) {}

  return (
    <div className="space-y-10">
      {/* Page header */}
      <div className="space-y-2">
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
          Growth Tools
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Assessment Hub
        </h1>
        <p className="text-white/40 max-w-xl text-sm leading-relaxed">
          Diagnose your business with expert-crafted assessments and receive
          AI-generated reports tailored to your specific context.
        </p>
      </div>

      {/* Previous result banners */}
      <div className="space-y-3">
        {latestAssessment && (
          <div className="rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ background: '#13101e', border: '1px solid rgba(139,92,246,0.25)' }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                <Trophy className="h-5 w-5 text-violet-400" />
              </div>
              <div>
                <p className="text-white font-semibold">
                  360° Maturity: <span className="text-violet-400">{latestAssessment.maturityLevel}</span>
                </p>
                <p className="text-white/40 text-sm flex items-center gap-1.5 mt-0.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(latestAssessment.dateTaken).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  &nbsp;·&nbsp; Score: {latestAssessment.score}%
                </p>
              </div>
            </div>
            <Link href="/assessment/result">
              <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white border-0 cursor-pointer gap-2 whitespace-nowrap">
                View Report <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
        {latestFunding && (
          <div className="rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ background: '#0a1a12', border: '1px solid rgba(16,185,129,0.25)' }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-white font-semibold">
                  Funding Readiness: <span className="text-emerald-400">{latestFunding.readinessLevel}</span>
                </p>
                <p className="text-white/40 text-sm flex items-center gap-1.5 mt-0.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(latestFunding.issuedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  &nbsp;·&nbsp; Score: {Math.round(latestFunding.score)}%
                </p>
              </div>
            </div>
            <Link href="/assessment/funding-readiness/result">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 cursor-pointer gap-2 whitespace-nowrap">
                View Report <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Assessment cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {assessmentTools.map((tool, index) => (
          <div
            key={index}
            className="gradient-border-card rounded-xl p-6 flex flex-col justify-between gap-6"
          >
            <div className="space-y-4">
              {/* Icon + badge row */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                  {tool.icon}
                </div>
                {!tool.isLive && (
                  <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 whitespace-nowrap">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-white font-semibold text-base mb-1.5">
                  {tool.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Section tags */}
              {tool.sections.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {tool.sections.map((s, si) => (
                    <span
                      key={si}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.07] text-white/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <div>
              {tool.isLive ? (
                <Link href={tool.href} className="block">
                  <Button className={`w-full text-white border-0 cursor-pointer gap-2 ${index === 1 ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-violet-600 hover:bg-violet-700'}`}>
                    {(index === 0 && latestAssessment) || (index === 1 && latestFunding)
                      ? 'Retake Assessment'
                      : 'Start Assessment'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button
                  disabled
                  className="w-full cursor-not-allowed opacity-40 border border-white/10 bg-transparent text-white/40"
                >
                  Coming Soon
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assessment;
