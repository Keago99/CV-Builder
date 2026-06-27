import { useState } from 'react';
import "../styles/General.css";

export default function GeneralSection(){

    const [editing, setEdit] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // eventHandlers for state variables
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setEdit(false);

    }

    const handleEdit = (event) =>{
        setEdit(true);
    }

    return(
        <div id="generalFormSection">
            <h2>General</h2>
            {editing ? (
                // Display mode, if editing is true
                <form onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label>Name: </label>
                        <input type="text"
                        value={name}
                        onChange={handleNameChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Email: </label>
                        <input type="email"
                        value={email}
                        onChange={handleEmailChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Phone: </label>
                        <input type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        />
                    </div>
                    <div className="buttonSection">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            ) : (
                // View Mode, if the editing is false
                <div className="displayMode">
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <div className="buttonSection">
                        <button type="button" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            )}
        </div>
    )
}