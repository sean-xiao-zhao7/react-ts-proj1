import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { Reservations } from "./components/Reservations";
import { store } from "./redux";

const App = () => {
    return <Reservations />;
};

const root = createRoot(document.querySelector("#root") as Element);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
