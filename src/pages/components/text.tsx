import Image from "next/image";
import { toast } from "react-hot-toast";
import Schedule_desktop from "../../../public/HRTimelines Schedule.jpg";
import Schedule_mobile from "../../../public/HRTimelines timeline sketch - Mobile.jpg";
import Link from "next/link";

const isFormActive = true;

function copy(text: string) {
  void navigator.clipboard.writeText(text);
  toast.success("copied to clipboard");
}

function goToForm() {
  window.location.href = "/formCoverPage";
}

const Description = () => {
  return (
    <>
      <div className="anchor mt-24 w-full p-5" id="description">
        <h2>What is HRTimelines?</h2>
        <p>
          {`
            HRTimelines is a trans healthcare research project created by trans
            people for trans people. We are looking at the effects of Hormone
            Replacement Therapy (HRT) in transgender individuals through survey
            based research. Our goal is to create better timelines for physical
            effects of HRT while taking into account other factors such as
            application method, dosage, type, and other potential variables like age
            and ethnicity.`}
          <br />
          <br />
          {`
            Our first survey was built in Google Forms and was released in early January 2023.  We returned over 150 responses from trans people all around the world, and have already gleaned many interesting insights.  The data is still being analyzed, but some initial discoveries have already been very exciting.  We look forward to sharing those with you soon.
            `}
          <br />
          <br />
          {`Currently we are in our second version of the survey and are working on developing our longitudonal study project.  This will collect more data on individuals, gaining a better understanding of how HRT affects people over time.`}{" "}
          If you are on HRT and interested in participating in our project
          please follow us on{" "}
          <a href="https://instagram.com/hrtimelines?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
            <u>Instagram</u>
          </a>
          . You will also soon be able to sign up to be a part of our case
          study, which is still under construction. If you have any other
          questions for us feel free to reach out via email at{" "}
          <button onClick={() => copy("hrtimelines@gmail.com")}>
            <u>hrtimelines@gmail.com</u>
          </button>{" "}
          or on Instagram{" "}
          <a href="https://instagram.com/hrtimelines?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
            <u>@hrtimelines</u>.
          </a>
          <br />
          <br />
        </p>
        {isFormActive && (
          <div>
            We are currently collecting data on when trans people start HRT,
            what medications they are on, and what physical effects they have
            experienced. If you are interested in filling it out, please click
            the button below.
          </div>
        )}
      </div>
    </>
  );
};

const GoToForm = () => {
  return (
    <>
      {isFormActive && (
        <div className="flex items-center justify-center p-5">
          <button
            onClick={() => goToForm()}
            className="rounded-full border-4 border-solid border-[#F5A9B8] p-2"
          >
            <span className="text-xl font-bold">Go to form</span>
          </button>
        </div>
      )}
    </>
  );
};

const Creators = () => {
  return (
    <>
      <div className="anchor p-5" id="creators">
        <h2>About Us</h2>

        <p className="">
          {`
        Hi! We’re Lucas (he/they) and Tessa (any pronouns), the founders of HRTimelines. As two trans university students we saw a gap in trans healthcare data and went looking for a solution. The solution happened to be starting HRTimelines, which is our trans healthcare research project! We are two motivated engineering students working to make a difference in a field we know about from experience. We are not medical professionals, but we are motivated to fill this gap in order to help other trans people and medical professionals looking to start HRT or work with trans patients. 
          `}
        </p>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <div className="anchor p-5" id="contact">
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
          <br />
          <a href="https://forms.gle/eZRGF7BgagHJ668H7">
            <u>Feedback Form</u>
          </a>
          <br />
          <a href="https://forms.gle/dgiUmjaUQG8mNyJP7">
            <u>Join our email list</u>
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
        <h2>Form Consent</h2>
        <p>
          What follows is a form about what kinds of Hormone Replacement Therapy
          (HRT) you are on and the physical effects you have experienced. It
          will be used to draw conclusions about the different physical effects
          of HRT, as well as if those effects correlate with age, ethnicity,
          medication, dosage, other medications, or medical conditions. It is
          expected to take around 10 minutes. You must be 18 years or older to
          complete this survey. For some questions, you are not expected to have
          an exact date, just a best guess.{" "}
        </p><br />
        <p>
          Data is encrypted and stored on servers in the eastern United States.
          We do not collect any identifying information (such as name or email).
          This data will be retained for analyzing for any future projects
          HRTimelines may work on, but will not be shared outside of the
          research team for any other research or commercial purpose. If you have
          any questions or are interested in helping out with the project you
          can email us at{" "}
          <button onClick={() => copy("hrtimelines@gmail.com")}>
            <u>hrtimelines@gmail.com</u>
          </button>{" "}
          or reach us on instagram{" "}
          <a href="https://instagram.com/hrtimelines?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
            <u>@hrtimelines</u>.
          </a>
        </p>
      </div>
    </>
  );
};

const Timelines = () => {
  return (
    <>
      <div className="h-auto w-full p-5">
        <h2>Planned Timelines</h2>
        <Image
          src={Schedule_desktop}
          alt="A description of our timeline expectations"
          className="desktop mt-5"
        />
        <Image
          src={Schedule_mobile}
          alt="A description of our timeline expectations"
          className="mobile mt-5 w-48"
        />
      </div>
    </>
  );
};

const Plans = () => {
  return (
    <>
      <div className="p-5">
        <h2>Future Plans</h2>
        <p>
          Our primary goal is to provide trans people with evidence based
          expectations for their medical transition. The current form this takes
          is through surveys asking health care questions, and the presentation
          of that data. However, in the future we would also like to be able to
          inform trans health decision making, answering with evidence key
          questions about (for example) the effectiveness of progesterone or
          different injection processes.
        </p>
        <br />
        <br />
        Our Short term goals include:
        <ul className="ml-8 list-disc">
          <li>Data visualization on our website</li>
          <li>
            Increased longitudinal research to gain higher resolution of changes
            over time
          </li>
          <li>Collecting more information on specific parts of transition</li>
          <li>
            Gaining a broader reach into trans communities we do not have much
            contact with
          </li>
          <li>Build a community of volunteers to support the work</li>
        </ul>
        <br />
        <p>
          {`In the future, we are interested in creating better documentation of
          our findings, including reports and detailed reviews. We are also
          considering a podcast discussing the effects and impacts of HRT. We
          are both looking forward to seeing where this project is going, and are
          always looking for feedback and good ideas. If you would like to get
          in touch, you can find contact us in the section below `}
        </p>
      </div>
    </>
  );
};

const NoForm = () => {
  return (
    <>
      <div className="m-40 items-center text-center">
        <p>
          There is no open form at this time. Follow us on Instagram{" "}
          <a href="https://instagram.com/hrtimelines?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
            <u>@hrtimelines</u>
          </a>{" "}
          for updates!
        </p>
      </div>
    </>
  );
};

export {
  Description,
  Creators,
  Contact,
  FormCoverText,
  Timelines,
  Plans,
  GoToForm,
  NoForm,
};

const Empty = () => {
  return <></>;
};
export default Empty;
