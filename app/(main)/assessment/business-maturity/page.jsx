import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Quiz from '../_components/quiz';

const BusinessMaturityPage = () => {
  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link href="/assessment">
        <Button
          variant="ghost"
          className="gap-2 pl-0 text-white/50 hover:text-white hover:bg-transparent cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Assessment Hub
        </Button>
      </Link>

      {/* Page header */}
      <div className="space-y-1">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          360° Business Maturity Assessment
        </h1>
        <p className="text-white/40 text-sm">
          Answer each question honestly to receive the most accurate diagnosis of your business.
        </p>
      </div>

      <Quiz />
    </div>
  );
};

export default BusinessMaturityPage;
