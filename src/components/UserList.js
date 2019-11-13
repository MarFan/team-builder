import React from 'react';
import { Table, Button, ButtonGroup } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const UserList = props => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
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