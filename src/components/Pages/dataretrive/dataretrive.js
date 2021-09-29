import React, { useState, useEffect, Fragment } from "react";
import firebase from '../../../firebase';

function GetResult() {
    const [appointment, setAppointment] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
    // const [appointment, setAppointment] = useState("");
    
    const ref = firebase.firestore().collection("appointment");

    //DELETE FUNCTION
    function deleteAppointment(appointment) {
        ref
        .doc(appointment.id)
        .delete()
        .catch((err) => {
            console.error(err);
        });
    }

    // EDIT FUNCTION
    function editAppointment(updatedAppointment) {
        setLoading();
        ref
        .doc(updatedAppointment.id)
        .update(updatedAppointment)
        .catch((err) => {
            console.error(err);
        });
    }

    return (
        <Fragment>
            {loading ? <h1>Loading...</h1> : null}
            {appointment.map((appointment) => (
            <div className="appointment" key={appointment.id}>
                <h1>Appointments</h1><hr/>
                <label>Patients Name : </label>
                <h2>{appointment.patientName}</h2>
                <label>Age : </label>
                <p>{appointment.patientAge}</p>
                <label>Gender : </label>
                <p>{appointment.gender}</p>
                <label>Date : </label>
                <p>{appointment.aptDate}</p>
                <label>Time : </label>
                <p>{appointment.aptTime}</p>
                <label>Problem : </label>
                <p>{appointment.aptNotes}</p>
                <div>
                    <button onClick={() => deleteAppointment(appointment)}>DELETE</button>
                    <button onClick={() =>editAppointment({ patientName: appointment.patientName, patientAge: appointment.patientAge, gender: appointment.gender, aptDate: appointment.aptDate, aptTime: appointment.aptTime, aptNotes: appointment.aptNotes, id: appointment.id })}>
                    EDIT
                    </button>
                </div>
            </div>
        ))}
         </Fragment>
    );
}

export default GetResult;
