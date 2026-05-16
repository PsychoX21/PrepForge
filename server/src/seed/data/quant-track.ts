/**
 * Default content seed data — Track 1: Quantitative Trader/Researcher
 * Structured as: Track -> Categories -> Resources -> Units -> SubUnits -> Items
 */

export const QUANT_TRACK = {
  name: 'Quantitative Trader/Researcher',
  description: 'Probability, puzzles, AI/ML, finance fundamentals, and speed math.',
  icon: '📊',
  color: '#a78bfa',
  order: 0,
  categories: [
    {
      name: 'Probability Theory & Statistics',
      description: 'Core probability foundations and statistical methods',
      icon: '🎲',
      order: 0,
      resources: [
        {
          name: 'KF Book — Probabilistic Graphical Models',
          type: 'BOOK',
          isMustDo: false,
          order: 0,
          units: [
            {
              name: 'Ch 2: Probability Foundations',
              order: 0,
              subUnits: [
                {
                  name: '§2.1 Basic Probability',
                  order: 0,
                  items: [
                    { name: 'Sample Spaces & Events', type: 'READING', order: 0 },
                    { name: 'Conditional Probability', type: 'READING', order: 1 },
                    { name: 'Bayes Theorem', type: 'CONCEPT', order: 2 },
                    { name: 'Independence', type: 'CONCEPT', order: 3 },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'CS215 Lecture Slides',
          type: 'COURSE',
          isMustDo: false,
          order: 1,
          units: [
            {
              name: 'Probability Distributions',
              order: 0,
              subUnits: [
                { name: 'Discrete Distributions', order: 0, items: [
                  { name: 'Bernoulli & Binomial', type: 'CONCEPT', order: 0 },
                  { name: 'Poisson Distribution', type: 'CONCEPT', order: 1 },
                  { name: 'Geometric Distribution', type: 'CONCEPT', order: 2 },
                ]},
                { name: 'Continuous Distributions', order: 1, items: [
                  { name: 'Gaussian (Normal)', type: 'CONCEPT', order: 0 },
                  { name: 'Exponential', type: 'CONCEPT', order: 1 },
                  { name: 'Uniform', type: 'CONCEPT', order: 2 },
                ]},
              ],
            },
          ],
        },
        {
          name: 'Probability Distributions Book',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/Competitive_Programming/blob/main/resources/b9549cae1d6114c8de97f9f33f3adfe4.pdf',
          isMustDo: false,
          order: 2,
          units: [
            { name: 'Continuous Distributions', order: 0, subUnits: [
              { name: 'Detailed Derivations', order: 0, items: [
                { name: 'Normal Distribution Properties', type: 'READING', order: 0 },
                { name: 'Chi-Squared Distribution', type: 'READING', order: 1 },
                { name: 'Beta Distribution', type: 'READING', order: 2 },
                { name: 'Gamma Distribution', type: 'READING', order: 3 },
              ]},
            ]},
            { name: 'Discrete Distributions', order: 1, subUnits: [
              { name: 'Applications', order: 0, items: [
                { name: 'Negative Binomial', type: 'READING', order: 0 },
                { name: 'Hypergeometric', type: 'READING', order: 1 },
                { name: 'Multinomial', type: 'READING', order: 2 },
              ]},
            ]},
          ],
        },
      ],
    },
    {
      name: 'Puzzle Solving & Problem Practice',
      description: 'Core preparation resource — puzzles, brain teasers, and probability problems',
      icon: '🧩',
      order: 1,
      resources: [
        {
          name: 'The Green Book — Practical Guide to QF Interviews',
          type: 'BOOK',
          isMustDo: true,
          order: 0,
          units: Array.from({ length: 6 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            order: i,
            subUnits: [{ name: `Problems`, order: 0, items: Array.from({ length: 8 }, (_, j) => ({
              name: `Problem ${i * 8 + j + 1}`, type: 'PUZZLE', order: j, difficulty: j < 3 ? 'EASY' : j < 6 ? 'MEDIUM' : 'HARD',
            }))}],
          })),
        },
        {
          name: 'Brainstellar',
          type: 'WEBSITE',
          url: 'https://brainstellar.com',
          isMustDo: true,
          order: 1,
          units: [
            { name: 'Easy', order: 0, subUnits: [
              { name: 'Discrete Maths', order: 0, items: [
                { name: 'Ants on a Triangle', type: 'PUZZLE', difficulty: 'EASY', order: 0 },
                { name: 'Coin on a Table', type: 'PUZZLE', difficulty: 'EASY', order: 1 },
                { name: 'Two Eggs Problem', type: 'PUZZLE', difficulty: 'EASY', order: 2 },
                { name: 'Birthday Paradox', type: 'PUZZLE', difficulty: 'EASY', order: 3 },
                { name: 'Monty Hall', type: 'PUZZLE', difficulty: 'EASY', order: 4 },
              ]},
              { name: 'Probability', order: 1, items: [
                { name: 'Dice Rolling', type: 'PUZZLE', difficulty: 'EASY', order: 0 },
                { name: 'Card Drawing', type: 'PUZZLE', difficulty: 'EASY', order: 1 },
                { name: 'Coin Flipping', type: 'PUZZLE', difficulty: 'EASY', order: 2 },
              ]},
            ]},
            { name: 'Medium', order: 1, subUnits: [
              { name: 'Strategy & Logic', order: 0, items: [
                { name: 'Pirate Game', type: 'PUZZLE', difficulty: 'MEDIUM', order: 0 },
                { name: 'Prisoners and Hats', type: 'PUZZLE', difficulty: 'MEDIUM', order: 1 },
                { name: 'Blue Eyes Island', type: 'PUZZLE', difficulty: 'MEDIUM', order: 2 },
                { name: 'Weighing Problems', type: 'PUZZLE', difficulty: 'MEDIUM', order: 3 },
              ]},
              { name: 'Expected Value', order: 1, items: [
                { name: 'Coupon Collector', type: 'PUZZLE', difficulty: 'MEDIUM', order: 0 },
                { name: 'Gambler\'s Ruin', type: 'PUZZLE', difficulty: 'MEDIUM', order: 1 },
                { name: 'Random Walk', type: 'PUZZLE', difficulty: 'MEDIUM', order: 2 },
              ]},
            ]},
            { name: 'Hard', order: 2, subUnits: [
              { name: 'Advanced Probability', order: 0, items: [
                { name: 'Broken Stick Triangle', type: 'PUZZLE', difficulty: 'HARD', order: 0 },
                { name: 'Ballot Problem', type: 'PUZZLE', difficulty: 'HARD', order: 1 },
                { name: 'Secretary Problem', type: 'PUZZLE', difficulty: 'HARD', order: 2 },
              ]},
            ]},
            { name: 'Deadly', order: 3, subUnits: [
              { name: 'Competition-Level', order: 0, items: [
                { name: 'Infinite Sequence Puzzle', type: 'PUZZLE', difficulty: 'DEADLY', order: 0 },
                { name: 'Measure Theory Puzzle', type: 'PUZZLE', difficulty: 'DEADLY', order: 1 },
              ]},
            ]},
          ],
        },
        {
          name: 'QuantGuide',
          type: 'BOOK',
          isMustDo: true,
          description: 'Focus on Hard questions',
          order: 2,
          units: [
            { name: 'Hard Problems', order: 0, subUnits: [
              { name: 'Probability', order: 0, items: Array.from({ length: 10 }, (_, i) => ({
                name: `Hard Problem ${i + 1}`, type: 'PROBLEM', difficulty: 'HARD', order: i,
              }))},
              { name: 'Combinatorics', order: 1, items: Array.from({ length: 8 }, (_, i) => ({
                name: `Combinatorics Problem ${i + 1}`, type: 'PROBLEM', difficulty: 'HARD', order: i,
              }))},
            ]},
          ],
        },
        {
          name: 'Jane Street Monthly Puzzles',
          type: 'WEBSITE',
          url: 'https://www.janestreet.com/puzzles/',
          isMustDo: true,
          order: 3,
          units: Array.from({ length: 5 }, (_, y) => ({
            name: `${2022 + y}`,
            order: y,
            subUnits: Array.from({ length: 12 }, (_, m) => ({
              name: new Date(2022, m).toLocaleString('en', { month: 'long' }),
              order: m,
              items: [{ name: `Puzzle — ${new Date(2022, m).toLocaleString('en', { month: 'short' })} ${2022 + y}`, type: 'PUZZLE', difficulty: 'HARD', order: 0 }],
            })),
          })),
        },
        {
          name: '50 Challenging Problems in Probability (Mosteller)',
          type: 'BOOK',
          isMustDo: false,
          order: 4,
          units: [{ name: 'All Problems', order: 0, subUnits: [
            { name: 'Problems 1-25', order: 0, items: Array.from({ length: 25 }, (_, i) => ({
              name: `Problem ${i + 1}`, type: 'PROBLEM', order: i, difficulty: i < 10 ? 'EASY' : 'MEDIUM',
            }))},
            { name: 'Problems 26-50', order: 1, items: Array.from({ length: 25 }, (_, i) => ({
              name: `Problem ${i + 26}`, type: 'PROBLEM', order: i, difficulty: i < 15 ? 'MEDIUM' : 'HARD',
            }))},
          ]}],
        },
        {
          name: 'Probability Playlist (YouTube)',
          type: 'VIDEO_SERIES',
          url: 'https://www.youtube.com/watch?v=N5vJSNXPEwA&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30',
          isMustDo: false,
          order: 5,
          units: [{ name: 'Full Playlist', order: 0, subUnits: [
            { name: 'Videos', order: 0, items: [
              { name: 'Probability Basics Revision', type: 'VIDEO', order: 0 },
              { name: 'Combinatorics Review', type: 'VIDEO', order: 1 },
              { name: 'Expected Value Problems', type: 'VIDEO', order: 2 },
              { name: 'Conditional Probability Deep Dive', type: 'VIDEO', order: 3 },
              { name: 'Bayesian Thinking', type: 'VIDEO', order: 4 },
            ]},
          ]}],
        },
        {
          name: 'PuzzledQuant',
          type: 'WEBSITE',
          url: 'https://www.puzzledquant.com',
          isMustDo: false,
          order: 6,
          units: [{ name: 'Browse Topics', order: 0, subUnits: [
            { name: 'Questions', order: 0, items: [
              { name: 'Probability Questions', type: 'PROBLEM', order: 0 },
              { name: 'Logic Puzzles', type: 'PUZZLE', order: 1 },
              { name: 'Combinatorics Questions', type: 'PROBLEM', order: 2 },
            ]},
          ]}],
        },
        {
          name: 'QuantQuestions',
          type: 'WEBSITE',
          url: 'https://quantquestions.io',
          isMustDo: false,
          order: 7,
          units: [{ name: 'Browse Topics', order: 0, subUnits: [
            { name: 'Questions', order: 0, items: [
              { name: 'Interview-Style Questions', type: 'PROBLEM', order: 0 },
              { name: 'Estimation Problems', type: 'PROBLEM', order: 1 },
              { name: 'Market Making Scenarios', type: 'PROBLEM', order: 2 },
            ]},
          ]}],
        },
        {
          name: 'Probability Problems Book (B-001)',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/B-001-001-266.pdf',
          isMustDo: false,
          order: 8,
          units: [{ name: 'Initial Chapters', order: 0, subUnits: [
            { name: 'Problems', order: 0, items: Array.from({ length: 15 }, (_, i) => ({
              name: `Problem ${i + 1}`, type: 'PROBLEM', order: i, difficulty: i < 5 ? 'EASY' : i < 10 ? 'MEDIUM' : 'HARD',
            }))},
          ]}],
        },
        {
          name: 'Gardner — Colossal Book of Mathematics',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Gardner-the_colossal_book_of_mathematics.pdf',
          isMustDo: false,
          order: 9,
          units: [{ name: 'Selected Chapters', order: 0, subUnits: [
            { name: 'Mathematical Puzzles', order: 0, items: [
              { name: 'Number Theory Puzzles', type: 'PUZZLE', order: 0 },
              { name: 'Geometric Paradoxes', type: 'PUZZLE', order: 1 },
              { name: 'Combinatorial Games', type: 'PUZZLE', order: 2 },
              { name: 'Probability Paradoxes', type: 'PUZZLE', order: 3 },
            ]},
          ]}],
        },
        {
          name: 'Additional Puzzle Books Collection',
          description: 'Supplementary puzzle and math books (Books 1-7)',
          type: 'BOOK',
          isMustDo: false,
          order: 10,
          units: [
            { name: 'Book 1 — Puzzles & Problems', order: 0, subUnits: [
              { name: 'Problems', order: 0, items: Array.from({ length: 5 }, (_, i) => ({
                name: `Problem ${i + 1}`, type: 'PUZZLE', order: i,
              }))},
            ]},
            { name: 'Book 2 — Dice & Probability', order: 1, subUnits: [
              { name: 'Problems', order: 0, items: Array.from({ length: 5 }, (_, i) => ({
                name: `Problem ${i + 1}`, type: 'PUZZLE', order: i,
              }))},
            ]},
            { name: 'Book 3 — Gardner Selections', order: 2, subUnits: [
              { name: 'Problems', order: 0, items: Array.from({ length: 5 }, (_, i) => ({
                name: `Problem ${i + 1}`, type: 'PUZZLE', order: i,
              }))},
            ]},
            { name: 'Book 4 — Martin Gardner One', order: 3, subUnits: [
              { name: 'Problems', order: 0, items: Array.from({ length: 5 }, (_, i) => ({
                name: `Problem ${i + 1}`, type: 'PUZZLE', order: i,
              }))},
            ]},
            { name: 'Book 5 — Peter Winkler', order: 4, subUnits: [
              { name: 'Problems', order: 0, items: Array.from({ length: 5 }, (_, i) => ({
                name: `Problem ${i + 1}`, type: 'PUZZLE', order: i,
              }))},
            ]},
          ],
        },
      ],
    },
    {
      name: 'AI, ML & Deep Learning',
      description: 'Machine learning fundamentals and deep learning architectures',
      icon: '🤖',
      order: 2,
      resources: [
        {
          name: 'CS217 AI-ML Lecture Scribes',
          type: 'COURSE',
          isMustDo: true,
          order: 0,
          units: [
            { name: 'Supervised Learning', order: 0, subUnits: [
              { name: 'Linear Models', order: 0, items: [
                { name: 'Linear Regression', type: 'CONCEPT', order: 0 },
                { name: 'Logistic Regression', type: 'CONCEPT', order: 1 },
                { name: 'Regularization (L1/L2)', type: 'CONCEPT', order: 2 },
              ]},
              { name: 'Tree Methods', order: 1, items: [
                { name: 'Decision Trees', type: 'CONCEPT', order: 0 },
                { name: 'Random Forests', type: 'CONCEPT', order: 1 },
                { name: 'Gradient Boosting', type: 'CONCEPT', order: 2 },
              ]},
            ]},
            { name: 'Unsupervised Learning', order: 1, subUnits: [
              { name: 'Clustering', order: 0, items: [
                { name: 'K-Means', type: 'CONCEPT', order: 0 },
                { name: 'DBSCAN', type: 'CONCEPT', order: 1 },
                { name: 'PCA', type: 'CONCEPT', order: 2 },
              ]},
            ]},
          ],
        },
        {
          name: 'MIT Intro to Deep Learning',
          type: 'COURSE',
          url: 'http://introtodeeplearning.com',
          isMustDo: false,
          order: 1,
          units: [
            { name: 'Foundations', order: 0, subUnits: [
              { name: 'Neural Networks', order: 0, items: [
                { name: 'Perceptrons & Backpropagation', type: 'VIDEO', order: 0 },
                { name: 'Activation Functions', type: 'VIDEO', order: 1 },
                { name: 'Loss Functions & Optimization', type: 'VIDEO', order: 2 },
              ]},
            ]},
            { name: 'Architectures', order: 1, subUnits: [
              { name: 'Sequence Models', order: 0, items: [
                { name: 'RNNs & LSTMs', type: 'VIDEO', order: 0 },
                { name: 'Transformers & Attention', type: 'VIDEO', order: 1 },
              ]},
              { name: 'Generative Models', order: 1, items: [
                { name: 'GANs', type: 'VIDEO', order: 0 },
                { name: 'VAEs', type: 'VIDEO', order: 1 },
                { name: 'Diffusion Models', type: 'VIDEO', order: 2 },
              ]},
            ]},
          ],
        },
        {
          name: 'PGM Book — Graphical Models (Ch 3 & 4)',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Probabilistic%20Graphical%20Models%20-%20Principles%20and%20Techniques.pdf',
          isMustDo: false,
          order: 2,
          units: [
            { name: 'Ch 3: Bayesian Networks', order: 0, subUnits: [
              { name: 'Concepts', order: 0, items: [
                { name: 'Directed Acyclic Graphs', type: 'CONCEPT', order: 0 },
                { name: 'Conditional Independence', type: 'CONCEPT', order: 1 },
                { name: 'D-Separation', type: 'CONCEPT', order: 2 },
              ]},
            ]},
            { name: 'Ch 4: Markov Networks', order: 1, subUnits: [
              { name: 'Concepts', order: 0, items: [
                { name: 'Undirected Graphical Models', type: 'CONCEPT', order: 0 },
                { name: 'Clique Potentials', type: 'CONCEPT', order: 1 },
                { name: 'Markov Blanket', type: 'CONCEPT', order: 2 },
              ]},
            ]},
          ],
        },
        {
          name: 'Game Theory Course',
          type: 'COURSE',
          url: 'https://www.cse.iitb.ac.in/~swaprava/cs6001_07_2023.html',
          isMustDo: false,
          order: 3,
          units: [{ name: 'Modules', order: 0, subUnits: [
            { name: 'Game Theory Concepts', order: 0, items: [
              { name: 'Nash Equilibrium', type: 'CONCEPT', order: 0 },
              { name: 'Dominant Strategies', type: 'CONCEPT', order: 1 },
              { name: 'Auction Theory', type: 'CONCEPT', order: 2 },
              { name: 'Mechanism Design', type: 'CONCEPT', order: 3 },
            ]},
          ]}],
        },
      ],
    },
    {
      name: 'Finance & Trading Basics',
      description: 'Trading terminology, market mechanics, and company-specific prep',
      icon: '💹',
      order: 3,
      resources: [
        {
          name: 'Trading Terminology & Concepts',
          type: 'DOC',
          isMustDo: true,
          order: 0,
          units: [{ name: 'Core Concepts', order: 0, subUnits: [
            { name: 'Market Basics', order: 0, items: [
              { name: 'Bid/Ask Spread', type: 'CONCEPT', order: 0 },
              { name: 'Market Making', type: 'CONCEPT', order: 1 },
              { name: 'Order Types', type: 'CONCEPT', order: 2 },
              { name: 'Liquidity', type: 'CONCEPT', order: 3 },
              { name: 'Arbitrage', type: 'CONCEPT', order: 4 },
              { name: 'Options Basics', type: 'CONCEPT', order: 5 },
              { name: 'Greeks', type: 'CONCEPT', order: 6 },
              { name: 'Black-Scholes', type: 'CONCEPT', order: 7 },
            ]},
          ]}],
        },
        {
          name: 'Company GD Document',
          type: 'DOC',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/GroupDiscussionDocumentIndia.pdf',
          isMustDo: true,
          order: 1,
          units: [{ name: 'GD Topics', order: 0, subUnits: [
            { name: 'Discussion Prep', order: 0, items: [
              { name: 'Market Structure Questions', type: 'READING', order: 0 },
              { name: 'Trading Strategy Discussion', type: 'READING', order: 1 },
              { name: 'Current Market Events', type: 'READING', order: 2 },
            ]},
          ]}],
        },
        {
          name: 'Trading Terminology (DaVinci)',
          type: 'DOC',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Trading-Terminology_DaVinci_v1.pdf',
          isMustDo: true,
          order: 2,
          units: [{ name: 'Terms', order: 0, subUnits: [
            { name: 'Key Definitions', order: 0, items: [
              { name: 'Derivatives Terminology', type: 'READING', order: 0 },
              { name: 'Fixed Income Terms', type: 'READING', order: 1 },
              { name: 'Risk Management Terms', type: 'READING', order: 2 },
              { name: 'Execution & Trading Terms', type: 'READING', order: 3 },
            ]},
          ]}],
        },
        {
          name: 'Senior Prep Notes (Collection)',
          description: 'Notes shared by seniors on various interview topics',
          type: 'NOTES',
          isMustDo: false,
          order: 3,
          units: [
            { name: 'Note 1 — Concrete Mathematics', order: 0, subUnits: [
              { name: 'Topics', order: 0, items: [{ name: 'Key Concepts', type: 'READING', order: 0 }]},
            ]},
            { name: 'Note 2 — Discrete Algorithmic Math', order: 1, subUnits: [
              { name: 'Topics', order: 0, items: [{ name: 'Key Concepts', type: 'READING', order: 0 }]},
            ]},
            { name: 'Note 3 — Number Devil', order: 2, subUnits: [
              { name: 'Topics', order: 0, items: [{ name: 'Mathematical Adventures', type: 'READING', order: 0 }]},
            ]},
            { name: 'Note 4 — Probability Theory (Analytic View)', order: 3, subUnits: [
              { name: 'Topics', order: 0, items: [{ name: 'Analytic Probability', type: 'READING', order: 0 }]},
            ]},
          ],
        },
      ],
    },
    {
      name: 'Speed & Mental Math',
      description: 'Timed arithmetic practice for trading interviews',
      icon: '⚡',
      order: 4,
      resources: [
        {
          name: '80-in-8 Speed Tests',
          type: 'PRACTICE',
          isMustDo: true,
          order: 0,
          units: Array.from({ length: 5 }, (_, i) => ({
            name: `Test Set ${i + 1}`,
            order: i,
            subUnits: [{ name: 'Questions', order: 0, items: Array.from({ length: 20 }, (_, j) => ({
              name: `Q${i * 20 + j + 1}`, type: 'EXERCISE', order: j,
            }))}],
          })),
        },
      ],
    },
  ],
};
