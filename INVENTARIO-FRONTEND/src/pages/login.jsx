import './styles_pages.css'
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const {login} = useContext(AuthContext)

    const [form, setForm] = useState({
      email: '',
      password: ''
    })

    const {email, password} = form

    const handleOnChange = ({target}) => {
      const {name, value} = target
      setForm({
        ...form,
        [name]: value
      })
    }

    const handleOnSubmit = (e) => {
      e.preventDefault()
      login(form)
      setForm({
        email: '',
        password: ''
      })
    }

    return (
      <div className="login-containers">
        <div className="image-login">imagen</div>
        <div className="form-login">
          <form className="form" onSubmit={handleOnSubmit}>
            <div className="input-class">
              <label htmlFor="email">Correo Electronico</label>
              <input
                type="email"
                value={email}
                onChange={handleOnChange}
                name="email"
                className=""
                autoComplete='email'
                autoFocus
              />
            </div>
            <div className="input-class">
              <label htmlFor="email">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={handleOnChange}
                name="password"
                autoComplete='current-password'
              />
            </div>
            <div className='place-button'>
              <button type="submit">Iniciar Sesion</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login