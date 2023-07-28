import "./scss/app.scss";
import { Header, Banner, Plans } from "./components";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Plans />
    </div>
  );
};

export default App;
