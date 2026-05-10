import './Login.css'
import { useState } from 'react';

function Login({ onClose, onLogin }) {

    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    //Funzione 
    const accedi = async () => {

        console.log("ACCEDI()")

        setError('');
        setLoading(true);
    
        try {

            const response = await fetch('/Users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, passwd }),
            });
        
            const data = await response.json();
        
            if (!response.ok) {
                setError(data.error);
                return;
            }
        
            localStorage.setItem('token', data.token);
            onLogin();
            onClose();
    
        } catch (err) {
            setError("errore di connessiona al server");
        } finally {
            setLoading(false);
        }
    };


    return (
    <div className='login_overlay' onClick={onClose}>
        <div className='login_box' onClick={e => e.stopPropagation()}>
            <button className='login_x' onClick={onClose}>✕</button>
            <h2>Accedi</h2>

            <form onSubmit={e => e.preventDefault()}>

            <label>Email</label>
            <input type="email" placeholder="esempio@email.com" value={email} onChange={e => setEmail(e.target.value)}/>

            <label>Password</label>
            <input type="password" placeholder="••••••••" value={passwd} onChange={e => setPasswd(e.target.value)}/>

            {error && <p className='login_error'>{error}</p>}

            <button type="submit" onClick={accedi} disabled={loading}>{loading ? 'Caricamento...' : 'Accedi'}</button>
            </form>
        </div>
    </div>
    )
}

export default Login;