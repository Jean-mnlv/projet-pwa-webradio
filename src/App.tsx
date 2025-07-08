import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import RadiosPage from "./features/Radios/RadiosPage";
import NewsPlaceholderPage from "./features/News/NewsPlaceholderPage";
import ExplorerPlaceholderPage from "./features/Explorer/ExplorerPlaceholderPage";
import InfoPlaceholderPage from "./features/Info/InfoPlaceholderPage";
import AccountPlaceholderPage from "./features/Account/AccountPlaceholderPage";
import OnboardingPage from "./features/Onboarding/OnboardingPage";

const App: React.FC = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/radios" element={<RadiosPage />} />
        <Route path="/news" element={<NewsPlaceholderPage />} />
        <Route path="/explorer" element={<ExplorerPlaceholderPage />} />
        <Route path="/info" element={<InfoPlaceholderPage />} />
        <Route path="/account" element={<AccountPlaceholderPage />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);
export default App;
