import React from 'react';
import './incident.css';
import { useFormik } from 'formik';
import { Form, Container, Card, Col, Button } from 'react-bootstrap';
import Axios from 'axios';

function Incident() {
  const formik = useFormik({
    initialValues: {
      fatalities: '',
      injuries: '',
      prePlateCharacters: '',
      plateNumber: '',
      postPlateCharacter: '',
      sceneImage: ''
    },
    onSubmit: (values) => {
      console.log('form data', values);
      Axios.post('https://wonya-team-271.herokuapp.com/api/v1/incident/', values)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validate: (values) => {
      let errors = {};

      if (!values.fatalities) {
        errors.fatalities = '*Required';
      } else if (values.fatalities < 0) {
        errors.fatalities = '*Please enter a valid number';
      }

      if (!values.injuries) {
        errors.injuries = '*Required';
      } else if (values.injuries < 0) {
        errors.injuries = '*Please enter a valid number';
      }

      return errors;
    }
  });

  return (
    <Container className="inci">
      <Card className="card">
        <Card.Header>
          <h3 id="heading">Report Incident</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFatalities">
                <Form.Label>How many fatalities?</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Fatalities"
                  name="fatalities"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fatalities}
                />

                {formik.touched.fatalities && formik.errors.fatalities ? (
                  <div className="errors">{formik.errors.fatalities}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridInjuries">
                <Form.Label>How many injuries?</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Injuries"
                  name="injuries"
                  onChange={formik.handleChange}
                  value={formik.values.injuries}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.injuries && formik.errors.injuries ? (
                  <div className="errors">{formik.errors.injuries}</div>
                ) : null}
              </Form.Group>
            </Form.Row>

            <p>
              Plate Number: <span id="ex">( e.g UAA 111V )</span>
            </p>
            <Form.Row>
              <Col xs={6}>
                <Form.Control
                  type="text"
                  placeholder="UAA"
                  name="prePlateCharacters"
                  onChange={formik.handleChange}
                  value={formik.values.prePlateCharacters}
                />
              </Col>
              <Col xs={3}>
                <Form.Control
                  type="111"
                  placeholder="111"
                  name="plateNumber"
                  onChange={formik.handleChange}
                  value={formik.values.plateNumber}
                />
              </Col>
              <Col xs={2}>
                <Form.Control
                  type="text"
                  placeholder="V"
                  name="postPlateCharacter"
                  onChange={formik.handleChange}
                  value={formik.values.postPlateCharacter}
                />
              </Col>
            </Form.Row>
            <br />
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me to get location" />
            </Form.Group>

            <Form.Group>
              <Form.File name="sceneImage" label="Upload Picture:" onChange={formik.handleChange} />
            </Form.Group>

            <br />

            <Button className="" variant="danger">
              Cancel
            </Button>

            <Button className="float-right" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Incident;
