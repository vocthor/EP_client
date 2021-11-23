import Calendar from "../components/Calendar";
import Navigation from "../components/Navigation";
import Weather from "../components/Weather";
import weather from "../components/Weather";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Calendar />
      <Weather />
    </div>
  );
};

export default Home;
