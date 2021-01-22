import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Boxer2 from "./vistas/CrearNoticias";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Boxer2} exact />
        <Route path="/todo-noticia" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
