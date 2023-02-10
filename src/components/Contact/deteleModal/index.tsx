import { useContext } from "react";
import { ContactContext } from "../../../context/ContactsContext";
import { DivButton, DivModal } from "./style";

const DeleteModalContact = () => {
  const { setDeleteModalContacts, deleteContacts, idContact } =
    useContext(ContactContext);
  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="deleteContact"> Excluir Contato</h2>
          <button
            className="buttonModal"
            onClick={() => {
              setDeleteModalContacts(false);
            }}
          >
            X
          </button>
        </div>
        <DivButton>
          <h2>Excluir, {idContact?.name}? </h2>
          <div className="divModal">
            <button className="editTech" type="submit" onClick={deleteContacts}>
              Sim
            </button>
            <button
              className="deleteButtonContact"
              onClick={() => setDeleteModalContacts(false)}
            >
              Não
            </button>
          </div>
        </DivButton>
      </div>
    </DivModal>
  );
};
export default DeleteModalContact;
