import "./App.css";
import Calculator from "./Components/Calculator";

const App = () => {
  return (
    <div className="h-screen font-bold bg-white">
      <div className="flex justify-center min-h-full sm:p-8 md:items-center calculator-app">
        <Calculator />
      </div>
    </div>
  );
};

export default App;
