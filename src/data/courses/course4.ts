import { Course } from '../../types';

export const COURSE_4: Course = {
  id: 'course-4',
  title: 'Learn Web Development from Scratch',
  shortDescription: 'From HTML structure and CSS styling to modern JavaScript interactivity, APIs, and building your first responsive website.',
  fullDescription: 'Discover how the modern web works. Learn how HTML provides structure, CSS crafts responsive beauty, and JavaScript powers dynamic behavior. Build and publish a responsive website from scratch without getting lost in jargon.',
  category: 'Technology',
  level: 'Beginner',
  duration: '4.5 Hours',
  lessonsCount: 10,
  objectives: [
    'Understand how browsers request, render, and display websites',
    'Structure semantic, accessible web pages using modern HTML5',
    'Style responsive layouts with CSS Flexbox, Grid, and media queries',
    'Write foundational JavaScript, manipulate the DOM, and connect to APIs'
  ],
  visualTheme: {
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    gradientFrom: '#0369a1',
    gradientTo: '#082f49',
    tagline: 'HTML · CSS · JAVASCRIPT'
  },
  lessons: [
    {
      id: 'c4-l1',
      courseId: 'course-4',
      order: 1,
      title: 'How Websites Work',
      durationMinutes: 18,
      summary: 'Clients, servers, DNS, HTTP requests, and the browser rendering lifecycle.',
      content: {
        introduction: 'When you type a URL into a browser, an intricate series of requests and responses occurs in milliseconds to bring pixels to your screen.',
        keyConcepts: [
          { title: 'The Client-Server Model', explanation: 'Your browser is the client requesting HTML, CSS, and assets from a remote server.' },
          { title: 'The Web Trifecta', explanation: 'HTML is the skeleton, CSS is the skin and clothes, and JavaScript is the muscles and nervous system.' }
        ],
        practicalSteps: [
          'Open Chrome or Firefox DevTools (F12 or right-click -> Inspect)',
          'Navigate to the Network tab and reload any webpage to inspect individual HTTP requests'
        ],
        proTip: 'DevTools is your best friend as a developer. Spend time inspecting how your favorite websites are built.',
        takeaway: 'Understanding the client-server lifecycle helps you diagnose network and rendering bottlenecks.'
      }
    },
    {
      id: 'c4-l2',
      courseId: 'course-4',
      order: 2,
      title: 'Introduction to HTML',
      durationMinutes: 20,
      summary: 'Tags, attributes, document structure, headings, paragraphs, and links.',
      content: {
        introduction: 'HTML (HyperText Markup Language) provides the semantic architecture for everything you see on the web.',
        keyConcepts: [
          { title: 'Semantic Tags', explanation: '<header>, <nav>, <main>, <article>, and <section> communicate meaning to browsers and screen readers.' },
          { title: 'Attributes', explanation: 'Modifiers like href, src, and alt provide critical data to HTML elements.' }
        ],
        practicalSteps: [
          'Create a basic index.html file with <!DOCTYPE html>, <html>, <head>, and <body>',
          'Add a top header, three paragraphs, and an external hyperlink'
        ],
        proTip: 'Always include meaningful alt text on <img> tags for accessibility and SEO.',
        takeaway: 'Semantic HTML guarantees that your pages are accessible, clear, and readable by search engines.'
      }
    },
    {
      id: 'c4-l3',
      courseId: 'course-4',
      order: 3,
      title: 'Creating Your First Web Page',
      durationMinutes: 22,
      summary: 'Lists, images, tables, forms, and structuring a clean personal profile page.',
      content: {
        introduction: 'Putting HTML tags together to build an actual structured page is where theoretical knowledge becomes practical muscle memory.',
        keyConcepts: [
          { title: 'Form Controls', explanation: '<input>, <textarea>, and <button> allow user data entry and interaction.' },
          { title: 'Ordered vs Unordered Lists', explanation: 'Formatting structured data with <ul> and <ol> list items.' }
        ],
        practicalSteps: [
          'Build a mini biography page with your photo, a list of hobbies, and a contact form',
          'Validate your HTML using an online validator'
        ],
        proTip: 'Keep your HTML clean and indented properly. Readable markup saves debugging headaches.',
        takeaway: 'Building complete HTML pages builds confidence before moving on to styling.'
      }
    },
    {
      id: 'c4-l4',
      courseId: 'course-4',
      order: 4,
      title: 'Introduction to CSS',
      durationMinutes: 25,
      summary: 'Selectors, the Box Model (margin, border, padding, content), and colors.',
      content: {
        introduction: 'Cascading Style Sheets (CSS) transforms plain black-and-white text into visually stunning, responsive designs.',
        keyConcepts: [
          { title: 'The Box Model', explanation: 'Every HTML element is a box consisting of content, padding, border, and margin.' },
          { title: 'Specificity & Cascade', explanation: 'How browsers decide which CSS rule takes precedence when styles conflict.' }
        ],
        practicalSteps: [
          'Link an external styles.css file to your HTML document',
          'Apply background colors, font families, and border-radius to your elements'
        ],
        proTip: 'Set `box-sizing: border-box;` globally in CSS to include padding and border in width calculations.',
        takeaway: 'Mastery of the CSS Box Model is the secret to accurate page layouts.'
      }
    },
    {
      id: 'c4-l5',
      courseId: 'course-4',
      order: 5,
      title: 'Styling a Website',
      durationMinutes: 28,
      summary: 'Flexbox, CSS Grid, positioning, and modern aesthetic techniques.',
      content: {
        introduction: 'Modern CSS provides powerful layout engines: Flexbox for 1-dimensional rows/columns and Grid for 2-dimensional layouts.',
        keyConcepts: [
          { title: 'CSS Flexbox', explanation: 'Aligning and distributing space among items in a container even when sizes are dynamic.' },
          { title: 'CSS Grid', explanation: 'Dividing pages into major regions or defining relationships between parts of a control.' }
        ],
        practicalSteps: [
          'Build a navigation bar with a logo on the left and links on the right using `display: flex; justify-content: space-between;`',
          'Create a 3-column card grid using `grid-template-columns: repeat(3, 1fr);`'
        ],
        proTip: 'Use Flexbox for small components and navigation; use CSS Grid for page-level structural layouts.',
        takeaway: 'Flexbox and Grid eliminate the need for outdated layout hacks like floats.'
      }
    },
    {
      id: 'c4-l6',
      courseId: 'course-4',
      order: 6,
      title: 'Introduction to JavaScript',
      durationMinutes: 26,
      summary: 'Variables, data types, functions, conditionals, and console debugging.',
      content: {
        introduction: 'JavaScript is the programming language of the browser. It allows web pages to react to user inputs, compute values, and animate.',
        keyConcepts: [
          { title: 'Variables: const & let', explanation: 'Storing data in memory with proper scoping rules.' },
          { title: 'Functions', explanation: 'Reusable blocks of logic that take inputs, perform operations, and return results.' }
        ],
        practicalSteps: [
          'Write a function that calculates total cart price with tax',
          'Log results to the developer console using `console.log()`'
        ],
        proTip: 'Prefer `const` by default, and only use `let` when you know a variable must be reassigned.',
        takeaway: 'JavaScript unlocks interactive capabilities and programmatic control.'
      }
    },
    {
      id: 'c4-l7',
      courseId: 'course-4',
      order: 7,
      title: 'Basic Programming Concepts',
      durationMinutes: 25,
      summary: 'Arrays, objects, loops, event listeners, and DOM manipulation.',
      content: {
        introduction: 'The Document Object Model (DOM) is JavaScript\'s representation of your HTML page. You can add, remove, and modify elements dynamically.',
        keyConcepts: [
          { title: 'DOM Selection & Events', explanation: 'Using `document.querySelector` and `addEventListener("click", ...)` to respond to clicks.' },
          { title: 'Arrays & Mapping', explanation: 'Storing lists of items and looping through them to render UI elements.' }
        ],
        practicalSteps: [
          'Add a button that toggles between Dark Mode and Light Mode by switching a CSS class',
          'Create a counter button that increases a number on each click'
        ],
        proTip: 'Keep your JavaScript modular by separating data state from UI rendering.',
        takeaway: 'DOM events turn static documents into dynamic web applications.'
      }
    },
    {
      id: 'c4-l8',
      courseId: 'course-4',
      order: 8,
      title: 'Making Websites Responsive',
      durationMinutes: 24,
      summary: 'Mobile-first design, media queries, fluid units (rem, %, vh/vw), and touch targets.',
      content: {
        introduction: 'Over 60% of all web traffic happens on mobile devices. Designing mobile-first ensures a superior experience across every screen size.',
        keyConcepts: [
          { title: 'Viewport Meta Tag', explanation: 'Telling mobile browsers to scale the page to the device\'s actual pixel width.' },
          { title: 'Media Queries', explanation: 'Applying specific CSS rules only when screen widths exceed certain breakpoints.' }
        ],
        practicalSteps: [
          'Add `@media (min-width: 768px)` to switch a mobile stacked layout into desktop side-by-side columns',
          'Verify touch targets are at least 44x44px for comfortable tapping on smartphones'
        ],
        proTip: 'Always design for the smallest screen first, then expand outward as space becomes available.',
        takeaway: 'Responsive design ensures accessibility and usability across phones, tablets, and desktops.'
      }
    },
    {
      id: 'c4-l9',
      courseId: 'course-4',
      order: 9,
      title: 'Understanding APIs',
      durationMinutes: 28,
      summary: 'REST APIs, JSON, the fetch() method, async/await, and error handling.',
      content: {
        introduction: 'Modern web apps rarely operate in isolation. They connect to external APIs (Application Programming Interfaces) to fetch live data.',
        keyConcepts: [
          { title: 'JSON (JavaScript Object Notation)', explanation: 'The universal text format for sending and receiving structured data over the web.' },
          { title: 'The Fetch API', explanation: 'Making asynchronous network requests to retrieve data without refreshing the page.' }
        ],
        practicalSteps: [
          'Fetch real-time data from a public API (like weather or quotes)',
          'Parse the JSON response and inject the data into your HTML cards'
        ],
        proTip: 'Always wrap your `async/await` calls in a `try...catch` block to handle network downtime gracefully.',
        takeaway: 'APIs allow your web applications to communicate with databases and external services.'
      }
    },
    {
      id: 'c4-l10',
      courseId: 'course-4',
      order: 10,
      title: 'Building a Simple Website',
      durationMinutes: 30,
      summary: 'Putting it all together: building and deploying a complete multi-section portfolio website.',
      content: {
        introduction: 'Now you combine HTML semantics, CSS styling, and JavaScript logic into a polished, deployed portfolio website you can share with the world.',
        keyConcepts: [
          { title: 'Project Architecture', explanation: 'Organizing your assets, CSS stylesheets, and scripts into clean folders.' },
          { title: 'Deployment & Hosting', explanation: 'Hosting your website on modern static hosting platforms with SSL security.' }
        ],
        practicalSteps: [
          'Build a complete landing page with Hero, Features, Projects, and Contact sections',
          'Deploy your code to a live URL and test it on your smartphone'
        ],
        proTip: 'Commit your code regularly with clear git messages to build a visible track record.',
        takeaway: 'Shipping a live, responsive website marks your transition from student to web builder.'
      }
    }
  ],
  quiz: {
    id: 'quiz-c4',
    courseId: 'course-4',
    title: 'Web Development Foundations Assessment',
    description: 'Verify your knowledge of HTML semantics, CSS layout engines, responsive design, and JavaScript essentials.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'c4-q1',
        question: 'Which of the following HTML tags is semantic and represents the primary navigation links of a page?',
        type: 'multiple-choice',
        options: ['<div>', '<nav>', '<span>', '<menu-bar>'],
        correctAnswerIndex: 1,
        explanation: '<nav> is the standard semantic HTML5 element specifically designated for major site navigation links.'
      },
      {
        id: 'c4-q2',
        question: 'In the CSS Box Model, which layer is immediately between the element\'s padding and its margin?',
        type: 'multiple-choice',
        options: ['Border', 'Content', 'Outline', 'Shadow'],
        correctAnswerIndex: 0,
        explanation: 'From inside to outside, the Box Model order is: Content -> Padding -> Border -> Margin.'
      },
      {
        id: 'c4-q3',
        question: 'True or False: CSS Flexbox is primarily designed for 1-dimensional layouts (rows or columns), while CSS Grid handles 2-dimensional layouts.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Flexbox excels at single-axis distribution, while CSS Grid manages simultaneous rows and columns.'
      },
      {
        id: 'c4-q4',
        question: 'What JavaScript keyword should you use to declare a variable that will NOT be reassigned?',
        type: 'multiple-choice',
        options: ['var', 'let', 'const', 'static'],
        correctAnswerIndex: 2,
        explanation: '`const` declares a block-scoped identifier that cannot be reassigned through standard assignment.'
      },
      {
        id: 'c4-q5',
        question: 'What does the browser\'s `fetch()` function return?',
        type: 'multiple-choice',
        options: [
          'A synchronous string of HTML',
          'A Promise that resolves to the Response object',
          'An alert modal window',
          'A local hard drive path'
        ],
        correctAnswerIndex: 1,
        explanation: '`fetch()` initiates an asynchronous network request and returns a Promise representing the Response.'
      }
    ]
  }
};
