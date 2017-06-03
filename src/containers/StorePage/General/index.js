import React from 'react';
import FormEdit, {ItemEdit} from 'components/FormEdit';
import ImageStore from 'components/ImageStore';
import OpenningHours from './OpeningHours';
const dumpData = [
  {
    key: 'Store name',
    value: 'Milton Keynes',
  },
  {
    key: 'SID',
    value: 'GB01101001',
  },
  {
    key: 'Business Type',
    value: 'Ice Cream Parlour Cafeteria',
  },
  {
    key: 'Address',
    value: '10 Silbury Boulevard, Milton Keynes, MK5 8DS, Buckingmashire United Kingdom',
  },
  {
    key: 'About',
    value: 'Artisian coffee shop',
  },
  {
    key: 'Moto',
    value: 'Come in for a coffee',
  },
  {
    key: 'Telephone number',
    value: '01908 444 777',
  },
  {
    key: 'Email Address',
    value: 'info@gmail.com',
  },
  {
    key: 'Manager',
    value: 'John Smith',
  }
]

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
    <FormEdit
      onSave={() => console.log('Save success')}
    >
      {
        dumpData.map((o) => (
          <ItemEdit
            key={o.key}
            title={o.key}
            value={o.value}
          />
        ))
      }
    </FormEdit>
    <ImageStore />
    <OpenningHours data={openingHours}/>
  </div>
);


export default General; 
