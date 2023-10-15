import { useState } from "react"
import { DateOfBirth, RaceQuestion } from "./questions"
import { api } from "~/utils/api"

export const Form = () => {

    const [dateOfBirth, setDateOfBirth] = useState("")

    const { mutate } = api.form.create.useMutation({
        onSuccess: () => {
            setDateOfBirth("")
        }
    })


    return (
        <>
            <h1>Main form</h1>
            <h2>Demographic Information</h2><br />
            <p>
                This section will ask you about some basic demographic information such as birthdate and country of resident
            </p><br /><br />
            
            <label htmlFor="dateOfBirth">When is your birthday?</label><br />
            <input 
                type="date" 
                id="dateOfBirth" 
                value = { dateOfBirth } 
                onChange={(e) => setDateOfBirth(e.target.value)}>    
            </input>

            <RaceQuestion />

            <button 
                type="button" 
                className="border-solid border-black border-2 p-1" 
                onClick={() => mutate({ dateOfBirth })}>
                    Submit
            </button>
        </>
    )
}