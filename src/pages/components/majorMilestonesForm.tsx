import { useState } from "react";
import { api } from "~/utils/api";
import { toast } from "react-hot-toast";

function getDate() {
  return new Date().toISOString().split("T")[0];
}

const maxLength = 2000;

export const MilestonesForm = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [mascOrFem, setMascOrFem] = useState("");
  const [transStart, setTransStart] = useState("");
  const [transEnd, setTransEnd] = useState("");
  const [comingOutStart, setComingOutStart] = useState("");
  const [comingOutEnd, setComingOutEnd] = useState("");
  const [hrtStart, setHrtStart] = useState("");
  const [notes, setNotes] = useState("");
  const [feedback, setFeedback] = useState("");
  const [future, setFuture] = useState("");

  const { mutate } = api.form.create.useMutation({
    onSuccess: () => {
      setDateOfBirth("");
      setCountry("");
      setMascOrFem("");
      setTransStart("");
      setTransEnd("");
      setComingOutStart("");
      setComingOutEnd("");
      setHrtStart("");
      setFeedback("");
      setFuture("");
      setNotes("");
      window.location.href = "/submitted";
    },
    onError: () => {
      toast.error(
        "Submission failed.  Please ensure your connection is not hampered by any firewalls.  If the issue persists, email hrtimelines@gmail.com",
      );
    },
  });

  const submit = (
    dateOfBirth: string,
    country: string,
    mascOrFem: string,
    transStart: string,
    transEnd: string,
    comingOutStart: string,
    comingOutEnd: string,
    hrtStart: string,
    notes: string,
    feedback: string,
    future: string,
  ) => {
    let flag = true;

    console.log(feedback.length);

    if (dateOfBirth == "") {
      toast.error("Date of Birth is mandatory");
      flag = false;
    }
    if (transEnd < transStart && transEnd != "" && transStart != "") {
      toast.error("The end date cannot be earlier than the start date (Q4)");
      flag = false;
    }
    if (
      comingOutEnd < comingOutStart &&
      comingOutEnd != "" &&
      comingOutStart != ""
    ) {
      toast.error("The end date cannot be earlier than the start date (Q5)");
      flag = false;
    }
    if (flag) {
      mutate({
        dateOfBirth,
        country,
        mascOrFem,
        transStart,
        transEnd,
        comingOutStart,
        comingOutEnd,
        hrtStart,
        notes,
        feedback,
        future,
      });
    }
  };

  return (
    <>
      <form>
        <div className="mx-auto mt-24 w-5/6 justify-center pt-5">
          <div className="question">
            <label htmlFor="dateOfBirth">1. What is your date of birth?</label>
            <br />
            <input
              type="date"
              id="dateOfBirth"
              defaultValue={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className=""
              max={getDate()}
            />
          </div>

          <div className="question">
            <label htmlFor="country">
              2. In which country do you currently reside?
            </label>
            <br />
            <input
              type="text"
              id="country"
              defaultValue={country}
              onChange={(e) => setCountry(e.target.value)}
              className=""
            />
          </div>

          <div className="question">
            <label htmlFor="mascOrFem">
              3. How would you describe your transition? (ex. FtM,
              transfeminine, etc.)
            </label>
            <br />
            <input
              type="text"
              id="mascOrFem"
              defaultValue={mascOrFem}
              onChange={(e) => setMascOrFem(e.target.value)}
              className=""
            />
          </div>
          <div className="question">
            <span>
              {`
              4. When did you realize you were trans? If this is a range, please
              input approximate start and end dates. If you have an exact date,
              just input the same date twice. This question may be quite
              challenging, a rough guess is completely fine.`}
            </span>
            <br />

            <label htmlFor="transStart">Start:</label>
            <input
              type="date"
              id="transStart"
              defaultValue={transStart}
              onChange={(e) => setTransStart(e.target.value)}
              className=""
              max={getDate()}
            />
            <br />

            <label htmlFor="transEnd">End:</label>
            <input
              type="date"
              id="transEnd"
              defaultValue={transEnd}
              onChange={(e) => setTransEnd(e.target.value)}
              className=""
              max={getDate()}
            />
          </div>

          <div className="question">
            <span>
              {`
              5. When did you start socially transitioning? If this is a range, please input
              approximate start and end dates. If you have an exact date, just
              input the same date twice. If you have not yet started socially
              transitioning, please leave this question blank. Similarly, if you
              are still in the process of socially transitioning, please leave
              the end blank.`}
            </span>
            <br />
            <label htmlFor="comingOutStart">Start:</label>
            <input
              type="date"
              id="comingOutStart"
              defaultValue={comingOutStart}
              onChange={(e) => setComingOutStart(e.target.value)}
              className=""
              max={getDate()}
            />
            <br />

            <label htmlFor="comingOutEnd">End:</label>
            <input
              type="date"
              id="comingOutEnd"
              defaultValue={comingOutEnd}
              onChange={(e) => setComingOutEnd(e.target.value)}
              className=""
              max={getDate()}
            />
          </div>

          <div className="question">
            <label htmlFor="hrtStart">
              {`
              6. On which day did you start HRT? Note that this refers to starting
              HRT in any capacity. If you started then stopped for any reason,
              please answer with the initial start date and include the
              circumstances under which you stopped in the "notes or additional
              information" question`}
            </label>
            <br />
            <input
              type="date"
              id="hrtStart"
              defaultValue={hrtStart}
              onChange={(e) => setHrtStart(e.target.value)}
              className=""
              max={getDate()}
            />
          </div>

          {/* notes */}
          <div className="question">
            <label htmlFor="notes">
              {`
              7. Do you have any notes or additional information you would like to
              provide about any of these responses?`}
            </label>
            <br />
            <textarea
              id="notes"
              defaultValue={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="rounded-md border border-black p-1"
              rows={5}
              cols={35}
            />
          </div>

          {/* feedback */}
          <div className="question">
            <label htmlFor="feedback">
              8. Do you have any feedback about this form that you would like us
              to know about?
            </label>
            <br />
            <textarea
              id="feedback"
              defaultValue={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="rounded-md border border-black p-1"
              rows={5}
              cols={35}
            />
          </div>

          {/* future */}
          <div className="question">
            <label htmlFor="future">
              {`
                9. What kinds of information would you like to see in the future?  Is there some question about trans health care that you've always been curious about?  Maybe a particular piece of data you're interested in?
            `}
            </label>
            <br />
            <textarea
              id="future"
              defaultValue={future}
              onChange={(e) => setFuture(e.target.value)}
              className="rounded-md border border-black p-1"
              rows={5}
              cols={35}
            />
          </div>

          <div className="mb-24">
            <button
              type="button"
              className="rounded-xl border-2 border-solid border-black p-1"
              onClick={() =>
                submit(
                  dateOfBirth,
                  country,
                  mascOrFem,
                  transStart,
                  transEnd,
                  comingOutStart,
                  comingOutEnd,
                  hrtStart,
                  notes,
                  feedback,
                  future,
                )
              }
            >
              Submit Form
            </button>
            <br />{" "}
            <span className="">
              (please wait a few seconds for the form submissison to go through)
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default MilestonesForm;
