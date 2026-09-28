import { Course } from '../../types';

export const COURSE_3: Course = {
  id: 'course-3',
  title: 'Learn Graphic Design from Scratch',
  shortDescription: 'Master color theory, modern typography, layout, social graphics, branding essentials, and portfolio creation.',
  fullDescription: 'Become a capable visual designer even if you have never drawn a line before. This course equips you with the universal design rules governing balance, hierarchy, typography, palette selection, social media collateral, and building a starter design portfolio.',
  category: 'Design',
  level: 'Beginner',
  duration: '4.0 Hours',
  lessonsCount: 10,
  objectives: [
    'Understand fundamental design principles: contrast, alignment, balance, and proximity',
    'Pair typefaces effectively and establish clear typographic scale',
    'Construct cohesive color harmonies and brand style guides',
    'Design engaging social media posts, posters, and a showcase portfolio'
  ],
  visualTheme: {
    accentColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    gradientFrom: '#831843',
    gradientTo: '#500724',
    tagline: 'COLOR · TYPOGRAPHY · LAYOUT'
  },
  lessons: [
    {
      id: 'c3-l1',
      courseId: 'course-3',
      order: 1,
      title: 'What Is Graphic Design?',
      durationMinutes: 16,
      summary: 'Visual communication, problem-solving through design, and commercial applications.',
      content: {
        introduction: 'Graphic design is not decoration; it is visual communication. Good design organizes information to deliver a message clearly and memorably.',
        keyConcepts: [
          { title: 'Form Follows Function', explanation: 'A visual must first communicate its core message before looking pretty.' },
          { title: 'The Role of the Designer', explanation: 'Solving communication problems for brands, audiences, and interfaces.' }
        ],
        practicalSteps: [
          'Collect 3 examples of everyday design (a cereal box, a billboard, a book cover)',
          'Identify what message each piece conveys within 2 seconds'
        ],
        proTip: 'Design is about solving problems with clarity, not making things complicated.',
        takeaway: 'Graphic design uses visual elements to communicate messages and drive action.'
      }
    },
    {
      id: 'c3-l2',
      courseId: 'course-3',
      order: 2,
      title: 'Basic Design Principles',
      durationMinutes: 24,
      summary: 'Contrast, repetition, alignment, and proximity (C.R.A.P.) in practice.',
      content: {
        introduction: 'The core four design principles govern how human eyes process visual stimuli. Mastering them instantly elevates any layout.',
        keyConcepts: [
          { title: 'Contrast', explanation: 'Making distinct elements noticeably different to guide the viewer\'s eye.' },
          { title: 'Proximity', explanation: 'Grouping related items together to signal relationship and logical organization.' }
        ],
        practicalSteps: [
          'Audit a crowded poster or webpage using the C.R.A.P. principles',
          'Rearrange text elements so related information shares consistent proximity'
        ],
        proTip: 'If elements are not the same, make them very different. Slight differences look like mistakes.',
        takeaway: 'Contrast, repetition, alignment, and proximity form the structural backbone of visual order.'
      }
    },
    {
      id: 'c3-l3',
      courseId: 'course-3',
      order: 3,
      title: 'Understanding Typography',
      durationMinutes: 26,
      summary: 'Serif vs sans-serif, kerning, leading, hierarchy, and font pairing rules.',
      content: {
        introduction: 'Typography is the voice of your text. The right font imparts tone, authority, or friendliness before a single word is read.',
        keyConcepts: [
          { title: 'Serif vs Sans-Serif vs Display', explanation: 'Serifs provide tradition and editorial feel; sans-serifs offer modern cleanliness.' },
          { title: 'Typographic Hierarchy', explanation: 'Using size, weight, and line height to lead readers seamlessly from H1 to body text.' }
        ],
        practicalSteps: [
          'Choose a primary body font (e.g., Inter, Open Sans) and a heading companion font',
          'Set up a type scale: 12px, 14px, 16px, 20px, 28px, 40px'
        ],
        proTip: 'Limit yourself to a maximum of two font families per project to maintain brand cohesion.',
        takeaway: 'Great typography creates effortless legibility and clear informational hierarchy.'
      }
    },
    {
      id: 'c3-l4',
      courseId: 'course-3',
      order: 4,
      title: 'Understanding Color',
      durationMinutes: 22,
      summary: 'Color wheel, complementary harmonies, emotional psychology, and accessibility.',
      content: {
        introduction: 'Color triggers instantaneous emotional responses. Understanding the color wheel allows you to build harmonic palettes.',
        keyConcepts: [
          { title: 'Color Harmonies', explanation: 'Monochromatic, analogous, complementary, and triadic relationships on the color wheel.' },
          { title: 'The 60-30-10 Rule', explanation: '60% dominant neutral background, 30% secondary structure, and 10% accent pop.' }
        ],
        practicalSteps: [
          'Build a 5-color palette using the 60-30-10 distribution',
          'Test contrast ratios to ensure accessibility standards (WCAG AA rating)'
        ],
        proTip: 'When in doubt, use neutral grays/whites for the majority of the canvas and save bright colors for call-to-actions.',
        takeaway: 'Intentional color palettes evoke desired emotion and direct visual attention.'
      }
    },
    {
      id: 'c3-l5',
      courseId: 'course-3',
      order: 5,
      title: 'Layout and Composition',
      durationMinutes: 25,
      summary: 'Grid systems, the rule of thirds, negative space, and visual rhythm.',
      content: {
        introduction: 'Layout is the arrangement of visual elements on a canvas. Grids provide invisible scaffolding that makes layouts feel harmonious.',
        keyConcepts: [
          { title: 'Negative Space (White Space)', explanation: 'Empty space is an active design element that lets content breathe and look premium.' },
          { title: '12-Column Grids', explanation: 'Standard framework for creating aligned, modular compositions across desktop and mobile.' }
        ],
        practicalSteps: [
          'Design a mock layout with an intentional 12-column grid overlay',
          'Increase white space by 20% around your main headline and observe the improvement'
        ],
        proTip: 'Cluttered designs look amateur. Embrace breathing room around key elements.',
        takeaway: 'Strong compositions use grids and generous white space to create effortless balance.'
      }
    },
    {
      id: 'c3-l6',
      courseId: 'course-3',
      order: 6,
      title: 'Introduction to Branding',
      durationMinutes: 28,
      summary: 'Brand identity, logos, color guidelines, tone of voice, and style guides.',
      content: {
        introduction: 'A brand is not just a logo; it is the entire sensory impression and personality a company projects to the world.',
        keyConcepts: [
          { title: 'Brand Archetypes', explanation: 'Defining the brand persona: The Creator, The Explorer, The Sage, or The Caregiver.' },
          { title: 'The 1-Page Brand Guideline', explanation: 'Logo clear-space, primary colors, typography pairings, and imagery rules.' }
        ],
        practicalSteps: [
          'Write 3 core brand personality adjectives for a fictional or real brand',
          'Assemble a 1-page brand guide sheet with logo variants, hex codes, and font rules'
        ],
        proTip: 'Consistency is what makes branding powerful. Never stretch or recolor logos haphazardly.',
        takeaway: 'Cohesive brand identity creates instant recognition and long-term customer trust.'
      }
    },
    {
      id: 'c3-l7',
      courseId: 'course-3',
      order: 7,
      title: 'Creating Social Media Graphics',
      durationMinutes: 24,
      summary: 'Design templates for Instagram carousels, stories, LinkedIn headers, and thumbnails.',
      content: {
        introduction: 'Social platforms are noisy visual feeds. Your graphics must hook attention within a split second to stop the scroll.',
        keyConcepts: [
          { title: 'The Hook Frame', explanation: 'The first slide or thumbnail must feature high-contrast headline text and clean imagery.' },
          { title: 'Platform Aspect Ratios', explanation: 'Mastering 1:1 square, 4:5 portrait, and 9:16 vertical video dimensions.' }
        ],
        practicalSteps: [
          'Design a 3-slide educational carousel for Instagram or LinkedIn',
          'Ensure the title is easily readable on a small mobile screen'
        ],
        proTip: 'Always preview your social graphic at 25% scale to simulate a mobile smartphone screen.',
        takeaway: 'Effective social design pairs thumb-stopping contrast with quick bite-sized takeaways.'
      }
    },
    {
      id: 'c3-l8',
      courseId: 'course-3',
      order: 8,
      title: 'Creating Posters and Flyers',
      durationMinutes: 22,
      summary: 'Print vs digital resolution, bleed lines, margin safety, and event typography.',
      content: {
        introduction: 'Posters require strong hierarchy that works from 10 feet away as well as up close. Balancing headline impact with detail is key.',
        keyConcepts: [
          { title: 'DPI & Print Specs', explanation: 'Understanding 300 DPI resolution, CMYK color spaces, and bleed margins.' },
          { title: 'Three-Distance Readability', explanation: 'Catchy headline (far away), key details (arm’s length), fine print (close up).' }
        ],
        practicalSteps: [
          'Create a 300 DPI event flyer layout with headline, date, venue, and ticket link',
          'Include 3mm bleed margins for print readiness'
        ],
        proTip: 'Keep all critical text at least 0.5 inches away from print trim edges.',
        takeaway: 'Print design demands high resolution and structured multi-distance visual hierarchy.'
      }
    },
    {
      id: 'c3-l9',
      courseId: 'course-3',
      order: 9,
      title: 'Using Design Tools',
      durationMinutes: 20,
      summary: 'Figma, Canva, Photoshop, Illustrator—choosing the right tool for the job.',
      content: {
        introduction: 'Software is just a digital pencil. Knowing which software to pick for vector work, photo editing, or UI design saves hours.',
        keyConcepts: [
          { title: 'Vector vs Raster', explanation: 'Vectors (SVG, AI) scale infinitely; raster images (JPEG, PNG) are pixel-based.' },
          { title: 'Tool Selection Matrix', explanation: 'Figma for UI/layout; Illustrator for logos/vectors; Photoshop for photo editing.' }
        ],
        practicalSteps: [
          'Create a vector shape using bezier curves or standard path tools',
          'Export assets in both SVG and high-resolution PNG formats'
        ],
        proTip: 'Learn keyboard shortcuts for your primary design tool—it doubles your speed.',
        takeaway: 'Master vectors for scalable branding and raster tools for rich imagery and photos.'
      }
    },
    {
      id: 'c3-l10',
      courseId: 'course-3',
      order: 10,
      title: 'Creating a Simple Design Portfolio',
      durationMinutes: 25,
      summary: 'Selecting your best 3-5 case studies, writing problem-solution notes, and showcasing work.',
      content: {
        introduction: 'Clients do not hire certificates; they hire proof of work. A clean 3-case-study portfolio will win you freelance projects and jobs.',
        keyConcepts: [
          { title: 'Case Study Storytelling', explanation: 'Show the client problem, your design process, and the final measured outcome.' },
          { title: 'Mockup Presentation', explanation: 'Framing your designs in realistic device mockups to elevate perceived quality.' }
        ],
        practicalSteps: [
          'Curate your top 3 projects and write a 3-paragraph summary for each',
          'Publish your portfolio online using a clean web showcase'
        ],
        proTip: 'Quality always beats quantity. Three polished case studies beat ten mediocre images.',
        takeaway: 'A concise portfolio demonstrating your thinking and results is your best asset.'
      }
    }
  ],
  quiz: {
    id: 'quiz-c3',
    courseId: 'course-3',
    title: 'Graphic Design Principles & Foundations Quiz',
    description: 'Verify your understanding of typography, color harmony, visual hierarchy, and composition.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'c3-q1',
        question: 'What do the letters in the classic C.R.A.P. design framework stand for?',
        type: 'multiple-choice',
        options: [
          'Color, Resolution, Animation, Proportion',
          'Contrast, Repetition, Alignment, Proximity',
          'Creativity, Rhythm, Aesthetics, Presentation',
          'Curves, Rendering, Artwork, Palette'
        ],
        correctAnswerIndex: 1,
        explanation: 'Contrast, Repetition, Alignment, and Proximity are the four foundational principles of clean graphic layout.'
      },
      {
        id: 'c3-q2',
        question: 'What is the primary difference between vector and raster graphics?',
        type: 'multiple-choice',
        options: [
          'Vectors are made of mathematically defined paths and can scale infinitely without pixelation',
          'Rasters are always black and white, while vectors are colored',
          'Vectors cannot be used for logos or branding',
          'Rasters take up zero disk storage space'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vector graphics use mathematical equations for lines and curves, allowing infinite scaling without losing sharpness.'
      },
      {
        id: 'c3-q3',
        question: 'True or False: Using 5 or 6 different font families in a single poster is best practice for visual excitement.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. Professional designers usually restrict a project to 1 or 2 complementary font families to maintain cohesion and clean hierarchy.'
      },
      {
        id: 'c3-q4',
        question: 'According to the 60-30-10 color rule, what percentage of the design should be the accent color?',
        type: 'multiple-choice',
        options: ['60%', '30%', '10%', '50%'],
        correctAnswerIndex: 2,
        explanation: '10% is reserved for the vibrant accent color (such as buttons or key highlights) to draw immediate focus.'
      },
      {
        id: 'c3-q5',
        question: 'What role does negative space (white space) play in modern graphic design?',
        type: 'multiple-choice',
        options: [
          'It is wasted space that should always be filled with text and graphics',
          'It provides breathing room, reduces visual clutter, and enhances perceived elegance and focus',
          'It is only used when the designer runs out of ideas',
          'It is strictly forbidden in digital web layouts'
        ],
        correctAnswerIndex: 1,
        explanation: 'Negative space is an active design element that reduces cognitive load, highlights key information, and makes designs feel premium.'
      }
    ]
  }
};
