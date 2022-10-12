import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserSlice, updateUserSlice } from "../redux/usersSlice"
import { v4 as uuidv4 } from 'uuid';
import { setUserSlice } from '../redux/userSlice';

const Form = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    console.log(user)

    const handleChange = (prop) => (event) => {
        dispatch(setUserSlice({ ...user, [prop]: event.target.value }))
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        user.id ? dispatch(updateUserSlice(user)) : dispatch(addUserSlice({ ...user, id: uuidv4() }))

        dispatch(setUserSlice({
            id: "",
            userName: '',
            email: '',
        }))
    }
    return (
        <form onSubmit={handlesubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputUserName">User Name</label>
                <input type="text" name='userName' value={user.userName} className="form-control" id="exampleInputUserName" placeholder="User Name" onChange={handleChange('userName')} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" name='email' value={user.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange('email')} />
            </div>
            {user ? <button type="button" className="btn btn-primary mr-3" onClick={() => dispatch(setUserSlice({
                id: "",
                userName: '',
                email: '',
            }))}>cancel</button> : ""}
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    )
}

export default Form