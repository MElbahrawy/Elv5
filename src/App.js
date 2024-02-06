import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Utilities/Header";
import Navbar from "./components/Utilities/Navbar";
import Navs from "./components/Utilities/Navs";
import Home from "./pages/Home/Home";
import Footer from "./components/Utilities/Footer";
import Login from "./pages/Register/LoginPage";
import SignUp from "./pages/Register/SignUpPage";
import Companies from "./pages/Companies/Companies";
import Technicians from "./pages/Technicians/Technicians";
import Posts from "./pages/Posts/Posts";
import UsersCrudPage from "./pages/Admin/UsersCrudPage";
import CompaniesCrudPage from "./pages/Admin/CompaniesCrudPage";
import UserPage from "./pages/User/UserPage";
import UserDataPage from "./pages/Admin/UserDataPage";
import AboutPage from "./pages/AboutUs/AboutPage";
import ContactPage from "./pages/ContactUs/ContactPage";
import TermsPage from "./pages/TermsAndConditions.js/TermsPage";
import PrivacyPage from "./pages/Privacy/PrivacyPage";
import ScrollToTop from "./components/Utilities/ScrollToTop";
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
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {user.type === "admin" ? (
          <Route path="/admin/users" element={<UsersCrudPage />} />
        ) : null}
        {user.type === "admin" ? (
          <Route path="/admin/users/id" element={<UserDataPage />} />
        ) : null}
        {user.type === "admin" ? (
          <Route path="/admin/Companies" element={<CompaniesCrudPage />} />
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
