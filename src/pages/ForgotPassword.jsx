import React from 'react'

//imgs
import amico from '../assets/img/amico.png'

const ForgotPassword = () => {
  return (
<div className="forgot-password-container">
  <div className="forgot-password-form">
    <h2>Forgot your password?</h2>
    <form action="" method="post">
      <label for="email">Email address</label>
      <input type="email" id="email" name="email" placeholder='example@gmail.com' required />
      <button type="submit" name="reset-password-submit">Reset password</button>
    </form>
  </div>
  <div className="forgot-password-image">
    <img src={amico} alt="amico" />
  </div>
</div>

  )
}

export default ForgotPassword