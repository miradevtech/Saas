import { Course } from '../../types';

export const COURSE_2: Course = {
  id: 'course-2',
  title: 'How to Manage Your Money',
  shortDescription: 'Master cash flow, realistic budgeting, high-yield emergency reserves, debt paydown, and investing foundations.',
  fullDescription: 'Take complete control of your financial life. From understanding your net cash flow and budgeting without restrictive deprivation to paying down debt, building emergency safety nets, and foundational investing principles.',
  category: 'Finance',
  level: 'Beginner',
  duration: '3.0 Hours',
  lessonsCount: 10,
  objectives: [
    'Gain total clarity over income, recurring obligations, and variable spending',
    'Build an automated zero-based or 50/30/20 budget that fits your lifestyle',
    'Establish a fully funded emergency cash cushion',
    'Implement snowball or avalanche debt payoff strategies and start investing'
  ],
  visualTheme: {
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    gradientFrom: '#0c4a6e',
    gradientTo: '#082f49',
    tagline: 'BUDGETING · SAVINGS · FREEDOM'
  },
  lessons: [
    {
      id: 'c2-l1',
      courseId: 'course-2',
      order: 1,
      title: 'Understanding Your Money',
      durationMinutes: 15,
      summary: 'Deconstruct your net worth, total inflows, and emotional money triggers.',
      content: {
        introduction: 'Financial clarity begins with honest awareness. Knowing exactly what comes in and what goes out removes financial anxiety.',
        keyConcepts: [
          { title: 'Assets vs Liabilities', explanation: 'Assets put money in your pocket; liabilities take money out.' },
          { title: 'Money Mindset', explanation: 'Recognizing subconscious financial triggers and past spending conditioning.' }
        ],
        practicalSteps: [
          'Calculate your current net worth (Total Assets minus Total Liabilities)',
          'Review your last 90 days of bank statements without judgment'
        ],
        proTip: 'Do not feel guilty about past financial mistakes. Focus entirely on today forward.',
        takeaway: 'Financial freedom starts with total transparency into your current financial health.'
      }
    },
    {
      id: 'c2-l2',
      courseId: 'course-2',
      order: 2,
      title: 'Income and Expenses',
      durationMinutes: 18,
      summary: 'Categorize fixed expenses, variable leaks, and irregular annual costs.',
      content: {
        introduction: 'Not all expenses are created equal. Distinguishing fixed commitments from discretionary desires gives you control.',
        keyConcepts: [
          { title: 'Fixed Obligations', explanation: 'Rent, mortgage, utilities, minimum debt payments, and essential groceries.' },
          { title: 'Micro-Leaks', explanation: 'Forgotten recurring subscriptions and impulse digital convenience fees.' }
        ],
        practicalSteps: [
          'Audit all active monthly app and service subscriptions and cancel unused ones',
          'Calculate your baseline "survival number" needed each month'
        ],
        proTip: 'Negotiate recurring utility or insurance bills once every 12 months.',
        takeaway: 'Separating essentials from discretionary leaks reveals immediate savings.'
      }
    },
    {
      id: 'c2-l3',
      courseId: 'course-2',
      order: 3,
      title: 'Creating a Budget',
      durationMinutes: 22,
      summary: 'Implement the 50/30/20 rule or zero-based budgeting system.',
      content: {
        introduction: 'A budget is not a prison; it is permission to spend money intentionally on what brings you real value.',
        keyConcepts: [
          { title: 'The 50/30/20 Rule', explanation: '50% Needs, 30% Wants, and 20% Savings/Debt acceleration.' },
          { title: 'Zero-Based Budgeting', explanation: 'Every dollar is assigned a job before the month starts.' }
        ],
        practicalSteps: [
          'Select between a 50/30/20 framework or zero-based tracking sheet',
          'Allocate your projected monthly income into designated digital buckets'
        ],
        proTip: 'Always budget a dedicated "guilt-free entertainment" buffer so you do not burn out.',
        takeaway: 'A realistic, flexible budget prevents lifestyle creep and supports consistent progress.'
      }
    },
    {
      id: 'c2-l4',
      courseId: 'course-2',
      order: 4,
      title: 'How to Save Money',
      durationMinutes: 16,
      summary: 'Automation strategies, high-yield savings accounts, and behavioral nudges.',
      content: {
        introduction: 'If you wait to save whatever is left at the end of the month, you will save nothing. Pay yourself first automatically.',
        keyConcepts: [
          { title: 'Pay Yourself First', explanation: 'Automate transfers into savings the exact day your paycheck arrives.' },
          { title: 'High-Yield Accounts', explanation: 'Earning market interest on cash reserves rather than letting it sit idle at 0.01%.' }
        ],
        practicalSteps: [
          'Open a separate High-Yield Savings Account (HYSA)',
          'Schedule an automatic standing transfer for payday'
        ],
        proTip: 'Keep your emergency savings at a different bank so it is out of sight for impulsive daily spends.',
        takeaway: 'Automation beats willpower when building consistent savings habits.'
      }
    },
    {
      id: 'c2-l5',
      courseId: 'course-2',
      order: 5,
      title: 'Managing Your Spending',
      durationMinutes: 20,
      summary: 'Tactics for curbing impulse purchases, delayed gratification rules, and conscious consumption.',
      content: {
        introduction: 'Spending money on what you love and ruthlessly cutting costs on things you do not care about is the core of smart financial management.',
        keyConcepts: [
          { title: 'The 48-Hour Rule', explanation: 'Waiting two full days before making non-essential purchases over $50.' },
          { title: 'Cost-Per-Use', explanation: 'Evaluating purchases based on durability and actual repeated utility.' }
        ],
        practicalSteps: [
          'Create a "30-Day Wishlist" where all impulse desires must wait for a calendar month',
          'Remove saved credit cards from one-click checkout shopping websites'
        ],
        proTip: 'Convert purchase prices into hours of labor to see if the item is truly worth your time.',
        takeaway: 'Conscious spending means spending without regret on priorities that genuinely matter.'
      }
    },
    {
      id: 'c2-l6',
      courseId: 'course-2',
      order: 6,
      title: 'Building an Emergency Fund',
      durationMinutes: 18,
      summary: 'Determine your 3-6 month safety threshold and liquid reserve architecture.',
      content: {
        introduction: 'An emergency fund is insurance between you and life’s inevitable surprises. It turns a financial catastrophe into a minor inconvenience.',
        keyConcepts: [
          { title: 'The Starter $1,000 Fund', explanation: 'A rapid initial buffer to break the reliance on credit cards for minor emergencies.' },
          { title: 'Full 3-6 Month Reserve', explanation: 'Holding 3 to 6 months of baseline survival expenses in high liquidity.' }
        ],
        practicalSteps: [
          'Calculate your 3-month survival expense total',
          'Set a target date to complete your emergency fund and break it into monthly milestones'
        ],
        proTip: 'Define what constitutes an emergency in advance: unexpected medical, urgent home/auto repair, or sudden job loss.',
        takeaway: 'A robust emergency fund gives you peace of mind and resilience against life crises.'
      }
    },
    {
      id: 'c2-l7',
      courseId: 'course-2',
      order: 7,
      title: 'Understanding Debt',
      durationMinutes: 24,
      summary: 'High-interest consumer debt vs productive debt; snowball vs avalanche payoff.',
      content: {
        introduction: 'High-interest consumer credit is the greatest barrier to wealth building. Tackling it with a proven system accelerates freedom.',
        keyConcepts: [
          { title: 'Debt Snowball Method', explanation: 'Paying smallest balances first to gain fast psychological momentum.' },
          { title: 'Debt Avalanche Method', explanation: 'Paying highest interest rate debt first to minimize total interest paid.' }
        ],
        practicalSteps: [
          'List all debts with balances, minimum payments, and APR percentages',
          'Choose between Snowball (psychological wins) or Avalanche (mathematical optimization)',
          'Put all extra funds toward the target debt while paying minimums on the rest'
        ],
        proTip: 'Call credit card companies to request lower APRs based on consistent on-time payment history.',
        takeaway: 'Systematic debt payoff frees up monthly cash flow and permanently lowers anxiety.'
      }
    },
    {
      id: 'c2-l8',
      courseId: 'course-2',
      order: 8,
      title: 'Setting Financial Goals',
      durationMinutes: 16,
      summary: 'Short, medium, and long-term targets, inflation adjustments, and milestone tracking.',
      content: {
        introduction: 'Money is a tool to finance the life you want. Setting specific, measurable financial goals gives your daily budgeting purpose.',
        keyConcepts: [
          { title: 'Time Horizons', explanation: 'Short (<1 yr), Medium (1-5 yrs), and Long term (5+ yrs) require different risk profiles.' },
          { title: 'Sinking Funds', explanation: 'Saving incrementally for known upcoming expenses like car insurance or holidays.' }
        ],
        practicalSteps: [
          'Write down 1 short-term, 1 medium-term, and 1 long-term financial target',
          'Establish separate sinking fund sub-accounts for each'
        ],
        proTip: 'Review your financial goals quarterly and celebrate milestone achievements along the way.',
        takeaway: 'Clear financial goals give discipline a concrete, rewarding destination.'
      }
    },
    {
      id: 'c2-l9',
      courseId: 'course-2',
      order: 9,
      title: 'Introduction to Investing',
      durationMinutes: 25,
      summary: 'Compound interest, broad-market index funds, tax-advantaged accounts, and risk diversification.',
      content: {
        introduction: 'You cannot save your way to long-term wealth—inflation erodes cash. Investing allows your capital to compound over time.',
        keyConcepts: [
          { title: 'Compound Interest', explanation: 'Earning interest on your reinvested interest, creating exponential growth curves.' },
          { title: 'Broad Market Index Funds', explanation: 'Owning a tiny slice of hundreds of top companies with low expense ratios.' },
          { title: 'Dollar-Cost Averaging', explanation: 'Investing consistent amounts monthly regardless of short-term market fluctuations.' }
        ],
        practicalSteps: [
          'Understand your retirement account options (e.g., employer match, IRA)',
          'Learn how total stock market index funds operate'
        ],
        proTip: 'Time in the market always beats timing the market. Start early and invest consistently.',
        takeaway: 'Disciplined, low-cost index investing compounds wealth steadily over decades.'
      }
    },
    {
      id: 'c2-l10',
      courseId: 'course-2',
      order: 10,
      title: 'Building Better Money Habits',
      durationMinutes: 20,
      summary: 'Designing your weekly financial review ritual and staying consistent for life.',
      content: {
        introduction: 'Wealth is not an event; it is a lifestyle created through small, daily, and weekly financial habits.',
        keyConcepts: [
          { title: 'The 15-Minute Money Date', explanation: 'A weekly check-in with your balances, upcoming bills, and budget pacing.' },
          { title: 'Lifestyle Creep Guardrails', explanation: 'Channeling at least 50% of every salary increase directly into savings or investments.' }
        ],
        practicalSteps: [
          'Put a recurring 15-minute appointment on your calendar every Sunday evening',
          'Create a 1-page financial cheat sheet with your accounts and automated transfer dates'
        ],
        proTip: 'Automate 90% of your system so good money habits happen even when you are busy.',
        takeaway: 'Consistent micro-habits compound into lasting financial independence.'
      }
    }
  ],
  quiz: {
    id: 'quiz-c2',
    courseId: 'course-2',
    title: 'Personal Finance & Money Mastery Quiz',
    description: 'Test your understanding of budgeting frameworks, emergency funds, debt payoff, and investing basics.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'c2-q1',
        question: 'Under the classic 50/30/20 budget framework, what does the 20% represent?',
        type: 'multiple-choice',
        options: [
          'Dining out and entertainment',
          'Savings and accelerated debt payoff',
          'Rent and utilities',
          'Clothing and personal shopping'
        ],
        correctAnswerIndex: 1,
        explanation: '50% goes to Needs, 30% to Wants, and 20% to Savings, investments, and debt reduction.'
      },
      {
        id: 'c2-q2',
        question: 'What is the key principle behind the "Pay Yourself First" method?',
        type: 'multiple-choice',
        options: [
          'Spending on personal luxury items before paying rent',
          'Automating savings and investments as soon as income arrives before spending on other items',
          'Waiting until the last day of the month to see if any cash remains',
          'Investing only when the stock market hits an all-time low'
        ],
        correctAnswerIndex: 1,
        explanation: 'Paying yourself first guarantees consistent savings before discretionary lifestyle spending occurs.'
      },
      {
        id: 'c2-q3',
        question: 'True or False: The Debt Snowball strategy prioritizes debts with the highest interest rates first.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. The Snowball method pays off debts in order of smallest to largest balance for psychological momentum. The Avalanche method targets highest interest rates first.'
      },
      {
        id: 'c2-q4',
        question: 'Where should a baseline emergency fund be kept?',
        type: 'multiple-choice',
        options: [
          'Locked in a 10-year illiquid bond',
          'In a volatile cryptocurrency wallet',
          'In an accessible, liquid High-Yield Savings Account (HYSA)',
          'Physically buried under floorboards'
        ],
        correctAnswerIndex: 2,
        explanation: 'Emergency funds must remain safe and liquid in a High-Yield Savings Account so they can be accessed instantly without loss of principal.'
      },
      {
        id: 'c2-q5',
        question: 'Why do low-cost broad market index funds remain the preferred investment vehicle for long-term growth?',
        type: 'multiple-choice',
        options: [
          'They offer extreme diversification across hundreds of companies with low management fees',
          'They guarantee 100% returns every single month',
          'They only invest in speculative tech startups',
          'They are exempt from all economic cycles'
        ],
        correctAnswerIndex: 0,
        explanation: 'Index funds deliver broad diversification, minimal fees, and long-term historical compounding without the risk of single-company failure.'
      }
    ]
  }
};
