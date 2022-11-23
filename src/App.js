import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div>
        <Button primary>Click0</Button>
      </div>
      <div>
        <Button secondary>Click2</Button>
      </div>
      <div>
        <Button success rounded>
          Click3
        </Button>
      </div>
      <div>
        <Button danger outline>
          Click4
        </Button>
      </div>
    </div>
  );
}

export default App;
