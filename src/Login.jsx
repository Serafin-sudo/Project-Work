import './Login.css'
import './App.css'
import { useState } from 'react';

function Login({ onClose, onLogin }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [error, setError] = useState('');
    //Se sta caricando qualcosa
    const [loading, setLoading] = useState(false);
    //Se ci si sta registrando invece che accedendo
    const [registering, setregistering] = useState(false);

    //Funzione accesso
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
    //Funzione registrazione
    const registrati = async () => {

        console.log("REGISTRATI()")

        setError('');
        setLoading(true);
    
        try {

            const response = await fetch('/Users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, passwd, admin: 0 }),
            });
 
            const data = await response.json();
 
            if (!response.ok) {
                setError(data.error);
                return;
            }

            setregistering(false);
            alert('Registrazione completata! Ora puoi accedere con le credenziali registrate.');
    
        } catch (err) {
            setError("errore di connessiona al server");
        } finally {
            setLoading(false);
        }
    };


    return (
    <div className='overlay' onClick={onClose}>
        
        <div className='overlay_box' onClick={e => e.stopPropagation()}>
            
            <button className='overlay_x' onClick={onClose}>✕</button>

            <h2>{registering ? 'Registrati' : 'Accedi'}</h2>

            {registering && (
            <>
                <label>Nome</label>
                <input type="text" placeholder="Mario Super" value={name} onChange={e => setName(e.target.value)}/>
            </>
            )}

            <label>Email</label>
            <input type="email" placeholder="esempio@email.com" value={email} onChange={e => setEmail(e.target.value)}/>

            <label>Password</label>
            <input type="password" placeholder="••••••••" value={passwd} onChange={e => setPasswd(e.target.value)}/>

            {error && <p className='login_error'>{error}</p>}
            <div className='bottoniAccediRegistrati'>
                {!registering
                    ? <button onClick={accedi} disabled={loading}>Conferma</button>
                    : <button onClick={registrati} disabled={loading}>Conferma</button>
                }
                <button onClick={() => setregistering(!registering)}>
                    {registering ? 'Accedi invece' : 'Registrati invece'}
                </button>
            </div>
        </div>
    </div>
    )
}

export default Login;