import React, { useState, Fragment } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import "./Table.css";

function Table(props) {
    const [contacts, setContacts] = useState(props.data);
    const [addFormData, setAddFormData] = useState({
      firstName: "",
      secondName: "",
      fatherName: "",
      role: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      firstName: "",
      secondName: "",
      fatherName: "",
      role: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: addFormData.id,
        firstName: addFormData.firstName,
        secondName: addFormData.secondName,
        fatherName: addFormData.fatherName,
        role: addFormData.role,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        firstName: editFormData.firstName,
        secondName: editFormData.secondName,
        fatherName: editFormData.fatherName,
        role: editFormData.role,
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        firstName: contact.firstName,
        secondName: contact.secondName,
        fatherName: contact.fatherName,
        role: contact.role,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);
    };
  
    return (
      <div className="app-container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Second Name</th>
                <th>Father Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
  
        <h2>Add a Relative</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="firstName"
            required="required"
            placeholder="Enter a First Name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="secondName"
            required="required"
            placeholder="Enter a Second Name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="fatherName"
            required="required"
            placeholder="Enter a Father Name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="role"
            required="required"
            placeholder="Enter a Role..."
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  };

export default Table;