import ReactDOM from "react-dom";
import { Parent } from "./components/Parent";

const App = () => {
    return (
        <>
            <h1>React Typescript Project 1</h1>
            <Parent />
        </>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
