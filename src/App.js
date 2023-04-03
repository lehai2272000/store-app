import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Page/Home/index";
import Detail from "./Page/Detail/index";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;



// import React, { Component } from "react";
// import {
//   BrowserRouter as Router,
//   Route, Routes,
//   withRouter,
// } from "react-router-dom";

// import Home from "./Page/Home/index";
// import Detail from "./Page/Detail/index";

// class Main extends Component {
//   render() {
//     return (
//       <div>
//       <Routes>
//       <Route path="/" exact component={Home} />
//         <Route path="/detail/:id">
//           <Detail />
//         </Route>
//       </Routes>
//     </div>
//     );
//   }
// }

// const RoutedMain = withRouter(Main);

// function App() {
//   return (
//     <Router>
//       <RoutedMain />
//     </Router>
//   );
// }

// export default App;
