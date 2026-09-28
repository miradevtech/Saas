import { Course } from '../../types';

export const COURSE_9: Course = {
  id: 'course-9',
  title: 'Learn Video Editing from Scratch',
  shortDescription: 'Master timeline cuts, smooth transitions, animated titles, audio ducking, color grading, and export presets.',
  fullDescription: 'From importing your first raw smartphone clip to rendering a cinematic, sound-designed short video. Learn the foundational grammar of video editing: J-cuts, L-cuts, B-roll pacing, animated lower thirds, clean audio balancing, and export settings for social feeds.',
  category: 'Design',
  level: 'Beginner',
  duration: '4.0 Hours',
  lessonsCount: 10,
  objectives: [
    'Import, organize, and manage video footage and audio assets with a structured bin system',
    'Execute tight cuts, trim dead air, and utilize J-cuts and L-cuts for natural flow',
    'Design legible animated text, titles, subtitles, and lower thirds',
    'Balance dialogue, background music, sound effects, and color grade clips'
  ],
  visualTheme: {
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    gradientFrom: '#581c87',
    gradientTo: '#3b0764',
    tagline: 'TIMELINE · PACING · COLOR'
  },
  lessons: [
    {
      id: 'c9-l1',
      courseId: 'course-9',
      order: 1,
      title: 'Understanding Video Editing',
      durationMinutes: 18,
      summary: 'Frame rates, resolutions (1080p vs 4K), aspect ratios (16:9 vs 9:16), and the editor mindset.',
      content: {
        introduction: 'Video editing is storytelling through rhythm and emotion. An editor controls where the audience looks, what they hear, and how they feel.',
        keyConcepts: [
          { title: 'Frame Rates (24 vs 30 vs 60 fps)', explanation: '24fps offers cinematic motion blur; 30fps is standard broadcast; 60fps allows buttery smooth slow motion.' },
          { title: 'The Editing Workspace', explanation: 'Source monitor, program monitor, timeline tracks, and project bins.' }
        ],
        practicalSteps: [
          'Set up your video editing software project (Premiere, DaVinci Resolve, or CapCut)',
          'Create a 1080x1920 (9:16 vertical) sequence for mobile and a 1920x1080 (16:9 horizontal) sequence'
        ],
        proTip: 'Always name your project folders systematically: Footage, Audio, Graphics, Exports.',
        takeaway: 'Choosing the correct frame rate and sequence settings before cutting prevents awkward format conversions.'
      }
    },
    {
      id: 'c9-l2',
      courseId: 'course-9',
      order: 2,
      title: 'Importing Your Footage',
      durationMinutes: 16,
      summary: 'Folder bin organization, proxies for smooth playback, and media caching.',
      content: {
        introduction: 'Messy project files slow you down. Creating a clean folder bin structure before placing a single clip on the timeline guarantees swift editing.',
        keyConcepts: [
          { title: 'B-Roll vs A-Roll', explanation: 'A-Roll is your primary subject talking; B-roll is contextual cutaway footage illustrating what they say.' },
          { title: 'Proxies', explanation: 'Generating lightweight proxy files so 4K video plays back smoothly on standard laptops.' }
        ],
        practicalSteps: [
          'Organize clips into labeled bins: 01_Interviews, 02_BRoll, 03_Audio, 04_Music',
          'Import assets and mark in/out points in the source monitor'
        ],
        proTip: 'Color code your timeline clips (e.g. blue for dialogue, purple for B-roll, yellow for titles).',
        takeaway: 'Organized bins and proxy files keep editing fast and frustration-free.'
      }
    },
    {
      id: 'c9-l3',
      courseId: 'course-9',
      order: 3,
      title: 'Cutting and Trimming Videos',
      durationMinutes: 25,
      summary: 'The razor tool, ripple edit, ripple delete, J-cuts, L-cuts, and match cuts.',
      content: {
        introduction: 'Editing is fundamentally the art of subtraction. Trimming redundant words, filler pauses, and awkward glances creates punchy, dynamic video.',
        keyConcepts: [
          { title: 'Ripple Delete', explanation: 'Trimming a section and having the timeline automatically snap together without leaving empty gaps.' },
          { title: 'J-Cuts and L-Cuts', explanation: 'Having audio precede video (J-cut) or audio linger under incoming video (L-cut) for seamless cinematic realism.' }
        ],
        practicalSteps: [
          'Perform a "rough cut" of a 60-second talking head clip, removing all filler breaths and stumbles',
          'Create a J-cut where music or ambient sound begins 1 second before the scene changes'
        ],
        proTip: 'Learn the "Q" and "W" ripple trim shortcuts—they will cut your assembly time in half.',
        takeaway: 'Tight trimming and audio-overlap cuts create natural, engaging pacing.'
      }
    },
    {
      id: 'c9-l4',
      courseId: 'course-9',
      order: 4,
      title: 'Adding Transitions',
      durationMinutes: 20,
      summary: 'Cross dissolves, whip pans, zoom cuts, match transitions, and when NOT to use transitions.',
      content: {
        introduction: 'Amateur videos are often stuffed with random star wipes and 3D page curls. Professional editors use invisible cuts that serve the narrative.',
        keyConcepts: [
          { title: 'The Standard Hard Cut', explanation: 'Over 90% of all professional cinema cuts are simple, clean hard cuts.' },
          { title: 'Whip Pan & Match Cuts', explanation: 'Using camera motion or matching graphic shapes to bridge scenes creatively.' }
        ],
        practicalSteps: [
          'Add a 6-frame Cross Dissolve to soften an abrupt B-roll scene transition',
          'Create a seamless whip-pan transition using camera directional movement'
        ],
        proTip: 'If a transition draws attention to itself rather than the story, remove it.',
        takeaway: 'Restraint in transitions separates professional cinema from novice home movies.'
      }
    },
    {
      id: 'c9-l5',
      courseId: 'course-9',
      order: 5,
      title: 'Adding Text and Titles',
      durationMinutes: 24,
      summary: 'Lower thirds, kinetic typography, auto-generated subtitles, and safe margins.',
      content: {
        introduction: 'With up to 80% of social media videos watched on mute, on-screen typography and subtitles are mandatory for retention.',
        keyConcepts: [
          { title: 'Title Safe Zones', explanation: 'Keeping text within safe boundaries so platform UI icons (like/share buttons) don\'t cover it.' },
          { title: 'Lower Thirds', explanation: 'A cleanly animated bar in the bottom third of the screen introducing a person\'s name and title.' }
        ],
        practicalSteps: [
          'Design an animated lower-third title card with a subtle slide-in animation',
          'Generate auto-captions and style them with bold sans-serif text and a gentle drop shadow'
        ],
        proTip: 'Keep captions to 1-3 words per line so viewers absorb them without taking eyes off the speaker.',
        takeaway: 'High-contrast typography and captions ensure your video connects even with sound off.'
      }
    },
    {
      id: 'c9-l6',
      courseId: 'course-9',
      order: 6,
      title: 'Adding Music and Sound',
      durationMinutes: 26,
      summary: 'Audio levels (-6dB dialogue, -18dB music), audio ducking, SFX whooshes, and noise reduction.',
      content: {
        introduction: 'Sound is half the experience. Balancing voice clarity with atmospheric music and micro sound effects (whooshes, pops, risers) brings video alive.',
        keyConcepts: [
          { title: 'Auto-Ducking', explanation: 'Automatically lowering background music volume whenever someone speaks.' },
          { title: 'The Essential Levels', explanation: 'Dialogue should peak between -6dB and -12dB; background music sits around -18dB to -24dB.' }
        ],
        practicalSteps: [
          'Apply an EQ high-pass filter at 80Hz to eliminate low-end room rumble from microphone audio',
          'Add a subtle whoosh sound effect timed exactly to an on-screen title graphic'
        ],
        proTip: 'Always edit audio with headphones, not laptop speakers, to catch background hiss and clipping.',
        takeaway: 'Clean audio balance and tactical sound design make modest video footage feel high-budget.'
      }
    },
    {
      id: 'c9-l7',
      courseId: 'course-9',
      order: 7,
      title: 'Basic Color Correction',
      durationMinutes: 25,
      summary: 'Color correction vs color grading, exposure balance, white balance, LUTs, and skin tones.',
      content: {
        introduction: 'Color correction fixes technical errors (exposure, white balance); color grading applies artistic style and mood.',
        keyConcepts: [
          { title: 'The Vectorscope & Waveform', explanation: 'Objective visual meters to check skin tone lines and ensure blacks don\'t crush to pure black.' },
          { title: 'LUTs (Look-Up Tables)', explanation: 'Preset color profiles used as creative springboards.' }
        ],
        practicalSteps: [
          'Use the white balance eyedropper on a neutral white/gray surface in your shot',
          'Adjust shadows and highlights on the Lumetri/Color wheels until skin looks natural'
        ],
        proTip: 'Correct your colors before applying any stylistic grade or LUT.',
        takeaway: 'Accurate exposure and natural skin tones ensure visual credibility and cinematic quality.'
      }
    },
    {
      id: 'c9-l8',
      courseId: 'course-9',
      order: 8,
      title: 'Adding Images and Visual Elements',
      durationMinutes: 22,
      summary: 'Picture-in-picture, split screens, logos, chroma keying, and motion keyframes.',
      content: {
        introduction: 'Adding visual assets like screenshots, product diagrams, and animated callout arrows keeps audience eyes glued to the screen.',
        keyConcepts: [
          { title: 'Keyframing Motion', explanation: 'Setting start and end positions to animate scale, position, and opacity over time.' },
          { title: 'Alpha Channel Overlays', explanation: 'Using transparent PNGs and ProRes 4444 video files to overlay graphics seamlessly.' }
        ],
        practicalSteps: [
          'Keyframe a slow zoom-in on a document screenshot to simulate a camera push-in',
          'Add a branded logo bug in the top right corner with 60% opacity'
        ],
        proTip: 'Enable "Ease In" and "Ease Out" on keyframes to make graphic animations feel organic rather than robotic.',
        takeaway: 'Tactical visual overlays clarify complex concepts and keep videos dynamic.'
      }
    },
    {
      id: 'c9-l9',
      courseId: 'course-9',
      order: 9,
      title: 'Exporting Your Video',
      durationMinutes: 20,
      summary: 'Codecs (H.264, H.265), bitrates, container formats (MP4), and platform presets.',
      content: {
        introduction: 'A magnificent edit is ruined if exported with the wrong compression settings. Knowing the right bitrates and containers ensures crisp uploads.',
        keyConcepts: [
          { title: 'H.264 / MP4 Standards', explanation: 'The universal video codec delivering maximum compatibility across all devices and web platforms.' },
          { title: 'Bitrate Management', explanation: '15-20 Mbps for high-quality 1080p web uploads; 40-50 Mbps for 4K.' }
        ],
        practicalSteps: [
          'Configure an export preset for YouTube / Social Media with VBR 2-pass encoding',
          'Verify audio export is set to AAC 320 kbps stereo'
        ],
        proTip: 'Always watch your exported video file on your smartphone before publishing it publicly.',
        takeaway: 'Correct export presets preserve image sharpness and color integrity on the web.'
      }
    },
    {
      id: 'c9-l10',
      courseId: 'course-9',
      order: 10,
      title: 'Creating a Complete Short Video',
      durationMinutes: 30,
      summary: 'Full sprint: raw footage to assembled, sound-designed, color-graded, and exported 60-second video.',
      content: {
        introduction: 'Put all your new skills to the test by taking a batch of raw smartphone clips through the entire professional editorial pipeline in 30 minutes.',
        keyConcepts: [
          { title: 'The 5-Step Editorial Pipeline', explanation: 'Organize -> Rough Assembly -> Fine Cut & Pacing -> Audio & Titles -> Color & Export.' },
          { title: 'Deadlines & Creative Flow', explanation: 'Knowing when an edit is finished and resisting endless minor tweaks.' }
        ],
        practicalSteps: [
          'Assemble a 45-60 second vertical video with hook, three points, and call to action',
          'Add audio ducking, one animated text element, and color correction',
          'Render and celebrate your first finished piece'
        ],
        proTip: 'Done is better than perfect. Every video you finish makes your next one faster and better.',
        takeaway: 'Executing the complete editorial pipeline turns you into a capable, confident video editor.'
      }
    }
  ],
  quiz: {
    id: 'quiz-c9',
    courseId: 'course-9',
    title: 'Video Editing Foundations & Craft Quiz',
    description: 'Verify your knowledge of editing grammar, audio ducking, timeline tools, and export codecs.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'c9-q1',
        question: 'What is a "J-Cut" in video editing?',
        type: 'multiple-choice',
        options: [
          'Cutting footage in the physical shape of the letter J',
          'An edit where the audio of the upcoming scene starts playing before the video cut occurs',
          'An edit where all video tracks are deleted',
          'A transition that blurs the screen into yellow'
        ],
        correctAnswerIndex: 1,
        explanation: 'In a J-cut, the incoming audio precedes the video, creating a smooth and natural cinematic transition.'
      },
      {
        id: 'c9-q2',
        question: 'What is "Audio Ducking"?',
        type: 'multiple-choice',
        options: [
          'Using a microphone shaped like a duck',
          'Automatically lowering the volume of background music whenever speech or dialogue is present',
          'Muting all sound effects during action scenes',
          'Increasing volume beyond normal maximum limits'
        ],
        correctAnswerIndex: 1,
        explanation: 'Audio ducking lowers music levels under spoken dialogue so the voice remains clear and intelligible.'
      },
      {
        id: 'c9-q3',
        question: 'True or False: Using ten different flashy 3D transitions in a 60-second video is recommended for a professional cinematic look.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. Professional editing relies heavily on clean hard cuts and subtle dissolves; excessive transitions distract from the story.'
      },
      {
        id: 'c9-q4',
        question: 'What is the universally accepted video codec for sharing videos on the web and social media?',
        type: 'multiple-choice',
        options: ['H.264', 'RAW-RGB', 'AVI-Uncompressed', 'BMP-Stream'],
        correctAnswerIndex: 0,
        explanation: 'H.264 (packaged in an MP4 container) provides the best balance of visual fidelity, small file size, and universal device support.'
      },
      {
        id: 'c9-q5',
        question: 'What is the primary difference between Color Correction and Color Grading?',
        type: 'multiple-choice',
        options: [
          'Color correction fixes technical exposure and white balance flaws; color grading applies artistic mood and style',
          'Color grading is for audio, color correction is for video',
          'There is zero difference; they are exact synonyms',
          'Color correction removes all color to make black and white'
        ],
        correctAnswerIndex: 0,
        explanation: 'Color correction neutralizes lighting and white balance so footage looks natural, while color grading creates a stylized visual atmosphere.'
      }
    ]
  }
};
