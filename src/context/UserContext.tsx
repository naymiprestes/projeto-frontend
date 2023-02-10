import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface IUserProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;

  editModalUser: boolean;
  setEditModalUser: (editModalUser: boolean) => void;

  listModalUser: boolean;
  setListModalUser: (listModalUser: boolean) => void;

  deleteModalUser: boolean;
  setDeleteModalUser: (deleteModalUser: boolean) => void;

  handleRegister: (data: IHandleRegister) => void;
  handleLogin: (data: IHandleLogin) => void;
  handleEdit: (data: IEditForm) => void;
  handleDelete: () => void;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  number: string;
  password: string;
  isAdm?: boolean;
}

export interface IHandleLogin {
  email: string;
  password: string;
}

export interface IHandleRegister {
  name: string;
  email: string;
  number: string;
  password: string;
  isAdm?: boolean;
}

export interface IHandleEdit {
  id?: string;
  name?: string;
  email?: string;
  number?: string;
  password?: string;
}

export interface IEditForm {
  name?: string;
  email?: string;
  number?: string;
  password?: string;
}

export interface IProviderChildren {
  children: ReactNode;
}

export const UserContext = createContext<IUserProps>({} as IUserProps);

const UserProvider = ({ children }: IProviderChildren) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [editModalUser, setEditModalUser] = useState<boolean>(false);
  const [listModalUser, setListModalUser] = useState<boolean>(false);
  const [deleteModalUser, setDeleteModalUser] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("@contacts: userToken");
    const id = window.localStorage.getItem("@contacts: userId");

    const autologin = () => {
      api
        .get(`/user`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((err) => {
          toast.error("Usuário desconectado");
        });
    };
    if (token) {
      autologin();
    }
  }, []);

  const handleRegister = (data: IHandleRegister) => {
    api
      .post("/user", data)
      .then((response) => {
        toast.success("usuário cadastrado com sucesso!");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("erro ao cadastrar usuário");
      });
  };

  const handleLogin = (data: IHandleLogin) => {
    api
      .post("/login", data)

      .then((response) => {
        window.localStorage.clear();

        window.localStorage.setItem(
          "@contacts: userToken",
          response.data.token
        );
        window.localStorage.setItem("@contacts: userId", response.data.id);

        toast.success("login realizado com sucesso!");
        setTimeout(() => navigate("/dashboard", { replace: true }), 4000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("email ou senha inválidos");
      });
  };

  const handleEdit = (data: IEditForm) => {
    const token = window.localStorage.getItem("@contacts: userToken");
    const id = window.localStorage.getItem("@contacts: userId");
    console.log("data", data);
    api
      .patch(`/user/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setEditModalUser(false);
        toast.success("Usuário atualizado com sucesso");
      })
      .catch((err) => {
        toast.error("erro ao atualizar usuário");
      });
  };

  const handleDelete = async () => {
    const token = window.localStorage.getItem("@contacts: userToken");
    console.log("cheguei");
    await api
      .delete(`/user/${user?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDeleteModalUser(false);
        window.localStorage.removeItem("@contacts: userToken");
        window.localStorage.removeItem("@contacts: userId");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        toast.error("erro ao excluir contato");
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleRegister,
        handleLogin,
        editModalUser,
        listModalUser,
        setListModalUser,
        setEditModalUser,
        deleteModalUser,
        setDeleteModalUser,
        handleEdit,
        handleDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
