
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { get, update , remove } from "../services/eventServices";

function UpdateEvent({ id }) {
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await get(id);
      setEvent(response.data);
    };
    fetchEvent();
  }, [id]);

  const f = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: 0,
      nbTickets: 0,
      img: '',
      nbParticipants: 0,
      like: false
    },
    onSubmit: async (values) => {
      await update(id, values);
      navigate('/events');
    }
  });
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await remove(eventId);
      navigate('/events');
    }
  };

  return (
    <>
      <h1>Update Event</h1>
      <Form onSubmit={f.handleSubmit}>
      <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="name" value={f.values.name} onChange={f.handleChange} />
              
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="text" name="description" value={f.values.description} onChange={f.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" value={f.values.price} onChange={f.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Number of Tickets</Form.Label>
                <Form.Control type="number" name="nbTickets" value={f.values.nbTickets} onChange={f.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="img" value={f.values.img} onChange={f.handleChange} />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Update
            </Button>
            <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Form>
    </>
  );
}

export default UpdateEvent;
