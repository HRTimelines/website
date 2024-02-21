import Header from "./components/header";

import MilestonesForm from "./components/majorMilestonesForm";
import { NoForm } from "./components/text";
import MainForm, { medicationData } from "./components/mainForm";
import { useState } from "react";
import Dropdown from "./components/dropdown";
import MedicationTable from "./components/medications";
import { NextSectionButton } from "./components/nextSectionButton";

export const Form = () => {
  return (
    <>
      <div>
        <MainForm />
        <Header />
      </div>
    </>
  );
};

export default Form;
