import logo from './logo.svg';
import './App.css';
import { Salon } from './components/Salon';
import { Message } from './components/Message'
import { Stack } from '@mui/material';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*  <Salon></Salon> */}
        <Stack spacing={1.0}>
          <Message auteur="Kristen" contenu="message test" date="20/06/2023"></Message>
          <Message auteur="Kristen" contenu="message test1message test1message test1message test1message test1message test1message test1message test1" date="21/06/2023"></Message>
          <Message auteur="Kristen" contenu="message tes2" date="22/06/2023"></Message>
        </Stack>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
