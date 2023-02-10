import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Div, Form } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

interface IRegister {
  name: string;
  email: string;
  password: string;
  verPassword: string;
  number: string;
}

const RegistrationUser = () => {
  const { handleRegister } = useContext(UserContext);

  const formRegister = yup.object().shape({
    name: yup.string().required("campo obrigatório"),
    email: yup
      .string()
      .email("digite um email válido")
      .required("campo obrigatório"),
    password: yup
      .string()
      .required("campo obrigatorio")
      .min(4, "A senha deve conter pelo menos 8 caracteres")
      // .matches(
      //   new RegExp("^(?=.*[a-za-z])(?=.*[0-9])(?=.*[!@#$%^&*])"),
      //   "A senha deve conter letras, números e simbolos"
      // )
      .required("senha obrigatória"),
    verPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .equals([yup.ref("password"), null], "A senha não corresponde"),
    number: yup.string().required("campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({ resolver: yupResolver(formRegister) });

  return (
    <>
      <Div>
        <div className="scroll">
          <Form onSubmit={handleSubmit(handleRegister)}>
            <h2>Cadastro de Usuário</h2>
            <label htmlFor="name">Nome Completo:</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome aqui"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="exemplo@email.com"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>

            <label htmlFor="verPassword">Confirmar senha</label>
            <input
              type="password"
              id="verPassword"
              placeholder="********"
              {...register("verPassword")}
            />
            <p>{errors.verPassword?.message}</p>

            <label htmlFor="number">Telefone:</label>
            <input
              type="tel"
              id="number"
              placeholder="(xx)xxxx-xxxx"
              {...register("number")}
            />
            <p>{errors.number?.message}</p>

            <button>Cadastrar</button>
            <Link to="/login" className="back">
              Voltar
            </Link>
          </Form>
        </div>
        <div className="divs">
          <img
            src="./contact.svg"
            alt="create contact"
            className="create-user"
          />
        </div>
      </Div>
    </>
  );
};

export default RegistrationUser;
