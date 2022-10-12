import React from 'react'
import { useDispatch } from 'react-redux'
import { setUserSlice } from '../redux/userSlice'
import { deleteUserSlice } from '../redux/usersSlice'

const Table = (props) => {

    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteUserSlice(id))
    }
    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user,key) => (
                    <tr key={key}>
                        <th scope="row">{key}</th>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className='btn btn-primary mr-2' onClick={() => dispatch(setUserSlice(user))}>Edit</button>
                            <button className='btn btn-primary' onClick={()=>handleDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table