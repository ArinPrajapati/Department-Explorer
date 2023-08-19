import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import UserForm from "./components/UserForm";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      {/* <UserForm /> */}
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default App;
