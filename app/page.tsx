import Nav from "./components/Section/Nav";
import Header from "./components/Section/Header";
import Profile from "./components/Section/Profile";
import Parcours from "./components/Section/Parcours";
import Projects from "./components/Section/Projects";
import Skills from "./components/Section/Skills";
import Footer from "./components/Section/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Nav />
      <Header />
      <Profile />
      <Parcours />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
