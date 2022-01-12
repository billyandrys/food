import './App.css';
import TextFileReader from 'components/TextFileReader';
import map from 'Map.txt'

function App() {
  return (
    <div className="App">
      <h1>Hola Grupo!!</h1>
      <TextFileReader
        txt={map}
      />
    </div>
  );
}

export default App;
