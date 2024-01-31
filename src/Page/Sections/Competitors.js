import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Theme from '../../Assets/theme'
import { CloseRounded, DoneRounded } from '@mui/icons-material';

function createData(name,price, Typofbusiness, Dutyhour, Vehicle, Services,minOfpeople,Location) {
    return { name, Typofbusiness, Dutyhour, Vehicle, Services,minOfpeople,Location,price };
  }
  const rows = [
    createData('Around You','start from 2500SAR', 'B2B', 'Free', 'Varaiery','Chauffeur and TourGuid',0,'Riyadh'),
    createData('Naylam','start from 1680SAR', 'B2C', 'Free', 'Limited', 'Chauffeur',0,'Multi'),
    createData('88 destinations','start from 2302.8SAR', 'B2C', 'Schedualed', 'Limited', 'TourGuid',1,'Multi'),
    createData('RiyadhTrip','12','B2C', 'Schedualed', 'Limited', 'TourGuid',1,'Multi'),
  ];
function Competitors(props) {
  const {text} = props;
    function selected(name,isHeader=false){
        if(isHeader){
            if(name === 'Around You'){
                return {borderColor:`${Theme.Accent}`,color:`${Theme.AccentLight}`,fontWeight:500,fontSize:'1rem',pl:'4em'}
            }else{
                return {pl:'4em',color:`${Theme.Secondary}`,borderColor:`${Theme.Secondary}29`}
            }
        }else{
            if (name === 'Around You'){
                return {borderColor:`${Theme.Accent}`,color:`${Theme.AccentLight}`,fontWeight:500,fontSize:'1rem'}
            }else{
                return {color:`${Theme.Secondary}`,borderColor:`${Theme.Secondary}29`}
            }
         }
    }
  return (
    <React.Fragment>
        <TableContainer elevation={0} sx={{borderRadius:'20px',backgroundColor:`${Theme.PrimaryLight}`}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow sx={{pt:'4em'}}>
                <TableCell sx={{pl:'4em',borderColor:`${Theme.Accent}`}} > </TableCell>
                <TableCell sx={{borderColor:`${Theme.Accent}`,color:`${Theme.Secondary}`}} align="left">Type of business</TableCell>
                <TableCell sx={{borderColor:`${Theme.Accent}`,color:`${Theme.Secondary}`}} align="left">Duty hour&nbsp;</TableCell>
                <TableCell sx={{borderColor:`${Theme.Accent}`,color:`${Theme.Secondary}`}} align="left">Vehicle&nbsp;</TableCell>
                <TableCell sx={{borderColor:`${Theme.Accent}`,color:`${Theme.Secondary}`,width:'100px'}} align="left">Services&nbsp;</TableCell>
                <TableCell sx={{borderColor:`${Theme.Accent}`,color:`${Theme.Secondary}`}} align="left">Minimum of people&nbsp;</TableCell>
                <TableCell sx={{borderColor:`${Theme.Accent}`,color:`${Theme.Secondary}`}} align="left">Location&nbsp;</TableCell>
                <TableCell sx={{pr:'4em',borderColor:`${Theme.Accent}`,color:`${Theme.Secondary}`}} align="left">Price&nbsp;</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 },backgroundColor:(row.name == 'Around You'? `${Theme.AccentLighter}`:'') }}
                >
                <TableCell sx={selected(row.name,true)} component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell sx={selected(row.name)} align="left">{row.Typofbusiness}</TableCell>
                <TableCell sx={selected(row.name)} align="left">{row.Dutyhour}</TableCell>
                <TableCell sx={selected(row.name)} align="left">{row.Vehicle}</TableCell>
                <TableCell sx={selected(row.name)} align="left">{row.Services}</TableCell>
                <TableCell sx={selected(row.name)} align="center">
                {row.minOfpeople == 0 ? <CloseRounded></CloseRounded> : <DoneRounded></DoneRounded>}
                </TableCell>
                <TableCell  sx={selected(row.name)}  align="left">{row.Location}</TableCell>
                <TableCell  sx={selected(row.name)}  align="left">{row.price}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>    
    </React.Fragment>
  );
}
Competitors.prototypes = {
  text: PropTypes.string,
};
export default Competitors;
