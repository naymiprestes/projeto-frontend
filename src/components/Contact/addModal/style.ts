import styled from "styled-components";

export const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 96vw;
  height: 100vh;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  gap: 16px;

  background-color: #212529c7;
  border-radius: 4px;

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

    gap: 16px;

    background-color: #121214;

    border-radius: 4px;
    box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
    /* transition: width 1s, height 1s; */
  }

  .headeModal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 4px 10px;
    gap: 8px;
    width: 100%;

    background: #111c3d;
    border-radius: 4px 4px 0px 0px;
  }

  .addContact {
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 18px;
  }

  .buttonModal {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    background: #111c3d;
    border: none;
    color: #868e96;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
  padding: 0px 10px 24px 10px;
  border-radius: 4px;

  input {
    box-sizing: border-box;

    padding: 0px 12px;
    width: 250px;
    height: 36px;

    border: none;
    border-radius: 4px;

    font-size: 0.8rem;
    line-height: 22px;
  }

  label {
    font-size: 0.7rem;
    line-height: 0px;
    margin-bottom: 10px;
  }

  p {
    font-weight: 600;
    font-size: 0.6rem;

    margin-bottom: 26px;
    line-height: 0px;
    color: #b42529;
  }

  .cadastrarContact {
    box-sizing: border-box;

    width: 250px;
    height: 38px;

    border-radius: 4px;

    font-weight: 500;
    font-size: 0.8rem;
    line-height: 22px;
  }
`;
