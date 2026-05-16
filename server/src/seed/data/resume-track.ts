/**
 * Default content seed data — Track 3: Resume & General Prep
 */
export const RESUME_TRACK = {
  name: 'Resume & General Prep',
  description: 'Resume building, communication skills, mock interviews, and networking.',
  icon: '📝',
  color: '#34d399',
  order: 2,
  categories: [
    {
      name: 'Resume Building',
      description: 'Resume formats, section guides, and examples',
      icon: '📄',
      order: 0,
      resources: [
        {
          name: 'Resume Formats & Templates',
          type: 'TEMPLATE',
          isMustDo: true,
          order: 0,
          units: [{ name: 'Templates', order: 0, subUnits: [
            { name: 'Software Resumes', order: 0, items: [
              { name: 'Software 1-Page Format', type: 'READING', order: 0 },
              { name: 'Software 2-Page Format', type: 'READING', order: 1 },
            ]},
            { name: 'Quant Resumes', order: 1, items: [
              { name: 'Quant 1-Page Format', type: 'READING', order: 0 },
              { name: 'Quant 2-Page Format', type: 'READING', order: 1 },
            ]},
          ]}],
        },
        {
          name: 'Section Formatting Guide',
          type: 'GUIDE',
          isMustDo: true,
          order: 1,
          units: [{ name: 'Sections', order: 0, subUnits: [
            { name: 'Guide Topics', order: 0, items: [
              { name: 'PoR Section', type: 'READING', order: 0 },
              { name: 'Extracurriculars', type: 'READING', order: 1 },
              { name: 'Projects (number-backed claims)', type: 'READING', order: 2 },
              { name: 'Internship Descriptions', type: 'READING', order: 3 },
              { name: 'GitHub Repository Showcase', type: 'READING', order: 4 },
            ]},
          ]}],
        },
        {
          name: 'Resume Repository',
          type: 'COLLECTION',
          url: 'https://drive.google.com/drive/u/1/folders/1V8fSpU4S08oGp-2KL4Y--TVdi6Hjrpb1',
          isMustDo: true,
          order: 2,
          units: [{ name: 'Examples', order: 0, subUnits: [
            { name: 'Sample Resumes', order: 0, items: [
              { name: 'Software Intern Resume Examples', type: 'READING', order: 0 },
              { name: 'Quant Intern Resume Examples', type: 'READING', order: 1 },
              { name: 'Research Intern Resume Examples', type: 'READING', order: 2 },
            ]},
          ]}],
        },
        {
          name: 'Project Showcase Tips',
          type: 'GUIDE',
          isMustDo: true,
          order: 3,
          units: [{ name: 'Guidelines', order: 0, subUnits: [
            { name: 'Tips', order: 0, items: [
              { name: 'GitHub Repo Best Practices', type: 'READING', order: 0 },
              { name: 'Technical Descriptions', type: 'READING', order: 1 },
              { name: 'Number-Backed Claims', type: 'READING', order: 2 },
              { name: 'Avoiding Redundant Projects', type: 'READING', order: 3 },
            ]},
          ]}],
        },
      ],
    },
    {
      name: 'Communication & Soft Skills',
      description: 'Books and resources for interview communication',
      icon: '🗣️',
      order: 1,
      resources: [
        {
          name: 'How to Talk with Anyone',
          type: 'BOOK',
          isMustDo: false,
          order: 0,
          units: [{ name: 'Key Chapters', order: 0, subUnits: [
            { name: 'Communication Techniques', order: 0, items: [
              { name: 'First Impressions', type: 'READING', order: 0 },
              { name: 'Small Talk Mastery', type: 'READING', order: 1 },
              { name: 'Body Language', type: 'READING', order: 2 },
              { name: 'Networking Conversations', type: 'READING', order: 3 },
            ]},
          ]}],
        },
        {
          name: 'How to Win Friends (Carnegie)',
          type: 'BOOK',
          isMustDo: false,
          order: 1,
          units: [{ name: 'Core Principles', order: 0, subUnits: [
            { name: 'Key Takeaways', order: 0, items: [
              { name: 'Fundamental Techniques', type: 'READING', order: 0 },
              { name: 'Making People Like You', type: 'READING', order: 1 },
              { name: 'Winning People to Your Thinking', type: 'READING', order: 2 },
            ]},
          ]}],
        },
        {
          name: 'Atomic Habits (James Clear)',
          type: 'BOOK',
          url: 'https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf',
          isMustDo: false,
          order: 2,
          units: [{ name: 'Productivity Tips', order: 0, subUnits: [
            { name: 'Key Concepts', order: 0, items: [
              { name: 'The 4 Laws of Behavior Change', type: 'READING', order: 0 },
              { name: 'Habit Stacking', type: 'READING', order: 1 },
              { name: 'Environment Design', type: 'READING', order: 2 },
              { name: '1% Improvement Mindset', type: 'READING', order: 3 },
            ]},
          ]}],
        },
      ],
    },
    {
      name: 'Mock Interviews & Company Prep',
      description: 'Company-specific preparation and mock interview resources',
      icon: '🎯',
      order: 2,
      resources: [
        {
          name: 'Quant Internship Company List',
          type: 'WEBSITE',
          isMustDo: true,
          order: 0,
          units: [{ name: 'Companies', order: 0, subUnits: [
            { name: 'Top Firms', order: 0, items: [
              { name: 'Jane Street', type: 'READING', order: 0 },
              { name: 'Citadel / Citadel Securities', type: 'READING', order: 1 },
              { name: 'Two Sigma', type: 'READING', order: 2 },
              { name: 'DE Shaw', type: 'READING', order: 3 },
              { name: 'Tower Research', type: 'READING', order: 4 },
              { name: 'Optiver', type: 'READING', order: 5 },
              { name: 'IMC Trading', type: 'READING', order: 6 },
              { name: 'Akuna Capital', type: 'READING', order: 7 },
              { name: 'HRT', type: 'READING', order: 8 },
              { name: 'Jump Trading', type: 'READING', order: 9 },
            ]},
          ]}],
        },
        {
          name: 'Company Career Pages & Mock Interviews',
          type: 'WEBSITE',
          isMustDo: false,
          order: 1,
          units: [{ name: 'Resources', order: 0, subUnits: [
            { name: 'Videos & Pages', order: 0, items: [
              { name: 'Optiver Mock Interview Video', type: 'VIDEO', order: 0 },
              { name: 'Jane Street Careers Page', type: 'READING', order: 1 },
              { name: 'Citadel Interview Prep', type: 'READING', order: 2 },
              { name: 'Walk Through Your Thinking Process', type: 'READING', order: 3 },
            ]},
          ]}],
        },
        {
          name: 'LinkedIn & Networking Guide',
          type: 'GUIDE',
          isMustDo: false,
          order: 2,
          units: [{ name: 'Networking', order: 0, subUnits: [
            { name: 'Tips', order: 0, items: [
              { name: 'Profile Optimization', type: 'READING', order: 0 },
              { name: 'HR Outreach Messages', type: 'READING', order: 1 },
              { name: 'Following Quant Firms on LinkedIn', type: 'READING', order: 2 },
              { name: 'Apping to Non-Campus Firms', type: 'READING', order: 3 },
            ]},
          ]}],
        },
      ],
    },
  ],
};
