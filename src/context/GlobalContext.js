import { createContext } from "react";

//Defino el estado, un espacio que puede ser compartido
export const GlobalContext = createContext({
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
});
