import { Course } from '../../types';

export const COURSE_10: Course = {
  id: 'course-10',
  title: 'Time Management and Productivity',
  shortDescription: 'Master calendar time-blocking, Eisenhower matrix prioritization, deep work focus rituals, and personal operating systems.',
  fullDescription: 'Stop feeling overwhelmed by endless to-do lists and reclaim 10+ hours every week. Master cognitive load management, the Eisenhower prioritization matrix, digital calendar time-blocking, elimination of digital distractions, and building an automated personal productivity system.',
  category: 'Productivity',
  level: 'Beginner',
  duration: '3.0 Hours',
  lessonsCount: 10,
  objectives: [
    'Distinguish between genuine high-leverage priorities and reactive urgency',
    'Set up a proactive calendar time-blocking architecture',
    'Eliminate digital notification friction and enter deep focus flow states on demand',
    'Construct a resilient personal productivity system with weekly review rituals'
  ],
  visualTheme: {
    accentColor: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.4)',
    gradientFrom: '#713f12',
    gradientTo: '#422006',
    tagline: 'PRIORITIES · TIME BLOCKING · FOCUS'
  },
  lessons: [
    {
      id: 'c10-l1',
      courseId: 'course-10',
      order: 1,
      title: 'Understanding Productivity',
      durationMinutes: 16,
      summary: 'Productivity vs busywork, the leverage equation, and energy management.',
      content: {
        introduction: 'Being busy is not the same as being productive. Productivity is about producing maximum high-value results with minimal friction and stress.',
        keyConcepts: [
          { title: 'The Leverage Equation', explanation: 'High-leverage tasks yield exponential ongoing returns; low-leverage tasks are fleeting and reactive.' },
          { title: 'Energy Management', explanation: 'Matching cognitively demanding work to your peak circadian energy windows.' }
        ],
        practicalSteps: [
          'Log your daily tasks for one day and label each as "High Leverage" or "Reactive Busywork"',
          'Identify your daily 3-hour peak mental energy window'
        ],
        proTip: 'Guard your peak mental energy hours fiercely. Never schedule routine administrative meetings during your best thinking time.',
        takeaway: 'True productivity maximizes high-leverage output, not just hours logged at a desk.'
      }
    },
    {
      id: 'c10-l2',
      courseId: 'course-10',
      order: 2,
      title: 'Setting Clear Goals',
      durationMinutes: 18,
      summary: 'SMART goals, OKRs, lead vs lag measures, and establishing north-star metrics.',
      content: {
        introduction: 'Without clear goals, you are at the mercy of everyone else’s agenda. Specific goals act as an executive filter for saying no.',
        keyConcepts: [
          { title: 'Lead vs Lag Measures', explanation: 'Lag measures are the results (weight lost, revenue earned); lead measures are the daily inputs you control (workouts done, calls made).' },
          { title: 'SMART Framework', explanation: 'Specific, Measurable, Achievable, Relevant, and Time-bound goal architecture.' }
        ],
        practicalSteps: [
          'Define 1 primary quarterly goal and write 2 controllable lead metrics for it',
          'Post your goal where you see it every morning before opening email'
        ],
        proTip: 'Focus obsessively on the daily lead behaviors—the lag results will take care of themselves.',
        takeaway: 'Clear goals turn ambiguous wishes into focused, actionable daily routines.'
      }
    },
    {
      id: 'c10-l3',
      courseId: 'course-10',
      order: 3,
      title: 'Prioritizing Tasks',
      durationMinutes: 20,
      summary: 'The Eisenhower Decision Matrix (Urgent vs Important) and Warren Buffett\'s 2-List Strategy.',
      content: {
        introduction: 'What is urgent is rarely important, and what is important is rarely urgent. Learning to prioritize preserves your focus for what truly matters.',
        keyConcepts: [
          { title: 'The Eisenhower Matrix', explanation: 'Quadrant 1: Do Now; Quadrant 2: Schedule (High Importance, Low Urgency); Quadrant 3: Delegate; Quadrant 4: Eliminate.' },
          { title: 'The Rule of 3', explanation: 'Selecting only 3 critical needle-moving tasks at the start of each morning.' }
        ],
        practicalSteps: [
          'Plot your active to-do list into the 4 quadrants of the Eisenhower Matrix',
          'Identify at least two Quadrant 4 items to permanently delete from your life'
        ],
        proTip: 'Spend most of your working life in Quadrant 2 (strategic planning, skill learning, health, and relationship building).',
        takeaway: 'Ruthless prioritization ensures that important long-term goals are not crowded out by urgent noise.'
      }
    },
    {
      id: 'c10-l4',
      courseId: 'course-10',
      order: 4,
      title: 'Creating a Schedule',
      durationMinutes: 20,
      summary: 'Proactive calendar management, defensive scheduling, and thematic work days.',
      content: {
        introduction: 'If you don\'t design your schedule, other people will design it for you. A proactive calendar is your most powerful defense against distraction.',
        keyConcepts: [
          { title: 'Theme Days', explanation: 'Assigning specific focus to different days (e.g. Deep Work Mondays, Meeting Tuesdays, Creative Thursdays).' },
          { title: 'Buffer Blocks', explanation: 'Leaving 30-minute unscheduled gaps between commitments to absorb inevitable daily overflows.' }
        ],
        practicalSteps: [
          'Design an ideal weekly calendar template with thematic focus zones',
          'Add a mandatory 45-minute buffer block every afternoon'
        ],
        proTip: 'Never leave your calendar wide open. An empty calendar is an open invitation for other people\'s priorities.',
        takeaway: 'A thoughtfully scheduled week creates clarity, reduces decision fatigue, and protects downtime.'
      }
    },
    {
      id: 'c10-l5',
      courseId: 'course-10',
      order: 5,
      title: 'Time Blocking',
      durationMinutes: 24,
      summary: 'Calendar time-blocking, task batching, the Pomodoro technique, and Parkinson\'s Law.',
      content: {
        introduction: 'To-do lists are wishlists; calendar blocks are contracts with yourself. Booking time blocks creates dedicated appointments with focused work.',
        keyConcepts: [
          { title: 'Parkinson’s Law', explanation: 'Work expands to fill the time allotted for its completion. Tight time blocks force efficient execution.' },
          { title: 'The Pomodoro Rhythm', explanation: '25 or 50 minutes of single-task immersion followed by 5 or 10 minutes of complete cognitive rest.' }
        ],
        practicalSteps: [
          'Convert your top 3 daily tasks into specific 90-minute appointments directly on your digital calendar',
          'Use a physical or digital timer to enforce single-task Pomodoro sprints'
        ],
        proTip: 'Treat a calendar time block with the same respect you would treat a meeting with a high-profile client.',
        takeaway: 'Time blocking bridges the gap between wanting to do something and actually scheduling the time to do it.'
      }
    },
    {
      id: 'c10-l6',
      courseId: 'course-10',
      order: 6,
      title: 'Managing Deadlines',
      durationMinutes: 18,
      summary: 'Reverse planning, milestone checkpoints, risk mitigation, and preventing panic crunches.',
      content: {
        introduction: 'Missing deadlines creates panic and damages trust. Backwards planning breaks big project deadlines into calm, manageable checkpoints.',
        keyConcepts: [
          { title: 'Reverse Engineering Deadlines', explanation: 'Starting at delivery date and working backwards to set milestone completion dates.' },
          { title: 'The 20% Contingency Buffer', explanation: 'Always setting personal internal deadlines 20% earlier than the external client commitment.' }
        ],
        practicalSteps: [
          'Take an upcoming project deadline and break it into 4 progressive milestones',
          'Set your personal completion target 3 business days before the official due date'
        ],
        proTip: 'If a project hits unexpected blockers, notify stakeholders immediately with a proposed solution—never wait until the eleventh hour.',
        takeaway: 'Reverse planning and internal buffers eliminate all-nighters and panic deadlines.'
      }
    },
    {
      id: 'c10-l7',
      courseId: 'course-10',
      order: 7,
      title: 'Avoiding Distractions',
      durationMinutes: 22,
      summary: 'Digital notification audits, tab clutter, environment design, and context switching costs.',
      content: {
        introduction: 'It takes an average of 23 minutes to regain deep focus after an interruption. Eliminating visual and digital triggers restores mental clarity.',
        keyConcepts: [
          { title: 'Context Switching Tax', explanation: 'Checking Slack or email for 15 seconds fractures attention and drains cognitive energy.' },
          { title: 'Choice Architecture', explanation: 'Putting phones in another room and using website blockers to make distraction difficult.' }
        ],
        practicalSteps: [
          'Disable all non-human push notifications on your phone (badges, banners, sounds)',
          'Install a full-screen focus tool or website blocker during deep work blocks'
        ],
        proTip: 'Out of sight, out of mind. Keep your smartphone completely out of physical sight during deep work.',
        takeaway: 'Designing a distraction-free environment makes sustained focus effortless.'
      }
    },
    {
      id: 'c10-l8',
      courseId: 'course-10',
      order: 8,
      title: 'Building Productive Routines',
      durationMinutes: 20,
      summary: 'Morning kickoff rituals, shutdown checklists, habit stacking, and friction reduction.',
      content: {
        introduction: 'Willpower is an exhaustible battery. Productive routines automate positive habits so you get started without internal debate.',
        keyConcepts: [
          { title: 'Habit Stacking', explanation: 'Anchoring a new desired behavior to an already established habit (After I make coffee, I write my 3 tasks).' },
          { title: 'The Shutdown Ritual', explanation: 'A 10-minute end-of-day sequence closing tabs, reviewing tomorrow\'s calendar, and mentally leaving work.' }
        ],
        practicalSteps: [
          'Draft a 10-minute morning kickoff routine',
          'Create a 3-step evening shutdown ritual to cleanly close your workday'
        ],
        proTip: 'Never check email or social media during the first 60 minutes after waking up.',
        takeaway: 'Automated morning and evening rituals bookend your day with calm, proactive intentionality.'
      }
    },
    {
      id: 'c10-l9',
      courseId: 'course-10',
      order: 9,
      title: 'Staying Focused',
      durationMinutes: 22,
      summary: 'Binaural beats, flow state triggers, the 5-second rule, and overcoming procrastination.',
      content: {
        introduction: 'Procrastination is an emotional regulation issue, not a time management flaw. Lowering the barrier to entry unlocks instant momentum.',
        keyConcepts: [
          { title: 'The 2-Minute Entry Rule', explanation: 'Commit to working on a dreaded task for just 120 seconds. Once started, inertia keeps you going.' },
          { title: 'Flow State Triggers', explanation: 'Clear goals, immediate feedback, and a challenge level that matches your current skill.' }
        ],
        practicalSteps: [
          'Apply the 2-minute rule to the task you have been avoiding all week',
          'Use focus audio (brown noise or instrumental beats) to block ambient auditory distractions'
        ],
        proTip: 'Action precedes motivation. Do not wait to feel like doing something before starting.',
        takeaway: 'Starting with tiny, low-friction steps dissolves procrastination and ignites deep flow.'
      }
    },
    {
      id: 'c10-l10',
      courseId: 'course-10',
      order: 10,
      title: 'Creating Your Personal Productivity System',
      durationMinutes: 26,
      summary: 'The Sunday weekly review, second brain digital capture, and continuous refinement.',
      content: {
        introduction: 'Your mind is for having ideas, not holding them. A trusted external system frees your brain to think, create, and solve problems.',
        keyConcepts: [
          { title: 'The Weekly Review Ritual', explanation: 'A 30-minute Sunday review: Clear inboxes, review upcoming week, update goals, prioritize tasks.' },
          { title: 'Universal Quick Capture', explanation: 'Having one single trusted digital or analog inbox where thoughts and tasks are immediately noted.' }
        ],
        practicalSteps: [
          'Block 30 minutes every Sunday afternoon for your personal Weekly Review',
          'Set up a single digital capture widget on your phone home screen for instant idea dumping'
        ],
        proTip: 'Simplicity always wins. If your productivity system requires more than 15 minutes of daily maintenance, simplify it.',
        takeaway: 'A simple, consistent weekly review keeps your life organized, calm, and purposeful.'
      }
    }
  ],
  quiz: {
    id: 'quiz-c10',
    courseId: 'course-10',
    title: 'Productivity Systems & Time Mastery Assessment',
    description: 'Verify your knowledge of the Eisenhower matrix, time-blocking, habit loops, and the weekly review ritual.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'c10-q1',
        question: 'In the Eisenhower Decision Matrix, which quadrant should high-performing individuals spend the majority of their proactive time in?',
        type: 'multiple-choice',
        options: [
          'Quadrant 1: Urgent and Important (Crisis mode)',
          'Quadrant 2: Not Urgent, but Highly Important (Strategic planning, skill growth, prevention)',
          'Quadrant 3: Urgent, but Not Important (Interruptions and other people\'s minor emergencies)',
          'Quadrant 4: Not Urgent and Not Important (Mindless scrolling)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Quadrant 2 contains high-leverage activities like strategy, health, learning, and relationship building that prevent crises before they happen.'
      },
      {
        id: 'c10-q2',
        question: 'What is "Parkinson\'s Law"?',
        type: 'multiple-choice',
        options: [
          'Work expands to fill the time allotted for its completion',
          'You can only do 2 tasks in a 24-hour cycle',
          'Everyone is naturally more productive after 10 PM',
          'Every task takes exactly 60 minutes to complete'
        ],
        correctAnswerIndex: 0,
        explanation: 'Parkinson\'s Law states that giving yourself two weeks for a 2-hour task will cause it to consume all two weeks; tight constraints foster focus.'
      },
      {
        id: 'c10-q3',
        question: 'True or False: Multitasking allows human brains to accomplish two cognitively demanding tasks faster than doing them sequentially.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. The human brain cannot multitask complex thoughts; it rapidly context-switches, incurring significant cognitive fatigue and error rates.'
      },
      {
        id: 'c10-q4',
        question: 'What is the primary benefit of a dedicated end-of-day "Shutdown Ritual"?',
        type: 'multiple-choice',
        options: [
          'It lets you delete all your client emails without reading them',
          'It allows your mind to cleanly disengage from work anxiety so you can enjoy rest and recover properly',
          'It guarantees you will be promoted within 3 weeks',
          'It allows you to work all night while sleeping'
        ],
        correctAnswerIndex: 1,
        explanation: 'A formal shutdown ritual signals to your brain that work is done, preventing lingering stress and facilitating deep recovery.'
      },
      {
        id: 'c10-q5',
        question: 'What is the "2-Minute Rule" for overcoming procrastination on a daunting task?',
        type: 'multiple-choice',
        options: [
          'Commit to working on the task for just 2 minutes to break the initial mental friction and build momentum',
          'Give up on any task that takes longer than 2 minutes',
          'Delay every task by 2 minutes',
          'Take a 2-minute break after every 1 minute of work'
        ],
        correctAnswerIndex: 0,
        explanation: 'Committing to just 2 minutes removes emotional dread; once started, psychological inertia makes continuing much easier.'
      }
    ]
  }
};
