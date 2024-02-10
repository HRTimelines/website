import { useState } from "react";
import { getDate, medicationDataType } from "./mainForm";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import Dropdown from "./dropdown";

interface TableProps {
  data: medicationDataType[];
  setData: Dispatch<SetStateAction<medicationDataType[]>>;
}

const MedicationTable = ({ data, setData }: TableProps) => {
  // TODO: add seperate volume and concentrtion
  const [rows, setRows] = useState(2);

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

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const { name, value } = e.target;

    const editData = data.map((item) =>
      item.id === id && name ? { ...item, [name]: value } : item,
    );

    setData(editData);
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
                      placeholder="6mg"
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
                      max={(getDate())}
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
                      placeholder="headaches"
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
