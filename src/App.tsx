import { useState, useEffect } from 'react';
import { stories, Story, Question } from './data';

function QuestionCard({ question, onAnswered }: { question: Question; onAnswered: (correct: boolean) => void }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    onAnswered(index === question.correctAnswer);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  const getOptionClass = (index: number) => {
    if (!isAnswered) {
      return 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer';
    }
    if (index === question.correctAnswer) {
      return 'border-green-500 bg-green-50 text-green-800';
    }
    if (index === selectedAnswer && !isCorrect) {
      return 'border-red-500 bg-red-50 text-red-800';
    }
    return 'border-gray-200 opacity-50';
  };

  const getOptionIcon = (index: number) => {
    if (!isAnswered) return null;
    if (index === question.correctAnswer) {
      return <span className="text-green-600 text-lg">✓</span>;
    }
    if (index === selectedAnswer && !isCorrect) {
      return <span className="text-red-600 text-lg">✗</span>;
    }
    return null;
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="mb-6 last:mb-0">
      <p className="font-medium text-gray-800 mb-3 text-sm md:text-base">
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
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
              {optionLabels[index]}
            </span>
            <span className="flex-1 text-sm md:text-base">{option}</span>
            {getOptionIcon(index)}
          </button>
        ))}
      </div>
      {isAnswered && !isCorrect && (
        <div className="mt-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
          <span className="font-semibold">Correct answer:</span> {optionLabels[question.correctAnswer]}) {question.options[question.correctAnswer]}
        </div>
      )}
    </div>
  );
}

function StorySection({ story, index, onAnswered }: { story: Story; index: number; onAnswered: (correct: boolean) => void }) {
  const storyEmojis = ['🏠', '🎹', '🌱', '⏳', '📚'];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
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
        {/* Story text always visible at the top */}
        <div className="mb-6 p-5 bg-amber-50/50 rounded-xl border border-amber-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">📖</span>
            <span className="text-sm font-semibold text-amber-800 uppercase tracking-wide">Story Text</span>
          </div>
          {story.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="text-gray-700 leading-7 mb-5 last:mb-0 text-[15px] md:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm font-bold">
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

function App() {
  const [answeredCount, setAnsweredCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  const handleAnswered = (correct: boolean) => {
    setAnsweredCount(prev => prev + 1);
    if (correct) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const percentage = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const allAnswered = answeredCount === 30;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-lg">📖</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Reading Comprehension Quiz</h1>
              <p className="text-xs text-gray-500">5 Stories • 30 Questions</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-gray-500">Score</p>
              <p className="text-lg font-bold text-indigo-600">
                {correctCount}<span className="text-gray-400">/{answeredCount}</span>
                {answeredCount > 0 && <span className="text-sm ml-1">({percentage}%)</span>}
              </p>
            </div>
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">How it works</h2>
              <ul className="text-sm text-gray-600 space-y-1">
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
              </ul>
            </div>
          </div>
        </div>

        {/* Stories */}
        {stories.map((story, index) => (
          <StorySection key={story.id} story={story} index={index} onAnswered={handleAnswered} />
        ))}

        {/* Final Score */}
        {allAnswered && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center mb-8">
            <div className="mb-4">
              <span className="text-5xl">
                {percentage >= 90 ? '🏆' : percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '📚'}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
            <div className="mb-4">
              <p className="text-5xl font-bold text-indigo-600 mb-1">{percentage}%</p>
              <p className="text-gray-500">
                {correctCount} out of 30 correct
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
              <div
                className={`h-3 rounded-full transition-all duration-1000 ${
                  percentage >= 90 ? 'bg-green-500' :
                  percentage >= 70 ? 'bg-indigo-500' :
                  percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-gray-600">
              {percentage >= 90 ? 'Excellent! Outstanding comprehension!' :
               percentage >= 70 ? 'Great job! Well done!' :
               percentage >= 50 ? 'Good effort! Keep reading!' :
               'Keep practicing! Try reading the stories more carefully.'}
            </p>
          </div>
        )}

        {/* Progress bar when not complete */}
        {!allAnswered && answeredCount > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm text-gray-500">{answeredCount}/30 answered</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 rounded-full bg-indigo-500 transition-all duration-300"
                style={{ width: `${(answeredCount / 30) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center py-8 text-gray-500 text-sm">
          <p>Reading Comprehension Quiz • 5 Stories • 30 Questions</p>
        </div>
      </main>
    </div>
  );
}

export default App;
