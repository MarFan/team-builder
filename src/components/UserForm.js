import React, { useState, useEffect } from 'react'
import { Row, Form, FormGroup, Label, Input, ButtonGroup, Button } from 'reactstrap';

const UserForm = props => {
    const [userForm, setUserForm] = useState(props.userToEdit);
    const [editMode] = useState(props.editMode)
    const [btnLabel, setBtnLabel] = useState("Submit")
    
    useEffect(() => {
        setUserForm(props.userToEdit);
        
        if(editMode) {
            setBtnLabel('Update')
        }else{
            setBtnLabel('Submit')
        }
    }, [props.userToEdit])
    

    const onChangeHandler = e => {
        const {name, value} = e.target
        setUserForm({...userForm, [name]: value});
    };

    const onSubmit = e => {
        e.preventDefault();
        props.addUser(userForm);
        setUserForm(props.defaultForm);
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="nameInput">Name</Label>
                    <Input id="nameInput" value={userForm.name} onChange={onChangeHandler} type="text" name="name" />
                </FormGroup>
                <FormGroup>
                    <Label for="emailInput">Email</Label>
                    <Input id="emailInput" value={userForm.email} onChange={onChangeHandler} type="text" name="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="roleSelect">Role</Label>
                    <Input id="roleSelect" value={userForm.role} onChange={onChangeHandler} type="select" name="role">
                        <option value="0"></option>
                        <option value="Master">Master</option>
                        <option value="Padawan">Padawan</option>
                        <option value="Sentinel">Sentinel</option>
                        <option value="Temple Guard">Temple Guard</option>
                        <option value="Knight">Knight</option>
                        <option value="Consular">Consular</option>
                        <option value="Grand Master">Grand Master</option>
                    </Input>
                </FormGroup>
                <Row className="justify-content-end">
                    <ButtonGroup>
                        <Button color="primary">{btnLabel}</Button>
                        {/* <Button color="secondary" onClick={resetForm}>Cancel</Button> */}
                    </ButtonGroup>
                </Row>
            </Form>
        </div>
    )
}

export default UserForm;