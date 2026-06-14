ENUM: AI-Powered Production Engineering Simulations

Bridges the gap between coding exercises and real-world software engineering.
Simulates realistic production outages and bugs for hands-on debugging practice.
Uses AI to generate incidents, provide hints, and evaluate solutions in real time.
Sandboxed code editor + live preview + logs recreate full-stack workflows.
Tracks progress with XP, analytics, and leaderboards to measure productivity gains.
Executive Summary:
ENUM is an AI-driven platform that trains developers on real production issues rather than toy coding problems. Users select or are assigned a scenario (e.g. a broken web service or CI pipeline), then debug it in a live, containerized environment with a code editor, terminal, and log console. AI components generate the bugs (“incidents”), give contextual hints, and evaluate the fix, creating a practical learning loop. By focusing on real engineering tasks—broken APIs, frontend crashes, deployment failures, memory leaks, etc.—ENUM improves developer productivity and readiness in a way that simple algorithmic exercises cannot.

Core Vision & Value Proposition
Many developers learn programming through isolated DSA puzzles, but industry hires them to solve production problems. ENUM’s vision is to “train developers for production, not just programming.” By simulating real software failures, ENUM reduces onboarding time and elevates engineering skills. It adds measurable value to educational programs, coding bootcamps, and corporate training by providing practical, hands-on experience with real-world codebases. Teams can use ENUM to assess candidates, upskill junior engineers, or rehearse incident response drills. In short, ENUM turns debugging into an interactive learning game powered by AI, drastically increasing developer productivity on real tasks.

Target Users & Use Cases
Aspiring Developers & Students: Gain practical experience beyond textbooks by fixing real bugs.
Educators & Bootcamps: Integrate ENUM scenarios into curricula for experiential learning.
Engineering Teams & Startups: Train new hires or practice on tailored workflows (frontend, backend, DevOps).
Recruiters & Interviewers: Assess candidate skills with live coding incidents instead of whiteboard questions.
Open-Source Projects: Let maintainers curate bug drills for contributors or onboarding.
Each user interacts with ENUM through its web interface (or CLI), choosing a track or scenario. For example, a student might select a “React hydration bug” to learn frontend debugging, while a backend team might run a “database connection leak” scenario. The AI-driven hints and automatic scoring ensure all users progress at their own pace.

Key Features
AI Incident Generator: Automatically crafts realistic production bugs using LLMs. For example, injecting a React hydration mismatch, a failing REST API call, a CI/CD pipeline error, or a Linux container fault. This ensures endless unique scenarios and eliminates manual setup.

Interactive Debugging Environment: A web-based Monaco code editor (with live Sandpack preview) and terminal access lets users edit code, rerun services, and view logs in real time, just like a devbox or IDE. For instance, running npm start in an integrated terminal shows the error stack trace in the console panel.

Smart Hinting & Guidance: If users get stuck, clicking “Hint” invokes an AI assistant (e.g. Groq Llama model) that analyzes the current logs or code context and provides incremental clues (e.g. “Check the React key prop warning”). Hints never give away the solution but nudge the user toward debug steps, personalizing help based on their progress.

Automated Evaluation & Feedback: Once the user submits a fix, the platform auto-runs tests or checks application health. Beyond pass/fail, AI evaluates the developer’s reasoning and solution quality. For example, an AI model can score code fixes, point out missed edge cases, or validate that best practices were followed. This “debug assistant” model offers rich feedback and scoring (XP points, badges) much like an instructor.

Adaptive Difficulty & Tracks: ENUM adjusts scenario complexity dynamically. Easy-mode gives simpler hints and shallow issues; expert-mode introduces cascading failures (microservice outages, race conditions). Tracks (Frontend, Backend, DevOps, Linux) ensure users encounter relevant tech stacks. The platform uses user performance to tune the difficulty of the next incident (e.g., longer context or additional failures).

Real-Time Collaboration: Users can invite team members to pair-program or compete on the same scenario. Shared sessions synchronize code editors and terminals via WebSockets or a hosted session, allowing mentors to watch and guide in real time. This makes ENUM ideal for team training or remote workshops.

Analytics & Progress Tracking: ENUM logs every session to provide dashboards and metrics. Users see XP earned, time-to-fix, common error types, and leaderboards. Educators and team leads can view cohort analytics (e.g. average resolution time) to identify skill gaps. All stats are stored in a MongoDB (scenarios database) and Redis (session state), enabling future gamification and improvement tracking.

Demo Flow & Script
Setup Scenario: Presenter selects a demo scenario (e.g. “Vue App Crash” or “Docker Container Bug”) from the ENUM dashboard. The UI shows the scenario description (“Fix the logged error ‘Module not found’”) and boots a sandbox.
Environment Launch: The system launches a Docker container with the broken code. The web UI displays the Monaco code editor (loaded with the codebase), a browser preview pane, and a terminal/log panel. Presenter says: “Here’s the failing app and console log.” (Logs show the error message.)
Explain the Bug: The audience sees the error in the browser and the code. Presenter points out the code line causing the issue.
Attempt Debugging: Presenter types a fix in the editor (e.g. corrects an import path) and runs the app. If errors remain, the AI hint button can be shown. The Presenter clicks “AI Hint” – behind the scenes, Groq’s Llama model analyzes the code/log and returns a helpful clue (displayed on-screen). Presenter reads it: “It suggests checking the Webpack alias config.”
Apply Fix & Validate: Using the hint, Presenter applies the correct change and clicks “Run.” The terminal reruns tests; the app now loads correctly. Presenter shows that all checks passed.
AI Evaluation: ENUM’s backend runs an AI-based evaluation (or compares to expected output) and awards points. The UI pops up a scorecard: “Correct! +100 XP. Time: 45s.”
Show Leaderboards/Analytics: Presenter clicks to the stats panel. It shows cumulative XP and rank among peers, along with a chart of scenarios solved and time per task.
Multi-Track Example: Optionally, Presenter switches to another track (e.g. a Linux environment fault). The environment switches context (a terminal with ls /app or journalctl), demonstrating that ENUM can simulate OS-level issues too.
Wrap-Up: Presenter highlights how each step tied into developer workflows (code -> debug -> AI hints -> deploy), emphasizing productivity.
Sample Script: “Let’s fix a broken app. The first scenario is a React UI that isn’t loading. Notice the preview pane is blank and the terminal shows a hydration error. I’ll try modifying the component code and refresh... (the error persists). Now I’ll use the AI hint: it tells me to check unique keys in the list. I add the missing key prop and rerun. Success! The page renders, tests pass, and ENUM reports +100 XP. On the dashboard you can see our progress. This demonstrates how ENUM turns a real bug into a learning exercise.”

Technical Architecture
Frontend (Next.js + React): The user interface is built with Next.js, using the Monaco Editor for code editing and Sandpack (CodeSandbox) for live previews. These embed a fully interactive code playground in the browser. WebSockets (e.g. via Socket.io) enable real-time collab sessions.
Backend (Node.js): The server is Node-based (Express or Nest), managing scenario orchestration. Upon scenario start, it launches a Docker container or VM for isolation, pulls the code repository, and exposes a secure shell/terminal interface.
Sandboxing (Docker+Sandpack): Each exercise runs in a fresh Docker container (for backend code or OS-level scenarios) or a Sandpack iframe (for frontend JS). This mimics real environments (complete with node_modules, web server, shell access).
AI Providers (Groq & OpenRouter): We use Groq as the primary LLM API. Groq’s custom LPU chips deliver ultra-low-latency inference (500+ tokens/sec), and its free tier is generous (e.g. Llama-3.1-8B: 30 RPM, 14,400 RPD; Llama-3.3-70B: 30 RPM, 1,000 RPD). ENUM switches to OpenRouter as a fallback or for additional models. OpenRouter’s unified API gives access to hundreds of models and can automatically route to an alternate model if one fails. (OpenRouter guarantees “Zero Completion Insurance,” i.e. if a provider errors, it will retry with a different model.) The API calls use the OpenAI-compatible endpoints (e.g. https://api.groq.com/openai/v1/… and https://api.openrouter.ai/v1/…) so we can easily swap providers.
Database & Storage: MongoDB stores scenario definitions, user progress, and analytics. Redis caches active sessions and stores transient state (e.g. partial solutions) for performance.
CI/CD & Deployment: The app is containerized and can be deployed via CI (e.g. GitHub Actions) to platforms like Vercel (for the web UI) and AWS/GCP (for sandbox execution). Environment variables (e.g. GROQ_API_KEY, OPENROUTER_API_KEY) are used for configuration. We ensure sandbox teardown after each session for security.
Security & Compliance: All code execution is sandboxed; user code never reaches our servers outside the container. We also implement rate limits (via provider tiers) and API quotas to avoid abuse.
Quickstart Setup
Clone & Install:

bash
Copy
git clone https://github.com/your-org/enum.git
cd enum
npm install
Configure Environment: Create a .env file in the project root with your API keys (no credit card needed for initial testing):

env
Copy
# Replace the placeholders with your actual API keys
GROQ_API_KEY=your_groq_api_key
OPENROUTER_API_KEY=your_openrouter_api_key
Run the App:

bash
Copy
npm run dev
The web app starts on http://localhost:3000. Open it in a browser to access ENUM.

Test AI Integration: For example, to test Groq via the OpenAI SDK:

js
Copy
import OpenAI from 'openai';

const groq = new OpenAI({ 
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1'
});
const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: 'Explain this React hydration error' }]
});
console.log(response.choices[0].message.content);
If Groq reaches its rate limit, the code can fall back to OpenRouter:

js
Copy
const or = new OpenAI({ 
  apiKey: process.env.OPENROUTER_API_KEY, 
  baseURL: 'https://api.openrouter.ai/v1' 
});
// Fallback example:
let result = await groq.chat.completions.create({ /* ... */ });
if (!result || result.error) {
  result = await or.chat.completions.create({
    model: '~openai/gpt-latest',  // alias for newest OpenAI model via OpenRouter
    messages: [{ role: 'user', content: 'Explain this React hydration error' }]
  });
}
console.log(result.choices[0].message.content);
You can also verify connectivity by listing models via Groq’s API:

bash
Copy
curl -H "Authorization: Bearer $GROQ_API_KEY" \
     "https://api.groq.com/openai/v1/models"
This returns a JSON list of available models.

Roadmap & Scalability
Expanding Scenario Library: Add more tracks (e.g. Fullstack, Data Engineering) and scenarios (microservices, networking, database) using community contributions.
Multi-language Support: Currently supports JS/Python; plan to add Java, Go, etc., to broaden use cases.
Advanced AI Modules: Integrate observability analysis (automated log reasoning), anomaly detection, and voice-based hints.
Gamification & Certifications: Introduce achievement badges, personalized learning paths, and official “ENUM Certified Engineer” tracks.
Scaling: Use container orchestration (Kubernetes) to handle many concurrent users. Batch-generate incidents via OpenRouter for continuous content. Cache AI responses to stay within free-tier limits.
Hackathon Submission & Impact
Track Fit – Future of Productivity: ENUM directly addresses developer productivity by transforming how engineers learn and work. It’s an AI-powered workflow tool for developers and teams—exactly what the “Future of Productivity” track seeks. Rather than abstract AI demos, ENUM is a practical, scalable tool: it simulates real dev tasks and incorporates AI where it adds value (incident generation, debugging assistance, analytics). The judges will see a polished demo with live code edits, terminal logs, and AI hints, highlighting a clear productivity impact.

Real-world Impact: By focusing on real production incidents, ENUM significantly reduces the gap between theory and practice. Potential impact metrics include reduced onboarding time (e.g. “new hire fixes production bug 50% faster after ENUM training”), improved code quality (fewer missed errors), and measurable learning outcomes (XP growth, success rate). Judges care about innovation with substance: ENUM isn’t just another chatbot—it’s specialized tooling for engineers. We’ll emphasize:

Usability: Clean UI, instant feedback, and progressive difficulty.
AI Integration: Meaningful use of AI (Groq and OR models for specific tasks) rather than gimmicks.
Scalability: Cloud deployment ready, plus fallback routing for reliability.
Demonstrable Results: Live demo will show a bug resolved in seconds, and show the analytics panel to prove productivity gains.
Contribution & License
Contributions are welcome! If you find bugs or want to add features, please submit a pull request on GitHub. We follow a standard Contributor License Agreement (CLA) (TBD). This project is released under the MIT License (see LICENSE file) to encourage broad usage and extension.

Contact & Credits
Developers: Abhinavpreet Singh Arora (@Abhinavpreet-Singh) and team (names TBA).
Contact: abhinavpreetsingh.arora@gmail.com | LinkedIn
Special thanks to Groq and OpenRouter for their free-tier APIs and documentation.

Feature Comparison (AI Providers)
Provider	Free Tier Details	Rate Limits	Latency	Recommended Models (Free)
Groq	Llama-3.3-70B, Llama-3.1-8B (cloud service)	30 RPM; 1,000 RPD (70B); 30 RPM; 14,400 RPD (8B)	~500+ tokens/sec	llama-3.1-8b-instant (high volume)<br>llama-3.3-70b-versatile (high quality)
OpenRouter	25+ free models (community-driven) via unified API	20 RPM; 50 RPD on free plan<br>(1,000 RPD after $10 credit)	~1–2 sec (model-dependent)	deepseek-chat, moonshot/kimi, openai/gpt-oss-20b (via OR router)
Google Gemini	Gemini-3 Flash/Lite (3.5, 3.1, 2.5 flashes) free tier	No explicit simple cap; Tiered by usage<br>(e.g. 500 RPD for grounding calls)	~0.5–1 sec (varies by context)	gemini-3.5-flash (fast new model)<br>gemini-3.1-flash/lite (free preview)

Demo Sequence Diagram
AIService
Sandbox
WebUI
User
AIService
Sandbox
WebUI
User
Selects scenario "React Crash"
Launch container with broken code
Provide editor, browser preview, and logs
Edit code / Run application
Execute code and capture logs
Return runtime logs & output
Click "Hint" for AI help
Request hint (pass logs/code context)
Returns hint text
Display AI hint (e.g. "Check the key prop")
Apply fix / Run again
Re-execute code/tests
Results (tests passed/failed)
Show success and update score


Show code
Each step in the sequence above corresponds to a stage in the demo: selecting a broken scenario, debugging via the UI, AI-powered hinting, and final validation with feedback.

Sources: Groq and OpenRouter official docs were used for API details; Google Gemini API docs informed our free-tier usage. These underline ENUM’s use of modern AI infrastructure to deliver a practical developer productivity tool.
