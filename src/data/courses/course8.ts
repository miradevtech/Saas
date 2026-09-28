import { Course } from '../../types';

export const COURSE_8: Course = {
  id: 'course-8',
  title: 'Learn Microsoft Office from Scratch',
  shortDescription: 'Master Microsoft Word documents, Excel spreadsheets and formulas, PowerPoint slide decks, and OneDrive.',
  fullDescription: 'Become proficient in the world’s most widely used enterprise office suite. Master professional document formatting in Word, powerful formulas, pivot tables, and dynamic charts in Excel, modern slide storytelling in PowerPoint, and cloud document collaboration in OneDrive.',
  category: 'Technology',
  level: 'Beginner',
  duration: '4.0 Hours',
  lessonsCount: 10,
  objectives: [
    'Format clean, professional reports, resumes, and letters in Microsoft Word',
    'Write essential Excel formulas (SUM, AVERAGE, VLOOKUP/XLOOKUP, IF) with ease',
    'Build clear summary tables, charts, and basic PivotTables in Excel',
    'Design engaging corporate presentation decks in PowerPoint'
  ],
  visualTheme: {
    accentColor: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    gradientFrom: '#7c2d12',
    gradientTo: '#431407',
    tagline: 'WORD · EXCEL · POWERPOINT'
  },
  lessons: [
    {
      id: 'c8-l1',
      courseId: 'course-8',
      order: 1,
      title: 'Introduction to Microsoft Office',
      durationMinutes: 16,
      summary: 'The Microsoft 365 ecosystem, Ribbon interface, quick access toolbars, and OneDrive.',
      content: {
        introduction: 'Microsoft Office powers businesses worldwide. Navigating the unified Ribbon and understanding cloud integration sets the foundation for modern workplace productivity.',
        keyConcepts: [
          { title: 'The Office Ribbon', explanation: 'Tabs, command groups, and dialog box launchers common across Word, Excel, and PowerPoint.' },
          { title: 'Cloud Sync & Version History', explanation: 'Using OneDrive to auto-save and restore previous revisions seamlessly.' }
        ],
        practicalSteps: [
          'Customize your Quick Access Toolbar with AutoSave, Undo, and Print Preview',
          'Save a document directly to your cloud OneDrive directory'
        ],
        proTip: 'Learn shortcuts like Ctrl+S (Save), Ctrl+Z (Undo), and Ctrl+F (Find) to navigate Office twice as fast.',
        takeaway: 'Mastering the common Ribbon layout makes learning every Office app much easier.'
      }
    },
    {
      id: 'c8-l2',
      courseId: 'course-8',
      order: 2,
      title: 'Microsoft Word Basics',
      durationMinutes: 20,
      summary: 'Page setup, margins, fonts, line spacing, alignments, and bullet lists.',
      content: {
        introduction: 'Microsoft Word is the benchmark tool for creating clear documents. Proper typography and spacing elevate standard memos into executive-ready reports.',
        keyConcepts: [
          { title: 'Styles Pane', explanation: 'Using Heading 1, Heading 2, and Normal styles instead of manually changing font sizes.' },
          { title: 'Paragraph Spacing', explanation: 'Adjusting before/after paragraph space rather than hitting Enter multiple times.' }
        ],
        practicalSteps: [
          'Format a 1-page business memorandum with standard 1-inch margins',
          'Apply built-in Heading Styles to generate an automated Table of Contents'
        ],
        proTip: 'Always use Heading Styles. They allow Word to automatically generate clickable tables of contents in seconds.',
        takeaway: 'Consistent formatting and paragraph styles give your Word documents a clean, professional finish.'
      }
    },
    {
      id: 'c8-l3',
      courseId: 'course-8',
      order: 3,
      title: 'Creating and Formatting Documents',
      durationMinutes: 22,
      summary: 'Headers, footers, page numbering, tables, images, and export to PDF.',
      content: {
        introduction: 'Polishing documents with dynamic page numbers, corporate letterhead headers, and cleanly wrapped diagrams transforms rough drafts into formal proposals.',
        keyConcepts: [
          { title: 'Section Breaks vs Page Breaks', explanation: 'Section breaks allow different headers, footers, or orientations within the same document.' },
          { title: 'Text Wrapping Around Images', explanation: 'Using "Tight" or "In Line with Text" to prevent layout shifting.' }
        ],
        practicalSteps: [
          'Insert dynamic "Page X of Y" numbering in the footer',
          'Insert an image with a styled border and wrap text smoothly around it',
          'Export the finished document to a pristine, print-ready PDF'
        ],
        proTip: 'Always share documents as PDFs with external clients so formatting displays identically on any device.',
        takeaway: 'Proper breaks and headers deliver polished, multi-page business documents.'
      }
    },
    {
      id: 'c8-l4',
      courseId: 'course-8',
      order: 4,
      title: 'Microsoft Excel Basics',
      durationMinutes: 25,
      summary: 'Cells, rows, columns, data types (numbers, currency, dates), and autofill.',
      content: {
        introduction: 'Excel is the world’s most versatile business calculation tool. Understanding the grid and data formatting unlocks immense analytical power.',
        keyConcepts: [
          { title: 'Data Types Matter', explanation: 'Numbers stored as text cannot be calculated; proper formatting as Currency, Date, or Percentage is vital.' },
          { title: 'The Fill Handle', explanation: 'Dragging the small corner square to extrapolate dates, sequences, and formulas automatically.' }
        ],
        practicalSteps: [
          'Create a 12-month expense tracker with headers for Month, Category, and Amount',
          'Use the autofill handle to generate all twelve months in seconds'
        ],
        proTip: 'Double-click the column boundary line to automatically fit column width to your widest text entry.',
        takeaway: 'Correct cell formatting and autofill habits make spreadsheet work fast and error-free.'
      }
    },
    {
      id: 'c8-l5',
      courseId: 'course-8',
      order: 5,
      title: 'Spreadsheets and Formulas',
      durationMinutes: 28,
      summary: 'SUM, AVERAGE, COUNT, MIN/MAX, IF statements, and absolute ($) vs relative referencing.',
      content: {
        introduction: 'Formulas automate math so you never have to calculate numbers manually. Understanding the dollar sign ($) for absolute references is a superpower.',
        keyConcepts: [
          { title: 'Relative vs Absolute References ($A$1)', explanation: 'Relative cells shift when copied; absolute cells remain locked to a specific cell (like a tax rate).' },
          { title: 'The Logical IF Function', explanation: '=IF(Condition, Value if True, Value if False) to categorize rows automatically.' }
        ],
        practicalSteps: [
          'Write a formula calculating sales tax using an absolute reference to a tax rate cell',
          'Use =SUM() and =AVERAGE() to aggregate total annual spend'
        ],
        proTip: 'Press F4 while editing a formula in Excel to quickly toggle dollar signs for absolute referencing.',
        takeaway: 'Essential formulas turn static numbers into responsive, automated calculators.'
      }
    },
    {
      id: 'c8-l6',
      courseId: 'course-8',
      order: 6,
      title: 'Creating Tables and Charts',
      durationMinutes: 26,
      summary: 'Official Excel Tables (Ctrl+T), sorting, filtering, column charts, and trend lines.',
      content: {
        introduction: 'Visualizing numbers with charts makes data insights instantly understandable to executives and clients.',
        keyConcepts: [
          { title: 'Excel Tables (Ctrl+T)', explanation: 'Converts raw ranges into structured tables with automatic zebra banding, total rows, and auto-expanding formulas.' },
          { title: 'Chart Types for Context', explanation: 'Bar/Column charts for comparison; Line charts for time trends; Donut charts for shares.' }
        ],
        practicalSteps: [
          'Convert a raw data range into an official Excel Table using Ctrl+T',
          'Insert a clean Column Chart showing quarterly revenue growth with labeled data tags'
        ],
        proTip: 'Remove unnecessary clutter, heavy 3D effects, and redundant gridlines from charts for a modern executive look.',
        takeaway: 'Structured tables and clean charts turn complex spreadsheets into clear visual stories.'
      }
    },
    {
      id: 'c8-l7',
      courseId: 'course-8',
      order: 7,
      title: 'Microsoft PowerPoint Basics',
      durationMinutes: 22,
      summary: 'Slide layouts, slide masters, themes, and structuring presentation narratives.',
      content: {
        introduction: 'PowerPoint presentations exist to support the speaker, not replace them. Creating clean, legible slides with strong contrast wins over audiences.',
        keyConcepts: [
          { title: 'Slide Master', explanation: 'Setting fonts, brand colors, and logo placements on the master slide so every new slide inherits them.' },
          { title: 'The 6x6 Guideline', explanation: 'Limiting slides to a maximum of 6 bullet points with no more than 6 words each.' }
        ],
        practicalSteps: [
          'Select a minimalist slide layout with high contrast between background and text',
          'Create a 5-slide introductory deck covering Title, Problem, Solution, Roadmap, and Contact'
        ],
        proTip: 'Slides should be billboards, not teleprompters. Keep words minimal and use visuals to support your point.',
        takeaway: 'Mastering slide layouts and concise content keeps presentation audiences engaged.'
      }
    },
    {
      id: 'c8-l8',
      courseId: 'course-8',
      order: 8,
      title: 'Creating Presentations',
      durationMinutes: 25,
      summary: 'SmartArt diagrams, icon libraries, subtle transitions, and presenter view.',
      content: {
        introduction: 'Modern presentation design replaces walls of bullet text with sleek icons, process flowcharts, and presenter view delivery.',
        keyConcepts: [
          { title: 'SmartArt Process Diagrams', explanation: 'Converting bullet lists into chevron timelines and hierarchy trees in one click.' },
          { title: 'Presenter View Mode', explanation: 'Viewing upcoming slides, timing clocks, and private speaking notes while the audience sees full screen.' }
        ],
        practicalSteps: [
          'Convert a 4-step project plan into a sleek horizontal SmartArt timeline',
          'Use PowerPoint’s built-in vector icon library to visually anchor slide concepts'
        ],
        proTip: 'Use subtle transitions like "Fade" or "Morph" and avoid flashy, distracting 3D wheel animations.',
        takeaway: 'Visual diagrams and presenter view help you deliver persuasive, confident talks.'
      }
    },
    {
      id: 'c8-l9',
      courseId: 'course-8',
      order: 9,
      title: 'Organizing Files and Documents',
      durationMinutes: 18,
      summary: 'File naming conventions, folder taxonomy, sharing permissions, and co-authoring.',
      content: {
        introduction: 'Poor file organization wastes hours every week searching for "Final_v2_FINAL.docx". A standard file taxonomy keeps teamwork smooth.',
        keyConcepts: [
          { title: 'ISO Date Naming (YYYY-MM-DD)', explanation: 'Starting file names with year-month-day ensures automatic alphabetical chronological sorting.' },
          { title: 'Real-Time Co-Authoring', explanation: 'Multiple people working inside the same Excel or Word doc simultaneously without overwriting.' }
        ],
        practicalSteps: [
          'Establish a standard folder structure: 01_In_Progress, 02_Reviews, 03_Final_Deliverables',
          'Rename 5 files according to the YYYY-MM-DD_Project_Title convention'
        ],
        proTip: 'Never send attachments over email if you can share a OneDrive link with edit or view permissions.',
        takeaway: 'Consistent file naming and cloud co-authoring prevent version confusion across teams.'
      }
    },
    {
      id: 'c8-l10',
      courseId: 'course-8',
      order: 10,
      title: 'Practical Microsoft Office Project',
      durationMinutes: 30,
      summary: 'End-to-end integration: analyzing project data in Excel, reporting in Word, and pitching in PowerPoint.',
      content: {
        introduction: 'Real workplace productivity comes from connecting all three applications: crunching numbers in Excel, writing the report in Word, and presenting in PowerPoint.',
        keyConcepts: [
          { title: 'Cross-App Linking', explanation: 'Pasting an Excel chart into Word or PowerPoint as a "Linked Object" so it updates automatically when spreadsheet data changes.' },
          { title: 'The Executive Summary Workflow', explanation: 'Summarizing numerical findings into actionable bullet points for leadership.' }
        ],
        practicalSteps: [
          'Create a 1-page financial table and chart in Excel',
          'Paste the linked chart into a formal Word proposal and PowerPoint pitch deck'
        ],
        proTip: 'Use Paste Special -> Paste Link so any future edits in your Excel sheet instantly update your slides.',
        takeaway: 'Connecting Word, Excel, and PowerPoint completes your enterprise productivity skillset.'
      }
    }
  ],
  quiz: {
    id: 'quiz-c8',
    courseId: 'course-8',
    title: 'Microsoft Office Productivity Suite Quiz',
    description: 'Test your practical knowledge of Microsoft Word formatting, Excel formulas, and PowerPoint design.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'c8-q1',
        question: 'In Microsoft Excel, what does placing dollar signs in a cell reference (e.g., $B$4) accomplish?',
        type: 'multiple-choice',
        options: [
          'It converts the number into US Currency format',
          'It creates an Absolute Reference that locks the cell coordinates when the formula is copied to other cells',
          'It automatically divides the value by 100',
          'It hides the cell contents from unauthorized viewers'
        ],
        correctAnswerIndex: 1,
        explanation: 'The $ symbols lock the column and/or row reference so it does not shift when dragging or copying formulas.'
      },
      {
        id: 'c8-q2',
        question: 'In Microsoft Word, what is the best practice for establishing a clean, automatic Table of Contents?',
        type: 'multiple-choice',
        options: [
          'Typing out page numbers manually with periods in between',
          'Using built-in Heading Styles (Heading 1, Heading 2) throughout the document',
          'Setting font size to bold 24pt on every title manually',
          'Creating a table with invisible borders'
        ],
        correctAnswerIndex: 1,
        explanation: 'Applying Word\'s Heading Styles allows Word to compile and update a clickable Table of Contents automatically.'
      },
      {
        id: 'c8-q3',
        question: 'True or False: In PowerPoint, the Slide Master allows you to set universal brand colors, fonts, and logos across all slides in one place.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. The Slide Master governs the underlying design template so changes reflect across every slide in the deck.'
      },
      {
        id: 'c8-q4',
        question: 'Which keyboard shortcut instantly converts a raw data range into an official Excel Table with filter arrows?',
        type: 'multiple-choice',
        options: ['Ctrl + T', 'Ctrl + P', 'Ctrl + N', 'Ctrl + K'],
        correctAnswerIndex: 0,
        explanation: 'Ctrl + T (or Cmd + T on Mac) instantly formats the selected data into a structured Excel Table.'
      },
      {
        id: 'c8-q5',
        question: 'Why is the ISO 8601 date format (YYYY-MM-DD) recommended for workplace file naming?',
        type: 'multiple-choice',
        options: [
          'It automatically sorts files into perfect chronological order when ordered alphabetically',
          'It is the only format that Word allows you to save',
          'It reduces file sizes by 50%',
          'It prevents files from being emailed'
        ],
        correctAnswerIndex: 0,
        explanation: 'YYYY-MM-DD naturally sorts chronologically in any file explorer without mixing up months and days.'
      }
    ]
  }
};
