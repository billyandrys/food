import './App.css';
import TextFileReader from 'components/TextFileReader';
import map from 'Map.txt'

function App() {
  return (
    <div className="App">
      <h1>Hola Vadith</h1>
      <TextFileReader
        txt={map}
      />
    </div>
  );
}

export default App;
