import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Creditnotes,
  ErrorPage,
  Invoices,
  Journals,
  Login,
  Register,
  UserProfile,
} from "./entities";
import WrapperSNF from "./wrappers/wrapperSNF";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route
            exact
            path="/customerregister"
            element={<WrapperSNF comp={<Register />} />}
          ></Route>
          <Route
            exact
            path="/invoices"
            element={<WrapperSNF comp={<Invoices />} />}
          ></Route>
          <Route
            exact
            path="/journals"
            element={<WrapperSNF comp={<Journals />} />}
          ></Route>
          <Route
            exact
            path="/creditnotes"
            element={<WrapperSNF comp={<Creditnotes />} />}
          ></Route>
          <Route
            exact
            path="/userprofile"
            element={<WrapperSNF comp={<UserProfile />} />}
          ></Route>
          <Route path="*" element={<WrapperSNF comp={<ErrorPage />} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
