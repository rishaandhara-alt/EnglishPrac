# EnglishPrac - Reading Comprehension Quiz

An interactive reading comprehension quiz application featuring 5 engaging stories with 30 questions total. Test your reading skills with instant feedback, time tracking, and comprehensive scoring.

## 📚 Features

### Core Functionality
- **5 Complete Stories** - Each story is approximately 500-600 words covering diverse topics
- **30 Questions** - 6 multiple-choice questions per story
- **Instant Grading** - Get immediate feedback on each answer
- **Visual Feedback** - Correct answers turn green, incorrect answers turn red
- **Answer Reveal** - When you get a question wrong, the correct answer is shown

### Advanced Features
- **Score Tracking** - Real-time score display showing correct answers out of 30
- **Questions Remaining** - Always know how many questions you have left
- **Time Tracking** - Each question's time is recorded and displayed in a graph at the end
- **Dark Mode** - Toggle between light and dark themes (respects system preferences)
- **Fullscreen Mode** - Expand the quiz to fullscreen for distraction-free reading
- **Progress Bar** - Visual indicator of your overall progress
- **Restart Function** - Start over anytime with a confirmation dialog

## 🎯 How to Use

### Starting the Quiz
1. Open the application in your browser
2. Read the instructions in the info box at the top
3. Begin with Story 1 - the story text is displayed at the top of each section

### Answering Questions
1. **Read the story first** - The full story text appears in a highlighted box at the top of each story section
2. **Scroll down to the questions** - Each story has 6 multiple-choice questions below the text
3. **Click your answer** - Select one of the four options (A, B, C, or D)
4. **Get instant feedback**:
   - ✅ **Green** = Correct answer
   - ❌ **Red** = Wrong answer (the correct answer will be shown below)
5. **Move to the next question** - Once answered, you cannot change your answer

### Monitoring Your Progress
- **Header Display**: The sticky header shows:
  - Questions remaining (e.g., "25 remaining")
  - Your current score (e.g., "3/30")
- **Progress Bar**: Appears after you answer your first question, showing overall completion

### Using Dark Mode
- Click the **sun/moon icon** in the header (next to the fullscreen button)
- The app automatically detects your system's color scheme preference on first load
- Toggle anytime during the quiz

### Using Fullscreen Mode
- Click the **expand icon** in the header (top right)
- Press `Esc` or click the collapse icon to exit fullscreen
- Useful for distraction-free reading

### Viewing Final Results
After answering all 30 questions, a comprehensive score card appears showing:
- **Final Percentage** - Large display of your score percentage
- **Score Breakdown** - Correct answers out of 30 total
- **Performance Message** - Encouraging feedback based on your score:
  - 🏆 90%+ = "Excellent! Outstanding comprehension!"
  - 🎉 70-89% = "Great job! Well done!"
  - 👍 50-69% = "Good effort! Keep reading!"
  - 📚 Below 50% = "Keep practicing! Try reading the stories more carefully."

### Time Analysis Graph
The final score card includes a detailed time tracking visualization:
- **Bar Chart** - Shows time spent on each of the 30 questions
- **Color Coding**:
  - 🟢 Green bars = Correct answers
  - 🔴 Red bars = Incorrect answers
- **Hover Tooltips** - Hover over any bar to see:
  - Question number
  - Time taken (in seconds)
  - Whether you got it right or wrong
- **Statistics** - Total time and average time per question

### Restarting the Quiz
- Click the **"Restart Quiz"** button at the bottom left
- A confirmation dialog will appear warning you that all progress will be lost
- Click "Restart Quiz" to confirm or "Cancel" to continue
- The quiz will reset and scroll back to the top

## 📖 Story Topics

1. **The Lighthouse Keeper** - A tale of dedication and bravery during a storm
2. **The Piano Prodigy** - A young girl's journey with music and perseverance
3. **The Community Garden** - Transforming a vacant lot into a thriving community space
4. **The Time Capsule** - Fifth graders create time capsules and reflect on growth
5. **The Bookstore Rescue** - Saving a beloved local bookstore in the digital age

## 🎨 Interface Elements

### Header (Sticky)
- App logo and title
- Questions remaining counter
- Current score (correct/30)
- Dark mode toggle button
- Fullscreen toggle button

### Story Sections
- Story title with emoji icon
- Story text in a highlighted reading box
- Questions section with multiple-choice options
- Visual feedback on answers

### Footer
- Restart Quiz button (bottom left)
- Quiz information text (bottom right)

### Modals
- Restart confirmation dialog with warning
- Backdrop blur effect
- Cancel and confirm options

## 💡 Tips for Best Results

1. **Read carefully** - Take your time reading each story before answering questions
2. **Look for details** - Many questions test specific numbers, names, or events
3. **Don't rush** - The time tracking shows that slower, more careful reading often leads to better scores
4. **Review your time graph** - After completing the quiz, check which questions took the longest - these might indicate where you need to improve reading speed or comprehension
5. **Try multiple times** - Use the restart feature to practice and improve your score

## 🚀 Getting Started

### Running Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- No backend required - runs entirely in the browser

## 📊 Scoring System

- **Total Questions**: 30
- **Questions per Story**: 6
- **Score Display**: Correct answers / 30
- **Final Percentage**: (Correct / 30) × 100

## 🎯 Question Types

All questions are multiple-choice with 4 options (A, B, C, D) testing:
- Factual recall (numbers, names, dates)
- Sequence of events
- Character motivations
- Cause and effect relationships
- Main ideas and themes

## 🌟 Features Summary

✅ Instant answer feedback  
✅ Real-time score tracking  
✅ Time tracking per question  
✅ Visual time analysis graph  
✅ Dark mode support  
✅ Fullscreen mode  
✅ Progress indicators  
✅ Restart with confirmation  
✅ Responsive design  
✅ Smooth animations  
✅ Accessible interface  

---

**Happy Reading! 📚**
