import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivModal, Form } from "./style";
import { useContext } from "react";
import { ContactContext } from "../../../context/ContactsContext";

interface IAddModal {
  name: string;
  email: string;
  number: string;
}

const AddModalContact = () => {
  const { setAddModalContacts, createContacts } = useContext(ContactContext);

  const formModal = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("email inválido").required("email obrigatório"),
    number: yup.string().required("telefone obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddModal>({
    resolver: yupResolver(formModal),
  });

  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="addContact">Adicionar Contato</h2>
          <button
            className="buttonModal"
            onClick={() => setAddModalContacts(false)}
          >
            X
          </button>
        </div>
        <Form onSubmit={handleSubmit(createContacts)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label htmlFor="number">Telefone</label>
          <input
            type="text"
            id="number"
            placeholder="(xx)xxxxx-xxxx"
            {...register("number")}
          />
          <p>{errors.name?.message}</p>
          <button className="cadastrarContact" type="submit">
            Cadastrar Contato
          </button>
        </Form>
      </div>
    </DivModal>
  );
};
export default AddModalContact;
