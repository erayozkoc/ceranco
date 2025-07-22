import HeroBanner from "./components/home/HeroBanner";
import Collection from "./components/home/Collection";
import About from "./components/home/About";
import Subscriber from "./components/home/Subscriber";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroBanner />
        <Collection />
        <About />
        <Subscriber />
      </main>

    </div>
  );
}
