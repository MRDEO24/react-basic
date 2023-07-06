import "./App.css";
import { useState } from "react";

function App() {
  // change text color
  const [textColor, setTextColor] = useState("red");
  //   change text with constant text
  const [textValue, setTextValue] = useState("Merah");
  //   change intro text with input
  const [introText, setIntroText] = useState("Hai aku adalah ");
  //   tag name change
  const [tagNameInfo, setTagNameInfo] = useState("");

  const [count, setCount] = useState(0);

  const changeColor = () => {
    setTextColor(textColor == "red" ? "black" : "red");
    setTextValue(textColor == "red" ? "Song Rapper" : "Tukang kayu");
  };

  const handleIntroText = (event) => {
    setIntroText(event.target.value);
  };

  //   function to know what the tag name
  const tagInfo = (event) => {
    setTagNameInfo("Itu adalah tag " + event.target.tagName);
  };
  // increase,decrease,set to zero
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const setTozero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1 style={{ color: textColor }} onMouseOver={tagInfo}>
        {introText} {textValue}
      </h1>
      <br />
      <button onClick={changeColor} onMouseOver={tagInfo}>
        Ubah Warna
      </button>
      <br />
      <input
        onChange={handleIntroText}
        style={{ marginTop: 12 }}
        type="text"
        onMouseOver={tagInfo}
      />{" "}
      <br />
      <h3>{tagNameInfo}</h3>
      <br />
      <hr />
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={setTozero}>Set to Zero</button>
      <br />
      <p>Angka sekarang adalah {count}</p>
    </div>
  );
}

export default App;
