import Form from './form/form'
import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";

import { ActionTypes } from "../store/reducer";
import { DispatchContext } from "../store/context";

export default function Create() {
    const [item, setItem] = useState({ id: new Date().getTime(), title: '', content: '' })
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setItem({ ...item, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ActionTypes.CREATE, payload: item })
        navigate("/", { replace: true });
    }
    return <Form item={item} handleChange={handleChange} handleSubmit={handleSubmit} />
}
