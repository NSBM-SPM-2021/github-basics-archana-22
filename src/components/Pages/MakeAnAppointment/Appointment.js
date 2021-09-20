import React from 'react';
import {
    Card, CardHeader, CardBody, Form, FormGroup, Label, Input, FormText, Button, Alert
  } from 'reactstrap';

const styles = { "backgroundColor": "#007bff", "color": "#ffffff", "cursor": "pointer" };

class MakeAppointments extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showBody: true,
        patientName: "",
        patientAge: "",
        gender: "",
        aptDate: "",
        aptTime: "",
        aptNotes: "",
        formErrors: false
      };
    }

    toggleBody = () => {
        this.setState({
          showBody: !this.state.showBody
        });
      }
      save = (e) => {
        e.preventDefault();
        const { patientName, patientAge, gender, aptDate, aptTime, aptNotes } = this.state;
        if (patientName !== "" && patientAge !== "" && gender !== "" && aptDate !== "" && aptTime !== "" && aptNotes !== "") {
          let apt = {
            id: Date.now(),
            patientName: this.state.patientName,
            patientAge: this.state.patientAge,
            gender: this.state.gender,
            aptDate: this.state.aptDate + ' ' + this.state.aptTime,
            aptNotes: this.state.aptNotes
          };
          let clear = {
            patientName: "",
            patientAge: "",
            gender: "",
            aptDate: "",
            aptTime: "",
            aptNotes: "",
          };
          this.setState({
            formErrors: false,
            showBody: false,
            ...clear
          });
          this.props.saveApt(apt);
        } else {
          this.setState({
            formErrors: true
          });
        }
    
      }
      handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
      render() {
        let displayBody = {
          display: this.state.showBody ? 'block' : 'none'
        };
        let errors = {
          display: this.state.formErrors ? 'block' : 'none'
        };
  
    return (
        <div className='form-content-left'>
            <Card className="mt-4 mb-4 card-border" outline color="primary">
            <CardHeader onClick={this.toggleBody}><h1> Add New Appointment </h1> </CardHeader>
            <CardBody style={displayBody} id="aptBody">
            <FormText color="muted" className="mb-1">
                 <span className="form-input-login">* All fields are required</span>  
            </FormText>
            <Form className='form' onSubmit={this.save}>
              <div className='form-inputs'>
                <FormGroup>
                <Label  className='form-label' for="patientName">Patient Name</Label>
                <Input className='form-input' type="text" id="patientName" placeholder="Patient's name" value={this.state.patientName} onChange={this.handleChange} />
                </FormGroup>
              </div>
              <div className='form-inputs'>
                <FormGroup>
                <Label  className='form-label' for="patientAge">Age</Label>
                <Input className='form-input' type="number" id="patientAge" placeholder="Patient's age" value={this.state.patientAge} onChange={this.handleChange} />
                </FormGroup>
              </div>
              <div className='form-inputs'>
                <FormGroup>
                <Label  className='form-label'for="gender">Gender</Label>
                <Input className='form-input' type="select" id="gender" value={this.state.gender} onChange={this.handleChange} >
                    <option>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </Input>
                </FormGroup>
              </div>
              <div className='form-inputs'>
                <FormGroup>
                <Label  className='form-label' for="aptDate">Date</Label>
                <Input className='form-input' type="date" id="aptDate" value={this.state.aptDate} onChange={this.handleChange} />
                </FormGroup>
              </div>
              <div className='form-inputs'>
                <FormGroup>
                <Label className='form-label'for="aptTime">Time</Label>
                <Input className='form-input'type="time" id="aptTime" value={this.state.aptTime} onChange={this.handleChange} />
                </FormGroup>
              </div>
              <div className='form-inputs'>
                <FormGroup>
                <Label  className='form-label'for="exampleText">Problem</Label>
                <Input className='form-input'type="textarea" id="aptNotes" placeholder="Notes" value={this.state.aptNotes} onChange={this.handleChange} />
                </FormGroup>
              </div>
                <Alert className='alert' color="danger" style={errors}>
                    Please fill all the details
                </Alert>
                    <Button className='form-input-btn' type="submit" color="primary" block>Add Appointment</Button>
            </Form>
            </CardBody>
            </Card >
        </div>
    )
}
}

    export default MakeAppointments
