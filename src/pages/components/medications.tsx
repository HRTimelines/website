import { useEffect, useState } from "react";
import { getDate, medicationDataType } from "./mainForm";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import Dropdown from "./dropdown";

interface TableProps {
  data: medicationDataType[];
  setData: Dispatch<SetStateAction<medicationDataType[]>>;
  exampleSource: string;
  rows: number;
  setRows: Dispatch<SetStateAction<number>>;
  tableId: string;
}

function fetchSource(exampleSource: string) {
  const mascExample = [
    {
      id: "Example 1",
      method: "topcial gel",
      medication: "AndroGel",
      amount: "60mg",
      frequency: "daily",
      start: "2023-07-01",
      end: "2023-12-12",
      ongoing: false,
      termination: "Ineffective",
    },
    {
      id: "Example 2",
      method: "subcutaneous injections",
      medication: "Testosterone Cypionate",
      amount: "0.5mL at 100mg/mL",
      frequency: "weekly",
      start: "2023-12-12",
      end: "",
      ongoing: true,
      termination: "",
    },
  ];

  const estrogenExample = [
    {
      id: "Example 1",
      method: "patches",
      medication: "Estradot",
      amount: "100ug",
      frequency: "twice a week",
      start: "2023-07-01",
      end: "2023-12-12",
      ongoing: false,
      termination: "Ineffective",
    },
    {
      id: "Example 2",
      method: "intramuscular injections",
      medication: "Estradiol Valerate",
      amount: "0.5mL at 10mg/mL",
      frequency: "weekly",
      start: "2023-12-12",
      end: "",
      ongoing: true,
      termination: "",
    },
  ];
  const progesteroneExample = [
    {
      id: "Example 1",
      method: "oral pill",
      medication: "Progesterone",
      amount: "100mg",
      frequency: "daily",
      start: "2023-07-01",
      end: "2023-12-12",
      ongoing: false,
      termination: "Poor results",
    },
    {
      id: "Example 2",
      method: "anal suppository",
      medication: "Progesterone",
      amount: "200mg",
      frequency: "daily",
      start: "2023-12-12",
      end: "",
      ongoing: true,
      termination: "",
    },
  ];
  const antiAndrogenExample = [
    {
      id: "Example 1",
      method: "pills",
      medication: "Spironolactone",
      amount: "50mg",
      frequency: "daily",
      start: "2023-07-01",
      end: "2023-12-12",
      ongoing: false,
      termination: "Moodiness",
    },
    {
      id: "Example 2",
      method: "pills",
      medication: "Cyproterone",
      amount: "6mg",
      frequency: "daily",
      start: "2023-12-12",
      end: "",
      ongoing: true,
      termination: "",
    },
  ];

  if (exampleSource === "testosterone") {
    return mascExample;
  }
  if (exampleSource === "anti-androgen") {
    return antiAndrogenExample;
  }
  if (exampleSource === "estrogen") {
    return estrogenExample;
  }
  if (exampleSource === "progesterone") {
    return progesteroneExample;
  }
}

const MedicationTable = ({
  data,
  setData,
  exampleSource,
  rows,
  setRows,
  tableId,
}: TableProps) => {
  // TODO: add seperate volume and concentrtion
  const exampleData = fetchSource(exampleSource);

  const addRow = (rows: number, elementId: string) => {
    const newRowIndex = ("000" + rows).slice(-3);
    const newRow = {
      id: newRowIndex,
      method: "",
      medication: "",
      amount: "",
      frequency: "",
      start: "",
      end: "",
      ongoing: "",
      termination: "",
      medicationType: exampleSource,
    };
    const newData = data.concat(newRow);
    setData(newData);
    setRows(rows + 1);
  };

  useEffect(() => {
    const table = document.getElementById(tableId);
    if (table) {
      const scrollEnd = table.scrollWidth;
      const start = table.scrollLeft;
      const duration = 500; // Adjust the duration as needed

      const startTime = performance.now();

      const animateScroll = (timestamp: number) => {
        const progress = (timestamp - startTime) / duration;
        const easeInOutCubic = progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        table.scrollLeft = start + (scrollEnd - start) * easeInOutCubic;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }, [data, tableId])

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value, typeof value);

    if (type === "checkbox") {
      const editData = data.map((item) =>
        item.id === id
          ? { ...item, [name]: String(checked), end: "", termination: "" }
          : item,
      );
      setData(editData);
    } else {
      const editData = data.map((item) =>
        item.id === id && name ? { ...item, [name]: value } : item,
      );
      setData(editData);
    }
  };

  return (
    <>
      <div className="">
        <table className="medication w-[100%]">
          <thead>
            <tr>
              <th></th>
              <th>Method</th>
              <th>Medication</th>
              <th>Amount (in mg or ug)</th>
              <th>Frequency</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Ongoing</th>
              <th>Reason for termination</th>
            </tr>
          </thead>
          <tbody>
            {exampleData?.map(
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
              }) => (
                <tr key={id} className="">
                  <td className="text-[#545454]">{id}</td>
                  <td className="text-[#545454]">{method}</td>
                  <td className="text-[#545454]">{medication}</td>
                  <td className="text-[#545454]">{amount}</td>
                  <td className="text-[#545454]">{frequency}</td>
                  <td className="text-[#545454]">{start}</td>
                  <td className="text-[#545454]">{end}</td>
                  <td>
                    <input name="ongoing" checked={ongoing} type="checkbox" />
                  </td>
                  <td className="text-[#545454]">{termination}</td>
                </tr>
              ),
            )}
          </tbody>
        </table>
        <br className="" />
          <div>Please input your medication history below:</div>
        <table className="medication w-[100%]">
          <thead>
            <tr className="">
              <th></th>
              <th>Method</th>
              <th>Medication</th>
              <th>Amount (in mg or ug)</th>
              <th>Frequency</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Ongoing</th>
              <th>Reason for termination</th>
            </tr>
          </thead>
          <tbody id={tableId}>
            {data?.map(
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
              }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <input
                      name="method"
                      value={method}
                      type="text"
                      onChange={(e) => onChangeInput(e, id)}
                      placeholder="ex. pills"
                    />
                  </td>
                  <td>
                    <input
                      name="medication"
                      value={medication}
                      type="text"
                      onChange={(e) => onChangeInput(e, id)}
                      placeholder="ex. cyproterone"
                    />
                  </td>
                  <td>
                    <input
                      name="amount"
                      value={amount}
                      type="text"
                      onChange={(e) => onChangeInput(e, id)}
                      placeholder="ex. 6mg"
                    />
                  </td>
                  <td>
                    <input
                      name="frequency"
                      value={frequency}
                      type="text"
                      onChange={(e) => onChangeInput(e, id)}
                      placeholder="ex. daily"
                    />
                  </td>
                  <td>
                    <input
                      name="start"
                      value={start}
                      type="date"
                      onChange={(e) => onChangeInput(e, id)}
                      max={getDate()}
                    />
                  </td>
                  <td>
                    <input
                      name="end"
                      value={end}
                      type="date"
                      onChange={(e) => onChangeInput(e, id)}
                      max={getDate()}
                      min={start}
                      disabled={ongoing == "true"}
                    />
                  </td>
                  <td>
                    <input
                      name="ongoing"
                      value={ongoing}
                      type="checkbox"
                      onChange={(e) => onChangeInput(e, id)}
                    />
                  </td>
                  <td>
                    <input
                      name="termination"
                      value={termination}
                      type="text"
                      onChange={(e) => onChangeInput(e, id)}
                      placeholder="ex. headaches"
                      disabled={ongoing == "true"}
                    />
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
        <br />
        <button
          className="rounded-xl border-2 border-solid border-black p-1"
          type="button"
          onClick={() => {
            addRow(rows, tableId);
            const targetElement = document.getElementById(tableId);
            if (targetElement) {
              // targetElement.scroll({left: (rows) * 120 + 20000, top: 0, behavior: "smooth"})
              targetElement.scrollLeft = targetElement.scrollWidth;
            }
          }}
        >
          Add new entry
        </button>
        <br />
        <br />
      </div>
    </>
  );
};

export default MedicationTable;
