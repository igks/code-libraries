import "./App.css";
import Albums from "./Album.jsx";
import NewAlbumForm from "./NewAlbum";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Albums />
      <NewAlbumForm />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
