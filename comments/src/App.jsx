import "./App.css";
import Comments from "./components/Comments";
import comments from "./data/comments";

function App() {
  return (
    <div className="App">
      <Comments comments={comments} />
    </div>
  );
}

export default App;
