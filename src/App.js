import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormExpense from "./components/FormExpense";

function App() {
  return (
    <div className="App">
      <Header />
      <FormExpense />
      <Footer />
    </div>
  );
}

export default App;
