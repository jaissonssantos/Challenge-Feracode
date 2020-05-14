import React, { useState } from 'react';
import { Modal, Button, Form, FormGroup, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import { MdAddAPhoto } from "react-icons/md";
import validationSchema from '../../validations/schemaProfile';

import { CoverPictureContainer } from './styles';


function SettingsForm({data, show, handleClose, handleSettingSubmit}) {

    const [thumbnail, setThumbnail] = useState(null);

    const {
        setFieldValue,
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      } = useFormik({
        initialValues: data,
        validationSchema,
        onSubmit(data) {
          handleSettingSubmit(data);
          handleClose();
        },
    });

    // create tmp url for object file selected and set thumbnail 
  const handleThumbnail = (event) => {
    if(event.target.files[0]) {
      setThumbnail(URL.createObjectURL(event.target.files[0]));
      setFieldValue('cover', URL.createObjectURL(event.target.files[0]));
    }
  }

    
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <CoverPictureContainer preview={thumbnail}>
                            <input type="file" onChange={ event => handleThumbnail(event) } />
                            <MdAddAPhoto size={24} />
                            <span>Drag a cover picture</span>
                        </CoverPictureContainer>
                    </Col>
                    <Col xs={12} md={12} className="mt-3">
                    <Form.Group controlId="name">
                        <Form.Control
                            type="text" 
                            name="name" 
                            className="form-control"
                            placeholder="Name"
                            onChange={handleChange}
                            value={values.name}
                            isInvalid={!!errors.name} />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col xs={12} md={12}>
                    <Form.Group controlId="username">
                        <Form.Control
                            type="text" 
                            name="username" 
                            placeholder="username"
                            className="form-control"
                            onChange={handleChange}
                            value={values.username}
                            isInvalid={!!errors.username} />
                        <Form.Control.Feedback type="invalid">
                            {errors.username}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col xs={12} md={12}>
                    <Form.Group controlId="bio">
                        <Form.Control
                            type="text" 
                            name="bio" 
                            placeholder="bio"
                            className="form-control"
                            onChange={handleChange}
                            value={values.bio}
                            isInvalid={!!errors.bio} />
                        <Form.Control.Feedback type="invalid">
                            {errors.bio}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col xs={12} md={12}>
                    <Form.Group controlId="city">
                        <Form.Control
                            type="text" 
                            name="city" 
                            placeholder="city"
                            className="form-control"
                            onChange={handleChange}
                            value={values.city}
                            isInvalid={!!errors.city} />
                        <Form.Control.Feedback type="invalid">
                            {errors.city}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col xs={12} md={12}>
                    <Form.Group controlId="url">
                        <Form.Control
                            type="text" 
                            name="url" 
                            placeholder="url"
                            className="form-control"
                            onChange={handleChange}
                            value={values.url} />
                    </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Modal.Body>
    
        <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
  </Modal>
  );
}

export default SettingsForm;