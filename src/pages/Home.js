import Calendar from "../components/Calendar";
import Navigation from "../components/Navigation";
import Weather from "../components/Weather";
import { useHistory } from "react-router-dom";

const Home = ({}) => {
  let history = useHistory();
  return (
    <div className="home">
      <Navigation />
      <Calendar />
      <Weather />
    </div>
  );
};

export default Home;
