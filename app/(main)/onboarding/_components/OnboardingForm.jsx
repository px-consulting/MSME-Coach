"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema } from "@/app/lib/schema";
import { useRouter,useSearchParams } from "next/navigation";
import { annualRevenues, businessModels } from "@/data/formOptions";
import { customerTypes } from "@/data/formOptions";
import { marketTypes } from "@/data/formOptions";
import { businessChallenges } from "@/data/formOptions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { createBusinessInsight } from "@/actions/user";



const OnboardingForm = () => {

  // post-onboarding handler
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";


  // custom hook for api calls
  const {
    loading: createLoading,
    fn: createBusinessInsightFn,
    data: createResult,
  } = useFetch(createBusinessInsight);

  // zod functions
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm({
    resolver: zodResolver(onboardingSchema),
  });

  // on submit function
  const onSubmit = async (values) => {
    try {
      console.log(values);
      const response=await createBusinessInsightFn(values);
      toast.success("Your profile is completed!");
      router.push(redirectTo);
    } catch (error) {
      toast.error(error.message);
    }
  }

  // manage business challenges
  const selected = watch("businessChallenges") || [];
  const [open, setOpen] = useState(false);

  const toggleChallenge = (challenge) => {
    const updated = selected.includes(challenge)
      ? selected.filter((item) => item !== challenge)
      : [...selected, challenge];

    setValue("businessChallenges", updated, { shouldValidate: true });
  };

  useEffect(() => {
    setValue("businessChallenges", selected);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-[650px] mt-10 mx-2">
        <CardHeader>
          <CardTitle className="gradient-title text-4xl text-center">Please Complete Your Profile</CardTitle>
          <CardDescription className="text-center">
            Share your basic business details so we can create a detailed
            and personalized diagnostic report for you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                type="text"
                placeholder="Enter your business name"
                {...register("businessName")}></Input>
              {errors.businessName && (
                <p className="text-sm text-red-500">
                  {errors.businessName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                type="text"
                placeholder="Eg: Services"
                {...register("industry")}></Input>
              {errors.industry && (
                <p className="text-sm text-red-500">
                  {errors.industry.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subSegment">Sub Industry</Label>
              <Input
                id="subSegment"
                type="text"
                placeholder="Eg: Staffing and Recruiting"
                {...register("subSegment")}></Input>
              {errors.subSegment && (
                <p className="text-sm text-red-500">
                  {errors.subSegment.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessModel">Business Model</Label>
              <Select
                onValueChange={(value) => {
                  setValue("businessModel", value);
                }}>
                <SelectTrigger id="businessModel" className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {businessModels.map((model, index) => (
                    <SelectItem value={model} key={index}>{model}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.businessModel && (
                <p className="text-sm text-red-500">
                  {errors.businessModel.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerType">Customer Type</Label>
              <Select
                onValueChange={(value) => {
                  setValue("customerType", value);
                }}>
                <SelectTrigger id="customerType" className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {customerTypes.map((type, index) => (
                    <SelectItem value={type} key={index}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.customerType && (
                <p className="text-sm text-red-500">
                  {errors.customerType.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="marketType">Market Type</Label>
              <Select
                onValueChange={(value) => {
                  setValue("marketType", value);
                }}>
                <SelectTrigger id="marketType" className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {marketTypes.map((type, index) => (
                    <SelectItem value={type} key={index}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.marketType && (
                <p className="text-sm text-red-500">
                  {errors.marketType.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="annualRevenue">Annual Revenue</Label>
              <Select
                onValueChange={(value) => {
                  setValue("annualRevenue", value);
                }}>
                <SelectTrigger id="annualRevenue" className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {annualRevenues.map((rev, index) => (
                    <SelectItem value={rev} key={index}>{rev}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.annualRevenue && (
                <p className="text-sm text-red-500">
                  {errors.annualRevenue.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="employeeCount">Employee Count</Label>
              <Input
                id="employeeCount"
                type="number"
                placeholder="Enter a number"
                min="1"
                {...register("employeeCount")}></Input>
              {errors.employeeCount && (
                <p className="text-sm text-red-500">
                  {errors.employeeCount.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Business Challenges</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {selected.length > 0 ? selected.join(", ") : "Select challenges"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search challenges..." />
                    <CommandList>
                      {businessChallenges.map((challenge, index) => (
                        <CommandItem key={index} onSelect={() => toggleChallenge(challenge)}>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={`challenge-${index}`}
                              checked={selected.includes(challenge)}
                              onCheckedChange={() => toggleChallenge(challenge)}
                            />
                            <Label htmlFor={`challenge-${index}`}>{challenge}</Label>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {errors.businessChallenges && (
                <p className="text-sm text-red-500">
                  {errors.businessChallenges.message}
                </p>
              )}
            </div>

            <div className='space-y-2'>
              <Label htmlFor="topProducts">Top Products/Services</Label>
              <Input
                id="topProducts"
                placeholder="eg., recruiting, hr-solution, hiring"
                {...register("topProducts")}
              />
              <p className='text-sm text-gray-800'>
                Separate multiple products/services with commas
              </p>
              {errors.topProducts && (
                <p className='text-sm text-red-500'>
                  {errors.topProducts.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full gradient cursor-pointer">
              Complete Profile
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default OnboardingForm;