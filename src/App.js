import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div>
        <Button primary className="bg-purple-200">
          Click0
        </Button>
      </div>
      <div>
        <Button>Click2</Button>
      </div>
      <div>
        <Button>Click3</Button>
      </div>
      <div>
        <Button>Click4</Button>
      </div>
    </div>
  );
}

export default App;
