// import { TableContainer } from "@mui/material";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CompareProps({ propertyDetails }) {
  // const {
  //   homeType,
  //   yearBuilt,
  //   livingArea,
  //   pricePerSquareFoot,
  //   monthlyHoaFee,
  //   hasGarage,
  //   bathrooms,
  //   bedrooms,
  // } = propertyDetails;

  // const rows = [
  //   {
  //     homeType,
  //     yearBuilt,
  //     livingArea,
  //     pricePerSquareFoot,
  //     monthlyHoaFee,
  //     hasGarage,
  //     bathrooms,
  //     bedrooms,
  //   },
  // ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Property</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            > */}
          <TableCell component="th" scope="row">
            {/* {row.name} */}
          </TableCell>
          <TableCell align="right">Home Type</TableCell>
          <TableCell align="right">Year Built</TableCell>
          <TableCell align="right">Living Area</TableCell>
          <TableCell align="right">Price per sqft</TableCell>
          {/* </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CompareProps;
