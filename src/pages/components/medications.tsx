import { useState } from "react";
import { getDate, medicationDataType } from "./mainForm";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import Dropdown from "./dropdown";

interface TableProps {
  data: medicationDataType[];
  setData: Dispatch<SetStateAction<medicationDataType[]>>;
  exampleSource: String;
  rows: number;
  setRows: Dispatch<SetStateAction<number>>;
}

function fetchSource(exampleSource: String) {
  const mascExample = [
    {
      id: "ex",
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
      id: "ex",
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
      id: "ex",
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
      id: "ex",
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
      id: "ex",
      method: "oral pill",
      medication: "Progesterone",
      amount: "100mg",
      frequency: "daily",
      start: "2023-07-01",
      end: "2023-12-12",
      ongoing: false,
      termination: "Did not see desired results",
    },
    {
      id: "ex",
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
      id: "ex",
      method: "pills",
      medication: "Spironolactone",
      amount: "50mg",
      frequency: "daily",
      start: "2023-07-01",
      end: "2023-12-12",
      ongoing: false,
      termination: "Caused headaches",
    },
    {
      id: "ex",
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
}: TableProps) => {
  // TODO: add seperate volume and concentrtion
  // const [rows, setRows] = useState(2);

  const exampleData = fetchSource(exampleSource);

  const addRow = (rows: number) => {
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
    };
    const newData = data.concat(newRow);
    setData(newData);
    setRows(rows + 1);
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value, typeof(value));

    if (type === "checkbox") {
      const editData = data.map((item) =>
        item.id === id ? { ...item, [name]: String(checked) } : item,
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
      <div className="medication">
        <table>
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
                <tr>
                  <td>{id}</td>
                  <td>{method}</td>
                  <td>{medication}</td>
                  <td>{amount}</td>
                  <td>{frequency}</td>
                  <td>{start}</td>
                  <td>{end}</td>
                  <td>
                    <input name="ongoing" checked={ongoing} type="checkbox" />
                  </td>
                  <td>{termination}</td>
                </tr>
              ),
            )}
            <br />
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
                      placeholder="ex. cyproterone acetate"
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
                    />
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
        <button
          className="rounded-xl border-2 border-solid border-black p-1"
          type="button"
          onClick={() => {
            addRow(rows);
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
