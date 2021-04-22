import React ,{useState} from 'react';
import {Link} from "react-router-dom";
const UserCard = (
    {
        user,
        lastModified="1/1/2021",
        owner="who knows?",
        deleteUser,
        updateUser
    }) => {
    const [editing, setEditing] = useState(false)
    const [name, setName] = useState(user.name)
    const saveUser = () => {
        setEditing(false)
        const newUser = {
            ...user,
            name: name
        }
        updateUser(newUser)
    }
    return (
        <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6 col-xs-1">
            <div className="card" >
                {<img className="card-img-top" src="https://picsum.photos/300/200" />}
                <div className="card-body" >
                    <h5 className="card-title">
                        {!editing &&
                        <a href={`/courses/grid/edit/${user._id}`}>
                            {user.name}
                        </a>
                        }
                        {editing &&
                        <input
                            className="form-control "
                            onChange={(e) => setName(e.target.value)}
                            value={name}/>
                        }
                    </h5>
                    <p className="card-text">Some Description</p>
                    <p>User details</p>
                    <p>User weight</p>

                </div>
            </div>
        </div>
    )}
export default UserCard