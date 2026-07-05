export const codeexample = {
  "App.jsx": `
     import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
    `,
  "Hero.jsx": `
function App() {
  return (
    <div className="min-h-screen bg-slate-950
     text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
    `,
  "Navbar.jsx": `import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from ".
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
    `,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contextColor: "text-blue-300",
    icon: "AI",
    title: "Auto animation",
    content: "synamic typing genarated automatically",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contextColor: "text-purple-300",
    icon: "AI",
    title: "Auto animation",
    content: "synamic typing genarated automatically",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contextColor: "text-emerald-300",
    icon: "AI",
    title: "Smart search",
    content: "Intelligent code search across your project",
  },
};
