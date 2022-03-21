import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Plan from "./pages/Plan";
import SallesTP from "./pages/SallesTP";
import Annonces from "./pages/Annonces";
import Compte from "./pages/Compte";
import ModifCompte from "./pages/ModifCompte";

function App() {
  // Toute cette merde est un essai que j'avais fait, je reprends ça plus tard
  /*const [id, setId] = useState("");

  const connect = () => {
    Axios.post("http://localhost:3001/getUser", { id: id }).then((response) =>
      console.log(response.data)
    );
  };

  const connection = () => {
    // pour essayer une connection
    setId(2);
    connect();
  };
  setInterval(connection, 10000); // pour récupérer l'id dans le fichier texte (dans le futur) et tester si connection possible
*/
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/plan" exact component={Plan}></Route>
        <Route path="/salles-tp" exact component={SallesTP}></Route>
        <Route path="/annonces" exact component={Annonces}></Route>
        <Route path="/compte" exact component={Compte}></Route>
        <Route path="/monCompte" exact component={ModifCompte}></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
