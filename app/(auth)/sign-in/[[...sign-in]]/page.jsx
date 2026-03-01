'use client';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@/lib/supabase/client';

export default function SignInPage() {
  const supabase = createClient();
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-2xl border border-white/10 bg-[#111118]">
        <h1 className="text-2xl font-semibold text-white mb-6 text-center">Sign in to MSME Coach</h1>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          view="sign_in"
          providers={['google']}
          redirectTo={typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : '/auth/callback'}
          showLinks={true}
        />
      </div>
    </div>
  );
}
