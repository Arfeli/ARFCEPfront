import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VideoList from "./vistas/TraerNoticias";
import NoticeForm from "./service/NoticeForm";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <VideoList />
        </Route> 
        <Route path="/todo-noticia" />
        <Route path="/editar" component={NoticeForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
