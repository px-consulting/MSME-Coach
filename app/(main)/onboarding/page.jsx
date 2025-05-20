import React from 'react'
import OnboardingForm from './_components/OnboardingForm';
import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
const OnboardingPage = async() => {
   const {isOnboarded}=await getUserOnboardingStatus();
   if(isOnboarded){
     redirect("/");
   }
  return (
     <main>
        <OnboardingForm />
     </main>
  )
}

export default OnboardingPage;