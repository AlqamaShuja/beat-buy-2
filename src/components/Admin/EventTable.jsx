import React, { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import bgImage from '../../assets/bg-details.jpg'; // Adjust path as needed

function EventTable() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Music Fest 2025",
      image: null,
      startTime: "2025-01-20T18:00",
      endTime: "2025-01-20T23:00",
      gateOpen: "2025-01-20T17:30",
      isFeatured: true,
      isUpcoming: true,
      status: "Active",
    },
    {
      id: 2,
      title: "Tech Conference 2025",
      image: null,
      startTime: "2025-02-15T09:00",
      endTime: "2025-02-15T17:00",
      gateOpen: "2025-02-15T08:00",
      isFeatured: false,
      isUpcoming: true,
      status: "Active",
    },
    {
      id: 3,
      title: "Charity Gala",
      image: null,
      startTime: "2025-03-10T19:00",
      endTime: "2025-03-10T22:00",
      gateOpen: "2025-03-10T18:30",
      isFeatured: false,
      isUpcoming: false,
      status: "Inactive",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add'); // 'add' or 'edit'
  const [currentEvent, setCurrentEvent] = useState({
    id: '',
    title: '',
    image: null,
    startTime: '',
    endTime: '',
    gateOpen: '',
    isFeatured: false,
    isUpcoming: false,
    status: 'Active',
  });

  const handleShowModal = (type, event = null) => {
    setModalType(type);
    if (event) {
      setCurrentEvent(event);
    } else {
      setCurrentEvent({
        id: '',
        title: '',
        image: null,
        startTime: '',
        endTime: '',
        gateOpen: '',
        isFeatured: false,
        isUpcoming: false,
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
      setEvents([...events, { ...currentEvent, id: events.length + 1 }]);
    } else {
      setEvents(
        events.map((event) =>
          event.id === currentEvent.id ? currentEvent : event
        )
      );
    }
    handleCloseModal();
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setCurrentEvent({
        ...currentEvent,
        [name]: files[0],
      });
    } else {
      setCurrentEvent({
        ...currentEvent,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
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
        minHeight: '100vh'
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Event List</h2>
        <Button variant="primary" onClick={() => handleShowModal('add')}>
          Add Event
        </Button>
      </div>
      <Table striped bordered hover style={{ color: 'white' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Gate Open</th>
            <th>Featured</th>
            <th>Upcoming</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td style={{ color: 'white' }}>{event.id}</td>
              <td style={{ color: 'white' }}>{event.title}</td>
              <td style={{ color: 'white' }}>
                {event.image && (
                  <img
                    src={URL.createObjectURL(event.image)}
                    alt={event.title}
                    width="50"
                  />
                )}
              </td>
              <td style={{ color: 'white' }}>{event.startTime}</td>
              <td style={{ color: 'white' }}>{event.endTime}</td>
              <td style={{ color: 'white' }}>{event.gateOpen}</td>
              <td style={{ color: 'white' }}>{event.isFeatured ? 'Yes' : 'No'}</td>
              <td style={{ color: 'white' }}>{event.isUpcoming ? 'Yes' : 'No'}</td>
              <td style={{ color: 'white' }}>{event.status}</td>
              <td style={{ color: 'white' }}>
                <Button
                  variant="primary"
                  size="sm"
                  className="me-2"
                  onClick={() => handleShowModal('edit', event)}
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add/Edit Event Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === 'add' ? 'Add Event' : 'Edit Event'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleFormSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={currentEvent.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="startTime"
                value={currentEvent.startTime}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="endTime"
                value={currentEvent.endTime}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gate Open</Form.Label>
              <Form.Control
                type="datetime-local"
                name="gateOpen"
                value={currentEvent.gateOpen}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Is Featured"
                name="isFeatured"
                checked={currentEvent.isFeatured}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Is Upcoming"
                name="isUpcoming"
                checked={currentEvent.isUpcoming}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={currentEvent.status}
                onChange={handleChange}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Cancelled">Cancelled</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {modalType === 'add' ? 'Add Event' : 'Update Event'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default EventTable;
