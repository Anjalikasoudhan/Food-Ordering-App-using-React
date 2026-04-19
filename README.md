# Food-Ordering-App-using-React
A high-performance React.js food ordering app featuring live Swiggy API integration, custom Shimmer UI, and a unique Purple &amp; White brand identity.
🚀 Key Features
Live API Integration: Fetches real-time restaurant data from Bengaluru using the Swiggy Public API.

Custom Shimmer UI: A professional "skeleton" loading state that uses CSS keyframe animations to improve UX.

Dual-State Filtering: Implemented a "Master Copy" vs. "Filtered Copy" pattern to allow instant UI updates without extra API calls.

Dynamic Data Extraction: Uses the JavaScript .find() method to robustly navigate complex nested JSON structures.

Responsive Design: A clean, mobile-friendly grid layout built with Flexbox.

🛠️ Tech Stack
Library: React.js (Hooks: useState, useEffect)

Bundler: Parcel (Zero Config)

Styling: Custom CSS3 (BEM-inspired naming)

Data Handling: Fetch API, Async/Await, Optional Chaining

📂 Project Structure
Plaintext
/src
  /components
    - Header.js
    - Body.js
    - ResCard.js
    - Shimmer.js
  /utils
    - constants.js
    - mockData.js
  - App.js
  - index.css
💡 What I Learned 
State vs. Variables: Understood why useState is required to trigger UI re-renders.

Side Effects: Mastered useEffect to handle API calls and prevent infinite render loops.

Performance: Used the key prop in .map() to help React's reconciliation algorithm.

UX Design: Built a Shimmer UI to solve the "blank screen" problem during data transit.

🏁 How to Run
Clone the repo: git clone 

Install dependencies: npm install

Start the app: npx parcel index.html
