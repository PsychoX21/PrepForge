/**
 * Default content seed data — Track 3: Resume & General Prep
 * Mapped to existing PrepForge database schema.
 */

export const RESUME_TRACK = {
  name: "Resume & General Prep",
  description: "Strategic checklists, formatting guidelines, communication manuals, and productivity resources for internship preparation.",
  icon: "📝",
  color: "#34d399",
  order: 2,
  categories: [
    {
      name: "Resume Related Tips",
      order: 0,
      resources: [
        {
          name: "Resume Strategy & Rules",
          type: "DOC",
          order: 0,
          isMustDo: false,
          units: [
            {
              name: "Structural Design & Sizes",
              order: 0,
              subUnits: [
                {
                  name: "Layout & Section Sizing Rules",
                  order: 0,
                  items: [
                    {
                      name: "Create four resumes: two for software and two for quant (single-page and double-page variants)",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Limit the sizes of Position of Responsibility (PoR) and Extracurricular sections",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "If projects are numerous, remove the 'courses undertaken' section entirely",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                }
              ]
            },
            {
              name: "Professional History & Formatting",
              order: 1,
              subUnits: [
                {
                  name: "Experience Formatting & Grammar Rules",
                  order: 0,
                  items: [
                    {
                      name: "Describe internships (research/company) or working with a professor in a separate section placed at the top",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Do not add full stops anywhere in your resume. Minimize trailing whitespace after sentences",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Avoid fancy English or buzzwords in project descriptions; keep descriptions technical and clear",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                }
              ]
            },
            {
              name: "Projects & Reviews Checklist",
              order: 2,
              subUnits: [
                {
                  name: "Technical Integrity & Repositories",
                  order: 0,
                  items: [
                    {
                      name: "If projects are lacking, start new reading or development projects immediately",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Refrain from redundant projects; merge similar ones and back descriptions with hard metrics and numbers",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Maintain clean and documented GitHub repositories for each of your projects",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                },
                {
                  name: "Review, Timing & Interview Readiness",
                  order: 1,
                  items: [
                    {
                      name: "Be fully prepared to explain and defend every single line of your resume in interviews and filters",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Start creating your resumes as early as possible",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Send resume drafts to multiple seniors for reviews before final submission",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                }
              ]
            }
          ],
          description: "Checklist of core principles for structuring, rephrasing, and updating projects on resumes."
        },
        {
          name: "Reference Portfolios & Drive",
          type: "WEBSITE",
          order: 1,
          isMustDo: false,
          units: [
            {
              name: "External Reference Resources",
              order: 0,
              subUnits: [
                {
                  name: "Portfolios & Drive Links",
                  order: 0,
                  items: [
                    {
                      name: "Google Drive Resume Templates and Sample Folders",
                      type: "READING",
                      order: 0,
                      url: "https://drive.google.com/drive/u/1/folders/1V8fSpU4S08oGp-2KL4Y--TVdi6Hjrpb1"
                    },
                    {
                      name: "Saksham Rathi's Projects Repository Portfolio",
                      type: "READING",
                      order: 1,
                      url: "https://github.com/sakshamrathi21"
                    }
                  ]
                }
              ]
            }
          ],
          description: "Curated Google Drive folder containing resume templates and GitHub project repositories.",
          url: "https://drive.google.com/drive/u/1/folders/1V8fSpU4S08oGp-2KL4Y--TVdi6Hjrpb1"
        }
      ],
      description: "Essential structural rules, portfolio additions, and reviews to build high-impact resumes.",
      icon: "📄"
    },
    {
      name: "General Tips",
      order: 1,
      resources: [
        {
          name: "Productivity & Communication Books",
          type: "BOOK",
          order: 0,
          isMustDo: false,
          units: [
            {
              name: "Communication & Vocabulary Skills",
              order: 0,
              subUnits: [
                {
                  name: "Core Fluency Books & Tips",
                  order: 0,
                  items: [
                    {
                      name: "How to Talk to Anyone (Leil Lowndes)",
                      type: "READING",
                      order: 0,
                      url: "https://dn790008.ca.archive.org/0/items/HowToTalkAnyone/how%20to%20talk%20anyone.pdf"
                    },
                    {
                      name: "How to Win Friends and Influence People (Dale Carnegie)",
                      type: "READING",
                      order: 1,
                      url: "https://www.rfpmm.org/pdf/how-to-win-friends-and-influence-people.pdf"
                    },
                    {
                      name: "Fluency Practice: Speak English with family/friends, refine body language, watch movies, and read novels",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                }
              ]
            },
            {
              name: "Productivity & Habit Engineering",
              order: 1,
              subUnits: [
                {
                  name: "Atomic Habits Readings & Summer Plan",
                  order: 0,
                  items: [
                    {
                      name: "Atomic Habits (James Clear)",
                      type: "READING",
                      order: 0,
                      url: "https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf"
                    },
                    {
                      name: "Summer Vacation: Utilize the 3-month break before third-year to complete all core internship preparation resources",
                      type: "CONCEPT",
                      order: 1
                    }
                  ]
                }
              ]
            }
          ],
          description: "Acclaimed manuals to master speech fluency, interpersonal relations, and building consistency."
        },
        {
          name: "Interview Tactics & Networking Sites",
          type: "WEBSITE",
          order: 1,
          isMustDo: false,
          units: [
            {
              name: "Interview Execution & Mock Trials",
              order: 0,
              subUnits: [
                {
                  name: "Thinking Aloud in Interviews",
                  order: 0,
                  items: [
                    {
                      name: "Walk interviewers step-by-step through your logic; do not solve silently inside your head",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Study and watch official mock interviews on firms' career portals and YouTube",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Optiver Quantitative Math Interview Practice & Mock Study",
                      type: "VIDEO",
                      order: 2,
                      url: "https://www.youtube.com/watch?v=68D0sJ6XWwA"
                    },
                    {
                      name: "Jane Street Software Engineer Live Mock Coding Session",
                      type: "VIDEO",
                      order: 3,
                      url: "https://www.youtube.com/watch?v=FjL0ZpJe6gU"
                    },
                    {
                      name: "Optiver Quantitative Math Interview Practice & Mock Study",
                      type: "VIDEO",
                      order: 4,
                      url: "https://www.youtube.com/watch?v=68D0sJ6XWwA"
                    },
                    {
                      name: "Jane Street Software Engineer Live Mock Coding Session",
                      type: "VIDEO",
                      order: 5,
                      url: "https://www.youtube.com/watch?v=FjL0ZpJe6gU"
                    },
                    {
                      name: "Optiver Quantitative Math Interview Practice & Mock Study",
                      type: "VIDEO",
                      order: 6,
                      url: "https://www.youtube.com/watch?v=68D0sJ6XWwA"
                    },
                    {
                      name: "Jane Street Software Engineer Live Mock Coding Session",
                      type: "VIDEO",
                      order: 7,
                      url: "https://www.youtube.com/watch?v=FjL0ZpJe6gU"
                    }
                  ]
                }
              ]
            },
            {
              name: "Professional Networks & External Portals",
              order: 1,
              subUnits: [
                {
                  name: "LinkedIn, Fintech Directories, and Off-Campus",
                  order: 0,
                  items: [
                    {
                      name: "Northwestern Fintech 2025 Quant Internships List",
                      type: "READING",
                      order: 0,
                      url: "https://github.com/northwesternfintech/2025QuantInternships"
                    },
                    {
                      name: "Follow key quant firms on LinkedIn to catch important event releases before general announcements",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Develop your LinkedIn profile to invite outbound HR recruiters",
                      type: "CONCEPT",
                      order: 2
                    },
                    {
                      name: "Saksham Rathi's LinkedIn Profile",
                      type: "READING",
                      order: 3,
                      url: "http://www.linkedin.com/in/sakshamrathi21"
                    },
                    {
                      name: "Off-Campus Apping: Reach out directly to firms that do not participate in on-campus recruitment",
                      type: "CONCEPT",
                      order: 4
                    }
                  ]
                }
              ]
            }
          ],
          description: "Directories for finding internships, corporate channels, mock interviews, and professional profiles."
        }
      ],
      description: "General advice on building professional habits, boosting productivity, and interview etiquette.",
      icon: "🗣️"
    }
  ]
};
