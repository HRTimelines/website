import Header from "./components/header";

import MilestonesForm from "./components/majorMilestonesForm";
import { NoForm } from "./components/text";
import MainForm from "./components/mainForm";
import { useState } from "react";



export const Form = () => {
  const [message, setMessage] = useState("text")
  
  return (
    <>
      <div>
        <Header />
        <MainForm />

      </div>

      test outside: {message}
    </>
  );
};

export default Form;
