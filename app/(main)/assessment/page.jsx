import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react'

const Assessment = async () => {
    const { isOnboarded } = await getUserOnboardingStatus();
    if (!isOnboarded) {
        redirect(`/onboarding?redirectTo=${encodeURIComponent('/assessment')}`);
    }
    return (
        <div>Assessment</div>
    )
}

export default Assessment