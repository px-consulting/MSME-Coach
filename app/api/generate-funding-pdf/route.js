import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { marked } from 'marked';
import path from 'path';
import fs from 'fs';

const CONSULTATION_URL = 'https://pxconsulting.in/contact-pxc/';

const readinessMeta = {
  'Investor Ready': { color: '#059669', light: '#d1fae5', label: 'Investor Ready',  desc: 'Your business demonstrates strong appeal across all key investor evaluation criteria.' },
  'Near Ready':     { color: '#2563eb', light: '#dbeafe', label: 'Near Ready',       desc: 'Solid fundamentals are in place with a few targeted improvements needed before fundraising.' },
  'Developing':     { color: '#7c3aed', light: '#ede9fe', label: 'Developing',       desc: 'Moderate readiness — with focused preparation, you can become investor-ready within 6–12 months.' },
  'Early Stage':    { color: '#d97706', light: '#fef3c7', label: 'Early Stage',      desc: 'Basic foundations exist. Extensive groundwork is required before approaching external investors.' },
  'Not Ready':      { color: '#dc2626', light: '#fee2e2', label: 'Not Ready',        desc: 'Fundamental gaps must be addressed immediately before pursuing any form of external funding.' },
};

function mdToHtml(md) {
  if (!md) return '';
  marked.setOptions({ gfm: true, breaks: true });
  const renderer = new marked.Renderer();
  renderer.heading = ({ text, depth }) => `<h${depth} class="report-h${depth}">${text}</h${depth}>`;
  return marked.parse(md, { renderer });
}

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
    const buf = fs.readFileSync(path.join(process.cwd(), 'public', 'PXC Logo.png'));
    return `data:image/png;base64,${buf.toString('base64')}`;
  } catch { return null; }
}

function buildHtml({ user, businessInsight, assessment, sectionScores }) {
  const meta = readinessMeta[assessment.readinessLevel] ?? readinessMeta['Early Stage'];
  const dateStr = new Date(assessment.issuedAt).toLocaleDateString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });
  const timeStr = new Date(assessment.issuedAt).toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', hour12: true,
  });

  const logoSrc = getLogo();
  const logoHtml = logoSrc
    ? `<img src="${logoSrc}" alt="PX Consulting" style="height:40px;width:auto;object-fit:contain;"/>`
    : `<span style="font-weight:700;font-size:18px;color:#064e3b;">PX Consulting</span>`;

  const reportHtml = mdToHtml(assessment.report);
  const biz = businessInsight ?? {};

  const bizItems = [
    ['Business Name',  biz.businessName],
    ['Industry',       biz.industry],
    ['Sub-segment',    biz.subSegment],
    ['Business Model', biz.businessModel],
    ['Customer Type',  biz.customerType],
    ['Annual Revenue', biz.annualRevenue],
    ['Employees',      biz.employeeCount],
    ['Market Type',    biz.marketType],
  ].filter(([, v]) => v != null);

  const topProducts = Array.isArray(biz.topProducts) ? biz.topProducts.join(', ') : (biz.topProducts ?? '');
  const challenges  = Array.isArray(biz.businessChallenges) ? biz.businessChallenges.join(', ') : (biz.businessChallenges ?? '');

  const bars = (sectionScores ?? []).map(({ title, score }) => {
    const lvl = score >= 80 ? 'Investor Ready' : score >= 60 ? 'Near Ready' : score >= 40 ? 'Developing' : score >= 20 ? 'Early Stage' : 'Not Ready';
    return sectionBar(title, score, readinessMeta[lvl].color);
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>Funding Readiness Report</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', system-ui, sans-serif; font-size: 13px; color: #111827; background: #fff; line-height: 1.6; }
  .page { max-width: 794px; margin: 0 auto; }

  /* Header */
  .header {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 55%, #047857 100%);
    padding: 36px 48px 32px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .header-logo-wrap { background:#fff; border-radius:10px; padding:8px 14px; display:inline-block; }
  .header-right { text-align:right; }
  .header-tag { color:#6ee7b7; font-size:11px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; margin-bottom:4px; }
  .header-main { color:#fff; font-size:20px; font-weight:700; line-height:1.2; }

  /* Meta bar */
  .meta-bar { background:#f9fafb; border-bottom:1px solid #e5e7eb; padding:14px 48px; display:flex; gap:32px; flex-wrap:wrap; }
  .meta-item { display:flex; flex-direction:column; }
  .meta-label { font-size:10px; font-weight:600; color:#9ca3af; text-transform:uppercase; letter-spacing:.08em; }
  .meta-value { font-size:13px; font-weight:600; color:#111827; margin-top:2px; }

  /* Section */
  .section { padding:32px 48px; border-bottom:1px solid #f3f4f6; }
  .section:last-child { border-bottom:none; }
  .section-title {
    font-size:11px; font-weight:700; color:#059669; text-transform:uppercase;
    letter-spacing:.12em; margin-bottom:20px;
    display:flex; align-items:center; gap:8px;
  }
  .section-title::after { content:''; flex:1; height:1px; background:#e5e7eb; }

  /* Score overview */
  .score-overview { display:flex; align-items:center; gap:40px; }
  .score-gauge { flex-shrink:0; }
  .score-details { flex:1; }
  .readiness-badge {
    display:inline-flex; align-items:center; gap:6px;
    padding:6px 14px; border-radius:999px;
    font-size:13px; font-weight:700; margin-bottom:12px;
  }
  .readiness-desc { font-size:13px; color:#4b5563; line-height:1.6; margin-bottom:16px; }
  .score-range { font-size:11px; color:#9ca3af; font-weight:500; }

  /* Business grid */
  .biz-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
  .biz-item { background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:10px 14px; }
  .biz-item-label { font-size:10px; color:#9ca3af; font-weight:600; text-transform:uppercase; letter-spacing:.07em; }
  .biz-item-value { font-size:13px; color:#111827; font-weight:600; margin-top:3px; }
  .biz-full { grid-column:1 / -1; background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:10px 14px; }

  /* Section bars */
  .section-bar-wrap { margin-bottom:16px; }
  .section-bar-header { display:flex; justify-content:space-between; margin-bottom:6px; }
  .section-bar-title { font-size:13px; font-weight:500; color:#374151; }
  .section-bar-pct { font-size:13px; font-weight:700; }

  /* Report body */
  .report-body { color:#1f2937; }
  .report-body .report-h1 { font-size:20px; font-weight:800; color:#064e3b; margin:28px 0 12px; padding-bottom:8px; border-bottom:2px solid #059669; page-break-after:avoid; }
  .report-body .report-h2 { font-size:16px; font-weight:700; color:#065f46; margin:24px 0 10px; padding-left:12px; border-left:3px solid #059669; page-break-after:avoid; }
  .report-body .report-h3 { font-size:14px; font-weight:700; color:#047857; margin:18px 0 8px; page-break-after:avoid; }
  .report-body p { margin-bottom:10px; color:#374151; line-height:1.7; }
  .report-body ul, .report-body ol { padding-left:20px; margin-bottom:12px; }
  .report-body li { margin-bottom:5px; color:#374151; line-height:1.6; }
  .report-body strong { color:#111827; font-weight:700; }
  .report-body blockquote { border-left:3px solid #059669; padding:8px 16px; margin:12px 0; background:#f0fdf4; border-radius:0 6px 6px 0; color:#4b5563; font-style:italic; }
  .report-body table { width:100%; border-collapse:collapse; margin-bottom:14px; font-size:12px; }
  .report-body th { background:#d1fae5; color:#065f46; font-weight:700; padding:8px 10px; text-align:left; }
  .report-body td { padding:7px 10px; border-bottom:1px solid #e5e7eb; }
  .report-body tr:nth-child(even) td { background:#f9fafb; }
  .report-body hr { border:none; border-top:1px solid #e5e7eb; margin:20px 0; }

  /* CTA */
  .cta-section { background:linear-gradient(135deg,#064e3b 0%,#065f46 100%); padding:36px 48px; text-align:center; }
  .cta-tag { display:inline-block; background:rgba(110,231,183,0.2); color:#6ee7b7; font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; padding:4px 12px; border-radius:999px; margin-bottom:14px; }
  .cta-heading { color:#fff; font-size:22px; font-weight:800; margin-bottom:10px; }
  .cta-sub { color:rgba(255,255,255,0.65); font-size:13px; margin-bottom:24px; line-height:1.6; max-width:480px; margin-left:auto; margin-right:auto; }
  .cta-btn { display:inline-block; background:#059669; color:#fff; font-size:14px; font-weight:700; padding:13px 32px; border-radius:999px; text-decoration:none; letter-spacing:.02em; }
  .cta-footer { color:rgba(255,255,255,0.35); font-size:10px; margin-top:20px; }

  /* Footer */
  .doc-footer { background:#f9fafb; border-top:1px solid #e5e7eb; padding:14px 48px; display:flex; justify-content:space-between; align-items:center; font-size:10px; color:#9ca3af; }

  @media print { .section { page-break-inside:avoid; } .cta-section { page-break-inside:avoid; } }
</style>
</head>
<body>
<div class="page">

  <div class="header">
    <div class="header-logo-wrap">${logoHtml}</div>
    <div class="header-right">
      <div class="header-tag">Confidential Report</div>
      <div class="header-main">Funding Readiness<br/>Assessment Report</div>
    </div>
  </div>

  <div class="meta-bar">
    <div class="meta-item"><span class="meta-label">Prepared for</span><span class="meta-value">${user?.name ?? '—'}</span></div>
    <div class="meta-item"><span class="meta-label">Business</span><span class="meta-value">${biz.businessName ?? '—'}</span></div>
    <div class="meta-item"><span class="meta-label">Assessment Date</span><span class="meta-value">${dateStr}</span></div>
    <div class="meta-item"><span class="meta-label">Time</span><span class="meta-value">${timeStr}</span></div>
    <div class="meta-item"><span class="meta-label">Powered by</span><span class="meta-value">PX Consulting AI</span></div>
  </div>

  <div class="section">
    <div class="section-title">Overall Funding Readiness Score</div>
    <div class="score-overview">
      <div class="score-gauge">${radialGauge(Math.round(assessment.score), meta.color)}</div>
      <div class="score-details">
        <div class="readiness-badge" style="background:${meta.light};color:${meta.color}">
          <span>●</span> ${assessment.readinessLevel} — ${meta.label}
        </div>
        <p class="readiness-desc">${meta.desc}</p>
        <div class="score-range">
          Not Ready &lt;20% &nbsp;·&nbsp; Early Stage 20–39% &nbsp;·&nbsp; Developing 40–59% &nbsp;·&nbsp; Near Ready 60–79% &nbsp;·&nbsp; Investor Ready ≥80%
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Business Profile</div>
    <div class="biz-grid">
      ${bizItems.map(([l, v]) => `<div class="biz-item"><div class="biz-item-label">${l}</div><div class="biz-item-value">${v}</div></div>`).join('')}
      ${topProducts ? `<div class="biz-full"><div class="biz-item-label">Top Products / Services</div><div class="biz-item-value">${topProducts}</div></div>` : ''}
      ${challenges  ? `<div class="biz-full"><div class="biz-item-label">Key Business Challenges</div><div class="biz-item-value">${challenges}</div></div>` : ''}
    </div>
  </div>

  <div class="section">
    <div class="section-title">10-Dimension Performance Breakdown</div>
    ${bars}
  </div>

  <div class="section">
    <div class="section-title">Detailed Analysis, Gaps &amp; Recommendations</div>
    <div class="report-body">${reportHtml}</div>
  </div>

  <div class="cta-section">
    <div class="cta-tag">Next Step</div>
    <div class="cta-heading">Accelerate Your Path to Funding</div>
    <p class="cta-sub">
      Our PX Consulting team has helped MSMEs raise capital from angels, VCs, and financial institutions.
      Let us build a tailored fundraising roadmap — from structuring your pitch to connecting you with the right investors.
    </p>
    <a href="${CONSULTATION_URL}" class="cta-btn">Book a Free Consultation →</a>
    <div class="cta-footer">Visit pxconsulting.in · Perception Management Consulting Pvt. Ltd.</div>
  </div>

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
    if (!assessment) return NextResponse.json({ message: 'Assessment data required' }, { status: 400 });

    const html = buildHtml({ user, businessInsight, assessment, sectionScores });

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true, margin: { top: '0', right: '0', bottom: '0', left: '0' } });
    await browser.close();

    const bizName = businessInsight?.businessName?.replace(/\s+/g, '_') ?? 'Report';
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Funding_Readiness_Report_${bizName}.pdf"`,
      },
    });
  } catch (err) {
    console.error('Funding PDF error:', err);
    return NextResponse.json({ message: 'Failed to generate PDF', error: err.message }, { status: 500 });
  }
}
