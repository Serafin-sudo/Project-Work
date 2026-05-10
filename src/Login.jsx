import './Login.css'

function Login({ onClose }) {
  return (
    <div className='login_overlay' onClick={onClose}>
        <div className='login_box' onClick={e => e.stopPropagation()}>
            <button className='login_x' onClick={onClose}>✕</button>
            <h2>Accedi</h2>

            <form onSubmit={e => e.preventDefault()}>

            <label>Email</label>
            <input type="input_email" placeholder="esempio@email.com" />

            <label>Password</label>
            <input type="input_password" placeholder="••••••••" />

            <button type="button_accedi">Accedi</button>
            </form>
        </div>
    </div>
  )
}

export default Login;