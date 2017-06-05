import React from 'react';
import ContactDetails from './ContactDetails';
import ImageStore from './ImageStore';
import OpenningHours from './OpeningHours';
const details = {
  storeName: 'Milton Keynes',
  sid: 'GB01101001',
  businessType: 'Ice Cream Parlour Cafeteria',
  address: '10 Silbury Boulevard, Milton Keynes, MK5 8DS, Buckingmashire United Kingdom',
  about: 'Artisian coffee shop',
  moto: 'Come in for a coffee',
  telephoneNumber: '01908 444 777',
  emailAddress: 'info@gmail.com',
  manager: 'John Smith',
};

const openingHours = {
  normal: {
    startDate: 'Monday',
    times: [
      {start: '11:00', end: '15:00'},
      {start: '17:00', end: '23:00'}
    ]
  },
  seasonal: {
    startDate: '25/12',
    times: [
      {start: '11:00', end: '15:00'}
    ]
  }
}


const General = (props) => (
  <div>
    <ContactDetails
      details={details}
    />
    <ImageStore />
    <OpenningHours data={openingHours}/>
  </div>
);


export default General;
