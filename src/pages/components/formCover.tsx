import { useState } from "react";
import { FormCoverText } from "./text";
import React from "react";
import { toast } from "react-hot-toast";

const FormCover = () => {
  const [ageCheck, setAgeCheck] = useState(false);
  const [consentCheck, setConsentCheck] = useState(false);
  //   const navigate = useNavigate();
  const goTo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (ageCheck && consentCheck) {
        window.location.href = "/form"
    }
    else {
        toast.error("you must agree to both of these conditions to continue")
    }
  };

  const checkboxChange = (checkbox: boolean, setCheckbox: React.Dispatch<React.SetStateAction<boolean>>) => {
    setCheckbox(!checkbox)
  }

  return (
    <>
      <div>
        <FormCoverText />
        <form>
          <input
            type="checkbox"
            id="age"
            checked={ageCheck}
            onChange={(e) => checkboxChange(ageCheck, setAgeCheck)}
          />
          <label htmlFor="age">I am 18 years of age or older</label>
          <br />

          <input
            type="checkbox"
            id="consent"
            checked={consentCheck}
            onChange={(e) => checkboxChange(consentCheck, setConsentCheck)}
          />
          <label htmlFor="consent">I have read the above information and agree to participate in the survey</label>
          <br />

          <button onClick={(e) => goTo(e)}>Go to form</button>
        </form>
      </div>
    </>
  );
};

export default FormCover;
