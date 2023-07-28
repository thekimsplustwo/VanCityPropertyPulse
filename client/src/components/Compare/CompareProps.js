import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import { Typography, createTheme } from '@mui/material';
import Grid from '@mui/material/Grid';

function createData(name, value) {
  return { name, value };
}
function CompareProps({ propertyDetails }) {
  const {
    address,
    homeType,
    yearBuilt,
    livingArea,
    pricePerSquareFoot,
    monthlyHoaFee,
    hasGarage,
    bathrooms,
    bedrooms,
  } = propertyDetails;

  const rows = [
    createData('Home Address', address?.streetAddress ?? 'No data'),
    createData('Home Type', homeType ?? 'No data'),
    createData('Year Built', yearBuilt ?? 'No data'),
    createData('Living Area', livingArea ?? 'No data'),
    createData('Price per sqft', pricePerSquareFoot ?? 'No data'),
    createData('Monthly Strata Fee', monthlyHoaFee ?? 'No data'),
    hasGarage
      ? createData('Garage', 'Has Garage')
      : createData('Garage', 'No Garage'),
    createData('Bathrooms', bathrooms ?? 'No data'),
    createData('Bedrooms', bedrooms ?? 'No data'),
  ];

  return (
    <StyledContainer>
      <StyledTableContainer component={Paper} style={{ width: 500 }}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={5}
                style={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                Property Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const StyledTableContainer = styled(TableContainer)`
  overflow: hidden;
  max-width: {
     {
      width: '100%';
    }
  }
`;

export default CompareProps;
