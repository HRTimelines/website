import { useState } from "react";
import { FormCoverText } from "./text";
import React from "react";
import { toast } from "react-hot-toast";

const FormCover = () => {
  const [ageCheck, setAgeCheck] = useState(false);
  const [consentCheck, setConsentCheck] = useState(false);
  //   const navigate = useNavigate();
  const goTo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (ageCheck && consentCheck) {
      window.location.href = "/form";
    } else {
      toast.error("you must agree to both of these conditions to continue");
    }
  };

  const checkboxChange = (
    checkbox: boolean,
    setCheckbox: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setCheckbox(!checkbox);
  };

  return (
    <>
      <div className="mx-auto w-5/6">
        <FormCoverText />
        <form className="px-5">
          <input
            type="checkbox"
            id="age"
            checked={ageCheck}
            onChange={(e) => checkboxChange(ageCheck, setAgeCheck)}
            className="p-5"
          />
          <label htmlFor="age" className="p-2">I am 18 years of age and on hormone replacement therapy (HRT)</label>
          <br />

          <input
            type="checkbox"
            id="consent"
            checked={consentCheck}
            onChange={(e) => checkboxChange(consentCheck, setConsentCheck)}
            className="p-5"
          />
          <label htmlFor="consent" className="p-2">
            I have read the above information. agree to participate in the
            survey, and agree to have my data retained for research purposes as described above
          </label>
          <br />

          <button
            onClick={(e) => goTo(e)}
            className="rounded-xl border-[1px] border-solid border-black p-1 my-2"
          >
            Go to form
          </button>
        </form>
      </div>
    </>
  );
};

export default FormCover;
