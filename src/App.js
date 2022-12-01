import Button from "./components/Button";
import Link from "./components/Link";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <div className="App">
      <Link to="/accordion">Go to Accordion</Link>
      <Link to="/dropdown">Go to DropDown</Link>
      <ModalPage />
    </div>
  );
}

export default App;
