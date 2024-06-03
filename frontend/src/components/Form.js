import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";


const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.name.value = onEdit.name;
      user.email.value = onEdit.email;
      user.phone.value = onEdit.phone;
      user.birth_date.value = onEdit.birth_date;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (onEdit) {
      await axios
        .put("http://localhost:8800/users/" + onEdit.id, {
          name: user.name.value,
          email: user.email.value,
          phone: user.phone.value,
          birth_date: user.birth_date.value,
        })
        
    } 
    else {
      await axios
        .post("http://localhost:8800/users", {
          name: user.name.value,
          email: user.email.value,
          phone: user.phone.value,
          birth_date: user.birth_date.value,
        })
    }

    user.name.value = "";
    user.email.value = "";
    user.phone.value = "";
    user.birth_date.value = "";

    setOnEdit(null);
    getUsers();
  };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
          <Label>Name</Label>
          <Input name="name" />
        </InputArea>
        <InputArea>
          <Label>Email</Label>
          <Input name="email" type="email" />
        </InputArea>
        <InputArea>
          <Label>Phone</Label>
          <Input name="phone" />
        </InputArea>
        <InputArea>
          <Label>Birth Date</Label>
          <Input name="birth_date" type="date" />
        </InputArea>
  
        <Button type="submit">SAVE</Button>
      </FormContainer>
    );
};

export default Form;
