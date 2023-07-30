import "./scss/app.scss";
import { Header, Banner, Plans, Feedback, Footer } from "./components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Plans />
      <Feedback />

      <Footer />
    </div>
  );
};

export default App;
