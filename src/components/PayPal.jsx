import React from 'react'

const PayPal = () => {
  return (
    <>
    <form action="">
        <label htmlFor="">
            PayPal hesabını yaz
            <input type="text" placeholder='info@smart.com'/>
        </label>
        <label htmlFor="">
          <input className="submit" type="Submit" value="PayPal hesabına qoşul" />
        </label>
    </form>
  </>
  )
}

export default PayPal