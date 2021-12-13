import Calendar from "../components/Calendar";
import Navigation from "../components/Navigation";
import Weather from "../components/Weather";
import Menu from "../components/Menu"

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Calendar />
      <Weather />
      <Menu /> 
    </div>
  );
};

export default Home;
