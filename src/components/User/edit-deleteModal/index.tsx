import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { DivModal, Form } from "./style";

interface IEditContact {
  name: string;
  email: string;
  number: string;
  password: string;
}

const EditDeleteModalUser = () => {
  const { setEditModalUser, handleEdit, user } = useContext(UserContext);

  const formEdit = yup.object().shape({
    name: yup.string().optional(),
    email: yup.string().email("email inválido").optional(),
    number: yup.string().optional(),
    password: yup.string().optional(),
  });
  const { handleSubmit, register } = useForm<IEditContact>({
    resolver: yupResolver(formEdit),
  });

  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="editTech">Editar Usuário</h2>
          <button
            className="buttonModal"
            onClick={() => setEditModalUser(false)}
          >
            X
          </button>
        </div>
        <Form onSubmit={handleSubmit(handleEdit)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            defaultValue={user?.name}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            defaultValue={user?.email}
          />

          <label htmlFor="number">Telefone</label>
          <input
            type="text"
            id="number"
            {...register("number")}
            defaultValue={user?.number}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="text"
            id="password"
            {...register("password")}
            defaultValue={user?.password}
          />

          <div className="divModal">
            <button className="editTech">Salvar alterações</button>
            <button className="deleteTech">Excluir</button>
          </div>
        </Form>
      </div>
    </DivModal>
  );
};
export default EditDeleteModalUser;
