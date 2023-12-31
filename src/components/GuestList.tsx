interface ChildProps {
    guestList?: any[];
}

const GuestList: React.FC<ChildProps> = ({ guestList }) => {
    return (
        <ul>
            {guestList
                ? guestList.map((guest) => (
                      <li key={guest.package.name}>{guest.package.name}</li>
                  ))
                : "No guests."}
        </ul>
    );
};

export default GuestList;
