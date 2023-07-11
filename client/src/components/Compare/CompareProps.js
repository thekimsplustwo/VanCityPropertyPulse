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
    createData('Home Type', homeType),
    createData('Year Built', yearBuilt),
    createData('Living Area', livingArea),
    createData('Price per sqft', pricePerSquareFoot),
    createData('Monthly Strata Fee', monthlyHoaFee),
    createData('Garage', hasGarage),
    createData('Bathrooms', bathrooms),
    createData('Bedrooms', bedrooms),
  ];
  //   return (
  //     <Main>
  //       <Box
  //         sx={{
  //           width: '100%',
  //           height: '100vh',
  //           paddingTop: '5em',
  //         }}
  //       >
  //         <Wrapper>
  //           <Grid container spacing={20}>
  //             <Grid item xs={12} sm={6}>
  //               <div
  //                 style={{
  //                   textAlign: 'left',
  //                   marginBottom: '2rem',
  //                   marginRight: '-5rem',
  //                 }}
  //               >
  //                 <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
  //                   <InfoRow>
  //                     <Bold>Home Type: </Bold> {homeType}
  //                   </InfoRow>
  //                   <InfoRow>
  //                     <Bold>Year Built: </Bold> {yearBuilt}
  //                   </InfoRow>
  //                   <InfoRow>
  //                     <Bold> House Age: </Bold>
  //                     {new Date().getFullYear() - yearBuilt}
  //                   </InfoRow>
  //                   <InfoRow>
  //                     <Bold>Living Area: </Bold> {livingArea} sqft
  //                   </InfoRow>
  //                   <InfoRow>
  //                     <Bold>Price Per sqft: </Bold> {pricePerSquareFoot} CAD
  //                   </InfoRow>
  //                   <InfoRow>
  //                     <Bold>Strata Fee: </Bold> {monthlyHoaFee} CAD
  //                   </InfoRow>
  //                   <InfoRow>
  //                     <Bold>Garage: </Bold> {hasGarage === true ? 'Yes' : 'No'}
  //                   </InfoRow>
  //                   <InfoRow>
  //                     <Bold>Bathrooms: </Bold> {bathrooms}
  //                   </InfoRow>
  //                   <InfoRow>
  //                     <Bold> Bedrooms: </Bold> {bedrooms}
  //                   </InfoRow>
  //                 </Typography>
  //               </div>
  //             </Grid>
  //           </Grid>
  //         </Wrapper>
  //       </Box>
  //     </Main>
  //   );
  // }
  // const Main = styled.div`
  //   width: 100%;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   padding: 30px;
  // `;

  // const InfoRow = styled.p`
  //   margin-bottom: 10px;
  // `;

  // const Wrapper = styled.div`
  //   border-radius: 15px;
  //   padding: 16px;
  //   min-width: 100%;
  //   width: fit-content;
  //   margin: -23px;
  //   background-color: white;
  //   text-align: center;
  //   box-shadow: 10px 10px #fbe8e9;
  //   display: inline-flex;
  //   flex-direction: row;
  // `;

  // const Bold = styled.b`
  //   font-weight: bold;
  //   margin-top: 30px;
  // `;
  // const BoldHeader = styled.h2`
  //   font-weight: bold;
  //   font-size: 25px;
  //   margin-bottom: 20px;
  // `;

  // const Box = styled.div`
  //   padding: 20px;
  //   width: 100%;
  //   display: flex;
  //   flex-direction: column;
  //   background-color: "#f5f5f5"";
  //   color: white;
  //   font-size: 20px;
  //   font-weight: bold;
  //   border-radius: 10px;
  //   box-shadow: 10px 10px #fbe8e9;
  // `;

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
    <StyledContainer>
      <TableContainer
        component={Paper}
        // style={({ maxHeight: '280px' }, { maxWidth: '400px' })}
      >
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} style={{ textAlign: 'left' }}>
                Home Address
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{propertyDetails.homeType}</TableCell>
                <TableCell align="right">{row.yearBuilt}</TableCell>
                <TableCell align="right">{row.livingArea}</TableCell>
                <TableCell align="right">{row.pricePerSquareFoot}</TableCell>
                <TableCell align="right">{row.monthlyHoaFee}</TableCell>
                <TableCell align="right">{row.hasGarage}</TableCell>
                <TableCell align="right">{row.bathrooms}</TableCell>
                <TableCell align="right">{row.bedrooms}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
`;

const Wrapper = styled.div`
  border-radius: 15px;
  padding: 16px;
  min-width: 100%;
  width: fit-content;
  margin: -23px;
  background-color: white;
  text-align: center;
  box-shadow: 10px 10px #fbe8e9;
  display: inline-flex;
  flex-direction: row;
`;

const Box = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: "#f5f5f5"";
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 10px 10px #fbe8e9;
`;

export default CompareProps;
