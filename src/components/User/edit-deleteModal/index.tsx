import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { DivModal, Form } from "./style";

const EditDeleteModalUser = () => {
  const { setEditModalUser } = useContext(UserContext);
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
        <Form>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="number">Telefone</label>
          <input type="text" id="number" />

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
export default EditDeleteModalUser;
