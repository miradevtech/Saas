import { Course } from '../../types';

export const COURSE_6: Course = {
  id: 'course-6',
  title: 'How to Grow on Social Media',
  shortDescription: 'From selecting your niche and platform to short-form video hooks, caption copywriting, and analytics.',
  fullDescription: 'Grow an engaged, authentic following without burning out or wasting hours on mindless scrolling. Master content planning calendars, short-form video hooks on TikTok and Reels, compelling caption copywriting, community engagement, and data analytics.',
  category: 'Marketing',
  level: 'Beginner',
  duration: '3.0 Hours',
  lessonsCount: 10,
  objectives: [
    'Choose the optimal social platform aligned with your goals and format strengths',
    'Write thumb-stopping hooks that retain audience attention across the feed',
    'Produce high-retention short-form videos with basic mobile gear',
    'Read platform analytics to double down on winning formats and grow organically'
  ],
  visualTheme: {
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    gradientFrom: '#78350f',
    gradientTo: '#451a03',
    tagline: 'HOOKS · SHORT-FORM · AUDIENCE'
  },
  lessons: [
    {
      id: 'c6-l1',
      courseId: 'course-6',
      order: 1,
      title: 'Understanding Social Media',
      durationMinutes: 16,
      summary: 'The attention economy, recommendation algorithms, and creator mindset.',
      content: {
        introduction: 'Social platforms are search and recommendation engines powered by user watch-time and satisfaction. Shifting from consumer to creator is the first step.',
        keyConcepts: [
          { title: 'The Recommendation Algorithm', explanation: 'Platforms show your content to a small test audience; if retention is high, distribution explodes.' },
          { title: 'Creator vs Consumer', explanation: 'Audit feeds with analytical eyes to examine what captured your attention and why.' }
        ],
        practicalSteps: [
          'Switch your account to a Creator/Professional profile to access free analytics',
          'Save 5 viral videos in your niche and break down why the first 3 seconds worked'
        ],
        proTip: 'Algorithms reward watch time and shares more than passive likes.',
        takeaway: 'Social platforms distribute content that keeps viewers engaged and entertained.'
      }
    },
    {
      id: 'c6-l2',
      courseId: 'course-6',
      order: 2,
      title: 'Choosing the Right Platform',
      durationMinutes: 18,
      summary: 'LinkedIn, TikTok, Instagram, YouTube, X—matching your format and audience.',
      content: {
        introduction: 'Trying to be everywhere at once leads to diluted content and fast creator burnout. Dominate one platform before expanding.',
        keyConcepts: [
          { title: 'Platform Personalities', explanation: 'LinkedIn for career/B2B; TikTok/Reels for rapid discovery; YouTube for long-term depth.' },
          { title: 'Content Format Strengths', explanation: 'Match your natural inclination: writing (X/LinkedIn), speaking (Shorts/Podcasts), or visuals (Instagram).' }
        ],
        practicalSteps: [
          'Pick ONE primary platform that best fits your target demographic and content format',
          'Optimize your bio with a clear value proposition, credentials, and link'
        ],
        proTip: '10,000 highly engaged followers on the right platform is worth more than 100,000 passive ones.',
        takeaway: 'Focusing on one platform unlocks the deep feedback loops needed for organic growth.'
      }
    },
    {
      id: 'c6-l3',
      courseId: 'course-6',
      order: 3,
      title: 'Understanding Your Audience',
      durationMinutes: 18,
      summary: 'Audience psychology, relatable pain points, and niche positioning.',
      content: {
        introduction: 'People follow creators who articulate their struggles and aspirations better than they can themselves.',
        keyConcepts: [
          { title: 'The Niche Formula', explanation: 'Who you help + what outcome you help them achieve + without what painful obstacle.' },
          { title: 'Empathy in Content', explanation: 'Showing that you have been in their shoes creates magnetic community loyalty.' }
        ],
        practicalSteps: [
          'Draft a list of the 10 questions your audience is secretly afraid to ask',
          'Answer one question directly in each upcoming post'
        ],
        proTip: 'Write for a specific person, not a generic faceless crowd.',
        takeaway: 'Deep empathy for your audience\'s daily reality makes your content instantly relatable.'
      }
    },
    {
      id: 'c6-l4',
      courseId: 'course-6',
      order: 4,
      title: 'Creating Content',
      durationMinutes: 22,
      summary: 'The 3-pillar content system: Educate, Entertain, and Inspire.',
      content: {
        introduction: 'High-performing creators rely on proven content pillars to ensure they never run out of engaging ideas.',
        keyConcepts: [
          { title: 'The 3 Es Framework', explanation: 'Educational (how-to tutorials), Entertaining (relatable humor/stories), Inspiring (transformation).' },
          { title: 'Curated vs Created', explanation: 'Sharing lessons learned from books and industry leaders when you don’t have original data.' }
        ],
        practicalSteps: [
          'Map 3 specific topics under each of the 3 Es for your niche',
          'Create a swipe file of compelling concepts and ideas'
        ],
        proTip: 'Document your journey as you learn instead of trying to act like an omniscient guru.',
        takeaway: 'A balanced mix of education, entertainment, and inspiration keeps followers coming back.'
      }
    },
    {
      id: 'c6-l5',
      courseId: 'course-6',
      order: 5,
      title: 'Planning Your Content',
      durationMinutes: 20,
      summary: 'Batch production, editorial calendars, scheduling tools, and avoiding burnout.',
      content: {
        introduction: 'Waking up every morning asking "What should I post today?" is the fastest recipe for creative exhaustion. Batching is the solution.',
        keyConcepts: [
          { title: 'Batching Workflow', explanation: 'Dedicate one morning to ideation, one afternoon to creation, and schedule posts in advance.' },
          { title: 'Repurposing Flywheels', explanation: 'Turning 1 long-form thought into 3 short videos, a tweet thread, and a carousel.' }
        ],
        practicalSteps: [
          'Set up a simple weekly content calendar with designated publishing days',
          'Batch produce 5 posts in a single 2-hour focus block'
        ],
        proTip: 'Never create on the day you publish. Buffer at least 1 week of content ahead.',
        takeaway: 'Batching and scheduling protect creative energy and guarantee consistency.'
      }
    },
    {
      id: 'c6-l6',
      courseId: 'course-6',
      order: 6,
      title: 'Writing Better Captions',
      durationMinutes: 20,
      summary: 'The 3-second hook, formatting for skimmability, storytelling, and call-to-actions.',
      content: {
        introduction: 'Great visuals catch the eye; great captions hold the mind and prompt action. The first 80 characters determine whether they click "more".',
        keyConcepts: [
          { title: 'The Hook Line', explanation: 'Challenging conventional wisdom, teasing a surprising result, or stating a relatable dilemma.' },
          { title: 'Formatting & Spacing', explanation: 'Using short 1-2 sentence paragraphs and bullet points for effortless mobile reading.' }
        ],
        practicalSteps: [
          'Write 3 alternative hooks for your next caption and select the strongest one',
          'Add a clear, low-friction question at the end to prompt comments'
        ],
        proTip: 'Eliminate line breaks with walls of text. If it looks daunting to read on a phone, people skip it.',
        takeaway: 'Compelling hooks and scannable formatting turn casual scrollers into readers.'
      }
    },
    {
      id: 'c6-l7',
      courseId: 'course-6',
      order: 7,
      title: 'Creating Short-Form Videos',
      durationMinutes: 25,
      summary: 'Framing, natural lighting, audio clarity, jump-cuts, and on-screen captions.',
      content: {
        introduction: 'Short-form vertical video (9:16) dominates modern digital distribution. You don’t need an expensive camera—your smartphone is plenty.',
        keyConcepts: [
          { title: 'Audio is 50% of Video', explanation: 'Viewers tolerate average lighting, but will swipe away instantly from muffled, buzzing audio.' },
          { title: 'Dynamic Pacing', explanation: 'Removing pauses and "ums" with quick jump-cuts to maintain high retention.' }
        ],
        practicalSteps: [
          'Record a 45-second tip video facing natural window light with your phone camera',
          'Add auto-captions with high-contrast text centered in the safe zone'
        ],
        proTip: 'Look directly into the camera lens, not at your own face on the screen.',
        takeaway: 'Clean audio, natural light, and snappy pacing produce viral-ready short videos.'
      }
    },
    {
      id: 'c6-l8',
      courseId: 'course-6',
      order: 8,
      title: 'Building Engagement',
      durationMinutes: 18,
      summary: 'The 15-minute warmup routine, meaningful replies, and collaborating with peers.',
      content: {
        introduction: 'Social media is a two-way street. Building engagement requires active participation in other creators\' conversations.',
        keyConcepts: [
          { title: 'The Pre-Post Warmup', explanation: 'Engaging with 10 peer accounts 15 minutes before and after publishing your own post.' },
          { title: 'Thoughtful Replies', explanation: 'Leaving value-add commentary instead of generic emojis like fire or thumbs-up.' }
        ],
        practicalSteps: [
          'Create a list of 10 creators in your niche with similar or slightly larger audiences',
          'Contribute insightful comments on their daily posts to get noticed by their followers'
        ],
        proTip: 'Reply to every single comment on your own posts within the first hour of publishing.',
        takeaway: 'Generous engagement builds reciprocal relationships and fuels platform algorithms.'
      }
    },
    {
      id: 'c6-l9',
      courseId: 'course-6',
      order: 9,
      title: 'Understanding Analytics',
      durationMinutes: 22,
      summary: 'Retention graphs, shares, saves, profile visits, and calculating engagement rates.',
      content: {
        introduction: 'Your metrics tell an objective story about what your audience values. Learning to interpret analytics turns guesswork into science.',
        keyConcepts: [
          { title: 'Retention Curves', explanation: 'Identifying the exact second viewers drop off in your videos to improve future pacing.' },
          { title: 'Shares and Saves vs Likes', explanation: 'Shares indicate viral resonance; saves signal high-utility bookmarking.' }
        ],
        practicalSteps: [
          'Review your top 3 performing posts of the past month and note their common traits',
          'Check your average watch time percentage on video posts'
        ],
        proTip: 'Do more of what works. Re-package your top performing concept into a new format.',
        takeaway: 'Analytics provide the roadmap for what content to double down on.'
      }
    },
    {
      id: 'c6-l10',
      courseId: 'course-6',
      order: 10,
      title: 'Growing Your Audience',
      durationMinutes: 24,
      summary: 'Collaborations, guest appearances, newsletter migration, and monetization horizons.',
      content: {
        introduction: 'Long-term creator success requires turning rented social followers into owned email subscribers and sustainable monetization.',
        keyConcepts: [
          { title: 'Audience Migration', explanation: 'Offering exclusive resources to move followers from public feeds into your private newsletter.' },
          { title: 'Brand Alignment', explanation: 'Monetizing through services, digital products, or brand partnerships without compromising trust.' }
        ],
        practicalSteps: [
          'Set up a bio link offering a free high-value resource in exchange for email sign-up',
          'Pitch a collaborative joint live stream or carousel with a creator peer'
        ],
        proTip: 'Always treat your audience like valued colleagues, never as numbers or transaction targets.',
        takeaway: 'Migrating followers to owned channels transforms social engagement into a durable career.'
      }
    }
  ],
  quiz: {
    id: 'quiz-c6',
    courseId: 'course-6',
    title: 'Social Media Growth & Creator Strategy Quiz',
    description: 'Verify your knowledge of content pillars, short-form video retention, hooks, and engagement metrics.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'c6-q1',
        question: 'What is the primary role of the first 3 seconds ("the hook") in short-form video?',
        type: 'multiple-choice',
        options: [
          'To introduce your entire life story and credentials',
          'To stop the user from scrolling by creating curiosity or addressing a specific problem',
          'To show all your sponsor logos and copyright notices',
          'To ask people to subscribe before any content is shown'
        ],
        correctAnswerIndex: 1,
        explanation: 'The hook exists exclusively to capture attention, stop the scroll, and earn the next 10 seconds of watch-time.'
      },
      {
        id: 'c6-q2',
        question: 'Which engagement metric typically signals to platform algorithms that content has high utility value to the viewer?',
        type: 'multiple-choice',
        options: [
          'Saves and Shares',
          'Passive impressions',
          'Quick accidental taps',
          'Report clicks'
        ],
        correctAnswerIndex: 0,
        explanation: 'Saves indicate bookmarking for later reference, and shares indicate strong social currency—both heavily rewarded by recommendation algorithms.'
      },
      {
        id: 'c6-q3',
        question: 'True or False: Beginners should attempt to post daily on 6 different social platforms simultaneously.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. Spreading yourself thin across too many platforms dilutes quality and leads to creator burnout. Focus on one primary channel first.'
      },
      {
        id: 'c6-q4',
        question: 'What is the advantage of batch-creating content?',
        type: 'multiple-choice',
        options: [
          'It guarantees 1 million views instantly',
          'It prevents daily creative fatigue, preserves focus, and maintains a consistent publishing schedule',
          'It requires no editing',
          'It allows you to copy other people\'s content without attribution'
        ],
        correctAnswerIndex: 1,
        explanation: 'Batching groups similar cognitive tasks together, ensuring consistency and preventing daily decision fatigue.'
      },
      {
        id: 'c6-q5',
        question: 'Why is audio quality often considered more critical than video camera resolution?',
        type: 'multiple-choice',
        options: [
          'Viewers tolerate average visuals, but will immediately swipe away from irritating, muffled, or distorted audio',
          'Audio takes up more bandwidth than 4K video',
          'Microphones are much more expensive than cinema cameras',
          'Smartphones cannot record video without external equipment'
        ],
        correctAnswerIndex: 0,
        explanation: 'Poor audio causes physical discomfort and immediate viewer drop-off, making audio clarity paramount.'
      }
    ]
  }
};
