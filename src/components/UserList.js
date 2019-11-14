import React, {useState, useEffect} from 'react';
import { Table, Button, ButtonGroup, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const UserList = props => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(props.users);

    console.log(searchResults)

    useEffect(() => {
        const results = props.users.filter(user =>
            user.name.toLowerCase()
            .includes(searchTerm.toLocaleLowerCase()));
        
        setSearchResults(results)
    }, [props, searchTerm])

    const searchHandler = e =>{
        setSearchTerm(e.target.value);
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <td width="60%" colSpan="2"></td>
                        <td colSpan="2" width="40%">
                            <Input value={searchTerm} onChange={searchHandler} id="searchInput" name="search" type="text" placeholder="Search"/>
                        </td>
                    </tr>
                    <tr>
                        <td width="25%">Name</td>
                        <td width="35%">Email</td>
                        <td width="35%">Role</td>
                        <td width="10%"></td>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map(user => (
                        <tr key={user.id}>
                            <td width="20%">{user.name}</td>
                            <td width="35%">{user.email}</td>
                            <td width="35%">{user.role}</td>
                            <td width="10%">
                                <ButtonGroup size="sm">
                                    <Button color="primary" onClick={() => props.editUser(user.id)}><FontAwesomeIcon icon={faEdit} /></Button>
                                    <Button color="danger" onClick={() => props.deleteUser(user.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default UserList;