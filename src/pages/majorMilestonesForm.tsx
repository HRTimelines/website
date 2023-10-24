import { useState } from "react"
import { api } from "~/utils/api"

export const MilestonesForm = () => {

    const [dateOfBirth, setDateOfBirth] = useState("")
    const [country, setCountry] = useState("")
    const [transStart, setTransStart] = useState("")

    const { mutate } = api.form.create.useMutation({
        onSuccess: () => {
            setDateOfBirth("")
            setCountry("")
            setTransStart("")
        }
    })

    return (
        <>
            <div>
                <label htmlFor="dateOfBirth">What is your date of birth?</label><br />
                <input 
                    type="date" 
                    id="dateOfBirth" 
                    defaultValue={dateOfBirth} 
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className = ""
                /><br />

                <label htmlFor="country">In which country do you currently reside?</label><br />
                <input 
                    type="text" 
                    id="country" 
                    defaultValue={country} 
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className = "border border-black"
                /><br />

                <label htmlFor="transStart">What is the earliest date you realized you were trans?</label><br />
                <input 
                    type="date" 
                    id="transStart" 
                    defaultValue={transStart} 
                    onChange={(e) => setTransStart(e.target.value)}
                    className = ""
                /><br />

                <button 
                    type="button" 
                    className="border-solid border-black border-2 p-1" 
                    onClick={() => mutate({ 
                        dateOfBirth, 
                        country,
                        transStart })}>
                        Submit
                </button>
            </div>
        </>
    )
}