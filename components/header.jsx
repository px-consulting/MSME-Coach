import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { ChartPie, ChevronDown, ClipboardCheck, DollarSign, NotepadText, Phone, StarsIcon } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';
const Header = async() => {
    await checkUser();
    return (
        <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b-2'>
            <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
                <Link href="/">
                    <Image
                        src={"/logo.png"}
                        alt="msme coach logo"
                        height={60}
                        width={200}
                        className="h-12 w-auto object-contain"
                    />

                </Link>
                <div className='flex items-center space-x-4'>
                    <SignedIn>
                        <Link href="/" className='flex items-center gap-2'>
                            <Button className="cursor-pointer">
                                <Phone size={18} />
                                <span className='hidden md:inline'>Book a Consultation</span>
                            </Button>
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button className="flex items-center gap-2 gradient cursor-pointer">
                                    <StarsIcon className="h-4 w-4" />
                                    <span className="hidden md:block">Growth Tools</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-60">
                                <DropdownMenuItem asChild>
                                    <Link href="/" className="flex items-center gap-2">
                                        <ChartPie className="h-4 w-4" />
                                        Dashboard
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/assessment" className="flex items-center gap-2">
                                        <ClipboardCheck className="h-4 w-4" />
                                        360° Business Maturity Assessment
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2"
                                    >
                                        <DollarSign className="h-4 w-4" />
                                        Funding Readiness
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2"
                                    >
                                        <NotepadText className="h-4 w-4" />
                                        Generate Business Plan
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/">
                            <Button className="cursor-pointer">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                avatarBox: "w-10 h-10"
                            }
                        }} />
                    </SignedIn>
                </div>
            </nav>
        </div>
    )
}

export default Header;