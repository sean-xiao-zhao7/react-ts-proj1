import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Reservations } from "./components/Reservations";
import { store } from "./redux";

const App = () => {
    return <Reservations />;
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
