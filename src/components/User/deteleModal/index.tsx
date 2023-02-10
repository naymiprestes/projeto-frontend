import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { DivButton, DivModal } from "./style";

const DeleteModalUser = () => {
  const { setDeleteModalUser, user, handleDelete } = useContext(UserContext);
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
        <DivButton>
          <h2>Excluir, {user?.name}? </h2>
          <div className="divModal">
            <button className="editTech" onClick={handleDelete}>
              Sim
            </button>
            <button className="deleteTech">Não</button>
          </div>
        </DivButton>
      </div>
    </DivModal>
  );
};
export default DeleteModalUser;
