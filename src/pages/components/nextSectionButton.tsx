import React from "react";

export const NextSectionButton = ({ elementId, headerId }: any) => {
  const scrollToComponent = () => {
    const getHeaderHeight = () => {
      const header = document.getElementById(headerId);
      return header ? header.clientHeight : 0;
    };

    const headerHeight = getHeaderHeight();
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top - headerHeight;

      targetElement.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "center",
      });

      window.scrollBy(0, offset);
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

export const SkipSectionButton = ({ elementId, headerId }: any) => {
  const scrollToComponent = () => {
    const getHeaderHeight = () => {
      const header = document.getElementById(headerId);
      return header ? header.clientHeight : 0;
    };

    const headerHeight = getHeaderHeight();
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top - headerHeight;

      targetElement.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "center",
      });

      window.scrollBy(0, offset);
    }
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="my-5 rounded-xl border-2 border-solid border-black p-1"
          onClick={scrollToComponent}
        >
          Skip Section
        </button>
      </div>
    </>
  );
};

const Empty = () => {
  return <></>;
};

export default Empty;
