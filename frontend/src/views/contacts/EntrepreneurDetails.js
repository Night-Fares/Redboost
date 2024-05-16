// EntrepreneurDetails.js

import React, { useEffect } from 'react';
import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CImage,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,


} from '@coreui/react';

import { cilLocationPin, cilEnvelopeClosed, cilBirthdayCake, cilIndustry, cilGroup, cilFont} from '@coreui/icons'
import CIcon from '@coreui/icons-react';

const EntrepreneurDetails = ({entrepreneur}) => {

  if (!entrepreneur) {
    return (
      <CContainer style={{ padding: '20px' }} className="mt-4">
      <CRow>
        <CCol xs="auto">
          <CSpinner color="primary" />
        </CCol>
      </CRow>
    </CContainer>
    );
  }

  return (
    <>
    <CRow>
    <CCol>
          <CCard>
          <CCardHeader className="bg-dark text-light">Information sur l'entrepreneurs</CCardHeader>
          <CCardBody>
          <CRow>
          <CCol className='col-4' >
          <CImage fluid src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" style={{width: '250px'}}/>
          </CCol>
              <CCol className='col-8'>
              <h3>{entrepreneur.prenom} {entrepreneur.nom}</h3>
              <br></br>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Adresse</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date de Naissance</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Region</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Age</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>

                    <CTableDataCell>{entrepreneur.adresse}</CTableDataCell>
                    <CTableDataCell>
                      {new Date(entrepreneur.dateDeNaissance).toLocaleDateString()}
                    </CTableDataCell>

                    <CTableDataCell>{entrepreneur.region}</CTableDataCell>
                    <CTableDataCell>{entrepreneur.gender}</CTableDataCell>
                    <CTableDataCell>{entrepreneur.age}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>

                  </CTableRow>
                  <CTableRow>

                  </CTableRow>
                </CTableBody>
              </CTable>
              </CCol>
          </CRow>



          </CCardBody>
          </CCard>

        </CCol>
    </CRow><br></br>
      <CRow>
        <CCol>
          <CCard>
          <CCardHeader className="bg-dark text-light">Information sur le projet</CCardHeader>
          <CCardBody>
          <CTable>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilLocationPin}/></CTableHeaderCell>
                <CTableDataCell>Startup Name</CTableDataCell>
                <CTableDataCell>{entrepreneur.startupName}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"></CTableHeaderCell>
                <CTableDataCell>Description</CTableDataCell>
                <CTableDataCell>{entrepreneur.description}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilBirthdayCake}/></CTableHeaderCell>
                <CTableDataCell>Gouvernorat</CTableDataCell>
                <CTableDataCell>{entrepreneur.gouvernorat}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilIndustry}/></CTableHeaderCell>
                <CTableDataCell>Secteur Activites</CTableDataCell>
                <CTableDataCell>{entrepreneur.secteurActivites}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilGroup}/></CTableHeaderCell>
                <CTableDataCell>Nombre Cofondateurs</CTableDataCell>
                <CTableDataCell>{entrepreneur.nombreCofondateurs}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Nombre Cofondateurs Femmes</CTableDataCell>
                <CTableDataCell>{entrepreneur.nombreCofondateursFemmes}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Cree Ou Non</CTableDataCell>
                <CTableDataCell>{entrepreneur.creeeOuNon}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Forme Juridique</CTableDataCell>
                <CTableDataCell>{entrepreneur.formeJuridique}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Nombre Emplois Crees</CTableDataCell>
                <CTableDataCell>{entrepreneur.nombreEmploisCrees}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Coût Projet</CTableDataCell>
                <CTableDataCell>{entrepreneur.coutProjet}</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>

          </CCardBody>
          </CCard>

        </CCol>
        <CCol>
          <CCard>
          <CCardHeader className="bg-dark text-light">Activités avec Redstart Tunisie</CCardHeader>
          <CCardBody>
          <CTable>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Nombre Heures Formation Collective</CTableDataCell>
                <CTableDataCell>{entrepreneur.nombreHeuresFormationCollective}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Nombre Heures Formation Individuelle</CTableDataCell>
                <CTableDataCell>{entrepreneur.nombreHeuresFormationIndividuelle}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Objectifs Financement</CTableDataCell>
                <CTableDataCell>{entrepreneur.objectifsFinancement}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Etat Avancement Projets</CTableDataCell>
                <CTableDataCell>{entrepreneur.etatAvancementProjets}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Autre Financement</CTableDataCell>
                <CTableDataCell>{entrepreneur.autreFinancement}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Organisme Financement</CTableDataCell>
                <CTableDataCell>{entrepreneur.organismeFinancement}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Financement Decaisse</CTableDataCell>
                <CTableDataCell>{entrepreneur.financementDecaisse}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Date Decaissement</CTableDataCell>
                <CTableDataCell>
                {new Date(entrepreneur.dateDecaissement).toLocaleDateString()}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Montant Financement Accorde</CTableDataCell>
                <CTableDataCell>{entrepreneur.montantFinancementAccorde}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row"><CIcon icon={cilFont}/></CTableHeaderCell>
                <CTableDataCell>Blacklisted</CTableDataCell>
                <CTableDataCell>{entrepreneur.blacklisted}</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>


          </CCardBody>
          </CCard>

        </CCol>
      </CRow>
      <br/>

    </>
  );
};

export default EntrepreneurDetails;
