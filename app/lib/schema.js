import { z } from "zod";
import { annualRevenues, businessModels } from "@/data/formOptions";
import { customerTypes } from "@/data/formOptions";
import { marketTypes } from "@/data/formOptions";
import { businessChallenges } from "@/data/formOptions";

export const onboardingSchema = z.object({

    businessName: z.string().min(1, "Business name is required"),

    industry: z.string().min(1, "Industry is required"),

    subSegment: z.string().min(1, "Industry Segment name is required"),

    businessModel: z.enum(businessModels, {
        required_error: "Please select a valid business model"
    }),

    customerType: z.enum(customerTypes, {
        required_error: "Please select a valid customer type"
    }),

    annualRevenue: z.enum(annualRevenues, {
        required_error: "Please select your revenue range"
    }),

    employeeCount: z.coerce
        .number({
            required_error: "Employee count is required",
            invalid_type_error: "Employee count must be a number",
        })
        .int("Employee count must be an integer")
        .min(1, "Employee count must be at least 1"),


    marketType: z.enum(marketTypes, {
        required_error: "Please select your market type",
    }),

    businessChallenges: z
        .array(z.enum(businessChallenges))
        .min(1, "Select at least one business challenge"),

    topProducts: z
        .string()
        .transform((val) =>
            val
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean)
        )
        .refine((arr) => arr.length > 0, {
            message: "Please enter at least one product/service",
        }),
});