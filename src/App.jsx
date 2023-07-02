import './App.css';

function App() {
    // normal variable
    // const name = "Raihan";

    // with html
    // const name2 = <h1>Pascal</h1>
    // const age = <h2>17</h2>;
    // const email = <h2>rdeo.email@kc.om</h2>

    // variable that use many times
    // const user = (
    //     <div>
    //         {name2}
    //         {age}
    //         {email}
    //     </div>
    // );

    return (
        <div className='App'>
            <User name="Raihan" age={20} email="mrdeo24@gmail.com"/>
            <User name="Rosyid" age={24} email="mr2124@gmail.com"/>
            <User name="Latvia" age={21} email="lvto24@gmail.com"/>
            
            
        </div>
    )
}

// this is js function
// const GetName = () => {
//     return "Raihan";
// }

// this is react component
// every component need tobe capital first
// all argument in component is called 'props'
const User = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
        </div>
    );
}

export default App;