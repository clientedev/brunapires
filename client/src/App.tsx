import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import Home from "@/pages/home";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import HealthPlans from "@/pages/health-plans";
import LifeInsurance from "@/pages/life-insurance";
import AdminDashboard from "@/pages/admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Admin routes (no navigation/footer) */}
      <Route path="/admin" component={AdminDashboard} />
      
      {/* Public routes (with navigation/footer) */}
      <Route>
        {() => (
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/sobre" component={About} />
                <Route path="/planos-saude" component={HealthPlans} />
                <Route path="/seguro-vida" component={LifeInsurance} />
                <Route path="/blog" component={Blog} />
                <Route path="/contato" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        )}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
