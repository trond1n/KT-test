import "./scss/app.scss";
import { Header, Banner, Plans, Feedback, Footer } from "./components";
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
