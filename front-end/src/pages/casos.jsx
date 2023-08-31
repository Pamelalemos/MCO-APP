import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEdit2 } from 'react-icons/fi';

const CasesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
`;

const TitleButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: #B6C3BD;
  color: #1E573B;
  border: none;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  top: -5rem;
  right: 23rem;
`;

const CaseListContainer = styled.div`
  width: 900px;
  height: 300px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  position: relative; 
  top: -3rem;
  right: 3rem;
`;

const CaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const CaseTableHeader = styled.th`
  border-bottom: 2px solid #ccc;
  padding: 0.5rem;
  font-family: 'Raleway', sans-serif;
  font-weight: thin;
  text-align: left;
  color: #32855C;
`;

const CaseTableData = styled.td`
  padding: 0.5rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
`;

const EditIcon = styled(FiEdit2)`
  cursor: pointer;
  color: #1E573B;
`;

const DividerRow = styled.tr`
  height: 1px;
  background-color: #ccc;
`;

const repeatedData = Array.from({ length: 6 }).map(() => ({
  date: '27-03-2023',
  hospital: 'Asignado',
  age: 'Adulto',
  surgery: 'Cardiovascular',
  anesthesia: 'General balanceada',
  details: 'Sangrado masivo',
}));

const Casos = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (index) => {
    setIsEditing(!isEditing);
  };

  const handleEditDetails = (index, value) => {
    const updatedData = [...repeatedData];
    updatedData[index].details = value;
    setRepeatedData(updatedData);
  };

  return (
    <CasesPageContainer>
      <TitleButton>Casos Registrados</TitleButton>
      <CaseListContainer>
        <CaseTable>
          <thead>
            <tr>
              <CaseTableHeader>Fecha</CaseTableHeader>
              <CaseTableHeader>Hospital</CaseTableHeader>
              <CaseTableHeader>Edad</CaseTableHeader>
              <CaseTableHeader>Cirugía</CaseTableHeader>
              <CaseTableHeader>Anestesia</CaseTableHeader>
              <CaseTableHeader>Detalles</CaseTableHeader>
              <CaseTableHeader></CaseTableHeader>
            </tr>
          </thead>
          <tbody>
            {repeatedData.map((caseData, index) => (
              <React.Fragment key={index}>
                <tr>
                  <CaseTableData>{caseData.date}</CaseTableData>
                  <CaseTableData>{caseData.hospital}</CaseTableData>
                  <CaseTableData>{caseData.age}</CaseTableData>
                  <CaseTableData>{caseData.surgery}</CaseTableData>
                  <CaseTableData>{caseData.anesthesia}</CaseTableData>
                  <CaseTableData>
                    {isEditing ? (
                      <input
                        type="text"
                        value={caseData.details}
                        onChange={(e) => handleEditDetails(index, e.target.value)}
                      />
                    ) : (
                      caseData.details
                    )}
                  </CaseTableData>
                  <CaseTableData>
                    <EditIcon onClick={() => handleEditClick(index)} />
                  </CaseTableData>
                </tr>
                {index !== repeatedData.length - 1 && <DividerRow key={`divider-${index}`} />}
              </React.Fragment>
            ))}
          </tbody>
        </CaseTable>
      </CaseListContainer>
    </CasesPageContainer>
  );
};

export default Casos;