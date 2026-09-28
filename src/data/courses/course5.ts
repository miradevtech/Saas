import { Course } from '../../types';

export const COURSE_5: Course = {
  id: 'course-5',
  title: 'How to Market Your Business Online',
  shortDescription: 'Master customer acquisition funnels, SEO rankings, email sequences, paid ads, and ROI measurement.',
  fullDescription: 'Learn how to generate predictable traffic and turn casual visitors into paying customers. This 10-lesson marketing masterclass covers search engine optimization (SEO), email marketing funnels, social campaigns, advertising basics, and conversion tracking.',
  category: 'Marketing',
  level: 'Beginner',
  duration: '3.5 Hours',
  lessonsCount: 10,
  objectives: [
    'Define your high-converting online target audience and buyer personas',
    'Structure full-funnel marketing campaigns from awareness to retention',
    'Write high-engagement email marketing sequences and newsletters',
    'Understand search engine optimization (SEO) and calculate marketing ROI'
  ],
  visualTheme: {
    accentColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    gradientFrom: '#1e3a8a',
    gradientTo: '#172554',
    tagline: 'FUNNELS · TRAFFIC · CONVERSIONS'
  },
  lessons: [
    {
      id: 'c5-l1',
      courseId: 'course-5',
      order: 1,
      title: 'Understanding Online Marketing',
      durationMinutes: 18,
      summary: 'Inbound vs outbound, digital touchpoints, and the customer journey.',
      content: {
        introduction: 'Online marketing connects your product with people who need it. Inbound marketing pulls customers in by offering value, whereas outbound reaches out directly.',
        keyConcepts: [
          { title: 'Inbound vs Outbound', explanation: 'Inbound creates helpful content that attracts prospects; outbound uses direct ads and cold outreach.' },
          { title: 'The Modern Buyer Journey', explanation: 'Today’s buyers research, compare reviews, and evaluate social proof before ever talking to sales.' }
        ],
        practicalSteps: [
          'Map out the 5 touchpoints your customer experiences before buying',
          'Evaluate if your brand is present and credible at each step'
        ],
        proTip: 'Educate your audience so thoroughly that hiring you or buying your product becomes the obvious choice.',
        takeaway: 'Digital marketing is about earning attention by delivering consistent value.'
      }
    },
    {
      id: 'c5-l2',
      courseId: 'course-5',
      order: 2,
      title: 'Finding Your Target Audience',
      durationMinutes: 20,
      summary: 'Demographics, psychographics, online hangouts, and intent mapping.',
      content: {
        introduction: 'Selling to everyone wastes ad dollars. Pinpointing where your buyers hang out online lets you focus your energy where returns are highest.',
        keyConcepts: [
          { title: 'Psychographics vs Demographics', explanation: 'Demographics explain who your buyer is; psychographics explain why they buy.' },
          { title: 'Online Watering Holes', explanation: 'Niche subreddits, YouTube channels, forums, and groups where your buyers gather.' }
        ],
        practicalSteps: [
          'Identify 3 online communities where your target market discusses their problems daily',
          'Note down the exact words and phrases they use to describe their struggles'
        ],
        proTip: 'Use your customers’ exact vocabulary in your marketing copy to trigger instant rapport.',
        takeaway: 'Knowing where your audience spends attention eliminates wasted marketing effort.'
      }
    },
    {
      id: 'c5-l3',
      courseId: 'course-5',
      order: 3,
      title: 'Creating a Marketing Strategy',
      durationMinutes: 22,
      summary: 'The TOFU/MOFU/BOFU framework and unique selling propositions (USP).',
      content: {
        introduction: 'A strategy is a deliberate choice of where to play and how to win. It coordinates all your channels into a single cohesive flywheel.',
        keyConcepts: [
          { title: 'The Marketing Funnel', explanation: 'Top-of-Funnel (Awareness), Middle-of-Funnel (Evaluation), and Bottom-of-Funnel (Purchase).' },
          { title: 'Unique Value Proposition', explanation: 'A 1-sentence statement stating the outcome you deliver, for whom, and why you are different.' }
        ],
        practicalSteps: [
          'Draft your 1-sentence Unique Selling Proposition',
          'Assign at least one specific asset to each stage of your funnel'
        ],
        proTip: 'Do not try to close sales at Top-of-Funnel. Sell the next small step, not the final purchase.',
        takeaway: 'A structured funnel guides strangers systematically toward becoming loyal buyers.'
      }
    },
    {
      id: 'c5-l4',
      courseId: 'course-5',
      order: 4,
      title: 'Content Marketing',
      durationMinutes: 24,
      summary: 'Articles, lead magnets, case studies, and creating compounding educational assets.',
      content: {
        introduction: 'Content marketing turns your expertise into intellectual property that works for your business 24/7 without extra hourly labor.',
        keyConcepts: [
          { title: 'Compounding Content', explanation: 'Guides and tutorials that remain relevant and continue driving search traffic for years.' },
          { title: 'Lead Magnets', explanation: 'Free checklists, templates, or toolkits offered in exchange for a prospect’s email address.' }
        ],
        practicalSteps: [
          'Brainstorm a 2-page cheat sheet or checklist that solves an urgent headache for your audience',
          'Publish a comprehensive pillar guide addressing your industry\'s most common question'
        ],
        proTip: 'Make your free content better than your competitors\' paid products to establish authority.',
        takeaway: 'High-value educational content builds trust and attracts qualified inbound leads.'
      }
    },
    {
      id: 'c5-l5',
      courseId: 'course-5',
      order: 5,
      title: 'Social Media Marketing',
      durationMinutes: 20,
      summary: 'Organic distribution, community interaction, and turning likes into traffic.',
      content: {
        introduction: 'Social platforms are media networks. To succeed, you must provide native value that keeps users engaged on the feed.',
        keyConcepts: [
          { title: 'Native Content', explanation: 'Tailoring your message to each platform\'s format rather than cross-posting identically.' },
          { title: 'Engagement over Broadcast', explanation: 'Replying to comments and joining industry discussions is what drives organic visibility.' }
        ],
        practicalSteps: [
          'Choose one primary platform (LinkedIn for B2B, Instagram/TikTok for visual/B2C)',
          'Commit to posting 3 valuable insights per week for 30 consecutive days'
        ],
        proTip: 'Treat social media like a cocktail party, not a megaphone. Listen and converse.',
        takeaway: 'Consistent native social content builds authentic community and brand affinity.'
      }
    },
    {
      id: 'c5-l6',
      courseId: 'course-5',
      order: 6,
      title: 'Email Marketing',
      durationMinutes: 25,
      summary: 'Welcome sequences, open rates, segmentation, and newsletters that convert.',
      content: {
        introduction: 'Social algorithms change overnight, but your email list is an asset you own. Email marketing consistently yields the highest ROI of any digital channel.',
        keyConcepts: [
          { title: 'The 5-Day Welcome Sequence', explanation: 'Automated emails that introduce your brand, deliver value, overcome objections, and present your offer.' },
          { title: 'Segmentation', explanation: 'Grouping subscribers based on interest or purchase history to deliver hyper-relevant messages.' }
        ],
        practicalSteps: [
          'Set up an email service provider and create an automated 3-part welcome series',
          'Test subject lines to optimize open rates'
        ],
        proTip: 'Write emails to one single person, not a crowd. Use a personal, conversational tone.',
        takeaway: 'Your email list is your direct, algorithm-proof connection to high-intent customers.'
      }
    },
    {
      id: 'c5-l7',
      courseId: 'course-5',
      order: 7,
      title: 'Search Engines and SEO',
      durationMinutes: 26,
      summary: 'Keywords, on-page optimization, site speed, backlinks, and search intent.',
      content: {
        introduction: 'Search engine optimization (SEO) puts your website directly in front of people actively searching for answers and solutions right now.',
        keyConcepts: [
          { title: 'Search Intent', explanation: 'Understanding whether the searcher wants information, a specific website, or to buy.' },
          { title: 'On-Page SEO', explanation: 'Optimizing title tags, headers (H1/H2), URLs, and metadata for target keywords.' }
        ],
        practicalSteps: [
          'Identify 5 high-intent keywords your potential clients search for on Google',
          'Write a title tag and meta description that encourages high click-through rates'
        ],
        proTip: 'Answer the search query completely and quickly. Google rewards pages that satisfy searchers without bounce.',
        takeaway: 'SEO delivers compounding organic traffic from people already looking to buy.'
      }
    },
    {
      id: 'c5-l8',
      courseId: 'course-5',
      order: 8,
      title: 'Online Advertising Basics',
      durationMinutes: 24,
      summary: 'Pay-per-click (PPC), social ads, budgets, ad creative, and A/B split testing.',
      content: {
        introduction: 'Paid advertising allows you to buy attention on demand. When your unit economics are profitable, ads become a predictable growth machine.',
        keyConcepts: [
          { title: 'Cost Per Click (CPC) & CAC', explanation: 'How much it costs to drive a visitor and acquire a paying customer.' },
          { title: 'Creative Testing', explanation: 'Testing multiple hooks, visuals, and headlines to find winning ad combinations.' }
        ],
        practicalSteps: [
          'Set up a test campaign with a small $5/day budget to test two headline variants',
          'Track conversions and calculate your cost per lead'
        ],
        proTip: 'Never scale ad spend until your landing page converts organic traffic profitably.',
        takeaway: 'Paid ads amplify an offer that is already proven to convert organically.'
      }
    },
    {
      id: 'c5-l9',
      courseId: 'course-5',
      order: 9,
      title: 'Measuring Marketing Results',
      durationMinutes: 22,
      summary: 'Analytics dashboards, conversion rates, Customer Acquisition Cost (CAC), and LTV.',
      content: {
        introduction: 'What gets measured gets managed. Tracking the right metrics prevents you from wasting money on vanity numbers that don’t generate revenue.',
        keyConcepts: [
          { title: 'LTV to CAC Ratio', explanation: 'Aiming for a lifetime value that is at least 3x greater than customer acquisition cost.' },
          { title: 'Conversion Rate Optimization (CRO)', explanation: 'Increasing the percentage of visitors who take the desired action on your pages.' }
        ],
        practicalSteps: [
          'Set up web analytics to track key conversion goals (form submits, purchases)',
          'Calculate your baseline conversion rate on your primary landing page'
        ],
        proTip: 'Focus on revenue metrics and closed sales rather than vanity impressions and follower counts.',
        takeaway: 'Data-driven marketing decisions guarantee optimal allocation of your growth budget.'
      }
    },
    {
      id: 'c5-l10',
      courseId: 'course-5',
      order: 10,
      title: 'Creating Your Marketing Plan',
      durationMinutes: 25,
      summary: 'Assembling a 90-day actionable marketing sprint with milestones and KPIs.',
      content: {
        introduction: 'Bring everything together into a practical 90-day execution roadmap with specific deliverables, channels, and measurable targets.',
        keyConcepts: [
          { title: 'The 90-Day Execution Sprint', explanation: 'Breaking annual revenue goals into twelve weekly sprints with strict ownership.' },
          { title: 'Channel Focus', explanation: 'Committing to one primary content channel, one distribution channel, and one conversion mechanism.' }
        ],
        practicalSteps: [
          'Draft your 90-day marketing calendar with daily and weekly cadences',
          'Establish weekly review checkpoints to evaluate KPIs and adjust tactics'
        ],
        proTip: 'Ruthless consistency for 90 days beats sporadic brilliance followed by silence.',
        takeaway: 'A disciplined marketing plan turns random tactics into predictable business growth.'
      }
    }
  ],
  quiz: {
    id: 'quiz-c5',
    courseId: 'course-5',
    title: 'Digital Marketing & Growth Strategy Assessment',
    description: 'Test your understanding of marketing funnels, email sequences, SEO intent, and acquisition metrics.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'c5-q1',
        question: 'What is a "Lead Magnet" in digital content marketing?',
        type: 'multiple-choice',
        options: [
          'A physical magnet given out at trade shows',
          'A free, high-value digital resource (e.g. guide or checklist) offered in exchange for a contact email',
          'A paid software plugin that automatically clicks ads',
          'A penalty imposed by Google for spam'
        ],
        correctAnswerIndex: 1,
        explanation: 'A lead magnet delivers immediate targeted value to entice prospective buyers to join your permission-based email list.'
      },
      {
        id: 'c5-q2',
        question: 'Why is building an owned email list generally considered safer than relying solely on social media followers?',
        type: 'multiple-choice',
        options: [
          'Email algorithms change every day',
          'Social media platforms own the audience and can change distribution algorithms or ban accounts at any time',
          'Emails never require copywriting',
          'Social media is completely free of competitors'
        ],
        correctAnswerIndex: 1,
        explanation: 'Social platforms control your reach and can suppress your posts, whereas an email list is an owned direct line of communication.'
      },
      {
        id: 'c5-q3',
        question: 'True or False: In search engine optimization (SEO), "Search Intent" refers to what the user actually hopes to accomplish when typing a query.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Search intent defines whether the user wants to buy, find information, or locate a specific destination.'
      },
      {
        id: 'c5-q4',
        question: 'What does the marketing metric CAC stand for?',
        type: 'multiple-choice',
        options: [
          'Customer Acquisition Cost',
          'Company Annual Capital',
          'Click Automation Control',
          'Client Asset Conversion'
        ],
        correctAnswerIndex: 0,
        explanation: 'CAC stands for Customer Acquisition Cost, the total sales and marketing cost required to acquire one paying customer.'
      },
      {
        id: 'c5-q5',
        question: 'What is an optimal target ratio for Customer Lifetime Value (LTV) to Customer Acquisition Cost (CAC)?',
        type: 'multiple-choice',
        options: ['1:1', '3:1 or higher', '0.5:1', '1:5'],
        correctAnswerIndex: 1,
        explanation: 'A 3:1 ratio (or higher) is the standard modern business benchmark, signifying strong profitability and room to reinvest in growth.'
      }
    ]
  }
};
