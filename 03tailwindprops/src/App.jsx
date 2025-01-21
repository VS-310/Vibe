import './App.css'
import Card from './components/Card.jsx'

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind CSS</h1>
      <Card username="namo" place="india"/>
      <Card username="hitesh" place="america"/>
    </>
  );
}

export default App
