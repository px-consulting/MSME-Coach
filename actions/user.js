"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


export async function createBusinessInsight(data) {
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
        throw new Error('User not found!');
    }
    try {
        const businessInsight = await db.businessInsight.create({
            data: {
                userId: user.id,
                businessName: data.businessName,
                industry: data.industry,
                subSegment: data.subSegment,
                businessModel: data.businessModel,
                customerType: data.customerType,
                annualRevenue: data.annualRevenue,
                employeeCount: data.employeeCount,
                topProducts: data.topProducts,
                marketType: data.marketType,
                businessChallenges: data.businessChallenges
            }
        });
        return businessInsight;
    } catch (error) {
        console.error('Error in creating business insight: ', error);
        throw new Error('Failed to update business data');
    }
}

export async function getUserOnboardingStatus() {
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
        throw new Error('User not found!');
    }

    try {
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
            select: {
                businessInsight: true
            }
        });
        return {
            isOnboarded: !!user?.businessInsight
        }
    } catch (error) {
        console.error("Error checking onboarding status: ", error);
        throw new Error("Failed to check onboarding status");
    }
}