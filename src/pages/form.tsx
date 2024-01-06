import Header from "./components/header";

import MilestonesForm from "./components/majorMilestonesForm";
import { NoForm } from "./components/text";
import MainForm from "./components/mainForm";
import MedicationTable from "./components/medications";


export const Form = () => {
  return (
    <>
      <div>
        {/* <Header />
        <MainForm /> */}
        <MedicationTable />
      </div>
    </>
  );
};

export default Form;
