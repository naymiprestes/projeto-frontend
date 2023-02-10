import { useContext } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineContacts,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AddModalContact from "../../components/Contact/addModal";
import DeleteModalContact from "../../components/Contact/deteleModal";
import EditDeleteModalContact from "../../components/Contact/edit-deleteModal";
import ListModalContact from "../../components/Contact/listModalContact";
import DeleteModalUser from "../../components/User/deteleModal";
import EditDeleteModalUser from "../../components/User/edit-deleteModal";
import ListModalUser from "../../components/User/listModalUser";

import { ContactContext } from "../../context/ContactsContext";

import { UserContext } from "../../context/UserContext";
import { ButtonUser, ContactDiv, Container, Ul } from "./style";

const DashboardUser = () => {
  const {
    user,
    editModalUser,
    listModalUser,
    deleteModalUser,
    setEditModalUser,
    setListModalUser,
    setDeleteModalUser,
  } = useContext(UserContext);

  const {
    contacts,
    addModalContacts,
    editModalContacts,
    deleteModalContacts,
    listModalContacts,
    setAddModalContacts,
    setEditModalContacts,
    setDeleteModalContacts,
    setListModalContacts,
    setIdContact,
  } = useContext(ContactContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("@contacts: userToken");
    window.localStorage.removeItem("@contacts: userId");
    navigate("/login", { replace: true });
  };

  return (
    <Container>
      <ButtonUser>
        <button
          className="edit"
          onClick={() => {
            setEditModalUser(true);
          }}
        >
          Editar Usuário
        </button>
        <button className="delete" onClick={() => setDeleteModalUser(true)}>
          Excluir Usuário
        </button>
        <button className="list" onClick={() => setListModalUser(true)}>
          Listar Usuário
        </button>
      </ButtonUser>
      <div className="div">
        <div className="buttonExit">
          <h2>Olá, {user?.name}</h2>
          <button className="sair" onClick={handleLogout}>
            Sair
          </button>
        </div>
        <ContactDiv>
          <h3>Contatos</h3>
          <button
            className="addContact"
            onClick={() => setAddModalContacts(true)}
          >
            +
          </button>
        </ContactDiv>
        {contacts.length !== 0 ? (
          <Ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <p className="name"> {contact.name}</p>
                <div className="icons">
                  {" "}
                  <button
                    onClick={() => {
                      setEditModalContacts(true);
                      setIdContact({
                        id: contact.id,
                        name: contact.name,
                        email: contact.email,
                        number: contact.number,
                      });
                    }}
                  >
                    <AiOutlineEdit className="editContactS" />
                  </button>
                  <button
                    onClick={() => {
                      setListModalContacts(true);
                      setIdContact({
                        id: contact.id,
                        name: contact.name,
                        email: contact.email,
                        number: contact.number,
                      });
                    }}
                  >
                    <AiOutlineContacts className="listContacts" />
                  </button>
                  <button
                    onClick={() => {
                      setDeleteModalContacts(true);
                      setIdContact({
                        id: contact.id,
                        name: contact.name,
                        email: contact.email,
                        number: contact.number,
                      });
                    }}
                  >
                    <AiOutlineDelete className="deleteContacts" />
                  </button>
                </div>
              </li>
            ))}
          </Ul>
        ) : (
          <span>Não há Contatos Cadastrados</span>
        )}
        {editModalUser && <EditDeleteModalUser />}
        {listModalUser && <ListModalUser />}
        {deleteModalUser && <DeleteModalUser />}

        {listModalContacts && <ListModalContact />}
        {addModalContacts && <AddModalContact />}
        {editModalContacts && <EditDeleteModalContact />}
        {deleteModalContacts && <DeleteModalContact />}
      </div>
    </Container>
  );
};
export default DashboardUser;
