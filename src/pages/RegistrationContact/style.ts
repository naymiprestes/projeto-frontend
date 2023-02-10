import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border-radius: 8px;
  background-color: #121214;
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);

  .create-login {
    display: none;
  }

  @media (min-width: 481px) {
    width: 70vw;
    height: 60vh;
  }

  @media (min-width: 769px) {
    width: 70vw;
    height: 60vh;
  }

  @media (min-width: 1025px) {
    width: 86vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .divs {
      display: flex;
      justify-content: flex-end;
    }

    .create-user {
      display: flex;
      width: 380px;
    }
  }

  @media (min-width: 1201px) {
    width: 60vw;
    height: 76vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;

  label {
    text-align: left;
    font-size: 0.8rem;
  }

  input {
    border: 1px solid #dde6e9;
    border-radius: 4px;
    box-sizing: border-box;
    width: 220px;
    height: 30px;
    padding-left: 10px;
    font-size: 0.8rem;
  }

  p {
    color: #ac0808;
    font-weight: 600;
    font-size: 0.6rem;
    margin-bottom: 10px;
    text-align: left;
  }

  button {
    width: 220px;
    height: 30px;
    margin-bottom: 10px;
  }

  .back {
    background-color: #596a9c;
    cursor: pointer;
    color: var(--primary-3-color);
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 4px;
    text-decoration: none;
    width: 220px;
    height: 30px;
    padding: 6px;
  }

  @media (min-width: 481px) {
    input,
    button,
    .back {
      width: 240px;
      height: 40px;
    }

    .back {
      padding: 10px;
    }
  }

  @media (min-width: 769px) {
    h2 {
      font-size: 3rem;
      margin-bottom: 40px;
    }

    label {
      font-size: 1.5rem;
    }

    input,
    button,
    .back {
      width: 400px;
      height: 54px;
      font-size: 1.2rem;
      border-radius: 8px;
    }
  }

  @media (min-width: 1025px) {
    gap: 10px;

    label {
      font-size: 1.8rem;
    }

    input,
    button,
    .back {
      width: 340px;
      height: 54px;
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1201px) {
    h2 {
      font-size: 2rem;
      margin: 10px;
    }

    label {
      font-size: 0.8rem;
    }

    input,
    button,
    .back {
      width: 220px;
      height: 34px;
      font-size: 0.8rem;
    }
  }
`;
