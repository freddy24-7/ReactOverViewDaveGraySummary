import Square from "./Square";
import Input from "./Input";
import { useState } from "react";


function App() {
  const [colorValue, setColorValue] = useState(null);
  const [hexValue, setHexValue] = useState(null);
  const [isDarkText, setIsDarkText] = useState(true);


  return (
    <div className="App">
      <Square colorvalue={colorValue}
      hexvalue={hexValue}
      isDarkText={isDarkText}
      />
      <Input
          colorvalue={colorValue}
          setColorValue={setColorValue}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
