/**
 * Default content seed data — Track 1: Quantitative Trader/Researcher
 * Mapped to existing PrepForge database schema.
 */

export const QUANT_TRACK = {
  name: "Quantitative Trader/Researcher",
  description: "Comprehensive prep roadmap for HFTs and quant shops, covering probability, puzzles, terminology, AI/ML, and advanced math.",
  icon: "📊",
  color: "#a78bfa",
  order: 0,
  categories: [
    {
      name: "Probability & Mathematical Foundations",
      order: 0,
      resources: [
        {
          name: "CS215 Slides (Data Analysis & Interpretation)",
          type: "SLIDES",
          order: 0,
          isMustDo: false,
          units: [
            {
              name: "CS215 Weekly Lectures",
              order: 0,
              subUnits: [
                {
                  name: "Lectures 1 to 7 Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture 1: Axioms of Probability and Set Operations",
                      type: "VIDEO",
                      order: 0
                    },
                    {
                      name: "Lecture 2: Conditional Probability, Independence and Bayes Rule",
                      type: "VIDEO",
                      order: 1
                    },
                    {
                      name: "Lecture 3: Random Variables, Expectation, Variance and Higher Moments",
                      type: "VIDEO",
                      order: 2
                    },
                    {
                      name: "Lecture 4: Standard Probability Distributions (Gaussian, Bernoulli, Binomial, Poisson, Uniform)",
                      type: "VIDEO",
                      order: 3
                    },
                    {
                      name: "Lecture 5: Joint Probability Distributions, Covariance, and Correlation Matrices",
                      type: "VIDEO",
                      order: 4
                    },
                    {
                      name: "Lecture 6: Convergence and Limit Theorems (CLT, WLLN) for Modelling",
                      type: "VIDEO",
                      order: 5
                    },
                    {
                      name: "Lecture 7: Bayesian Statistical Analysis and Parameter Estimation",
                      type: "VIDEO",
                      order: 6
                    }
                  ]
                }
              ],
              description: "Slide decks outlining probability and statistical tools."
            }
          ],
          description: "Introductory slides covering axioms of probability, estimations, joint distributions, and Bayesian analysis.",
          url: "https://github.com/sakshamrathi21/Data-Analysis-and-Interpretation-Assignments/tree/main/Lectures"
        },
        {
          name: "Probability Distributions Detail Book",
          type: "BOOK",
          order: 1,
          isMustDo: false,
          units: [
            {
              name: "Core Distributions & Models",
              order: 0,
              subUnits: [
                {
                  name: "Discrete Probability Distributions",
                  order: 0,
                  items: [
                    {
                      name: "Bernoulli Distribution - Properties & Uses",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Binomial Distribution - Derivation & Scenarios",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Geometric & Negative Binomial Distributions",
                      type: "CONCEPT",
                      order: 2
                    },
                    { name: "Poisson Distribution - Process & Limits", type: "CONCEPT", order: 3 },
                    {
                      name: "Hypergeometric & Multinomial Distributions",
                      type: "CONCEPT",
                      order: 4
                    }
                  ]
                },
                {
                  name: "Continuous Probability Distributions",
                  order: 1,
                  items: [
                    { name: "Continuous Uniform Distribution", type: "CONCEPT", order: 0 },
                    {
                      name: "Normal (Gaussian) Distribution - Central Role & Estimation",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Exponential & Gamma Distributions (Memoryless property)",
                      type: "CONCEPT",
                      order: 2
                    },
                    {
                      name: "Beta & Dirichlet Distributions (Conjugacy in Bayes)",
                      type: "CONCEPT",
                      order: 3
                    },
                    {
                      name: "Cauchy & Student-t Distributions (Fat-tailed behaviour)",
                      type: "CONCEPT",
                      order: 4
                    }
                  ]
                }
              ]
            }
          ],
          description: "Comprehensive mathematical detail of distributions and properties.",
          url: "https://github.com/sakshamrathi21/Competitive_Programming/blob/main/resources/b9549cae1d6114c8de97f9f33f3adfe4.pdf"
        },
        {
          name: "Fifty Challenging Problems in Probability",
          type: "BOOK",
          order: 2,
          isMustDo: false,
          units: [
            {
              name: "Problems 1 to 28",
              order: 0,
              subUnits: [
                {
                  name: "Puzzles",
                  order: 0,
                  items: [
                    { name: "1. The Sock Drawer", type: "PUZZLE", order: 0, difficulty: "EASY" },
                    { name: "2. Successive Wins", type: "PUZZLE", order: 1, difficulty: "MEDIUM" },
                    {
                      name: "3. The Flippant Juror",
                      type: "PUZZLE",
                      order: 2,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "4. Trials Until First Success",
                      type: "PUZZLE",
                      order: 3,
                      difficulty: "EASY"
                    },
                    { name: "5. Coin in Square", type: "PUZZLE", order: 4, difficulty: "MEDIUM" },
                    { name: "6. Chuck-a-Luck", type: "PUZZLE", order: 5, difficulty: "EASY" },
                    {
                      name: "7. Curing the Compulsive Gambler",
                      type: "PUZZLE",
                      order: 6,
                      difficulty: "HARD"
                    },
                    { name: "8. Perfect Bridge Hand", type: "PUZZLE", order: 7, difficulty: "EASY" },
                    { name: "9. Craps", type: "PUZZLE", order: 8, difficulty: "MEDIUM" },
                    {
                      name: "10. An Experiment in Personal Taste for Money",
                      type: "PUZZLE",
                      order: 9,
                      difficulty: "EASY"
                    },
                    {
                      name: "11. Silent Cooperation",
                      type: "PUZZLE",
                      order: 10,
                      difficulty: "MEDIUM"
                    },
                    { name: "12. Quo Vadis?", type: "PUZZLE", order: 11, difficulty: "HARD" },
                    {
                      name: "13. The Prisoner's Dilemma",
                      type: "PUZZLE",
                      order: 12,
                      difficulty: "EASY"
                    },
                    {
                      name: "14. Collecting Coupons (Euler's Approximation)",
                      type: "PUZZLE",
                      order: 13,
                      difficulty: "HARD"
                    },
                    { name: "15. The Theater Row", type: "PUZZLE", order: 14, difficulty: "MEDIUM" },
                    {
                      name: "16. Will Second-Best Be Runner-Up?",
                      type: "PUZZLE",
                      order: 15,
                      difficulty: "HARD"
                    },
                    { name: "17. Twin Knights", type: "PUZZLE", order: 16, difficulty: "MEDIUM" },
                    {
                      name: "18. An Even Split at Coin Tossing (Stirling's)",
                      type: "PUZZLE",
                      order: 17,
                      difficulty: "HARD"
                    },
                    {
                      name: "19. Isaac Newton Helps Samuel Pepys",
                      type: "PUZZLE",
                      order: 18,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "20. The Three-Cornered Duel",
                      type: "PUZZLE",
                      order: 19,
                      difficulty: "HARD"
                    },
                    {
                      name: "21. Should You Sample with or without Replacement?",
                      type: "PUZZLE",
                      order: 20,
                      difficulty: "MEDIUM"
                    },
                    { name: "22. The Ballot Box", type: "PUZZLE", order: 21, difficulty: "HARD" },
                    {
                      name: "23. Ties in Matching Pennies",
                      type: "PUZZLE",
                      order: 22,
                      difficulty: "MEDIUM"
                    },
                    { name: "24. The Unfair Subway", type: "PUZZLE", order: 23, difficulty: "EASY" },
                    {
                      name: "25. Lengths of Random Chords",
                      type: "PUZZLE",
                      order: 24,
                      difficulty: "HARD"
                    },
                    {
                      name: "26. The Hurried Duelers",
                      type: "PUZZLE",
                      order: 25,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "27. Catching the Cautious Counterfeiter",
                      type: "PUZZLE",
                      order: 26,
                      difficulty: "EASY"
                    },
                    {
                      name: "28. Catching the Greedy Counterfeiter (Poisson)",
                      type: "PUZZLE",
                      order: 27,
                      difficulty: "MEDIUM"
                    }
                  ]
                }
              ],
              description: "First half of the collection."
            },
            {
              name: "Problems 29 to 56",
              order: 1,
              subUnits: [
                {
                  name: "Puzzles",
                  order: 0,
                  items: [
                    { name: "29. Moldy Gelatin", type: "PUZZLE", order: 0, difficulty: "MEDIUM" },
                    { name: "30. Evening the Sales", type: "PUZZLE", order: 1, difficulty: "HARD" },
                    { name: "31. Birthday Pairings", type: "PUZZLE", order: 2, difficulty: "EASY" },
                    {
                      name: "32. Finding Your Birthmate",
                      type: "PUZZLE",
                      order: 3,
                      difficulty: "EASY"
                    },
                    {
                      name: "33. Relating Birthday Pairings and Birthmate Problems",
                      type: "PUZZLE",
                      order: 4,
                      difficulty: "MEDIUM"
                    },
                    { name: "34. Birthday Holidays", type: "PUZZLE", order: 5, difficulty: "HARD" },
                    { name: "35. The Cliff-Hanger", type: "PUZZLE", order: 6, difficulty: "HARD" },
                    { name: "36. Gambler's Ruin", type: "PUZZLE", order: 7, difficulty: "MEDIUM" },
                    {
                      name: "37. Bold Play vs. Cautious Play",
                      type: "PUZZLE",
                      order: 8,
                      difficulty: "HARD"
                    },
                    {
                      name: "38. The Thick Coin (Symmetry & Points on Line)",
                      type: "PUZZLE",
                      order: 9,
                      difficulty: "HARD"
                    },
                    {
                      name: "39. The Clumsy Chemist",
                      type: "PUZZLE",
                      order: 10,
                      difficulty: "MEDIUM"
                    },
                    { name: "40. The First Ace", type: "PUZZLE", order: 11, difficulty: "EASY" },
                    {
                      name: "41. The Locomotive Problem",
                      type: "PUZZLE",
                      order: 12,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "42. The Little End of the Stick",
                      type: "PUZZLE",
                      order: 13,
                      difficulty: "MEDIUM"
                    },
                    { name: "43. The Broken Bar", type: "PUZZLE", order: 14, difficulty: "HARD" },
                    {
                      name: "44. Winning an Unfair Game",
                      type: "PUZZLE",
                      order: 15,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "45. Average Number of Matches",
                      type: "PUZZLE",
                      order: 16,
                      difficulty: "EASY"
                    },
                    {
                      name: "46. Probabilities of Matches",
                      type: "PUZZLE",
                      order: 17,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "47. Choosing the Largest Dowry",
                      type: "PUZZLE",
                      order: 18,
                      difficulty: "HARD"
                    },
                    {
                      name: "48. Choosing the Largest Random Number",
                      type: "PUZZLE",
                      order: 19,
                      difficulty: "HARD"
                    },
                    {
                      name: "49. Doubling Your Accuracy",
                      type: "PUZZLE",
                      order: 20,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "50. Random Quadratic Equations",
                      type: "PUZZLE",
                      order: 21,
                      difficulty: "HARD"
                    },
                    {
                      name: "51. Two-Dimensional Random Walk",
                      type: "PUZZLE",
                      order: 22,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "52. Three-Dimensional Random Walk",
                      type: "PUZZLE",
                      order: 23,
                      difficulty: "HARD"
                    },
                    { name: "53. Buffon's Needle", type: "PUZZLE", order: 24, difficulty: "HARD" },
                    {
                      name: "54. Buffon's Needle with Horizontal & Vertical Rulings",
                      type: "PUZZLE",
                      order: 25,
                      difficulty: "HARD"
                    },
                    { name: "55. Long Needles", type: "PUZZLE", order: 26, difficulty: "HARD" },
                    { name: "56. Molina's Urns", type: "PUZZLE", order: 27, difficulty: "HARD" }
                  ]
                }
              ],
              description: "Second half of the collection."
            }
          ],
          description: "56 excellent probability puzzles by Frederick Mosteller, an absolute classic for quant interview preparation.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Fifty%20Challenging%20Problems%20in%20Probability%20(F.%20Mosteller).pdf"
        },
        {
          name: "Introduction to Probability Models (Sheldon Ross)",
          type: "BOOK",
          order: 3,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: Introduction to Probability Theory",
              order: 0,
              subUnits: [
                {
                  name: "Axioms and Basic Theory",
                  order: 0,
                  items: [
                    { name: "Sample Space and Events", type: "CONCEPT", order: 0 },
                    { name: "Probabilities Defined on Events", type: "CONCEPT", order: 1 },
                    {
                      name: "Conditional Probabilities and Bayes Formula",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Random Variables",
              order: 1,
              subUnits: [
                {
                  name: "Continuous and Discrete Variables",
                  order: 0,
                  items: [
                    { name: "Discrete Random Variables", type: "CONCEPT", order: 0 },
                    { name: "Continuous Random Variables", type: "CONCEPT", order: 1 },
                    { name: "Expectation of Random Variables", type: "CONCEPT", order: 2 },
                    { name: "Jointly Distributed Random Variables", type: "CONCEPT", order: 3 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Conditional Probability and Conditional Expectation",
              order: 2,
              subUnits: [
                {
                  name: "Conditioning and Moments",
                  order: 0,
                  items: [
                    { name: "Conditional Random Variable Definition", type: "CONCEPT", order: 0 },
                    { name: "Conditional Expectation & Variance", type: "CONCEPT", order: 1 },
                    { name: "Computing Expectation by Conditioning", type: "CONCEPT", order: 2 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: Markov Chains",
              order: 3,
              subUnits: [
                {
                  name: "Discrete Time Markov Chains",
                  order: 0,
                  items: [
                    { name: "Chapman-Kolmogorov Equations", type: "CONCEPT", order: 0 },
                    {
                      name: "Classification of States (Recurrent, Transient)",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Limiting Probabilities & Stationary Distributions",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: The Exponential Distribution and the Poisson Process",
              order: 4,
              subUnits: [
                {
                  name: "Poisson Process and Arrival Models",
                  order: 0,
                  items: [
                    { name: "Properties of Exponential Distribution", type: "CONCEPT", order: 0 },
                    {
                      name: "Poisson Process definition and counting process",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Generalizations (Nonhomogeneous, Compound Poisson)",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: Continuous-Time Markov Chains",
              order: 5,
              subUnits: [
                {
                  name: "Continuous Transitions",
                  order: 0,
                  items: [
                    { name: "Infinitesimal Generator Matrix (Q-matrix)", type: "CONCEPT", order: 0 },
                    { name: "Kolmogorov Differential Equations", type: "CONCEPT", order: 1 },
                    { name: "Limiting Probabilities in Continuous Time", type: "CONCEPT", order: 2 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 7: Renewal Theory and Its Applications",
              order: 6,
              subUnits: [
                {
                  name: "Renewal Process Semantics",
                  order: 0,
                  items: [
                    { name: "Limit Theorems for Renewal Processes", type: "CONCEPT", order: 0 },
                    { name: "Key Renewal Theorem", type: "CONCEPT", order: 1 },
                    { name: "Alternating Renewal Processes", type: "CONCEPT", order: 2 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 8: Queueing Theory",
              order: 7,
              subUnits: [
                {
                  name: "Queueing Systems Analysis",
                  order: 0,
                  items: [
                    { name: "M/M/1 and M/M/k Queues", type: "CONCEPT", order: 0 },
                    { name: "Network of Queues", type: "CONCEPT", order: 1 },
                    { name: "Little's Formula (L = lambda * W)", type: "CONCEPT", order: 2 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 9: Reliability Theory",
              order: 8,
              subUnits: [
                {
                  name: "System Reliability and Structure",
                  order: 0,
                  items: [
                    { name: "Structure Function & Reliability Bounds", type: "CONCEPT", order: 0 },
                    { name: "System Life Distribution", type: "CONCEPT", order: 1 },
                    { name: "Expected System Lifetime", type: "CONCEPT", order: 2 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 10: Brownian Motion and Stationary Processes",
              order: 9,
              subUnits: [
                {
                  name: "Brownian Motion Options Pricing",
                  order: 0,
                  items: [
                    { name: "Brownian Motion definition & properties", type: "CONCEPT", order: 0 },
                    { name: "Hitting Times and First Passage Times", type: "CONCEPT", order: 1 },
                    {
                      name: "Black-Scholes Option Pricing Formula derivation",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 11: Simulation",
              order: 10,
              subUnits: [
                {
                  name: "Monte Carlo Simulation Methods",
                  order: 0,
                  items: [
                    { name: "Inverse Transform Method", type: "CONCEPT", order: 0 },
                    { name: "Acceptance-Rejection Method", type: "CONCEPT", order: 1 },
                    {
                      name: "Variance Reduction Techniques (Antithetic, Control)",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                }
              ]
            }
          ],
          description: "Classic introductory book for mathematical probability modeling.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Probabilistic%20Graphical%20Models%20-%20Principles%20and%20Techniques.pdf"
        },
        {
          name: "KF Book Section 2.1 (Basic Probability Theory)",
          type: "BOOK",
          order: 4,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: Introduction",
              order: 0,
              subUnits: [
                {
                  name: "1.1 Motivation and Core Concepts",
                  order: 0,
                  items: [
                    { name: "Probabilistic Graphical Models framework", type: "CONCEPT", order: 0 },
                    {
                      name: "Structured representation of joint distributions",
                      type: "CONCEPT",
                      order: 1
                    }
                  ]
                }
              ],
              description: "Foundational ideas of graphical representations and probabilistic reasoning."
            },
            {
              name: "Chapter 2: Foundations",
              order: 1,
              subUnits: [
                {
                  name: "Section 2.1: Probability Theory",
                  order: 0,
                  items: [
                    { name: "2.1.1 Probability Distributions", type: "CONCEPT", order: 0 },
                    { name: "2.1.2 Basic Concepts in Probability", type: "CONCEPT", order: 1 },
                    {
                      name: "2.1.3 Random Variables and Joint Distributions",
                      type: "CONCEPT",
                      order: 2
                    },
                    {
                      name: "2.1.4 Independence and Conditional Independence",
                      type: "CONCEPT",
                      order: 3
                    },
                    { name: "2.1.5 Querying a Distribution", type: "CONCEPT", order: 4 },
                    { name: "2.1.6 Continuous Spaces", type: "CONCEPT", order: 5 },
                    { name: "2.1.7 Expectation and Variance", type: "CONCEPT", order: 6 }
                  ]
                },
                {
                  name: "Section 2.2: Graphs",
                  order: 1,
                  items: [
                    { name: "Directed and Undirected Graphs", type: "CONCEPT", order: 0 },
                    { name: "Cliques, Paths, and Cycles", type: "CONCEPT", order: 1 }
                  ]
                }
              ],
              description: "Probability theory basics and Graph concepts."
            },
            {
              name: "Chapter 3: The Bayesian Network Representation",
              order: 2,
              subUnits: [
                {
                  name: "Semantics and Factorization",
                  order: 0,
                  items: [
                    { name: "3.1 Bayesian Network Semantics", type: "CONCEPT", order: 0 },
                    { name: "3.2 Graphs and Distributions", type: "CONCEPT", order: 1 },
                    { name: "3.3 I-Equivalence", type: "CONCEPT", order: 2 },
                    { name: "3.4 From Distributions to Graphs", type: "CONCEPT", order: 3 }
                  ]
                }
              ],
              description: "Directed graphical models and Bayesian networks semantics."
            },
            {
              name: "Chapter 4: Undirected Graphical Models",
              order: 3,
              subUnits: [
                {
                  name: "Markov Network Semantics",
                  order: 0,
                  items: [
                    {
                      name: "4.1 Parameterization & Gibbs Distributions",
                      type: "CONCEPT",
                      order: 0
                    },
                    { name: "4.2 Markov Network Independencies", type: "CONCEPT", order: 1 },
                    { name: "4.3 Parameterization Revisited", type: "CONCEPT", order: 2 },
                    {
                      name: "4.4 Undirected Relation to Bayesian Networks",
                      type: "CONCEPT",
                      order: 3
                    },
                    { name: "4.5 Undirected Graphical Models Summary", type: "CONCEPT", order: 4 }
                  ]
                }
              ],
              description: "Markov networks and undirected parameterizations."
            }
          ],
          description: "Read Section 2.1 only for the basic theoretical foundations of probability distributions and core expectations.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Probabilistic%20Graphical%20Models%20-%20Principles%20and%20Techniques.pdf"
        },
        {
          name: "Other Mathematical Collections (Winkler, Gardner, and Probability Papers)",
          type: "BOOK",
          order: 5,
          isMustDo: false,
          units: [
            {
              name: "Peter Winkler: Mathematical Puzzles",
              order: 0,
              subUnits: [
                {
                  name: "Core Chapters",
                  order: 0,
                  items: [
                    {
                      name: "Algorithmic Puzzles (State representations)",
                      type: "PUZZLE",
                      order: 0
                    },
                    {
                      name: "Probability Puzzles (Expectation, conditioning)",
                      type: "PUZZLE",
                      order: 1
                    },
                    { name: "Geometry Puzzles (Symmetry, grids)", type: "PUZZLE", order: 2 },
                    {
                      name: "Number Theory Puzzles (Divisibility, modular)",
                      type: "PUZZLE",
                      order: 3
                    }
                  ]
                }
              ],
              description: "Topics in elegant puzzles and mathematical diversions."
            },
            {
              name: "Martin Gardner: Colossal Book of Mathematics",
              order: 1,
              subUnits: [
                {
                  name: "Key Puzzle Divisions",
                  order: 0,
                  items: [
                    { name: "Arithmetic and Algebra Puzzles", type: "PUZZLE", order: 0 },
                    { name: "Plane Geometry & Topology", type: "PUZZLE", order: 1 },
                    { name: "Probability & Combinatorics Games", type: "PUZZLE", order: 2 },
                    { name: "Mathematical Games & Strategies", type: "PUZZLE", order: 3 }
                  ]
                }
              ],
              description: "Mathematical puzzles, games, and articles."
            },
            {
              name: "Dice and Coin Probability (dice1.pdf)",
              order: 2,
              subUnits: [
                {
                  name: "Coin and Dice Puzzles",
                  order: 0,
                  items: [
                    { name: "Pattern matches in repeated coin flips", type: "CONCEPT", order: 0 },
                    { name: "Number of rolls until all faces appear", type: "CONCEPT", order: 1 },
                    { name: "Stochastic games with biased coins", type: "CONCEPT", order: 2 }
                  ]
                }
              ],
              description: "Probability puzzles focused specifically on standard dice, coins, and probability sequences."
            }
          ],
          description: "Gardner the colossal book of mathematics, Peter Winkler, dice1, gardner02, martingardnerone, and 07e72968."
        }
      ],
      description: "Rigorous mathematical preparation for probability, distributions, and core statistics expected in quant rounds.",
      icon: "🎲"
    },
    {
      name: "Puzzles, Brainteasers & Practice Sites",
      order: 1,
      resources: [
        {
          name: "Green Book (A Practical Guide to Quantitative Finance Interviews)",
          type: "BOOK",
          order: 0,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: General Principles",
              order: 0,
              subUnits: [
                {
                  name: "Interview Mindset",
                  order: 0,
                  items: [
                    { name: "Build a broad knowledge base", type: "CONCEPT", order: 0 },
                    { name: "Practice your interview skills", type: "CONCEPT", order: 1 },
                    { name: "Listen carefully and speak your mind", type: "CONCEPT", order: 2 },
                    { name: "Make reasonable assumptions", type: "CONCEPT", order: 3 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Brain Teasers",
              order: 1,
              subUnits: [
                {
                  name: "2.1 Problem Simplification",
                  order: 0,
                  items: [
                    {
                      name: "Screwy Pirates Puzzle",
                      type: "PUZZLE",
                      order: 0,
                      difficulty: "MEDIUM"
                    },
                    { name: "Tiger and Sheep Game", type: "PUZZLE", order: 1, difficulty: "MEDIUM" }
                  ]
                },
                {
                  name: "2.2 Logic Reasoning",
                  order: 1,
                  items: [
                    { name: "River Crossing Puzzle", type: "PUZZLE", order: 0, difficulty: "EASY" },
                    {
                      name: "Birthday Problem Logic",
                      type: "PUZZLE",
                      order: 1,
                      difficulty: "MEDIUM"
                    },
                    { name: "Card Game Estimation", type: "PUZZLE", order: 2, difficulty: "MEDIUM" },
                    { name: "Burning Ropes Puzzle", type: "PUZZLE", order: 3, difficulty: "EASY" },
                    {
                      name: "Defective Ball in Scales",
                      type: "PUZZLE",
                      order: 4,
                      difficulty: "EASY"
                    },
                    {
                      name: "Trailing Zeros of Factorials",
                      type: "PUZZLE",
                      order: 5,
                      difficulty: "EASY"
                    },
                    { name: "Horse Race Sorting", type: "PUZZLE", order: 6, difficulty: "MEDIUM" },
                    {
                      name: "Infinite Sequence Convergence",
                      type: "PUZZLE",
                      order: 7,
                      difficulty: "HARD"
                    }
                  ]
                },
                {
                  name: "2.3 Thinking Out of the Box",
                  order: 2,
                  items: [
                    { name: "Box Packing Limits", type: "PUZZLE", order: 0, difficulty: "MEDIUM" },
                    {
                      name: "Calendar Cubes Construction",
                      type: "PUZZLE",
                      order: 1,
                      difficulty: "MEDIUM"
                    },
                    { name: "Door to Offer Paradox", type: "PUZZLE", order: 2, difficulty: "EASY" },
                    {
                      name: "Message Delivery Security",
                      type: "PUZZLE",
                      order: 3,
                      difficulty: "MEDIUM"
                    },
                    { name: "Last Ball in Jar", type: "PUZZLE", order: 4, difficulty: "EASY" },
                    { name: "Light Switches & Bulbs", type: "PUZZLE", order: 5, difficulty: "EASY" },
                    {
                      name: "Quant Salary Negotiation Riddle",
                      type: "PUZZLE",
                      order: 6,
                      difficulty: "MEDIUM"
                    }
                  ]
                },
                {
                  name: "2.4 Application of Symmetry",
                  order: 3,
                  items: [
                    {
                      name: "Coin Piles Splitting Game",
                      type: "PUZZLE",
                      order: 0,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Mislabeled Bags Matching",
                      type: "PUZZLE",
                      order: 1,
                      difficulty: "EASY"
                    },
                    { name: "Wise Men Hats Symmetry", type: "PUZZLE", order: 2, difficulty: "HARD" }
                  ]
                },
                {
                  name: "2.5 Series Summation",
                  order: 4,
                  items: [
                    {
                      name: "Clock Pieces Broken Sums",
                      type: "PUZZLE",
                      order: 0,
                      difficulty: "EASY"
                    },
                    {
                      name: "Missing Integers Detection",
                      type: "PUZZLE",
                      order: 1,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Counterfeit Coins Weight Balance I",
                      type: "PUZZLE",
                      order: 2,
                      difficulty: "MEDIUM"
                    }
                  ]
                },
                {
                  name: "2.6 The Pigeon Hole Principle",
                  order: 5,
                  items: [
                    { name: "Matching Socks Drawer", type: "PUZZLE", order: 0, difficulty: "EASY" },
                    { name: "Handshakes at Party", type: "PUZZLE", order: 1, difficulty: "MEDIUM" },
                    { name: "Have We Met Before?", type: "PUZZLE", order: 2, difficulty: "MEDIUM" },
                    {
                      name: "Ants on a Square Edge",
                      type: "PUZZLE",
                      order: 3,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Counterfeit Coins Weight Balance II",
                      type: "PUZZLE",
                      order: 4,
                      difficulty: "HARD"
                    }
                  ]
                },
                {
                  name: "2.7 Modular Arithmetic",
                  order: 6,
                  items: [
                    {
                      name: "100 Prisoners and Red/Blue Hats",
                      type: "PUZZLE",
                      order: 0,
                      difficulty: "HARD"
                    },
                    {
                      name: "Division by 9 Rule Proof",
                      type: "PUZZLE",
                      order: 1,
                      difficulty: "EASY"
                    },
                    {
                      name: "Chameleon Colors Transitions",
                      type: "PUZZLE",
                      order: 2,
                      difficulty: "HARD"
                    }
                  ]
                },
                {
                  name: "2.8 Mathematical Induction",
                  order: 7,
                  items: [
                    {
                      name: "Coin Split Product Constant",
                      type: "PUZZLE",
                      order: 0,
                      difficulty: "HARD"
                    },
                    {
                      name: "Chocolate Bar Splitting Steps",
                      type: "PUZZLE",
                      order: 1,
                      difficulty: "EASY"
                    },
                    {
                      name: "Race Track Gas Station Cycle",
                      type: "PUZZLE",
                      order: 2,
                      difficulty: "HARD"
                    }
                  ]
                },
                {
                  name: "2.9 Proof by Contradiction",
                  order: 8,
                  items: [
                    {
                      name: "Square Root of 2 Irrationality",
                      type: "PUZZLE",
                      order: 0,
                      difficulty: "EASY"
                    },
                    {
                      name: "Rainbow Hats Coordination Puzzle",
                      type: "PUZZLE",
                      order: 1,
                      difficulty: "HARD"
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Calculus and Linear Algebra",
              order: 2,
              subUnits: [
                {
                  name: "3.1-3.2 Derivatives and Integration",
                  order: 0,
                  items: [
                    {
                      name: "Derivatives maximum and minimum optimization",
                      type: "CONCEPT",
                      order: 0
                    },
                    { name: "L'Hospital's rule limits", type: "CONCEPT", order: 1 },
                    { name: "Expected value using integrals", type: "CONCEPT", order: 2 }
                  ]
                },
                {
                  name: "3.3-3.4 Important Calculus Methods",
                  order: 1,
                  items: [
                    { name: "Taylor Series approximations", type: "CONCEPT", order: 0 },
                    { name: "Newton's Method for roots", type: "CONCEPT", order: 1 },
                    {
                      name: "Lagrange Multipliers constrained optimization",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                },
                {
                  name: "3.5-3.6 Linear Algebra & ODEs",
                  order: 2,
                  items: [
                    { name: "Separable & first-order linear ODEs", type: "CONCEPT", order: 0 },
                    { name: "Eigenvalue and Eigenvector decompositions", type: "CONCEPT", order: 1 },
                    {
                      name: "Positive semidefinite and positive definite matrices",
                      type: "CONCEPT",
                      order: 2
                    },
                    {
                      name: "QR, LU, and Cholesky Matrix decompositions",
                      type: "CONCEPT",
                      order: 3
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: Probability Theory",
              order: 3,
              subUnits: [
                {
                  name: "4.1-4.2 Definitions and Combinatorics",
                  order: 0,
                  items: [
                    { name: "Coin Toss game probabilities", type: "CONCEPT", order: 0 },
                    { name: "Drunk Passenger seats selection", type: "PUZZLE", order: 1 },
                    { name: "Poker Hands & Combinatorial Analysis", type: "CONCEPT", order: 2 }
                  ]
                },
                {
                  name: "4.3 Conditional Probability & Bayes Formula",
                  order: 1,
                  items: [
                    { name: "Unfair Coin & Fair probability creation", type: "PUZZLE", order: 0 },
                    { name: "Monty Hall Problem Analysis", type: "PUZZLE", order: 1 },
                    { name: "Amoeba Population survival limits", type: "PUZZLE", order: 2 },
                    { name: "Russian Roulette game series", type: "PUZZLE", order: 3 },
                    { name: "Gambler's Ruin standard problem", type: "CONCEPT", order: 4 }
                  ]
                },
                {
                  name: "4.4-4.6 Expected Values & Order Stats",
                  order: 2,
                  items: [
                    { name: "Dice Game optimal choices", type: "PUZZLE", order: 0 },
                    { name: "Connecting Noodles expectation", type: "PUZZLE", order: 1 },
                    { name: "Coupon Collection Expected Steps", type: "CONCEPT", order: 2 },
                    {
                      name: "Expected value of max and min (Order Statistics)",
                      type: "CONCEPT",
                      order: 3
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: Stochastic Calculus & Processes",
              order: 4,
              subUnits: [
                {
                  name: "Processes and Ito Lemma",
                  order: 0,
                  items: [
                    { name: "Markov Chains limiting state calculations", type: "CONCEPT", order: 0 },
                    { name: "Martingales and Random Walks expectations", type: "CONCEPT", order: 1 },
                    { name: "Dynamic Programming Card & Dice Games", type: "CONCEPT", order: 2 },
                    { name: "Brownian Motion first passage time", type: "CONCEPT", order: 3 },
                    { name: "Ito's Lemma definition and application", type: "CONCEPT", order: 4 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: Finance (Optional / Skim)",
              order: 5,
              subUnits: [
                {
                  name: "Option Pricing and Greeks",
                  order: 0,
                  items: [
                    { name: "Put-Call Parity derivation", type: "CONCEPT", order: 0 },
                    {
                      name: "Black-Scholes-Merton differential equation",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Delta, Gamma, Theta, and Vega options Greeks",
                      type: "CONCEPT",
                      order: 2
                    },
                    {
                      name: "Portfolio optimization and Value at Risk (VaR)",
                      type: "CONCEPT",
                      order: 3
                    }
                  ]
                }
              ]
            }
          ],
          description: "Classic interview prep book by Xinfeng Zhou. Absolutely essential.",
          url: "https://academyflex.com/wp-content/uploads/2024/03/a-practical-guide-to-quantitative-finance-interviews.pdf"
        },
        {
          name: "Brainstellar Puzzle Site",
          type: "WEBSITE",
          order: 1,
          isMustDo: false,
          units: [
            {
              name: "Easy Riddles",
              order: 0,
              subUnits: [
                {
                  name: "Puzzles",
                  order: 0,
                  items: [
                    { name: "3 Bullets in Revolver", type: "PUZZLE", order: 0, difficulty: "EASY" },
                    {
                      name: "100 Prisoners Red/Blue Hats",
                      type: "PUZZLE",
                      order: 1,
                      difficulty: "EASY"
                    },
                    {
                      name: "4 Cards Selection Logic",
                      type: "PUZZLE",
                      order: 2,
                      difficulty: "EASY"
                    },
                    {
                      name: "Glass Half Full Measurement",
                      type: "PUZZLE",
                      order: 3,
                      difficulty: "EASY"
                    }
                  ]
                }
              ]
            },
            {
              name: "Medium Riddles",
              order: 1,
              subUnits: [
                {
                  name: "Puzzles",
                  order: 0,
                  items: [
                    {
                      name: "2 Eggs and 100 Floors",
                      type: "PUZZLE",
                      order: 0,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Burning Ropes for 45 Mins",
                      type: "PUZZLE",
                      order: 1,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "3 Ants on Triangle Corner",
                      type: "PUZZLE",
                      order: 2,
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Blindfolded Coins Splitting",
                      type: "PUZZLE",
                      order: 3,
                      difficulty: "MEDIUM"
                    }
                  ]
                }
              ]
            },
            {
              name: "Hard & Deadly Riddles",
              order: 2,
              subUnits: [
                {
                  name: "Puzzles",
                  order: 0,
                  items: [
                    {
                      name: "100 Coins on Table Division",
                      type: "PUZZLE",
                      order: 0,
                      difficulty: "HARD"
                    },
                    {
                      name: "Gibraltar Bridge crossing with torch",
                      type: "PUZZLE",
                      order: 1,
                      difficulty: "HARD"
                    },
                    {
                      name: "Monty Hall Game variation with Host shift",
                      type: "PUZZLE",
                      order: 2,
                      difficulty: "HARD"
                    },
                    {
                      name: "Amoeba multiplication cell convergence",
                      type: "PUZZLE",
                      order: 3,
                      difficulty: "HARD"
                    }
                  ]
                }
              ]
            }
          ],
          description: "Famous puzzle website categorized by difficulty levels: Easy, Medium, Hard, and Deadly.",
          url: "https://brainstellar.com"
        },
        {
          name: "TED-Ed Riddles Playlist",
          type: "VIDEO_SERIES",
          order: 2,
          isMustDo: false,
          units: [
            {
              name: "Riddle Videos 1 to 83",
              order: 0,
              subUnits: [
                {
                  name: "Videos 1 to 40",
                  order: 0,
                  items: [
                    {
                      name: "1. Can you solve the prisoner hat riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 0,
                      url: "https://www.youtube.com/watch?v=N5vJSNXPEwA&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "2. Can you solve the bridge riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 1,
                      url: "https://www.youtube.com/watch?v=7yDmGnA8Hw0&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "3. Can you solve the famously difficult green-eyed logic puzzle? - Alex Gendler",
                      type: "VIDEO",
                      order: 2,
                      url: "https://www.youtube.com/watch?v=98TQv5IAtY8&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "4. Can you solve the virus riddle? - Lisa Winer",
                      type: "VIDEO",
                      order: 3,
                      url: "https://www.youtube.com/watch?v=ZKh6z0X6KRw&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "5. Can you solve the wizard standoff riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 4,
                      url: "https://www.youtube.com/watch?v=mmkCS5eA4f8&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "6. Can you solve the three gods riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 5,
                      url: "https://www.youtube.com/watch?v=LKvjIsyYng8&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "7. Can you solve \"Einstein’s Riddle\"? - Dan Van der Vieren",
                      type: "VIDEO",
                      order: 6,
                      url: "https://www.youtube.com/watch?v=1rDVz_Fb6HQ&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "8. Can you solve the pirate riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 7,
                      url: "https://www.youtube.com/watch?v=Mc6VA7Q1vXQ&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "9. Can you solve the locker riddle? - Lisa Winer",
                      type: "VIDEO",
                      order: 8,
                      url: "https://www.youtube.com/watch?v=c18GjbnZXMw&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "10. Can you solve the prisoner boxes riddle? - Yossi Elran",
                      type: "VIDEO",
                      order: 9,
                      url: "https://www.youtube.com/watch?v=vIdStMTgNl0&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "11. Can you solve the temple riddle? - Dennis E. Shasha",
                      type: "VIDEO",
                      order: 10,
                      url: "https://www.youtube.com/watch?v=nSbvlktToSY&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "12. Can you solve the passcode riddle? - Ganesh Pai",
                      type: "VIDEO",
                      order: 11,
                      url: "https://www.youtube.com/watch?v=7Vd1dTBVbFg&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "13. Can you solve the counterfeit coin riddle? - Jennifer Lu",
                      type: "VIDEO",
                      order: 12,
                      url: "https://www.youtube.com/watch?v=tE2dZLDJSjA&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "14. Can you solve the unstoppable blob riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 13,
                      url: "https://www.youtube.com/watch?v=4peuImhJj44&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "15. Can you solve the egg drop riddle? - Yossi Elran",
                      type: "VIDEO",
                      order: 14,
                      url: "https://www.youtube.com/watch?v=NGtt7GJ1uiM&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "16. Can you solve the frog riddle? - Derek Abbott",
                      type: "VIDEO",
                      order: 15,
                      url: "https://www.youtube.com/watch?v=cpwSGsb-rTs&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "17. Can you solve the river crossing riddle? - Lisa Winer",
                      type: "VIDEO",
                      order: 16,
                      url: "https://www.youtube.com/watch?v=ADR7dUoVh_c&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "18. Can you solve the airplane riddle? - Judd A. Schorr",
                      type: "VIDEO",
                      order: 17,
                      url: "https://www.youtube.com/watch?v=dzrwnwOx0fw&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "19. Can you solve the penniless pilgrim riddle? - Daniel Finkel",
                      type: "VIDEO",
                      order: 18,
                      url: "https://www.youtube.com/watch?v=6sBB-gRhfjE&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "20. Can you solve the fish riddle? - Steve Wyborney",
                      type: "VIDEO",
                      order: 19,
                      url: "https://www.youtube.com/watch?v=lLOALyWls2k&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "21. Can you cheat death by solving this riddle? - Shravan S K",
                      type: "VIDEO",
                      order: 20,
                      url: "https://www.youtube.com/watch?v=N3JL3z4e2Qs&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "22. Can you solve the control room riddle? - Dennis Shasha",
                      type: "VIDEO",
                      order: 21,
                      url: "https://www.youtube.com/watch?v=3mbdiky5dLw&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "23. Can you solve the cheating royal riddle? - Dan Katz",
                      type: "VIDEO",
                      order: 22,
                      url: "https://www.youtube.com/watch?v=hk9c7sJ08Bg&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "24. Can you solve the Ragnarok riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 23,
                      url: "https://www.youtube.com/watch?v=VrqBX-Tck2A&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "25. Can you solve the multiplying rabbits riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 24,
                      url: "https://www.youtube.com/watch?v=XU5L4Sr93-g&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "26. Can you solve the jail break riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 25,
                      url: "https://www.youtube.com/watch?v=9uZ-jeZS8d0&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "27. Can you solve the seven planets riddle? - Edwin F. Meyer",
                      type: "VIDEO",
                      order: 26,
                      url: "https://www.youtube.com/watch?v=dh4nEuhZBgg&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "28. Can you solve the dark coin riddle? - Lisa Winer",
                      type: "VIDEO",
                      order: 27,
                      url: "https://www.youtube.com/watch?v=pnSw8g3DPHw&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "29. Can you solve the Leonardo da Vinci riddle? - Tanya Khovanova",
                      type: "VIDEO",
                      order: 28,
                      url: "https://www.youtube.com/watch?v=lRfdMiURV4s&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "30. Can you solve the false positive riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 29,
                      url: "https://www.youtube.com/watch?v=1csFTDXXULY&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "31. Can you solve the rogue AI riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 30,
                      url: "https://www.youtube.com/watch?v=qMFpOcLroOg&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "32. Can you solve the secret werewolf riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 31,
                      url: "https://www.youtube.com/watch?v=9gfPZoyMyTU&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "33. Can you solve the stolen rubies riddle? - Dennis Shasha",
                      type: "VIDEO",
                      order: 32,
                      url: "https://www.youtube.com/watch?v=2QJ2L2ip32w&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "34. Can you solve the monster duel riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 33,
                      url: "https://www.youtube.com/watch?v=rn1mjuVXNEI&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "35. Can you solve the cuddly duddly fuddly wuddly riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 34,
                      url: "https://www.youtube.com/watch?v=z-ZEfxAL9SI&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "36. Can you solve the time travel riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 35,
                      url: "https://www.youtube.com/watch?v=ukUPojrPFPA&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "37. Can you solve the giant cat army riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 36,
                      url: "https://www.youtube.com/watch?v=YeMVoJKn1Tg&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "38. Can you solve the secret sauce riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 37,
                      url: "https://www.youtube.com/watch?v=HyRjuPP9S3o&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "39. Can you solve the vampire hunter riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 38,
                      url: "https://www.youtube.com/watch?v=P4-n0IMQSrQ&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "40. Can you solve the giant spider riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 39,
                      url: "https://www.youtube.com/watch?v=0l5ftgEQUjM&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    }
                  ]
                },
                {
                  name: "Videos 41 to 83",
                  order: 1,
                  items: [
                    {
                      name: "41. Can you solve the troll’s paradox riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 0,
                      url: "https://www.youtube.com/watch?v=mS5eEhLN57s&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "42. Can you solve the buried treasure riddle? - Daniel Griller",
                      type: "VIDEO",
                      order: 1,
                      url: "https://www.youtube.com/watch?v=tCeklW2e6_E&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "43. Can you solve the sorting hat riddle? - Dan Katz and Alex Rosenthal",
                      type: "VIDEO",
                      order: 2,
                      url: "https://www.youtube.com/watch?v=auhrB0bSTEo&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "44. Can you solve the riddle and escape Hades? - Dan Finkel",
                      type: "VIDEO",
                      order: 3,
                      url: "https://www.youtube.com/watch?v=tbkiYideS-4&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "45. Can you solve the Trojan War riddle? - Dennis E. Shasha",
                      type: "VIDEO",
                      order: 4,
                      url: "https://www.youtube.com/watch?v=MJ5CRZFSlAU&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "46. Can you solve the rebel supplies riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 5,
                      url: "https://www.youtube.com/watch?v=3viZhIumUNo&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "47. Can you solve the sea monster riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 6,
                      url: "https://www.youtube.com/watch?v=YytHuow4VnU&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "48. Can you solve the killer robo-ants riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 7,
                      url: "https://www.youtube.com/watch?v=zoZVuqP1rQM&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "49. Can you solve the dragon jousting riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 8,
                      url: "https://www.youtube.com/watch?v=KSkw7hKN_Xg&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "50. Can you solve the world’s most evil wizard riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 9,
                      url: "https://www.youtube.com/watch?v=OmUjIHOPnOw&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "51. Can you solve the giant iron riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 10,
                      url: "https://www.youtube.com/watch?v=BSF9s0gbJ2M&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "52. Can you solve the alien probe riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 11,
                      url: "https://www.youtube.com/watch?v=SXXrQlJoNsw&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "53. Everything changed when the fire crystal got stolen - Alex Gendler",
                      type: "VIDEO",
                      order: 12,
                      url: "https://www.youtube.com/watch?v=OGHB8zUtfp4&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "54. Can you solve Dongle's Difficult Dilemma? - Dennis E. Shasha",
                      type: "VIDEO",
                      order: 13,
                      url: "https://www.youtube.com/watch?v=8xXslshomOs&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "55. Can you solve the Alice in Wonderland riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 14,
                      url: "https://www.youtube.com/watch?v=Gh3BRfXwmsE&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "56. Can you solve the birthday cake riddle? - Marie Brodsky",
                      type: "VIDEO",
                      order: 15,
                      url: "https://www.youtube.com/watch?v=F5sZQ4Xutgk&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "57. Can you solve the death race riddle? - Alex Gendler",
                      type: "VIDEO",
                      order: 16,
                      url: "https://www.youtube.com/watch?v=Lvr5JqLVe34&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "58. Can you solve the demon dance party riddle? - Edwin Meyer",
                      type: "VIDEO",
                      order: 17,
                      url: "https://www.youtube.com/watch?v=KT-d8MlT27A&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "59. Can you solve the fantasy election riddle? - Dennis E. Shasha",
                      type: "VIDEO",
                      order: 18,
                      url: "https://www.youtube.com/watch?v=-lLkBoYv5FU&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "60. Can you solve the multiverse rescue mission riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 19,
                      url: "https://www.youtube.com/watch?v=ZmaeljnPOu4&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "61. Can you outsmart Fate and break her ancient curse? - Dan Finkel",
                      type: "VIDEO",
                      order: 20,
                      url: "https://www.youtube.com/watch?v=UIeT1zxsus0&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "62. Can you solve the private eye riddle? - Henri Picciotto",
                      type: "VIDEO",
                      order: 21,
                      url: "https://www.youtube.com/watch?v=a6pqpINjdRQ&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "63. Can you solve the honeybee riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 22,
                      url: "https://www.youtube.com/watch?v=rLL-y2WLE14&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "64. Can you solve the rogue submarine riddle? - Alex Rosenthal",
                      type: "VIDEO",
                      order: 23,
                      url: "https://www.youtube.com/watch?v=iNgJCYPdmdQ&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "65. Can you solve the fortress riddle? - Henri Picciotto",
                      type: "VIDEO",
                      order: 24,
                      url: "https://www.youtube.com/watch?v=s5CLtBaRIwY&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "66. Game theory challenge: Can you predict human behavior? - Lucas Husted",
                      type: "VIDEO",
                      order: 25,
                      url: "https://www.youtube.com/watch?v=MknV3t5QbUc&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "67. Can you solve the secret assassin society riddle? - Alex Rosenthal",
                      type: "VIDEO",
                      order: 26,
                      url: "https://www.youtube.com/watch?v=XkHJyqZqjxE&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "68. This one weird trick will get you infinite gold - Dan Finkel",
                      type: "VIDEO",
                      order: 27,
                      url: "https://www.youtube.com/watch?v=qgvmJTmJIKs&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "69. Can you solve the dark matter fuel riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 28,
                      url: "https://www.youtube.com/watch?v=Fj2hTS5Kjyw&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "70. A riddle of ice and fire dragons - Henri Picciotto",
                      type: "VIDEO",
                      order: 29,
                      url: "https://www.youtube.com/watch?v=jMA7pWIFmIg&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "71. Can you solve the Big Bang riddle? - James Tanton",
                      type: "VIDEO",
                      order: 30,
                      url: "https://www.youtube.com/watch?v=SEDabz-hyKo&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "72. Can you solve the computer virus riddle? - James Tanton",
                      type: "VIDEO",
                      order: 31,
                      url: "https://www.youtube.com/watch?v=i0WH4SFpeB8&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "73. Can you steal the most powerful wand in the wizarding world? - Dan Finkel",
                      type: "VIDEO",
                      order: 32,
                      url: "https://www.youtube.com/watch?v=2-VTLiy0Lls&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "74. Can you solve the cursed dice riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 33,
                      url: "https://www.youtube.com/watch?v=urOkfsIRFlw&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "75. Can you solve the human cannonball riddle? - Alex Rosenthal",
                      type: "VIDEO",
                      order: 34,
                      url: "https://www.youtube.com/watch?v=o4MpBV4F3qs&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "76. Can you solve the alien pyramid riddle? - Henri Picciotto",
                      type: "VIDEO",
                      order: 35,
                      url: "https://www.youtube.com/watch?v=qsc3YZ2S924&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "77. Can you solve the time traveling car riddle? - Dan Finkel",
                      type: "VIDEO",
                      order: 36,
                      url: "https://www.youtube.com/watch?v=Ya9S6PyC1Sg&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "78. The dungeon master's riddle - Alex Rosenthal",
                      type: "VIDEO",
                      order: 37,
                      url: "https://www.youtube.com/watch?v=xMcOUyyk9Hk&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "79. Can you solve the magical maze riddle? - Alex Rosenthal",
                      type: "VIDEO",
                      order: 38,
                      url: "https://www.youtube.com/watch?v=O7O-3NeXm9g&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "80. Can you solve the trickster god riddle? - Alex Rosenthal",
                      type: "VIDEO",
                      order: 39,
                      url: "https://www.youtube.com/watch?v=hYo64qPEGw8&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "81. Can you solve the basketball riddle? - Dan Katz",
                      type: "VIDEO",
                      order: 40,
                      url: "https://www.youtube.com/watch?v=aa2Fmr7sKIA&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "82. Sherlock Holmes and the crime of the century - Alex Rosenthal",
                      type: "VIDEO",
                      order: 41,
                      url: "https://www.youtube.com/watch?v=5pBGutEhZes&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    },
                    {
                      name: "83. Can you solve the riddle of Pandora’s box? - Alex Rosenthal",
                      type: "VIDEO",
                      order: 42,
                      url: "https://www.youtube.com/watch?v=asbbhyHBSKU&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
                    }
                  ]
                }
              ],
              description: "Complete list of parsed videos with explicit titles."
            }
          ],
          description: "Collection of 83 interactive logic riddles and logic puzzles by TED-Ed.",
          url: "https://www.youtube.com/watch?v=N5vJSNXPEwA&list=PLJicmE8fK0EiFRt1Hm5a_7SJFaikIFW30"
        },
        {
          name: "QuantGuide Problems",
          type: "BOOK",
          order: 3,
          isMustDo: false,
          units: [
            {
              name: "Easy Questions (578 Problems)",
              order: 0,
              subUnits: [
                {
                  name: "Easy Chunks List",
                  order: 0,
                  items: [
                    {
                      name: "Easy Problems 1 to 20 (20 Questions)",
                      type: "PUZZLE",
                      order: 0,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 21 to 40 (20 Questions)",
                      type: "PUZZLE",
                      order: 1,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 41 to 60 (20 Questions)",
                      type: "PUZZLE",
                      order: 2,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 61 to 80 (20 Questions)",
                      type: "PUZZLE",
                      order: 3,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 81 to 100 (20 Questions)",
                      type: "PUZZLE",
                      order: 4,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 101 to 120 (20 Questions)",
                      type: "PUZZLE",
                      order: 5,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 121 to 140 (20 Questions)",
                      type: "PUZZLE",
                      order: 6,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 141 to 160 (20 Questions)",
                      type: "PUZZLE",
                      order: 7,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 161 to 180 (20 Questions)",
                      type: "PUZZLE",
                      order: 8,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 181 to 200 (20 Questions)",
                      type: "PUZZLE",
                      order: 9,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 201 to 220 (20 Questions)",
                      type: "PUZZLE",
                      order: 10,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 221 to 240 (20 Questions)",
                      type: "PUZZLE",
                      order: 11,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 241 to 260 (20 Questions)",
                      type: "PUZZLE",
                      order: 12,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 261 to 280 (20 Questions)",
                      type: "PUZZLE",
                      order: 13,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 281 to 300 (20 Questions)",
                      type: "PUZZLE",
                      order: 14,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 301 to 320 (20 Questions)",
                      type: "PUZZLE",
                      order: 15,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 321 to 340 (20 Questions)",
                      type: "PUZZLE",
                      order: 16,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 341 to 360 (20 Questions)",
                      type: "PUZZLE",
                      order: 17,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 361 to 380 (20 Questions)",
                      type: "PUZZLE",
                      order: 18,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 381 to 400 (20 Questions)",
                      type: "PUZZLE",
                      order: 19,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 401 to 420 (20 Questions)",
                      type: "PUZZLE",
                      order: 20,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 421 to 440 (20 Questions)",
                      type: "PUZZLE",
                      order: 21,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 441 to 460 (20 Questions)",
                      type: "PUZZLE",
                      order: 22,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 461 to 480 (20 Questions)",
                      type: "PUZZLE",
                      order: 23,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 481 to 500 (20 Questions)",
                      type: "PUZZLE",
                      order: 24,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 501 to 520 (20 Questions)",
                      type: "PUZZLE",
                      order: 25,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 521 to 540 (20 Questions)",
                      type: "PUZZLE",
                      order: 26,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 541 to 560 (20 Questions)",
                      type: "PUZZLE",
                      order: 27,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    },
                    {
                      name: "Easy Problems 561 to 578 (18 Questions)",
                      type: "PUZZLE",
                      order: 28,
                      description: "Range of 20 standard easy probability, brainteaser, combinatorics, and quick math interview prep questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "EASY"
                    }
                  ]
                }
              ],
              description: "High-level chunked units for easy practice questions."
            },
            {
              name: "Medium Questions (479 Problems)",
              order: 1,
              subUnits: [
                {
                  name: "Medium Chunks List",
                  order: 0,
                  items: [
                    {
                      name: "Medium Problems 1 to 10 (10 Questions)",
                      type: "PUZZLE",
                      order: 0,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 11 to 20 (10 Questions)",
                      type: "PUZZLE",
                      order: 1,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 21 to 30 (10 Questions)",
                      type: "PUZZLE",
                      order: 2,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 31 to 40 (10 Questions)",
                      type: "PUZZLE",
                      order: 3,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 41 to 50 (10 Questions)",
                      type: "PUZZLE",
                      order: 4,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 51 to 60 (10 Questions)",
                      type: "PUZZLE",
                      order: 5,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 61 to 70 (10 Questions)",
                      type: "PUZZLE",
                      order: 6,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 71 to 80 (10 Questions)",
                      type: "PUZZLE",
                      order: 7,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 81 to 90 (10 Questions)",
                      type: "PUZZLE",
                      order: 8,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 91 to 100 (10 Questions)",
                      type: "PUZZLE",
                      order: 9,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 101 to 110 (10 Questions)",
                      type: "PUZZLE",
                      order: 10,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 111 to 120 (10 Questions)",
                      type: "PUZZLE",
                      order: 11,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 121 to 130 (10 Questions)",
                      type: "PUZZLE",
                      order: 12,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 131 to 140 (10 Questions)",
                      type: "PUZZLE",
                      order: 13,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 141 to 150 (10 Questions)",
                      type: "PUZZLE",
                      order: 14,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 151 to 160 (10 Questions)",
                      type: "PUZZLE",
                      order: 15,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 161 to 170 (10 Questions)",
                      type: "PUZZLE",
                      order: 16,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 171 to 180 (10 Questions)",
                      type: "PUZZLE",
                      order: 17,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 181 to 190 (10 Questions)",
                      type: "PUZZLE",
                      order: 18,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 191 to 200 (10 Questions)",
                      type: "PUZZLE",
                      order: 19,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 201 to 210 (10 Questions)",
                      type: "PUZZLE",
                      order: 20,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 211 to 220 (10 Questions)",
                      type: "PUZZLE",
                      order: 21,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 221 to 230 (10 Questions)",
                      type: "PUZZLE",
                      order: 22,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 231 to 240 (10 Questions)",
                      type: "PUZZLE",
                      order: 23,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 241 to 250 (10 Questions)",
                      type: "PUZZLE",
                      order: 24,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 251 to 260 (10 Questions)",
                      type: "PUZZLE",
                      order: 25,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 261 to 270 (10 Questions)",
                      type: "PUZZLE",
                      order: 26,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 271 to 280 (10 Questions)",
                      type: "PUZZLE",
                      order: 27,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 281 to 290 (10 Questions)",
                      type: "PUZZLE",
                      order: 28,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 291 to 300 (10 Questions)",
                      type: "PUZZLE",
                      order: 29,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 301 to 310 (10 Questions)",
                      type: "PUZZLE",
                      order: 30,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 311 to 320 (10 Questions)",
                      type: "PUZZLE",
                      order: 31,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 321 to 330 (10 Questions)",
                      type: "PUZZLE",
                      order: 32,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 331 to 340 (10 Questions)",
                      type: "PUZZLE",
                      order: 33,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 341 to 350 (10 Questions)",
                      type: "PUZZLE",
                      order: 34,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 351 to 360 (10 Questions)",
                      type: "PUZZLE",
                      order: 35,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 361 to 370 (10 Questions)",
                      type: "PUZZLE",
                      order: 36,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 371 to 380 (10 Questions)",
                      type: "PUZZLE",
                      order: 37,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 381 to 390 (10 Questions)",
                      type: "PUZZLE",
                      order: 38,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 391 to 400 (10 Questions)",
                      type: "PUZZLE",
                      order: 39,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 401 to 410 (10 Questions)",
                      type: "PUZZLE",
                      order: 40,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 411 to 420 (10 Questions)",
                      type: "PUZZLE",
                      order: 41,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 421 to 430 (10 Questions)",
                      type: "PUZZLE",
                      order: 42,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 431 to 440 (10 Questions)",
                      type: "PUZZLE",
                      order: 43,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 441 to 450 (10 Questions)",
                      type: "PUZZLE",
                      order: 44,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 451 to 460 (10 Questions)",
                      type: "PUZZLE",
                      order: 45,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 461 to 470 (10 Questions)",
                      type: "PUZZLE",
                      order: 46,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    },
                    {
                      name: "Medium Problems 471 to 479 (9 Questions)",
                      type: "PUZZLE",
                      order: 47,
                      description: "Range of 10 standard medium expectation, conditional probability, game theory, and puzzle practice questions.",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "MEDIUM"
                    }
                  ]
                }
              ],
              description: "High-level chunked units for medium practice questions."
            },
            {
              name: "Hard Questions (153 Problems - Individual Tracking)",
              order: 2,
              subUnits: [
                {
                  name: "Hard Problems Part 1 (1-30)",
                  order: 0,
                  items: [
                    {
                      name: "Q1: Place or Take",
                      type: "PUZZLE",
                      order: 0,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q2: Collecting Toys II",
                      type: "PUZZLE",
                      order: 1,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q5: Free Sundae",
                      type: "PUZZLE",
                      order: 2,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q10: Heaven 37",
                      type: "PUZZLE",
                      order: 3,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q21: Beer Bottles",
                      type: "PUZZLE",
                      order: 4,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q22: Consecutive Children",
                      type: "PUZZLE",
                      order: 5,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q24: Determination II",
                      type: "PUZZLE",
                      order: 6,
                      description: "Topic: statistics",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q26: Shattering Orbs",
                      type: "PUZZLE",
                      order: 7,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q28: Consecutive Pairs",
                      type: "PUZZLE",
                      order: 8,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q30: Thick Coin",
                      type: "PUZZLE",
                      order: 9,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q34: Silly SDE",
                      type: "PUZZLE",
                      order: 10,
                      description: "Topic: pure math",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q50: Common Ball Draw",
                      type: "PUZZLE",
                      order: 11,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q55: Positive Brownian II",
                      type: "PUZZLE",
                      order: 12,
                      description: "Topic: pure math",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q68: Non-Zero Eigenvalue",
                      type: "PUZZLE",
                      order: 13,
                      description: "Topic: pure math",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q70: Prime First",
                      type: "PUZZLE",
                      order: 14,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q90: Voter Mayhem I",
                      type: "PUZZLE",
                      order: 15,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q116: Prime Subset",
                      type: "PUZZLE",
                      order: 16,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q128: Bowl of Cherries V",
                      type: "PUZZLE",
                      order: 17,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q134: Car Question",
                      type: "PUZZLE",
                      order: 18,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q139: Spacious Uniform Values II",
                      type: "PUZZLE",
                      order: 19,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q143: Stack Double",
                      type: "PUZZLE",
                      order: 20,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q148: Dice Profits",
                      type: "PUZZLE",
                      order: 21,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q150: Non-Consecutive Sequence",
                      type: "PUZZLE",
                      order: 22,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q156: Close Dice II",
                      type: "PUZZLE",
                      order: 23,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q171: Dice Order III",
                      type: "PUZZLE",
                      order: 24,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q175: Specific Partition",
                      type: "PUZZLE",
                      order: 25,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q176: Triangle of Primes",
                      type: "PUZZLE",
                      order: 26,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q180: Perfect Square",
                      type: "PUZZLE",
                      order: 27,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q187: Spacious Uniform Values I",
                      type: "PUZZLE",
                      order: 28,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q191: Game Arbitrage I",
                      type: "PUZZLE",
                      order: 29,
                      description: "Topic: finance",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    }
                  ]
                },
                {
                  name: "Hard Problems Part 2 (31-60)",
                  order: 1,
                  items: [
                    {
                      name: "Q196: Half Cycle",
                      type: "PUZZLE",
                      order: 0,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q209: Coloring Components III",
                      type: "PUZZLE",
                      order: 1,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q214: Counting Nash Equillibria",
                      type: "PUZZLE",
                      order: 2,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q218: Prime Janitors",
                      type: "PUZZLE",
                      order: 3,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q232: Card Shuffling",
                      type: "PUZZLE",
                      order: 4,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q250: Wandering Ant II",
                      type: "PUZZLE",
                      order: 5,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q252: Dominated Turtle",
                      type: "PUZZLE",
                      order: 6,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q257: Geometrical Progression",
                      type: "PUZZLE",
                      order: 7,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q261: Sum Exceedance II",
                      type: "PUZZLE",
                      order: 8,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q267: Balanced Beans IV",
                      type: "PUZZLE",
                      order: 9,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q269: Terminating Sum",
                      type: "PUZZLE",
                      order: 10,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q290: Segment Traversal",
                      type: "PUZZLE",
                      order: 11,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q299: Egg Drop II",
                      type: "PUZZLE",
                      order: 12,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q301: Put Option Price Estimate",
                      type: "PUZZLE",
                      order: 13,
                      description: "Topic: finance",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q309: Colosseum Fight I",
                      type: "PUZZLE",
                      order: 14,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q314: Coin Flipping Competition III",
                      type: "PUZZLE",
                      order: 15,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q316: Standing Table",
                      type: "PUZZLE",
                      order: 16,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q329: Short Wood",
                      type: "PUZZLE",
                      order: 17,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q338: Balanced Beans II",
                      type: "PUZZLE",
                      order: 18,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q343: Arbitrage Detective IV",
                      type: "PUZZLE",
                      order: 19,
                      description: "Topic: finance",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q350: Voter Mayhem II",
                      type: "PUZZLE",
                      order: 20,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q353: Delayed Ruin",
                      type: "PUZZLE",
                      order: 21,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q357: Central Containment",
                      type: "PUZZLE",
                      order: 22,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q377: Expected Chord Length",
                      type: "PUZZLE",
                      order: 23,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q388: Random Particles",
                      type: "PUZZLE",
                      order: 24,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q389: Shuffled Deck",
                      type: "PUZZLE",
                      order: 25,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q411: Circular Cut",
                      type: "PUZZLE",
                      order: 26,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q412: Trading Cards",
                      type: "PUZZLE",
                      order: 27,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q414: Increasing Uniform Chain I",
                      type: "PUZZLE",
                      order: 28,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q440: The Picking Hat",
                      type: "PUZZLE",
                      order: 29,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    }
                  ]
                },
                {
                  name: "Hard Problems Part 3 (61-90)",
                  order: 2,
                  items: [
                    {
                      name: "Q441: Proper Tables",
                      type: "PUZZLE",
                      order: 0,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q454: Soccer Practice",
                      type: "PUZZLE",
                      order: 1,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q456: Sum Exceedance III",
                      type: "PUZZLE",
                      order: 2,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q478: Random Triangle",
                      type: "PUZZLE",
                      order: 3,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q491: Needy Friends",
                      type: "PUZZLE",
                      order: 4,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q508: Turducken Hunt",
                      type: "PUZZLE",
                      order: 5,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q517: Unknown Starter",
                      type: "PUZZLE",
                      order: 6,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q523: Likely Targets I",
                      type: "PUZZLE",
                      order: 7,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q526: Carded Pair",
                      type: "PUZZLE",
                      order: 8,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q534: Spherical Coodinates",
                      type: "PUZZLE",
                      order: 9,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q552: Good Grid II",
                      type: "PUZZLE",
                      order: 10,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q596: Safe Cracking",
                      type: "PUZZLE",
                      order: 11,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q608: Find the Triangle",
                      type: "PUZZLE",
                      order: 12,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q613: Ranged Stars and Bars",
                      type: "PUZZLE",
                      order: 13,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q614: Car Crash",
                      type: "PUZZLE",
                      order: 14,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q626: Numerical Triangle",
                      type: "PUZZLE",
                      order: 15,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q633: Marble Runs",
                      type: "PUZZLE",
                      order: 16,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q636: Arbitrage Detective IV",
                      type: "PUZZLE",
                      order: 17,
                      description: "Topic: finance",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q644: Fixed Point Variance",
                      type: "PUZZLE",
                      order: 18,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q647: 2D Paths IV",
                      type: "PUZZLE",
                      order: 19,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q669: Leftwards Frog",
                      type: "PUZZLE",
                      order: 20,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q671: Sphere Slicer",
                      type: "PUZZLE",
                      order: 21,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q679: Egg Drop II",
                      type: "PUZZLE",
                      order: 22,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q711: 5 Pairwise Sum",
                      type: "PUZZLE",
                      order: 23,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q712: Finite Coin Equalizer",
                      type: "PUZZLE",
                      order: 24,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q716: Parking Rush",
                      type: "PUZZLE",
                      order: 25,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q730: 20-30 Die Split III",
                      type: "PUZZLE",
                      order: 26,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q739: Intersecting Intervals",
                      type: "PUZZLE",
                      order: 27,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q744: Colosseum Fight II",
                      type: "PUZZLE",
                      order: 28,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q752: Head-Tail Equality",
                      type: "PUZZLE",
                      order: 29,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    }
                  ]
                },
                {
                  name: "Hard Problems Part 4 (91-120)",
                  order: 3,
                  items: [
                    {
                      name: "Q772: Sum Exceedance I",
                      type: "PUZZLE",
                      order: 0,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q773: Limited Urns",
                      type: "PUZZLE",
                      order: 1,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q778: Sequence Terminator",
                      type: "PUZZLE",
                      order: 2,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q784: Significant Others",
                      type: "PUZZLE",
                      order: 3,
                      description: "Topic: statistics",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q792: Doubly 5 I",
                      type: "PUZZLE",
                      order: 4,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q807: Infected Dinner II",
                      type: "PUZZLE",
                      order: 5,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q812: Minimal Shade",
                      type: "PUZZLE",
                      order: 6,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q815: Cyclic 4",
                      type: "PUZZLE",
                      order: 7,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q824: Likely Targets III",
                      type: "PUZZLE",
                      order: 8,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q826: Minimax Box",
                      type: "PUZZLE",
                      order: 9,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q828: Maximize Head Ratio II",
                      type: "PUZZLE",
                      order: 10,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q831: Random Minimal Sum",
                      type: "PUZZLE",
                      order: 11,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q840: Non-Disjoint Subsets",
                      type: "PUZZLE",
                      order: 12,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q842: First Flip",
                      type: "PUZZLE",
                      order: 13,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q843: Josephus’ Dilemma",
                      type: "PUZZLE",
                      order: 14,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q846: Clockwise Murder",
                      type: "PUZZLE",
                      order: 15,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q857: 29 Divide",
                      type: "PUZZLE",
                      order: 16,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q860: Longest Rope I",
                      type: "PUZZLE",
                      order: 17,
                      description: "Topic: statistics",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q867: Clarence’s Bread",
                      type: "PUZZLE",
                      order: 18,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q873: Real Solutions",
                      type: "PUZZLE",
                      order: 19,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q904: Exponential Ball Draw",
                      type: "PUZZLE",
                      order: 20,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q915: Game Time",
                      type: "PUZZLE",
                      order: 21,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q951: Square Ratio",
                      type: "PUZZLE",
                      order: 22,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q953: Optimal Marbles II",
                      type: "PUZZLE",
                      order: 23,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q958: Poisoned Kegs IV",
                      type: "PUZZLE",
                      order: 24,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q968: RNG on RNG",
                      type: "PUZZLE",
                      order: 25,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q972: Game Arbitrage II",
                      type: "PUZZLE",
                      order: 26,
                      description: "Topic: finance",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q973: Card Diff",
                      type: "PUZZLE",
                      order: 27,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q975: Vasicek Equation",
                      type: "PUZZLE",
                      order: 28,
                      description: "Topic: pure math",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q977: Party Groups I",
                      type: "PUZZLE",
                      order: 29,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    }
                  ]
                },
                {
                  name: "Hard Problems Part 5 (121-150)",
                  order: 4,
                  items: [
                    {
                      name: "Q993: Continuous Blackjack",
                      type: "PUZZLE",
                      order: 0,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q994: Decreasing Uniform Chain",
                      type: "PUZZLE",
                      order: 1,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1001: Empty Urn",
                      type: "PUZZLE",
                      order: 2,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1018: Die Roll LCM",
                      type: "PUZZLE",
                      order: 3,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1020: Expected Returns",
                      type: "PUZZLE",
                      order: 4,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1027: Cats and Mice",
                      type: "PUZZLE",
                      order: 5,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1029: Likely Targets II",
                      type: "PUZZLE",
                      order: 6,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1031: Competitive Sampling",
                      type: "PUZZLE",
                      order: 7,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1045: The Sum Is Right",
                      type: "PUZZLE",
                      order: 8,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1052: Sum Exceedance IV",
                      type: "PUZZLE",
                      order: 9,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1055: Take And Roll II",
                      type: "PUZZLE",
                      order: 10,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1061: Forming a Triangle",
                      type: "PUZZLE",
                      order: 11,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1077: Spaced Darts",
                      type: "PUZZLE",
                      order: 12,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1082: Three-Way Tile",
                      type: "PUZZLE",
                      order: 13,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1084: Ramen Bowl",
                      type: "PUZZLE",
                      order: 14,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1092: Circular Slice I",
                      type: "PUZZLE",
                      order: 15,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1109: Remainders",
                      type: "PUZZLE",
                      order: 16,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1116: Optimizing Aces",
                      type: "PUZZLE",
                      order: 17,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1121: Optimal Marbles I",
                      type: "PUZZLE",
                      order: 18,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1126: Brownian Supremum",
                      type: "PUZZLE",
                      order: 19,
                      description: "Topic: pure math",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1129: Sharpe Maximization",
                      type: "PUZZLE",
                      order: 20,
                      description: "Topic: finance",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1158: Water Measurement",
                      type: "PUZZLE",
                      order: 21,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1163: Delta Decay",
                      type: "PUZZLE",
                      order: 22,
                      description: "Topic: finance",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1166: Numerous Uniforms",
                      type: "PUZZLE",
                      order: 23,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1174: Conditional First Ace",
                      type: "PUZZLE",
                      order: 24,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1176: Identical Alpha",
                      type: "PUZZLE",
                      order: 25,
                      description: "Topic: statistics",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1179: Delta Decay II",
                      type: "PUZZLE",
                      order: 26,
                      description: "Topic: finance",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1187: Coin Flipping Competition II",
                      type: "PUZZLE",
                      order: 27,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1191: Shopping Habits",
                      type: "PUZZLE",
                      order: 28,
                      description: "Topic: statistics",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1194: Random Subsets",
                      type: "PUZZLE",
                      order: 29,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    }
                  ]
                },
                {
                  name: "Hard Problems Part 6 (151-152)",
                  order: 5,
                  items: [
                    {
                      name: "Q1201: Square Shade",
                      type: "PUZZLE",
                      order: 0,
                      description: "Topic: brainteasers",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    },
                    {
                      name: "Q1203: 1 Glove Off",
                      type: "PUZZLE",
                      order: 1,
                      description: "Topic: probability",
                      url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf",
                      difficulty: "HARD"
                    }
                  ]
                }
              ],
              description: "Must try the hard questions. Highly trackable standalone list of all 153 difficult expectation, stochastic modeling, and game theory questions."
            }
          ],
          description: "Exhaustive book containing all questions and detailed solutions from the QuantGuide platform.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/QUANT%20GUIDE.pdf"
        },
        {
          name: "Supplemental Quant Practice Sites",
          type: "WEBSITE",
          order: 4,
          isMustDo: false,
          units: [
            {
              name: "PuzzledQuant & QuantQuestions Practice",
              order: 0,
              subUnits: [
                {
                  name: "Selected Interactive Questions",
                  order: 0,
                  items: [
                    {
                      name: "PuzzledQuant Interactive Puzzles Platform",
                      type: "READING",
                      order: 0,
                      url: "https://www.puzzledquant.com"
                    },
                    {
                      name: "QuantQuestions Practical Interview Bank",
                      type: "READING",
                      order: 1,
                      url: "https://quantquestions.io"
                    },
                    {
                      name: "Random Walk on Infinite Grids",
                      type: "PUZZLE",
                      order: 2,
                      url: "https://www.puzzledquant.com/puzzles/random-walk"
                    },
                    {
                      name: "Option pricing without Black-Scholes (Single-period Binomial)",
                      type: "PUZZLE",
                      order: 3,
                      url: "https://www.puzzledquant.com/puzzles/single-period-binomial"
                    },
                    {
                      name: "Dice betting optimal stop strategy",
                      type: "PUZZLE",
                      order: 4,
                      url: "https://quantquestions.io/questions/dice-betting-stop"
                    },
                    {
                      name: "Sequential coin toss game with bidding",
                      type: "PUZZLE",
                      order: 5,
                      url: "https://quantquestions.io/questions/sequential-coin-toss"
                    }
                  ]
                }
              ]
            }
          ],
          description: "supplemental websites to practice options pricing, random walk grids, math expectation, and general trade interview questions.",
          url: "https://www.puzzledquant.com"
        },
        {
          name: "Jane Street Monthly Puzzles Archive",
          type: "WEBSITE",
          order: 5,
          isMustDo: false,
          units: [
            {
              name: "Famous Selected Monthly Puzzles",
              order: 0,
              subUnits: [
                {
                  name: "Puzzles List",
                  order: 0,
                  items: [
                    {
                      name: "Square the Circle (Grid geometry puzzle)",
                      type: "PUZZLE",
                      order: 0,
                      url: "https://www.janestreet.com/puzzles/square-the-circle/"
                    },
                    {
                      name: "Alter Alternating (Sequential series puzzle)",
                      type: "PUZZLE",
                      order: 1,
                      url: "https://www.janestreet.com/puzzles/alter-alternating/"
                    },
                    {
                      name: "Unprimeable Numbers (Number theory challenge)",
                      type: "PUZZLE",
                      order: 2,
                      url: "https://www.janestreet.com/puzzles/unprimeable-numbers/"
                    },
                    {
                      name: "Robot Swimming (Symmetry and pathing logic)",
                      type: "PUZZLE",
                      order: 3,
                      url: "https://www.janestreet.com/puzzles/robot-swimming/"
                    },
                    {
                      name: "Single-Cross Game (Two-player game theory)",
                      type: "PUZZLE",
                      order: 4,
                      url: "https://www.janestreet.com/puzzles/single-cross/"
                    },
                    {
                      name: "Altered States (Geography & grid pathways)",
                      type: "PUZZLE",
                      order: 5,
                      url: "https://www.janestreet.com/puzzles/altered-states/"
                    },
                    {
                      name: "Number Rules (Custom card game puzzle)",
                      type: "PUZZLE",
                      order: 6,
                      url: "https://www.janestreet.com/puzzles/number-rules/"
                    },
                    {
                      name: "Pairing Up (Stochastic matching problem)",
                      type: "PUZZLE",
                      order: 7,
                      url: "https://www.janestreet.com/puzzles/pairing-up/"
                    }
                  ]
                }
              ]
            }
          ],
          description: "Highly analytical, monthly logic puzzles published by Jane Street.",
          url: "https://www.janestreet.com/puzzles/archive/"
        }
      ],
      description: "Interview prep puzzles, TED-Ed riddles, Jane Street monthly collections, and complete QuantGuide question bank.",
      icon: "🧩"
    },
    {
      name: "Trading & Financial Terminology",
      order: 2,
      resources: [
        {
          name: "Trading-Terminology (DaVinci)",
          type: "DOC",
          order: 0,
          isMustDo: false,
          units: [
            {
              name: "Market Concepts & Terms",
              order: 0,
              subUnits: [
                {
                  name: "Glossary Terms",
                  order: 0,
                  items: [
                    {
                      name: "BID - Price to buy",
                      type: "CONCEPT",
                      order: 0,
                      description: "The price that a trader is willing to buy a contract or stock for."
                    },
                    {
                      name: "OFFER - Price to sell",
                      type: "CONCEPT",
                      order: 1,
                      description: "The price that a seller is willing to sell a contract or stock for."
                    },
                    {
                      name: "SPREAD - BID/ASK difference",
                      type: "CONCEPT",
                      order: 2,
                      description: "The difference between the Offer (ask) and the Bid."
                    },
                    {
                      name: "LONG position",
                      type: "CONCEPT",
                      order: 3,
                      description: "Holding an asset or security with the expectation that the price will go up."
                    },
                    {
                      name: "SHORT position",
                      type: "CONCEPT",
                      order: 4,
                      description: "Borrowing and selling an asset with the expectation that the price will go down."
                    },
                    {
                      name: "SETTLEMENT price",
                      type: "CONCEPT",
                      order: 5,
                      description: "The official closing price used to calculate daily profits or losses."
                    },
                    {
                      name: "CALL option",
                      type: "CONCEPT",
                      order: 6,
                      description: "A contract giving the holder the right to buy at a specified price."
                    },
                    {
                      name: "PUT option",
                      type: "CONCEPT",
                      order: 7,
                      description: "A contract giving the holder the right to sell at a specified price."
                    },
                    {
                      name: "HEDGE risk control",
                      type: "CONCEPT",
                      order: 8,
                      description: "Making an offsetting investment to reduce the risk of adverse price movements."
                    },
                    {
                      name: "STRIKE price",
                      type: "CONCEPT",
                      order: 9,
                      description: "The price at which the option can be exercised."
                    },
                    {
                      name: "IN THE MONEY (ITM)",
                      type: "CONCEPT",
                      order: 10,
                      description: "An option that has positive intrinsic value (e.g., call option strike < spot)."
                    },
                    {
                      name: "OUT OF THE MONEY (OTM)",
                      type: "CONCEPT",
                      order: 11,
                      description: "An option that has no intrinsic value, only time value."
                    }
                  ]
                }
              ]
            },
            {
              name: "Amsterdam Bike Market Game",
              order: 1,
              subUnits: [
                {
                  name: "Rules and Tactics",
                  order: 0,
                  items: [
                    {
                      name: "Market Making in classroom setup",
                      type: "PUZZLE",
                      order: 0,
                      description: "Quoting continuous bid-ask spreads for the number of bikes in Amsterdam."
                    },
                    { name: "Spread adjustment based on trade signals", type: "CONCEPT", order: 1 },
                    {
                      name: "Inventory management and adverse selection",
                      type: "CONCEPT",
                      order: 2
                    }
                  ]
                }
              ]
            }
          ],
          description: "Basic terminology definitions shared by DaVinci to prepare for trading interviews.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Trading-Terminology_DaVinci_v1.pdf"
        },
        {
          name: "Group Discussion Document India",
          type: "DOC",
          order: 1,
          isMustDo: false,
          units: [
            {
              name: "Section 1: Market Making Theory & Practice",
              order: 0,
              subUnits: [
                {
                  name: "Exercises 7 to 11",
                  order: 0,
                  items: [
                    {
                      name: "Exercise 7: Basics of Market Making (Understanding Bid-Ask bounds)",
                      type: "EXERCISE",
                      order: 0
                    },
                    {
                      name: "Exercise 8: Spread adjustment under public signals",
                      type: "EXERCISE",
                      order: 1
                    },
                    {
                      name: "Exercise 9: Handling inventory limits and inventory penalty",
                      type: "EXERCISE",
                      order: 2
                    },
                    {
                      name: "Exercise 10: Quoting inside another trader's spread (Order book competition)",
                      type: "EXERCISE",
                      order: 3
                    },
                    {
                      name: "Exercise 11: Perfect information market quoting game",
                      type: "EXERCISE",
                      order: 4
                    }
                  ]
                }
              ],
              description: "Quoting prices, spreads, and handling trades."
            },
            {
              name: "Section 2: Fermi Market Making & Estimation",
              order: 1,
              subUnits: [
                {
                  name: "Exercises 12 to 14",
                  order: 0,
                  items: [
                    {
                      name: "Exercise 12: Estimate number of piano tuners in a major city (Fermi bounds)",
                      type: "EXERCISE",
                      order: 0
                    },
                    {
                      name: "Exercise 13: Estimate airport passenger departures over 24 hours",
                      type: "EXERCISE",
                      order: 1
                    },
                    {
                      name: "Exercise 14: Estimate expected number of heads in random coin toss bounds",
                      type: "EXERCISE",
                      order: 2
                    }
                  ]
                }
              ],
              description: "Estimating unknown quantities under strict bounds."
            },
            {
              name: "Section 3: Options Theory & Arbitrage",
              order: 2,
              subUnits: [
                {
                  name: "Exercises 15 to 18",
                  order: 0,
                  items: [
                    {
                      name: "Exercise 15: Option payoff diagrams under long/short calls & puts",
                      type: "EXERCISE",
                      order: 0
                    },
                    {
                      name: "Exercise 16: Arbitrage checking using Put-Call parity",
                      type: "EXERCISE",
                      order: 1
                    },
                    {
                      name: "Exercise 17: Binomial trees options pricing logic",
                      type: "EXERCISE",
                      order: 2
                    },
                    {
                      name: "Exercise 18: Delta Hedging options portfolio strategy",
                      type: "EXERCISE",
                      order: 3
                    }
                  ]
                }
              ],
              description: "Derivatives, option payoffs, and arbitrage conditions."
            }
          ],
          description: "Exercises and theory regarding Market Making, Fermi Questions, and Options Pricing for GD preparation.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/GroupDiscussionDocumentIndia.pdf"
        }
      ],
      description: "Familiarize yourself with market structures, bid-ask dynamics, options payoffs, and collaborative discussion games.",
      icon: "💹"
    },
    {
      name: "AI-ML, Deep Learning & Game Theory",
      order: 3,
      resources: [
        {
          name: "CS217/240 Lecture Scribes (Artificial Intelligence & Machine Learning)",
          type: "WEBSITE",
          order: 0,
          isMustDo: false,
          units: [
            {
              name: "Part 1: Optimization & Regression",
              order: 0,
              subUnits: [
                {
                  name: "Lectures 1 to 6",
                  order: 0,
                  items: [
                    {
                      name: "Lecture 1: Intro to Optimization (Linear Programming Simplex Review)",
                      type: "VIDEO",
                      order: 0
                    },
                    {
                      name: "Lecture 2: Convex Optimization basics (Convex sets, Functions)",
                      type: "VIDEO",
                      order: 1
                    },
                    {
                      name: "Lecture 3: Linear Regression Formulation (MSE, Closed form)",
                      type: "VIDEO",
                      order: 2
                    },
                    {
                      name: "Lecture 4: Numerical regression methods (MLE, Gradient Descent)",
                      type: "VIDEO",
                      order: 3
                    },
                    {
                      name: "Lecture 5: MAP Estimator & Conjugate Priors (Bayesian treatment)",
                      type: "VIDEO",
                      order: 4
                    },
                    {
                      name: "Lecture 6: Bias-Variance Tradeoff & Regularization (L1/L2 norm)",
                      type: "VIDEO",
                      order: 5
                    }
                  ]
                }
              ]
            },
            {
              name: "Part 2: Classification & Deep Learning",
              order: 1,
              subUnits: [
                {
                  name: "Lectures 7 to 14",
                  order: 0,
                  items: [
                    {
                      name: "Lecture 7: Naive Bayes & Logistic Regression introduction",
                      type: "VIDEO",
                      order: 0
                    },
                    {
                      name: "Lecture 8: Multiclass Softmax classification, Generative vs Discriminative",
                      type: "VIDEO",
                      order: 1
                    },
                    {
                      name: "Lecture 9: Perceptron Algorithm convergence & margin limits",
                      type: "VIDEO",
                      order: 2
                    },
                    {
                      name: "Lecture 10: Decision Trees (Information Gain, Entropy, Overfitting)",
                      type: "VIDEO",
                      order: 3
                    },
                    {
                      name: "Lecture 11: Artificial Neural Networks activation functions & Chain rule",
                      type: "VIDEO",
                      order: 4
                    },
                    {
                      name: "Lecture 12: Backpropagation, Early stopping, and Dropout Regularization",
                      type: "VIDEO",
                      order: 5
                    },
                    {
                      name: "Lecture 13: Recurrent Neural Networks (Vanishing Gradient, BPTT)",
                      type: "VIDEO",
                      order: 6
                    },
                    {
                      name: "Lecture 14: Convolutional Neural Networks (Convolutions, Pooling, Padding)",
                      type: "VIDEO",
                      order: 7
                    }
                  ]
                }
              ]
            },
            {
              name: "Part 3: SVM, Unsupervised Learning & Multi-Agent AI",
              order: 2,
              subUnits: [
                {
                  name: "Lectures 15 to 24",
                  order: 0,
                  items: [
                    {
                      name: "Lecture 15: Support Vector Machines (Hard & Soft Margins, Dual Form)",
                      type: "VIDEO",
                      order: 0
                    },
                    {
                      name: "Lecture 16: Kernel SVM & K-Means Clustering (Local optima limits)",
                      type: "VIDEO",
                      order: 1
                    },
                    {
                      name: "Lecture 17: Dimensionality Reduction (SVD, PCA mathematical formulation)",
                      type: "VIDEO",
                      order: 2
                    },
                    {
                      name: "Lecture 18: LDA (Linear Discriminant Analysis), Rational Multi-agent setup",
                      type: "VIDEO",
                      order: 3
                    },
                    {
                      name: "Lecture 19: Two Player Sequential Games & Subgame Perfection",
                      type: "VIDEO",
                      order: 4
                    },
                    {
                      name: "Lecture 20: Zero-Sum Games Minimax Search & Saddle Points equilibrium",
                      type: "VIDEO",
                      order: 5
                    },
                    {
                      name: "Lecture 21: Normal Form Games, Mixed Strategies, Nash Equilibrium",
                      type: "VIDEO",
                      order: 6
                    },
                    {
                      name: "Lecture 22: Social Choice theory & Voting rules (Borda, Condorcet, Copeland)",
                      type: "VIDEO",
                      order: 7
                    },
                    {
                      name: "Lecture 23: Gibbard-Satterthwaite theorem & Stable Matchings (Gale-Shapley)",
                      type: "VIDEO",
                      order: 8
                    },
                    {
                      name: "Lecture 24: Classical Search (BFS, DFS, Informed A* Search), MDPs foundation",
                      type: "VIDEO",
                      order: 9
                    }
                  ]
                }
              ]
            }
          ],
          description: "Undergraduate AIML syllabus covering Optimization, Regression, Regularization, SVMs, CNNs, RNNs, and Multi-Agent AI.",
          url: "https://www.cse.iitb.ac.in/~swaprava/cs217240_2024.html"
        },
        {
          name: "CS6001 Game Theory & Algorithmic Mechanism Design",
          type: "WEBSITE",
          order: 1,
          isMustDo: false,
          units: [
            {
              name: "Modules 00 to 20",
              order: 0,
              subUnits: [
                {
                  name: "Lectures",
                  order: 0,
                  items: [
                    {
                      name: "Module 00: Prelude",
                      type: "VIDEO",
                      order: 0,
                      description: "A 4:37 minutes' introduction. No specific reading for this module."
                    },
                    {
                      name: "Module 01: Introduction to Game Theory",
                      type: "VIDEO",
                      order: 1,
                      description: "The setup for game theory. Example of game theory: Neighbouring kingdom's dilemma. What do we mean by strategies, players, actions, rational and intelligent players? Objectives of game theory. Reading: any reference, introductory chapter. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 02: Introduction to Mechanism Design",
                      type: "VIDEO",
                      order: 2,
                      description: "Understanding mechanism design with the example of a cake-cutting problem. Why should we design a game? Takeaways from the course. Reading: any reference, introductory chapter. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 03: The Game of Chess",
                      type: "VIDEO",
                      order: 3,
                      description: "Example to illustrate game theory: game of chess. Players, strategies, outcomes in chess. Reading: MSZ chapter 1. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 04: Proof of the Chess Theorem",
                      type: "VIDEO",
                      order: 4,
                      description: "Proof of the chess theorem by Von Neumann (1928). Reading: MSZ chapter 1. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 05: Normal Form Games",
                      type: "VIDEO",
                      order: 5,
                      description: "Representation of games in normal form (NF). Rationality and intelligence. Common knowledge and its implications. How does common knowledge percolate? Reading: MSZ chapter 4. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 06: Dominance",
                      type: "VIDEO",
                      order: 6,
                      description: "Domination in NFGs: dominant strategy, dominated strategy, dominant strategy equilibrium. Reading: MSZ chapter 4. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 07: Nash Equilibrium",
                      type: "VIDEO",
                      order: 7,
                      description: "Rationality and dominant strategies. Existence of dominant strategies. Nash equilibrium. Best response and pure strategy nash equilibrium (PSNE). Reading: MSZ chapter 4. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 08: Maxmin Strategies",
                      type: "VIDEO",
                      order: 8,
                      description: "Risk aversion of players. Maxmin value. Maxmin and dominant strategies. Relationship of maxmin value with PSNE. Reading: MSZ chapter 4. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 09: Elimination of Dominated Strategies",
                      type: "VIDEO",
                      order: 9,
                      description: "What happens to stability and security when some (dominated) strategies are eliminated (iterative elimination)? Does it change the maxmin value? No. Reading: MSZ chapter 4. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 10: Preservation of PSNE",
                      type: "VIDEO",
                      order: 10,
                      description: "What happens to equilibrium after iterative elimination? Can a new equilibrium be generated? No. Reading: MSZ chapter 4. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 11: Matrix Games",
                      type: "VIDEO",
                      order: 11,
                      description: "Two-player zero-sum game (matrix game). What are the PSNEs of these games? Saddle points. Reading: MSZ chapter 4. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 12: Relation between Maxmin and PSNE in Matrix Games",
                      type: "VIDEO",
                      order: 12,
                      description: "A matrix game has a PSNE (saddle point) iff maxmin and minmax values are the same. Reading: MSZ chapter 4. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 13: Mixed Strategies",
                      type: "VIDEO",
                      order: 13,
                      description: "Mixed strategies: probability distribution over the set of strategies. Utility at a mixed strategy. Reading: MSZ chapter 5. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 14: Mixed Strategy Nash Equilibrium",
                      type: "VIDEO",
                      order: 14,
                      description: "Relation between PSNE and MSNE. Example of MSNE. Reading: MSZ chapter 5. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 15: Find MSNE",
                      type: "VIDEO",
                      order: 15,
                      description: "How to find an MSNE? Support of a mixed strategy. Characteristics of MSNE and its implications. Reading: MSZ chapter 5. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 16: MSNE Characterization Theorem Proof",
                      type: "VIDEO",
                      order: 16,
                      description: "Observations and proof for the characterization of MSNE. Reading: MSZ chapter 5. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 17: Algorithm to find MSNE",
                      type: "VIDEO",
                      order: 17,
                      description: "MSNE characterization theorem to algorithm. Existence of MSNE: Nash theorem (1951). Reading: MSZ chapter 5. [Boardwork] [Boardwork (NB version)] [Proof of Nash theorem]"
                    },
                    {
                      name: "Module 18: Correlated Equilibrium",
                      type: "VIDEO",
                      order: 18,
                      description: "Correlated strategy and equilibrium: definitions, example, and discussion. Reading: MSZ chapter 8. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 19: Computing Correlated Equilibrium",
                      type: "VIDEO",
                      order: 19,
                      description: "The two sets of constraints are to be solved to compute the CE. Comparison of CE with the previous equilibrium notions. Summary so far in this course. Reading: MSZ chapter 8. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 20: Extensive Form Games",
                      type: "VIDEO",
                      order: 20,
                      description: "Perfect information extensive form games (PIEFGs): Example of brother-sister chocolate division, formal definition. Understanding the transformation of PIEFG into NFG with an example. Reading: MSZ chapter 3. [Boardwork] [Boardwork (NB version)]"
                    }
                  ]
                }
              ]
            },
            {
              name: "Modules 21 to 40",
              order: 1,
              subUnits: [
                {
                  name: "Lectures",
                  order: 0,
                  items: [
                    {
                      name: "Module 21: Subgame Perfection",
                      type: "VIDEO",
                      order: 0,
                      description: "Equilibrium guarantees are weak in PIEFG. Subgame perfect Nash equilibrium (SPNE).  Finding SPNE using backward induction. Reading: MSZ chapter 3. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 22: Limitations of SPNE",
                      type: "VIDEO",
                      order: 1,
                      description: "The computation cost of SPNE. Advantages and disadvantages of SPNE. Centipede game. Reading: MSZ chapter 3. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 23: Imperfect Information Extensive Form Games",
                      type: "VIDEO",
                      order: 2,
                      description: "IIEFG: Games with imperfect information. Example and formal definition of IIEFG. Reading: MSZ chapter 3, SLB chapter 5. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 24: Strategies in IIEFGs",
                      type: "VIDEO",
                      order: 3,
                      description: "Randomized strategies in IIEFG. Behavioral strategy. Relation between mixed and behavioral strategies: equivalence, can we have an equivalence? Utility equivalence. Reading: MSZ chapter 3, 6. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 25: Equivalence of Strategies in IIEFGs",
                      type: "VIDEO",
                      order: 4,
                      description: "Why behavioral strategies are desirable? Does the equivalence always hold? The equivalence does not hold if the players are forgetful. Reading: MSZ chapter 6. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 26: Perfect Recall",
                      type: "VIDEO",
                      order: 5,
                      description: "Forgetfulness of the players. Games with perfect recall: definition, example, the implication of perfect recall. Kuhn's theorem (1957). Reading: MSZ chapter 6. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 27: Equilibrium in IIEFGs",
                      type: "VIDEO",
                      order: 6,
                      description: "Equilibrium notions in IIEFGs. Example and formal definitions of belief, Bayesian beliefs, and sequential rationality. Perfect Bayesian Equilibrium (PBE). Reading: MSZ chapter 6. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 28: Game Theory in Practice -- P2P File Sharing",
                      type: "VIDEO",
                      order: 7,
                      description: "Peer-to-peer sharing:  desired terminology, file-sharing game, New protocol (BitTorrent). BitTorrent optimistic unchoking algorithm, attacks on BitTorrent, BitThief, Strategic piece revealer. Reading: Parkes and Seuken book chapter 5. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 29: Bayesian Games",
                      type: "VIDEO",
                      order: 8,
                      description: "Bayesian game: definition, example, stages of a Bayesian game. Reading: MSZ chapter 9.4. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 30: Strategy, Utility in Bayesian Games",
                      type: "VIDEO",
                      order: 9,
                      description: "Strategy, Relationship between ex-ante utility, ex-interim utility. Example: Two-player bargaining game, sealed bid auction. Reading: MSZ chapter 9.4. [Boardwork] [Boardwork (NB version)]"
                    },
                    { name: "Module 31: Equilibrium in Bayesian Games", type: "VIDEO", order: 10 },
                    {
                      name: "Module 32: Examples of Bayesian Equilibrium",
                      type: "VIDEO",
                      order: 11
                    },
                    {
                      name: "Module 33: Introduction to Mechanism Design",
                      type: "VIDEO",
                      order: 12,
                      description: "A general model for mechanism design. Social choice function. Direct and indirect mechanisms. Dominant strategy incentive compatibility (DSIC). [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 34: Revelation Principle",
                      type: "VIDEO",
                      order: 13,
                      description: "Relationship between DSI and DSIC. Bayesian implementation (BI) of a social choice function. Relationship between BI and Bayesian incentive compatibility (BIC). [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 35: Arrow's Impossibility Result",
                      type: "VIDEO",
                      order: 14,
                      description: "Linear or non-linear preference order and preference aggregation: social welfare function (SWF). Properties of SWF: Weak/strong Pareto, Independence of irrelevant alternatives (IIA), and Arrow's impossibility result. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 36: Proof of Arrow's Result",
                      type: "VIDEO",
                      order: 15,
                      description: "Decisive and almost decisive set of agents. Field expansion lemma and group contraction lemma. [Boardwork] [Boardwork (NB version)]"
                    },
                    { name: "Module 37: The Social Choice Setup", type: "VIDEO", order: 16 },
                    {
                      name: "Module 38: The Gibbard Satterthwaite Theorem",
                      type: "VIDEO",
                      order: 17,
                      description: "An SCF f is strategyproof (SP) iff it is Monotone (MONO).  If an SCF  f is Onto and MONO then it is PE.  An SCF f is SP+PE iff f is SP+UN. An SCF f is  SP+UN iff f is SP+Onto.  Gibbard-Satterthwaite (GS) Theorem. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 39: Proof of GS Theorem",
                      type: "VIDEO",
                      order: 18,
                      description: "Examples of the cases when the GS theorem does not hold.  Proof for GS theorem for two agents. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 40: Domain Restriction",
                      type: "VIDEO",
                      order: 19,
                      description: "Understanding the domain restriction with the example of single-peaked preferences. [Boardwork] [Boardwork (NB version)]"
                    }
                  ]
                }
              ]
            },
            {
              name: "Modules 41 to 63",
              order: 2,
              subUnits: [
                {
                  name: "Lectures",
                  order: 0,
                  items: [
                    {
                      name: "Module 41: Median Voting Rule",
                      type: "VIDEO",
                      order: 0,
                      description: "Every median voter SCF is strategyproof. Anonymous (ANON) SCFs. [Boardwork] [Boardwork (NB version)]"
                    },
                    { name: "Module 42: Median Voter Theorem - Part 1", type: "VIDEO", order: 1 },
                    { name: "Module 43: Median Voter Theorem - Part 2", type: "VIDEO", order: 2 },
                    {
                      name: "Module 44: The Task Sharing Domain",
                      type: "VIDEO",
                      order: 3,
                      description: "Single-peaked preferences over task share. Pareto efficiency in task-sharing setting. Some SCFs: Serial dictatorship, proportional. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 45: The Uniform Rule",
                      type: "VIDEO",
                      order: 4,
                      description: "For the task-sharing setting, a deterministic SCF f is  SP, PE, and ANON iff f is the Uniform rule. [Boardwork] [Boardwork (NB version)]  [Sprumont's paper]"
                    },
                    {
                      name: "Module 46: Mechanism Design with Transfers",
                      type: "VIDEO",
                      order: 5,
                      description: "Examples of allocation problems. Valuation and payment functions. Quasi-linear utility function. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 47: Examples of Quasi-linear Preferences",
                      type: "VIDEO",
                      order: 6,
                      description: "Examples of allocation rules: Constant rule, dictatorial rule, utilitarian rule,  affine maximizer rule, egalitarian rule. Examples of payment rules: No deficit,  no subsidy, budget balanced. Domain strategy incentive compatibility in quasi-linear setting. Properties of payment rule that implements an allocation rule. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 48: Pareto Optimality and Groves Payments",
                      type: "VIDEO",
                      order: 7
                    },
                    {
                      name: "Module 49: Introduction to VCG Mechanism",
                      type: "VIDEO",
                      order: 8,
                      description: "What is the expression for the VCG? Computing the outcome and  VCG payment. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 50: VCG in Combinatorial Allocations",
                      type: "VIDEO",
                      order: 9,
                      description: "Proving that the payment for an agent not getting any object is zero. Proving that for 'allocation of goods' VCG is always IR. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 51: Applications to Internet Advertising",
                      type: "VIDEO",
                      order: 10,
                      description: "The essence of Internet advertising. Click through rate and a foundation for the next module. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 52: Slot Allocation and Payments in Position Auctions",
                      type: "VIDEO",
                      order: 11,
                      description: "An allocation is efficient if the allocation is by rank by the expected revenue mechanism. Calculation of total expected payment. [Boardwork] [Boardwork (NB version)]"
                    },
                    { name: "Module 53: Pros and Cons of VCG Mechanism", type: "VIDEO", order: 12 },
                    {
                      name: "Module 54: Affine Maximizers",
                      type: "VIDEO",
                      order: 13,
                      description: "Generalization of VCG mechanism. Affine maximizer allocation rule. Independence of non-influential agents (INA).  An AM rule satisfying INA is implementable in dominant strategies. Roberts theorem (1979) for characterization of the class of DSIC mechanisms in the quasi-linear domain. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 55: Single Object Allocation",
                      type: "VIDEO",
                      order: 14,
                      description: "Mechanism design for selling single indivisible object: setup, allocation rule, valuation, second-price auction. Observations and some standard results from convex analysis. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 56: Myerson's Lemma",
                      type: "VIDEO",
                      order: 15,
                      description: "Monotonicity and Myerson's lemma. An allocation rule in single object allocation is implementable in dominant strategies if it is non-decreasing. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 57: Illustration of Myerson's Lemma",
                      type: "VIDEO",
                      order: 16,
                      description: "Examples of some single object allocation mechanisms. Ex-post individual rationality. Some non-Vickrey auctions. Deterministic mechanisms that redistribute the money. [Boardwork] [Boardwork (NB version)]"
                    },
                    { name: "Module 58: Optimal Mechanism Design", type: "VIDEO", order: 17 },
                    {
                      name: "Module 59: Single Agent Optimal Mechanism Design",
                      type: "VIDEO",
                      order: 18,
                      description: "Optimal mechanism design for a single agent. What is the structure of an optimal mechanism? Expected revenue. Monotone hazard rate (MHR). [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 60: Multiple Agent Optimal Mechanism Design",
                      type: "VIDEO",
                      order: 19,
                      description: "Optimal mechanism (BIC, IIR, and maximizes revenue) design for multiple agents. Virtual valuation of a player. A 'regular' virtual valuation. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 61: Examples of Optimal Mechanisms",
                      type: "VIDEO",
                      order: 20,
                      description: "Examples: two buyers, Symmetric bidders, Efficiency, and optimality. [Boardwork] [Boardwork (NB version)]"
                    },
                    {
                      name: "Module 62: Endnotes and Summary",
                      type: "VIDEO",
                      order: 21,
                      description: "The uniqueness of Groves mechanism for efficiency. No Groves mechanism is budget balanced. Weakening DSIC for positive results. In a bilateral trade, no mechanism can be simultaneously BIC, efficient, IIR, and budget balanced. Summary of the mechanisms with different combinations of properties discussed in this course. [Boardwork] [Boardwork (NB version)]"
                    }
                  ]
                }
              ]
            }
          ],
          description: "Multi-agent systems and game theory course at IIT Bombay by Swaprava Nath.",
          url: "https://www.cse.iitb.ac.in/~swaprava/cs6001_07_2023.html"
        },
        {
          name: "MIT Introduction to Deep Learning (6.S191)",
          type: "WEBSITE",
          order: 2,
          isMustDo: false,
          units: [
            {
              name: "Course Syllabus & Labs",
              order: 0,
              subUnits: [
                {
                  name: "Lectures and Labs",
                  order: 0,
                  items: [
                    {
                      name: "Lecture 1: Intro to Deep Learning",
                      type: "VIDEO",
                      order: 0,
                      url: "https://www.youtube.com/watch?v=II4giR4vOOo&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI"
                    },
                    {
                      name: "Lecture 2: Deep Sequence Modeling",
                      type: "VIDEO",
                      order: 1,
                      url: "https://www.youtube.com/watch?v=d02VkQ9MP44&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI"
                    },
                    {
                      name: "Software Lab 1: TensorFlow and Music Generation (Colab/GitHub)",
                      type: "VIDEO",
                      order: 2,
                      url: "https://github.com/aamini/introtodeeplearning/tree/master/lab1"
                    },
                    {
                      name: "Lecture 3: Deep Computer Vision",
                      type: "VIDEO",
                      order: 3,
                      url: "https://www.youtube.com/watch?v=pqIcoskUuWs&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI"
                    },
                    {
                      name: "Lecture 4: Deep Generative Modeling",
                      type: "VIDEO",
                      order: 4,
                      url: "https://www.youtube.com/watch?v=R8V8CbuxryI&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI"
                    },
                    {
                      name: "Software Lab 2: Facial Detection Systems (Colab/GitHub)",
                      type: "VIDEO",
                      order: 5,
                      url: "https://github.com/aamini/introtodeeplearning/tree/master/lab2"
                    },
                    {
                      name: "Lecture 5: Deep Reinforcement Learning",
                      type: "VIDEO",
                      order: 6,
                      url: "https://www.youtube.com/watch?v=1ij3dweHu-0&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI"
                    },
                    {
                      name: "Lecture 6: Language Models and New Frontiers",
                      type: "VIDEO",
                      order: 7,
                      url: "https://www.youtube.com/watch?v=ev7cLSd-ySE&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI"
                    },
                    {
                      name: "Software Lab 3: PPO and Pixel-to-Control (Colab/GitHub)",
                      type: "VIDEO",
                      order: 8,
                      url: "https://github.com/aamini/introtodeeplearning/tree/master/lab3"
                    },
                    {
                      name: "Lecture 7: The Three Laws of AI",
                      type: "VIDEO",
                      order: 9,
                      url: "https://www.youtube.com/watch?v=XKOpA7iaJvg&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI"
                    },
                    {
                      name: "Lecture 8: AI for Science",
                      type: "VIDEO",
                      order: 10,
                      url: "https://www.youtube.com/watch?v=rZACoZD8AG8&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI"
                    },
                    {
                      name: "Lecture 9: Secrets of Massively Parallel Training",
                      type: "VIDEO",
                      order: 11,
                      url: "https://www.youtube.com/watch?v=UZZD9d9YqnQ&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI"
                    },
                    {
                      name: "Project Work & Design Planning",
                      type: "VIDEO",
                      order: 12,
                      url: "https://introtodeeplearning.com/#schedule"
                    },
                    {
                      name: "Project Presentations & Awards Celebration",
                      type: "VIDEO",
                      order: 13,
                      url: "https://introtodeeplearning.com/#schedule"
                    }
                  ]
                }
              ]
            }
          ],
          description: "Introductory deep learning course covering sequence models, computer vision, reinforcement learning, and fine-tuning.",
          url: "https://introtodeeplearning.com"
        }
      ],
      description: "Acquire mathematical models for AI/ML, deep sequence modeling, dynamic programming, and normal/extensive form games.",
      icon: "🤖"
    },
    {
      name: "Advanced Mathematics (Seniors' Suggestions)",
      order: 4,
      resources: [
        {
          name: "Concrete Mathematics (Graham, Knuth, Patashnik)",
          type: "BOOK",
          order: 0,
          isMustDo: false,
          units: [
            {
              name: "Core Chapters",
              order: 0,
              subUnits: [
                {
                  name: "Chapters",
                  order: 0,
                  items: [
                    {
                      name: "Chapter 1: Recurrent Problems (Towers of Hanoi, Lines in the Plane)",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "Chapter 2: Sums (Notation, Summation methods)",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "Chapter 3: Integer Functions (Floors and Ceilings, Applications)",
                      type: "READING",
                      order: 2
                    },
                    {
                      name: "Chapter 4: Number Theory (Congruences, Primality, Divisibility)",
                      type: "READING",
                      order: 3
                    },
                    {
                      name: "Chapter 5: Binomial Coefficients (Identities, Generating functions)",
                      type: "READING",
                      order: 4
                    },
                    {
                      name: "Chapter 6: Special Numbers (Stirling, Eulerian, Harmonic)",
                      type: "READING",
                      order: 5
                    },
                    {
                      name: "Chapter 7: Generating Functions (Dominoes, Convolutions)",
                      type: "READING",
                      order: 6
                    },
                    {
                      name: "Chapter 8: Discrete Probability (Mean and Variance, Coin flipping)",
                      type: "READING",
                      order: 7
                    },
                    {
                      name: "Chapter 9: Asymptotics (O-notation, Euler-Maclaurin formula)",
                      type: "READING",
                      order: 8
                    }
                  ]
                }
              ]
            }
          ],
          description: "Comprehensive mathematical foundation blending continuous and discrete mathematics, focusing on concrete application methods.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Concrete%20Mathematics.pdf"
        },
        {
          name: "Discrete Algorithmic Mathematics (Maurer, Ralston)",
          type: "BOOK",
          order: 1,
          isMustDo: false,
          units: [
            {
              name: "Core Chapters",
              order: 0,
              subUnits: [
                {
                  name: "Chapters",
                  order: 0,
                  items: [
                    {
                      name: "Chapter 1: Mathematical Preliminaries (Logic, Induction)",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "Chapter 2: Algorithms (Complexity, Search & Sorting)",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "Chapter 3: Mathematical Induction and Recursion",
                      type: "READING",
                      order: 2
                    },
                    { name: "Chapter 4: Graph Theory & Applications", type: "READING", order: 3 },
                    {
                      name: "Chapter 5: Trees & Hierarchical Structures",
                      type: "READING",
                      order: 4
                    },
                    {
                      name: "Chapter 6: Combinatorics & Discrete Probability",
                      type: "READING",
                      order: 5
                    },
                    {
                      name: "Chapter 7: Recurrence Relations & Difference Equations",
                      type: "READING",
                      order: 6
                    },
                    {
                      name: "Chapter 8: Algebraic Structures & Boolean Algebras",
                      type: "READING",
                      order: 7
                    }
                  ]
                }
              ]
            }
          ],
          description: "Focus on mathematical logic, recursion, trees, graphs, and algorithms.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/discrete-algorithmic-mathematics-third-edition-3rd-ed-online-ausg-978-1-4398-6375-6-143986375x_compress.pdf"
        },
        {
          name: "The Number Devil (Hans Magnus Enzensberger)",
          type: "BOOK",
          order: 2,
          isMustDo: false,
          units: [
            {
              name: "The Twelve Nights of Dreams",
              order: 0,
              subUnits: [
                {
                  name: "Nights",
                  order: 0,
                  items: [
                    {
                      name: "1st Night: The Number One, Infinitely Small and Large",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "2nd Night: The Number Zero and Place Value System",
                      type: "READING",
                      order: 1
                    },
                    { name: "3rd Night: Prime Numbers and Divisibility", type: "READING", order: 2 },
                    {
                      name: "4th Night: Square Roots and Irrational Numbers",
                      type: "READING",
                      order: 3
                    },
                    {
                      name: "5th Night: Triangle Numbers and Arithmetic Series",
                      type: "READING",
                      order: 4
                    },
                    {
                      name: "6th Night: Fibonacci Numbers and Nature's Cycles",
                      type: "READING",
                      order: 5
                    },
                    { name: "7th Night: Pascal's Triangle and Patterns", type: "READING", order: 6 },
                    {
                      name: "8th Night: Factorials and Permutations (Combinatorics)",
                      type: "READING",
                      order: 7
                    },
                    {
                      name: "9th Night: Infinite Series and Convergence",
                      type: "READING",
                      order: 8
                    },
                    {
                      name: "10th Night: Mathematical Proofs and Geometry",
                      type: "READING",
                      order: 9
                    },
                    {
                      name: "11th Night: Mathematical Principles and Logic",
                      type: "READING",
                      order: 10
                    },
                    {
                      name: "12th Night: The Pyramids of Numbers and Euler's polyhedra",
                      type: "READING",
                      order: 11
                    }
                  ]
                }
              ]
            }
          ],
          description: "A playful mathematical adventure exploring number sequences and structures.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/the-number-devil-a-mathematical-adventure-paperbacknbsped-0805062998-9780805062991.pdf"
        },
        {
          name: "Probability Theory: An Analytic View (Stroock)",
          type: "BOOK",
          order: 3,
          isMustDo: false,
          units: [
            {
              name: "Rigorous Core Chapters",
              order: 0,
              subUnits: [
                {
                  name: "Chapters",
                  order: 0,
                  items: [
                    {
                      name: "Chapter 1: Sums of Independent Random Variables",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "Chapter 2: The Central Limit Theorem (Analytical bounds)",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "Chapter 3: Convergence of Measures and Weak Law of Large Numbers",
                      type: "READING",
                      order: 2
                    },
                    {
                      name: "Chapter 4: Conditional Expectation & Martingale Convergence",
                      type: "READING",
                      order: 3
                    },
                    {
                      name: "Chapter 5: Continuous-Time Stochastic Processes",
                      type: "READING",
                      order: 4
                    },
                    {
                      name: "Chapter 6: Brownian Motion & Path Properties",
                      type: "READING",
                      order: 5
                    },
                    { name: "Chapter 7: Markov Processes & Generators", type: "READING", order: 6 },
                    {
                      name: "Chapter 8: Stochastic Integration (Ito Integral calculus)",
                      type: "READING",
                      order: 7
                    }
                  ]
                }
              ]
            }
          ],
          description: "Highly rigorous graduate-level analytical probability book for quant research candidates.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/vdoc.pub_probability-theory-an-analytic-view.pdf"
        }
      ],
      description: "Deep dive into discrete math, number systems, and analytical probability theory suggested by seniors.",
      icon: "⚡"
    }
  ]
};
