import { useState } from "react"

export default function EducationalSection(){

    // UseState varibles
    const [editing, setEdit] = useState(true);
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
        setEdit(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(endDate && startDate && endDate < startDate){
            alert("Start date cannot be before end date!");
            return;
        }
        setEdit(false);
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
                        onChange={handleSchoolNameChange}/>
                    </div>
                    <div className="formGroup">
                        <label>Study Title: </label>
                        <input
                        type="text"
                        value={studyTitle}
                        onChange={handleStudyTitle}
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
                    <div className="buttonSection">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            ) : (
                <div className="displayMode"> 
                    <p>School Name: {schoolName}</p>
                    <p>Study Title:{studyTitle} </p>
                    <p>Start Date: {startDate}</p>
                    <p>End Date: {endDate}</p>
                    <div className="buttonSection">
                        <button type="button" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
                
            )}
        </div>
    )
}