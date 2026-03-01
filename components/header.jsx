'use client';
import React, { useEffect, useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { ChartPie, ChevronDown, ClipboardCheck, LogOut, NotepadText, Phone, StarsIcon } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const CONSULTATION_URL = 'https://pxconsulting.in/contact-pxc/';

const Header = () => {
    const [user, setUser] = useState(null);
    const supabase = createClient();
    const router = useRouter();

    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => setUser(user));

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/');
        router.refresh();
    };

    return (
        <div className='fixed top-0 w-full z-50 border-b border-white/[0.08]'
            style={{ background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(20px)' }}>
            <nav className='container mx-auto px-6 py-3 flex items-center justify-between'>

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <div className="bg-white rounded-lg px-2 py-1">
                        <Image
                            src="/PXC Logo.png"
                            alt="PX Consulting logo"
                            height={36}
                            width={120}
                            className="h-8 w-auto object-contain"
                        />
                    </div>
                </Link>

                {/* Right-side actions */}
                <div className='flex items-center gap-3'>
                    {user ? (
                        <>
                            {/* Book a Consultation */}
                            <a href={CONSULTATION_URL} target="_blank" rel="noopener noreferrer">
                                <Button
                                    variant="ghost"
                                    className="text-white/70 hover:text-white hover:bg-white/10 cursor-pointer gap-2 hidden md:flex"
                                >
                                    <Phone size={15} />
                                    Book a Consultation
                                </Button>
                            </a>

                            {/* Growth Tools dropdown */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="flex items-center gap-2 text-white/70 hover:text-white hover:bg-white/10 cursor-pointer border border-white/10"
                                    >
                                        <StarsIcon className="h-4 w-4 text-violet-400" />
                                        <span className="hidden md:block">Growth Tools</span>
                                        <ChevronDown className="h-3 w-3" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="w-60 bg-[#111118] border border-white/10 text-white/80"
                                >
                                    <DropdownMenuItem asChild className="hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white">
                                        <Link href="/" className="flex items-center gap-2 cursor-pointer">
                                            <ChartPie className="h-4 w-4 text-violet-400" />
                                            Dashboard
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuSeparator className="bg-white/[0.07]" />

                                    <DropdownMenuLabel className="text-white/30 text-[10px] uppercase tracking-widest px-2 py-1.5">
                                        Assessments
                                    </DropdownMenuLabel>
                                    <DropdownMenuItem asChild className="hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white">
                                        <Link href="/assessment" className="flex items-center gap-2 cursor-pointer">
                                            <ClipboardCheck className="h-4 w-4 text-violet-400" />
                                            360° Business Maturity
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className="hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white">
                                        <Link href="/assessment" className="flex items-center gap-2 cursor-pointer">
                                            <ClipboardCheck className="h-4 w-4 text-violet-400" />
                                            Funding Readiness
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuSeparator className="bg-white/[0.07]" />

                                    <DropdownMenuItem asChild className="hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white">
                                        <Link href="/" className="flex items-center gap-2 cursor-pointer">
                                            <NotepadText className="h-4 w-4 text-violet-400" />
                                            Generate Business Plan
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* User avatar + sign out */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="w-9 h-9 rounded-full overflow-hidden border border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500">
                                        {user.user_metadata?.avatar_url ? (
                                            <Image
                                                src={user.user_metadata.avatar_url}
                                                alt="User avatar"
                                                width={36}
                                                height={36}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-violet-700 flex items-center justify-center text-white text-sm font-semibold">
                                                {(user.user_metadata?.full_name ?? user.email ?? 'U')[0].toUpperCase()}
                                            </div>
                                        )}
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-52 bg-[#111118] border border-white/10 text-white/80">
                                    <DropdownMenuLabel className="text-white/50 text-xs truncate">
                                        {user.email}
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-white/[0.07]" />
                                    <DropdownMenuItem
                                        onClick={handleSignOut}
                                        className="flex items-center gap-2 cursor-pointer hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white text-red-400 hover:text-red-300"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Sign Out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <Link href="/sign-in">
                            <Button className="cursor-pointer bg-violet-600 hover:bg-violet-700 text-white border-0">
                                Get Started
                            </Button>
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
