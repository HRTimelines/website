import { toast } from "react-hot-toast";

function copy(text: string) {
  void navigator.clipboard.writeText(text);
  toast.success("copied to clipboard");
}

const Description = () => {
  return (
    <>
      <div className="mt-24 p-5">
        <h2>What is HRTimelines?</h2>
        <p>
          {`
            HRTimelines is a trans healthcare research project created by trans
            people for trans people. We are looking at the effects of Hormone
            Replacement Therapy (HRT) in transgender individuals through survey
            based research. Our goal is to create better timelines for physical
            effects of HRT while taking into account other factors such as
            application method, dosage, type, and other potential variables like age
            and race. Currently we are in our second version of the survey and are
            working on creating our case study project which will collect
            longitudinal data.`}{" "}
          If you are on HRT and interested in participating in our project
          please follow us on{" "}
          <a href="https://instagram.com/hrtimelines?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
            <u>Instagram</u>
          </a>
          . You will also soon be able to sign up to be a part of our case
          study, which is still under construction. If you have any other
          questions for us feel free to reach out via email at {" "}
          <button onClick={() => copy("hrtimelines@gmail.com")}>
            <u>hrtimelines@gmail.com</u>
          </button>{" "}
          or on Instagram{" "}
          <a href="https://instagram.com/hrtimelines?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
            <u>@hrtimelines</u>
          </a>
          .
        </p>
      </div>
    </>
  );
};

const Creators = () => {
  return (
    <>
      <div className="mt-24 p-5">
        <h2>About Us</h2>

        <p className="inline">
          {`
        Hi! We’re Lucas (he/they) and Tessa (any pronouns), the founders of HRTimelines. As two trans university students we saw a gap in trans healthcare data and went looking for a solution. The solution happened to be starting HRTimelines, which is our trans healthcare research project! We are two motivated engineering students working to make a difference in a field we only know about from experience. We are not medical professionals, but we are motivated to fill this gap in order to help other trans people and medical professionals looking to start HRT or work with trans patients. 
          `}
        </p>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <div className="mt-24 p-5">
        <h2>Contact Us</h2>
        <p>
          {`
            If you have any questions, feedback, or just want to chat, please reach out! Feel free to use the form below, email us, or reach out to us on Instagram. We are university students and will get back to you when we can, so please expect a few days delay for a response.
          `}
          <br />
          <br />
        </p>
        <p>
          Email:{" "}
          <button onClick={() => copy("hrtimelines@gmail.com")}>
            <u>hrtimelines@gmail.com</u>
          </button>
          <br />
          Instagram:{" "}
          <a href="https://instagram.com/hrtimelines?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
            <u>@hrtimelines</u>
          </a>
        </p>
      </div>
    </>
  );
};

const FormCoverText = () => {
  return (
    <>
      <div className="mt-24 p-5">
        <p>
          What follows is a short form that will ask a few basic questions about
          when you realized you were trans, when you came out, etc. It is
          expected to take about 5 minutes. You must be 18 years or older to
          complete this survey. We understand that some of these questions may
          be difficult to answer. You are not expected to have an exact date,
          just a best guess. If you have not yet done one of the things in this
          form (for example, you have not yet started HRT), please leave that
          answer blank. If you have any questions or are interested in helping
          out with the project you can email us at{" "}
          <button onClick={() => copy("hrtimelines@gmail.com")}>
            <u>hrtimelines@gmail.com</u>
          </button>{" "}
          or on instagram{" "}
          <a href="https://instagram.com/hrtimelines?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
            <u>@hrtimelines</u>
          </a>
        </p>
      </div>
    </>
  );
};

export { Description, Creators, Contact, FormCoverText };

const Empty = () => {
  return <></>;
};
export default Empty;
