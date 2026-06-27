import { useState } from "react";
import "../styles/Practical.css";

export default function PracticalSection(){
    const [editing, setEdit] = useState(true);
    const [companyName, setName] = useState("");
    const [positionTitle, setPos] = useState("");
    const [respons, setRespons] = useState("");
    const [startDate, setSartDate] = useState("");
    const [endDate, setEndDate] = useState("");


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

    const handleCNameChange = (event) =>{
        setName(event.target.value);
    }

    const handlePosChange = (event) =>{
        setPos(event.target.value);
    }

    const handleResponsChange = (event) =>{
        setRespons(event.target.value);
    }

    const handleStartDate = (event) =>{
        setSartDate(event.target.value);
    }

    const handleEndDate = (event) =>{
        setEndDate(event.target.value);
    }

    return(
        <div id="practicalFormSection">
            <h2>Practical Section</h2>
            {editing ? (
                <form onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label>Company Name: </label>
                        <input type="text"
                         value={companyName}
                        onChange={handleCNameChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Position Title: </label>
                        <input type="text" 
                        value={positionTitle}
                        onChange={handlePosChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Responsibilities: </label>
                        <input type="textarea"
                         value={respons}
                        onChange={handleResponsChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Start Date: </label>
                        <input type="date"
                        value={startDate}
                        onChange={handleStartDate}
                        />
                        <label>End Date: </label>
                        <input type="date"
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
                <p>Company Name: {companyName}</p>
                <p>Position title: {positionTitle}</p>
                <p>Responsibilities: {respons}</p>
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