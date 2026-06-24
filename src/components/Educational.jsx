import { useState } from "react"

export default function GeneralSection(){

    // UseState varibles
    const [editing, setEdit] = useState("true");
    const [schoolName, setSName] = useState("");
    const [studyTitle, setStudTitle] = useState ("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    //EventHandlers

    const handleSchoolNameChange = (event) => {
        setSName(event.target.value);
    }

    const handleStudyTitle = (event) => {
        setStudTitle(event.target.value);
    }

    const handleStartDate = (event) => {
        setStartDate(event.target.value);
    }

    const handleEndDate = (event) => {
        setEndDate(event.target.value);
    }

    const handleEdit = () => {

    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div id="educationalFormSection">
            <h2>Education</h2>
            {editing ? (
                <form onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label>School Name: </label>
                        <input type="text"
                        value={schoolName}
                        onChange={handleSNameChange}/>
                    </div>
                    <div className="formGroup">
                        <label>Study Title: </label>
                        <input
                        type="text"
                        value={schoolName}
                        onChange={handleSchoolNameChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Study Start Date: </label>
                        <input
                        type="date"
                        value={startDate}
                        onChange={handleStartDate}
                        />
                        <label>Study End Date: </label>
                        <input
                        type="date"
                        value={endDate}
                        onChange={handleEndDate}
                        />
                    </div>
                </form>
            ) : (
                <div>
                </div>
            )}
        </div>
    )
}