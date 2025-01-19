import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { fetchUsers, addUser, updateUser, deleteUser, getUserFromSlice, addUserThunk, adminLoginThunk, addUserInviteThunk } from '../../slices/userSlice';
import { Modal, Button, Form } from 'react-bootstrap';
import bgImage from '../../assets/bg-details.jpg';

function UserTable() {
    const dispatch = useDispatch();
    const { usersList } = useSelector(getUserFromSlice);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', password: '', organization_name: '', });

    // Fetch users on mount
    useEffect(() => {
        setLoading(true);
        dispatch(fetchUsers())
            .unwrap()
            .then(() => setLoading(false))
            .catch(() => setLoading(false));
    }, []);

    // Handle modal toggle
    const handleModalToggle = (user = null) => {
        setSelectedUser(user);
        if (user) {
            setFormData({ name: user.name, email: user.email, password: '' }); // Pre-fill for editing
        } else {
            setFormData({ name: '', email: '', password: '' }); // Reset for adding
        }
        setShowModal(!showModal);
    };

    // Handle delete modal toggle
    const handleDeleteModalToggle = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(!showDeleteModal);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Submit form for adding/editing user
    const handleSubmit = () => {
        if (selectedUser) {
            // Update user
            dispatch(updateUser({ id: selectedUser.id, ...formData }))
            // .unwrap()
            // .then(() => setShowModal(false));
        } else {
            // Add user
            dispatch(addUserInviteThunk({ ...formData, username: formData.email }))
                .unwrap()
                .then((res) => {
                    // setShowModal(false);
                    console.log(res, "asjcnjaacbacba");
                });
        }
    };

    // Confirm delete user
    const handleDelete = () => {
        if (selectedUser) {
            dispatch(deleteUser(selectedUser.id))
            // .unwrap()
            // .then(() => setShowDeleteModal(false));
            setShowDeleteModal(false);
        }
    };

    const handleLoginAdmin = () => {
        dispatch(adminLoginThunk({ username: 'superadmin@gmail.com', password: '12345678', })).unwrap()
            .then(res => {
                console.log(res, "scajncja:res:login");
            })
            .catch(error => {
                console.log(error, "scajncja:error:login");
            })
    }

    return (
        <div className="sub_banner_area"
            id="home"
            style={{
                padding: '20px',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                minHeight: '100vh',
            }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 style={{ color: '#FFF' }}>User List</h2>
                {/* <Button variant="primary" onClick={() => handleLoginAdmin()} className="text-uppercase">
                    Login
                </Button> */}
                <Button variant="primary" onClick={() => handleModalToggle()} className="text-uppercase">
                    Add User
                </Button>
            </div>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <table className="table table-striped">
                    <thead style={{ backgroundColor: '#1d074f', color: '#fff' }}>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList?.map((user, index) => (
                            <tr key={user.id}>
                                <td style={{ color: '#FFF' }}>{index + 1}</td>
                                <td style={{ color: '#FFF' }}>{user.name}</td>
                                <td style={{ color: '#FFF' }}>{user.email}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => handleModalToggle(user)}
                                    >
                                        <FaEdit />
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDeleteModalToggle(user)}
                                    >
                                        <FaTrash />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Add/Edit Modal */}
            <Modal show={showModal} onHide={handleModalToggle}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedUser ? 'Edit User' : 'Add User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        {!selectedUser && (
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter password"
                                />
                            </Form.Group>
                        )}
                        <Form.Group className="mb-3">
                            <Form.Label>Organization Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="organization_name"
                                value={formData.organization_name}
                                onChange={handleInputChange}
                                placeholder="Enter organization name"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalToggle}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={handleDeleteModalToggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteModalToggle}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Yes, Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserTable;