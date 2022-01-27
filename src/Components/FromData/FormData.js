import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import { useForm } from '../../hooks/useFrom';
import { Link } from 'wouter';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  age: '',
  date: '',
  travel: '',
  id: ''
}

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhone = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;

  if (!form.name.trim()) {
    errors.name = "El nombre y apellido es requerido"
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo nombre y apellido debe ser completo"
  }

  if (!form.email.trim()) {
    errors.email = "El email es requerido"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo email no es correcto"
  }

  if (!form.phone.trim()) {
    errors.phone = "El número de telefono es requerido"
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "( 32263546725 ) : Ejemplo correcto número de telefono"
  }
  if (!form.age.trim()) {
    errors.age = "La edad es requerido"
  }
  if (!form.date) {
    errors.date = "La fecha de viaje es requerido"
  }

  if (parseInt(form.age.trim()) < 18) {
    errors.age = "Edad no permitidad, debes ser mayor de edad"
  }
  if (parseInt(form.age.trim()) > 100) {
    errors.age = "Edad no permitidad, debes ser menor a 100 año"
  }
  return errors
}

export default function FormData({ id, name }) {
  registerLocale('es', es)

  const {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
    handleDate
  } = useForm(initialForm, validationsForm)

  useEffect(() => {
    initialForm.id = id
    initialForm.travel = name
  }, [loading])

  return <FormContainer>
    <h4>Hola: bienvenido, sabemos que quieres viajar en un {name}, porfavor diligencia el siguente formulario:</h4>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder='Escribe tu nombre y apellido'
          required
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          required
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <input
          type="text"
          name="phone"
          placeholder="Escribe tu número de teléfono"
          required
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
      <div>
        <input
          type="number"
          name="age"
          required
          placeholder="Escribe tu edad"
          value={form.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <div>
        <label htmlFor="date">Fecha de viaje</label>
        <DatePicker
          selected={form.date}
          locale="es"
          minDate={new Date()}
          name="date"
          onChange={handleDate}
        />
        {errors.date && <p>{errors.date}</p>}
      </div>
      <br />
      <button type="submit">Enviar</button>
      <Link to={`/`}>
        <h6> Inicio</h6>
      </Link>
    </form>
    <LingthBoxContainer loading={loading}>
      <h5>Tu informacion fue enviada con éxito. estaremos en contacto contigo</h5>
    </LingthBoxContainer>
  </FormContainer>;
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  >h4{
    font-size: 16px;
    font-weight: 500;
    max-width: 600px;
    margin: auto;
    padding: 10px 25px;
    color: #3287b7;
    height: 100%;
  }
  >form{
    background-color: #fff;
    width: 80%;
    margin: auto;
    padding: 30px;
    max-width: 600px;
    
    >div{
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      max-height: 100px;
      label{
        font-size: 14px;
        font-weight: 600;
        color: #414042;
        margin-left: 10px;
      }
      input{
        border-radius: .25rem;
        border: thin solid #dedede;
        padding: .75rem;
        display: block;
        outline: none;
        font-size:1rem;
        line-height: 1;
      }
      p{
        font-weight: 600;
        color: red;
        font-size: 12px;
      }
    }
    button{
      width: 100%;
      padding: 10px;
      background-color:#3287b7;
      border-radius: .25rem;
      outline: none;
      border: none;
      cursor: pointer;
      opacity: .8;
      color: white;
      font-size: 16px;
    }
    h6{
      display: inline-block;
      padding: 10px 20px;
      margin-top:  20px;
      background-color: #fdbe68;
      border-radius: .25rem;
      opacity: .8;
      cursor: pointer;
    }
  }
`

const LingthBoxContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
      ${props => !props.loading && css`
        display: none;
      `}
    h5{
      background-color: white;
      max-width: 500px;
      padding: 100px 50px;
      color: #414042;
      border-radius: .35rem;
    }
`