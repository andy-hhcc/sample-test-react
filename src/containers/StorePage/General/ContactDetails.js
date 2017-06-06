import React from 'react';
import FormEdit, { ItemEdit, Column } from 'components/FormEdit';
const ContactDetails = ({ details }) => {
  const { storeName, sid, businessType, address, about, moto,
  telephoneNumber, emailAddress, manager } = details;
  return (
    <FormEdit
      onSave={() => console.log('Save success')}
    >
      <Column>
        <ItemEdit
          title={'Store Name'}
          value={storeName}
        />
        <ItemEdit
          title={'SID'}
          value={sid}
        />
        <ItemEdit
          title={'Business Type'}
          value={businessType}
        />
        <ItemEdit
          title={'Address'}
          value={address}
        />
        <ItemEdit
          title={'About'}
          value={about}
        />
        <ItemEdit
          title={'Moto'}
          value={moto}
        />
      </Column>
      <Column>
        <ItemEdit
          title={'Telephone Number'}
          value={telephoneNumber}
        />
        <ItemEdit
          title={'Email Address'}
          value={emailAddress}
        />
        <ItemEdit
          title={'Manager'}
          value={manager}
        />
      </Column>
    </FormEdit>
  );
};

export default ContactDetails;
