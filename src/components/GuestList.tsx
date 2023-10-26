interface ChildProps {
    guestList: [];
}

const GuestList: React.FC<ChildProps> = ({ guestList }) => {
    return (
        <ul>
            {guestList.map((guest) => (
                <li>{guest}</li>
            ))}
        </ul>
    );
};

export default GuestList;
