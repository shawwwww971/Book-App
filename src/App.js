import "./App.css";
import MyReads from "./pages/MyReads";
import AddBook from "./pages/AddBook";
import { Redirect, Route, Switch } from "react-router-dom";

function App () {


  return (
    <div className="app">
      <Switch>
        <Route path='/' exact>
          <MyReads />
        </Route>
        <Route path='/search'>
          <AddBook />
        </Route>
      </Switch>
    </div>
  );
}

export default App;