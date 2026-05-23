/**
 * Default content seed data — Track 2: Software Engineer
 * Mapped to existing PrepForge database schema.
 */

export const SWE_TRACK = {
  name: "Software Engineer",
  description: "Rigorous preparation roadmap for competitive programming, computer networks, architecture, operating systems, database systems, low-latency trading systems, and professional modern C++.",
  icon: "💻",
  color: "#60a5fa",
  order: 1,
  categories: [
    {
      name: "Competitive Programming & DSA Foundations",
      order: 0,
      resources: [
        {
          name: "CSES Problem Set",
          type: "WEBSITE",
          order: 0,
          isMustDo: false,
          units: [
            {
              name: "Introductory Problems",
              order: 0,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Weird Algorithm",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1068"
                    },
                    {
                      name: "Missing Number",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1083"
                    },
                    {
                      name: "Repetitions",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1069"
                    },
                    {
                      name: "Increasing Array",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1094"
                    },
                    {
                      name: "Permutations",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1070"
                    },
                    {
                      name: "Number Spiral",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1071"
                    },
                    {
                      name: "Two Knights",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1072"
                    },
                    {
                      name: "Two Sets",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1092"
                    },
                    {
                      name: "Bit Strings",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1617"
                    },
                    {
                      name: "Trailing Zeros",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1618"
                    },
                    {
                      name: "Coin Piles",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/1754"
                    },
                    {
                      name: "Palindrome Reorder",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/1755"
                    },
                    {
                      name: "Gray Code",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/2205"
                    },
                    {
                      name: "Tower of Hanoi",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/2165"
                    },
                    {
                      name: "Creating Strings",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/1622"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 24",
                  order: 1,
                  items: [
                    {
                      name: "Apple Division",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1623"
                    },
                    {
                      name: "Chessboard and Queens",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1624"
                    },
                    {
                      name: "Raab Game I",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/3399"
                    },
                    {
                      name: "Mex Grid Construction",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/3419"
                    },
                    {
                      name: "Knight Moves Grid",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/3217"
                    },
                    {
                      name: "Grid Coloring I",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/3311"
                    },
                    {
                      name: "Digit Queries",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/2431"
                    },
                    {
                      name: "String Reorder",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1743"
                    },
                    {
                      name: "Grid Path Description",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1625"
                    }
                  ]
                }
              ]
            },
            {
              name: "Sorting and Searching",
              order: 1,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Distinct Numbers",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1621"
                    },
                    {
                      name: "Apartments",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1084"
                    },
                    {
                      name: "Ferris Wheel",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1090"
                    },
                    {
                      name: "Concert Tickets",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1091"
                    },
                    {
                      name: "Restaurant Customers",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1619"
                    },
                    {
                      name: "Movie Festival",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1629"
                    },
                    {
                      name: "Sum of Two Values",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1640"
                    },
                    {
                      name: "Maximum Subarray Sum",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1643"
                    },
                    {
                      name: "Stick Lengths",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1074"
                    },
                    {
                      name: "Missing Coin Sum",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/2183"
                    },
                    {
                      name: "Collecting Numbers",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/2216"
                    },
                    {
                      name: "Collecting Numbers II",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/2217"
                    },
                    {
                      name: "Playlist",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/1141"
                    },
                    {
                      name: "Towers",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/1073"
                    },
                    {
                      name: "Traffic Lights",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/1163"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 30",
                  order: 1,
                  items: [
                    {
                      name: "Distinct Values Subarrays",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3420"
                    },
                    {
                      name: "Distinct Values Subsequences",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/3421"
                    },
                    {
                      name: "Josephus Problem I",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/2162"
                    },
                    {
                      name: "Josephus Problem II",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/2163"
                    },
                    {
                      name: "Nested Ranges Check",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/2168"
                    },
                    {
                      name: "Nested Ranges Count",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/2169"
                    },
                    {
                      name: "Room Allocation",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1164"
                    },
                    {
                      name: "Factory Machines",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1620"
                    },
                    {
                      name: "Tasks and Deadlines",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1630"
                    },
                    {
                      name: "Reading Books",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1631"
                    },
                    {
                      name: "Sum of Three Values",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/1641"
                    },
                    {
                      name: "Sum of Four Values",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/1642"
                    },
                    {
                      name: "Nearest Smaller Values",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/1645"
                    },
                    {
                      name: "Subarray Sums I",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/1660"
                    },
                    {
                      name: "Subarray Sums II",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/1661"
                    }
                  ]
                },
                {
                  name: "Problems 31 to 35",
                  order: 2,
                  items: [
                    {
                      name: "Subarray Divisibility",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1662"
                    },
                    {
                      name: "Distinct Values Subarrays II",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/2428"
                    },
                    {
                      name: "Array Division",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1085"
                    },
                    {
                      name: "Movie Festival II",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1632"
                    },
                    {
                      name: "Maximum Subarray Sum II",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1644"
                    }
                  ]
                }
              ]
            },
            {
              name: "Dynamic Programming",
              order: 2,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Dice Combinations",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1633"
                    },
                    {
                      name: "Minimizing Coins",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1634"
                    },
                    {
                      name: "Coin Combinations I",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1635"
                    },
                    {
                      name: "Coin Combinations II",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1636"
                    },
                    {
                      name: "Removing Digits",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1637"
                    },
                    {
                      name: "Grid Paths I",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1638"
                    },
                    {
                      name: "Book Shop",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1158"
                    },
                    {
                      name: "Array Description",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1746"
                    },
                    {
                      name: "Counting Towers",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/2413"
                    },
                    {
                      name: "Edit Distance",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1639"
                    },
                    {
                      name: "Longest Common Subsequence",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/3403"
                    },
                    {
                      name: "Rectangle Cutting",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/1744"
                    },
                    {
                      name: "Minimal Grid Path",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/3359"
                    },
                    {
                      name: "Money Sums",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/1745"
                    },
                    {
                      name: "Removal Game",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/1097"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 23",
                  order: 1,
                  items: [
                    {
                      name: "Two Sets II",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1093"
                    },
                    {
                      name: "Mountain Range",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/3314"
                    },
                    {
                      name: "Increasing Subsequence",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1145"
                    },
                    {
                      name: "Projects",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1140"
                    },
                    {
                      name: "Elevator Rides",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1653"
                    },
                    {
                      name: "Counting Tilings",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/2181"
                    },
                    {
                      name: "Counting Numbers",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/2220"
                    },
                    {
                      name: "Increasing Subsequence II",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1748"
                    }
                  ]
                }
              ]
            },
            {
              name: "Graph Algorithms",
              order: 3,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Counting Rooms",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1192"
                    },
                    {
                      name: "Labyrinth",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1193"
                    },
                    {
                      name: "Building Roads",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1666"
                    },
                    {
                      name: "Message Route",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1667"
                    },
                    {
                      name: "Building Teams",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1668"
                    },
                    {
                      name: "Round Trip",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1669"
                    },
                    {
                      name: "Monsters",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1194"
                    },
                    {
                      name: "Shortest Routes I",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1671"
                    },
                    {
                      name: "Shortest Routes II",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1672"
                    },
                    {
                      name: "High Score",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1673"
                    },
                    {
                      name: "Flight Discount",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/1195"
                    },
                    {
                      name: "Cycle Finding",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/1197"
                    },
                    {
                      name: "Flight Routes",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/1196"
                    },
                    {
                      name: "Round Trip II",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/1678"
                    },
                    {
                      name: "Course Schedule",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/1679"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 30",
                  order: 1,
                  items: [
                    {
                      name: "Longest Flight Route",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1680"
                    },
                    {
                      name: "Game Routes",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1681"
                    },
                    {
                      name: "Investigation",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1202"
                    },
                    {
                      name: "Planets Queries I",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1750"
                    },
                    {
                      name: "Planets Queries II",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1160"
                    },
                    {
                      name: "Planets Cycles",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1751"
                    },
                    {
                      name: "Road Reparation",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1675"
                    },
                    {
                      name: "Road Construction",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1676"
                    },
                    {
                      name: "Flight Routes Check",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1682"
                    },
                    {
                      name: "Planets and Kingdoms",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1683"
                    },
                    {
                      name: "Giant Pizza",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/1684"
                    },
                    {
                      name: "Coin Collector",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/1686"
                    },
                    {
                      name: "Mail Delivery",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/1691"
                    },
                    {
                      name: "De Bruijn Sequence",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/1692"
                    },
                    {
                      name: "Teleporters Path",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/1693"
                    }
                  ]
                },
                {
                  name: "Problems 31 to 36",
                  order: 2,
                  items: [
                    {
                      name: "Hamiltonian Flights",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1690"
                    },
                    {
                      name: "Knight's Tour",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1689"
                    },
                    {
                      name: "Download Speed",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1694"
                    },
                    {
                      name: "Police Chase",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1695"
                    },
                    {
                      name: "School Dance",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1696"
                    },
                    {
                      name: "Distinct Routes",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1711"
                    }
                  ]
                }
              ]
            },
            {
              name: "Range Queries",
              order: 4,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Static Range Sum Queries",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1646"
                    },
                    {
                      name: "Static Range Minimum Queries",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1647"
                    },
                    {
                      name: "Dynamic Range Sum Queries",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1648"
                    },
                    {
                      name: "Dynamic Range Minimum Queries",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1649"
                    },
                    {
                      name: "Range Xor Queries",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1650"
                    },
                    {
                      name: "Range Update Queries",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1651"
                    },
                    {
                      name: "Forest Queries",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1652"
                    },
                    {
                      name: "Hotel Queries",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1143"
                    },
                    {
                      name: "List Removals",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1749"
                    },
                    {
                      name: "Salary Queries",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1144"
                    },
                    {
                      name: "Prefix Sum Queries",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/2166"
                    },
                    {
                      name: "Pizzeria Queries",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/2206"
                    },
                    {
                      name: "Visible Buildings Queries",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/3304"
                    },
                    {
                      name: "Range Interval Queries",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/3163"
                    },
                    {
                      name: "Subarray Sum Queries",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/1190"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 25",
                  order: 1,
                  items: [
                    {
                      name: "Subarray Sum Queries II",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3226"
                    },
                    {
                      name: "Distinct Values Queries",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1734"
                    },
                    {
                      name: "Distinct Values Queries II",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/3356"
                    },
                    {
                      name: "Increasing Array Queries",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/2416"
                    },
                    {
                      name: "Movie Festival Queries",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1664"
                    },
                    {
                      name: "Forest Queries II",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1739"
                    },
                    {
                      name: "Range Updates and Sums",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1735"
                    },
                    {
                      name: "Polynomial Queries",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1736"
                    },
                    {
                      name: "Range Queries and Copies",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1737"
                    },
                    {
                      name: "Missing Coin Sum Queries",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/2184"
                    }
                  ]
                }
              ]
            },
            {
              name: "Tree Algorithms",
              order: 5,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Subordinates",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1674"
                    },
                    {
                      name: "Tree Matching",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1130"
                    },
                    {
                      name: "Tree Diameter",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1131"
                    },
                    {
                      name: "Tree Distances I",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1132"
                    },
                    {
                      name: "Tree Distances II",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1133"
                    },
                    {
                      name: "Company Queries I",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1687"
                    },
                    {
                      name: "Company Queries II",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1688"
                    },
                    {
                      name: "Distance Queries",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1135"
                    },
                    {
                      name: "Counting Paths",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1136"
                    },
                    {
                      name: "Subtree Queries",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1137"
                    },
                    {
                      name: "Path Queries",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/1138"
                    },
                    {
                      name: "Path Queries II",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/2134"
                    },
                    {
                      name: "Distinct Colors",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/1139"
                    },
                    {
                      name: "Finding a Centroid",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/2079"
                    },
                    {
                      name: "Fixed-Length Paths I",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/2080"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 16",
                  order: 1,
                  items: [
                    {
                      name: "Fixed-Length Paths II",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/2081"
                    }
                  ]
                }
              ]
            },
            {
              name: "Mathematics",
              order: 6,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Josephus Queries",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/2164"
                    },
                    {
                      name: "Exponentiation",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1095"
                    },
                    {
                      name: "Exponentiation II",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1712"
                    },
                    {
                      name: "Counting Divisors",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1713"
                    },
                    {
                      name: "Common Divisors",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1081"
                    },
                    {
                      name: "Sum of Divisors",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1082"
                    },
                    {
                      name: "Divisor Analysis",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/2182"
                    },
                    {
                      name: "Prime Multiples",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/2185"
                    },
                    {
                      name: "Counting Coprime Pairs",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/2417"
                    },
                    {
                      name: "Next Prime",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/3396"
                    },
                    {
                      name: "Binomial Coefficients",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/1079"
                    },
                    {
                      name: "Creating Strings II",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/1715"
                    },
                    {
                      name: "Distributing Apples",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/1716"
                    },
                    {
                      name: "Christmas Party",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/1717"
                    },
                    {
                      name: "Permutation Order",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/3397"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 30",
                  order: 1,
                  items: [
                    {
                      name: "Permutation Rounds",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3398"
                    },
                    {
                      name: "Bracket Sequences I",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/2064"
                    },
                    {
                      name: "Bracket Sequences II",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/2187"
                    },
                    {
                      name: "Counting Necklaces",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/2209"
                    },
                    {
                      name: "Counting Grids",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/2210"
                    },
                    {
                      name: "Fibonacci Numbers",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1722"
                    },
                    {
                      name: "Throwing Dice",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1096"
                    },
                    {
                      name: "Graph Paths I",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1723"
                    },
                    {
                      name: "Graph Paths II",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1724"
                    },
                    {
                      name: "System of Linear Equations",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/3154"
                    },
                    {
                      name: "Sum of Four Squares",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/3355"
                    },
                    {
                      name: "Triangle Number Sums",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/3406"
                    },
                    {
                      name: "Dice Probability",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/1725"
                    },
                    {
                      name: "Moving Robots",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/1726"
                    },
                    {
                      name: "Candy Lottery",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/1727"
                    }
                  ]
                },
                {
                  name: "Problems 31 to 37",
                  order: 2,
                  items: [
                    {
                      name: "Inversion Probability",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1728"
                    },
                    {
                      name: "Stick Game",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1729"
                    },
                    {
                      name: "Nim Game I",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1730"
                    },
                    {
                      name: "Nim Game II",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1098"
                    },
                    {
                      name: "Stair Game",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1099"
                    },
                    {
                      name: "Grundy's Game",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/2207"
                    },
                    {
                      name: "Another Game",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/2208"
                    }
                  ]
                }
              ]
            },
            {
              name: "String Algorithms",
              order: 7,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Word Combinations",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1731"
                    },
                    {
                      name: "String Matching",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1753"
                    },
                    {
                      name: "Finding Borders",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1732"
                    },
                    {
                      name: "Finding Periods",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1733"
                    },
                    {
                      name: "Minimal Rotation",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1110"
                    },
                    {
                      name: "Longest Palindrome",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1111"
                    },
                    {
                      name: "All Palindromes",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/3138"
                    },
                    {
                      name: "Required Substring",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1112"
                    },
                    {
                      name: "Palindrome Queries",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/2420"
                    },
                    {
                      name: "Finding Patterns",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/2102"
                    },
                    {
                      name: "Counting Patterns",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/2103"
                    },
                    {
                      name: "Pattern Positions",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/2104"
                    },
                    {
                      name: "Distinct Substrings",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/2105"
                    },
                    {
                      name: "Distinct Subsequences",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/1149"
                    },
                    {
                      name: "Repeating Substring",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/2106"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 21",
                  order: 1,
                  items: [
                    {
                      name: "String Functions",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/2107"
                    },
                    {
                      name: "Inverse Suffix Array",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/3225"
                    },
                    {
                      name: "String Transform",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1113"
                    },
                    {
                      name: "Substring Order I",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/2108"
                    },
                    {
                      name: "Substring Order II",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/2109"
                    },
                    {
                      name: "Substring Distribution",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/2110"
                    }
                  ]
                }
              ]
            },
            {
              name: "Geometry",
              order: 8,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Point Location Test",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/2189"
                    },
                    {
                      name: "Line Segment Intersection",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/2190"
                    },
                    {
                      name: "Polygon Area",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/2191"
                    },
                    {
                      name: "Point in Polygon",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/2192"
                    },
                    {
                      name: "Polygon Lattice Points",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/2193"
                    },
                    {
                      name: "Minimum Euclidean Distance",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/2194"
                    },
                    {
                      name: "Convex Hull",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/2195"
                    },
                    {
                      name: "Maximum Manhattan Distances",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/3410"
                    },
                    {
                      name: "All Manhattan Distances",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/3411"
                    },
                    {
                      name: "Intersection Points",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1740"
                    },
                    {
                      name: "Line Segments Trace I",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/3427"
                    },
                    {
                      name: "Line Segments Trace II",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/3428"
                    },
                    {
                      name: "Lines and Queries I",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/3429"
                    },
                    {
                      name: "Lines and Queries II",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/3430"
                    },
                    {
                      name: "Area of Rectangles",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/1741"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 16",
                  order: 1,
                  items: [
                    {
                      name: "Robot Path",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1742"
                    }
                  ]
                }
              ]
            },
            {
              name: "Advanced Techniques",
              order: 9,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Meet in the Middle",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1628"
                    },
                    {
                      name: "Hamming Distance",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/2136"
                    },
                    {
                      name: "Corner Subgrid Check",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/3360"
                    },
                    {
                      name: "Corner Subgrid Count",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/2137"
                    },
                    {
                      name: "Reachable Nodes",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/2138"
                    },
                    {
                      name: "Reachability Queries",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/2143"
                    },
                    {
                      name: "Cut and Paste",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/2072"
                    },
                    {
                      name: "Substring Reversals",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/2073"
                    },
                    {
                      name: "Reversals and Sums",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/2074"
                    },
                    {
                      name: "Necessary Roads",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/2076"
                    },
                    {
                      name: "Necessary Cities",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/2077"
                    },
                    {
                      name: "Eulerian Subgraphs",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/2078"
                    },
                    {
                      name: "Monster Game I",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/2084"
                    },
                    {
                      name: "Monster Game II",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/2085"
                    },
                    {
                      name: "Subarray Squares",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/2086"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 25",
                  order: 1,
                  items: [
                    {
                      name: "Houses and Schools",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/2087"
                    },
                    {
                      name: "Knuth Division",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/2088"
                    },
                    {
                      name: "Apples and Bananas",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/2111"
                    },
                    {
                      name: "One Bit Positions",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/2112"
                    },
                    {
                      name: "Signal Processing",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/2113"
                    },
                    {
                      name: "New Roads Queries",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/2101"
                    },
                    {
                      name: "Dynamic Connectivity",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/2133"
                    },
                    {
                      name: "Parcel Delivery",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/2121"
                    },
                    {
                      name: "Task Assignment",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/2129"
                    },
                    {
                      name: "Distinct Routes II",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/2130"
                    }
                  ]
                }
              ]
            },
            {
              name: "Sliding Window Problems",
              order: 10,
              subUnits: [
                {
                  name: "Problems 1 to 11",
                  order: 0,
                  items: [
                    {
                      name: "Sliding Window Sum",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3220"
                    },
                    {
                      name: "Sliding Window Minimum",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/3221"
                    },
                    {
                      name: "Sliding Window Xor",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/3426"
                    },
                    {
                      name: "Sliding Window Or",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/3405"
                    },
                    {
                      name: "Sliding Window Distinct Values",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/3222"
                    },
                    {
                      name: "Sliding Window Mode",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/3224"
                    },
                    {
                      name: "Sliding Window Mex",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/3219"
                    },
                    {
                      name: "Sliding Window Median",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1076"
                    },
                    {
                      name: "Sliding Window Cost",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1077"
                    },
                    {
                      name: "Sliding Window Inversions",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/3223"
                    },
                    {
                      name: "Sliding Window Advertisement",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/3227"
                    }
                  ]
                }
              ]
            },
            {
              name: "Interactive Problems",
              order: 11,
              subUnits: [
                {
                  name: "Problems 1 to 6",
                  order: 0,
                  items: [
                    {
                      name: "Hidden Integer",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3112"
                    },
                    {
                      name: "Hidden Permutation",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/3139"
                    },
                    {
                      name: "K-th Highest Score",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/3305"
                    },
                    {
                      name: "Permuted Binary Strings",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/3228"
                    },
                    {
                      name: "Colored Chairs",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/3273"
                    },
                    {
                      name: "Inversion Sorting",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/3140"
                    }
                  ]
                }
              ]
            },
            {
              name: "Bitwise Operations",
              order: 12,
              subUnits: [
                {
                  name: "Problems 1 to 11",
                  order: 0,
                  items: [
                    {
                      name: "Counting Bits",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1146"
                    },
                    {
                      name: "Maximum Xor Subarray",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1655"
                    },
                    {
                      name: "Maximum Xor Subset",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/3191"
                    },
                    {
                      name: "Number of Subset Xors",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/3211"
                    },
                    {
                      name: "K Subset Xors",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/3192"
                    },
                    {
                      name: "All Subarray Xors",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/3233"
                    },
                    {
                      name: "Xor Pyramid Peak",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/2419"
                    },
                    {
                      name: "Xor Pyramid Diagonal",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/3194"
                    },
                    {
                      name: "Xor Pyramid Row",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/3195"
                    },
                    {
                      name: "SOS Bit Problem",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1654"
                    },
                    {
                      name: "And Subset Count",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/3141"
                    }
                  ]
                }
              ]
            },
            {
              name: "Construction Problems",
              order: 13,
              subUnits: [
                {
                  name: "Problems 1 to 8",
                  order: 0,
                  items: [
                    {
                      name: "Inverse Inversions",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/2214"
                    },
                    {
                      name: "Monotone Subsequences",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/2215"
                    },
                    {
                      name: "Third Permutation",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/3422"
                    },
                    {
                      name: "Permutation Prime Sums",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/3423"
                    },
                    {
                      name: "Chess Tournament",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1697"
                    },
                    {
                      name: "Distinct Sums Grid",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/3424"
                    },
                    {
                      name: "Filling Trominos",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/2423"
                    },
                    {
                      name: "Grid Path Construction",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/2418"
                    }
                  ]
                }
              ]
            },
            {
              name: "Advanced Graph Problems",
              order: 14,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Nearest Shops",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3303"
                    },
                    {
                      name: "Prüfer Code",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1134"
                    },
                    {
                      name: "Tree Traversals",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1702"
                    },
                    {
                      name: "Course Schedule II",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1757"
                    },
                    {
                      name: "Acyclic Graph Edges",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1756"
                    },
                    {
                      name: "Strongly Connected Edges",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/2177"
                    },
                    {
                      name: "Even Outdegree Edges",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/2179"
                    },
                    {
                      name: "Graph Girth",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1707"
                    },
                    {
                      name: "Fixed Length Walk Queries",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/3357"
                    },
                    {
                      name: "Transfer Speeds Sum",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/3111"
                    },
                    {
                      name: "MST Edge Check",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/3407"
                    },
                    {
                      name: "MST Edge Set Check",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/3408"
                    },
                    {
                      name: "MST Edge Cost",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/3409"
                    },
                    {
                      name: "Network Breakdown",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/1677"
                    },
                    {
                      name: "Tree Coin Collecting I",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/3114"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 28",
                  order: 1,
                  items: [
                    {
                      name: "Tree Coin Collecting II",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3149"
                    },
                    {
                      name: "Tree Isomorphism I",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1700"
                    },
                    {
                      name: "Tree Isomorphism II",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1701"
                    },
                    {
                      name: "Flight Route Requests",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1699"
                    },
                    {
                      name: "Critical Cities",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1703"
                    },
                    {
                      name: "Visiting Cities",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1203"
                    },
                    {
                      name: "Graph Coloring",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/3308"
                    },
                    {
                      name: "Bus Companies",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/3158"
                    },
                    {
                      name: "Split into Two Paths",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/3358"
                    },
                    {
                      name: "Network Renovation",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1704"
                    },
                    {
                      name: "Forbidden Cities",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/1705"
                    },
                    {
                      name: "Creating Offices",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/1752"
                    },
                    {
                      name: "New Flight Routes",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/1685"
                    }
                  ]
                }
              ]
            },
            {
              name: "Counting Problems",
              order: 15,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Filled Subgrid Count I",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3413"
                    },
                    {
                      name: "Filled Subgrid Count II",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/3414"
                    },
                    {
                      name: "All Letter Subgrid Count I",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/3415"
                    },
                    {
                      name: "All Letter Subgrid Count II",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/3416"
                    },
                    {
                      name: "Border Subgrid Count I",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/3417"
                    },
                    {
                      name: "Border Subgrid Count II",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/3418"
                    },
                    {
                      name: "Raab Game II",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/3400"
                    },
                    {
                      name: "Empty String",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1080"
                    },
                    {
                      name: "Permutation Inversions",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/2229"
                    },
                    {
                      name: "Counting Bishops",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/2176"
                    },
                    {
                      name: "Counting Sequences",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/2228"
                    },
                    {
                      name: "Grid Paths II",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/1078"
                    },
                    {
                      name: "Counting Permutations",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/1075"
                    },
                    {
                      name: "Grid Completion",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/2429"
                    },
                    {
                      name: "Counting Reorders",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/2421"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 18",
                  order: 1,
                  items: [
                    {
                      name: "Tournament Graph Distribution",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3232"
                    },
                    {
                      name: "Collecting Numbers Distribution",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/3157"
                    },
                    {
                      name: "Functional Graph Distribution",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/2415"
                    }
                  ]
                }
              ]
            },
            {
              name: "Additional Problems I",
              order: 16,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Shortest Subsequence",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1087"
                    },
                    {
                      name: "Distinct Values Sum",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/3150"
                    },
                    {
                      name: "Distinct Values Splits",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/3190"
                    },
                    {
                      name: "Swap Game",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1670"
                    },
                    {
                      name: "Beautiful Permutation II",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/3175"
                    },
                    {
                      name: "Multiplication Table",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/2422"
                    },
                    {
                      name: "Bubble Sort Rounds I",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/3151"
                    },
                    {
                      name: "Bubble Sort Rounds II",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/3152"
                    },
                    {
                      name: "Nearest Campsites I",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/3306"
                    },
                    {
                      name: "Nearest Campsites II",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/3307"
                    },
                    {
                      name: "Advertisement",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/1142"
                    },
                    {
                      name: "Special Substrings",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/2186"
                    },
                    {
                      name: "Counting LCM Arrays",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/3169"
                    },
                    {
                      name: "Square Subsets",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/3193"
                    },
                    {
                      name: "Subarray Sum Constraints",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/3294"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 30",
                  order: 1,
                  items: [
                    {
                      name: "Water Containers Moves",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3213"
                    },
                    {
                      name: "Water Containers Queries",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/3214"
                    },
                    {
                      name: "Stack Weights",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/2425"
                    },
                    {
                      name: "Maximum Average Subarrays",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/3301"
                    },
                    {
                      name: "Subsets with Fixed Average",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/3302"
                    },
                    {
                      name: "Two Array Average",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/3361"
                    },
                    {
                      name: "Pyramid Array",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1747"
                    },
                    {
                      name: "Permutation Subsequence",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/3404"
                    },
                    {
                      name: "Bit Inversions",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1188"
                    },
                    {
                      name: "Writing Numbers",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1086"
                    },
                    {
                      name: "Letter Pair Move Game",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/2427"
                    },
                    {
                      name: "Maximum Building I",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/1147"
                    },
                    {
                      name: "Sorting Methods",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/1162"
                    },
                    {
                      name: "Cyclic Array",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/1191"
                    },
                    {
                      name: "List of Sums",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/2414"
                    }
                  ]
                }
              ]
            },
            {
              name: "Additional Problems II",
              order: 17,
              subUnits: [
                {
                  name: "Problems 1 to 15",
                  order: 0,
                  items: [
                    {
                      name: "Bouncing Ball Steps",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3215"
                    },
                    {
                      name: "Bouncing Ball Cycle",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/3216"
                    },
                    {
                      name: "Knight Moves Queries",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/3218"
                    },
                    {
                      name: "K Subset Sums I",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/3108"
                    },
                    {
                      name: "K Subset Sums II",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/3109"
                    },
                    {
                      name: "Increasing Array II",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/2132"
                    },
                    {
                      name: "Food Division",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1189"
                    },
                    {
                      name: "Swap Round Sorting",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1698"
                    },
                    {
                      name: "Binary Subsequences",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/2430"
                    },
                    {
                      name: "School Excursion",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1706"
                    },
                    {
                      name: "Coin Grid",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/1709"
                    },
                    {
                      name: "Grid Coloring II",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/3312"
                    },
                    {
                      name: "Programmers and Artists",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/2426"
                    },
                    {
                      name: "Removing Digits II",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/2174"
                    },
                    {
                      name: "Coin Arrangement",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/2180"
                    }
                  ]
                },
                {
                  name: "Problems 16 to 30",
                  order: 1,
                  items: [
                    {
                      name: "Replace with Difference",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/3159"
                    },
                    {
                      name: "Grid Puzzle I",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/2432"
                    },
                    {
                      name: "Grid Puzzle II",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/2131"
                    },
                    {
                      name: "Bit Substrings",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/2115"
                    },
                    {
                      name: "Reversal Sorting",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/2075"
                    },
                    {
                      name: "Book Shop II",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1159"
                    },
                    {
                      name: "GCD Subsets",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/3161"
                    },
                    {
                      name: "Minimum Cost Pairs",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/3402"
                    },
                    {
                      name: "Same Sum Subsets",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/3425"
                    },
                    {
                      name: "Mex Grid Queries",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1157"
                    },
                    {
                      name: "Maximum Building II",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://cses.fi/problemset/task/1148"
                    },
                    {
                      name: "Stick Divisions",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://cses.fi/problemset/task/1161"
                    },
                    {
                      name: "Stick Difference",
                      type: "EXERCISE",
                      order: 12,
                      url: "https://cses.fi/problemset/task/3401"
                    },
                    {
                      name: "Coding Company",
                      type: "EXERCISE",
                      order: 13,
                      url: "https://cses.fi/problemset/task/1665"
                    },
                    {
                      name: "Two Stacks Sorting",
                      type: "EXERCISE",
                      order: 14,
                      url: "https://cses.fi/problemset/task/2402"
                    }
                  ]
                }
              ]
            }
          ],
          description: "Fundamental competitive programming problem set comprising 400 problems across 18 sections.",
          url: "https://cses.fi/problemset/"
        },
        {
          name: "Seasons of Code: Conquering Competitive Programming",
          type: "WEBSITE",
          order: 1,
          isMustDo: false,
          units: [
            {
              name: "Week 1 Syllabus & Practice",
              order: 0,
              subUnits: [
                {
                  name: "Weekly Theoretical Readings",
                  order: 0,
                  items: [
                    {
                      name: "Complete reading the first 4 chapters from [Competitive Programmer's Handbook](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Competitive%20Programmer_s%20Handbook.pdf?usp=drive_link).",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "Go through your CS101 slides or the link for basic algorithms such as [binary search](https://cp-algorithms.com/num_methods/binary_search.html), and sorting algorithms.",
                      type: "READING",
                      order: 1
                    }
                  ]
                },
                {
                  name: "Questions to be Submitted",
                  order: 1,
                  items: [
                    {
                      name: "Missing Number",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1083"
                    },
                    {
                      name: "Repetitions",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1069"
                    },
                    {
                      name: "Coins",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://codeforces.com/problemset/problem/1814/A"
                    },
                    {
                      name: "Lucky Numbers",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://codeforces.com/problemset/problem/1808/A"
                    },
                    {
                      name: "Weird Algorithm",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1068"
                    }
                  ]
                },
                {
                  name: "Practice Questions",
                  order: 2,
                  items: [
                    {
                      name: "Increasing Array",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1094"
                    },
                    {
                      name: "Towers of Hanoi",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/2165"
                    },
                    {
                      name: "Coin Piles",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1754"
                    },
                    {
                      name: "Walking Master",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://codeforces.com/problemset/problem/1806/A"
                    },
                    {
                      name: "Two Knights",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1072"
                    }
                  ]
                }
              ],
              description: "Syllabus, readings, and 150+ problem track for Week 1"
            },
            {
              name: "Week 2 Syllabus & Practice",
              order: 1,
              subUnits: [
                {
                  name: "Weekly Theoretical Readings",
                  order: 0,
                  items: [
                    {
                      name: "Go through [C++ sort](https://www.geeksforgeeks.org/sort-c-stl/) function.",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "Read Chapter 5 and Chapter 8 from this [Competitive Programmer's Handbook](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Competitive%20Programmer_s%20Handbook.pdf?usp=sharing).",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "Go through Chapters 4-5 and 8 from this [Guide to Competitive Programming](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Guide%20to%20Competitive%20Programming.pdf?usp=sharing).",
                      type: "READING",
                      order: 2
                    },
                    {
                      name: "Optional: Read Chapter-5 of this [Algorithm Design](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Algorithm%20Design%20(J.%20Kleinberg%2C%20E.%20Tardos).pdf).",
                      type: "READING",
                      order: 3
                    }
                  ]
                },
                {
                  name: "Questions to be Submitted",
                  order: 1,
                  items: [
                    {
                      name: "Playlist",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1141"
                    },
                    {
                      name: "Sum of Two Values",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1640"
                    },
                    {
                      name: "Sum of Three Values",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1641"
                    },
                    {
                      name: "Sliding Window Maximum",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://leetcode.com/problems/sliding-window-maximum/description/"
                    },
                    {
                      name: "Stick Lengths",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1074"
                    }
                  ]
                },
                {
                  name: "Practice Questions",
                  order: 2,
                  items: [
                    {
                      name: "Min Max Sort",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://codeforces.com/problemset/problem/1792/C"
                    },
                    {
                      name: "2^Sort",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://codeforces.com/problemset/problem/1692/G"
                    },
                    {
                      name: "Longest K-good segment",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://codeforces.com/contest/616/problem/D"
                    },
                    {
                      name: "Nested Ranges Count",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/2169#:~ =CSES%20%2D%20Nested%20Ranges%20Count&text=Given%20n%20ranges%2C%20your%20task,c%20and%20d%E2%89%A4b.&text=The%20first%20input%20line%20has,n%3A%20the%20number%20of%20ranges."
                    },
                    {
                      name: "Rooks Defenders",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://codeforces.com/problemset/problem/1679/C"
                    },
                    {
                      name: "Matryoshkas",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://codeforces.com/problemset/problem/1790/D"
                    },
                    {
                      name: "Playing in a casino",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://codeforces.com/problemset/problem/1808/B"
                    },
                    {
                      name: "Sum of four values",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/1642"
                    },
                    {
                      name: "Sliding Window Median",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1076"
                    },
                    {
                      name: "Sliding Window Cost",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1077"
                    },
                    {
                      name: "Fun Problem",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://codeforces.com/contest/1764/problem/G2"
                    }
                  ]
                }
              ],
              description: "Syllabus, readings, and 150+ problem track for Week 2"
            },
            {
              name: "Week 3 Syllabus & Practice",
              order: 2,
              subUnits: [
                {
                  name: "Weekly Theoretical Readings",
                  order: 0,
                  items: [
                    {
                      name: "Read Chapters 6, 7 and 10 from [Competitive Programmer's Handbook](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Competitive%20Programmer_s%20Handbook.pdf?usp=sharing).",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "Read Chapter 6 from [Guide to Competitive Programming](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Guide%20to%20Competitive%20Programming.pdf?usp=sharing).",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "If you have time, then please read Chapters 4 and 6 from [Algorithm Design](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Algorithm%20Design%20(J.%20Kleinberg%2C%20E.%20Tardos).pdf). It is a great resource for greedy-dp. A shorter version can be found [CS218](https://www.cse.iitb.ac.in/~rgurjar/CS218-2024/). Another resource: [Chapters 14-15](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Introduction%20to%20Algorithms.pdf?usp=sharing). These techniques are widely used in a variety of questions. So, better to read and practice as much as you can!",
                      type: "READING",
                      order: 2
                    },
                    {
                      name: "If you are unable to understand DP through the above resources, then you can watch these [videos](https://www.youtube.com/watch?v=OQ5jsbhAv_M&list=PLZES21J5RvsHOeSW9Vrvo0EEc2juNe3tX) (maybe the starting 2-3 at 2X). You can also study Chapter 11 from [Programming Challenges](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/b2-programming_challenges.pdf).",
                      type: "READING",
                      order: 3
                    },
                    {
                      name: "(Optional) Complete the first 7 problems from this [contest](https://codeforces.com/contest/1873) within a duration of 2.5 hrs. This will help you in increasing your speed for further contests.",
                      type: "READING",
                      order: 4
                    }
                  ]
                },
                {
                  name: "Questions to be Submitted",
                  order: 1,
                  items: [
                    {
                      name: "Tasks and Deadlines",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1630"
                    },
                    {
                      name: "Factory Machines",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1620"
                    },
                    {
                      name: "Dice Combinations",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1633"
                    },
                    {
                      name: "Edit Distance",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1639"
                    },
                    {
                      name: "Counting Towers",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/2413"
                    },
                    {
                      name: "Knapsack",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://atcoder.jp/contests/dp/tasks/dp_e"
                    },
                    {
                      name: "Stick Divisions",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1161"
                    },
                    {
                      name: "Sequence",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://codeforces.com/problemset/problem/13/C"
                    }
                  ]
                },
                {
                  name: "Practice Questions",
                  order: 2,
                  items: [
                    {
                      name: "Making anti-palindromes",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://codeforces.com/contest/1822/problem/E"
                    },
                    {
                      name: "Caesar’s Legion",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://codeforces.com/contest/118/problem/D"
                    },
                    {
                      name: "Minimize Median",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://icpc.codedrills.io/contests/icpc-asia-west-continent-final-contest-2022/problems/minimize-median"
                    },
                    {
                      name: "Running Miles",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://codeforces.com/problemset/problem/1826/D"
                    },
                    {
                      name: "Baby Ehab Partitions Again",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://codeforces.com/contest/1516/problem/C"
                    },
                    {
                      name: "Counting Tiles",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/2181"
                    },
                    {
                      name: "Projects",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1140"
                    },
                    {
                      name: "Counting Numbers",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/2220"
                    },
                    {
                      name: "Search in Parallel",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://codeforces.com/problemset/problem/1814/C"
                    },
                    {
                      name: "LCS",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://atcoder.jp/contests/dp/tasks/dp_f"
                    },
                    {
                      name: "Minimizing the Sum",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://codeforces.com/contest/1969/problem/C"
                    },
                    {
                      name: "Almost Increasing Subsequence",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://codeforces.com/problemset/problem/1817/A"
                    }
                  ]
                }
              ],
              description: "Syllabus, readings, and 150+ problem track for Week 3"
            },
            {
              name: "Week 4 Syllabus & Practice",
              order: 3,
              subUnits: [
                {
                  name: "Weekly Theoretical Readings",
                  order: 0,
                  items: [
                    {
                      name: "Read Chapters 21,22,23,24,25 from [Competitive Programmer's Handbook](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Competitive%20Programmer_s%20Handbook.pdf?usp=sharing).",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "Go through Chapter 11 from [Guide to Competitive Programming](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Guide%20to%20Competitive%20Programming.pdf?usp=sharing).",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "(Optional) Read Chapter 31 from [Introduction to Algorithms](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Introduction%20to%20Algorithms.pdf).",
                      type: "READING",
                      order: 2
                    },
                    {
                      name: "(Optional) Complete Chapter 5 from [Steven](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Steven-Halim_-Felix-Halim-Competitive-Programming-3_-The-New-Lower-Bound-of-Programming-Contests-Lulu.com-_2013_.pdf).",
                      type: "READING",
                      order: 3
                    },
                    {
                      name: "(Optional) Complete Chapters 6 and 7 from [Programming Challenges](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/b2-programming_challenges.pdf).",
                      type: "READING",
                      order: 4
                    },
                    {
                      name: "Now, you can start appearing for [codeforces contests](https://codeforces.com/contests). They are typically divided into four divisions. Go through some of the problems from each division, to get an idea of their difficulty levels. If you can’t appear for live contests (the timings are roughly 8-10 pm IST), then try to solve the problems in some other 2-hour seating (you can use “[virtual contest](https://codeforces.com/blog/entry/70036)” feature).",
                      type: "READING",
                      order: 5
                    }
                  ]
                },
                {
                  name: "Questions to be Submitted",
                  order: 1,
                  items: [
                    {
                      name: "Exponentiation II",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1712"
                    },
                    {
                      name: "Sum of Divisors",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1082"
                    },
                    {
                      name: "Binomial Coefficients",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1079"
                    },
                    {
                      name: "Distributing Apples",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1716"
                    },
                    {
                      name: "Inversion Probability",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1728"
                    },
                    {
                      name: "Nim Game I",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1730"
                    },
                    {
                      name: "Grundy’s Game",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/2207"
                    },
                    {
                      name: "Divisor Analysis",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://cses.fi/problemset/task/2182"
                    },
                    {
                      name: "Climbing the Tree",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://codeforces.com/problemset/problem/1810/D"
                    },
                    {
                      name: "Two Divisors",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://codeforces.com/problemset/problem/1366/D"
                    }
                  ]
                },
                {
                  name: "Practice Questions",
                  order: 2,
                  items: [
                    {
                      name: "Bracket Sequences II",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/2187"
                    },
                    {
                      name: "Factorials and Powers of Two",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://codeforces.com/contest/1646/problem/C"
                    },
                    {
                      name: "Controllers",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://codeforces.com/problemset/problem/1776/L"
                    },
                    {
                      name: "Counting Necklaces",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/2209"
                    },
                    {
                      name: "Nim Game II",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://cses.fi/problemset/task/1098"
                    },
                    {
                      name: "Candy Lottery",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1727"
                    },
                    {
                      name: "Product 1 Modulo N",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://codeforces.com/contest/1514/problem/C"
                    },
                    {
                      name: "Three Integers",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://codeforces.com/problemset/problem/1311/D"
                    },
                    {
                      name: "Add one",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://codeforces.com/contest/1513/problem/C"
                    },
                    {
                      name: "Kuroni",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://codeforces.com/problemset/problem/1305/C"
                    },
                    {
                      name: "Jellyfish and Green Apple",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://codeforces.com/problemset/problem/1875/C"
                    },
                    {
                      name: "Buying Jewels",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://codeforces.com/problemset/problem/1951/D"
                    }
                  ]
                }
              ],
              description: "Syllabus, readings, and 150+ problem track for Week 4"
            },
            {
              name: "Week 5 Syllabus & Practice",
              order: 4,
              subUnits: [
                {
                  name: "Weekly Theoretical Readings",
                  order: 0,
                  items: [
                    {
                      name: "Complete all the reading material/questions from the previous weeks (if you have anything left).",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "Read Chapters 11,12,13,14 from [Competitive Programmer's Handbook](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Competitive%20Programmer_s%20Handbook.pdf?usp=sharing).",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "Read sections 7.1, 7.2 and 10.1 from [Guide to Competitive Programming](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Guide%20to%20Competitive%20Programming.pdf?usp=sharing).",
                      type: "READING",
                      order: 2
                    },
                    {
                      name: "(Optional) Read Chapter 20 from [Introduction to Algorithms](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Introduction%20to%20Algorithms.pdf). Read Week-11 and Week-12 material from [CS213](https://www.cse.iitb.ac.in/~akg/courses/2023-ds/).",
                      type: "READING",
                      order: 3
                    },
                    {
                      name: "(Optional, but if you have time, then please do so) Complete this [contest](https://codeforces.com/contest/1985).\t&nbsp;&nbsp; &nbsp;&nbsp; [<span style=\"color:red\"><b>[Solution]</b></span>](https://codeforces.com/blog/entry/129620)",
                      type: "READING",
                      order: 4
                    },
                    {
                      name: "(Optional) Complete this [contest](https://codeforces.com/contest/1978).\t\t\t\t\t\t&nbsp;&nbsp; &nbsp;&nbsp; [<span style=\"color:red\"><b>[Solution]</b></span>](https://codeforces.com/blog/entry/130527)",
                      type: "READING",
                      order: 5
                    }
                  ]
                },
                {
                  name: "Questions to be Submitted",
                  order: 1,
                  items: [
                    {
                      name: "Longest Regular Bracket Sequence",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://codeforces.com/problemset/problem/5/C"
                    },
                    {
                      name: "Magnitude - Hard",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://codeforces.com/contest/1984/problem/C2"
                    },
                    {
                      name: "Large Addition",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://codeforces.com/contest/1984/problem/B"
                    }
                  ]
                },
                {
                  name: "Optional Questions",
                  order: 2,
                  items: [
                    {
                      name: "Long Legs",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://codeforces.com/problemset/problem/1814/B"
                    },
                    {
                      name: "Exam in MAC",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://codeforces.com/problemset/problem/1935/D"
                    },
                    {
                      name: "Cobb",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://codeforces.com/problemset/problem/1554/B"
                    },
                    {
                      name: "Colored Rectangles",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://codeforces.com/contest/1398/problem/D"
                    },
                    {
                      name: "Modulo Sum",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://codeforces.com/problemset/problem/577/B"
                    },
                    {
                      name: "The least round way",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://codeforces.com/problemset/problem/2/B"
                    },
                    {
                      name: "Odd-Even Subsequence",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://codeforces.com/problemset/problem/1370/D"
                    },
                    {
                      name: "Placing Jinas",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://codeforces.com/contest/1696/problem/E"
                    },
                    {
                      name: "Fibonacci Strings",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://codeforces.com/problemset/problem/1718/B"
                    },
                    {
                      name: "Yet Another Yet Another Task",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://codeforces.com/problemset/problem/1359/D"
                    }
                  ]
                }
              ],
              description: "Syllabus, readings, and 150+ problem track for Week 5"
            },
            {
              name: "Week 6 Syllabus & Practice",
              order: 5,
              subUnits: [
                {
                  name: "Weekly Theoretical Readings",
                  order: 0,
                  items: [
                    {
                      name: "Read Chapters 15,16,17,18,19,20 from [Competitive Programmer's Handbook](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Competitive%20Programmer_s%20Handbook.pdf). These topics are not much relevant to the basic CP questions, but will surely help in case you plan to pursue a Data Structures and Algorithms course in your future. (Core course for CSE, can also be taken under CS Minor)",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "Complete Chapters 7 and 10 from [Guide to Competitive Programming](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Guide%20to%20Competitive%20Programming.pdf).",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "(Optional) Read Week-13 and week-14 material from [CS213](https://www.cse.iitb.ac.in/~akg/courses/2023-ds/). If you are too much interested in Graph Theory, then please read Chapters 21, 22, 23, 24, 25 from [Introduction to Algorithms](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Introduction%20to%20Algorithms.pdf) (Too much to be done in a week, you can maybe read the relevant sections, and as and when you get time, complete the others. Solutions to this book can be found at [CLRS Solutions](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/CLRS%20Solutions%203rd%20Ed..pdf).)",
                      type: "READING",
                      order: 2
                    },
                    {
                      name: "(Optional) Complete Chapter 7 from [Algorithm Design](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Algorithm%20Design%20(J.%20Kleinberg%2C%20E.%20Tardos).pdf) (Not much relevant to CP, but has great practical applications).",
                      type: "READING",
                      order: 3
                    }
                  ]
                },
                {
                  name: "Questions to be Submitted",
                  order: 1,
                  items: [
                    {
                      name: "Art Gallery on Graph",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://atcoder.jp/contests/abc305/tasks/abc305_e"
                    },
                    {
                      name: "Round Trip",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1669"
                    },
                    {
                      name: "Game Routes",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1681"
                    },
                    {
                      name: "Round Dance",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://codeforces.com/problemset/problem/1833/E"
                    },
                    {
                      name: "Longest Path",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://atcoder.jp/contests/dp/tasks/dp_g"
                    },
                    {
                      name: "Giant Pizza",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1684"
                    },
                    {
                      name: "Tree Distances I",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://cses.fi/problemset/task/1132"
                    },
                    {
                      name: "Walk",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://atcoder.jp/contests/dp/tasks/dp_r"
                    },
                    {
                      name: "Military Problem",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://codeforces.com/problemset/problem/1006/E"
                    }
                  ]
                },
                {
                  name: "Practice Questions",
                  order: 2,
                  items: [
                    {
                      name: "Friendly Spiders",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://codeforces.com/problemset/problem/1775/D"
                    },
                    {
                      name: "Fair",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://codeforces.com/contest/986/problem/A"
                    },
                    {
                      name: "Apple Tree",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://codeforces.com/contest/1843/problem/D"
                    },
                    {
                      name: "Nearest Opposite Party",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://codeforces.com/contest/1272/problem/E"
                    },
                    {
                      name: "Ksyusha and Chinchilla",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://codeforces.com/problemset/problem/1833/G"
                    },
                    {
                      name: "Cyclic Operations",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://codeforces.com/problemset/problem/1867/D"
                    }
                  ]
                }
              ],
              description: "Syllabus, readings, and 150+ problem track for Week 6"
            },
            {
              name: "Week 7 Syllabus & Practice",
              order: 6,
              subUnits: [
                {
                  name: "Weekly Theoretical Readings",
                  order: 0,
                  items: [
                    {
                      name: "Complete Chapters 9, 26, 28 from [Competitive Programmer's Handbook](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Competitive%20Programmer_s%20Handbook.pdf).",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "Complete Chapters 9, 14 from [Guide to Competitive Programming](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Guide%20to%20Competitive%20Programming.pdf).",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "(Optional) Chapter 6 from [Steven](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Steven-Halim_-Felix-Halim-Competitive-Programming-3_-The-New-Lower-Bound-of-Programming-Contests-Lulu.com-_2013_.pdf).",
                      type: "READING",
                      order: 2
                    },
                    {
                      name: "(Optional but recommended) Complete Week 6 from [CS213](https://www.cse.iitb.ac.in/~akg/courses/2023-ds/). A detailed version can be found as Chapter 32 from [Introduction to Algorithms](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Introduction%20to%20Algorithms.pdf).",
                      type: "READING",
                      order: 3
                    }
                  ]
                },
                {
                  name: "Questions to be Submitted",
                  order: 1,
                  items: [
                    {
                      name: "Static Range Sum Queries",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/1646"
                    },
                    {
                      name: "Static Range Minimum Queries",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1647"
                    },
                    {
                      name: "Word Combinations",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/1731"
                    },
                    {
                      name: "Finding Periods",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1733"
                    },
                    {
                      name: "Decreasing String",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://codeforces.com/problemset/problem/1886/C"
                    },
                    {
                      name: "Clear the string",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://codeforces.com/problemset/problem/1132/F"
                    },
                    {
                      name: "Kirei and the Linear Function",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://codeforces.com/problemset/problem/1729/F"
                    }
                  ]
                },
                {
                  name: "Optional Questions",
                  order: 2,
                  items: [
                    {
                      name: "K-beautiful strings",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://codeforces.com/problemset/problem/1493/C"
                    },
                    {
                      name: "Hotel Queries",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/1143"
                    },
                    {
                      name: "Pattern Positions",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/2104"
                    },
                    {
                      name: "Finding Borders",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/1732"
                    },
                    {
                      name: "Queue Using Two Stacks",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://www.hackerrank.com/challenges/queue-using-two-stacks/problem"
                    },
                    {
                      name: "List Removals",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://cses.fi/problemset/task/1749"
                    },
                    {
                      name: "Peculiar Movie Preferences",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://codeforces.com/problemset/problem/1628/B"
                    },
                    {
                      name: "Gambling",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://codeforces.com/contest/1692/problem/H"
                    },
                    {
                      name: "Dynamic Range Minimum Queries",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://cses.fi/problemset/task/1649"
                    },
                    {
                      name: "Forest Queries",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://cses.fi/problemset/task/1652"
                    },
                    {
                      name: "Work Group",
                      type: "EXERCISE",
                      order: 10,
                      url: "https://codeforces.com/problemset/problem/533/B"
                    },
                    {
                      name: "“A” String Problem",
                      type: "EXERCISE",
                      order: 11,
                      url: "https://codeforces.com/problemset/problem/1984/D"
                    }
                  ]
                }
              ],
              description: "Syllabus, readings, and 150+ problem track for Week 7"
            },
            {
              name: "Week 8 Syllabus & Practice",
              order: 7,
              subUnits: [
                {
                  name: "Weekly Theoretical Readings",
                  order: 0,
                  items: [
                    {
                      name: "Complete Chapters 27, 29, 30 from [Competitive Programmer's Handbook](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Competitive%20Programmer_s%20Handbook.pdf). These topics are not much relevant to the core CP algorithms but are often asked in contests.",
                      type: "READING",
                      order: 0
                    },
                    {
                      name: "Complete Chapters 13, 15 from [Guide to Competitive Programming](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Guide%20to%20Competitive%20Programming.pdf).",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "(Optional but recommended, might take some extra time) Complete Chapters 7, 8, 9 from [Steven](https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Steven-Halim_-Felix-Halim-Competitive-Programming-3_-The-New-Lower-Bound-of-Programming-Contests-Lulu.com-_2013_.pdf).",
                      type: "READING",
                      order: 2
                    },
                    {
                      name: "(Optional) Complete this [contest](https://codeforces.com/contest/1992).\t\t\t\t&nbsp;&nbsp; &nbsp;&nbsp; [<span style=\"color:red\"><b>[Solution]</b></span>](https://codeforces.com/blog/entry/131461)",
                      type: "READING",
                      order: 3
                    },
                    {
                      name: "(Optional) Complete A-E from this [contest](https://codeforces.com/contest/1994).\t\t\t&nbsp;&nbsp; &nbsp;&nbsp; [<span style=\"color:red\"><b>[Solution]</b></span>](https://codeforces.com/blog/entry/131666)",
                      type: "READING",
                      order: 4
                    }
                  ]
                },
                {
                  name: "Questions to be Submitted",
                  order: 1,
                  items: [
                    {
                      name: "Point Location Test",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/2189"
                    },
                    {
                      name: "Line Segment Intersection",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/2190"
                    },
                    {
                      name: "Polygon Area",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/2191"
                    },
                    {
                      name: "Point in Polygon",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://cses.fi/problemset/task/2192"
                    }
                  ]
                },
                {
                  name: "Practice Questions",
                  order: 2,
                  items: [
                    {
                      name: "Polygon Lattice Points",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://cses.fi/problemset/task/2193"
                    },
                    {
                      name: "Minimum Euclidean Distance",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://cses.fi/problemset/task/2194"
                    },
                    {
                      name: "Convex Hull",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://cses.fi/problemset/task/2195"
                    },
                    {
                      name: "Find a Mine",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://codeforces.com/problemset/problem/1934/C"
                    }
                  ]
                },
                {
                  name: "Optional Questions",
                  order: 3,
                  items: [
                    {
                      name: "Ntarsis’s Set",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://codeforces.com/problemset/problem/1852/A"
                    },
                    {
                      name: "Ranom",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://codeforces.com/problemset/problem/1841/C"
                    },
                    {
                      name: "Count GCD",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://codeforces.com/problemset/problem/1750/D"
                    },
                    {
                      name: "Swap Dilemma",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://codeforces.com/contest/1983/problem/D"
                    },
                    {
                      name: "Buying Gifts",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://codeforces.com/problemset/problem/1801/B"
                    },
                    {
                      name: "Absolute Beauty",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://codeforces.com/problemset/problem/1898/D"
                    },
                    {
                      name: "Many Perfect Squares",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://codeforces.com/problemset/problem/1781/D"
                    },
                    {
                      name: "Yet Another Minimization Problem",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://codeforces.com/problemset/problem/1637/D"
                    },
                    {
                      name: "Hot Black Hot White",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://codeforces.com/problemset/problem/1725/H"
                    },
                    {
                      name: "River Locks",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://codeforces.com/contest/1700/problem/D"
                    }
                  ]
                }
              ],
              description: "Syllabus, readings, and 150+ problem track for Week 8"
            }
          ],
          description: "Topic-wise structured resources and roughly 150 problems spanning 8 weeks of intensive learning.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming"
        },
        {
          name: "Steven Halim - Competitive Programming 3",
          type: "BOOK",
          order: 2,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: Introduction",
              order: 0,
              subUnits: [
                {
                  name: "Core Concepts",
                  order: 0,
                  items: [
                    { name: "1.1 Competitive Programming", type: "CONCEPT", order: 0 },
                    {
                      name: "1.2 Typical Tips for Competitive Programming",
                      type: "CONCEPT",
                      order: 1
                    },
                    { name: "1.3 Getting Started", type: "CONCEPT", order: 2 },
                    { name: "1.4 The C++ Standard Template Library", type: "CONCEPT", order: 3 },
                    {
                      name: "1.5 Data Structures with Built-in Libraries",
                      type: "CONCEPT",
                      order: 4
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Data Structures and Libraries",
              order: 1,
              subUnits: [
                {
                  name: "Core Concepts",
                  order: 0,
                  items: [
                    { name: "2.1 Linear Data Structures", type: "CONCEPT", order: 0 },
                    { name: "2.2 Non-Linear Data Structures", type: "CONCEPT", order: 1 },
                    { name: "2.3 Data Structures with Custom Libraries", type: "CONCEPT", order: 2 },
                    { name: "2.4 Segment Trees and Fenwick Trees", type: "CONCEPT", order: 3 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Problem Solving Paradigms",
              order: 2,
              subUnits: [
                {
                  name: "Core Concepts",
                  order: 0,
                  items: [
                    { name: "3.1 Complete Search", type: "CONCEPT", order: 0 },
                    { name: "3.2 Divide and Conquer", type: "CONCEPT", order: 1 },
                    { name: "3.3 Greedy", type: "CONCEPT", order: 2 },
                    { name: "3.4 Dynamic Programming", type: "CONCEPT", order: 3 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: Graph",
              order: 3,
              subUnits: [
                {
                  name: "Core Concepts",
                  order: 0,
                  items: [
                    { name: "4.1 Graph Representation", type: "CONCEPT", order: 0 },
                    { name: "4.2 Depth First Search (DFS)", type: "CONCEPT", order: 1 },
                    { name: "4.3 Breadth First Search (BFS)", type: "CONCEPT", order: 2 },
                    { name: "4.4 Kruskal's & Prim's algorithms", type: "CONCEPT", order: 3 },
                    {
                      name: "4.5 Dijkstra's & Bellman Ford's algorithms",
                      type: "CONCEPT",
                      order: 4
                    },
                    { name: "4.6 Floyd Warshall's algorithm", type: "CONCEPT", order: 5 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: Mathematics",
              order: 4,
              subUnits: [
                {
                  name: "Core Concepts",
                  order: 0,
                  items: [
                    { name: "5.1 Ad Hoc Mathematics Problems", type: "CONCEPT", order: 0 },
                    { name: "5.2 Number Theory", type: "CONCEPT", order: 1 },
                    { name: "5.3 Probability Theory", type: "CONCEPT", order: 2 },
                    { name: "5.4 Combinatorics", type: "CONCEPT", order: 3 },
                    { name: "5.5 Game Theory", type: "CONCEPT", order: 4 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: String Processing",
              order: 5,
              subUnits: [
                {
                  name: "Core Concepts",
                  order: 0,
                  items: [
                    { name: "6.1 Basic String Processing", type: "CONCEPT", order: 0 },
                    { name: "6.2 String Matching", type: "CONCEPT", order: 1 },
                    { name: "6.3 Suffix Tree & Suffix Array", type: "CONCEPT", order: 2 },
                    { name: "6.4 Dynamic Programming on Strings", type: "CONCEPT", order: 3 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 7: (Computational) Geometry",
              order: 6,
              subUnits: [
                {
                  name: "Core Concepts",
                  order: 0,
                  items: [
                    { name: "7.1 Basic Geometry Objects", type: "CONCEPT", order: 0 },
                    { name: "7.2 Basic Geometry Algorithms", type: "CONCEPT", order: 1 },
                    { name: "7.3 Convex Hull", type: "CONCEPT", order: 2 },
                    { name: "7.4 Sweep Line", type: "CONCEPT", order: 3 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 8: More Advanced Topics",
              order: 7,
              subUnits: [
                {
                  name: "Core Concepts",
                  order: 0,
                  items: [
                    { name: "8.1 More Advanced Search Techniques", type: "CONCEPT", order: 0 },
                    { name: "8.2 More Advanced DP Techniques", type: "CONCEPT", order: 1 },
                    { name: "8.3 Network Flow", type: "CONCEPT", order: 2 },
                    { name: "8.4 NP-hard / NP-complete problems", type: "CONCEPT", order: 3 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 9: Rare Topics",
              order: 8,
              subUnits: [
                {
                  name: "Core Concepts",
                  order: 0,
                  items: [
                    { name: "9.1 Matrix Exponentiation", type: "CONCEPT", order: 0 },
                    { name: "9.2 Heavy-Light Decomposition", type: "CONCEPT", order: 1 },
                    { name: "9.3 Tree Splicing & Treaps", type: "CONCEPT", order: 2 },
                    { name: "9.4 Fast Fourier Transform", type: "CONCEPT", order: 3 }
                  ]
                }
              ]
            }
          ],
          description: "The classic reference book for Competitive Programming data structures, paradigms, and advanced algorithms.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/Steven-Halim_-Felix-Halim-Competitive-Programming-3_-The-New-Lower-Bound-of-Programming-Contests-Lulu.com-_2013_.pdf"
        },
        {
          name: "Competitive Programmer's Handbook (CPH)",
          type: "BOOK",
          order: 3,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: Introduction",
              order: 0,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 1: Introduction", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Time complexity",
              order: 1,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 2: Time complexity", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Sorting",
              order: 2,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 3: Sorting", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: Data structures",
              order: 3,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 4: Data structures", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: Complete search",
              order: 4,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 5: Complete search", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: Greedy algorithms",
              order: 5,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 6: Greedy algorithms", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 7: Dynamic programming",
              order: 6,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 7: Dynamic programming",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 8: Amortized analysis",
              order: 7,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 8: Amortized analysis", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 9: Range queries",
              order: 8,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 9: Range queries", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 10: Bit manipulation",
              order: 9,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 10: Bit manipulation", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 11: Basics of graphs",
              order: 10,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 11: Basics of graphs", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 12: Graph traversal",
              order: 11,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 12: Graph traversal", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 13: Shortest paths",
              order: 12,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 13: Shortest paths", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 14: Tree algorithms",
              order: 13,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 14: Tree algorithms", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 15: Spanning trees",
              order: 14,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 15: Spanning trees", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 16: Directed graphs",
              order: 15,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 16: Directed graphs", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 17: Strong connectivity",
              order: 16,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 17: Strong connectivity",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 18: Tree queries",
              order: 17,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 18: Tree queries", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 19: Paths and circuits",
              order: 18,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 19: Paths and circuits",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 20: Flows and cuts",
              order: 19,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 20: Flows and cuts", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 21: Number theory",
              order: 20,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 21: Number theory", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 22: Combinatorics",
              order: 21,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 22: Combinatorics", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 23: Matrices",
              order: 22,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 23: Matrices", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 24: Probability",
              order: 23,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 24: Probability", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 25: Game theory",
              order: 24,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 25: Game theory", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 26: String algorithms",
              order: 25,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 26: String algorithms", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 27: Square root algorithms",
              order: 26,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 27: Square root algorithms",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 28: Segment trees revisited",
              order: 27,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 28: Segment trees revisited",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 29: Geometry",
              order: 28,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 29: Geometry", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 30: Sweep line algorithms",
              order: 29,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 30: Sweep line algorithms",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 31: Gaps and grids",
              order: 30,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 31: Gaps and grids", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 32: Minimal and maximal values",
              order: 31,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 32: Minimal and maximal values",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 33: Advanced graph algorithms",
              order: 32,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 33: Advanced graph algorithms",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 34: NP-hard problems",
              order: 33,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 34: NP-hard problems", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 35: Appendix: Mathematical background",
              order: 34,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 35: Appendix: Mathematical background",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            }
          ],
          description: "A modern handbook detailing standard algorithms and techniques for competitive programming.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/book.pdf"
        },
        {
          name: "Guide to Competitive Programming",
          type: "BOOK",
          order: 4,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: Introduction",
              order: 0,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 1: Introduction", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Programming Techniques",
              order: 1,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 2: Programming Techniques",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Efficiency",
              order: 2,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 3: Efficiency", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: Data Structures",
              order: 3,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 4: Data Structures", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: Graph Algorithms",
              order: 4,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 5: Graph Algorithms", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: Dynamic Programming",
              order: 5,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 6: Dynamic Programming",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 7: Advanced Graph Algorithms",
              order: 6,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 7: Advanced Graph Algorithms",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 8: Range Queries",
              order: 7,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 8: Range Queries", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 9: String Algorithms",
              order: 8,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 9: String Algorithms", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 10: Mathematical Algorithms",
              order: 9,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 10: Mathematical Algorithms",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 11: Geometry",
              order: 10,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 11: Geometry", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 12: Advanced Search",
              order: 11,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 12: Advanced Search", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 13: Extra Techniques",
              order: 12,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 13: Extra Techniques", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 14: Appendix A: C++ Language Features",
              order: 13,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 14: Appendix A: C++ Language Features",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 15: Appendix B: Bibliography",
              order: 14,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 15: Appendix B: Bibliography",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            }
          ],
          description: "A comprehensive textbook on learning algorithms and solving competitive programming problems.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/guide-t-cp.pdf"
        },
        {
          name: "CP-Algorithms & Revise Data Structures",
          type: "WEBSITE",
          order: 5,
          isMustDo: false,
          units: [
            {
              name: "Data Structures and Algorithms Index",
              order: 0,
              subUnits: [
                {
                  name: "Fundamental Concepts & Implementations",
                  order: 0,
                  items: [
                    {
                      name: "Binary Search & Ternary Search",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://cp-algorithms.com/num_methods/binary_search.html"
                    },
                    {
                      name: "Segment Tree & Lazy Propagation",
                      type: "CONCEPT",
                      order: 1,
                      url: "https://cp-algorithms.com/data_structures/segment_tree.html"
                    },
                    {
                      name: "Fenwick Tree (Binary Indexed Tree)",
                      type: "CONCEPT",
                      order: 2,
                      url: "https://cp-algorithms.com/data_structures/fenwick_tree.html"
                    },
                    {
                      name: "Disjoint Set Union (DSU)",
                      type: "CONCEPT",
                      order: 3,
                      url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html"
                    },
                    {
                      name: "String Algorithms (KMP, Z-Algorithm, Rabin-Karp)",
                      type: "CONCEPT",
                      order: 4,
                      url: "https://cp-algorithms.com/string/string-hashing.html"
                    },
                    {
                      name: "Graph Traversals & Shortest Paths",
                      type: "CONCEPT",
                      order: 5,
                      url: "https://cp-algorithms.com/graph/breadth-first-search.html"
                    }
                  ]
                }
              ]
            }
          ],
          description: "Online learning resource for competitive programming concepts, algorithms, and implementations.",
          url: "https://cp-algorithms.com"
        },
        {
          name: "LeetCode Curated Sheets & Playbooks",
          type: "WEBSITE",
          order: 6,
          isMustDo: false,
          units: [
            {
              name: "Curated Google & Global Top LeetCode Problems",
              order: 0,
              subUnits: [
                {
                  name: "Saksham's Curated Sheet",
                  order: 0,
                  items: [
                    {
                      name: "Review LeetCode Spreadsheet Problems",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://docs.google.com/spreadsheets/d/1-wKcV99KtO91dXdPkwmXGTdtyxAfk1mbPXQg81R9sFE/edit?gid=0#gid=0"
                    },
                    {
                      name: "Targeted Practice Playlist on LeetCode",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://leetcode.com/problem-list/eeudwo2i/"
                    }
                  ]
                },
                {
                  name: "10 Hard-Marked Problems from Top Topics (Design Section)",
                  order: 1,
                  items: [
                    {
                      name: "Design LRU Cache (Hard)",
                      type: "EXERCISE",
                      order: 0,
                      url: "https://leetcode.com/problems/lru-cache/"
                    },
                    {
                      name: "Design LFU Cache (Hard)",
                      type: "EXERCISE",
                      order: 1,
                      url: "https://leetcode.com/problems/lfu-cache/"
                    },
                    {
                      name: "Serialize and Deserialize Binary Tree (Hard)",
                      type: "EXERCISE",
                      order: 2,
                      url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
                    },
                    {
                      name: "Design Search Autocomplete System (Hard)",
                      type: "EXERCISE",
                      order: 3,
                      url: "https://leetcode.com/problems/design-search-autocomplete-system/"
                    },
                    {
                      name: "Design In-Memory File System (Hard)",
                      type: "EXERCISE",
                      order: 4,
                      url: "https://leetcode.com/problems/design-in-memory-file-system/"
                    },
                    {
                      name: "Prefix and Suffix Search (Hard)",
                      type: "EXERCISE",
                      order: 5,
                      url: "https://leetcode.com/problems/prefix-and-suffix-search/"
                    },
                    {
                      name: "All O`one Data Structure (Hard)",
                      type: "EXERCISE",
                      order: 6,
                      url: "https://leetcode.com/problems/all-oone-data-structure/"
                    },
                    {
                      name: "Maximum Frequency Stack (Hard)",
                      type: "EXERCISE",
                      order: 7,
                      url: "https://leetcode.com/problems/maximum-frequency-stack/"
                    },
                    {
                      name: "Range Module (Hard)",
                      type: "EXERCISE",
                      order: 8,
                      url: "https://leetcode.com/problems/range-module/"
                    },
                    {
                      name: "Design Movie Rental System (Hard)",
                      type: "EXERCISE",
                      order: 9,
                      url: "https://leetcode.com/problems/design-movie-rental-system/"
                    }
                  ]
                }
              ]
            }
          ],
          description: "Curated lists of intermediate-to-hard problems heavily followed for coding rounds and live mock sessions.",
          url: "https://leetcode.com"
        }
      ],
      description: "Intensive development of problem-solving skills, algorithmic correctness, optimization paradigms, and data structure fluency.",
      icon: "💻"
    },
    {
      name: "Computer Systems Mastery",
      order: 1,
      resources: [
        {
          name: "CS347: Operating Systems (IITB)",
          type: "SLIDES",
          order: 0,
          isMustDo: false,
          units: [
            {
              name: "CS347 Course syllabus",
              order: 0,
              subUnits: [
                {
                  name: "Lecture Topics",
                  order: 0,
                  items: [
                    { name: "1. Introduction to Operating Systems", type: "VIDEO", order: 0 },
                    { name: "2. Processes and Threads", type: "VIDEO", order: 1 },
                    { name: "3. Process Management in xv6", type: "VIDEO", order: 2 },
                    { name: "4. Process Synchronization", type: "VIDEO", order: 3 },
                    { name: "5. Process Scheduling", type: "VIDEO", order: 4 },
                    { name: "6. Scheduling and Synchronization in xv6", type: "VIDEO", order: 5 },
                    { name: "7. Memory Management", type: "VIDEO", order: 6 },
                    { name: "8. Memory Management in xv6", type: "VIDEO", order: 7 },
                    { name: "9. File Systems and I/O management", type: "VIDEO", order: 8 },
                    { name: "10. The xv6 filesystem", type: "VIDEO", order: 9 }
                  ]
                },
                {
                  name: "Practice Problem Sets",
                  order: 1,
                  items: [
                    { name: "Problem Set 1 (covers lectures 1--3)", type: "EXERCISE", order: 0 },
                    { name: "Problem Set 2 (covers lectures 4--6)", type: "EXERCISE", order: 1 },
                    { name: "Problem Set 3 (covers lectures 7--8)", type: "EXERCISE", order: 2 },
                    { name: "Problem Set 4 (covers lectures 9--10)", type: "EXERCISE", order: 3 }
                  ]
                },
                {
                  name: "Take-home Labs",
                  order: 2,
                  items: [
                    { name: "Lab 1: Basics of OS, Linux, processes", type: "EXERCISE", order: 0 },
                    {
                      name: "Lab 2: Building multi-threaded and multi-process applications",
                      type: "EXERCISE",
                      order: 1
                    },
                    {
                      name: "Lab 3: Building a custom shell, process lifecycle management",
                      type: "EXERCISE",
                      order: 2
                    },
                    { name: "Lab 4: Synchronization", type: "EXERCISE", order: 3 },
                    { name: "Lab 5: New scheduler in xv6", type: "EXERCISE", order: 4 },
                    { name: "Lab 6: Copy-on-write fork in xv6", type: "EXERCISE", order: 5 },
                    {
                      name: "Lab 7: Understanding features of modern filesystems",
                      type: "EXERCISE",
                      order: 6
                    },
                    {
                      name: "Lab 8: Building a new userspace filesystem",
                      type: "EXERCISE",
                      order: 7
                    }
                  ]
                }
              ]
            }
          ],
          description: "Rigorous operating systems syllabus at IIT Bombay covering CPU, memory, virtualization, scheduling, filesystems, and hands-on xv6 labs.",
          url: "https://www.cse.iitb.ac.in/~mythili/teaching/cs347_autumn2016/index.html"
        },
        {
          name: "Operating Systems Slides & Videos (Mythili Webpage)",
          type: "WEBSITE",
          order: 1,
          isMustDo: false,
          units: [
            {
              name: "Syllabus & Lectures",
              order: 0,
              subUnits: [
                {
                  name: "OS Core Material",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides and Videos on Virtualization, Concurrency, and Persistence",
                      type: "VIDEO",
                      order: 0
                    }
                  ]
                }
              ]
            }
          ],
          description: "Excellent structured slide decks and lecture videos covering all core operating system concepts, sufficient from beginner to advanced levels.",
          url: "https://www.cse.iitb.ac.in/~mythili/os/"
        },
        {
          name: "CS DECS Course Webpage",
          type: "WEBSITE",
          order: 2,
          isMustDo: false,
          units: [
            {
              name: "Systems Engineering Course",
              order: 0,
              subUnits: [
                {
                  name: "DECS Materials",
                  order: 0,
                  items: [
                    {
                      name: "Syllabus, Lecture Notes & Assignments covering heterogeneous systems concepts",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            }
          ],
          description: "A broader systems course webpage by Prof. Mythili Vutukuru, covering a mixture of operating systems, computer networks, and systems fundamentals.",
          url: "https://www.cse.iitb.ac.in/~mythili/decs/"
        },
        {
          name: "OSTEP (Operating Systems: Three Easy Pieces)",
          type: "BOOK",
          order: 3,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: Dialogue (Three Easy Pieces)",
              order: 0,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 1: Dialogue (Three Easy Pieces)",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Introduction to Operating Systems",
              order: 1,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 2: Introduction to Operating Systems",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Dialogue on Virtualization",
              order: 2,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 3: Dialogue on Virtualization",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: Processes",
              order: 3,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 4: Processes", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: Process API",
              order: 4,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 5: Process API", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: Direct Execution",
              order: 5,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 6: Direct Execution", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 7: CPU Scheduling",
              order: 6,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 7: CPU Scheduling", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 8: Multi-level Feedback",
              order: 7,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 8: Multi-level Feedback",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 9: Lottery Scheduling",
              order: 8,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 9: Lottery Scheduling", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 10: Multi-CPU Scheduling",
              order: 9,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 10: Multi-CPU Scheduling",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 11: CPU Virtualization Summary",
              order: 10,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 11: CPU Virtualization Summary",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 12: Dialogue on VM",
              order: 11,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 12: Dialogue on VM", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 13: Address Spaces",
              order: 12,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 13: Address Spaces", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 14: Memory API",
              order: 13,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 14: Memory API", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 15: Address Translation",
              order: 14,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 15: Address Translation",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 16: Segmentation",
              order: 15,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 16: Segmentation", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 17: Free Space Management",
              order: 16,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 17: Free Space Management",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 18: Introduction to Paging",
              order: 17,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 18: Introduction to Paging",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 19: Translation Lookaside Buffers (TLBs)",
              order: 18,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 19: Translation Lookaside Buffers (TLBs)",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 20: Advanced Page Tables",
              order: 19,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 20: Advanced Page Tables",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 21: Swapping: Mechanisms",
              order: 20,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 21: Swapping: Mechanisms",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 22: Swapping: Policies",
              order: 21,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 22: Swapping: Policies",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 23: Complete VM Systems",
              order: 22,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 23: Complete VM Systems",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 24: VM Virtualization Summary",
              order: 23,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 24: VM Virtualization Summary",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 25: Dialogue on Concurrency",
              order: 24,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 25: Dialogue on Concurrency",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 26: Concurrency and Threads",
              order: 25,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 26: Concurrency and Threads",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 27: Thread API",
              order: 26,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 27: Thread API", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 28: Locks",
              order: 27,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 28: Locks", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 29: Locked Data Structures",
              order: 28,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 29: Locked Data Structures",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 30: Condition Variables",
              order: 29,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 30: Condition Variables",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 31: Semaphores",
              order: 30,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 31: Semaphores", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 32: Concurrency Bugs",
              order: 31,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 32: Concurrency Bugs", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 33: Event-based Concurrency",
              order: 32,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 33: Event-based Concurrency",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 34: Concurrency Summary",
              order: 33,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 34: Concurrency Summary",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 35: Dialogue on Persistence",
              order: 34,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 35: Dialogue on Persistence",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 36: I/O Devices",
              order: 35,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 36: I/O Devices", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 37: Hard Disk Drives",
              order: 36,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 37: Hard Disk Drives", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 38: Redundant Disk Arrays (RAID)",
              order: 37,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 38: Redundant Disk Arrays (RAID)",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 39: Files and Directories",
              order: 38,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 39: Files and Directories",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 40: File System Implementation",
              order: 39,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 40: File System Implementation",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 41: Fast File System (FFS)",
              order: 40,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 41: Fast File System (FFS)",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 42: FSCK and Journaling",
              order: 41,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 42: FSCK and Journaling",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 43: Log-structured File System (LFS)",
              order: 42,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 43: Log-structured File System (LFS)",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 44: Flash-based SSDs",
              order: 43,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 44: Flash-based SSDs", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 45: Data Integrity and Protection",
              order: 44,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 45: Data Integrity and Protection",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 46: Persistence Summary",
              order: 45,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 46: Persistence Summary",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 47: Dialogue on Distribution",
              order: 46,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 47: Dialogue on Distribution",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 48: Distributed Systems",
              order: 47,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 48: Distributed Systems",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 49: Network File System (NFS)",
              order: 48,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 49: Network File System (NFS)",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 50: Andrew File System (AFS)",
              order: 49,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 50: Andrew File System (AFS)",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 51: Distribution Summary",
              order: 50,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 51: Distribution Summary",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 52: Dialogue on Security",
              order: 51,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 52: Dialogue on Security",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 53: Introduction to Security",
              order: 52,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 53: Introduction to Security",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 54: Authentication",
              order: 53,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 54: Authentication", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 55: Access Control",
              order: 54,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 55: Access Control", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 56: Cryptography",
              order: 55,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 56: Cryptography", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 57: Distributed Security",
              order: 56,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 57: Distributed Security",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            }
          ],
          description: "Comprehensive, deep introduction to virtualization, concurrency, persistence, distributed systems, and security in operating systems.",
          url: "https://github.com/sakshamrathi21/Bottleneck-Bandwidth-Estimation-using-UDP-Sockets/blob/main/Slides/ostep.pdf"
        },
        {
          name: "CS224M: Computer Networks (IITB)",
          type: "SLIDES",
          order: 4,
          isMustDo: false,
          units: [
            {
              name: "Lecture 1: July 19 (Wed)",
              order: 0,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    {
                      name: "Introduction. Course logistics. Layering abstraction. Network architecture and protocols.",
                      type: "VIDEO",
                      order: 0
                    },
                    { name: "Read lecture note lec01.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 2: July 21 (Fri)",
              order: 1,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    {
                      name: "Packet switching vs. circuit switching. History of networking.",
                      type: "VIDEO",
                      order: 0
                    },
                    {
                      name: "Read lecture note lec02.txt Example pcap file",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "Demo: simple packet capture and inspecting packet headers.  Download, install, and familiarize yourself with Wireshark before you come to class. Download and view the example pcap file in wireshark. Bring your laptop to class if possible so that you can follow the demo better.",
                      type: "EXERCISE",
                      order: 2
                    }
                  ]
                }
              ]
            },
            {
              name: "Lecture 3: July 26 (Wed)",
              order: 2,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    {
                      name: "Performance of networks: delay and throughput.",
                      type: "VIDEO",
                      order: 0
                    },
                    { name: "Read lecture note lec03.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 4: July 28 (Fri)",
              order: 3,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Application layer: HTTP", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec04.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 5: Aug 2 (Wed)",
              order: 4,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Socket Programming", type: "VIDEO", order: 0 },
                    {
                      name: "Read lecture note lec05.txt   A sample tutorial on socket programming and a sample tutorial on event-driven I/O using epoll. You can find several more online.   Example socket programs: client and server",
                      type: "READING",
                      order: 1
                    },
                    {
                      name: "Programming Assignment 1: Socket Programming. Due Aug 20, 11:55 pm.",
                      type: "EXERCISE",
                      order: 2
                    }
                  ]
                }
              ]
            },
            {
              name: "Lecture 6: Aug 4 (Fri)",
              order: 5,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    {
                      name: "Application layer: DNS, CDNs, server design.",
                      type: "VIDEO",
                      order: 0
                    },
                    {
                      name: "Read lecture note lec06.txt Handling Flash Crowds from your Garage explains various techniques to design high performance servers.",
                      type: "READING",
                      order: 1
                    }
                  ]
                }
              ]
            },
            {
              name: "Lecture 7: Aug 9 (Wed)",
              order: 6,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Application layer: SMTP, web services, P2P.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec07.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture -: Aug 11 (Fri)",
              order: 7,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    {
                      name: "Quiz 1 / Help session for programming assignment 1.",
                      type: "VIDEO",
                      order: 0
                    },
                    { name: "8", type: "EXERCISE", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture : 9",
              order: 8,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Aug 18 (Fri)", type: "VIDEO", order: 0 },
                    {
                      name: "Read lecture note Reliability and congestion control in TCP.",
                      type: "READING",
                      order: 1
                    },
                    { name: "lec09.txt", type: "EXERCISE", order: 2 }
                  ]
                }
              ]
            },
            {
              name: "Lecture : 10",
              order: 9,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Aug 23 (Wed)", type: "VIDEO", order: 0 },
                    { name: "Read lecture note More on TCP.", type: "READING", order: 1 },
                    { name: "lec10.txt", type: "EXERCISE", order: 2 }
                  ]
                }
              ]
            },
            {
              name: "Lecture : 11",
              order: 10,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Aug 30 (Wed)", type: "VIDEO", order: 0 },
                    { name: "Read lecture note TCP analysis.", type: "READING", order: 1 },
                    {
                      name: "lec11.txt   Sizing Router Buffers, Appenzeller et al. Bufferbloat: Dark Buffers in the Internet, Gettys and Nichols. The Macroscopic Behavior of the TCP Congestion Avoidance Algorithm, Mathis et al.",
                      type: "EXERCISE",
                      order: 2
                    }
                  ]
                }
              ]
            },
            {
              name: "Lecture 12: Sep 1 (Fri)",
              order: 11,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Network layer: introduction.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec12.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 13: Sep 6 (Wed)",
              order: 12,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Network layer: details.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec13.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture -: Sep 8 (Fri)",
              order: 13,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Midsem review.", type: "VIDEO", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 14: Sep 20 (Wed)",
              order: 14,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Routing protocols.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec14.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 15: Sep 22 (Fri)",
              order: 15,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Interdomain routing.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec15.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 16: Sep 27 (Wed)",
              order: 16,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "BGP: advanced topics.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec16.txt", type: "READING", order: 1 },
                    { name: "BGP Demo", type: "EXERCISE", order: 2 }
                  ]
                }
              ]
            },
            {
              name: "Lecture -: Sep 29 (Fri)",
              order: 17,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Midsem paper discussion.", type: "VIDEO", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 17: Oct 4 (Wed)",
              order: 18,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Router architecture.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec17.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 18: Oct 6 (Fri)",
              order: 19,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Resource allocation and QoS", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec18.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture -: Oct 11 (Wed)",
              order: 20,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Quiz 2", type: "VIDEO", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 19: Oct 13 (Fri)",
              order: 21,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Link layer: introduction.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec19.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture -: Oct 18 (Wed) and Oct 20 (Fri)",
              order: 22,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "NO CLASS", type: "VIDEO", order: 0 },
                    {
                      name: "Programming Assignment 3: Distance Vector Routing. Due Nov 7 (Tue) 11:55 pm.",
                      type: "EXERCISE",
                      order: 1
                    }
                  ]
                }
              ]
            },
            {
              name: "Lecture 20: Oct 25 (Wed)",
              order: 23,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Link layer: multiple access protocols.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec20.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 21: Oct 27 (Fri)",
              order: 24,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Link layer: switching, VLANs, MPLS.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec21.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 22: Nov 1 (Wed)",
              order: 25,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Physical layer: overview.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec22.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture 23: Nov 3 (Fri)",
              order: 26,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Looking ahead: some recent advances.", type: "VIDEO", order: 0 },
                    { name: "Read lecture note lec23.txt", type: "READING", order: 1 }
                  ]
                }
              ]
            },
            {
              name: "Lecture -: Nov 8 (Wed)",
              order: 27,
              subUnits: [
                {
                  name: "Lecture Delivery & Exercises",
                  order: 0,
                  items: [
                    { name: "Course wrap-up, endsem review.", type: "VIDEO", order: 0 }
                  ]
                }
              ]
            }
          ],
          description: "Lecture notes, socket programming labs, event-driven IO, epoll tutorial, and Wireshark demonstrations.",
          url: "https://www.cse.iitb.ac.in/~mythili/teaching/cs224m_autumn2017/index.html"
        },
        {
          name: "Computer Networks Video Playlist (Mythili Vutukuru)",
          type: "VIDEO_SERIES",
          order: 5,
          isMustDo: false,
          units: [
            {
              name: "Lectures (30 Videos)",
              order: 0,
              subUnits: [
                {
                  name: "Lectures 1-15 (Physical, Link & IP Layers)",
                  order: 0,
                  items: [
                    {
                      name: "1. 1 Intro Protocol Layering",
                      type: "VIDEO",
                      order: 0,
                      url: "https://www.youtube.com/watch?v=Lo_pIjzej1A&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "2. 2 QoS Latency Layering",
                      type: "VIDEO",
                      order: 1,
                      url: "https://www.youtube.com/watch?v=AdYzgctH4JY&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "3. 3 PHY Media Attenuation",
                      type: "VIDEO",
                      order: 2,
                      url: "https://www.youtube.com/watch?v=R4dGXosLeEs&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "4. 4 Line Coding",
                      type: "VIDEO",
                      order: 3,
                      url: "https://www.youtube.com/watch?v=3LvF3Xk9jIY&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "5. 5 Wireless Modulation",
                      type: "VIDEO",
                      order: 4,
                      url: "https://www.youtube.com/watch?v=FdxldONtzsE&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "6. 6 Modulation Continued",
                      type: "VIDEO",
                      order: 5,
                      url: "https://www.youtube.com/watch?v=Z-VhQCo6HUI&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "7. 7 Framing CRC",
                      type: "VIDEO",
                      order: 6,
                      url: "https://www.youtube.com/watch?v=G0m3In_UXkA&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "8. 8 CRC Polyn Arith",
                      type: "VIDEO",
                      order: 7,
                      url: "https://www.youtube.com/watch?v=Y9BIgkcwKTk&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "9. 9 CRC ARQ",
                      type: "VIDEO",
                      order: 8,
                      url: "https://www.youtube.com/watch?v=_EUBuquAq9k&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "10. 10 Ethernet MAC",
                      type: "VIDEO",
                      order: 9,
                      url: "https://www.youtube.com/watch?v=c2SEwF-4HCo&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "11. 11 WiFi MAC",
                      type: "VIDEO",
                      order: 10,
                      url: "https://www.youtube.com/watch?v=zufNwBYBKBc&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "12. 12 WiFi Collisions",
                      type: "VIDEO",
                      order: 11,
                      url: "https://www.youtube.com/watch?v=ckkubQig_vg&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "13. 13 OFDMA CDMA",
                      type: "VIDEO",
                      order: 12,
                      url: "https://www.youtube.com/watch?v=-lkPdmTm5q0&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "14. 14 Ethernet Switching",
                      type: "VIDEO",
                      order: 13,
                      url: "https://www.youtube.com/watch?v=NObL-X5LERw&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "15. 15 Layer3Routing DV",
                      type: "VIDEO",
                      order: 14,
                      url: "https://www.youtube.com/watch?v=-PZCkA8s_tY&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    }
                  ]
                },
                {
                  name: "Lectures 16-30 (Transport, Routing & Application Layers)",
                  order: 1,
                  items: [
                    {
                      name: "16. 16 SplitHorizon LSR",
                      type: "VIDEO",
                      order: 0,
                      url: "https://www.youtube.com/watch?v=UlqMPbH2MKM&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "17. 17 Setting Link Weights",
                      type: "VIDEO",
                      order: 1,
                      url: "https://www.youtube.com/watch?v=sgTA3iFKx2I&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "18. 18 IP Addressing",
                      type: "VIDEO",
                      order: 2,
                      url: "https://www.youtube.com/watch?v=FVs4iq4kFdk&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "19. 19 ARP DHCP",
                      type: "VIDEO",
                      order: 3,
                      url: "https://www.youtube.com/watch?v=iWX_rupGQDY&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "20. 20 BGP",
                      type: "VIDEO",
                      order: 4,
                      url: "https://www.youtube.com/watch?v=PMBK936qKdg&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "21. 21 BGP IGP",
                      type: "VIDEO",
                      order: 5,
                      url: "https://www.youtube.com/watch?v=nNjvYULMLDs&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "22. 22 Transport",
                      type: "VIDEO",
                      order: 6,
                      url: "https://www.youtube.com/watch?v=VhzmZZb4wG8&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "23. 23 TCP Open Close",
                      type: "VIDEO",
                      order: 7,
                      url: "https://www.youtube.com/watch?v=rAQnnfwfohI&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "24. 24 TCP Timeout",
                      type: "VIDEO",
                      order: 8,
                      url: "https://www.youtube.com/watch?v=Ul7E5aCYHHk&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "25. 25 TCP Congestion Control",
                      type: "VIDEO",
                      order: 9,
                      url: "https://www.youtube.com/watch?v=MBiVyLKTM38&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "26. 26 TCP Tahoe Reno",
                      type: "VIDEO",
                      order: 10,
                      url: "https://www.youtube.com/watch?v=_X9bAYb9e2A&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "27. 27 Vegas",
                      type: "VIDEO",
                      order: 11,
                      url: "https://www.youtube.com/watch?v=zviVz2j8HXA&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "28. 28 P2P",
                      type: "VIDEO",
                      order: 12,
                      url: "https://www.youtube.com/watch?v=_qwf_0xlYPA&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "29. 29 PASTRY",
                      type: "VIDEO",
                      order: 13,
                      url: "https://www.youtube.com/watch?v=QGtcDN2hGl4&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    },
                    {
                      name: "30. 30 DNS",
                      type: "VIDEO",
                      order: 14,
                      url: "https://www.youtube.com/watch?v=aMgDcy1L77s&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
                    }
                  ]
                }
              ],
              description: "Complete list of computer network video lectures by Prof. Mythili Vutukuru (watch at 2X)."
            }
          ],
          description: "Comprehensive video playlist lecture series on computer networks by Prof. Mythili Vutukuru, covering protocols, architecture, and implementation detail.",
          url: "https://www.youtube.com/watch?v=Lo_pIjzej1A&list=PLfmqK5mMBWj_J-O4jMyYSz4WMZjUQX0Iq"
        },
        {
          name: "CS348 Computer Networks Lecture Notes",
          type: "NOTES",
          order: 6,
          isMustDo: false,
          units: [
            {
              name: "Personal System Notes",
              order: 0,
              subUnits: [
                {
                  name: "CS348 Networks Notes",
                  order: 0,
                  items: [
                    {
                      name: "Review personal CS348 network system notes and exam prep material",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            }
          ],
          description: "Saksham Rathi's personal computer networks lecture notes covering core routing, switching, protocols, and implementation models.",
          url: "https://github.com/sakshamrathi21/Bottleneck-Bandwidth-Estimation-using-UDP-Sockets/blob/main/Slides/CS348%20Lecture%20Notes.pdf"
        },
        {
          name: "Peterson & Davie - Computer Networks",
          type: "BOOK",
          order: 7,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: Foundation",
              order: 0,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 1: Foundation", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Direct Link Networks",
              order: 1,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 2: Direct Link Networks",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Packet Switching",
              order: 2,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 3: Packet Switching", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: Internetworking",
              order: 3,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 4: Internetworking", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: End-to-End Protocols",
              order: 4,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 5: End-to-End Protocols",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: Congestion Control and Resource Allocation",
              order: 5,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 6: Congestion Control and Resource Allocation",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 7: End-to-End Data",
              order: 6,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 7: End-to-End Data", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 8: Network Security",
              order: 7,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 8: Network Security", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 9: Applications",
              order: 8,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 9: Applications", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            }
          ],
          description: "A systems-based approach to studying physical networks, routing, congestion, network security, and applications.",
          url: "https://github.com/sakshamrathi21/Bottleneck-Bandwidth-Estimation-using-UDP-Sockets/blob/main/Slides/computer-networks-peterson-davie-v6.0.pdf"
        },
        {
          name: "Silberschatz - Database System Concepts Slides",
          type: "SLIDES",
          order: 8,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: Introduction",
              order: 0,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 1: Introduction",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Introduction to the Relational Model",
              order: 1,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 2: Introduction to the Relational Model",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Introduction to SQL",
              order: 2,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 3: Introduction to SQL",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: Intermediate SQL",
              order: 3,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 4: Intermediate SQL",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: Advanced SQL",
              order: 4,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 5: Advanced SQL",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: Database Design Using The E-R Model",
              order: 5,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 6: Database Design Using The E-R Model",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 7: Relational Database Design",
              order: 6,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 7: Relational Database Design",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 8: Complex Data Types",
              order: 7,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 8: Complex Data Types",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 9: Application Development",
              order: 8,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 9: Application Development",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 10: Big Data",
              order: 9,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    { name: "Lecture Slides for Chapter 10: Big Data", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 11: Data Analysis",
              order: 10,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 11: Data Analysis",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 12: Physical Storage Systems",
              order: 11,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 12: Physical Storage Systems",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 13: Data Storage Structures",
              order: 12,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 13: Data Storage Structures",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 14: Indexing",
              order: 13,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    { name: "Lecture Slides for Chapter 14: Indexing", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 15: Query Processing",
              order: 14,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 15: Query Processing",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 16: Query Optimization",
              order: 15,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 16: Query Optimization",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 17: Transactions",
              order: 16,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 17: Transactions",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 18: Concurrency Control",
              order: 17,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 18: Concurrency Control",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 19: Recovery System",
              order: 18,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 19: Recovery System",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 20: Database System Architectures",
              order: 19,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 20: Database System Architectures",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 21: Parallel and Distributed Storage",
              order: 20,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 21: Parallel and Distributed Storage",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 22: Parallel and Distributed Query Processing",
              order: 21,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 22: Parallel and Distributed Query Processing",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 23: Parallel and Distributed Transaction Processing",
              order: 22,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 23: Parallel and Distributed Transaction Processing",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 24: Advanced Indexing Techniques",
              order: 23,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 24: Advanced Indexing Techniques",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 25: Advanced Application Development",
              order: 24,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 25: Advanced Application Development",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 26: Blockchain Databases",
              order: 25,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 26: Blockchain Databases",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 27: Formal-Relational Query Languages",
              order: 26,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 27: Formal-Relational Query Languages",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 28: Advanced Relational Database Design",
              order: 27,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 28: Advanced Relational Database Design",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 29: Object-Based Databases",
              order: 28,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 29: Object-Based Databases",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 30: XML",
              order: 29,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    { name: "Lecture Slides for Chapter 30: XML", type: "READING", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 31: Information Retrieval",
              order: 30,
              subUnits: [
                {
                  name: "Core Reading & Slides",
                  order: 0,
                  items: [
                    {
                      name: "Lecture Slides for Chapter 31: Information Retrieval",
                      type: "READING",
                      order: 0
                    }
                  ]
                }
              ]
            }
          ],
          description: "Comprehensive set of slides for all 31 chapters of Database System Concepts (Seventh Edition).",
          url: "https://db-book.com/slides-dir/index.html"
        },
        {
          name: "Patterson & Hennessy - Computer Organization and Architecture",
          type: "BOOK",
          order: 9,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: Computer Abstractions and Technology",
              order: 0,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 1: Computer Abstractions and Technology",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Instructions: Language of the Computer",
              order: 1,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 2: Instructions: Language of the Computer",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Arithmetic for Computers",
              order: 2,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 3: Arithmetic for Computers",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: The Processor",
              order: 3,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    { name: "Concepts of Chapter 4: The Processor", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: Large and Fast: Exploiting Memory Hierarchy",
              order: 4,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 5: Large and Fast: Exploiting Memory Hierarchy",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: Parallel Processors from Client to Cloud",
              order: 5,
              subUnits: [
                {
                  name: "Core Reading & Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concepts of Chapter 6: Parallel Processors from Client to Cloud",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            }
          ],
          description: "Instruction sets, arithmetic, CPU pipelines, memory hierarchy, cache design, and cloud architecture.",
          url: "https://github.com/sakshamrathi21/Bottleneck-Bandwidth-Estimation-using-UDP-Sockets/blob/main/Slides/ComputerOrganizationAndArchitecture%20-%205thEdition%20(P%26H).pdf"
        },
        {
          name: "Harris & Harris - Digital Design and Computer Architecture",
          type: "BOOK",
          order: 10,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: From Zero to One",
              order: 0,
              subUnits: [
                {
                  name: "Core Reading & Digital Design Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Digital design of Chapter 1: From Zero to One",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Combinational Logic Design",
              order: 1,
              subUnits: [
                {
                  name: "Core Reading & Digital Design Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Digital design of Chapter 2: Combinational Logic Design",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Sequential Logic Design",
              order: 2,
              subUnits: [
                {
                  name: "Core Reading & Digital Design Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Digital design of Chapter 3: Sequential Logic Design",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: Hardware Description Languages",
              order: 3,
              subUnits: [
                {
                  name: "Core Reading & Digital Design Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Digital design of Chapter 4: Hardware Description Languages",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: Digital Building Blocks",
              order: 4,
              subUnits: [
                {
                  name: "Core Reading & Digital Design Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Digital design of Chapter 5: Digital Building Blocks",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: Architecture",
              order: 5,
              subUnits: [
                {
                  name: "Core Reading & Digital Design Concepts",
                  order: 0,
                  items: [
                    { name: "Digital design of Chapter 6: Architecture", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 7: Microarchitecture",
              order: 6,
              subUnits: [
                {
                  name: "Core Reading & Digital Design Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Digital design of Chapter 7: Microarchitecture",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 8: Memory and I/O Systems",
              order: 7,
              subUnits: [
                {
                  name: "Core Reading & Digital Design Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Digital design of Chapter 8: Memory and I/O Systems",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            }
          ],
          description: "Bridges digital design and computer architecture from digital logical circuits to standard processor architecture.",
          url: "https://github.com/sakshamrathi21/Bottleneck-Bandwidth-Estimation-using-UDP-Sockets/blob/main/Slides/Digital%20Design%20and%20Computer%20Architecture.pdf"
        },
        {
          name: "Trading Systems Developer Guide (C++ Edition)",
          type: "BOOK",
          order: 11,
          isMustDo: false,
          units: [
            {
              name: "Part I: C++ System Design",
              order: 0,
              subUnits: [
                {
                  name: "Systems concepts",
                  order: 0,
                  items: [
                    { name: "C++ Performance Basics", type: "CONCEPT", order: 0 },
                    { name: "Low Latency Coding Tips", type: "CONCEPT", order: 1 },
                    { name: "Custom Memory Allocators", type: "CONCEPT", order: 2 }
                  ]
                }
              ]
            },
            {
              name: "Part II: Systems & Concurrency",
              order: 1,
              subUnits: [
                {
                  name: "Systems concepts",
                  order: 0,
                  items: [
                    { name: "Cache friendliness & Cache Lines", type: "CONCEPT", order: 0 },
                    { name: "Lock-free ring buffers", type: "CONCEPT", order: 1 },
                    { name: "CPU Pinning & Affinity", type: "CONCEPT", order: 2 }
                  ]
                }
              ]
            },
            {
              name: "Part III: HFT Networking",
              order: 2,
              subUnits: [
                {
                  name: "Systems concepts",
                  order: 0,
                  items: [
                    { name: "Kernel Bypass & Solarflare OpenOnload", type: "CONCEPT", order: 0 },
                    { name: "UDP multicast vs TCP unicast", type: "CONCEPT", order: 1 },
                    { name: "Socket level tuning", type: "CONCEPT", order: 2 }
                  ]
                }
              ]
            }
          ],
          description: "Insiders' guide to low-latency coding, cache line optimization, kernel bypass, and concurrency design patterns.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/trading-systems-developer-interview-guide-c-edition-insiders-guide-to-top-tech-jobs-in-finance.pdf"
        },
        {
          name: "Shivam5022 Knowledgebase SV Notes",
          type: "DOC",
          order: 12,
          isMustDo: false,
          units: [
            {
              name: "Consolidated Technical Notes",
              order: 0,
              subUnits: [
                {
                  name: "Revise Notes",
                  order: 0,
                  items: [
                    { name: "Advanced Operating System Concepts", type: "READING", order: 0 },
                    { name: "Computer Networks Foundations", type: "READING", order: 1 },
                    { name: "System Design & Architecture Notes", type: "READING", order: 2 },
                    { name: "High-Performance Computing Notes", type: "READING", order: 3 }
                  ]
                }
              ]
            }
          ],
          description: "Excellent consolidated set of notes on a wide variety of systems topics, C++, networks, and data structures.",
          url: "https://github.com/Shivam5022/Knowledgebase-SV/tree/main/notes"
        }
      ],
      description: "Rigorous comprehension of CPU architecture, memory layouts, file handling, and networking protocols used by low latency systems and high performance servers.",
      icon: "⚙️"
    },
    {
      name: "C++ Mastery & Production Coding Standards",
      order: 2,
      resources: [
        {
          name: "LearnCpp.com Tutorials",
          type: "WEBSITE",
          order: 0,
          isMustDo: false,
          units: [
            {
              name: "Module 0: Introduction / Getting Started",
              order: 0,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 0: Introduction / Getting Started chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter0"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 1: C++ Basics: Functions and Files",
              order: 1,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 1: C++ Basics: Functions and Files chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter1"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 2: C++ Basics: Operators",
              order: 2,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 2: C++ Basics: Operators chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter2"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 3: Debugging C++ Programs",
              order: 3,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 3: Debugging C++ Programs chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter3"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 4: Fundamental Data Types",
              order: 4,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 4: Fundamental Data Types chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter4"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 5: Constants and Strings",
              order: 5,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 5: Constants and Strings chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter5"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 6: Operators",
              order: 6,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 6: Operators chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter6"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 7: Control Flow and Error Handling",
              order: 7,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 7: Control Flow and Error Handling chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter7"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 8: Type Conversion and Function Overloading",
              order: 8,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 8: Type Conversion and Function Overloading chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter8"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 9: Compound Types: References and Pointers",
              order: 9,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 9: Compound Types: References and Pointers chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter9"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 10: Compound Types: Enums and Structs",
              order: 10,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 10: Compound Types: Enums and Structs chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter10"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 11: Class Basics",
              order: 11,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 11: Class Basics chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter11"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 12: Const and Static Member Functions",
              order: 12,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 12: Const and Static Member Functions chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter12"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 13: Basic Object Relations",
              order: 13,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 13: Basic Object Relations chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter13"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 14: Operator Overloading",
              order: 14,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 14: Operator Overloading chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter14"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 15: Dynamic Memory Allocation",
              order: 15,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 15: Dynamic Memory Allocation chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter15"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 16: An Introduction to Object-Oriented Programming",
              order: 16,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 16: An Introduction to Object-Oriented Programming chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter16"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 17: Inheritance",
              order: 17,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 17: Inheritance chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter17"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 18: Virtual Functions and Polymorphism",
              order: 18,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 18: Virtual Functions and Polymorphism chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter18"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 19: Templates and Generics",
              order: 19,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 19: Templates and Generics chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter19"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 20: Exceptions and Error Handling",
              order: 20,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 20: Exceptions and Error Handling chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter20"
                    }
                  ]
                }
              ]
            },
            {
              name: "Module 21: Standard Template Library (STL)",
              order: 21,
              subUnits: [
                {
                  name: "Module Topics",
                  order: 0,
                  items: [
                    {
                      name: "Study Module 21: Standard Template Library (STL) chapters",
                      type: "CONCEPT",
                      order: 0,
                      url: "https://www.learncpp.com/#Chapter21"
                    }
                  ]
                }
              ]
            }
          ],
          description: "A free website devoted to teaching you how to program in C++, covering basic syntax to advanced modern features.",
          url: "https://www.learncpp.com"
        },
        {
          name: "Effective C++ (Scott Meyers)",
          type: "BOOK",
          order: 1,
          isMustDo: false,
          units: [
            {
              name: "Items 1 to 10",
              order: 0,
              subUnits: [
                {
                  name: "Guidelines",
                  order: 0,
                  items: [
                    {
                      name: "Item 1: View C++ as a federation of languages",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Item 2: Prefer consts, enums, and inlines to #defines",
                      type: "CONCEPT",
                      order: 1
                    },
                    { name: "Item 3: Use const whenever possible", type: "CONCEPT", order: 2 },
                    {
                      name: "Item 4: Make sure that objects are initialized before they're used",
                      type: "CONCEPT",
                      order: 3
                    },
                    {
                      name: "Item 5: Know what functions C++ silently writes and calls",
                      type: "CONCEPT",
                      order: 4
                    },
                    {
                      name: "Item 6: Explicitly disallow the use of compiler-generated functions you do not want",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Item 7: Declare destructors virtual in polymorphic base classes",
                      type: "CONCEPT",
                      order: 6
                    },
                    {
                      name: "Item 8: Prevent exceptions from leaving destructors",
                      type: "CONCEPT",
                      order: 7
                    },
                    {
                      name: "Item 9: Never call virtual functions during construction or destruction",
                      type: "CONCEPT",
                      order: 8
                    },
                    {
                      name: "Item 10: Have assignment operators return a reference to *this",
                      type: "CONCEPT",
                      order: 9
                    }
                  ]
                }
              ]
            },
            {
              name: "Items 11 to 20",
              order: 1,
              subUnits: [
                {
                  name: "Guidelines",
                  order: 0,
                  items: [
                    {
                      name: "Item 11: Handle assignment to self in operator=",
                      type: "CONCEPT",
                      order: 0
                    },
                    { name: "Item 12: Copy all parts of an object", type: "CONCEPT", order: 1 },
                    { name: "Item 13: Use objects to manage resources", type: "CONCEPT", order: 2 },
                    {
                      name: "Item 14: Think carefully about copying behavior in resource-managing classes",
                      type: "CONCEPT",
                      order: 3
                    },
                    {
                      name: "Item 15: Provide access to raw resources in resource-managing classes",
                      type: "CONCEPT",
                      order: 4
                    },
                    {
                      name: "Item 16: Use the same form in corresponding uses of new and delete",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Item 17: Store newed objects in smart pointers in standalone statements",
                      type: "CONCEPT",
                      order: 6
                    },
                    {
                      name: "Item 18: Make interfaces easy to use correctly and hard to use incorrectly",
                      type: "CONCEPT",
                      order: 7
                    },
                    {
                      name: "Item 19: Treat class design as type design",
                      type: "CONCEPT",
                      order: 8
                    },
                    {
                      name: "Item 20: Prefer pass-by-reference-to-const to pass-by-value",
                      type: "CONCEPT",
                      order: 9
                    }
                  ]
                }
              ]
            },
            {
              name: "Items 21 to 30",
              order: 2,
              subUnits: [
                {
                  name: "Guidelines",
                  order: 0,
                  items: [
                    {
                      name: "Item 21: Don't try to return a reference when you must return an object",
                      type: "CONCEPT",
                      order: 0
                    },
                    { name: "Item 22: Declare data members private", type: "CONCEPT", order: 1 },
                    {
                      name: "Item 23: Prefer non-member non-friend functions to member functions",
                      type: "CONCEPT",
                      order: 2
                    },
                    {
                      name: "Item 24: Declare non-member functions when type conversions should apply to all parameters",
                      type: "CONCEPT",
                      order: 3
                    },
                    {
                      name: "Item 25: Consider support for a non-throwing swap",
                      type: "CONCEPT",
                      order: 4
                    },
                    {
                      name: "Item 26: Postpone variable definitions as long as possible",
                      type: "CONCEPT",
                      order: 5
                    },
                    { name: "Item 27: Minimize casting", type: "CONCEPT", order: 6 },
                    {
                      name: "Item 28: Avoid returning \"handles\" to object internals",
                      type: "CONCEPT",
                      order: 7
                    },
                    { name: "Item 29: Strive for exception-safe code", type: "CONCEPT", order: 8 },
                    {
                      name: "Item 30: Understand the ins and outs of inlining",
                      type: "CONCEPT",
                      order: 9
                    }
                  ]
                }
              ]
            },
            {
              name: "Items 31 to 40",
              order: 3,
              subUnits: [
                {
                  name: "Guidelines",
                  order: 0,
                  items: [
                    {
                      name: "Item 31: Minimize compilation dependencies between files",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Item 32: Make sure public inheritance models \"is-a.\"",
                      type: "CONCEPT",
                      order: 1
                    },
                    { name: "Item 33: Avoid hiding inherited names", type: "CONCEPT", order: 2 },
                    {
                      name: "Item 34: Differentiate between inheritance of interface and inheritance of implementation",
                      type: "CONCEPT",
                      order: 3
                    },
                    {
                      name: "Item 35: Consider alternatives to virtual functions",
                      type: "CONCEPT",
                      order: 4
                    },
                    {
                      name: "Item 36: Never redefine an inherited non-virtual function",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Item 37: Never redefine a function's inherited default parameter value",
                      type: "CONCEPT",
                      order: 6
                    },
                    {
                      name: "Item 38: Model \"has-a\" or \"is-implemented-in-terms-of\" through composition",
                      type: "CONCEPT",
                      order: 7
                    },
                    {
                      name: "Item 39: Use private inheritance judiciously",
                      type: "CONCEPT",
                      order: 8
                    },
                    {
                      name: "Item 40: Use multiple inheritance judiciously",
                      type: "CONCEPT",
                      order: 9
                    }
                  ]
                }
              ]
            },
            {
              name: "Items 41 to 50",
              order: 4,
              subUnits: [
                {
                  name: "Guidelines",
                  order: 0,
                  items: [
                    {
                      name: "Item 41: Understand implicit interfaces and compile-time polymorphism",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Item 42: Understand the two meanings of typename",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Item 43: Know how to access names in templatized base classes",
                      type: "CONCEPT",
                      order: 2
                    },
                    {
                      name: "Item 44: Factor parameter-independent code out of templates",
                      type: "CONCEPT",
                      order: 3
                    },
                    {
                      name: "Item 45: Use member function templates to accept \"all compatible types.\"",
                      type: "CONCEPT",
                      order: 4
                    },
                    {
                      name: "Item 46: Define non-member functions inside templates when type conversions apply",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Item 47: Use traits classes for information about types",
                      type: "CONCEPT",
                      order: 6
                    },
                    {
                      name: "Item 48: Be aware of template metaprogramming",
                      type: "CONCEPT",
                      order: 7
                    },
                    {
                      name: "Item 49: Understand the behavior of the new-handler",
                      type: "CONCEPT",
                      order: 8
                    },
                    {
                      name: "Item 50: Understand when it makes sense to replace new and delete",
                      type: "CONCEPT",
                      order: 9
                    }
                  ]
                }
              ]
            },
            {
              name: "Items 51 to 55",
              order: 5,
              subUnits: [
                {
                  name: "Guidelines",
                  order: 0,
                  items: [
                    {
                      name: "Item 51: Adhere to convention when writing new and delete",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Item 52: Write placement delete if you write placement new",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Item 53: Pay attention to compiler warnings",
                      type: "CONCEPT",
                      order: 2
                    },
                    {
                      name: "Item 54: Familiarize yourself with the standard library, including TR1",
                      type: "CONCEPT",
                      order: 3
                    },
                    { name: "Item 55: Familiarize yourself with Boost", type: "CONCEPT", order: 4 }
                  ]
                }
              ]
            }
          ],
          description: "55 specific ways to improve your programs and designs in C++.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/C%2B%2B/Effective%20C%2B%2B%203rd%20ed.pdf"
        },
        {
          name: "Effective Modern C++ (Scott Meyers)",
          type: "BOOK",
          order: 2,
          isMustDo: false,
          units: [
            {
              name: "Items 1 to 10",
              order: 0,
              subUnits: [
                {
                  name: "Guidelines",
                  order: 0,
                  items: [
                    {
                      name: "Item 1: Understand template type deduction",
                      type: "CONCEPT",
                      order: 0
                    },
                    { name: "Item 2: Understand auto type deduction", type: "CONCEPT", order: 1 },
                    { name: "Item 3: Understand decltype", type: "CONCEPT", order: 2 },
                    { name: "Item 4: Know how to view deduced types", type: "CONCEPT", order: 3 },
                    {
                      name: "Item 5: Prefer auto to explicit type declarations",
                      type: "CONCEPT",
                      order: 4
                    },
                    {
                      name: "Item 6: Use the explicitly typed initializer idiom when auto deduces undesired types",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Item 7: Distinguish between () and {} when creating objects",
                      type: "CONCEPT",
                      order: 6
                    },
                    { name: "Item 8: Prefer nullptr to 0 and NULL", type: "CONCEPT", order: 7 },
                    {
                      name: "Item 9: Prefer alias declarations to typedefs",
                      type: "CONCEPT",
                      order: 8
                    },
                    {
                      name: "Item 10: Prefer scoped enums to unscoped enums",
                      type: "CONCEPT",
                      order: 9
                    }
                  ]
                }
              ]
            },
            {
              name: "Items 11 to 20",
              order: 1,
              subUnits: [
                {
                  name: "Guidelines",
                  order: 0,
                  items: [
                    {
                      name: "Item 11: Prefer deleted functions to private undefined ones",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Item 12: Declare overriding functions override",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Item 13: Prefer const_iterators to iterators",
                      type: "CONCEPT",
                      order: 2
                    },
                    {
                      name: "Item 14: Declare functions noexcept if they won't emit exceptions",
                      type: "CONCEPT",
                      order: 3
                    },
                    { name: "Item 15: Use constexpr whenever possible", type: "CONCEPT", order: 4 },
                    {
                      name: "Item 16: Make const member functions thread safe",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Item 17: Understand special member function generation",
                      type: "CONCEPT",
                      order: 6
                    },
                    {
                      name: "Item 18: Use std::unique_ptr for exclusive-ownership resource management",
                      type: "CONCEPT",
                      order: 7
                    },
                    {
                      name: "Item 19: Use std::shared_ptr for shared-ownership resource management",
                      type: "CONCEPT",
                      order: 8
                    },
                    {
                      name: "Item 20: Use std::weak_ptr for shared-ptr-like pointers that can dangle",
                      type: "CONCEPT",
                      order: 9
                    }
                  ]
                }
              ]
            },
            {
              name: "Items 21 to 30",
              order: 2,
              subUnits: [
                {
                  name: "Guidelines",
                  order: 0,
                  items: [
                    {
                      name: "Item 21: Prefer std::make_unique and std::make_shared to direct use of new",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Item 22: When using the Pimpl Idiom, define special member functions in the implementation file",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Item 23: Understand std::move and std::forward",
                      type: "CONCEPT",
                      order: 2
                    },
                    {
                      name: "Item 24: Distinguish universal references from rvalue references",
                      type: "CONCEPT",
                      order: 3
                    },
                    {
                      name: "Item 25: Use std::move on rvalue references, std::forward on universal references",
                      type: "CONCEPT",
                      order: 4
                    },
                    {
                      name: "Item 26: Avoid overloading on universal references",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Item 27: Familiarize yourself with alternatives to overloading on universal references",
                      type: "CONCEPT",
                      order: 6
                    },
                    { name: "Item 28: Understand reference collapsing", type: "CONCEPT", order: 7 },
                    {
                      name: "Item 29: Assume that move operations are not present, not cheap, and not used",
                      type: "CONCEPT",
                      order: 8
                    },
                    {
                      name: "Item 30: Familiarize yourself with perfect forwarding failure cases",
                      type: "CONCEPT",
                      order: 9
                    }
                  ]
                }
              ]
            },
            {
              name: "Items 31 to 40",
              order: 3,
              subUnits: [
                {
                  name: "Guidelines",
                  order: 0,
                  items: [
                    { name: "Item 31: Avoid default capture modes", type: "CONCEPT", order: 0 },
                    {
                      name: "Item 32: Use init capture to move closures into closures",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Item 33: Use decltype on auto&& parameters to std::forward them",
                      type: "CONCEPT",
                      order: 2
                    },
                    { name: "Item 34: Prefer lambdas to std::bind", type: "CONCEPT", order: 3 },
                    {
                      name: "Item 35: Prefer task-based programming to thread-based",
                      type: "CONCEPT",
                      order: 4
                    },
                    {
                      name: "Item 36: Specify std::launch::async if asynchronous execution is essential",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Item 37: Make std::threads unjoinable on all paths",
                      type: "CONCEPT",
                      order: 6
                    },
                    {
                      name: "Item 38: Be aware of varying thread handle destructor behavior",
                      type: "CONCEPT",
                      order: 7
                    },
                    {
                      name: "Item 39: Consider void futures for one-off event communication",
                      type: "CONCEPT",
                      order: 8
                    },
                    {
                      name: "Item 40: Use std::atomic for concurrency, volatile for special memory",
                      type: "CONCEPT",
                      order: 9
                    }
                  ]
                }
              ]
            },
            {
              name: "Items 41 to 42",
              order: 4,
              subUnits: [
                {
                  name: "Guidelines",
                  order: 0,
                  items: [
                    {
                      name: "Item 41: Consider pass by value for copyable parameters that are cheap to move and always copied",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Item 42: Consider emplacement instead of insertion",
                      type: "CONCEPT",
                      order: 1
                    }
                  ]
                }
              ]
            }
          ],
          description: "42 specific ways to improve your use of C++11 and C++14.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/C%2B%2B/Effective%20Modern%20C%2B%2B%20(%20PDFDrive.com%20).pdf"
        },
        {
          name: "C++ Coding Standards (Sutter & Alexandrescu)",
          type: "BOOK",
          order: 3,
          isMustDo: false,
          units: [
            {
              name: "Rules 0 to 15",
              order: 0,
              subUnits: [
                {
                  name: "Rules",
                  order: 0,
                  items: [
                    { name: "Rule 0: Don't sweat the small stuff", type: "CONCEPT", order: 0 },
                    {
                      name: "Rule 1: Compile cleanly at high warning levels",
                      type: "CONCEPT",
                      order: 1
                    },
                    { name: "Rule 2: Use an automated build system", type: "CONCEPT", order: 2 },
                    { name: "Rule 3: Use a version control system", type: "CONCEPT", order: 3 },
                    { name: "Rule 4: Make header files self-contained", type: "CONCEPT", order: 4 },
                    {
                      name: "Rule 5: Use directive guards inside header files",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Rule 6: Avoid using directives in header files",
                      type: "CONCEPT",
                      order: 6
                    },
                    {
                      name: "Rule 7: Don't use namespace using-directives in headers",
                      type: "CONCEPT",
                      order: 7
                    },
                    { name: "Rule 8: Minimize compilation dependencies", type: "CONCEPT", order: 8 },
                    {
                      name: "Rule 9: Make names clear, meaningful, and readable",
                      type: "CONCEPT",
                      order: 9
                    },
                    {
                      name: "Rule 10: Follow a consistent naming style",
                      type: "CONCEPT",
                      order: 10
                    },
                    {
                      name: "Rule 11: Keep functions short and focused",
                      type: "CONCEPT",
                      order: 11
                    },
                    {
                      name: "Rule 12: Use variables at their point of definition",
                      type: "CONCEPT",
                      order: 12
                    },
                    {
                      name: "Rule 13: Make functions simple and concise",
                      type: "CONCEPT",
                      order: 13
                    },
                    {
                      name: "Rule 14: Declare variables in the narrowest scope possible",
                      type: "CONCEPT",
                      order: 14
                    }
                  ]
                }
              ]
            },
            {
              name: "Rules 15 to 30",
              order: 1,
              subUnits: [
                {
                  name: "Rules",
                  order: 0,
                  items: [
                    { name: "Rule 15: Keep member variables private", type: "CONCEPT", order: 0 },
                    { name: "Rule 16: Avoid using global variables", type: "CONCEPT", order: 1 },
                    {
                      name: "Rule 17: Avoid using magic numbers; use constants",
                      type: "CONCEPT",
                      order: 2
                    },
                    { name: "Rule 18: Use const whenever possible", type: "CONCEPT", order: 3 },
                    { name: "Rule 19: Avoid unsafe casting", type: "CONCEPT", order: 4 },
                    {
                      name: "Rule 20: Prefer initialization to assignment in constructors",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Rule 21: Initialize member variables in order of declaration",
                      type: "CONCEPT",
                      order: 6
                    },
                    {
                      name: "Rule 22: Make destructors virtual if class has virtual functions",
                      type: "CONCEPT",
                      order: 7
                    },
                    { name: "Rule 23: Avoid resource leaks; use RAII", type: "CONCEPT", order: 8 },
                    {
                      name: "Rule 24: Define operator= and copy constructor consistently",
                      type: "CONCEPT",
                      order: 9
                    },
                    {
                      name: "Rule 25: Support safe copying and assignment",
                      type: "CONCEPT",
                      order: 10
                    },
                    {
                      name: "Rule 26: Avoid deep inheritance hierarchies",
                      type: "CONCEPT",
                      order: 11
                    },
                    {
                      name: "Rule 27: Prefer composition over inheritance",
                      type: "CONCEPT",
                      order: 12
                    },
                    {
                      name: "Rule 28: Understand public vs. private inheritance",
                      type: "CONCEPT",
                      order: 13
                    },
                    {
                      name: "Rule 29: Define virtual functions only when necessary",
                      type: "CONCEPT",
                      order: 14
                    }
                  ]
                }
              ]
            },
            {
              name: "Rules 30 to 45",
              order: 2,
              subUnits: [
                {
                  name: "Rules",
                  order: 0,
                  items: [
                    {
                      name: "Rule 30: Avoid virtual functions in constructors and destructors",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Rule 31: Destructors must not throw exceptions",
                      type: "CONCEPT",
                      order: 1
                    },
                    { name: "Rule 32: Handle self-assignment correctly", type: "CONCEPT", order: 2 },
                    {
                      name: "Rule 33: Follow standard operator overloading rules",
                      type: "CONCEPT",
                      order: 3
                    },
                    { name: "Rule 34: Overload operators logically", type: "CONCEPT", order: 4 },
                    {
                      name: "Rule 35: Avoid overloading operator, operator&&, or operator||",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Rule 36: Use smart pointers to manage dynamic resources",
                      type: "CONCEPT",
                      order: 6
                    },
                    { name: "Rule 37: Avoid naked new and delete", type: "CONCEPT", order: 7 },
                    {
                      name: "Rule 38: Never write code that relies on evaluation order",
                      type: "CONCEPT",
                      order: 8
                    },
                    {
                      name: "Rule 39: Ensure functions are exception-safe",
                      type: "CONCEPT",
                      order: 9
                    },
                    {
                      name: "Rule 40: Strive for strong exception safety",
                      type: "CONCEPT",
                      order: 10
                    },
                    {
                      name: "Rule 41: Use exceptions for exceptional conditions only",
                      type: "CONCEPT",
                      order: 11
                    },
                    { name: "Rule 42: Catch exceptions by reference", type: "CONCEPT", order: 12 },
                    { name: "Rule 43: Use standard exception classes", type: "CONCEPT", order: 13 },
                    {
                      name: "Rule 44: Avoid throwing exceptions from destructors",
                      type: "CONCEPT",
                      order: 14
                    }
                  ]
                }
              ]
            },
            {
              name: "Rules 45 to 60",
              order: 3,
              subUnits: [
                {
                  name: "Rules",
                  order: 0,
                  items: [
                    { name: "Rule 45: Catch exceptions correctly", type: "CONCEPT", order: 0 },
                    {
                      name: "Rule 46: Catch specific exceptions before generic ones",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Rule 47: Prefer standard algorithms to hand-written loops",
                      type: "CONCEPT",
                      order: 2
                    },
                    { name: "Rule 48: Use appropriate containers", type: "CONCEPT", order: 3 },
                    {
                      name: "Rule 49: Prefer vector over other containers by default",
                      type: "CONCEPT",
                      order: 4
                    },
                    {
                      name: "Rule 50: Use standard library features effectively",
                      type: "CONCEPT",
                      order: 5
                    },
                    { name: "Rule 51: Understand allocator behaviors", type: "CONCEPT", order: 6 },
                    { name: "Rule 52: Write type-safe code", type: "CONCEPT", order: 7 },
                    { name: "Rule 53: Avoid using macros", type: "CONCEPT", order: 8 },
                    { name: "Rule 54: Avoid using C-style strings", type: "CONCEPT", order: 9 },
                    {
                      name: "Rule 55: Prefer string over char* by default",
                      type: "CONCEPT",
                      order: 10
                    },
                    {
                      name: "Rule 56: Understand template compilation models",
                      type: "CONCEPT",
                      order: 11
                    },
                    {
                      name: "Rule 57: Use templates for type independence",
                      type: "CONCEPT",
                      order: 12
                    },
                    {
                      name: "Rule 58: Avoid using template specialization excessively",
                      type: "CONCEPT",
                      order: 13
                    },
                    {
                      name: "Rule 59: Use function templates correctly",
                      type: "CONCEPT",
                      order: 14
                    }
                  ]
                }
              ]
            },
            {
              name: "Rules 60 to 75",
              order: 4,
              subUnits: [
                {
                  name: "Rules",
                  order: 0,
                  items: [
                    { name: "Rule 60: Write generic algorithms", type: "CONCEPT", order: 0 },
                    { name: "Rule 61: Minimize template code bloat", type: "CONCEPT", order: 1 },
                    {
                      name: "Rule 62: Avoid casting in generic programming",
                      type: "CONCEPT",
                      order: 2
                    },
                    { name: "Rule 63: Use modern C++ language features", type: "CONCEPT", order: 3 },
                    { name: "Rule 64: Avoid using deprecated features", type: "CONCEPT", order: 4 },
                    { name: "Rule 65: Follow the C++ Core Guidelines", type: "CONCEPT", order: 5 },
                    { name: "Rule 66: Understand object lifecycles", type: "CONCEPT", order: 6 },
                    { name: "Rule 67: Avoid memory fragmentation", type: "CONCEPT", order: 7 },
                    {
                      name: "Rule 68: Optimize code only when necessary",
                      type: "CONCEPT",
                      order: 8
                    },
                    {
                      name: "Rule 69: Measure performance before optimizing",
                      type: "CONCEPT",
                      order: 9
                    },
                    {
                      name: "Rule 70: Write clean, maintainable code first",
                      type: "CONCEPT",
                      order: 10
                    },
                    {
                      name: "Rule 71: Document code logic and assumptions",
                      type: "CONCEPT",
                      order: 11
                    },
                    {
                      name: "Rule 72: Write unit tests for all key components",
                      type: "CONCEPT",
                      order: 12
                    },
                    { name: "Rule 73: Perform regular code reviews", type: "CONCEPT", order: 13 },
                    {
                      name: "Rule 74: Refactor code to maintain health",
                      type: "CONCEPT",
                      order: 14
                    }
                  ]
                }
              ]
            },
            {
              name: "Rules 75 to 90",
              order: 5,
              subUnits: [
                {
                  name: "Rules",
                  order: 0,
                  items: [
                    { name: "Rule 75: Avoid complex, unreadable logic", type: "CONCEPT", order: 0 },
                    { name: "Rule 76: Keep code interfaces stable", type: "CONCEPT", order: 1 },
                    { name: "Rule 77: Minimize global state", type: "CONCEPT", order: 2 },
                    {
                      name: "Rule 78: Support thread safety in libraries",
                      type: "CONCEPT",
                      order: 3
                    },
                    { name: "Rule 79: Avoid race conditions", type: "CONCEPT", order: 4 },
                    {
                      name: "Rule 80: Use locks and synchronization correctly",
                      type: "CONCEPT",
                      order: 5
                    },
                    { name: "Rule 81: Minimize lock contention", type: "CONCEPT", order: 6 },
                    {
                      name: "Rule 82: Use condition variables for thread signaling",
                      type: "CONCEPT",
                      order: 7
                    },
                    {
                      name: "Rule 83: Catch all thread-level exceptions",
                      type: "CONCEPT",
                      order: 8
                    },
                    { name: "Rule 84: Use standard concurrency tools", type: "CONCEPT", order: 9 },
                    {
                      name: "Rule 85: Avoid using platform-specific threading APIs",
                      type: "CONCEPT",
                      order: 10
                    },
                    { name: "Rule 86: Understand atomic operations", type: "CONCEPT", order: 11 },
                    {
                      name: "Rule 87: Write lock-free code with extreme care",
                      type: "CONCEPT",
                      order: 12
                    },
                    {
                      name: "Rule 88: Ensure memory visibility across threads",
                      type: "CONCEPT",
                      order: 13
                    },
                    { name: "Rule 89: Avoid busy waiting", type: "CONCEPT", order: 14 }
                  ]
                }
              ]
            },
            {
              name: "Rules 90 to 100",
              order: 6,
              subUnits: [
                {
                  name: "Rules",
                  order: 0,
                  items: [
                    {
                      name: "Rule 90: Handle thread termination cleanly",
                      type: "CONCEPT",
                      order: 0
                    },
                    {
                      name: "Rule 91: Avoid deadlock by acquiring locks in consistent order",
                      type: "CONCEPT",
                      order: 1
                    },
                    {
                      name: "Rule 92: Document thread safety guarantees of functions",
                      type: "CONCEPT",
                      order: 2
                    },
                    {
                      name: "Rule 93: Use standard stream I/O correctly",
                      type: "CONCEPT",
                      order: 3
                    },
                    {
                      name: "Rule 94: Avoid standard stream synchronization issues",
                      type: "CONCEPT",
                      order: 4
                    },
                    {
                      name: "Rule 95: Use standard library stream formatters",
                      type: "CONCEPT",
                      order: 5
                    },
                    {
                      name: "Rule 96: Avoid binary serialization format issues",
                      type: "CONCEPT",
                      order: 6
                    },
                    {
                      name: "Rule 97: Write portable file handling code",
                      type: "CONCEPT",
                      order: 7
                    },
                    { name: "Rule 98: Handle filesystem errors cleanly", type: "CONCEPT", order: 8 },
                    { name: "Rule 99: Document all public APIs", type: "CONCEPT", order: 9 },
                    {
                      name: "Rule 100: Ensure robust error checking on system calls",
                      type: "CONCEPT",
                      order: 10
                    }
                  ]
                }
              ]
            }
          ],
          description: "101 rules, guidelines, and best practices for writing high-quality C++ code.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/C%2B%2B/Sutter.C%2B%2B%20Coding%20Standards.2005.pdf"
        },
        {
          name: "C++ Concurrency in Action (Anthony Williams)",
          type: "BOOK",
          order: 4,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: Hello, world of concurrency in C++",
              order: 0,
              subUnits: [
                {
                  name: "Core Concurrency Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concurrency mechanics in Chapter 1: Hello, world of concurrency in C++",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Managing threads",
              order: 1,
              subUnits: [
                {
                  name: "Core Concurrency Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concurrency mechanics in Chapter 2: Managing threads",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Sharing data between threads",
              order: 2,
              subUnits: [
                {
                  name: "Core Concurrency Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concurrency mechanics in Chapter 3: Sharing data between threads",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: Synchronizing concurrent operations",
              order: 3,
              subUnits: [
                {
                  name: "Core Concurrency Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concurrency mechanics in Chapter 4: Synchronizing concurrent operations",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: The C++ memory model and operations on atomic types",
              order: 4,
              subUnits: [
                {
                  name: "Core Concurrency Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concurrency mechanics in Chapter 5: The C++ memory model and operations on atomic types",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: Designing lock-based concurrent data structures",
              order: 5,
              subUnits: [
                {
                  name: "Core Concurrency Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concurrency mechanics in Chapter 6: Designing lock-based concurrent data structures",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 7: Designing lock-free concurrent data structures",
              order: 6,
              subUnits: [
                {
                  name: "Core Concurrency Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concurrency mechanics in Chapter 7: Designing lock-free concurrent data structures",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 8: Designing concurrent code",
              order: 7,
              subUnits: [
                {
                  name: "Core Concurrency Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concurrency mechanics in Chapter 8: Designing concurrent code",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 9: Advanced thread management",
              order: 8,
              subUnits: [
                {
                  name: "Core Concurrency Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concurrency mechanics in Chapter 9: Advanced thread management",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 10: Parallel algorithms",
              order: 9,
              subUnits: [
                {
                  name: "Core Concurrency Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concurrency mechanics in Chapter 10: Parallel algorithms",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 11: Testing and debugging concurrent applications",
              order: 10,
              subUnits: [
                {
                  name: "Core Concurrency Concepts",
                  order: 0,
                  items: [
                    {
                      name: "Concurrency mechanics in Chapter 11: Testing and debugging concurrent applications",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            }
          ],
          description: "A comprehensive guide to writing multithreaded concurrent applications in C++.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/C%2B%2B/C%2B%2B%20Concurrency%20in%20Action.pdf"
        },
        {
          name: "C++ Primer (5th Edition)",
          type: "BOOK",
          order: 5,
          isMustDo: false,
          units: [
            {
              name: "Chapter 1: Getting Started",
              order: 0,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 1: Getting Started",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 2: Variables and Basic Types",
              order: 1,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 2: Variables and Basic Types",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 3: Strings, Vectors, and Arrays",
              order: 2,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 3: Strings, Vectors, and Arrays",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 4: Expressions",
              order: 3,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    { name: "Study details of Chapter 4: Expressions", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 5: Statements",
              order: 4,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    { name: "Study details of Chapter 5: Statements", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 6: Functions",
              order: 5,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    { name: "Study details of Chapter 6: Functions", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 7: Classes",
              order: 6,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    { name: "Study details of Chapter 7: Classes", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 8: The IO Library",
              order: 7,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 8: The IO Library",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 9: Sequential Containers",
              order: 8,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 9: Sequential Containers",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 10: Generic Algorithms",
              order: 9,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 10: Generic Algorithms",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 11: Associative Containers",
              order: 10,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 11: Associative Containers",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 12: Dynamic Memory",
              order: 11,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 12: Dynamic Memory",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 13: Copy Control",
              order: 12,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    { name: "Study details of Chapter 13: Copy Control", type: "CONCEPT", order: 0 }
                  ]
                }
              ]
            },
            {
              name: "Chapter 14: Overloaded Operations and Conversions",
              order: 13,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 14: Overloaded Operations and Conversions",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 15: Object-Oriented Programming",
              order: 14,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 15: Object-Oriented Programming",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 16: Templates and Generic Programming",
              order: 15,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 16: Templates and Generic Programming",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 17: Specialized Library Facilities",
              order: 16,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 17: Specialized Library Facilities",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 18: Tools for Large Programs",
              order: 17,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 18: Tools for Large Programs",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            },
            {
              name: "Chapter 19: Specialized Tools and Techniques",
              order: 18,
              subUnits: [
                {
                  name: "Core Reading",
                  order: 0,
                  items: [
                    {
                      name: "Study details of Chapter 19: Specialized Tools and Techniques",
                      type: "CONCEPT",
                      order: 0
                    }
                  ]
                }
              ]
            }
          ],
          description: "A detailed, comprehensive introduction to standard C++ library structures and OOP features.",
          url: "https://github.com/sakshamrathi21/SOC-Conquering_Competitive_Programming/blob/main/Resources/C%2B%2B/C%2B%2B%20Primer%20(5th%20Edition).pdf"
        }
      ],
      description: "Advanced language mechanics, template specifications, resource management (RAII), exception handling, concurrency, multithreading, and performance profiling.",
      icon: "🛠️"
    }
  ]
};
