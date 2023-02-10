import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { DivModal, Form } from "./style";

const DeleteModalUser = () => {
  const { setDeleteModalUser } = useContext(UserContext);
  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="editTech"> Excluir Usuário</h2>
          <button
            className="buttonModal"
            onClick={() => setDeleteModalUser(false)}
          >
            X{" "}
          </button>
        </div>
        <Form>
          <h2>Excluir, sem nome? </h2>
          <div className="divModal">
            <button className="editTech" type="submit">
              Sim
            </button>
            <button className="deleteTech">Nao</button>
          </div>
        </Form>
      </div>
    </DivModal>
  );
};
export default DeleteModalUser;
