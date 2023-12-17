import { useState } from "react";
import { api } from "~/utils/api";

function getDate() {
  return new Date().toISOString().split("T")[0];
}

const gender: Record<string, boolean> = {
  Male: false,
  Female: false,
  Genderfluid: false,
  Genderqueer: false,
  Nonbinary: false,
  Agender: false,
  Demiboy: false,
  Demigirl: false,
  Questioning: false,
  Other: false,
};

export const MainForm = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");

  const [genderState, setGenderState] = useState(gender);
  const genderList = Object.keys(gender);
  const [genderOther, setGenderOther] = useState("");

  const { mutate } = api.main.create.useMutation({
    onSuccess: () => {
      setDateOfBirth("");
    },
  });

  return (
    <>
      <form className="mx-auto mt-32 w-5/6 justify-center">
        <h1>Main form</h1>
        <br />
        <div>
          <h2>Demographic Information</h2>
          <p>
            This section will ask you about some basic demographic information
            such as birthdate and country of residency
          </p>
        </div>
        <br />

        <div className="question">
          <label htmlFor="dateOfBirth">When is your birthday?</label>
          <br />
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="border-2px border border-black"
            max={getDate()}
          ></input>
          <br />
        </div>

        <div className="question">
          Whats ur gender
          <br />
          {genderList.map((option) => (
            <div key={option}>
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={genderState[option]}
                onChange={(event) => {
                  setGenderState({
                    ...genderState,
                    [option]: event.target.checked,
                  });
                }}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
          {genderState.Other && <input
            type="text"
            id="genderOther"
            value={genderOther}
            onChange={(e) => setGenderOther(e.target.value)}
          />}
        </div>

        TEST: {genderOther}

        {/* To access all options or individual options in the array  */}
        {/* <div>
          {genderList.map((option) => (
            <>
              {option} : {String(genderState[option])} <br />
            </>
          ))}
        </div>

        TEST: {String(genderState.Male)} */}

        <br />

        <br />
        <button
          type="button"
          className="border-2 border-solid border-black p-1"
          onClick={() => mutate({ dateOfBirth: dateOfBirth })}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default MainForm;
