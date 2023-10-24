import { useState } from "react"
import { api } from "~/utils/api"

export const MilestonesForm = () => {

    const [dateOfBirth, setDateOfBirth] = useState("")
    const [country, setCountry] = useState("")
    const [transStart, setTransStart] = useState("")
    const [transEnd, setTransEnd] = useState("")
    const [comingOutStart, setComingOutStart] = useState("")
    const [comingOutEnd, setComingOutEnd] = useState("")
    const [hrtStart, setHrtStart] = useState("")

    const { mutate } = api.form.create.useMutation({
        onSuccess: () => {
            setDateOfBirth("")
            setCountry("")
            setTransStart("")
            setTransEnd("")
            setComingOutStart("")
            setComingOutEnd("")
            setHrtStart("")
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
                /><br /><br />

                <label htmlFor="country">In which country do you currently reside?</label><br />
                <input 
                    type="text" 
                    id="country" 
                    defaultValue={country} 
                    onChange={(e) => setCountry(e.target.value)}
                    className = "border border-black"
                /><br /><br />

                <label htmlFor="transStart">What is the earliest date you realized you were trans?</label><br />
                <input 
                    type="date" 
                    id="transStart" 
                    defaultValue={transStart} 
                    onChange={(e) => setTransStart(e.target.value)}
                    className = ""
                /><br /><br />

                <label htmlFor="transEnd">What is the latest date you realized you were trans?</label><br />
                <input 
                    type="date" 
                    id="transEnd" 
                    defaultValue={transEnd} 
                    onChange={(e) => setTransEnd(e.target.value)}
                    className = ""
                /><br /><br />

                <label htmlFor="comingOutStart">When is the earliest date you came out?</label><br />
                <input 
                    type="date" 
                    id="comingOutStart" 
                    defaultValue={comingOutStart} 
                    onChange={(e) => setComingOutStart(e.target.value)}
                    className = ""
                /><br /><br />

                <label htmlFor="comingOutEnd">When is the latest date you came out?</label><br />
                <input 
                    type="date" 
                    id="comingOutEnd" 
                    defaultValue={comingOutEnd} 
                    onChange={(e) => setComingOutEnd(e.target.value)}
                    className = ""
                /><br /><br />

                <label htmlFor="hrtStart">On which day did you start HRT?</label><br />
                <input 
                    type="date" 
                    id="hrtStart" 
                    defaultValue={hrtStart} 
                    onChange={(e) => setHrtStart(e.target.value)}
                    className = ""
                /><br /><br />


                <button 
                    type="button" 
                    className="border-solid border-black border-2 p-1" 
                    onClick={() => mutate({ 
                        dateOfBirth, 
                        country,
                        transStart,
                        transEnd,
                        comingOutStart,
                        comingOutEnd,
                        hrtStart })}>
                        Submit
                </button>
            </div>
        </>
    )
}