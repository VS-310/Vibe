import { useId } from "react";
import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  onSwapClick,
  converted = 0,
  to,
  onToChange,
}) {
  const amountInputId = useId();

  return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center justify-center">
        <label htmlFor={amountInputId} className="block text-xl font-semibold text-white mb-2">
          {label}
        </label>
        <div className="flex space-x-4 items-center justify-center">
          <div className="flex flex-col space-y-2 w-1/3">
            <label htmlFor="from" className="text-md font-medium text-white">
              From
            </label>
            <input
              type="number"
              id={amountInputId}
              value={amount}
              onChange={onAmountChange}
              placeholder="Enter Amount"
              className="px-4 py-2 rounded-lg border-2 border-gray-600 bg-gray-700 text-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <select
              id="from"
              value={selectCurrency}
              onChange={onCurrencyChange}
              className="px-4 py-2 rounded-lg border-2 border-gray-600 bg-gray-700 text-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            >
              {currencyOption.map((currency, idx) => (
                <option key={idx} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={onSwapClick}
            className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition flex items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <div className="flex flex-col space-y-2 w-1/3">
            <label htmlFor="to" className="text-md font-medium text-white">
              To
            </label>
            <input
              type="number"
              id="toAmount"
              value={converted}
              placeholder="Converted Amount"
              readOnly
              className="px-4 py-2 rounded-lg border-2 border-gray-600 bg-gray-700 text-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <select
              id="to"
              value={to}
              onChange={onToChange}
              className="px-4 py-2 rounded-lg border-2 border-gray-600 bg-gray-700 text-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            >
              {currencyOption.map((currency, idx) => (
                <option key={idx} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
  );
}

export { InputBox };