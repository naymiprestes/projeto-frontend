import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface IUserProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;

  editModalUser: boolean;
  setEditModalUser: (editModalUser: boolean) => void;

  deleteModalUser: boolean;
  setDeleteModalUser: (deleteModalUser: boolean) => void;

  handleRegister: (data: IHandleRegister) => void;
  handleLogin: (data: IHandleLogin) => void;
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

export interface IProviderChildren {
  children: ReactNode;
}

export const UserContext = createContext<IUserProps>({} as IUserProps);

const UserProvider = ({ children }: IProviderChildren) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [editModalUser, setEditModalUser] = useState<boolean>(false);
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
          console.log("66", response.data);
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
    console.log(data);
    api
      .post("/user", data)
      .then((response) => {
        console.log(response.data);
        toast.success("usuário cadastrado com sucesso!");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("erro ao cadastrar usuário");
      });
  };

  const handleLogin = (data: IHandleLogin) => {
    console.log(data);
    api
      .post("/login", data)

      .then((response) => {
        window.localStorage.clear();

        window.localStorage.setItem(
          "@contacts: userToken",
          response.data.token
        );
        window.localStorage.setItem("@contacts: userId", response.data.id);

        // setUser(response.data);
        // console.log("login response", response.data);
        toast.success("login realizado com sucesso!");
        setTimeout(() => navigate("/dashboard", { replace: true }), 4000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("email ou senha inválidos");
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
        setEditModalUser,
        deleteModalUser,
        setDeleteModalUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
