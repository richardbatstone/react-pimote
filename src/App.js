import './App.css';
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
}

function turnLightOn(e) {
  console.log("turn it on")
  axios({
    headers: headers,
    method: 'post',
    url: 'https://pimote-server.herokuapp.com/sockets/',
    data: '{"socket_1":true, "socket_2":false}'
  });
}

function turnLightOff(e) {
  console.log("turn it off")
  axios({
    headers: headers,
    method: 'post',
    url: 'https://pimote-server.herokuapp.com/sockets/',
    data: '{"socket_1":false, "socket_2":false}'
  });
}

function App() {
  return (
    <div className="App">
      <p>
        Turn Charlotte's reading light:
      </p>
      <button onClick={turnLightOn}>On</button>
      <button onClick={turnLightOff}>Off</button>
    </div>
  );
}

export default App;
