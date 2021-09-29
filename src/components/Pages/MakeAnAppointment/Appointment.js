import React, { useState, useEffect } from 'react';
import {
  Card, CardHeader, CardBody, Form, FormGroup, Label, Input, FormText, Button, Alert
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import './NewAppointment.css';
  import firebase from "../../../firebase";
  import "firebase/firestore"
  import { v4 as uuidv4 } from "uuid";
 

function AddAppointment(){
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [gender, setGender] = useState("");
  const [aptDate, setAptDate] = useState("");
  const [aptTime, setAptTime] = useState("");
  const [aptNotes, setAptNotes] = useState("");



const ref = firebase.firestore().collection("appointment");


  //REALTIME GET FUNCTION
  function getAppointment() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setAppointment(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getAppointment();
    // eslint-disable-next-line
  }, []);

  // ADD FUNCTION
  function AddAppointments(NewAppointment) {
    ref
      //.doc() use if for some reason you want that firestore generates the id
      .doc(NewAppointment.id)
      .set(NewAppointment)
      .catch((err) => {
        console.error(err);
      });
  }

  
  return (
      <div className='form-content-right'>
      <Card className="mt-4 mb-4 card-border" outline color="primary">
        <CardHeader><h1> Add New Appointment </h1> </CardHeader>
        <CardBody id="aptBody">
          <FormText color="muted" className="mb-1">
            <span className='form-input-login'>* All fields are required </span>
          </FormText>
          <Form className='form' onSubmit={this.save}>
            <div className='form-inputs'>
              <FormGroup >
                <Label className='form-label' for="patientName">Patient Name</Label>
                <Input className='form-input' type="text" id="patientName" placeholder="Patient's name" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
              </FormGroup>
            </div>
            <div className='form-inputs'>
              <FormGroup>
                <Label className='form-label' for="patientAge">Age</Label>
                <Input className='form-input' type="number" id="patientAge" placeholder="Patient's age" value={patientAge} onChange={(e) => setPatientAge(e.target.value)} />
              </FormGroup>
            </div>
            <div className='form-inputs'>
              <FormGroup>
                <Label className='form-label' for="gender">Gender</Label>
                <Input className='form-input' type="select" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} >
                  <option>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </Input>
              </FormGroup>
            </div>
            <div className='form-inputs'>
              <FormGroup>
                <Label className='form-label' for="aptDate">Date</Label>
                <Input className='form-input' type="date" id="aptDate" value={aptDate} onChange={(e) => setAptDate(e.target.value)} />
              </FormGroup>
            </div>
            <div className='form-inputs'>
              <FormGroup>
                <Label className='form-label' for="aptTime">Time</Label>
                <Input className='form-input' type="time" id="aptTime" value={aptTime} onChange={(e) => setAptTime(e.target.value)} />
              </FormGroup>
            </div>
            <div className='form-inputs'>
              <FormGroup>
                <Label className='form-label' for="exampleText">Problem</Label>
                <Input className='form-input' type="textarea" id="aptNotes" placeholder="Sikness Simptoms" value={aptNotes} onChange={(e) => setAptNotes(e.target.value)} />
              </FormGroup>
            </div>
            <Alert className='fill_detail' color="danger">
              Please fill all the details
            </Alert>
            <Link to='/Result'>
              <Button className='form-input-btn' type="submit" onClick={() => AddAppointments({ patientName, patientAge, gender, aptDate, aptTime, aptNotes, id: uuidv4() })} color="primary" block>Add Appointment</Button>
            </Link>
          </Form>
        </CardBody>
      </Card >
      </div>
    )
}

export default AddAppointment;