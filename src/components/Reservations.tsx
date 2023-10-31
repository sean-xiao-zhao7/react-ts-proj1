import { useRef, useState } from "react";

import GuestList from "./GuestList";
import { useAppDispatch, useAppSelector } from "../hooks";
import { searchStart, searchSuccess } from "../redux/slices/repositoriesSlice";

export const Reservations = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [guestList, setGuestList] = useState<string[]>([]);
    const [newGuest, setNewGuest] = useState<string>("");
    const repositoriesData = useAppSelector((state) => state.repositories.data);
    const dispatch = useAppDispatch();

    // useAppDispatch
    // useAppSelector
    // searchStart
    // searchSuccess

    const searchStartHandler = () => {
        if (newGuest) {
            dispatch(searchStart(newGuest));
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
            <button onClick={searchStartHandler}>Search repositories</button>
            <GuestList guestList={guestList} />
        </>
    );
};
