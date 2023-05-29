import { Route, Routes, useMatch } from "react-router";
import Page404 from "../page404/Page404";
import Home from "../home/Home";
import Layout from "../layout/Layout";
import SideBar from "../side-bar/SideBar";
import Header from "../header/Header";
import LoginPage from "../login-page/LoginPage";
import "./App.css";

function App() {
  const isLoginPage = useMatch("/out");
  return (
    <Layout>
      <div className="wrapper">
        {!isLoginPage && <SideBar />}
        <div className="wrapperMainHeader">
          {!isLoginPage && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<div>courses!</div>} />
            <Route path="/libraries" element={<Home />} />
            <Route path="/statistics" element={<div>statistics!</div>} />
            <Route path="/users" element={<div>users!</div>} />
            <Route path="/out" element={<LoginPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </Layout>
  );
}

export default App;
