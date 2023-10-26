import ReactDOM from "react-dom";
import { Reservations } from "./components/Reservations";

const App = () => {
    return <Reservations />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
