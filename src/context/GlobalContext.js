import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import { v4 } from "uuid";

//Defino el estado, un espacio que puede ser compartido
const initialState = {
  tasks: [
    {
      id: "1",
      title: "title one",
      description: "some description",
      done: false,
    },
    {
      id: "2",
      title: "title two",
      description: "some description 2",
      done: false,
    },
  ],
};

export const GlobalContext = createContext(initialState);

//globalcontext provider no pinta nada, provee el estado a sus hijos
export const ContextProvider = ({ children }) => {
  //
  const [state, dispatch] = useReducer(appReducer, initialState);
  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: { ...task, id: v4() } });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask }}>
      {children}
    </GlobalContext.Provider>
  );
};
