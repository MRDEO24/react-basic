import "./App.css";
import {User} from "./User";
import {province} from "./province";

function App() {
//   // 1st Example of data array
//   const names = ["Raihan", "Rosyid", "Poetri", "Latvia", "Cutee"];

//   // 2nd Example with object
//   const users = [
//     { name: "Raihan", age: 20 },
//     { name: "Rosyid", age: 20 },
//     { name: "Poetri", age: 21 },
//     { name: "Latvia", age: 21 },
//     { name: "Cutee", age: 18 },
//   ];

//   return (
//     <div className="App">
//       {users.map((user, key) => {
//         return <User name={user.name} age={user.age} />;
//       })}
//     </div>
//   );
return(
    <div className="App">
        {province.map((prov)=>{
            return <Province name={prov.name} isJawa={prov.isJawa}/>
        })}
    </div>
);
}

const Province = (props) =>{
    return(
        <div>
            {props.isJawa && <h1>{props.name}</h1>}
        </div>
    )
}

export default App;
