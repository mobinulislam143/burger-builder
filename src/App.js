import './App.css';
import Main from './Components/Main';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from './redux/store'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Main/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
