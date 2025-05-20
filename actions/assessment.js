"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function saveAssessment(answers, score, maturityLevel) {
    const { userId } = await auth();
    if (!userId) {
        throw new Error("Unauthorized");
    }
    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId
        }
    });
    if (!user) {
        throw new Error("User not found");
    }
    try {
        const assessment = await db.assessment.create({
            data: {
                userId: user.id,
                score: score,
                answers: answers,
                maturityLevel: maturityLevel,
                report: 'abc',
            }
        });
        return assessment;
    } catch (error) {
        console.error('Error saving assessment: ', error);
        throw new Error('Failed to save assessment');
    }

}