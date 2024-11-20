import React, { useState } from "react";
import Guest from "../Guest/Guest";
import "./SideBar.css";

function SideBar() {
    const [guest, setGuest] = useState("");
    const [guestList, setGuestList] = useState([]);  // Initialize guestList state
    
    const handleGuestChange = (e) => {
        setGuest(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (guest.trim()) { 
            setGuestList([guest, ...guestList]); 
            setGuest("");  
        }
    };

    return (
        <div className="sidebar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="guest" className="sidebar__label">
                    Guest Name
                    <input
                        type="text"
                        className="sidebar__input"
                        id="guest"
                        placeholder="Guest Name"
                        value={guest}
                        onChange={handleGuestChange}
                    />
                </label>
                <button type="submit" className="sidebar__button">+</button>
            </form>
                <ul className="sidebar__guest_list">
                    {guestList.map((guest, index) => (
                        <Guest key={index} guest={guest} /> 
                    ))}
                </ul>
        </div>
    );
}

export default SideBar;