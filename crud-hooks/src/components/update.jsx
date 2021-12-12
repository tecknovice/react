import { useState, useEffect, useContext } from 'react'
import Form from './form/form'
import { useParams } from "react-router-dom";
import { ActionTypes } from "../store/reducer";
import { DispatchContext, StateContext } from "../store/context";
import { useNavigate } from "react-router-dom";
export default function Update() {
    const { id } = useParams();
    const { items } = useContext(StateContext)
    const [item, setItem] = useState({ id: new Date().getTime(), title: '', content: '' })

    useEffect(() => {
        const currentItem = items.find(item => item.id === Number(id))
        if (currentItem) setItem(currentItem)
    }, [])

    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setItem({ ...item, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ActionTypes.UPDATE, payload: item })
        navigate("/", { replace: true });
    }
    return <Form item={item} handleChange={handleChange} handleSubmit={handleSubmit} />
}
