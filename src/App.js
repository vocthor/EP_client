import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Plan from "./pages/Plan";
import SallesTP from "./pages/SallesTP";
import Annonces from "./pages/Annonces";
import Compte from "./pages/Compte";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/plan" exact component={Plan}></Route>
        <Route path="/salles-tp" exact component={SallesTP}></Route>
        <Route path="/annonces" exact component={Annonces}></Route>
        <Route path="/compte" exact component={Compte}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
