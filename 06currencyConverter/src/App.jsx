import { useState } from 'react'; 
import './App.css';
import { InputBox } from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyinfo';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
    setConvertedAmount(Number(e.target.value) * (currencyInfo[to] || 1));
  };

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    const swappedAmount = amount * (currencyInfo[to] || 1) / (currencyInfo[from] || 1);
    setAmount(convertedAmount);
    setConvertedAmount(swappedAmount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-extrabold text-white bg-gradient-to-r from-gray-500 via-blue-600 to-gray-500 text-center p-6 rounded-xl mb-8">
        Currency Converter
      </h1>
      <InputBox
        // label="Currency Converter"
        amount={amount}
        onAmountChange={handleAmountChange}
        onCurrencyChange={handleFromChange}
        currencyOption={options}
        selectCurrency={from}
        onSwapClick={handleSwap}
        converted={convertedAmount}
        to={to}
        onToChange={handleToChange}
      />
    </div>
  );
}

export default App;