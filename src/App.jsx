import "./App.css";

function App() {
  const ProgressBar = ({progress})=>{
    return <div className="outer">
      <div className="inner" style={{width: `${progress}%`}}>{progress}%</div>
    </div>
  }

  return (
    <>
      <h1>Progress Bar</h1>
      <ProgressBar progress={70} />
    </>
  );
}

export default App;
