import "./styles_pages.css";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import ImportacionesLogin from "/ImportacionesLogin.webp";
import Logo from "/Logo.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdEmail } from "react-icons/md";
import { TbLockFilled } from "react-icons/tb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const session = await login(form);

    if (session.ok) {
      setForm({
        email: "",
        password: "",
      });
    } else {
      toast.error(session.msg, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        pauseOnHover: false,
      });
    }
  };

  return (
    <div className="login-containers">
      <div>
        <img className="image-login" src={ImportacionesLogin} alt="" />
      </div>
      <div className="form-login">
        <div className="place-logo">
          <img className="logo-importadora" src={Logo} alt="Logo" />
        </div>
        <Form className="form" onSubmit={handleOnSubmit}>
          <p className="text-welcome">Bienvenido nuevamente</p>
          <p className="text-login">Ingresa tus credenciales para continuar</p>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <MdEmail size={15} />
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
          <a href="" className="text-reset-password">
            <p>Restablecer Contraseña</p>
          </a>
        </Form>
      </div>
    </div>
  );
};
