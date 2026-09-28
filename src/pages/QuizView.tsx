import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  Sparkles,
  XCircle,
  Award,
} from 'lucide-react';
import { COURSES } from '../data/courses';
import { useLearning } from '../context/LearningContext';

interface QuizViewProps {
  courseId: string;
  onExit: () => void;
  onReturnToLessons: () => void;
  onGoToDashboard: () => void;
  onExploreCourses: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  courseId,
  onExit,
  onReturnToLessons,
  onGoToDashboard,
  onExploreCourses,
}) => {
  const { submitQuiz, getEnrollment } = useLearning();
  const course = COURSES.find((c) => c.id === courseId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    totalQuestions: number;
    scorePercent: number;
    passed: boolean;
  } | null>(null);

  if (!course || !course.quiz) {
    return (
      <div className="p-8 text-center text-white">
        <p>Quiz not found for this course.</p>
        <button onClick={onExit} className="text-teal-400 mt-2">Back</button>
      </div>
    );
  }

  const quiz = course.quiz;
  const questions = quiz.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const enrollment = getEnrollment(courseId);

  const isOptionSelected = (optionIndex: number) => {
    return selectedAnswers[currentQuestion.id] === optionIndex;
  };

  const handleSelectOption = (optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: optionIndex,
    });
  };

  const allAnswered = questions.every((q) => selectedAnswers[q.id] !== undefined);

  const handleSubmitQuiz = async () => {
    const evalResult = await submitQuiz(course.id, quiz.id, selectedAnswers);
    setResult(evalResult);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setSubmitted(false);
    setResult(null);
  };

  // If user completed all 10 lessons AND passed the quiz, show full Course Completion Screen!
  const allLessonsCompleted =
    (enrollment?.completedLessonIds.length || 0) >= course.lessonsCount;
  const isEntireCourseFinished = submitted && result?.passed && allLessonsCompleted;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between">
      {/* Header */}
      <header className="h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1.5 text-xs font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Course</span>
          </button>
          <div className="min-w-0">
            <h1 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate max-w-sm">
              {course.title}
            </h1>
            <p className="text-[11px] text-zinc-400 font-mono">
              Knowledge Examination · Passing: {quiz.passingScorePercent}%
            </p>
          </div>
        </div>

        {!submitted && (
          <div className="text-xs font-mono text-zinc-400">
            Question <span className="text-teal-400 font-bold">{currentQuestionIndex + 1}</span> of {questions.length}
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        {!submitted ? (
          /* Active Examination View */
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                <span>Quiz Progress</span>
                <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-teal-400 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">
                  {currentQuestion.type === 'true-false' ? 'True or False' : 'Multiple Choice'}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Options list */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const selected = isOptionSelected(idx);
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${
                        selected
                          ? 'bg-purple-950/40 border-purple-500 text-white shadow-md shadow-purple-950/30'
                          : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 h-6 rounded-full text-xs font-mono flex items-center justify-center border shrink-0 ${
                            selected
                              ? 'border-teal-400 bg-teal-400 text-zinc-950 font-bold'
                              : 'border-zinc-700 text-zinc-400'
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {selected && <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 disabled:opacity-30 disabled:pointer-events-none text-xs font-medium text-zinc-200 transition-colors"
              >
                Previous Question
              </button>

              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                  className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-colors flex items-center gap-1.5"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  disabled={!allAnswered}
                  onClick={handleSubmitQuiz}
                  className="px-6 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 disabled:opacity-40 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-teal-500/20 flex items-center gap-1.5"
                >
                  <span>Submit Quiz</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : isEntireCourseFinished ? (
          /* SECTION 19: COURSE COMPLETION SCREEN */
          <div className="rounded-3xl border border-teal-400/40 bg-zinc-950 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-purple-600/20 blur-3xl pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-teal-400/10 border border-teal-400/40 text-teal-400 mx-auto flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-teal-400 tracking-wider uppercase">
                Curriculum Milestone Reached
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Course Completed!
              </h2>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Congratulations! You have completed all 10 lessons and passed the final knowledge assessment for <span className="text-teal-400 font-semibold">{course.title}</span>.
              </p>
            </div>

            {/* Achievement Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto py-2 text-left">
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-[11px] text-zinc-400 block">Status</span>
                <span className="text-xs font-bold text-teal-400 font-mono">100% Completed</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-[11px] text-zinc-400 block">Final Score</span>
                <span className="text-xs font-bold text-white font-mono">{result?.scorePercent}%</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-[11px] text-zinc-400 block">Lessons Finished</span>
                <span className="text-xs font-bold text-white font-mono">{course.lessonsCount} of {course.lessonsCount}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-[11px] text-zinc-400 block">Completion Date</span>
                <span className="text-xs font-bold text-white font-mono">{new Date().toLocaleDateString()}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={onGoToDashboard}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-teal-500/20"
              >
                Back to Dashboard
              </button>
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-medium text-xs transition-colors"
              >
                Explore More Courses
              </button>
            </div>
          </div>
        ) : (
          /* SECTION 18: QUIZ RESULTS & EXPLANATIONS REVIEW */
          <div className="space-y-8">
            {/* Score Banner */}
            <div
              className={`rounded-2xl border p-6 sm:p-8 text-center space-y-4 ${
                result?.passed
                  ? 'bg-purple-950/30 border-purple-500/40 text-teal-100'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-200'
              }`}
            >
              <div className="text-xs font-mono uppercase tracking-wider text-teal-400">
                {result?.passed ? 'Knowledge Check Passed' : 'Keep Practicing'}
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white">
                {result?.score} / {result?.totalQuestions}{' '}
                <span className="text-2xl sm:text-3xl text-zinc-400">
                  ({result?.scorePercent}%)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                {result?.passed
                  ? `Outstanding work! You met the passing standard of ${quiz.passingScorePercent}%.`
                  : `You scored below the ${quiz.passingScorePercent}% threshold. Review the detailed explanations below and retry!`}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleRetry}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry Quiz</span>
                </button>
                <button
                  onClick={onReturnToLessons}
                  className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-colors"
                >
                  Continue Course
                </button>
                <button
                  onClick={onGoToDashboard}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors"
                >
                  Dashboard
                </button>
              </div>
            </div>

            {/* Answer Breakdown / Explanations */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Detailed Answer Review
              </h3>

              <div className="space-y-4">
                {questions.map((q, idx) => {
                  const userAnswer = selectedAnswers[q.id];
                  const isCorrect = userAnswer === q.correctAnswerIndex;

                  return (
                    <div
                      key={q.id}
                      className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <span className="text-xs font-mono text-zinc-400">
                            Question {idx + 1}
                          </span>
                          <h4 className="text-sm font-semibold text-white">
                            {q.question}
                          </h4>
                        </div>
                        <div className="shrink-0 mt-0.5">
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1 text-xs text-teal-400 font-mono font-medium">
                              <CheckCircle2 className="w-4 h-4" /> Correct
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs text-zinc-300 font-mono font-medium">
                              <XCircle className="w-4 h-4" /> Incorrect
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Your Answer vs Correct Answer */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div
                          className={`p-3 rounded-xl border ${
                            isCorrect
                              ? 'bg-purple-950/20 border-purple-800/40 text-teal-300'
                              : 'bg-slate-900/40 border-slate-800 text-slate-300'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-mono block opacity-75">
                            Your Selection:
                          </span>
                          <span>{q.options[userAnswer] || 'None selected'}</span>
                        </div>

                        {!isCorrect && (
                          <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-800/40 text-teal-300">
                            <span className="text-[10px] uppercase font-mono block opacity-75">
                              Correct Answer:
                            </span>
                            <span>{q.options[q.correctAnswerIndex]}</span>
                          </div>
                        )}
                      </div>

                      {/* Explanation */}
                      <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-xs text-zinc-300">
                        <span className="font-semibold text-zinc-400 block mb-0.5">Why:</span>
                        <span>{q.explanation}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
