import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Div, Form } from "./style";

interface ILogin {
  email: string;
  password: string;
}

const formLogin = yup.object({
  email: yup.string().email("e-mail inválido").required("e-mail obrigatório"),
  password: yup
    .string()
    .min(4, "no minimo 8 caracteres")
    .required("senha obrigatória"),
});

const Login = () => {
  const { handleLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(formLogin),
  });

  return (
    <Div>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="exemplo@email.com"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Senha</label>
        <input
          type="text"
          id="password"
          placeholder="**********"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <button className="buttonLogin" type="submit">
          Entrar
        </button>

        <span className="spanLogin">Ainda não possui uma conta?</span>

        <Link to="/user" className="back">
          Cadastre-se
        </Link>
      </Form>
      <div className="divs">
        <img
          src="./loginMobile.svg"
          alt="create contact"
          className="create-user"
        />
      </div>
    </Div>
  );
};

export default Login;
