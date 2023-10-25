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
    const [notes, setNotes] = useState("")
    const [feedback, setFeedback] = useState("")
    const [future, setFuture] = useState("")

    const { mutate } = api.form.create.useMutation({
        onSuccess: () => {
            setDateOfBirth("")
            setCountry("")
            setTransStart("")
            setTransEnd("")
            setComingOutStart("")
            setComingOutEnd("")
            setHrtStart("")
            setFeedback("")
            setFuture("")
            setNotes("")
        }
    })

    return (
        <>
            <div>
                <div className="question">
                    <label htmlFor="dateOfBirth">What is your date of birth?</label><br />
                    <input 
                        type="date" 
                        id="dateOfBirth" 
                        defaultValue={dateOfBirth} 
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className = ""
                    />
                </div>

                <div className="question">
                    <label htmlFor="country">In which country do you currently reside?</label><br />
                    <input 
                        type="text" 
                        id="country" 
                        defaultValue={country} 
                        onChange={(e) => setCountry(e.target.value)}
                        className = "border border-black rounded-sm"
                    />
                </div>

                <div className="question">
                    <span>When did you realize you were trans?  If this is a range, please input approximate start and end dates.  If you have an exact date, just input the same date twice</span><br />

                    <label htmlFor="transStart">Start:</label>
                    <input 
                        type="date" 
                        id="transStart" 
                        defaultValue={transStart} 
                        onChange={(e) => setTransStart(e.target.value)}
                        className = ""
                    /><br />

                    <label htmlFor="transEnd">End:</label>
                    <input 
                        type="date" 
                        id="transEnd" 
                        defaultValue={transEnd} 
                        onChange={(e) => setTransEnd(e.target.value)}
                        className = ""
                    />
                </div>

                <div className="question">
                    <span>When did you come out?  If this is a range, please input approximate start and end dates.  If you have an exact date, just input the same date twice</span><br />
                    <label htmlFor="comingOutStart">Start:</label>
                    <input 
                        type="date" 
                        id="comingOutStart" 
                        defaultValue={comingOutStart} 
                        onChange={(e) => setComingOutStart(e.target.value)}
                        className = ""
                    /><br />

                    <label htmlFor="comingOutEnd">End:</label>
                    <input 
                        type="date" 
                        id="comingOutEnd" 
                        defaultValue={comingOutEnd} 
                        onChange={(e) => setComingOutEnd(e.target.value)}
                        className = ""
                    />
                </div>

                <div className="question">
                    <label htmlFor="hrtStart">On which day did you start HRT?</label><br />
                    <input 
                        type="date" 
                        id="hrtStart" 
                        defaultValue={hrtStart} 
                        onChange={(e) => setHrtStart(e.target.value)}
                        className = ""
                    />
                </div>

                {/* notes */}
                <div className="question">
                    <label htmlFor="notes">Do you have any notes or additional information you would like to provide about any of these responses?</label><br />
                    <textarea
                        id="notes"
                        defaultValue={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="border border-black rounded-sm"
                        rows={5}
                        cols={50}
                    />
                </div>

                {/* feedback */}
                <div className="question">
                    <label htmlFor="feedback">Do you have any feedback about this form that you would like us to know about?</label><br />
                    <textarea
                        id="feedback"
                        defaultValue={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="border border-black rounded-sm"
                        rows={5}
                        cols={50}
                    />
                </div>

                {/* future */}
                <div className="question">
                    <label htmlFor="future">
                        {`
                            What kinds of information would you like to see in the future?  Is there some question about trans health care that you've always been curious about?  Maybe a particular piece of data you're interested in?
                        `}
                    </label><br />
                    <textarea
                        id="future"
                        defaultValue={future}
                        onChange={(e) => setFuture(e.target.value)}
                        className="border border-black rounded-sm"
                        rows={5}
                        cols={50}
                    />
                </div>

                <div>
                    <button 
                        type="button" 
                        className="border-solid border-black border-2 p-1 rounded-xl" 
                        onClick={() => mutate({ 
                            dateOfBirth, 
                            country,
                            transStart,
                            transEnd,
                            comingOutStart,
                            comingOutEnd,
                            hrtStart,
                            notes,
                            feedback,
                            future 
                        })}>Submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default MilestonesForm