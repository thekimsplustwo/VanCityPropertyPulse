import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

function createData(name, value) {
  return { name, value };
}
function CompareProps({ propertyDetails }) {
  const {
    daysOnZillow,
    address,
    propertyType,
    unit,
    livingArea,
    price,
    lotAreaValue,
    bathrooms,
    bedrooms,
  } = propertyDetails;
  let postedText;
  if (!daysOnZillow || daysOnZillow === -1) {
    postedText = 'N/A';
  } else {
    postedText = `${daysOnZillow} ago`;
  }

  const rows = [
    createData('Posted', postedText),
    createData('Home Address', address ?? 'N/A'),
    createData('Home Type', propertyType ?? 'N/A'),
    createData('Unit', unit ?? 'N/A'),
    createData('Living Area', livingArea ? `${livingArea} sqft` : 'N/A'),
    createData('Price', price ? `$${price} CAD` : 'N/A'),
    createData(
      'Lot Area Value',
      lotAreaValue && lotAreaValue !== 0 ? `$${lotAreaValue} CAD` : 'N/A'
    ),
    createData('Bathrooms', bathrooms ?? 'N/A'),
    createData('Bedrooms', bedrooms ?? 'N/A'),
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
