import './App.css';
import { NavbarSimple } from './components/Navbar';
import { Body } from './components/Body';
import { Footer } from './components/Footer'
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
  return (
    <div className="max-w-screen">
      <NavbarSimple />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
