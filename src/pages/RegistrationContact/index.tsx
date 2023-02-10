import { Link } from "react-router-dom";
import { Div, Form } from "./style";

const RegistrationContact = () => {
  return (
    <Div>
      <Form>
        <h1>Cadastro de Contato</h1>
        <label htmlFor="name">Nome Completo:</label>
        <input type="text" id="name" placeholder="Digite seu nome aqui" />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" placeholder="exemplo@email.com" />

        <label htmlFor="tel">Telefone:</label>
        <input type="text" id="tel" placeholder="(xx)xxxx-xxxx" />

        <button>Cadastrar</button>
        <Link to="/login" className="back">
          Voltar
        </Link>
      </Form>
      <div className="divs">
        <img src="./contact.svg" alt="create contact" className="create-user" />
      </div>
    </Div>
  );
};

export default RegistrationContact;
