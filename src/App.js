import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1> FaceBook HelpDesk </h1>
      <form>
        <input type="text" placeholder="username" className="username" />
        <br />
        <br />
        <input type="password" placeholder="password" className="pwd" />
        <br />
        <br />
        <button type="sumbit">Login </button>
        <br />
        <br />
        <button type="sumbit">Register </button>
      </form>
    </div>
  );
}
