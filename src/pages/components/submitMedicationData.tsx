import { medicationDataType } from "./mainForm";
import { api } from "~/utils/api";

export function submitMedicationData(mascMedicationData: medicationDataType) {
  console.log("entered function submit");

  const { mutate } = api.medication.create.useMutation({
    onSuccess: () => {
      // TODO: add the setstate for all the medication data
      console.log("success");
    },
  });

  mutate({
    submitterId: 5,
    row: parseInt(mascMedicationData["id"]),
    method: mascMedicationData["method"],
    medication: mascMedicationData["medication"],
    amount: mascMedicationData["amount"],
    frequency: mascMedicationData["frequency"],
    start: mascMedicationData["start"],
    end: mascMedicationData["end"],
    ongoing: mascMedicationData["ongoing"],
    termination: mascMedicationData["termination"],
  });
}
