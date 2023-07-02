import "./App.css";

// an ordinary if else
// const age = 15;
// if (age>=18){
//     console.log("Kewut")
// }else{
//     console.log("Lagi lucu-lucunya")
// }

// ternary operation

// age >= 18 ? console.log('hey') : console.log('huy')

function App() {
  const age = 19;
  const isGreen = true;

  return (
    <div className="App">
      <h1>{age >= 18 ? "OVER AGE" : "UNDER AGE"}</h1>
      <h1 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h1>

      {/* this is new for me "&&" can be use like this */}
      {isGreen && <button>BUTTON</button>}
    </div>
  );
}

export default App;
