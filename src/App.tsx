import { useState, useEffect, useRef } from 'react';
import { stories, Story, Question } from './data';

interface QuestionTime {
  questionId: number;
  timeSeconds: number;
  correct: boolean;
}

function QuestionCard({ question, onAnswered }: { question: Question; onAnswered: (correct: boolean, timeSeconds: number) => void }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    const timeTaken = (Date.now() - startTimeRef.current) / 1000;
    setSelectedAnswer(index);
    setIsAnswered(true);
    onAnswered(index === question.correctAnswer, timeTaken);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  const getOptionClass = (index: number) => {
    if (!isAnswered) {
      return 'border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 cursor-pointer';
    }
    if (index === question.correctAnswer) {
      return 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300';
    }
    if (index === selectedAnswer && !isCorrect) {
      return 'border-red-500 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300';
    }
    return 'border-gray-200 dark:border-gray-700 opacity-50';
  };

  const getOptionIcon = (index: number) => {
    if (!isAnswered) return null;
    if (index === question.correctAnswer) {
      return <span className="text-green-600 dark:text-green-400 text-lg">✓</span>;
    }
    if (index === selectedAnswer && !isCorrect) {
      return <span className="text-red-600 dark:text-red-400 text-lg">✗</span>;
    }
    return null;
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="mb-6 last:mb-0">
      <p className="font-medium text-gray-800 dark:text-gray-200 mb-3 text-sm md:text-base">
        {question.text}
      </p>
      <div className="grid gap-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={isAnswered}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 text-left transition-all duration-200 ${getOptionClass(index)}`}
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-300">
              {optionLabels[index]}
            </span>
            <span className="flex-1 text-sm md:text-base text-gray-800 dark:text-gray-200">{option}</span>
            {getOptionIcon(index)}
          </button>
        ))}
      </div>
      {isAnswered && !isCorrect && (
        <div className="mt-2 px-4 py-2 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-sm text-green-700 dark:text-green-300">
          <span className="font-semibold">Correct answer:</span> {optionLabels[question.correctAnswer]}) {question.options[question.correctAnswer]}
        </div>
      )}
    </div>
  );
}

function StorySection({ story, index, onAnswered }: { story: Story; index: number; onAnswered: (correct: boolean, timeSeconds: number) => void }) {
  const storyEmojis = ['🏠', '🎹', '🌱', '⏳', '📚'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{storyEmojis[index]}</span>
          <div>
            <p className="text-indigo-200 text-xs font-medium uppercase tracking-wide">Story {story.id}</p>
            <h2 className="text-white text-xl font-bold">{story.title}</h2>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 p-5 bg-amber-50/50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-800/50">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">📖</span>
            <span className="text-sm font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wide">Story Text</span>
          </div>
          {story.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="text-gray-700 dark:text-gray-300 leading-7 mb-5 last:mb-0 text-[15px] md:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="border-t border-gray-100 dark:border-gray-700 pt-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-300 text-sm font-bold">
              ?
            </span>
            Questions
          </h3>
          {story.questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onAnswered={onAnswered}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimeGraph({ times }: { times: QuestionTime[] }) {
  const maxTime = Math.max(...times.map(t => t.timeSeconds), 1);
  const totalTime = times.reduce((sum, t) => sum + t.timeSeconds, 0);
  const avgTime = totalTime / times.length;

  return (
    <div className="mt-8 text-left">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
        <span>⏱️</span> Time Per Question
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Total: {totalTime.toFixed(1)}s • Average: {avgTime.toFixed(1)}s per question
      </p>
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
        <div className="flex items-end gap-1 h-40">
          {times.map((t, i) => {
            const height = Math.max((t.timeSeconds / maxTime) * 100, 5);
            const colorClass = t.correct
              ? 'bg-green-500 dark:bg-green-400'
              : 'bg-red-500 dark:bg-red-400';
            return (
              <div key={i} className="flex-1 flex flex-col items-center group relative">
                <div className="absolute -top-8 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                  Q{t.questionId}: {t.timeSeconds.toFixed(1)}s {t.correct ? '✓' : '✗'}
                </div>
                <div
                  className={`w-full rounded-t ${colorClass} transition-all duration-500 hover:opacity-80`}
                  style={{ height: `${height}%` }}
                />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-green-500"></span> Correct
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-red-500"></span> Wrong
            </span>
          </div>
          <span className="text-xs text-gray-400 dark:text-gray-500">Hover bars for details</span>
        </div>
        {/* X-axis labels */}
        <div className="flex gap-1 mt-1">
          {times.map((t, i) => (
            <div key={i} className="flex-1 text-center text-[9px] text-gray-400 dark:text-gray-500">
              {t.questionId}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [answeredCount, setAnsweredCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [questionTimes, setQuestionTimes] = useState<QuestionTime[]>([]);
  const questionCounterRef = useRef(0);
  const [restartKey, setRestartKey] = useState(0);
  const [showRestartConfirm, setShowRestartConfirm] = useState(false);

  const handleRestart = () => {
    setAnsweredCount(0);
    setCorrectCount(0);
    setQuestionTimes([]);
    questionCounterRef.current = 0;
    setRestartKey(prev => prev + 1);
    setShowRestartConfirm(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleChange);
    return () => document.removeEventListener('fullscreenchange', handleChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleAnswered = (correct: boolean, timeSeconds: number) => {
    questionCounterRef.current += 1;
    setAnsweredCount(prev => prev + 1);
    if (correct) {
      setCorrectCount(prev => prev + 1);
    }
    setQuestionTimes(prev => [...prev, {
      questionId: questionCounterRef.current,
      timeSeconds,
      correct
    }]);
  };

  const percentage = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const allAnswered = answeredCount === 30;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-lg">📖</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">Reading Comprehension Quiz</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">5 Stories • 30 Questions</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-gray-500 dark:text-gray-400">Questions Left</p>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">{30 - answeredCount} remaining</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 dark:text-gray-400">Score</p>
              <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                {correctCount}<span className="text-gray-400 dark:text-gray-500">/30</span>
              </p>
            </div>
            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            {/* Fullscreen toggle */}
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
              title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? (
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Instructions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">How it works</h2>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Read each story at the top of its section</li>
                <li>• Select your answer for each question — it's graded instantly</li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                  Green means correct
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                  Red means wrong (correct answer will be shown)
                </li>
                <li>• Your time per question is tracked and shown at the end</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stories */}
        {stories.map((story, index) => (
          <StorySection key={`${restartKey}-${story.id}`} story={story} index={index} onAnswered={handleAnswered} />
        ))}

        {/* Final Score */}
        {allAnswered && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 text-center mb-8">
            <div className="mb-4">
              <span className="text-5xl">
                {percentage >= 90 ? '🏆' : percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '📚'}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Quiz Complete!</h2>
            <div className="mb-4">
              <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{percentage}%</p>
              <p className="text-gray-500 dark:text-gray-400">
                {correctCount} out of 30 correct
              </p>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
              <div
                className={`h-3 rounded-full transition-all duration-1000 ${
                  percentage >= 90 ? 'bg-green-500' :
                  percentage >= 70 ? 'bg-indigo-500' :
                  percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {percentage >= 90 ? 'Excellent! Outstanding comprehension!' :
               percentage >= 70 ? 'Great job! Well done!' :
               percentage >= 50 ? 'Good effort! Keep reading!' :
               'Keep practicing! Try reading the stories more carefully.'}
            </p>

            {/* Time Graph */}
            <TimeGraph times={questionTimes} />
          </div>
        )}

        {/* Progress bar when not complete */}
        {!allAnswered && answeredCount > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{answeredCount}/30 answered</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 rounded-full bg-indigo-500 transition-all duration-300"
                style={{ width: `${(answeredCount / 30) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Footer with Restart Button */}
        <div className="flex items-center justify-between py-8">
          <button
            onClick={() => setShowRestartConfirm(true)}
            disabled={answeredCount === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 dark:text-gray-300 text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Restart Quiz
          </button>
          <div className="text-gray-500 dark:text-gray-500 text-sm">
            <p>Reading Comprehension Quiz • 5 Stories • 30 Questions</p>
          </div>
        </div>
      </main>

      {/* Restart Confirmation Modal */}
      {showRestartConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowRestartConfirm(false)}>
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Restart Quiz?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">This action cannot be undone</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Are you sure you want to restart? All your progress will be lost, including your answers and time tracking data.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowRestartConfirm(false)}
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRestart}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
              >
                Restart Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
