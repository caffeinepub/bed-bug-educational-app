import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, RotateCcw, Loader2 } from 'lucide-react';
import { useQuizQuestionsBySection, useCalculateQuizResult } from '@/hooks/useQueries';
import { QuizSectionType } from '../backend';

interface QuizProps {
  sectionType: QuizSectionType;
  sectionTitle: string;
}

export function Quiz({ sectionType, sectionTitle }: QuizProps) {
  const { data: questions, isLoading } = useQuizQuestionsBySection(sectionType);
  const calculateResult = useCalculateQuizResult();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState<number | null>(null);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Coming Soon</CardTitle>
          <CardDescription>
            Quiz questions for {sectionTitle} are being prepared.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isCorrect = selectedAnswer === currentQuestion.options[Number(currentQuestion.correctAnswerIndex)];

  const handleAnswerSelect = (answer: string) => {
    if (!showFeedback) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;
    setShowFeedback(true);
    setUserAnswers([...userAnswers, selectedAnswer]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setShowFeedback(false);
    } else {
      // Quiz completed
      const allAnswers = [...userAnswers, selectedAnswer];
      calculateResult.mutate(
        { userAnswers: allAnswers, sectionType },
        {
          onSuccess: (result) => {
            setFinalScore(Number(result.score));
            setQuizCompleted(true);
          },
        }
      );
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setUserAnswers([]);
    setShowFeedback(false);
    setQuizCompleted(false);
    setFinalScore(null);
  };

  if (quizCompleted && finalScore !== null) {
    const percentage = Math.round((finalScore / questions.length) * 100);
    const isPassing = percentage >= 70;

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {isPassing ? (
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            ) : (
              <XCircle className="h-6 w-6 text-orange-600" />
            )}
            Quiz Complete!
          </CardTitle>
          <CardDescription>Your results for {sectionTitle}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="mb-4 text-6xl font-bold text-primary">{percentage}%</div>
            <p className="text-lg text-muted-foreground">
              You answered {finalScore} out of {questions.length} questions correctly
            </p>
          </div>

          <Alert className={isPassing ? 'border-green-600/50 bg-green-600/5' : 'border-orange-600/50 bg-orange-600/5'}>
            <AlertDescription>
              {isPassing ? (
                <span className="text-green-700 dark:text-green-400">
                  Great job! You have a solid understanding of {sectionTitle.toLowerCase()}.
                </span>
              ) : (
                <span className="text-orange-700 dark:text-orange-400">
                  Consider reviewing the {sectionTitle} section to strengthen your knowledge.
                </span>
              )}
            </AlertDescription>
          </Alert>

          <Button onClick={handleRestartQuiz} className="w-full" variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Retake Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect} disabled={showFeedback}>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 rounded-lg border p-4 transition-colors ${
                  showFeedback
                    ? option === currentQuestion.options[Number(currentQuestion.correctAnswerIndex)]
                      ? 'border-green-600 bg-green-600/10'
                      : option === selectedAnswer
                      ? 'border-red-600 bg-red-600/10'
                      : 'border-border'
                    : selectedAnswer === option
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer text-sm font-medium leading-relaxed"
                >
                  {option}
                </Label>
                {showFeedback && option === currentQuestion.options[Number(currentQuestion.correctAnswerIndex)] && (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                )}
                {showFeedback && option === selectedAnswer && !isCorrect && (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
              </div>
            ))}
          </div>
        </RadioGroup>

        {showFeedback && (
          <Alert className={isCorrect ? 'border-green-600/50 bg-green-600/5' : 'border-orange-600/50 bg-orange-600/5'}>
            <AlertDescription className="space-y-2">
              <p className="font-semibold">
                {isCorrect ? (
                  <span className="text-green-700 dark:text-green-400">Correct!</span>
                ) : (
                  <span className="text-orange-700 dark:text-orange-400">Not quite right.</span>
                )}
              </p>
              <p className="text-sm">{currentQuestion.explanation}</p>
            </AlertDescription>
          </Alert>
        )}

        <div className="flex gap-3">
          {!showFeedback ? (
            <Button onClick={handleSubmitAnswer} disabled={!selectedAnswer} className="flex-1">
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="flex-1">
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
