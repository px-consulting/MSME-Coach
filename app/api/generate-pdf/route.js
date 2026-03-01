import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { marked } from 'marked';
import path from 'path';
import fs from 'fs';

const CONSULTATION_URL = 'https://pxconsulting.in/contact-pxc/';

const maturityMeta = {
  Leader:    { color: '#10b981', light: '#d1fae5', label: 'Industry Leader',    desc: 'Your business demonstrates exceptional maturity across all dimensions.' },
  Achiever:  { color: '#3b82f6', light: '#dbeafe', label: 'High Achiever',      desc: 'Your business shows strong maturity with clear systems and processes.' },
  Organised: { color: '#8b5cf6', light: '#ede9fe', label: 'Well Organised',     desc: 'Your business has solid foundations with good operational practices.' },
  Beginner:  { color: '#f59e0b', light: '#fef3c7', label: 'Early Stage',        desc: 'Your business is developing its systems and needs structured support.' },
  Struggler: { color: '#ef4444', light: '#fee2e2', label: 'Needs Attention',    desc: 'Your business requires immediate focus on core operational fundamentals.' },
};

// Convert markdown to clean HTML, stripping heading anchor links
function mdToHtml(md) {
  if (!md) return '';
  marked.setOptions({ gfm: true, breaks: true });
  const renderer = new marked.Renderer();
  // Remove the anchor icon that markdown renderers add to headings
  renderer.heading = ({ text, depth }) => `<h${depth} class="report-h${depth}">${text}</h${depth}>`;
  return marked.parse(md, { renderer });
}

// SVG horizontal bar chart for a single section
function sectionBar(title, pct, color) {
  const w = 420;
  const filled = Math.round((pct / 100) * w);
  return `
  <div class="section-bar-wrap">
    <div class="section-bar-header">
      <span class="section-bar-title">${title}</span>
      <span class="section-bar-pct" style="color:${color}">${pct}%</span>
    </div>
    <svg width="100%" height="12" viewBox="0 0 ${w} 12" xmlns="http://www.w3.org/2000/svg" style="display:block">
      <rect x="0" y="0" width="${w}" height="12" rx="6" fill="#e5e7eb"/>
      <rect x="0" y="0" width="${filled}" height="12" rx="6" fill="${color}"/>
    </svg>
  </div>`;
}

// Radial gauge SVG for overall score
function radialGauge(pct, color) {
  const r = 70, cx = 90, cy = 90;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return `
  <svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#e5e7eb" stroke-width="14"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="14"
      stroke-dasharray="${dash} ${circ}" stroke-dashoffset="${circ * 0.25}" stroke-linecap="round"
      transform="rotate(-90 ${cx} ${cy})"/>
    <text x="${cx}" y="${cy - 8}" text-anchor="middle" font-size="28" font-weight="700" fill="${color}">${pct}%</text>
    <text x="${cx}" y="${cy + 16}" text-anchor="middle" font-size="11" fill="#6b7280">Overall Score</text>
  </svg>`;
}

function getLogo() {
  try {
    const logoPath = path.join(process.cwd(), 'public', 'PXC Logo.png');
    const logoBuffer = fs.readFileSync(logoPath);
    return `data:image/png;base64,${logoBuffer.toString('base64')}`;
  } catch {
    return null;
  }
}

function buildHtml({ user, businessInsight, assessment, sectionScores }) {
  const meta = maturityMeta[assessment.maturityLevel] ?? maturityMeta.Beginner;
  const dateStr = new Date(assessment.dateTaken).toLocaleDateString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });
  const timeStr = new Date(assessment.dateTaken).toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', hour12: true,
  });

  const logoSrc = getLogo();
  const logoHtml = logoSrc
    ? `<img src="${logoSrc}" alt="PX Consulting" style="height:40px;width:auto;object-fit:contain;" />`
    : `<span style="font-weight:700;font-size:18px;color:#1e1b4b;">PX Consulting</span>`;

  const reportHtml = mdToHtml(assessment.report);

  const biz = businessInsight ?? {};
  const bizItems = [
    ['Business Name',   biz.businessName],
    ['Industry',        biz.industry],
    ['Sub-segment',     biz.subSegment],
    ['Business Model',  biz.businessModel],
    ['Customer Type',   biz.customerType],
    ['Annual Revenue',  biz.annualRevenue],
    ['Employees',       biz.employeeCount],
    ['Market Type',     biz.marketType],
  ].filter(([, v]) => v != null);

  const topProducts = Array.isArray(biz.topProducts) ? biz.topProducts.join(', ') : (biz.topProducts ?? '');
  const challenges  = Array.isArray(biz.businessChallenges) ? biz.businessChallenges.join(', ') : (biz.businessChallenges ?? '');

  const sectionBars = (sectionScores ?? []).map(({ title, score }) => {
    const lvl = score >= 81 ? 'Leader' : score >= 61 ? 'Achiever' : score >= 41 ? 'Organised' : score >= 21 ? 'Beginner' : 'Struggler';
    return sectionBar(title, score, maturityMeta[lvl].color);
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>360° Business Maturity Report</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 13px;
    color: #111827;
    background: #ffffff;
    line-height: 1.6;
  }

  /* ── Page structure ── */
  .page { max-width: 794px; margin: 0 auto; }

  /* ── Header ── */
  .header {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4c1d95 100%);
    padding: 36px 48px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-logo-wrap {
    background: #ffffff;
    border-radius: 10px;
    padding: 8px 14px;
    display: inline-block;
  }
  .header-right { text-align: right; }
  .header-title {
    color: #c4b5fd;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .header-main {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
  }

  /* ── Meta bar ── */
  .meta-bar {
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    padding: 14px 48px;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }
  .meta-item { display: flex; flex-direction: column; }
  .meta-label { font-size: 10px; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.08em; }
  .meta-value { font-size: 13px; font-weight: 600; color: #111827; margin-top: 2px; }

  /* ── Section wrapper ── */
  .section { padding: 32px 48px; border-bottom: 1px solid #f3f4f6; }
  .section:last-child { border-bottom: none; }

  .section-title {
    font-size: 11px;
    font-weight: 700;
    color: #8b5cf6;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .section-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }

  /* ── Score overview ── */
  .score-overview {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .score-gauge { flex-shrink: 0; }
  .score-details { flex: 1; }
  .maturity-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .maturity-desc {
    font-size: 13px;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 16px;
  }
  .score-range-label { font-size: 11px; color: #9ca3af; font-weight: 500; }

  /* ── Business profile grid ── */
  .biz-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .biz-item {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 10px 14px;
  }
  .biz-item-label { font-size: 10px; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; }
  .biz-item-value { font-size: 13px; color: #111827; font-weight: 600; margin-top: 3px; }
  .biz-full {
    grid-column: 1 / -1;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 10px 14px;
  }

  /* ── Section bars ── */
  .section-bar-wrap { margin-bottom: 16px; }
  .section-bar-header { display: flex; justify-content: space-between; margin-bottom: 6px; }
  .section-bar-title { font-size: 13px; font-weight: 500; color: #374151; }
  .section-bar-pct { font-size: 13px; font-weight: 700; }

  /* ── Report body (AI content) ── */
  .report-body { color: #1f2937; }
  .report-body .report-h1 {
    font-size: 20px; font-weight: 800; color: #1e1b4b;
    margin: 28px 0 12px; padding-bottom: 8px;
    border-bottom: 2px solid #8b5cf6;
    page-break-after: avoid;
  }
  .report-body .report-h2 {
    font-size: 16px; font-weight: 700; color: #312e81;
    margin: 24px 0 10px; padding-left: 12px;
    border-left: 3px solid #8b5cf6;
    page-break-after: avoid;
  }
  .report-body .report-h3 {
    font-size: 14px; font-weight: 700; color: #4c1d95;
    margin: 18px 0 8px;
    page-break-after: avoid;
  }
  .report-body p { margin-bottom: 10px; color: #374151; line-height: 1.7; }
  .report-body ul, .report-body ol { padding-left: 20px; margin-bottom: 12px; }
  .report-body li { margin-bottom: 5px; color: #374151; line-height: 1.6; }
  .report-body strong { color: #111827; font-weight: 700; }
  .report-body em { color: #6b7280; }
  .report-body blockquote {
    border-left: 3px solid #8b5cf6;
    padding: 8px 16px;
    margin: 12px 0;
    background: #faf5ff;
    border-radius: 0 6px 6px 0;
    color: #4b5563;
    font-style: italic;
  }
  .report-body table { width: 100%; border-collapse: collapse; margin-bottom: 14px; font-size: 12px; }
  .report-body th { background: #ede9fe; color: #4c1d95; font-weight: 700; padding: 8px 10px; text-align: left; }
  .report-body td { padding: 7px 10px; border-bottom: 1px solid #e5e7eb; }
  .report-body tr:nth-child(even) td { background: #fafafa; }
  .report-body hr { border: none; border-top: 1px solid #e5e7eb; margin: 20px 0; }

  /* ── CTA ── */
  .cta-section {
    background: linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%);
    padding: 36px 48px;
    text-align: center;
  }
  .cta-tag {
    display: inline-block;
    background: rgba(196,181,253,0.2);
    color: #c4b5fd;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 999px;
    margin-bottom: 14px;
  }
  .cta-heading { color: #ffffff; font-size: 22px; font-weight: 800; margin-bottom: 10px; }
  .cta-sub { color: rgba(255,255,255,0.65); font-size: 13px; margin-bottom: 24px; line-height: 1.6; max-width: 480px; margin-left: auto; margin-right: auto; }
  .cta-btn {
    display: inline-block;
    background: #7c3aed;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    padding: 13px 32px;
    border-radius: 999px;
    text-decoration: none;
    letter-spacing: 0.02em;
  }
  .cta-footer {
    color: rgba(255,255,255,0.35);
    font-size: 10px;
    margin-top: 20px;
  }

  /* ── Footer ── */
  .doc-footer {
    background: #f9fafb;
    border-top: 1px solid #e5e7eb;
    padding: 14px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    color: #9ca3af;
  }

  /* ── Print / page breaks ── */
  @media print {
    .section { page-break-inside: avoid; }
    .cta-section { page-break-inside: avoid; }
  }
</style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <div class="header">
    <div class="header-logo-wrap">${logoHtml}</div>
    <div class="header-right">
      <div class="header-title">Confidential Report</div>
      <div class="header-main">360° Business Maturity<br/>Assessment Report</div>
    </div>
  </div>

  <!-- META BAR -->
  <div class="meta-bar">
    <div class="meta-item">
      <span class="meta-label">Prepared for</span>
      <span class="meta-value">${user?.name ?? '—'}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Business</span>
      <span class="meta-value">${biz.businessName ?? '—'}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Assessment Date</span>
      <span class="meta-value">${dateStr}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Time</span>
      <span class="meta-value">${timeStr}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Powered by</span>
      <span class="meta-value">PX Consulting AI</span>
    </div>
  </div>

  <!-- SCORE OVERVIEW -->
  <div class="section">
    <div class="section-title">Overall Score</div>
    <div class="score-overview">
      <div class="score-gauge">
        ${radialGauge(Math.round(assessment.score), meta.color)}
      </div>
      <div class="score-details">
        <div class="maturity-badge" style="background:${meta.light};color:${meta.color}">
          <span>●</span> ${assessment.maturityLevel} — ${meta.label}
        </div>
        <p class="maturity-desc">${meta.desc}</p>
        <div class="score-range-label">
          Struggler &lt;21% &nbsp;·&nbsp; Beginner 21–40% &nbsp;·&nbsp; Organised 41–60% &nbsp;·&nbsp; Achiever 61–80% &nbsp;·&nbsp; Leader 81–100%
        </div>
      </div>
    </div>
  </div>

  <!-- BUSINESS PROFILE -->
  <div class="section">
    <div class="section-title">Business Profile</div>
    <div class="biz-grid">
      ${bizItems.map(([label, value]) => `
        <div class="biz-item">
          <div class="biz-item-label">${label}</div>
          <div class="biz-item-value">${value}</div>
        </div>`).join('')}
      ${topProducts ? `
        <div class="biz-full">
          <div class="biz-item-label">Top Products / Services</div>
          <div class="biz-item-value">${topProducts}</div>
        </div>` : ''}
      ${challenges ? `
        <div class="biz-full">
          <div class="biz-item-label">Key Business Challenges</div>
          <div class="biz-item-value">${challenges}</div>
        </div>` : ''}
    </div>
  </div>

  <!-- SECTION SCORES -->
  <div class="section">
    <div class="section-title">Section-by-Section Performance</div>
    ${sectionBars}
  </div>

  <!-- AI REPORT CONTENT -->
  <div class="section">
    <div class="section-title">Detailed Analysis &amp; Insights</div>
    <div class="report-body">${reportHtml}</div>
  </div>

  <!-- CONSULTATION CTA -->
  <div class="cta-section">
    <div class="cta-tag">Next Step</div>
    <div class="cta-heading">Turn Insights into Action</div>
    <p class="cta-sub">
      Your report reveals clear opportunities for growth. Our PX Consulting team can help you build a
      tailored roadmap — from strategy to execution — so you scale faster and smarter.
    </p>
    <a href="${CONSULTATION_URL}" class="cta-btn">Book a Free Consultation →</a>
    <div class="cta-footer">Visit pxconsulting.in · Perception Management Consulting Pvt. Ltd.</div>
  </div>

  <!-- DOCUMENT FOOTER -->
  <div class="doc-footer">
    <span>© 2025 Perception Management Consulting Pvt. Ltd. — Confidential</span>
    <span>Generated on ${dateStr} · MSME Coach Platform</span>
  </div>

</div>
</body>
</html>`;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { user, businessInsight, assessment, sectionScores } = body;

    if (!assessment) {
      return NextResponse.json({ message: 'Assessment data is required' }, { status: 400 });
    }

    const html = buildHtml({ user, businessInsight, assessment, sectionScores });

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    await browser.close();

    const bizName = businessInsight?.businessName?.replace(/\s+/g, '_') ?? 'Report';
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Business_Maturity_Report_${bizName}.pdf"`,
      },
    });
  } catch (err) {
    console.error('PDF generation error:', err);
    return NextResponse.json({ message: 'Failed to generate PDF', error: err.message }, { status: 500 });
  }
}
