import React, { Component } from 'react';
import _ from 'lodash';
import { Container } from 'reactstrap';
import Appointments from './components/AddAppointments';
import MakeAppointments from './Appointment';


class MainAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          appointments: [],
          showAddBody: false,
          orderBy: 'patientName',
          orderDir: 'asc',
          searchText: '',
        };
      }
    }
    return (
      <>
        <Container>
          <Appointments saveApt={this.saveAppointment} />
        </Container>
      </>
    );
  }
}

export default MakeAppointments;
