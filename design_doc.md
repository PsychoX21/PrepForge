# PrepForge - Detailed System Design & Architecture Document

PrepForge is a highly interactive, responsive, cross-platform collaborative preparation platform tailored for students and job/internship applicants. It tracks granular preparation progress across multiple highly competitive tracks (e.g., Quantitative Trading, Software Engineering), drives consistency through gamification, peer accountability, live focus broadcasting, and real-time collaboration.

---

## 1. Tech Stack & Cross-Platform Strategy

To achieve a seamless, highly responsive, and real-time cross-platform experience (Web, Android, iOS), the following technology stack is proposed:

### Cross-Platform Strategy
We will use a **Monorepo** approach utilizing **React Native (Expo)** combined with **React (Next.js)** to share core business logic, state management, and even UI components (via tools like Tamagui or React Native Web).
*   **Web Application**: Next.js (React) for SEO, fast load times (SSR/SSG), and robust web routing.
*   **Mobile Applications (Android & iOS)**: React Native (managed by Expo) to build native applications for both platforms from a single codebase.
*   **Desktop Application**: Electron or Tauri wrapping the web application for native desktop experiences.

### Frontend Stack (UI/UX)
*   **Core**: React, TypeScript.
*   **Styling**: **Tailwind CSS** (version to be confirmed) paired with **Shadcn UI** for robust, highly-customizable components. For cross-platform parity, we'll leverage **NativeWind** (Tailwind for React Native) or **Tamagui**. This ensures consistent dark mode aesthetics, glassmorphism, smooth gradients, and highly maintainable utility classes instead of vanilla CSS.
*   **Animations**: **Framer Motion** (Web) and **Reanimated** (Mobile) to handle the complex, satisfying micro-animations that will wow the user.
*   **Fonts**: Inter or Outfit for clean, modern typography.
*   **State Management**: Zustand or Redux Toolkit for complex, shared state (auth, user progress).

### Backend & Database
*   **Backend Framework**: Node.js with Express or NestJS.
*   **Database**: PostgreSQL (Relational data: users, groups, tracks, progress) + Redis (caching, fast leaderboard/ranking retrieval, and websocket session state).
*   **ORM/Query Builder**: Prisma or Drizzle ORM (Drizzle preferred for edge compatibility and maximum performance).
*   **Authentication**: Firebase Auth or Supabase Auth (leveraging **Google OAuth / Google Console Login**).

### Real-Time & Advanced Features (WebSockets)
*   **Live Focus Broadcasting & Real-Time Chat**: Socket.io or native WebSockets (ws library) for synchronized team group chats and live presence.
*   **Live Shared Whiteboard**: WebRTC for peer-to-peer data syncing, combined with a library like **Excalidraw** or **TLDraw** customized for real-time multiplayer editing via WebSockets.

---

## 2. Core Features & Architecture

### Authentication & Groups
*   **Google Login**: Frictionless onboarding using Google OAuth.
*   **Groups & Invites**: Users can create study groups and generate unique, expiring invite links. Groups will have an option upon creation to be "Empty" or "Pre-filled with Default Tracks" (the PrepForge standard syllabus).

### Gamification & Peer Accountability
*   **XP & Levels**: Every interaction (marking a segment done, commenting, finishing a chapter) grants XP. Accumulating XP levels up the user profile.
*   **Streaks**: Daily logins and task completions maintain a streak, rewarding consistency.
*   **Rankings**: Live leaderboards per group, segmented by track (e.g., "Top in Quant", "Top Overall").
*   **Accountability Grids**: A visual heatmap (like GitHub contributions) for each peer in a group to see who is studying what and when.

### Granular Progress Tracking (The Resource Model)
Resources will not be monolithic. They follow a deep recursive hierarchy:
`Track -> Category -> Resource (Book/Course) -> Unit (Chapter/Module) -> Sub-Unit (Section/Topic) -> Item (Question/Video/Segment)`

**Resource Actions available at ANY level:**
1.  **Mark Done / Progress**: Checkbox (0-100% completion).
2.  **Star / Important**: Highlight for priority.
3.  **Watch/See Later**: Add to a personal queue.
4.  **Group/Categorize**: Add to custom lists.
5.  **Comment / Discuss**: Threaded discussions attached specifically to a question or a section.
6.  **Log Key Findings**: Add "Notes" or "Insights" to any item. These can be marked as *Personal* (private notes on how you solved a specific problem/applied logic) or *Public* (sharing a clever insight/logic formula with the entire group).

---

## 3. The PrepForge Default Content Strategy (Recursive Breakdown)

Based on the provided preparation document, when a group is initialized with "Default Content", the database populates the following recursive structure:

### Track 1: Quantitative Trader/Researcher

*   **Category: Probability Theory & Statistics**
    *   *Resource: KF Book*
        *   Chapter 2 -> Section 2.1 -> (Topics: Probability Basics)
    *   *Resource: CS215 Slides*
        *   Module: Distributions -> Topics: (Gaussian, Bernoulli, etc.) -> Sub-topics: (Properties, Mathematical Scenarios)
    *   *Resource: The Green Book (Must Do)*
        *   Chapters 1 to (N-1) -> Sections -> Individual Puzzles
    *   *Resource: Additional Probability Books (1, 2, 3...)*
        *   Chapters -> Questions

*   **Category: Puzzle Solving & Practice**
    *   *Resource: Brainstellar*
        *   Difficulty Levels -> Puzzle Categories -> Specific Puzzles
    *   *Resource: QuantGuide*
        *   Topics -> Difficulty (Focus: Hard Questions) -> Specific Questions
    *   *Resource: Jane Street Monthly Puzzles*
        *   Year -> Month -> Puzzle Item
    *   *Resource: 80-in-8 Speed Tests*
        *   Test Sets -> Individual Questions (Timed Environment)

*   **Category: AI, ML, Deep Learning & Systems**
    *   *Resource: AI-ML Lecture Scribes* -> Lectures -> Topics
    *   *Resource: Graphical Models Book* -> Chapters 3 & 4 -> Sections
    *   *Resource: MIT Deep Learning Course* -> Video Lectures -> Concepts

*   **Category: Finance & Trading Basics**
    *   *Resource: Company Docs (1 & 2)* -> Terminologies
    *   *Resource: Senior Notes (1, 2, 3, 4)* -> Sections

### Track 2: Software Engineer

*   **Category: Competitive Programming (CP)**
    *   *Resource: CSES Problem Set (Target: 180/400)*
        *   Sections (Introductory, Sorting, etc.) -> Individual Problems
    *   *Resource: SOC Resources*
        *   Topic Modules -> 150 Assorted Problems
    *   *Resource: Steven-Halim Book & Handbooks (1, 2)*
        *   Chapters -> Core DSA Concepts
    *   *Resource: Codeforces*
        *   Topic Tags -> Problems (Targeting Rating [Current+100, Current+200])
    *   *Resource: LeetCode (Specifically "Design" section & hard problems)*
        *   Curated Sheets -> Topics -> Top 10 Hard Problems per Topic

*   **Category: Systems Courses**
    *   *Resource: Computer Networks*
        *   Notes/Slides/Playlist/Textbook -> Modules (OSI, TCP/IP, etc.)
    *   *Resource: Computer Architecture*
        *   Slides/Book 1/Book 2 -> Chapters
    *   *Resource: Operating Systems*
        *   Lecture Notes/Webpage/Book -> Modules (Concurrency, Paging, etc.)
    *   *Resource: Database Management Systems (DBMS)*
        *   Slides/Book -> Modules (SQL, Normalization, ACID)

*   **Category: C++ Mastery (For HFTs)**
    *   *Resource: Core C++ Guide* -> Sections
    *   *Resource: Modern C++ Books (1, 2)* -> Chapters -> Features (Smart Pointers, Move Semantics)
    *   *Resource: Coding Standards Books (3, 4, 5)* -> Rules/Guidelines

### Track 3: Resume Preparation & General Tips

*   **Category: Resume Building**
    *   *Resource: Resume Formats* -> (Software 1-page, Quant 1-page, etc.)
    *   *Resource: Sections Formatting* -> (PoR, Extracurriculars, Projects)
    *   *Resource: Resume Repository* -> Example Reviews
*   **Category: Soft Skills & Interviews**
    *   *Resource: Communication Books (How to Talk with Anyone, Dale Carnegie)* -> Chapters
    *   *Resource: Mock Interviews* -> Videos/Company Pages -> Specific Question Walkthroughs

*(Users can clone these default tracks and add their own specific Custom Categories, Resources, and Items).*

---

## 4. Design & Aesthetics (The "Wow" Factor)

The UI must feel like a premium, state-of-the-art hacker/quant workstation merged with a sleek modern app.

*   **Dark Mode First**: Deep charcoal backgrounds (`#0d1117` or `#121212`) with vibrant neon accents (electric blue, vibrant purple, and neon green for success states).
*   **Glassmorphism**: Modals, dropdowns, and floating chat windows will use subtle translucent backgrounds with background-blur effects to create depth.
*   **Typography**: `Inter` for highly readable dense data (leaderboards, question lists) and `Outfit` for large, bold headers and level-up screens.
*   **Micro-animations**:
    *   Hovering over a task smoothly elevates it with a soft glow.
    *   Checking a box triggers a satisfying burst/confetti micro-animation.
    *   XP bars fill up smoothly with a glowing particle effect.
*   **Responsive Layouts**:
    *   *Desktop*: Multi-pane views. Left sidebar for tracks, middle for granular resources, right panel for the live accountability grid and chat.
    *   *Mobile*: Bottom navigation bar. Swipe gestures to navigate between track categories.

## 5. Advanced Interactive Components

*   **The War Room (Live Focus Broadcasting)**: A dedicated view where you can see which group members are online and exactly what granular sub-topic they are working on (e.g., "UserA is currently solving *CSES -> Sorting -> Playlist*").
*   **Real-time Whiteboard**: An embedded Excalidraw or TLDraw instance linked to a specific problem. If two students are stuck on a Quant puzzle, they click "Open Whiteboard" and immediately draw together. We will use CRDTs (Conflict-free Replicated Data Types) via **Yjs** to ensure flawless synchronization without merge conflicts.
*   **Synchronized Chat**: Floating chat overlay that contextually switches based on whether you are chatting in the general group, or inside a specific "Discussion Thread" attached to *Chapter 2 of the Green Book*.
