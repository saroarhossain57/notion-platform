import { io } from "socket.io-client";
//👇🏻 http://localhost:4000 is where the server host URL.
const socket = io.connect("http://localhost:4000");

function App() {
  return (
      <div>
          <p>Hello World!</p>
      </div>
  );
}
export default App;