import './read.css'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { StateContext, DispatchContext } from "../../store/context";
import { ActionTypes } from '../../store/reducer'
export default function Read() {
    const { items } = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const handleDelete = (id) => {
        dispatch({ type: ActionTypes.DELETE, payload: id })
    }
    if (items.length)
        return (
            <table>
                <thead>
                    <tr>
                        <th>Blog</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item =>
                        <tr key={item.id}>
                            <td className='content'>
                                <div>{item.title}</div>
                                <div>{item.content}</div>
                            </td>
                            <td className='actions'>
                                <Link to={`/update/${item.id}`}><FontAwesomeIcon icon={faEdit} /></Link>

                                <FontAwesomeIcon icon={faTrashAlt} style={{ cursor: "pointer", color: "#2a27eb" }} onClick={() => handleDelete(item.id)} />
                            </td>
                        </tr>)}
                </tbody>
            </table>
        )
    else {
        return <h1>NO ITEM AVAILABLE</h1>
    }

}
