import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface IContactProps {
  contacts: IContacts[] | [];
  setContacts: (contacts: IContacts[] | []) => void;

  id: string;
  setId: (id: string) => void;

  addModalContacts: boolean;
  setAddModalContacts: (addModalContacts: boolean) => void;

  editModalContacts: boolean;
  setEditModalContacts: (editModalContacts: boolean) => void;

  deleteModalContacts: boolean;
  setDeleteModalContacts: (deleteModalContacts: boolean) => void;

  createContacts: (data: ICreateContact) => void;

  editContacts: (data: IEditContact, id: string) => void;
}

interface IContacts {
  id: string;
  name: string;
  email: string;
  number: string;
}

interface ICreateContact {
  name: string;
  email: string;
  number: string;
}

interface IEditContact {
  name?: string;
  email?: string;
  number?: string;
}

export interface IProviderChildren {
  children: ReactNode;
}

export const ContactContext = createContext<IContactProps>({} as IContactProps);

const ContactsProvider = ({ children }: IProviderChildren) => {
  const [contacts, setContacts] = useState<IContacts[] | []>([]);
  const [id, setId] = useState("");

  const [addModalContacts, setAddModalContacts] = useState<boolean>(false);
  const [editModalContacts, setEditModalContacts] = useState<boolean>(false);
  const [deleteModalContacts, setDeleteModalContacts] =
    useState<boolean>(false);

  useEffect(() => {
    const token = window.localStorage.getItem("@contacts: userToken");
    api
      .get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setContacts(response.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("error");
      });
  }, [contacts]);

  const createContacts = async (data: ICreateContact) => {
    const token = window.localStorage.getItem("@contacts: userToken");
    await api
      .post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setContacts([...contacts, response.data]);
        setAddModalContacts(false);
        toast.success("contato criado com sucesso");
      })
      .catch((err) => {
        toast.error("Erro ao criar contato");
      });
  };

  const editContacts = async (data: IEditContact, id: string) => {
    const token = window.localStorage.getItem("@contacts: userToken");
    await api
      .patch(`/contacts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("contato atualizado");
      })
      .catch((err) => {
        toast.error("erro ao atualizar contato");
      });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,

        editModalContacts,
        setEditModalContacts,
        deleteModalContacts,
        setDeleteModalContacts,
        addModalContacts,
        setAddModalContacts,
        createContacts,
        editContacts,
        id,
        setId,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactsProvider;
