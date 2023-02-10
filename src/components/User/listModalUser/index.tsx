import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { DivButton, DivModal } from "./style";

const ListModalUser = () => {
  const { user, setListModalUser } = useContext(UserContext);
  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="listUser">Informações Usuário</h2>
          <button
            className="buttonModal"
            onClick={() => {
              setListModalUser(false);
            }}
          >
            X
          </button>
        </div>
        <DivButton>
          <p>
            <strong>Nome: </strong> {user?.name}{" "}
          </p>
          <p>
            <strong>Email: </strong> {user?.email}{" "}
          </p>
          <p>
            <strong>Number: </strong> {user?.number}{" "}
          </p>
        </DivButton>
      </div>
    </DivModal>
  );
};
export default ListModalUser;
