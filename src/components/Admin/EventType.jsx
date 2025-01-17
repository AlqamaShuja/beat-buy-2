import React, { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import bgImage from '../../assets/bg-details.jpg'; // Adjust path as needed

function EventType() {
  const [eventTypes, setEventTypes] = useState([
    { id: 1, title: "Music", description: "Events related to music", status: "Active" },
    { id: 2, title: "Tech", description: "Technology-related events", status: "Active" },
    { id: 3, title: "Charity", description: "Charity and fundraising events", status: "Inactive" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add'); // 'add' or 'edit'
  const [currentEventType, setCurrentEventType] = useState({
    id: '',
    title: '',
    description: '',
    status: 'Active',
  });

  const handleShowModal = (type, eventType = null) => {
    setModalType(type);
    if (eventType) {
      setCurrentEventType(eventType);
    } else {
      setCurrentEventType({
        id: '',
        title: '',
        description: '',
        status: 'Active',
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (modalType === 'add') {
      setEventTypes([...eventTypes, { ...currentEventType, id: eventTypes.length + 1 }]);
    } else {
      setEventTypes(
        eventTypes.map((eventType) =>
          eventType.id === currentEventType.id ? currentEventType : eventType
        )
      );
    }
    handleCloseModal();
  };

  const handleDeleteEventType = (id) => {
    if (window.confirm('Are you sure you want to delete this event type?')) {
      setEventTypes(eventTypes.filter((eventType) => eventType.id !== id));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEventType({
      ...currentEventType,
      [name]: value,
    });
  };

  return (
    <div
      className="sub_banner_area"
      id="home"
      style={{
        padding: '20px',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        minHeight: '100vh',
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Event Type</h2>
        <Button variant="primary" onClick={() => handleShowModal('add')}>
          Add Event Type
        </Button>
      </div>
      <Table striped bordered hover style={{ color: 'white' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {eventTypes.map((eventType) => (
            <tr key={eventType.id}>
              <td style={{ color: 'white' }}>{eventType.id}</td>
              <td style={{ color: 'white' }}>{eventType.title}</td>
              <td style={{ color: 'white' }}>{eventType.description}</td>
              <td style={{ color: 'white' }}>{eventType.status}</td>
              <td style={{ color: 'white' }}>
                <Button
                  variant="primary"
                  size="sm"
                  className="me-2"
                  onClick={() => handleShowModal('edit', eventType)}
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteEventType(eventType.id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add/Edit Event Type Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === 'add' ? 'Add Event Type' : 'Edit Event Type'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleFormSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={currentEventType.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={currentEventType.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={currentEventType.status}
                onChange={handleChange}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {modalType === 'add' ? 'Add Event Type' : 'Update Event Type'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default EventType;