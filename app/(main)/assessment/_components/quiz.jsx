"use client";
import assessmentQuestions from '@/questions/businessMaturityAssessment';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from '@/hooks/use-fetch';
import { saveAssessment } from '@/actions/assessment';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const options = [
  { label: "Strongly Disagree", value: 1 },
  { label: "Disagree", value: 2 },
  { label: "Neutral", value: 3 },
  { label: "Agree", value: 4 },
  { label: "Strongly Agree", value: 5 },
];


const Quiz = () => {

  const allQuestions = assessmentQuestions.flatMap(section => section.questions.map(question => ({
    section: section.title,
    question
  })));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(allQuestions.length).fill(null));
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const router=useRouter();

  const {
    loading: savingResult,
    fn: saveAssessmentFn,
    data: resultData,
    setData: setResultdata
  } = useFetch(saveAssessment)

  const handleAnswer = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = value;
    setAnswers(updatedAnswers);
  };

  const getMaturityLevel = (score) => {
    if (score >= 81) return "Leader";
    if (score >= 61) return "Achiever";
    if (score >= 41) return "Organised";
    if (score >= 21) return "Beginner";
    return "Struggler";
  };


  const handleSubmit = async () => {
    if (submitting) return; 
    setSubmitting(true);
    console.log("Submitted answers:", answers);
    const sum = answers.reduce((acc, curr) => acc + curr, 0);
    const totalPoints = answers.length * 5;
    const score = parseFloat(((sum / totalPoints) * 100).toFixed(2));
    const maturityLevel = getMaturityLevel(score);
    try {
      const response = await saveAssessmentFn(allQuestions,answers, score, maturityLevel);
      toast.success("Assessment Completed!");
      router.push('/assessment/result');
    } catch (error) {
      toast.error(error.message);
       setSubmitting(false);
    }
  };

  if (!isQuizStarted) {
    return (
      <Card className="mx-2">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Ready to assess your business maturity?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground text-center'>
            This assessment consists 29 Questions under 5 Sections designed
            to get a 360 degree diagnosis of your business.Take your time
            and complete the assessment patiently.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full gradient cursor-pointer" onClick={() => { setIsQuizStarted(true) }}>
            Start Assessment
          </Button>
        </CardFooter>
      </Card>
    )
  }

  const current = allQuestions[currentQuestion];

  return (
    <Card className="mx-2">
      <CardHeader>
        <CardTitle className="text-xl text-center">
          Section: {current.section}
        </CardTitle>
        <CardTitle className="text-lg text-center mt-2">
          Question {currentQuestion + 1} of {allQuestions.length}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-lg font-medium text-center mb-6">{current.question}</p>
        <div className="flex flex-col space-y-2">
          {options.map(opt => (
            <Button
              key={opt.value}
              variant={answers[currentQuestion] === opt.value ? "default" : "outline"}
              onClick={() => handleAnswer(opt.value)}
              className="w-full"
            >
              {opt.label}
            </Button>
          ))}
        </div>
      </CardContent>

      <CardFooter className="justify-between">
        <Button
          onClick={() => setCurrentQuestion(prev => Math.max(prev - 1, 0))}
          disabled={currentQuestion === 0}
          variant="outline"
          className="cursor-pointer"
        >
          Previous
        </Button>

        {currentQuestion === allQuestions.length - 1 ? (
          <Button
            onClick={handleSubmit}
            className="gradient cursor-pointer"
            disabled={answers[currentQuestion] === null || savingResult || submitting}
          >
            {savingResult ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Saving Assessment
              </>
            ) : (
              "Submit Assessment"
            )}
          </Button>
        ) : (
          <Button
            onClick={() => setCurrentQuestion(prev => Math.min(prev + 1, allQuestions.length - 1))}
            className="gradient cursor-pointer"
            disabled={answers[currentQuestion] === null}

          >
            Next
          </Button>
        )}
      </CardFooter>

    </Card>
  )
}

export default Quiz;