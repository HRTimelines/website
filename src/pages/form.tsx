import Header from "./components/header";

import MilestonesForm from "./components/majorMilestonesForm";
import { NoForm } from "./components/text";
import MainForm from "./components/mainForm";


export const Form = () => {
  return (
    <>
      <div>
        <Header />
        <MainForm />
      </div>
    </>
  );
};

export default Form;
