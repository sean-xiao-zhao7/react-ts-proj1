import { useState } from "react";
import GuestList from "./GuestList";

export const Reservations = () => {
    const [guestList, setGuestList] = useState<string[]>([]);
    const [newGuest, setNewGuest] = useState<string>("");

    const addGuestHandler = () => {
        setGuestList((prevState) => {
            return [...prevState, newGuest];
        });
        setNewGuest("");
    };

    return (
        <>
            <input
                type="text"
                value={newGuest}
                placeholder="New guest"
                onChange={(e) => setNewGuest(e.target.value)}
            />
            <button onClick={addGuestHandler}>Add guest</button>
            <GuestList guestList={guestList} />
        </>
    );
};
