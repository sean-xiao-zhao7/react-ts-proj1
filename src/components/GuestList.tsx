interface ChildProps {
    guestList?: any[];
}

const GuestList: React.FC<ChildProps> = ({ guestList }) => {
    return (
        <ul>
            {guestList
                ? guestList.map((guest) => <li>{guest}</li>)
                : "No guests."}
        </ul>
    );
};

export default GuestList;
