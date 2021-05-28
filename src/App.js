import "./App.css";
import AllCountry from "./Componets/allCountriesStatus/AllCountry";
import Gsummary from "./Componets/globalSummary/Gsummary";
import India from "./Componets/india/India";

function App() {
  return (
    <div className="App">
      <Gsummary />
      <India />
      <AllCountry />
    </div>
  );
}

export default App;
