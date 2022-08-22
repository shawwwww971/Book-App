import "./App.css";
import MyReads from "./pages/MyReads";
import AddBook from "./pages/AddBook";
import { Redirect, Route } from "react-router-dom";

function App () {


  return (
    <div className="app">
      <Route path='/' >
        <Redirect to='/myreads' exact />
      </Route>
      <Route path='/myreads'>
        <MyReads />
      </Route>
      <Route path='/search'>
        <AddBook />
      </Route>
    </div>
  );
}

export default App;