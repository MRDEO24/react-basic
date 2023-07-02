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
            <Job salary={59000} position="FE Engineer" company="Pixel Dev Factory"/>
            <Job salary={1000000} position="BE Engineer" company="Google.inc"/>
            <Job salary={24000} position="Accountant" company="Amazon"/>
            
            
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
// const User = (props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.age}</h1>
//             <h1>{props.email}</h1>
//         </div>
//     );
// }

// ? Excerise: make Job component with salary, position, company

const Job = (props) =>{
    return(
        <div>
            <h2>{props.salary}</h2>
            <h3>{props.position}</h3>
            <h4>{props.company}</h4>
        </div>
    )
}
export default App;