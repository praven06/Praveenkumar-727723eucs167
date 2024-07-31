import './App.css';

const App=()=> {
  let name ="praveen";
  let age=15;
  const message=()=>{
    alert("Messafe from javascript alert");
    console.log("message for the developer")
  }
  const print=()=>{
    console.log(name,age)
  }
  return (
    <div className="App">
        <h1>Let we see the output of JAVASCRIPT</h1>
        <button onClick={message}>Click me</button>
        <button onClick={print}>problem 2</button>
    </div>
  );
}

export default App;
