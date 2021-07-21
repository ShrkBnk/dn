import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: auto;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  position: relative;
  border-radius: 0.375rem;

  box-shadow: rgb(0 0 0 / 7%) 0px 0px 2px, rgb(0 0 0 / 5%) 0px 3px 6px;

  padding: 1rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  height: 2rem;

  input {
    position: relative;
    width: 65%;
    outline: none;
  }

  button {
    cursor: pointer;
    width: 30%;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 2rem;
  margin-bottom: 0.5rem;

  select {
    cursor: pointer;
    width: 65%;
  }

  button {
    cursor: pointer;
    width: 30%;
  }
`;

export const MessageContainer = styled.div`
  position: fixed;

  bottom: 2rem;
  left: 2rem;

  padding: 2rem;

  box-shadow: 0 8px 28px rgb(0 0 0 / 28%);
  border-radius: 0.375rem;
  color: #000;
`;
