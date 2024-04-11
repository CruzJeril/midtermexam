import './App.css';

function Cruz({display}) {
  return (
    <div className="Cruz">
      {display}
    </div>
  );
}


export default function App() {
  return (
    <div>
      <Cruz display={"hello world"}/>
       </div>
  );
}