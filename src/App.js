import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import "./app.css"
// import UserList from './components/userList/UserList';
// import Home from './pages/home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'

// import UserList from './pages/UserList/UserList';

import User from './pages/user/User';



// export default function App() {
//   return (
//     <div>
//       hello brother
//     </div>
//   )
// }








function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        {/* <div className="others">
          Other pages
        </div> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route exact path="/project-mysite">
            <Home />
          </Route> */}

          <Route exact path="/reactAdmin-project">
            <Home />
          </Route>


          <Route path="/user">
            <User />
          </Route>

          <Route path="/user/:userId">
            <User />
            {/* <Home /> */}
          </Route>

        </Switch>


        {/* <Home /> */}

        {/* <UserList /> */}

      </div>

    </Router>
  );
}

export default App;









// function App() {
//   return (
//     <Router>
//       <Topbar />
//       <div className="container">
//         <Sidebar />
//         {/* <div className="others">
//           Other pages
//         </div> */}

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>

//           {/* <Route path="/users">
//             <UserList />
//           </Route> */}

//           <Route path="/user/:userId">
//             <User/>
//           </Route>

//         </Switch>


//         {/* <Home /> */}

//         {/* <UserList /> */}

//       </div>

//     </Router>
//   );
// }

// export default App;