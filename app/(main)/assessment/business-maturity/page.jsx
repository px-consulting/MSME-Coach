import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Quiz from '../_components/quiz';

const BusinessMaturityPage = () => {
    return (
        <div className='container mx-auto space-y-8 py-6'>
            <div className='flex flex-col space-y-2 mx-2'>
                <Link href="/assessment">
                    <Button variant="link" className="gap-2 pl-0 cursor-pointer">
                        <ArrowLeft className='h-4 w-4' />
                        Back to main page
                    </Button>
                </Link>  
                <div>
                  <h1 className='text-4xl md:text-6xl font-bold gradient-title'>Business Maturity Assessment</h1>  
                  <p className='text-muted-foreground'>
                    Assess your business maturity by answering simple questions
                  </p>
                </div>
            </div>
            <Quiz />
        </div>
    )
}

export default BusinessMaturityPage;