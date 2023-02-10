import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 20px;

  .div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .buttonExit {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h2 {
    font-size: 1rem;
  }

  .sair {
    width: 60px;
    height: 30px;
  }

  @media (min-width: 769px) {
    h2 {
      font-size: 1.5rem;
    }

    .sair {
      width: 60px;
      height: 40px;
      font-size: 1rem;
    }
  }

  @media (min-width: 1201px) {
    width: 80vw;
    display: flex;
    flex-direction: row;

    .div {
      width: 60vw;
    }
  }
`;

export const ButtonUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  .edit,
  .delete,
  .list {
    width: 200px;
    height: 40px;
    cursor: pointer;
  }

  @media (min-width: 481px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    .edit,
    .delete,
    .list {
      width: 120px;
      height: 40px;
      cursor: pointer;
    }
  }

  @media (min-width: 1201px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-right: #fff 1px solid;
  }

  @media (min-width: 1025px) {
    gap: 40px;
    .edit,
    .delete,
    .list {
      width: 160px;
      height: 50px;
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;

  h3 {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .addContact {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 769px) {
    h3 {
      font-size: 1.8rem;
      margin-bottom: 40px;
    }

    .addContact {
      width: 40px;
      height: 30px;
      font-size: 1.6rem;
    }
  }
`;

export const Ul = styled.ul`
  width: 80vw;
  display: flex;
  flex-direction: column;

  gap: 20px;

  li {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    align-items: center;
  }

  p {
    font-size: 0.8rem;
  }

  .icons {
    display: flex;
    gap: 12px;
  }

  @media (min-width: 769px) {
    P {
      font-size: 1.4rem;
    }
  }

  .listContacts,
  .editContactS,
  .deleteContacts {
    height: 30px;
    width: 50px;
  }

  @media (min-width: 1201px) {
    width: 60vw;
  }
`;
