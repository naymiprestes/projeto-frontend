import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface IContactProps {
  contacts: IContacts[] | [];
  setContacts: (contacts: IContacts[] | []) => void;

  idContact: IContacts | null;
  setIdContact: (idContact: IContacts | null) => void;

  addModalContacts: boolean;
  setAddModalContacts: (addModalContacts: boolean) => void;

  editModalContacts: boolean;
  setEditModalContacts: (editModalContacts: boolean) => void;

  listModalContacts: boolean;
  setListModalContacts: (listModalContacts: boolean) => void;

  deleteModalContacts: boolean;
  setDeleteModalContacts: (deleteModalContacts: boolean) => void;

  createContacts: (data: ICreateContact) => void;

  editContacts: (data: IEditContact) => void;

  deleteContacts: () => void;
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
  const [idContact, setIdContact] = useState<IContacts | null>(null);

  const [addModalContacts, setAddModalContacts] = useState<boolean>(false);
  const [editModalContacts, setEditModalContacts] = useState<boolean>(false);
  const [listModalContacts, setListModalContacts] = useState<boolean>(false);
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
        console.error(err);
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

  const editContacts = async (data: IEditContact) => {
    const token = window.localStorage.getItem("@contacts: userToken");
    await api
      .patch(`/contacts/${idContact?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setEditModalContacts(false);
        toast.success("contato atualizado");
      })
      .catch((err) => {
        toast.error("erro ao atualizar contato");
      });
  };

  const deleteContacts = async () => {
    const token = window.localStorage.getItem("@contacts: userToken");
    await api
      .delete(`/contacts/${idContact?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDeleteModalContacts(false);
      })
      .catch((err) => {
        toast.error("erro ao excluir contato");
      });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        editModalContacts,
        setEditModalContacts,
        listModalContacts,
        setListModalContacts,
        deleteModalContacts,
        setDeleteModalContacts,
        addModalContacts,
        setAddModalContacts,
        createContacts,
        editContacts,
        idContact,
        setIdContact,
        deleteContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactsProvider;
