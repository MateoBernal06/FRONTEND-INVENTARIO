import './styles_pages.css'
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Button from "react-bootstrap/Button";
import ImportacionesLogin from '/ImportacionesLogin.webp'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaUser } from "react-icons/fa";
import { TbLockFilled } from "react-icons/tb";

export const Login = () => {

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
        <div>
          <img className="image-login" src={ImportacionesLogin} alt="" />
        </div>
        <div className="form-login">
          <Form className="form" onSubmit={handleOnSubmit}>
            <h2 className="text-password">INICIO DE SESION</h2>
            <img src="" alt="" />
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FaUser size={15} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Correo Electrónico"
                aria-label="Correo Electrónico"
                aria-describedby="basic-addon1"
                type="email"
                value={email}
                onChange={handleOnChange}
                name="email"
                className="input-form"
                autoComplete="email"
                autoFocus
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <TbLockFilled size={15} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Contraseña"
                aria-label="Contraseña"
                aria-describedby="basic-addon1"
                type="password"
                value={password}
                onChange={handleOnChange}
                name="password"
                className="input-form"
                autoComplete="current-password"
              />
            </InputGroup>
            <div className="place-button">
              <Button className="button-sesion" type="submit">
                Ingresar
              </Button>
            </div>
            <a href="" className="text-password">
              <p>Restablecer Contraseña</p>
            </a>
          </Form>
        </div>
      </div>
    );
}

