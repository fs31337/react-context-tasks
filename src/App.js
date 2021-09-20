import { Route, Switch } from "react-router-dom";
import { ContextProvider } from "./context/GlobalContext";
import "./App.css";
import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Switch>
              <Route path="/" exact component={TaskList} />
              <Route path="/add" exact component={TaskForm} />
              <Route path="/edit/:id" exact component={TaskForm} />
            </Switch>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
