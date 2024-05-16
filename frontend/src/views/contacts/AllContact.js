import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import AllContactsCtable from '../../components/contacts/AllContactsCtable';

const AllContacts = () => {

  const entrepreneurs = useSelector((state) => {

    return state.entrepreneurs.entrepreneurs
  })



  return (
    <CContainer className="my-4">
      <CCard>
        <CCardHeader className="bg-dark text-light">All Contacts</CCardHeader>
        <CCardBody>
        <AllContactsCtable entrepreneurs={entrepreneurs} />
        </CCardBody>
      </CCard>
    </CContainer>
  );
};

export default AllContacts;
