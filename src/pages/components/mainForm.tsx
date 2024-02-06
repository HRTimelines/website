import { useState } from "react";
import { api } from "~/utils/api";
import MedicationTable from "./medications";
import { NextSectionButton, SkipSectionButton } from "./nextSectionButton";
import { toast } from "react-hot-toast";

function getDate() {
  return new Date().toISOString().split("T")[0];
}

function listToString(list: Record<string, boolean>) {
  let s = "";
  for (const entry in list) {
    if (list[entry]) {
      s = s + entry + ", ";
    }
  }
  return s.slice(0, -2);
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

const race: Record<string, boolean> = {
  "East Asian": false,
  "Black or African American": false,
  "Hispanic, Latino or Spanish origin": false,
  "Middle Eastern or North African": false,
  "Native American or Alaska Native": false,
  "Native Hawaiian or Other Pacific Islander": false,
  "South Asian": false,
  "South East Asian": false,
  "Sub-Saharan African": false,
  "White / European Descent": false,
  Another: false,
};

export type medicationDataType = {
  id: string;
  method: string;
  medication: string;
  amount: string;
  frequency: string;
  start: string;
  end: string;
  ongoing: string;
  termination: string;
};

export const medicationData: medicationDataType[] = [
  {
    id: "001",
    method: "",
    medication: "",
    amount: "",
    frequency: "",
    start: "",
    end: "",
    ongoing: "",
    termination: "",
  },
];

const mascEffects: Record<string, boolean> = {
  "Deeper Voice": false,
  "Cessation of Menstruation": false,
  "Facial and/or body hair": false,
  "Thicker Skin": false,
  "Weight Gain": false,
  "Acne/oily skin": false,
  "Male-pattern baldness": false,
  "Sleep Apnea": false,
  "Rise in choleserol": false,
  "High blood pressure": false,
  "Polycythemia (excess red blood cell production)": false,
  "Pelvic Pain": false,
  "Body odour": false,
  "Fat redistribution": false,
  "Increased appetite": false,
  "Decreased appetite": false,
  "Dulled sense of taste or smell": false,
  "Emotional changes": false,
  "Changes in perspiration": false,
  "Thicker/stronger nails": false,
  "Increased muscle mass": false,
  "Facial feature changes": false,
  "Increased tolerance for caffeine/alcohol": false,
  "Changes in sexual orientation": false,
};

const mascEffectsSex: Record<string, boolean> = {
  "Bottom growth": false,
  "Vaginal atrophy (vaginal dryness)": false,
  "Increased libido (higher sex drive)": false,
  "Change in orgasm": false,
  "Change in genital sensitivity and/or response": false,
};

const femEffects: Record<string, boolean> = {
  "Skin softening": false,
  "Less oily skin": false,
  "Increased Flexibility": false,
  "Slimmer hands and wrists": false,
  "Smaller feet": false,
  "Thinner or softer fingernails": false,
  "Reduced body hair": false,
  "Changes in body temperature": false,
  "Changes in perspiration": false,
  "Fat redistribution": false,
  "Breast growth": false,
  "Reduced muscle mass": false,
  "Changes in facial features or shape": false,
  "Changes in scalp hair": false,
  "Reduced tolerance to caffeine, alcohol,  psychotropics": false,
  "Changes in sexual orientation": false,
  "Increased emotional capacity or sensitivity": false,
  "Increase in appetite": false,
  "Decrease in appetite": false,
  "Improved sleep": false,
  "Improved sense of smell": false,
  "Changes in taste": false,
};

const femEffectsCyclic: Record<string, boolean> = {
  "Cramping in intestine or abdomen": false,
  "Bloating or increased water retention": false,
  "Gas or other intestinal issues": false,
  "Emotional instability (mood swings, heightened depression, increased irritability, etc":
    false,
  "Muscle or joint aches and pains": false,
  "Breast engorement or nipple tenderness": false,
  Acne: false,
  Fatigue: false,
  "Appetite changes or spontaneous cravings (ex. chocolate)": false,
  Migranes: false,
};

const femEffectsSex: Record<string, boolean> = {
  "Increased genital sensitivity": false,
  "Changes in moisture and odor of genitalia": false,
  "Changes in colour or texture of genitalia": false,
  "Fewer erections": false,
  "Clear ejaculate": false,
  "Testicular atrophy": false,
  "Increased arousing response to touch": false,
  "Changes in orgasm": false,
  "Reduced libido": false,
};

export const MainForm = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");

  const [genderState, setGenderState] = useState(gender);
  const genderList = Object.keys(gender);
  const [genderOther, setGenderOther] = useState("");

  const [raceState, setRaceState] = useState(race);
  const raceList = Object.keys(race);
  const [raceOther, setRaceOther] = useState("");

  const [hrtType, setHrtType] = useState("");

  const [mascMedicationData, setMascMedicationData] = useState(medicationData);

  const [mascEffectsState, setMascEffectsState] = useState(mascEffects);
  const mascEffectsList = Object.keys(mascEffects);

  const [mascEffectsOther, setMascEffectsOther] = useState("");

  const [mascEffectsSexComfortable, setMascEffectsSexComfortable] =
    useState("");

  const [mascEffectsSexState, setMascEffectsSexState] =
    useState(mascEffectsSex);
  const mascEffectsSexList = Object.keys(mascEffectsSex);

  const [mascEffectsSexOther, setMascEffectsSexOther] = useState("");

  const [femEstrogenData, setFemEstrogenData] = useState(medicationData);
  const [femAntiandrogenData, setFemAntiandrogenData] =
    useState(medicationData);
  const [femProgesteroneData, setFemProgesteroneData] =
    useState(medicationData);

  const [femEffectsState, setFemEffectsState] = useState(femEffects);
  const femEffectsList = Object.keys(femEffects);
  const [femEffectsOther, setFemEffectsOther] = useState("");

  const [femEffectsCyclicState, setFemEffectsCyclicState] =
    useState(femEffectsCyclic);
  const femEffectsCyclicList = Object.keys(femEffectsCyclic);
  const [femEffectsCyclicOther, setFemEffectsCyclicOther] = useState("");

  const [femEffectsSexComfortable, setFemEffectsSexComfortable] = useState("");

  const [femEffectsSexState, setFemEffectsSexState] = useState(femEffectsSex);
  const femEffectsSexList = Object.keys(femEffectsSex);

  const [femEffectsSexOther, setFemEffectsSexOther] = useState("");

  const [otherMedications, setOtherMedications] = useState("");
  const [otherConditions, setOtherConditions] = useState("");
  const [additions, setAdditions] = useState("");
  const [experience, setExperience] = useState("");
  const [feedback, setFeedback] = useState("");


  const mainMutation = api.main.create.useMutation({
    onSuccess: () => {
      setDateOfBirth("");
      setCountry("");
      setGenderState(gender);
      setGenderOther("");
      setRaceState(race);
      setRaceOther("");
      setHrtType("");
      setMascEffectsState(mascEffects);
      setMascEffectsOther("");
      setMascEffectsSexComfortable("");
      setMascEffectsSexState(mascEffectsSex);
      setMascEffectsSexOther("");
      setFemEffectsState(femEffects);
      setFemEffectsOther("");
      setFemEffectsCyclicState(femEffectsCyclic);
      setFemEffectsCyclicOther("");
      setFemEffectsSexComfortable("");
      setFemEffectsSexState(femEffectsSex);
      setFemEffectsSexOther("");
      setOtherMedications("");
      setOtherConditions("");
      setAdditions("");
      setExperience("");
      setFeedback("");
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content
      if (errorMessage && errorMessage[0]) {
        toast.error(errorMessage[0])
      }
    }
  });

  const medicalMutation = api.medication.create.useMutation({
    onSuccess: () => {
      setMascMedicationData(medicationData);
      setFemEstrogenData(medicationData);
      setFemAntiandrogenData(medicationData);
      setFemProgesteroneData(medicationData);
    },
  });

  function submitMedicationData(
    medicationData: medicationDataType[],
    submitter: number,
  ) {
    medicationData.map(
      ({
        id,
        method,
        medication,
        amount,
        frequency,
        start,
        end,
        ongoing,
        termination,
      }) =>
        medicalMutation.mutateAsync({
          row: parseInt(id),
          method,
          medication,
          amount,
          frequency,
          start,
          end,
          ongoing,
          termination,
          submitterId: submitter,
        }), // I'm not sure why this works, I would expect it to reset the values when the OnSuccess triggers -- worth investigating
    );
  }

  const submit = async (
    dateOfBirth: string,
    country: string,
    genderEntry: string,
    genderOther: string,
    raceEntry: string,
    raceOther: string,
    hrtType: string,
    // masc medication data
    mascMedicationData: medicationDataType[],
    mascEffectsEntry: string,
    mascEffectsOther: string,
    mascEffectsSexComfortable: string,
    mascEffectsSexEntry: string,
    mascEffectsSexOther: string,
    // fem medication data
    femEstrogenData: medicationDataType[],
    femAntiandrogenData: medicationDataType[],
    femProgesteroneData: medicationDataType[],
    femEffectsEntry: string,
    femEffectsOther: string,
    femEffectsCyclicEntry: string,
    femEffectsCyclicOther: string,
    femEffectsSexComfortable: string,
    femEffectsSexEntry: string,
    femEffectsSexOther: string,
    //other
    otherMedications: string,
    otherConditions: string,
    additions: string,
    experience: string,
    feedback: string,
  ) => {
    await mainMutation.mutateAsync({
      dateOfBirth,
      country,
      genderEntry,
      genderOther,
      raceEntry,
      raceOther,
      hrtType,
      // masc medication data
      mascEffectsEntry,
      mascEffectsOther,
      mascEffectsSexComfortable,
      mascEffectsSexEntry,
      mascEffectsSexOther,
      // fem medication data
      femEffectsEntry,
      femEffectsOther,
      femEffectsCyclicEntry,
      femEffectsCyclicOther,
      femEffectsSexComfortable,
      femEffectsSexEntry,
      femEffectsSexOther,
      //other
      otherMedications,
      otherConditions,
      additions,
      experience,
      feedback,
    });

    var submissionId = 1;
    if (typeof mainMutation.data?.id === "number") {
      submissionId = mainMutation.data?.id;
    }

    submitMedicationData(mascMedicationData, submissionId);
    submitMedicationData(femEstrogenData, submissionId);
    submitMedicationData(femAntiandrogenData, submissionId);
    submitMedicationData(femProgesteroneData, submissionId);

    //TODO: test this submission, confirm the data links properly
  };

  return (
    <>
      <form className="mx-auto mt-32 w-5/6 justify-center">
        <h1>Main form</h1> {/*TODO: better name*/}
        <br />
        {/*TODO: turn all sections into objects with passed props*/}
        <div className="section" id="section1">
          <div>
            <h2 id="demographicsHeader">Demographic Information</h2>
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
            In which country do you live primarily? <br />
            <input
              type="text"
              value={country}
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            />
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
            {genderState.Other && (
              <input
                type="text"
                id="genderOther"
                value={genderOther}
                onChange={(e) => setGenderOther(e.target.value)}
              />
            )}
          </div>
          <div className="question">
            Whats ur ethnicity
            <br />
            {raceList.map((option) => (
              <div key={option}>
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  checked={raceState[option]}
                  onChange={(event) => {
                    setRaceState({
                      ...raceState,
                      [option]: event.target.checked,
                    });
                  }}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            {raceState.Another && (
              <input
                type="text"
                id="raceOther"
                value={raceOther}
                onChange={(e) => setRaceOther(e.target.value)}
              />
            )}
          </div>
          {/* TODO: switching names off of "other" broke things, use either (1) a map from variable name to label OR (2) strip underscores when displaying label OR (3) find a single word that works as a variable for "other" options (this is cursed) -- fixed with Other and Another which is very cursed come back to this one my guy */}
          <div className="question">
            What kind of HRT are you on?
            <br />
            <input
              type="radio"
              id="masculinizing"
              name="hrtType"
              value="masculinizing"
              onChange={(e) => setHrtType(e.target.value)}
            />
            <label htmlFor="masculinizing">Masculinizing</label>
            <br />
            <input
              type="radio"
              id="feminizing"
              name="hrtType"
              value="feminizing"
              onChange={(e) => setHrtType(e.target.value)}
            />
            <label htmlFor="feminizing">Feminizing</label> <br /><br />
            <NextSectionButton elementId={"hormonesHeader"} />
          </div>
        </div>
        {hrtType === "masculinizing" && (
          <div className="section" id="section2">
            <div>
              <h2 id="hormonesHeader">Masculinizing HRT</h2>
              <p>
                What follows are some questions about your experience on
                masculinizing HRT, including questions about the medications you
                may have taken, start and end dates, and effects you
                experienced.
              </p><br />
            </div>
            <div className="question">
              Please input your medication history according to the table below.  If you are on <b>injections</b>, please input your volume and concentration (if you know it)
              <MedicationTable
                data={mascMedicationData}
                setData={setMascMedicationData}
              />
            </div>
            <div className="question">
              Please check any effects you have experienced while on HRT (these
              are not related to genitalia or sex)
              <br />
              {mascEffectsList.map((option) => (
                <div key={option}>
                  <input
                    type="checkbox"
                    id={option}
                    value={option}
                    checked={mascEffectsState[option]}
                    onChange={(event) => {
                      setMascEffectsState({
                        ...mascEffectsState,
                        [option]: event.target.checked,
                      });
                    }}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
            <div className="question">
              Are there any other effects (not related to genitalia or sex) you
              have experienced? Additionally, if there is any extra information
              about any of the above effects (ex. how your emotions changed),
              please leave it here. <br />
              <textarea
                id="mascEffectsOther"
                value={mascEffectsOther}
                onChange={(e) => setMascEffectsOther(e.target.value)}
              />
            </div>
          </div>
        )}
        {hrtType === "masculinizing" && (
            <div className="section" id="section3">
              <h2 id="hormonesSexHeader">
                Masculinizing HRT - Sex and Genitalia related questions
              </h2>
              <p>
                This section contains questions that will pertain to symptoms
                related to genitalia and sexuality. If you are not comfortable
                answering these questions, please click the button below:
              </p>
              <SkipSectionButton elementId={"otherHeader"} />
              <div className="question">
                Please check any effects you have experienced while on HRT
                <br />
                {mascEffectsSexList.map((option) => (
                  <div key={option}>
                    <input
                      type="checkbox"
                      id={option}
                      value={option}
                      checked={mascEffectsSexState[option]}
                      onChange={(event) => {
                        setMascEffectsSexState({
                          ...mascEffectsSexState,
                          [option]: event.target.checked,
                        });
                      }}
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                ))}
              </div>

              <div className="question">
                Are there any other effects (related to genitalia or sex) you
                have experienced? Additionally, if there is any extra
                information about any of the above effects. please leave it
                here. <br />
                <textarea
                  id="mascEffectsSexOther"
                  value={mascEffectsSexOther}
                  onChange={(e) => setMascEffectsSexOther(e.target.value)}
                />
              </div>
            </div>
          )}
        {hrtType === "feminizing" && (
          <div className="section" id="section4">
            <div>
              <h2 id="hormonesHeader">Feminizing HRT</h2>
              <p>
                What follows are some questions about your experience on
                feminizng HRT, including questions about the medications you may
                have taken, start and end dates, and effects you experienced.
              </p><br />
            </div>
            <div className="question">
              Please input your medication history with <b> estrogen </b>{" "}
              according to the table below.  If you are on <b>injections</b>, please input your volume and concentration (if you know it)
              <MedicationTable
                data={femEstrogenData}
                setData={setFemEstrogenData}
              />
            </div>
            <div className="question">
              Please input your medication history with <b>anti-androgens</b>{" "}
              according to the table below.
              <MedicationTable
                data={femAntiandrogenData}
                setData={setFemAntiandrogenData}
              />
            </div>
            <div className="question">
              Please input your medication history with <b>progesterone</b>{" "}
              according to the table below.
              <MedicationTable
                data={femProgesteroneData}
                setData={setFemProgesteroneData}
              />
            </div>
            <div className="question">
              Please check any effects you have experienced while on HRT (these
              are not related to genitalia or sex)
              <br />
              {femEffectsList.map((option) => (
                <div key={option}>
                  <input
                    type="checkbox"
                    id={option}
                    value={option}
                    checked={femEffectsState[option]}
                    onChange={(event) => {
                      setFemEffectsState({
                        ...femEffectsState,
                        [option]: event.target.checked,
                      });
                    }}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
            <div className="question">
              Are there any other effects (not related to genitalia or sex) you
              have experienced? Additionally, if there is any extra information
              about any of the above effects (ex. how your emotions changed),
              please leave it here. <br />
              <textarea
                id="femEffectsOther"
                value={femEffectsOther}
                onChange={(e) => setFemEffectsOther(e.target.value)}
              />
            </div>
            <div className="question">
              Please check any cyclic or period-like effects you experienced
              while on HRT
              {/* TODO: better description */}
              <br />
              {femEffectsCyclicList.map((option) => (
                <div key={option}>
                  <input
                    type="checkbox"
                    id={option}
                    value={option}
                    checked={femEffectsCyclicState[option]}
                    onChange={(event) => {
                      setFemEffectsCyclicState({
                        ...femEffectsCyclicState,
                        [option]: event.target.checked,
                      });
                    }}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
            <div className="question">
              Are there any other cyclic effects you experienced while on HRT,
              or anything else you want us to know about these cyclic effects?{" "}
              <br />
              <textarea
                id="femEffectsCyclicOther"
                value={femEffectsCyclicOther}
                onChange={(e) => setFemEffectsCyclicOther(e.target.value)}
              />
            </div>
          </div>
        )}
        {hrtType === "feminizing" && (
          <div className="section" id="section5">
            <h2 id="hormonesSexHeader">
              Feminizng HRT - Sex and Genitalia related questions
            </h2>
            <p>
              This section contains questions that will pertain to symptoms
              related to genitalia and sexuality. If you are not comfortable
              answering these questions, please click the button below
            </p>
            <SkipSectionButton elementId={"otherHeader"} />
            <div className="question">
              Please check any effects you have experienced while on HRT
              <br />
              {femEffectsSexList.map((option) => (
                <div key={option}>
                  <input
                    type="checkbox"
                    id={option}
                    value={option}
                    checked={femEffectsSexState[option]}
                    onChange={(event) => {
                      setFemEffectsSexState({
                        ...femEffectsSexState,
                        [option]: event.target.checked,
                      });
                    }}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>

            <div className="question">
              Are there any other effects (related to genitalia or sex) you have
              experienced? Additionally, if there is any extra information about
              any of the above effects. please leave it here. <br />
              <textarea
                id="femEffectsSexOther"
                value={femEffectsSexOther}
                onChange={(e) => setFemEffectsSexOther(e.target.value)}
              />
            </div>
          </div>
        )}
        {hrtType !== "" && (
          <div className="section" id="section6">
            <h2 id="otherHeader">Other General Questions</h2>
            <p>
              This section will go over general questions for both masculinizing
              and feminizng HRT
            </p>
            <div className="question">
              Are you taking any (non-HRT) medications that may affect or
              interfere with any of the symptoms previously listed?
              <br />
              <textarea
                id="otherMedications"
                value={otherMedications}
                onChange={(e) => setOtherMedications(e.target.value)}
              />
            </div>
            <div className="question">
              Do you have any medical conditions that may affect or interfere
              with any of the symptoms or effects previously discussed?
              <br />
              <textarea
                id="otherConditions"
                value={otherConditions}
                onChange={(e) => setOtherConditions(e.target.value)}
              />
            </div>
          </div>
        )}
        {hrtType !== "" && (
          <div className="section" id="section7">
            <h2 id="feedbackHeader">Final Thoughts and Comments</h2>
            <p>
              This section will collect a little more information and feedback
              about the survey
              {/* TODO: add more info here  */}
            </p>
            <div className="question">
              Is there anything you think should be added to this survey?
              <br />
              <textarea
                id="additions"
                value={additions}
                onChange={(e) => setAdditions(e.target.value)}
              />
            </div>
            <div className="question">
              Is there anything related to your experience with HRT that you
              want us to know?
              <br />
              <textarea
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div className="question">
              Do you have any other feedback for HRTimelines?
              <br />
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
          </div>
        )}
        <br />
        <button
          type="button"
          className="rounded-xl border-2 border-solid border-black p-1"
          onClick={() =>
            submit(
              dateOfBirth,
              country,
              listToString(genderState),
              genderOther,
              listToString(raceState),
              raceOther,
              hrtType,
              // masc medication data
              mascMedicationData,
              listToString(mascEffectsState),
              mascEffectsOther,
              mascEffectsSexComfortable,
              listToString(mascEffectsSexState),
              mascEffectsSexOther,
              // fem medication data
              femEstrogenData,
              femAntiandrogenData,
              femProgesteroneData,
              listToString(femEffectsState),
              femEffectsOther,
              listToString(femEffectsCyclicState),
              femEffectsCyclicOther,
              femEffectsSexComfortable,
              listToString(femEffectsSexState),
              femEffectsSexOther,
              //other
              otherMedications,
              otherConditions,
              additions,
              experience,
              feedback,
            )
          }
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default MainForm;
