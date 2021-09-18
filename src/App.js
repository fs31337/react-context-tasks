import { Route, Switch } from "react-router-dom";

import "./App.css";
import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <Heading />
          <Switch>
            <Route path="/" exact component={TaskList} />
            <Route path="/add" exact component={TaskForm} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
