import { useState } from "react"
import { api } from "~/utils/api"
// import { constructCheckboxQuestion } from "./components/questionConstructor.ts"


const genderArray = ["Male", 
"Female", 
"Genderfluid", 
"Genderqueer", 
"Non-Binary", 
"Agender", 
"Demiboy", 
"Demigirl", 
"Questioning"]

export const MainForm = () => {
    
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [genderChecked, genderSetChecked] = useState([])
    
    // Next steps: make this list update properly / make checkboxes input properly
    // const handleCheck = (event) => {
    //     var updatedList = [...genderChecked]
    //     if (event.target.checked) {
    //         updatedList = [...genderChecked, event.target.value]
    //     } else {
    //         updatedList.splice(genderChecked.indexOf(event.target.value), 1)
    //     }
    //     genderSetChecked(updatedList)
    // }

    const { mutate } = api.form.create.useMutation({
        onSuccess: () => {
            setDateOfBirth("")
        }
    })


    return (
        <>
            <h1>Main form</h1><br />
            <h2>Demographic Information</h2>
            <p>
                This section will ask you about some basic demographic information such as birthdate and country of resident
            </p><br /><br />
            
            <div>
                <label htmlFor="dateOfBirth">When is your birthday? (yyyy-mm-dd)</label><br />
                <input 
                    type="text" 
                    id="dateOfBirth" 
                    value = { dateOfBirth } 
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className = "border border-black border-2px"
                >    
                </input><br />
            </div>

            <div>
                <label htmlFor="gender">Which category(s) best describe you?</label><br />
                <div id="genderContainer">
                    {genderArray.map((item, index) => (
                        <div key={index}>
                            {/* <input value={item} type="checkbox" onClick = {handleCheck} /> */}
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* <RaceQuestion /> */}

            <button 
                type="button" 
                className="border-solid border-black border-2 p-1" 
                onClick={() => mutate({ dateOfBirth: dateOfBirth })}>
                    Submit
            </button>
        </>
    )
}