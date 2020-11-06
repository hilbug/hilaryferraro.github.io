import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Header />
      <Portfolio />
      <Resume />
      {/* SVG Image for angle */}
      <svg class="mb-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#bc8f8f" fill-opacity="1" d="M0,224L1440,160L1440,320L0,320Z"></path>
            </svg>
      <Footer />
    </div>
  );
}

export default App;
