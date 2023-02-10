import { useContext } from "react";
import { ContactContext } from "../../../context/ContactsContext";
import { DivButton, DivModal } from "./style";

const ListModalContact = () => {
  const { setListModalContacts, idContact } = useContext(ContactContext);
  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="listContact">Informações Contato</h2>
          <button
            className="buttonModal"
            onClick={() => {
              setListModalContacts(false);
            }}
          >
            X
          </button>
        </div>
        <DivButton>
          <p>
            <strong>Nome: </strong> {idContact?.name}{" "}
          </p>
          <p>
            <strong>Email: </strong> {idContact?.email}{" "}
          </p>
          <p>
            <strong>Number: </strong> {idContact?.number}{" "}
          </p>
        </DivButton>
      </div>
    </DivModal>
  );
};
export default ListModalContact;
