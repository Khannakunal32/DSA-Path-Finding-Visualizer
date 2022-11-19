// import React from 'react';
// import './App.css';
// import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

// function App() {
//   return (
//     <div className="App">

//       <PathfindingVisualizer></PathfindingVisualizer>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";

// function App() {
//   return (
//     // <div>
//       <div class="header">
//         <div class="inner-header flex">
//           <h1>Find the shortest path</h1>
//         </div>

//         <PathfindingVisualizer class="grid"></PathfindingVisualizer>
//         <div>
//           <svg
//             class="waves"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             viewBox="0 24 150 28"
//             preserveAspectRatio="none"
//             shape-rendering="auto"
//           >
//             <defs>
//               <path
//                 id="gentle-wave"
//                 d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
//               />
//             </defs>
//             <g class="parallax">
//               <use
//                 xlinkHref="#gentle-wave"
//                 x="48"
//                 y="0"
//                 fill="rgba(255,255,255,0.7"
//               />
//               <use
//                 xlinkHref="#gentle-wave"
//                 x="48"
//                 y="3"
//                 fill="rgba(255,255,255,0.5)"
//               />
//               <use
//                 xlinkHref="#gentle-wave"
//                 x="48"
//                 y="5"
//                 fill="rgba(255,255,255,0.3)"
//               />
//               <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
//             </g>
//           </svg>
//         </div>
//         <div class="content flex">
//           <p>By Chhavi | Kunal Khanna </p>
//         </div>
//       </div>
//     // </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";

function App() {
  return (
    <section>
      <h1>Shortest Path Finding</h1>
      <PathfindingVisualizer class="grid"></PathfindingVisualizer>
      <h6>By Chhavi | Kunal Khanna</h6>
    </section>
  );
}

export default App;
