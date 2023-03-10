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

    gap: 16px;

    background-color: #121214;
    box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }

  .headeModal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 4px 10px;

    width: 100%;

    background: #111c3d;
    border-radius: 4px 4px 0px 0px;
  }

  .deleteContact {
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

  .divModal {
    display: flex;
    flex-direction: row;

    gap: 24px;
    margin-top: 16px;

    font-weight: 500;
    line-height: 26px;
  }

  .divButton {
    display: flex;
    flex-direction: row;
  }

  .deleteButtonContact {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-right: 10px;

    width: 94px;
    height: 38px;

    border: none;
    border-radius: 4px;
    font-size: 0.6rem;
  }
  h2 {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const DivButton = styled.div`
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
  padding: 0px 10px 24px 10px;

  .editTech {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 94px;
    height: 38px;

    border: none;
    border-radius: 4px;
    font-size: 0.6rem;
  }
`;
