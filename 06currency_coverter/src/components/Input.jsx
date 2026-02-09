import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
}) {
  return (
    <div className="bg-white p-4 rounded-lg flex justify-between items-center">
      
      {/* Left Side: Amount */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-1">
          {label}
        </label>

        <input
          type="number"
          className="outline-none text-lg"
          placeholder="0"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Right Side: Currency Dropdown */}
      <div className="flex flex-col items-end">
        <span className="text-sm text-gray-500 mb-1">
          Currency Type
        </span>

        <select
          className="bg-gray-100 rounded-md px-2 py-1 outline-none"
          value={currency}
          disabled={currencyDisabled}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur}>
              {cur.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;