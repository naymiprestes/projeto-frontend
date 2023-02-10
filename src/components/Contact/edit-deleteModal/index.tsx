import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ContactContext } from "../../../context/ContactsContext";
import { DivModal, Form } from "./style";

interface IEditContact {
  name: string;
  email: string;
  number: string;
}

const EditDeleteModalContact = () => {
  const { setEditModalContacts, editContacts, id } = useContext(ContactContext);
  console.log("id", id);

  const formEdit = yup.object().shape({
    name: yup.string().optional(),
    email: yup.string().email("email inválido").optional(),
    number: yup.string().optional(),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IEditContact>({
    resolver: yupResolver(formEdit),
  });

  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="editTech">Contato</h2>
          <button
            className="buttonModal"
            onClick={() => setEditModalContacts(false)}
          >
            X
          </button>
        </div>
        <Form onSubmit={() => editContacts}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />

          <label htmlFor="number">Telefone</label>
          <input type="text" id="number" {...register("number")} />

          <div className="divModal">
            <button className="editTech" type="submit">
              Salvar alterações
            </button>
            <button className="deleteTech">Excluir</button>
          </div>
        </Form>
      </div>
    </DivModal>
  );
};
export default EditDeleteModalContact;
