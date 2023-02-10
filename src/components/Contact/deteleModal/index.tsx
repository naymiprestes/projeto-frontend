import { useContext } from "react";
import { ContactContext } from "../../../context/ContactsContext";
import { DivModal, Form } from "./style";

const DeleteModalContact = () => {
  const { setDeleteModalContacts } = useContext(ContactContext);
  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="editTech"> Excluir Contato</h2>
          <button
            className="buttonModal"
            onClick={() => setDeleteModalContacts(false)}
          >
            X
          </button>
        </div>
        <Form>
          <h2>Excluir, sem nome? </h2>
          <div className="divModal">
            <button className="editTech" type="submit">
              Sim
            </button>
            <button className="deleteTech">Não</button>
          </div>
        </Form>
      </div>
    </DivModal>
  );
};
export default DeleteModalContact;
