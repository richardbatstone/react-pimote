import './App.css';
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
}

function turnLightOn(e) {
  console.log("turn it on")
  var i;
  for (i = 0; i < 5; i++) {
    window.setTimeout(
    axios({
      headers: headers,
      method: 'post',
      url: 'https://pimote-server.herokuapp.com/sockets/',
      data: '{"socket_1":true, "socket_2":false}'
    }),
    200);
  }
}

function turnLightOff(e) {
  console.log("turn it off")
  var i;
  for (i = 0; i < 5; i++) {
    window.setTimeout(
    axios({
      headers: headers,
      method: 'post',
      url: 'https://pimote-server.herokuapp.com/sockets/',
      data: '{"socket_1":false, "socket_2":false}'
    }),
    200);
  }
}

function App() {
  return (
    <div className="App">
      <p>
        Turn the Bat(stone) signal:
      </p>
      <button onClick={turnLightOn}>On</button>
      <button onClick={turnLightOff}>Off</button>
    </div>
  );
}

export default App;
