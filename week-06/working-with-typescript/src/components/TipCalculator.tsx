import React, { useState } from 'react'

const TipCalculator = () => {
  const [total, setTotal] = useState<number>(0)
  const [grandTotal, setGrandTotal] = useState<number>(0)

  const calculateTip = (total: number, percentage: number) => {
    if (total) {
      const tip = total * percentage
      return tip
    } else {
      return 0
    }
  }

  const displayDollarAmount = (amount: number): string => {
    return amount.toFixed(2)
  }

  const selectTip = (percentage: number) => {
    const tip = calculateTip(total, percentage)
    const grandTotal = tip + total
    setGrandTotal(grandTotal)
  }

  return (
    <main>
      <input
        className="bill-total"
        type="number"
        value={total}
        onChange={e => setTotal(parseInt(e.target.value))}
      />
      <ul>
        <ul>
          <li>
            15% - $
            <span id="fifteen-percent">
              {displayDollarAmount(calculateTip(total, 0.15))}
            </span>
            <button className="button-15" onClick={() => selectTip(0.15)}>
              SELECT
            </button>
          </li>
          <li>
            18% - $
            <span id="eighteen-percent">
              {displayDollarAmount(calculateTip(total, 0.18))}
            </span>
            <button className="button-18" onClick={() => selectTip(0.18)}>
              SELECT
            </button>
          </li>
          <li>
            20% - $
            <span id="twenty-percent">
              {displayDollarAmount(calculateTip(total, 0.2))}
            </span>
            <button className="button-20" onClick={() => selectTip(0.2)}>
              SELECT
            </button>
          </li>
        </ul>
      </ul>
      <h2>
        total pre-tip: $<span id="total">{total ? total : 0}</span>
      </h2>
      <h2>
        tip: $<span id="total">1.00</span>
      </h2>
      <h2>
        total: $<span id="total">{grandTotal}</span>
      </h2>
    </main>
  )
}

export default TipCalculator
