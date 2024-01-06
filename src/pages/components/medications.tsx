import { useState } from "react";

const data = [
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
// TODO: add seperate volume and concentrtion

export const MedicationTable = () => {
  const [medicationData, setMedicationData] = useState(data);
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
        const newData = medicationData.concat(newRow);
        setMedicationData(newData);
        setRows(rows + 1);
    };

  const onChangeInput = (e: any, id: string) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    console.log("id", id);

    const editData = medicationData.map((item) =>
      item.id === id && name ? { ...item, [name]: value } : item,
    );

    setMedicationData(editData);
  };

  return (
    <>
      <div className="medication">
        <table>
          <thead>
            <tr>
              <th>Row</th>
              <th>Method</th>
              <th>Medication</th>
              <th>Amount (in mg/ug)</th>
              <th>Frequency</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Ongoing</th>
              <th>Reason for termination</th>
            </tr>
          </thead>
          <tbody>
            {medicationData.map(
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
                    />
                  </td>
                  <td>
                    <input
                      name="end"
                      value={end}
                      type="date"
                      onChange={(e) => onChangeInput(e, id)}
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
          onClick={() => {
            addRow(rows);
          }}
        >
          Add new row
        </button>
      </div>
    </>
  );
};

export default MedicationTable;
