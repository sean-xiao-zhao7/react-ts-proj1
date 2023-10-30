import { useRef, useState } from "react";
import GuestList from "./GuestList";

export const Reservations = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [guestList, setGuestList] = useState<string[]>([]);
    const [newGuest, setNewGuest] = useState<string>("");

    const addGuestHandler = () => {
        if (newGuest) {
            setGuestList((prevState) => {
                return [...prevState, newGuest];
            });
            setNewGuest("");
        }
    };

    return (
        <>
            <input
                type="text"
                value={newGuest}
                placeholder="New search"
                onChange={(e) => setNewGuest(e.target.value)}
                ref={ref}
            />
            <button onClick={addGuestHandler}>Search repositories</button>
            <GuestList guestList={guestList} />
        </>
    );
};
