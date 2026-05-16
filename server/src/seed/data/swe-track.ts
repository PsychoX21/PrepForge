/**
 * Default content seed data — Track 2: Software Engineer
 */

const CSES_SECTIONS = [
  { name: 'Introductory Problems', count: 19, items: [
    'Weird Algorithm','Missing Number','Repetitions','Increasing Array','Permutations',
    'Number Spiral','Two Knights','Two Sets','Bit Strings','Trailing Zeros',
    'Coin Piles','Palindrome Reorder','Gray Code','Tower of Hanoi','Creating Strings',
    'Apple Division','Chessboard and Queens','Digit Queries','Grid Paths',
  ]},
  { name: 'Sorting and Searching', count: 35, items: [
    'Distinct Numbers','Apartments','Ferris Wheel','Concert Tickets','Restaurant Customers',
    'Movie Festival','Sum of Two Values','Maximum Subarray Sum','Stick Lengths',
    'Missing Coin Sums','Collecting Numbers','Playlist','Towers','Traffic Lights',
    'Josephus Problem I','Josephus Problem II','Nested Ranges Check','Room Allocation',
    'Factory Machines','Tasks and Deadlines','Reading Books','Sum of Three Values',
    'Sum of Four Values','Nearest Smaller Values','Subarray Sums I','Subarray Sums II',
    'Subarray Divisibility','Subarray Distinct Values','Array Division','Sliding Median',
    'Sliding Cost','Movie Festival II','Maximum Subarray Sum II',
  ]},
  { name: 'Dynamic Programming', count: 19, items: [
    'Dice Combinations','Minimizing Coins','Coin Combinations I','Coin Combinations II',
    'Removing Digits','Grid Paths','Book Shop','Array Description','Counting Towers',
    'Edit Distance','Rectangle Cutting','Money Sums','Removal Game','Two Sets II',
    'Increasing Subsequence','Projects','Elevator Rides','Counting Tilings','Counting Numbers',
  ]},
  { name: 'Graph Algorithms', count: 36, items: [
    'Counting Rooms','Labyrinth','Building Roads','Message Route','Building Teams',
    'Round Trip','Monsters','Shortest Routes I','Shortest Routes II','High Score',
    'Flight Discount','Cycle Finding','Flight Routes','Round Trip II','Course Schedule',
    'Longest Flight Route','Game Routes','Investigation','Planets Queries I',
    'Planets Queries II','Planets Cycles','Road Reparation','Road Construction',
    'Flight Routes Check','Planets and Kingdoms','Giant Pizza','Coin Collector',
    'Mail Delivery','De Bruijn Sequence','Teleporters Path','Hamiltonian Flights',
    'Knights Tour','Download Speed','Police Chase','School Dance','Distinct Routes',
  ]},
  { name: 'Range Queries', count: 19, items: [
    'Static Range Sum Queries','Static Range Minimum Queries','Dynamic Range Sum Queries',
    'Dynamic Range Minimum Queries','Range Xor Queries','List Removals','Salary Queries',
    'Prefix Sum Queries','Pizzeria Queries','Subarray Sum Queries',
    'Distinct Values Queries','Increasing Array Queries','Forest Queries',
    'Hotel Queries','Range Update Queries','Polynomial Queries',
    'Range Queries and Copies','Range Updates and Sums','Forest Queries II',
  ]},
  { name: 'Tree Algorithms', count: 16, items: [
    'Subordinates','Tree Matching','Tree Diameter','Tree Distances I','Tree Distances II',
    'Company Queries I','Company Queries II','Distance Queries','Counting Paths',
    'Subtree Queries','Path Queries','Path Queries II','Distinct Colors',
    'Finding a Centroid','Fixed-Length Paths I','Fixed-Length Paths II',
  ]},
  { name: 'Mathematics', count: 31, items: [
    'Josephus Queries','Exponentiation','Exponentiation II','Counting Divisors',
    'Common Divisors','Sum of Divisors','Divisor Analysis','Prime Multiples',
    'Counting Coprime Pairs','Binomial Coefficients','Creating Strings II',
    'Distributing Apples','Christmas Party','Bracket Sequences I','Bracket Sequences II',
    'Counting Necklaces','Counting Grids','Fibonacci Numbers','Throwing Dice',
    'Graph Paths I','Graph Paths II','Dices Probability','Moving Robots',
    'Candy Lottery','Inversion Probability','Stick Game','Nim Game I','Nim Game II',
    'Stair Game','Grundy Values','Another Game',
  ]},
  { name: 'String Algorithms', count: 17, items: [
    'Word Combinations','String Matching','Finding Borders','Finding Periods',
    'Minimal Rotation','Longest Palindrome','Required Substring','Palindrome Queries',
    'Finding Patterns','Counting Patterns','Pattern Positions','Distinct Substrings',
    'Repeating Substring','String Functions','Substring Order I','Substring Order II',
    'Substring Distribution',
  ]},
];

export const SWE_TRACK = {
  name: 'Software Engineer',
  description: 'Competitive programming, systems knowledge, C++ mastery, and DSA.',
  icon: '💻',
  color: '#58a6ff',
  order: 1,
  categories: [
    {
      name: 'Competitive Programming',
      description: 'Algorithmic problem solving and contest preparation',
      icon: '🏆',
      order: 0,
      resources: [
        {
          name: 'CSES Problem Set',
          type: 'PROBLEM_SET',
          url: 'https://cses.fi/problemset/',
          isMustDo: true,
          order: 0,
          units: CSES_SECTIONS.map((section, i) => ({
            name: section.name,
            order: i,
            subUnits: [{
              name: 'Problems',
              order: 0,
              items: section.items.map((name, j) => ({
                name, type: 'PROBLEM', order: j,
                url: `https://cses.fi/problemset/task/${1068 + j}`,
                difficulty: i < 2 ? 'EASY' : i < 4 ? 'MEDIUM' : 'HARD',
              })),
            }],
          })),
        },
        {
          name: 'Codeforces Practice',
          type: 'WEBSITE',
          url: 'https://codeforces.com',
          isMustDo: true,
          order: 1,
          units: [
            { name: 'Rating 800-1200', order: 0, subUnits: [
              { name: 'Implementation', order: 0, items: Array.from({ length: 10 }, (_, i) => ({
                name: `CF Problem ${i + 1}`, type: 'PROBLEM', difficulty: 'EASY', order: i,
              }))},
            ]},
            { name: 'Rating 1200-1600', order: 1, subUnits: [
              { name: 'Greedy & Sorting', order: 0, items: Array.from({ length: 10 }, (_, i) => ({
                name: `CF Problem ${i + 11}`, type: 'PROBLEM', difficulty: 'MEDIUM', order: i,
              }))},
            ]},
            { name: 'Rating 1600-2000', order: 2, subUnits: [
              { name: 'DP & Graphs', order: 0, items: Array.from({ length: 10 }, (_, i) => ({
                name: `CF Problem ${i + 21}`, type: 'PROBLEM', difficulty: 'HARD', order: i,
              }))},
            ]},
          ],
        },
        {
          name: 'SOC CP Resources',
          type: 'COURSE',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming',
          isMustDo: true,
          description: 'Great for beginners — topic-wise resources with ~150 problems',
          order: 2,
          units: [{ name: 'Topic Modules', order: 0, subUnits: [
            { name: 'Assorted Problems', order: 0, items: Array.from({ length: 15 }, (_, i) => ({
              name: `SOC Problem ${i + 1}`, type: 'PROBLEM', order: i, difficulty: i < 5 ? 'EASY' : i < 10 ? 'MEDIUM' : 'HARD',
            }))},
          ]}],
        },
        {
          name: 'Steven Halim — Competitive Programming 3',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Steven-Halim_-Felix-Halim-Competitive-Programming-3_-The-New-Lower-Bound-of-Programming-Contests-Lulu.com-_2013_.pdf',
          isMustDo: false,
          order: 3,
          units: [{ name: 'Core Chapters', order: 0, subUnits: [
            { name: 'DSA Concepts', order: 0, items: [
              { name: 'Data Structures Overview', type: 'READING', order: 0 },
              { name: 'Problem Solving Paradigms', type: 'READING', order: 1 },
              { name: 'Graph Theory', type: 'READING', order: 2 },
              { name: 'Mathematics', type: 'READING', order: 3 },
              { name: 'String Processing', type: 'READING', order: 4 },
            ]},
          ]}],
        },
        {
          name: 'CP Handbook 1',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/book.pdf',
          isMustDo: false,
          order: 4,
          units: [{ name: 'Chapters', order: 0, subUnits: [
            { name: 'Theory + CSES Problems', order: 0, items: [
              { name: 'Introduction', type: 'READING', order: 0 },
              { name: 'Time Complexity', type: 'READING', order: 1 },
              { name: 'Sorting & Searching', type: 'READING', order: 2 },
              { name: 'Dynamic Programming', type: 'READING', order: 3 },
              { name: 'Graph Algorithms', type: 'READING', order: 4 },
            ]},
          ]}],
        },
        {
          name: 'CP Handbook 2 (Guide to CP)',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/guide-t-cp.pdf',
          isMustDo: false,
          order: 5,
          units: [{ name: 'Advanced Topics', order: 0, subUnits: [
            { name: 'Topics', order: 0, items: [
              { name: 'Advanced Data Structures', type: 'READING', order: 0 },
              { name: 'Number Theory', type: 'READING', order: 1 },
              { name: 'Geometry', type: 'READING', order: 2 },
            ]},
          ]}],
        },
        {
          name: 'CP-Algorithms',
          type: 'WEBSITE',
          url: 'https://cp-algorithms.com',
          isMustDo: false,
          order: 6,
          units: [{ name: 'By Topic', order: 0, subUnits: [
            { name: 'Algorithms & DS', order: 0, items: [
              { name: 'Segment Trees', type: 'READING', order: 0 },
              { name: 'Fenwick Tree', type: 'READING', order: 1 },
              { name: 'Suffix Array', type: 'READING', order: 2 },
              { name: 'Heavy-Light Decomposition', type: 'READING', order: 3 },
              { name: 'FFT/NTT', type: 'READING', order: 4 },
            ]},
          ]}],
        },
        {
          name: 'LeetCode',
          type: 'WEBSITE',
          url: 'https://leetcode.com',
          isMustDo: false,
          order: 7,
          units: [
            { name: 'Curated Sheet', order: 0, subUnits: [
              { name: 'Top Problems', order: 0, items: Array.from({ length: 10 }, (_, i) => ({
                name: `Top Problem ${i + 1}`, type: 'PROBLEM', order: i, difficulty: i < 3 ? 'EASY' : i < 7 ? 'MEDIUM' : 'HARD',
              }))},
            ]},
            { name: 'Design Section', order: 1, subUnits: [
              { name: 'Hard Problems', order: 0, items: Array.from({ length: 10 }, (_, i) => ({
                name: `Design Hard ${i + 1}`, type: 'PROBLEM', order: i, difficulty: 'HARD',
              }))},
            ]},
          ],
        },
        {
          name: 'DSA Reference Doc',
          type: 'DOC',
          url: 'https://github.com/sakshamrathi21/Competitive_Programming/blob/main/resources/1757217119433.pdf',
          isMustDo: false,
          order: 8,
          units: [{ name: 'Reference', order: 0, subUnits: [
            { name: 'Data Structures', order: 0, items: [
              { name: 'Arrays & Linked Lists', type: 'READING', order: 0 },
              { name: 'Trees & Graphs', type: 'READING', order: 1 },
              { name: 'Heaps & Priority Queues', type: 'READING', order: 2 },
              { name: 'Hash Tables', type: 'READING', order: 3 },
            ]},
          ]}],
        },
      ],
    },
    {
      name: 'Systems Courses',
      description: 'Computer Networks, OS, Architecture, and DBMS',
      icon: '🖥️',
      order: 1,
      resources: [
        {
          name: 'Computer Networks',
          type: 'COURSE',
          isMustDo: true,
          order: 0,
          units: [
            { name: 'Physical & Data Link Layer', order: 0, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'OSI & TCP/IP Models', type: 'CONCEPT', order: 0 },
                { name: 'Ethernet & MAC', type: 'CONCEPT', order: 1 },
                { name: 'Error Detection (CRC)', type: 'CONCEPT', order: 2 },
                { name: 'Sliding Window Protocols', type: 'CONCEPT', order: 3 },
              ]},
            ]},
            { name: 'Network Layer', order: 1, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'IP Addressing & Subnetting', type: 'CONCEPT', order: 0 },
                { name: 'Routing Algorithms (Dijkstra, Bellman-Ford)', type: 'CONCEPT', order: 1 },
                { name: 'NAT & DHCP', type: 'CONCEPT', order: 2 },
              ]},
            ]},
            { name: 'Transport Layer', order: 2, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'TCP vs UDP', type: 'CONCEPT', order: 0 },
                { name: 'TCP Handshake & Flow Control', type: 'CONCEPT', order: 1 },
                { name: 'Congestion Control', type: 'CONCEPT', order: 2 },
              ]},
            ]},
            { name: 'Application Layer', order: 3, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'DNS', type: 'CONCEPT', order: 0 },
                { name: 'HTTP/HTTPS', type: 'CONCEPT', order: 1 },
                { name: 'SMTP & FTP', type: 'CONCEPT', order: 2 },
                { name: 'WebSockets', type: 'CONCEPT', order: 3 },
              ]},
            ]},
          ],
        },
        {
          name: 'Operating Systems',
          type: 'COURSE',
          isMustDo: true,
          order: 1,
          units: [
            { name: 'Processes & Threads', order: 0, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'Process Lifecycle', type: 'CONCEPT', order: 0 },
                { name: 'Context Switching', type: 'CONCEPT', order: 1 },
                { name: 'Threads vs Processes', type: 'CONCEPT', order: 2 },
                { name: 'Scheduling Algorithms', type: 'CONCEPT', order: 3 },
              ]},
            ]},
            { name: 'Concurrency', order: 1, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'Mutexes & Semaphores', type: 'CONCEPT', order: 0 },
                { name: 'Deadlock Detection & Prevention', type: 'CONCEPT', order: 1 },
                { name: 'Producer-Consumer Problem', type: 'CONCEPT', order: 2 },
                { name: 'Readers-Writers Problem', type: 'CONCEPT', order: 3 },
              ]},
            ]},
            { name: 'Memory Management', order: 2, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'Virtual Memory', type: 'CONCEPT', order: 0 },
                { name: 'Paging & Page Tables', type: 'CONCEPT', order: 1 },
                { name: 'TLB', type: 'CONCEPT', order: 2 },
                { name: 'Page Replacement (LRU, FIFO)', type: 'CONCEPT', order: 3 },
              ]},
            ]},
            { name: 'File Systems & I/O', order: 3, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'File System Structures', type: 'CONCEPT', order: 0 },
                { name: 'Inodes & Directories', type: 'CONCEPT', order: 1 },
                { name: 'Disk Scheduling', type: 'CONCEPT', order: 2 },
              ]},
            ]},
          ],
        },
        {
          name: 'DBMS',
          type: 'COURSE',
          isMustDo: false,
          order: 2,
          units: [
            { name: 'SQL & Relational Model', order: 0, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'Relational Algebra', type: 'CONCEPT', order: 0 },
                { name: 'SQL Joins & Subqueries', type: 'CONCEPT', order: 1 },
                { name: 'Normalization (1NF-BCNF)', type: 'CONCEPT', order: 2 },
              ]},
            ]},
            { name: 'Transactions & Concurrency', order: 1, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'ACID Properties', type: 'CONCEPT', order: 0 },
                { name: 'Serializability', type: 'CONCEPT', order: 1 },
                { name: '2PL & MVCC', type: 'CONCEPT', order: 2 },
              ]},
            ]},
            { name: 'Indexing & Storage', order: 2, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'B-Trees & B+ Trees', type: 'CONCEPT', order: 0 },
                { name: 'Hash Indexing', type: 'CONCEPT', order: 1 },
                { name: 'Query Optimization', type: 'CONCEPT', order: 2 },
              ]},
            ]},
          ],
        },
      ],
    },
    {
      name: 'C++ Mastery (HFTs)',
      description: 'Deep C++ knowledge required for high-frequency trading firms',
      icon: '⚙️',
      order: 2,
      resources: [
        {
          name: 'LearnCpp.com',
          type: 'WEBSITE',
          url: 'https://www.learncpp.com',
          isMustDo: true,
          order: 0,
          units: [
            { name: 'Ch 0-4: Basics', order: 0, subUnits: [
              { name: 'Fundamentals', order: 0, items: [
                { name: 'Introduction to C++', type: 'READING', order: 0 },
                { name: 'Variables & Types', type: 'READING', order: 1 },
                { name: 'Operators', type: 'READING', order: 2 },
                { name: 'Functions', type: 'READING', order: 3 },
                { name: 'Scope & Linkage', type: 'READING', order: 4 },
              ]},
            ]},
            { name: 'Ch 5-9: Control Flow & Errors', order: 1, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'Conditionals & Loops', type: 'READING', order: 0 },
                { name: 'Error Handling', type: 'READING', order: 1 },
                { name: 'Type Conversions', type: 'READING', order: 2 },
              ]},
            ]},
            { name: 'Ch 10-14: Classes & OOP', order: 2, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'Classes & Structs', type: 'READING', order: 0 },
                { name: 'Constructors & Destructors', type: 'READING', order: 1 },
                { name: 'Operator Overloading', type: 'READING', order: 2 },
                { name: 'Inheritance', type: 'READING', order: 3 },
                { name: 'Virtual Functions & Polymorphism', type: 'READING', order: 4 },
              ]},
            ]},
            { name: 'Ch 15-19: Move Semantics & Templates', order: 3, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'Smart Pointers', type: 'READING', order: 0 },
                { name: 'Move Semantics & Rvalue References', type: 'READING', order: 1 },
                { name: 'Templates', type: 'READING', order: 2 },
                { name: 'Template Specialization', type: 'READING', order: 3 },
              ]},
            ]},
            { name: 'Ch 20-27: STL & Advanced', order: 4, subUnits: [
              { name: 'Topics', order: 0, items: [
                { name: 'STL Containers', type: 'READING', order: 0 },
                { name: 'Iterators & Algorithms', type: 'READING', order: 1 },
                { name: 'Lambda Expressions', type: 'READING', order: 2 },
                { name: 'Concurrency Basics', type: 'READING', order: 3 },
                { name: 'Memory Model', type: 'READING', order: 4 },
              ]},
            ]},
          ],
        },
        {
          name: 'Effective Modern C++',
          type: 'BOOK',
          isMustDo: false,
          order: 1,
          units: [{ name: 'Key Items', order: 0, subUnits: [
            { name: 'Modern C++ Features', order: 0, items: [
              { name: 'auto Type Deduction', type: 'READING', order: 0 },
              { name: 'decltype', type: 'READING', order: 1 },
              { name: 'Braced Initialization', type: 'READING', order: 2 },
              { name: 'nullptr vs 0/NULL', type: 'READING', order: 3 },
              { name: 'constexpr', type: 'READING', order: 4 },
              { name: 'noexcept', type: 'READING', order: 5 },
            ]},
          ]}],
        },
        {
          name: 'Effective C++ (3rd Edition)',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/C%2B%2B/Effective%20C%2B%2B%203rd%20ed.pdf',
          isMustDo: false,
          order: 2,
          units: [{ name: 'Rules', order: 0, subUnits: [
            { name: 'Best Practices', order: 0, items: [
              { name: 'Resource Management', type: 'READING', order: 0 },
              { name: 'Constructors & Destructors', type: 'READING', order: 1 },
              { name: 'Inheritance & OOP', type: 'READING', order: 2 },
              { name: 'Templates & Generic Programming', type: 'READING', order: 3 },
            ]},
          ]}],
        },
        {
          name: 'C++ Coding Standards (Sutter)',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/C%2B%2B/Sutter.C%2B%2B%20Coding%20Standards.2005.pdf',
          isMustDo: false,
          order: 3,
          units: [{ name: 'Standards', order: 0, subUnits: [
            { name: 'Rules & Guidelines', order: 0, items: [
              { name: 'Organizational & Policy Issues', type: 'READING', order: 0 },
              { name: 'Design Style', type: 'READING', order: 1 },
              { name: 'Functions & Operators', type: 'READING', order: 2 },
            ]},
          ]}],
        },
        {
          name: 'C++ Concurrency in Action',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/C%2B%2B/C%2B%2B%20Concurrency%20in%20Action.pdf',
          isMustDo: false,
          order: 4,
          units: [{ name: 'Chapters', order: 0, subUnits: [
            { name: 'Concurrency Patterns', order: 0, items: [
              { name: 'Thread Management', type: 'READING', order: 0 },
              { name: 'Sharing Data Between Threads', type: 'READING', order: 1 },
              { name: 'Lock-Free Programming', type: 'READING', order: 2 },
              { name: 'Memory Model & Atomics', type: 'READING', order: 3 },
            ]},
          ]}],
        },
        {
          name: 'C++ Primer (5th Edition)',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/C%2B%2B/C%2B%2B%20Primer%20(5th%20Edition).pdf',
          isMustDo: false,
          order: 5,
          units: [{ name: 'Comprehensive C++', order: 0, subUnits: [
            { name: 'Core Topics', order: 0, items: [
              { name: 'Variables & Basic Types', type: 'READING', order: 0 },
              { name: 'Strings, Vectors, Arrays', type: 'READING', order: 1 },
              { name: 'Classes', type: 'READING', order: 2 },
              { name: 'Templates', type: 'READING', order: 3 },
            ]},
          ]}],
        },
      ],
    },
    {
      name: 'Interview Systems Knowledge',
      description: 'Knowledgebase notes and trading systems interview prep',
      icon: '🔧',
      order: 3,
      resources: [
        {
          name: 'Knowledgebase Notes (SV)',
          type: 'NOTES',
          url: 'https://github.com/Shivam5022/Knowledgebase-SV/tree/main/notes',
          isMustDo: true,
          order: 0,
          units: [{ name: 'Topics', order: 0, subUnits: [
            { name: 'System Design & Interview Topics', order: 0, items: [
              { name: 'Networking Internals', type: 'READING', order: 0 },
              { name: 'OS Concepts Review', type: 'READING', order: 1 },
              { name: 'Low-Latency Systems', type: 'READING', order: 2 },
              { name: 'Cache & Memory Hierarchy', type: 'READING', order: 3 },
            ]},
          ]}],
        },
        {
          name: 'Trading Systems Developer Interview Guide',
          type: 'BOOK',
          url: 'https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/trading-systems-developer-interview-guide-c-edition-insiders-guide-to-top-tech-jobs-in-finance.pdf',
          isMustDo: true,
          order: 1,
          units: [{ name: 'Interview Topics', order: 0, subUnits: [
            { name: 'Key Areas', order: 0, items: [
              { name: 'C++ for Trading Systems', type: 'READING', order: 0 },
              { name: 'Market Data Processing', type: 'READING', order: 1 },
              { name: 'Order Execution Systems', type: 'READING', order: 2 },
              { name: 'Latency Optimization', type: 'READING', order: 3 },
            ]},
          ]}],
        },
      ],
    },
  ],
};
