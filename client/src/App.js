import './App.css';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'redux/store'
import TextFileReader from 'components/TextFileReader';
import map from 'Map.txt'
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hola Grupo!!</h1>
        {/* <TextFileReader
        txt={map}
      /> */}
        <Home />
      </div>
    </Provider>
  );
}

export default App;
