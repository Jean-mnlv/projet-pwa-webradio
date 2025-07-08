import React from "react";
import { Routes, Route } from "react-router-dom";
import OnboardingPage from "../features/Onboarding/OnboardingPage";
import RadiosPage from "../features/Radios/RadiosPage";
import NewsPlaceholderPage from "../features/News/NewsPlaceholderPage";
import ExplorerPlaceholderPage from "../features/Explorer/ExplorerPlaceholderPage";
import InfoPlaceholderPage from "../features/Info/InfoPlaceholderPage";
import AccountPlaceholderPage from "../features/Account/AccountPlaceholderPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />
      <Route path="/radios" element={<RadiosPage />} />
      <Route path="/news" element={<NewsPlaceholderPage />} />
      <Route path="/explorer" element={<ExplorerPlaceholderPage />} />
      <Route path="/info" element={<InfoPlaceholderPage />} />
      <Route path="/account" element={<AccountPlaceholderPage />} />
    </Routes>
  );
};
export default AppRouter;
