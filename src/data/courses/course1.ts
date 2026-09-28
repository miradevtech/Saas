import { Course } from '../../types';

export const COURSE_1: Course = {
  id: 'course-1',
  title: 'How to Start a Small Business',
  shortDescription: 'From validating business ideas and market research to launching and getting your first customers.',
  fullDescription: 'Starting a small business does not require a fortune—it requires a validated idea, an understanding of who your customers are, and the execution to make your first sales. This comprehensive 10-lesson course guides you step-by-step from zero to a functioning small business.',
  category: 'Business',
  level: 'Beginner',
  duration: '3.5 Hours',
  lessonsCount: 10,
  objectives: [
    'Identify and validate profitable business opportunities',
    'Understand customer pain points and conduct basic market research',
    'Draft a lean, actionable one-page business plan',
    'Structure pricing, find first paying customers, and scale sustainably'
  ],
  visualTheme: {
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    gradientFrom: '#3b0764',
    gradientTo: '#1e0533',
    tagline: 'STRATEGY · EXECUTION · CASHFLOW'
  },
  lessons: [
    {
      id: 'c1-l1',
      courseId: 'course-1',
      order: 1,
      title: 'Understanding Business Ideas',
      durationMinutes: 18,
      summary: 'Learn what separates a hobby or random thought from a viable, revenue-generating business idea.',
      content: {
        introduction: 'Every great enterprise begins with an idea, but not every idea is viable. A true business idea solves a specific pain point that people are willing and able to pay for.',
        keyConcepts: [
          { title: 'The Problem-Solution Fit', explanation: 'A business only exists if it removes friction, saves time, or creates value for a paying customer.' },
          { title: 'Idea vs Execution', explanation: 'Ideas are cheap; disciplined execution, unit economics, and customer discovery are what create enterprise value.' }
        ],
        practicalSteps: [
          'List 5 frustrations you or your peers experience weekly',
          'Evaluate if solutions currently exist and what their shortcomings are',
          'Determine if people are actively spending money to fix these frustrations'
        ],
        proTip: 'Never fall in love with your solution before you fall in love with the customer problem.',
        takeaway: 'Viable business ideas solve real friction with clear economic willingness to pay.'
      }
    },
    {
      id: 'c1-l2',
      courseId: 'course-1',
      order: 2,
      title: 'Finding a Business Opportunity',
      durationMinutes: 20,
      summary: 'Spot untapped market gaps, changing consumer behaviors, and emerging niches.',
      content: {
        introduction: 'Opportunities happen at the intersection of your unique skills, market demand, and underserved demographics.',
        keyConcepts: [
          { title: 'Market Gaps', explanation: 'Spaces where incumbent solutions are too expensive, slow, or indifferent to a niche.' },
          { title: 'Regulatory and Tech Shifts', explanation: 'New laws and tools frequently create fresh business opportunities overnight.' }
        ],
        practicalSteps: [
          'Audit local service providers or online marketplaces for 1-star reviews to identify unserved needs',
          'Map your personal unfair advantages (domain knowledge, network, geography)'
        ],
        proTip: 'Niche down until it hurts. It is much easier to dominate a small market than compete in a crowded one.',
        takeaway: 'Great opportunities emerge where customer frustration meets underserved niches.'
      }
    },
    {
      id: 'c1-l3',
      courseId: 'course-1',
      order: 3,
      title: 'Understanding Your Customers',
      durationMinutes: 22,
      summary: 'Define your ideal customer persona, their buying habits, and core emotional drivers.',
      content: {
        introduction: 'When you market to everyone, you appeal to no one. Defining your target customer gives clarity to your offering and branding.',
        keyConcepts: [
          { title: 'Ideal Customer Profile (ICP)', explanation: 'Detailed attributes of the person most likely to buy and benefit from your offer.' },
          { title: 'Emotional Drivers', explanation: 'Purchases are driven by saving time, reducing anxiety, increasing status, or gaining income.' }
        ],
        practicalSteps: [
          'Draft a customer persona sheet with age, goals, struggles, and purchasing habits',
          'Conduct 3 discovery conversations asking open-ended questions about their challenges'
        ],
        proTip: 'Ask customers about past behavior ("When was the last time you bought...?"), never hypothetical promises.',
        takeaway: 'Laser-focused customer understanding is the bedrock of persuasive messaging.'
      }
    },
    {
      id: 'c1-l4',
      courseId: 'course-1',
      order: 4,
      title: 'Basic Market Research',
      durationMinutes: 25,
      summary: 'Conduct fast, low-cost competitive analysis and market size estimations.',
      content: {
        introduction: 'Market research prevents you from building products nobody wants. Modern tools allow you to analyze competitors in hours without huge budgets.',
        keyConcepts: [
          { title: 'Competitive Matrix', explanation: 'Mapping competitors on a 2x2 grid based on price vs speed or quality vs customization.' },
          { title: 'Search Volume & Intent', explanation: 'Using search trends and discussion boards to verify active intent to buy.' }
        ],
        practicalSteps: [
          'Identify top 3 direct and indirect competitors',
          'Analyze their pricing, customer reviews, and response times',
          'Identify at least one decisive angle where your business will clearly win'
        ],
        proTip: 'Look at competitor negative reviews on Google Maps, Trustpilot, or Amazon—that is your product roadmap.',
        takeaway: 'Thorough competitive research highlights the whitespace your business will own.'
      }
    },
    {
      id: 'c1-l5',
      courseId: 'course-1',
      order: 5,
      title: 'Creating a Simple Business Plan',
      durationMinutes: 25,
      summary: 'Write a lean 1-page business canvas outlining value proposition, costs, and channels.',
      content: {
        introduction: 'Forget 50-page binder plans. Modern startups and small businesses use lean canvases that can be updated as assumptions get validated.',
        keyConcepts: [
          { title: 'The Lean Canvas', explanation: 'A 9-box overview of Problem, Solution, Unique Value Proposition, Channels, Revenue, and Costs.' },
          { title: 'Breakeven Calculation', explanation: 'Determining the exact units or billable hours required each month to cover overhead.' }
        ],
        practicalSteps: [
          'Fill out the 9 blocks of your Lean Canvas on a single page',
          'Calculate monthly fixed costs (software, rent, insurance) and variable costs per unit',
          'Calculate your breakeven unit volume'
        ],
        proTip: 'Keep your fixed costs near zero in the first 90 days. Preserve cash until revenue is predictable.',
        takeaway: 'A clear one-page plan gives clarity of focus and keeps unit economics grounded.'
      }
    },
    {
      id: 'c1-l6',
      courseId: 'course-1',
      order: 6,
      title: 'Setting Your Prices',
      durationMinutes: 20,
      summary: 'Value-based pricing vs cost-plus pricing, profit margins, and positioning.',
      content: {
        introduction: 'Pricing is the single biggest lever on profitability. Most beginner entrepreneurs undercharge out of fear, resulting in unsustainable businesses.',
        keyConcepts: [
          { title: 'Cost-Plus vs Value-Based', explanation: 'Cost-plus covers expenses with a margin; value-based charges a fraction of the value created for the buyer.' },
          { title: 'Price Elasticity & Positioning', explanation: 'Higher prices often attract higher-commitment clients with lower support friction.' }
        ],
        practicalSteps: [
          'Calculate your full costs including taxes, tools, and personal hourly baseline',
          'Benchmark against market standards and set tiered pricing (Basic, Pro, Premium)'
        ],
        proTip: 'Never compete on being the cheapest. Compete on reliability, speed, and customer experience.',
        takeaway: 'Price for healthy margins so you have the capital to deliver exceptional service.'
      }
    },
    {
      id: 'c1-l7',
      courseId: 'course-1',
      order: 7,
      title: 'Marketing Your Business',
      durationMinutes: 24,
      summary: 'Organic outreach, direct marketing, and establishing a professional presence.',
      content: {
        introduction: 'Having a great product is useless if people do not know you exist. Marketing is the repeatable process of generating qualified interest.',
        keyConcepts: [
          { title: 'The Awareness Funnel', explanation: 'Guiding prospects from unaware -> problem aware -> solution aware -> buyer.' },
          { title: 'Consistent Messaging', explanation: 'Speaking directly to the primary outcome your service or product delivers.' }
        ],
        practicalSteps: [
          'Set up your primary digital storefront or profile',
          'Draft a clear 1-sentence value proposition',
          'Select one primary channel to focus on for the first 60 days'
        ],
        proTip: 'Master one marketing channel before attempting five. Depth beats scattered presence.',
        takeaway: 'Marketing is about consistently delivering your core message to the right audience.'
      }
    },
    {
      id: 'c1-l8',
      courseId: 'course-1',
      order: 8,
      title: 'Finding Your First Customers',
      durationMinutes: 22,
      summary: 'Direct outreach, referrals, network activation, and closing early sales.',
      content: {
        introduction: 'Your first 10 customers will not come from algorithm magic; they come from direct personal outreach, relationship building, and hustle.',
        keyConcepts: [
          { title: 'Warm Network Activation', explanation: 'Reaching out to acquaintances with a low-pressure update on what you are offering.' },
          { title: 'The Beta Offer', explanation: 'Offering early discounts in exchange for prompt feedback, case studies, and testimonials.' }
        ],
        practicalSteps: [
          'Compile a list of 25 people who may know someone needing your solution',
          'Send personalized outreach messages offering value and asking for advice or referrals',
          'Secure 3 trial or discounted commitments'
        ],
        proTip: 'Do things that do not scale early on. Deliver concierge service to your initial buyers.',
        takeaway: 'Direct conversation and proactive outreach are the quickest routes to your first revenue.'
      }
    },
    {
      id: 'c1-l9',
      courseId: 'course-1',
      order: 9,
      title: 'Managing Your Business',
      durationMinutes: 20,
      summary: 'Invoicing, bookkeeping basics, client communication, and operating rhythms.',
      content: {
        introduction: 'Good operations keep a business afloat. Managing cash flow, timely invoicing, and systematic project delivery creates client trust and stability.',
        keyConcepts: [
          { title: 'Cash Flow Management', explanation: 'Revenue is vanity, profit is sanity, but cash flow is king. Always monitor net cash reserves.' },
          { title: 'Standard Operating Procedures (SOPs)', explanation: 'Documenting repeatable steps so quality remains consistent every single time.' }
        ],
        practicalSteps: [
          'Open a dedicated business bank account to separate personal and company finances',
          'Set up a simple digital invoicing and expense tracking routine',
          'Create a checklist for onboarding each new client'
        ],
        proTip: 'Send invoices immediately upon milestone delivery with clear due dates and payment links.',
        takeaway: 'Organized financial and operational routines protect your business from costly surprises.'
      }
    },
    {
      id: 'c1-l10',
      courseId: 'course-1',
      order: 10,
      title: 'Growing Your Business',
      durationMinutes: 26,
      summary: 'Upselling, retention, referrals, and scaling beyond your personal time.',
      content: {
        introduction: 'Once you have a working business model, growth is achieved by keeping existing customers happy, increasing average order value, and expanding your reach.',
        keyConcepts: [
          { title: 'Customer Lifetime Value (LTV)', explanation: 'The total value a client generates over the duration of their relationship with you.' },
          { title: 'Referral Engines', explanation: 'Systematically asking delighted clients for introductions to others in their peer network.' }
        ],
        practicalSteps: [
          'Implement a post-project check-in at 30 days asking for feedback and referrals',
          'Design an add-on or continuity retainer offer for past clients',
          'Identify repetitive tasks ready to be automated or outsourced'
        ],
        proTip: 'It costs 5x more to acquire a new customer than to retain an existing one. Prioritize customer delight.',
        takeaway: 'Sustainable business growth is powered by word-of-mouth, high retention, and disciplined reinvestment.'
      }
    }
  ],
  quiz: {
    id: 'quiz-c1',
    courseId: 'course-1',
    title: 'Small Business Fundamentals Assessment',
    description: 'Verify your knowledge on ideation, customer validation, lean business planning, and pricing strategies.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'c1-q1',
        question: 'What is the primary indicator of a viable business idea?',
        type: 'multiple-choice',
        options: [
          'You have a cool logo and high-tech software ready',
          'It solves a genuine pain point that people are willing and able to pay to resolve',
          'No other company has ever attempted anything similar in history',
          'It requires zero investment and zero risk'
        ],
        correctAnswerIndex: 1,
        explanation: 'A viable business must solve a genuine problem where customers have both the willingness and ability to pay.'
      },
      {
        id: 'c1-q2',
        question: 'True or False: Cost-plus pricing is always superior to value-based pricing for small service businesses.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. Value-based pricing ties your price to the economic or emotional return the client receives, which usually yields much higher margins than just marking up hourly costs.'
      },
      {
        id: 'c1-q3',
        question: 'When validating customer demand, which questions are most reliable?',
        type: 'multiple-choice',
        options: [
          'Hypothetical questions like "Would you buy this if I built it?"',
          'Questions about past behavior like "When was the last time you spent money to solve this problem?"',
          'Asking friends if they think the idea sounds exciting',
          'Relying solely on social media poll likes'
        ],
        correctAnswerIndex: 1,
        explanation: 'Past behavior and historical purchases reveal real willingness to pay, whereas hypothetical answers often yield false positives.'
      },
      {
        id: 'c1-q4',
        question: 'What is the purpose of a one-page Lean Canvas?',
        type: 'multiple-choice',
        options: [
          'To replace accounting audits',
          'To map out core business assumptions, channels, and economics on a single living document',
          'To impress bank managers with complex academic theories',
          'To guarantee 100% investment approval'
        ],
        correctAnswerIndex: 1,
        explanation: 'A lean canvas maps assumptions, problems, solutions, and unit economics quickly so you can test them against reality.'
      },
      {
        id: 'c1-q5',
        question: 'What is generally the most effective way to secure your first 5–10 paying clients?',
        type: 'multiple-choice',
        options: [
          'Spending thousands on broad untargeted digital ads',
          'Direct personal outreach, network activation, and high-touch concierge service',
          'Waiting for organic search engine rankings over two years',
          'Printing thousands of flyers and leaving them on cars'
        ],
        correctAnswerIndex: 1,
        explanation: 'Direct outreach, referrals, and high-touch concierge attention create the fastest feedback loops and closed sales for new businesses.'
      }
    ]
  }
};
