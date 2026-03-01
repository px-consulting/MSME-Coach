"use server";
import { db } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const answerLabels = {
    1: "Strongly Disagree",
    2: "Disagree",
    3: "Agree",
    4: "Strongly Agree",
};

const generateBusinessMaturityReport = async (user, allQuestions, answers, score, maturityLevel) => {
    const businessInsights = await db.businessInsight.findUnique({
        where: { userId: user.id },
    });

    if (!businessInsights) {
        throw new Error("Business profile not found. Please complete your profile first.");
    }

    const questionAnswerPairs = allQuestions
        .map((q, i) => `Q: ${q.section} — ${q.question}\nA: ${answerLabels[answers[i]] ?? "Not answered"}`)
        .join("\n\n");

    const prompt = `You are an expert business analyst. Generate a detailed markdown report based on this MSME business maturity assessment.

## Business Owner
- Name: ${user.name}
- Email: ${user.email}

## Business Profile
- Business Name: ${businessInsights.businessName}
- Industry: ${businessInsights.industry} / ${businessInsights.subSegment}
- Business Model: ${businessInsights.businessModel}
- Customer Type: ${businessInsights.customerType}
- Annual Revenue: ${businessInsights.annualRevenue}
- Employees: ${businessInsights.employeeCount}
- Market: ${businessInsights.marketType}
- Top Products/Services: ${businessInsights.topProducts.join(", ")}
- Key Challenges: ${businessInsights.businessChallenges.join(", ")}

## Assessment Result
- Score: ${score}%
- Maturity Level: ${maturityLevel}

## Assessment Responses
${questionAnswerPairs}

## Required Report Sections
1. Executive Summary
2. Maturity Level Analysis
3. Section-wise Diagnosis
4. Key Strengths
5. Areas for Improvement
6. Recommendations for Scaling

Use clear, actionable, professional language. Format the entire response as clean markdown.`;

    try {
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
            max_tokens: 4096,
        });
        return completion.choices[0].message.content.trim();
    } catch (error) {
        console.error("Groq API error:", error?.message);
        throw new Error(`Report generation failed: ${error?.message ?? "unknown error"}`);
    }
};

export async function saveAssessment(allQuestions, answers, score, maturityLevel) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const dbUser = await db.user.findUnique({ where: { authUserId: user.id } });
    if (!dbUser) throw new Error("User not found");

    try {
        const report = await generateBusinessMaturityReport(dbUser, allQuestions, answers, score, maturityLevel);
        return await db.assessment.create({
            data: { userId: dbUser.id, score, answers, maturityLevel, report },
        });
    } catch (error) {
        console.error("saveAssessment error:", error?.message);
        throw new Error(error?.message ?? "Failed to save assessment");
    }
}

export async function getLatestBusinessmaturityReport() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const dbUser = await db.user.findUnique({ where: { authUserId: user.id } });
    if (!dbUser) throw new Error("User not found");

    try {
        return await db.assessment.findFirst({
            where: { userId: dbUser.id },
            orderBy: { dateTaken: "desc" },
        });
    } catch (error) {
        console.error("getLatestReport error:", error);
        throw new Error("Failed to fetch your business maturity report");
    }
}

export async function getFullAssessmentData() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const dbUser = await db.user.findUnique({
        where: { authUserId: user.id },
        include: { businessInsight: true },
    });
    if (!dbUser) throw new Error("User not found");

    const assessment = await db.assessment.findFirst({
        where: { userId: dbUser.id },
        orderBy: { dateTaken: "desc" },
    });

    return {
        user: { name: dbUser.name, email: dbUser.email },
        businessInsight: dbUser.businessInsight,
        assessment,
    };
}

// ─── Funding Readiness ────────────────────────────────────────────────────────

const readinessAnswerLabels = {
    1: "Strongly Disagree",
    2: "Disagree",
    3: "Agree",
    4: "Strongly Agree",
};

const generateFundingReadinessReport = async (user, businessInsights, allQuestions, answers, score, readinessLevel) => {
    const questionAnswerPairs = allQuestions
        .map((q, i) => `Q: ${q.section} — ${q.question}\nA: ${readinessAnswerLabels[answers[i]] ?? "Not answered"}`)
        .join("\n\n");

    const biz = businessInsights ?? {};

    const prompt = `You are a senior investment analyst and funding advisor. Generate a comprehensive, investor-grade Funding Readiness Report in markdown for an MSME business owner.

## Business Owner
- Name: ${user.name}
- Email: ${user.email}

## Business Profile
- Business Name: ${biz.businessName ?? "N/A"}
- Industry: ${biz.industry ?? "N/A"} / ${biz.subSegment ?? "N/A"}
- Business Model: ${biz.businessModel ?? "N/A"}
- Customer Type: ${biz.customerType ?? "N/A"}
- Annual Revenue: ${biz.annualRevenue ?? "N/A"}
- Employees: ${biz.employeeCount ?? "N/A"}
- Market: ${biz.marketType ?? "N/A"}
- Top Products/Services: ${Array.isArray(biz.topProducts) ? biz.topProducts.join(", ") : (biz.topProducts ?? "N/A")}
- Key Challenges: ${Array.isArray(biz.businessChallenges) ? biz.businessChallenges.join(", ") : (biz.businessChallenges ?? "N/A")}

## Funding Readiness Score
- Overall Score: ${score}%
- Readiness Level: ${readinessLevel}

## Assessment Responses (10 Dimensions)
${questionAnswerPairs}

## Report Structure Required
Generate the following sections in clean, professional markdown:

1. **Executive Summary** — Concise overview of funding readiness, key findings, and overall verdict.
2. **Readiness Level Analysis** — Deep-dive into what the ${readinessLevel} level means for this business and what investors will see.
3. **Dimension-by-Dimension Breakdown** — Analyse each of the 10 funding readiness dimensions based on responses. Be specific and actionable.
4. **Investor Attractiveness Factors** — What makes this business appealing to investors right now.
5. **Critical Gaps & Red Flags** — Honest assessment of what could deter investors and must be addressed immediately.
6. **30-60-90 Day Action Plan** — Specific, prioritised actions to improve funding readiness in the short term.
7. **Recommended Funding Instruments** — Based on the profile, suggest suitable funding types (angel, VC, PE, debt, grants, etc.) with rationale.
8. **Strategic Recommendations** — Long-term strategic moves to maximise valuation and investor appeal.

Use professional, direct, and insightful language. Be specific to the business context. Format as clean markdown with proper headings, bullet points, and emphasis.`;

    const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 4096,
    });
    return completion.choices[0].message.content.trim();
};

export async function saveFundingReadiness(allQuestions, answers, score, readinessLevel) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const dbUser = await db.user.findUnique({
        where: { authUserId: user.id },
        include: { businessInsight: true },
    });
    if (!dbUser) throw new Error("User not found");

    try {
        const report = await generateFundingReadinessReport(
            dbUser, dbUser.businessInsight, allQuestions, answers, score, readinessLevel
        );
        return await db.fundingReadiness.create({
            data: { userId: dbUser.id, score, answers, readinessLevel, report },
        });
    } catch (error) {
        console.error("saveFundingReadiness error:", error?.message);
        throw new Error(error?.message ?? "Failed to save funding readiness assessment");
    }
}

export async function getLatestFundingReadinessReport() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const dbUser = await db.user.findUnique({ where: { authUserId: user.id } });
    if (!dbUser) throw new Error("User not found");

    return db.fundingReadiness.findFirst({
        where: { userId: dbUser.id },
        orderBy: { issuedAt: "desc" },
    });
}

export async function getFullFundingReadinessData() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const dbUser = await db.user.findUnique({
        where: { authUserId: user.id },
        include: { businessInsight: true },
    });
    if (!dbUser) throw new Error("User not found");

    const assessment = await db.fundingReadiness.findFirst({
        where: { userId: dbUser.id },
        orderBy: { issuedAt: "desc" },
    });

    return {
        user: { name: dbUser.name, email: dbUser.email },
        businessInsight: dbUser.businessInsight,
        assessment,
    };
}
