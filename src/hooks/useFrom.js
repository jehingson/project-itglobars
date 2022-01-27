import { useState, useEffect } from 'react';

const initialFormValue = {
    name: '',
    email: '',
    phone: '',
    age: '',
    date: '',
    travel: '',
    id: ''
  }

export const useForm = (initialForm, validateFrom) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleDate = (e) => {
        setForm({...form, ['date']: e})
    }

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateFrom(form))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateFrom(form))
        if(Object.keys(errors).length === 0){
            console.log('dato', form)
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, [5000])
            setForm(initialFormValue)
        }else{
            return
        }
    }

    return { 
        form, 
        errors, 
        loading,
        handleChange, 
        handleBlur, 
        handleSubmit,
        handleDate 
    }
}