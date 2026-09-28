import { Course } from '../../types';

export const COURSE_7: Course = {
  id: 'course-7',
  title: 'How to Start Freelancing Online',
  shortDescription: 'Monetize your existing skills, package compelling service offers, write winning proposals, and secure high-paying retainers.',
  fullDescription: 'Break free from traditional employment limits and build a thriving online freelance career. Learn how to identify marketable skills, package them into irresistible client service offers, build a credibility portfolio, pitch clients with confidence, handle invoicing, and secure recurring retainers.',
  category: 'Business',
  level: 'Beginner',
  duration: '3.5 Hours',
  lessonsCount: 10,
  objectives: [
    'Identify your most profitable, marketable freelance skillset',
    'Package services into clear, fixed-price outcome tiers',
    'Write personalized, winning client proposals that stand out from competitors',
    'Manage client expectations, contracts, milestone invoicing, and retainer contracts'
  ],
  visualTheme: {
    accentColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    gradientFrom: '#831843',
    gradientTo: '#500724',
    tagline: 'PROPOSALS · CLIENTS · FREEDOM'
  },
  lessons: [
    {
      id: 'c7-l1',
      courseId: 'course-7',
      order: 1,
      title: 'What Is Freelancing?',
      durationMinutes: 16,
      summary: 'The freelance business model, autonomy, risks, client relationships, and tax considerations.',
      content: {
        introduction: 'Freelancing is operating as a micro-consultancy. You are not an employee; you are a service partner providing specialized business value.',
        keyConcepts: [
          { title: 'Contractor vs Employee Mindset', explanation: 'Freelancers solve specific business challenges with accountability and speed.' },
          { title: 'The Freedom & Responsibility Balance', explanation: 'You control your schedule, rates, and projects, but must manage your own pipeline and taxes.' }
        ],
        practicalSteps: [
          'Audit your current employment contract for non-compete clauses',
          'Calculate your baseline hourly living expense to determine minimum billable rates'
        ],
        proTip: 'Treat yourself as a business owner from day one. You are a service partner, not a subordinate.',
        takeaway: 'Freelancing exchanges guaranteed corporate structure for autonomy and uncapped income potential.'
      }
    },
    {
      id: 'c7-l2',
      courseId: 'course-7',
      order: 2,
      title: 'Choosing a Skill',
      durationMinutes: 18,
      summary: 'Auditing your background for writing, design, coding, virtual assistance, and marketing.',
      content: {
        introduction: 'You don’t need to learn a completely new discipline from scratch. You already possess skills that businesses pay thousands of dollars for.',
        keyConcepts: [
          { title: 'High-Income Skills', explanation: 'Skills directly tied to saving a business time or increasing revenue (copywriting, design, web dev).' },
          { title: 'Stacking Skills', explanation: 'Combining two moderate skills (e.g. accounting + spreadsheet automation) to form an unfair niche advantage.' }
        ],
        practicalSteps: [
          'List 10 tasks you have performed in past jobs or school that others found difficult',
          'Select the one skill that you enjoy and that has proven commercial demand'
        ],
        proTip: 'Pick a skill you can deliver competently today. Confidence accelerates your first client win.',
        takeaway: 'Monetize what you already do well rather than waiting years to master a completely unfamiliar craft.'
      }
    },
    {
      id: 'c7-l3',
      courseId: 'course-7',
      order: 3,
      title: 'Choosing Your Service',
      durationMinutes: 20,
      summary: 'Productized services, deliverables, packages, and scope clarity.',
      content: {
        introduction: 'Offering "general graphic design" is vague and hard to price. Offering "5 custom YouTube thumbnails in 48 hours" is an easy, no-brainer purchase.',
        keyConcepts: [
          { title: 'Productized Services', explanation: 'Packaging a service with clear deliverables, fixed timelines, and transparent pricing.' },
          { title: 'Scope Definition', explanation: 'Explicitly defining what is included—and what is excluded—to prevent scope creep.' }
        ],
        practicalSteps: [
          'Create a 3-tier service menu (e.g., Starter, Standard, Full Concierge)',
          'Write down exact deliverables, revision limits, and turnaround time for each tier'
        ],
        proTip: 'Always cap revisions (e.g., "Includes 2 rounds of revisions") to avoid endless project delays.',
        takeaway: 'Defined productized packages make buying effortless for busy clients.'
      }
    },
    {
      id: 'c7-l4',
      courseId: 'course-7',
      order: 4,
      title: 'Creating a Portfolio',
      durationMinutes: 24,
      summary: 'Sample client projects, mock work, case studies, and presentation formats.',
      content: {
        introduction: 'No client cares where you went to school; they care about whether you can solve their problem. A portfolio is tangible evidence.',
        keyConcepts: [
          { title: 'The Spec Work Strategy', explanation: 'If you have no past clients, redesign an existing company’s website or rewrite their sales email as a case study.' },
          { title: 'Case Study Layout', explanation: 'Problem -> Action Taken -> Visual Result -> Business Outcome.' }
        ],
        practicalSteps: [
          'Create 3 pristine sample projects demonstrating your specific service',
          'Host them on a simple, fast-loading one-page link'
        ],
        proTip: 'Show before-and-after comparisons whenever possible—clients love seeing clear contrast.',
        takeaway: 'Three high-caliber sample projects are all you need to start closing high-ticket clients.'
      }
    },
    {
      id: 'c7-l5',
      courseId: 'course-7',
      order: 5,
      title: 'Finding Potential Clients',
      durationMinutes: 25,
      summary: 'Warm network, LinkedIn search filters, job boards (Upwork, Contra), and targeted cold outreach.',
      content: {
        introduction: 'Clients are everywhere once you know where to look. Balancing active inbound profiles with proactive outbound prospecting creates a full pipeline.',
        keyConcepts: [
          { title: 'Platform Ecosystems', explanation: 'Leveraging established platforms for immediate demand while building direct direct outreach channels.' },
          { title: 'Boolean Search Operators', explanation: 'Searching LinkedIn for "hiring freelance [skill]" to find decision-makers posting live needs.' }
        ],
        practicalSteps: [
          'Set up complete profiles on 2 freelance platforms',
          'Build a list of 20 prospective companies that match your ideal client profile'
        ],
        proTip: 'Target small-to-medium businesses where the founder or marketing director makes fast hiring decisions.',
        takeaway: 'Proactive searching and professional profiles generate a steady stream of opportunities.'
      }
    },
    {
      id: 'c7-l6',
      courseId: 'course-7',
      order: 6,
      title: 'Writing Proposals',
      durationMinutes: 24,
      summary: 'The 4-part winning proposal structure, personalization, and video pitches.',
      content: {
        introduction: 'Most freelancers send generic, copied-and-pasted proposals that get deleted in 5 seconds. A personalized proposal wins the contract almost every time.',
        keyConcepts: [
          { title: 'The Problem Restatement Hook', explanation: 'Demonstrating that you thoroughly understand their unique dilemma in sentence one.' },
          { title: 'The Loom Video Pitch', explanation: 'Recording a 90-second screen-share walking through their website with 2 actionable tips.' }
        ],
        practicalSteps: [
          'Draft a customized proposal template focusing 80% on the client’s problem and 20% on yourself',
          'Include a direct link to the most relevant single case study in your portfolio'
        ],
        proTip: 'Mention the client\'s name and reference a specific detail from their post in the very first sentence.',
        takeaway: 'Personalized proposals that lead with solutions win against hundreds of generic bids.'
      }
    },
    {
      id: 'c7-l7',
      courseId: 'course-7',
      order: 7,
      title: 'Communicating With Clients',
      durationMinutes: 20,
      summary: 'Discovery calls, objection handling, async updates, and boundary setting.',
      content: {
        introduction: 'Freelance success is 50% technical skill and 50% communication. Proactive communication puts anxious clients at ease.',
        keyConcepts: [
          { title: 'The Discovery Call Framework', explanation: 'Asking diagnostic questions to understand the business goal behind the request.' },
          { title: 'Weekly Async Status Updates', explanation: 'Sending a concise Friday bullet-point email: What was done, What is next, Blockers.' }
        ],
        practicalSteps: [
          'Prepare a 5-question discovery call script',
          'Establish business hours in your email signature so clients respect your personal time'
        ],
        proTip: 'Never let a client ask you "what is the status of my project?" Beat them to it with proactive updates.',
        takeaway: 'Exceptional, proactive communication turns one-time clients into lifelong advocates.'
      }
    },
    {
      id: 'c7-l8',
      courseId: 'course-7',
      order: 8,
      title: 'Setting Your Prices',
      durationMinutes: 22,
      summary: 'Hourly vs project-based vs value-based pricing, rate increases, and minimum project fees.',
      content: {
        introduction: 'Billing hourly penalizes efficiency: the faster and better you get, the less money you make. Transitioning to project pricing unlocks higher earnings.',
        keyConcepts: [
          { title: 'Project-Based Pricing', explanation: 'Charging a flat fee based on the outcome delivered rather than tracked stopwatch hours.' },
          { title: 'Anchor Pricing', explanation: 'Presenting a premium package first so your standard package feels like extraordinary value.' }
        ],
        practicalSteps: [
          'Establish a minimum project engagement fee ($500 or $1,000 minimum)',
          'Convert your service packages from hourly estimates to fixed outcome prices'
        ],
        proTip: 'Increase your rates by 15-20% with every three consecutive clients you successfully onboard.',
        takeaway: 'Outcome-based project pricing rewards your expertise and boosts your earnings.'
      }
    },
    {
      id: 'c7-l9',
      courseId: 'course-7',
      order: 9,
      title: 'Managing Freelance Projects',
      durationMinutes: 20,
      summary: 'Contracts, upfront deposits, milestone tracking, and handling revisions smoothly.',
      content: {
        introduction: 'Never start work without a signed agreement and an upfront deposit. Professional systems protect both you and your client.',
        keyConcepts: [
          { title: 'The 50/50 Deposit Model', explanation: '50% deposit before project kickoff, and 50% balance upon final approved delivery.' },
          { title: 'Simple Service Agreements', explanation: 'A 2-page contract defining scope, timeline, payment terms, and intellectual property transfer.' }
        ],
        practicalSteps: [
          'Set up a contract template using an electronic signature service',
          'Integrate a payment link that automatically issues receipts'
        ],
        proTip: 'Never release final high-resolution files until the remaining balance is paid in full.',
        takeaway: 'Signed contracts and upfront deposits ensure you get paid on time, every time.'
      }
    },
    {
      id: 'c7-l10',
      courseId: 'course-7',
      order: 10,
      title: 'Getting Paid and Building Long-Term Clients',
      durationMinutes: 25,
      summary: 'Monthly recurring retainers, referrals, testimonials, and scaling to full-time income.',
      content: {
        introduction: 'The holy grail of freelancing is recurring monthly revenue. Retainers eliminate the monthly feast-or-famine cycle entirely.',
        keyConcepts: [
          { title: 'The Retainer Transition', explanation: 'Pitching ongoing maintenance, weekly content, or advisory support at project conclusion.' },
          { title: 'The Testimonial Engine', explanation: 'Requesting a structured video or written review within 48 hours of project launch.' }
        ],
        practicalSteps: [
          'Draft a monthly retainer proposal for past project clients',
          'Send a review questionnaire asking about results achieved'
        ],
        proTip: 'Three retainer clients paying $1,500/month gives you a $4,500/month stable baseline before taking on any new projects.',
        takeaway: 'Retainers and client referrals transform freelancing into a predictable, durable business.'
      }
    }
  ],
  quiz: {
    id: 'quiz-c7',
    courseId: 'course-7',
    title: 'Freelance Business & Client Acquisition Assessment',
    description: 'Verify your understanding of service packaging, proposal writing, pricing models, and retainers.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'c7-q1',
        question: 'Why is hourly billing often considered disadvantageous for experienced freelancers?',
        type: 'multiple-choice',
        options: [
          'It is illegal in most countries',
          'As you become faster and more skilled, you bill fewer hours and effectively penalize yourself for efficiency',
          'Clients never agree to pay hourly rates',
          'Hourly billing requires manual paper timecards'
        ],
        correctAnswerIndex: 1,
        explanation: 'Hourly billing penalizes mastery; as you solve problems quicker, you earn less unless you transition to value or project pricing.'
      },
      {
        id: 'c7-q2',
        question: 'What is the recommended financial policy before starting work on a freelance project?',
        type: 'multiple-choice',
        options: [
          'Work for free and hope they decide to pay you later',
          'Require a signed agreement and an upfront deposit (e.g. 50%) before beginning work',
          'Demand 100% payment in cash delivered in person',
          'Send invoices only after 6 months have elapsed'
        ],
        correctAnswerIndex: 1,
        explanation: 'A signed contract and an upfront deposit (typically 50%) secure client commitment and protect your time.'
      },
      {
        id: 'c7-q3',
        question: 'True or False: If you have no past paying clients, you cannot build a credible freelance portfolio.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. You can create sample case studies, spec work, or redesign real-world brand assets to showcase your capability.'
      },
      {
        id: 'c7-q4',
        question: 'What is a "productized service"?',
        type: 'multiple-choice',
        options: [
          'A physical product sold in a retail grocery store',
          'A defined service package with standard deliverables, turnaround time, and clear fixed pricing',
          'A digital cryptocurrency token',
          'An hourly open-ended consulting contract'
        ],
        correctAnswerIndex: 1,
        explanation: 'Productized services turn complex services into clear, predictable packages that are simple for clients to understand and buy.'
      },
      {
        id: 'c7-q5',
        question: 'What is the primary benefit of securing monthly client retainers?',
        type: 'multiple-choice',
        options: [
          'It eliminates the stressful "feast or famine" income swings by providing predictable monthly revenue',
          'It guarantees you never have to communicate with clients again',
          'It requires 80 hours of work per week without exception',
          'It replaces the need to pay any income taxes'
        ],
        correctAnswerIndex: 0,
        explanation: 'Monthly retainers provide predictable recurring income, stabilizing your finances and reducing the need to constantly hunt for new leads.'
      }
    ]
  }
};
