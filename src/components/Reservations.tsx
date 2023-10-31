import { useState } from "react";

import GuestList from "./GuestList";
import { useAppDispatch, useAppSelector } from "../hooks";
import { searchStartAction } from "../redux/slices/repositoriesSlice";

export const Reservations = () => {
    const dispatch = useAppDispatch();
    const [newGuest, setNewGuest] = useState("");
    const { data, error, loading } = useAppSelector(
        (state) => state.repositories
    );

    const searchStartHandler = () => {
        if (newGuest) {
            dispatch(searchStartAction(newGuest));
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
            />
            <button onClick={searchStartHandler}>Search repositories</button>
            {loading && <h3>Loading</h3>}
            {error && <h3>{error}</h3>}
            {!error && !loading && <GuestList guestList={data} />}
        </>
    );
};
