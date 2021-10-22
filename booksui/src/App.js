import "./App.css";
import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BooksList}></Route>
          <Route path="/addbook" component={AddBook} />
          <Route path="/editbook/:id" component={EditBook} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
