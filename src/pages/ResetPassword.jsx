import React from 'react'

//imgs
import cuate from '../assets/img/cuate.png'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
<div class="reset-password-container">
  <div className="reset-password-form">
    <h2>Reset your password?</h2>
    <form action="" method="post">
            <div class="otp-input">
              <input type="text" maxlength="1" required />
              <input type="text" maxlength="1" required />
              <input type="text" maxlength="1" required />
              <input type="text" maxlength="1" required />
            </div>
      <div>Don’t receive code ? <Link>Re-send</Link></div>
      <button type="submit" name="reset-password-submit">Reset password</button>
    </form>
  </div>
  <div className="reset-password-image">
    <img src={cuate} alt="amico" />
  </div>
</div>


  )
}

export default ResetPassword