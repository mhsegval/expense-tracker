import "./App.scss";
import Header from "./components/Header";
import FormExpense from "./components/FormExpense";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

// import Footer from "./components/Footer";
// import ExampleChart from "./components/ExampleChart";

function App() {
  const [expense, setExpense] = useState([]);

  const [formExpenseInput, setFormExpenseInput] = useState({
    amount: "",
    date: "",
    description: "",
    category: "",
  });

  function handleFormExpenseChange(event) {
    setFormExpenseInput((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(formExpenseInput);
  }

  // This function handles FormExpense Submit
  function handleFormExpenseSubmit(event) {
    event.preventDefault();
    setExpense([formExpenseInput, ...expense]);
    // console.log(expense);
    // setFormExpenseInput({
    //   amount: "",
    //   date: "",
    //   description: "",
    //   category: "",
    // });
  }

  return (
    <div className="App">
      <Header />
      {/* <ExampleChart /> */}
      <FormExpense
        value={formExpenseInput}
        handleFormExpenseChange={handleFormExpenseChange}
        handleFormExpenseSubmit={handleFormExpenseSubmit}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
