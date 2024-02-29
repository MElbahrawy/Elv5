import "./App.css";
import React from "react";
import Navs from "./components/Utilities/Navs";
import Header from "./components/Utilities/Header";
import Navbar from "./components/Utilities/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/Utilities/ScrollToTop";
import CompaniesCrudPage from "./pages/Admin/CompaniesCrudPage";
import TermsPage from "./pages/TermsAndConditions.js/TermsPage";
import Technicians from "./pages/Technicians/Technicians";
import UsersCrudPage from "./pages/Admin/UsersCrudPage";
import ContactPage from "./pages/ContactUs/ContactPage";
import PrivacyPage from "./pages/Privacy/PrivacyPage";
import UserDataPage from "./pages/Admin/UserDataPage";
import Companies from "./pages/Companies/Companies";
import Footer from "./components/Utilities/Footer";
import AboutPage from "./pages/AboutUs/AboutPage";
import SignUp from "./pages/Register/SignUpPage";
import Login from "./pages/Register/LoginPage";
import UserPage from "./pages/User/UserPage";
import Posts from "./pages/Posts/Posts";
import Home from "./pages/Home/Home";
import { user } from "./Data/user";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Navs />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/technicians" element={<Technicians />} />
        <Route path="/companies" element={<Companies />} />
        {localStorage.token ? (
          <Route path="/Posts" element={<Posts />} />
        ) : null}
        {!localStorage.token ? (
          <Route path="/sign-up" element={<SignUp />} />
        ) : null}
{!localStorage.token ? (
          <Route path="/login" element={<Login />} />
        ) : null}
        {localStorage.token ? (
          user.type === "admin" ? (
            <Route path="/admin/users" element={<UsersCrudPage />} />
          ) : null
        ) : null}
        {localStorage.token ? (
          user.type === "admin" ? (
            <Route path="/admin/users/:userId" element={<UserDataPage />} />
          ) : null
        ) : null}
        {localStorage.token ? (
          user.type === "admin" ? (
            <Route path="/admin/Companies" element={<CompaniesCrudPage />} />
          ) : null
        ) : null}
        {localStorage.token ? (
          <Route path="/user" element={<UserPage />} />
        ) : null}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Terms&Conditions" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
