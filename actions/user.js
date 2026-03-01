"use server";

import { db } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";


export async function createBusinessInsight(data) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const dbUser = await db.user.findUnique({ where: { authUserId: user.id } });
    if (!dbUser) throw new Error('User not found!');

    try {
        const businessInsight = await db.businessInsight.create({
            data: {
                userId: dbUser.id,
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
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    try {
        const dbUser = await db.user.findUnique({
            where: { authUserId: user.id },
            select: { businessInsight: true }
        });
        return {
            isOnboarded: !!dbUser?.businessInsight
        };
    } catch (error) {
        console.error("Error checking onboarding status: ", error);
        throw new Error("Failed to check onboarding status");
    }
}
