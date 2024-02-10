import React from "react";

export const NextSectionButton = ({elementId}: any) => {
  const scrollToComponent = () => {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      targetElement.scrollIntoView({
        block: "center",
        behavior: "smooth",
        inline: "center"
      });
    }
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="rounded-xl border-2 border-solid border-black p-1"
          onClick={scrollToComponent}
        >
          Next Section
        </button>
      </div>
    </>
  );
};


export const SkipSectionButton = ({elementId}: any) => {
  const scrollToComponent = () => {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      targetElement.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "center"
      });
    }
  };

  return (
    <>
      <div>
        <button
          type="button"
          // className="rounded-xl border-2 border-solid border-black p-1 my-5"
          className="rounded-xl underline-offset-2 underline p-1 my-5"
          onClick={scrollToComponent}
        >
          Skip Section
        </button>
      </div>
    </>
  );
};