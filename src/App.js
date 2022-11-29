import "./App.scss";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      <div class="card">
        <h5 class="card-header primary">Featured</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
