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
