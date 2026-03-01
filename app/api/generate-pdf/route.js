import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { html, fileName = 'Business_Maturity_Report' } = body;

    if (!html) {
      return NextResponse.json({ message: 'HTML content is required' }, { status: 400 });
    }

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}.pdf"`,
      },
    });
  } catch (err) {
    console.error('PDF generation error:', err);
    return NextResponse.json({ message: 'Failed to generate PDF' }, { status: 500 });
  }
}
