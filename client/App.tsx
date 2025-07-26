import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import SuggestionForm from "./pages/SuggestionForm";
import Results from "./pages/Results";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import WardrobeAnalyzer from "./pages/WardrobeAnalyzer";
import Contact from "./pages/Contact";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/suggestion-form" element={<SuggestionForm />} />
          <Route path="/results" element={<Results />} />
                    <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/wardrobe-analyzer" element={<WardrobeAnalyzer />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/about"
            element={
              <PlaceholderPage
                title="About FitFix"
                description="Learn more about our mission and team"
              />
            }
          />
          <Route
            path="/privacy"
            element={
              <PlaceholderPage
                title="Privacy Policy"
                description="Your privacy and data protection information"
              />
            }
          />
          <Route
            path="/terms"
            element={
              <PlaceholderPage
                title="Terms of Service"
                description="Terms and conditions for using FitFix"
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
