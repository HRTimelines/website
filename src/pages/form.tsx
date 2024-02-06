import Header from "./components/header";

import MilestonesForm from "./components/majorMilestonesForm";
import { NoForm } from "./components/text";
import MainForm, { medicationData } from "./components/mainForm";
import { useState } from "react";
import Dropdown from "./components/dropdown";
import MedicationTable from "./components/medications";
import { NextSectionButton } from "./components/nextSectionButton";

export const Form = () => {
  const options = ["pills", "patches", "injections", "4th thing"];
  const [method, setMethod] = useState("");

  const [mascMedicationData, setMascMedicationData] = useState(medicationData);
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
