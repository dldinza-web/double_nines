import * as React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const ReservationList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rows = [
    {
      "id": "1",
      "person": {
        "fullName": "Jonell Schmitt"
      },
      "vehicle": {
        "vin": "GSKYPXDV1GEP54873"
      },
      "locationFrom": {
        "address": "361 Gulgowski Spurs, New Roscoeland, Wisconsin, 73247, YE"
      },
      "departureTime": "2022-10-11T15:57:01Z",
      "locationTo": {
        "address": "555 Jewel Dale, South Linda, North Dakota, 63778, SX"
      }
    },
    {
      "id": "2",
      "person": {
        "fullName": "Londa Harber"
      },
      "vehicle": {
        "vin": "KKLJJ0V9PNJP72018"
      },
      "locationFrom": {
        "address": "649 Duane Extensions, South Tristan, North Dakota, 30515, VA"
      },
      "departureTime": "2022-10-11T16:08:38Z",
      "locationTo": {
        "address": "4110 Kertzmann Road, East Murrayport, Iowa, 35395, AW"
      }
    },
    {
      "id": "3",
      "person": {
        "fullName": "Tamie Hegmann"
      },
      "vehicle": {
        "vin": "N0PMWM3FKPB682063"
      },
      "locationFrom": {
        "address": "68828 Chet Heights, Jacobsonside, Oregon, 53562, JP"
      },
      "departureTime": "2022-10-11T15:46:49Z",
      "locationTo": {
        "address": "4546 Lelia Glens, Lake Ricardo, New Jersey, 29775, PE"
      }
    }
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Driver</TableCell>
              <TableCell align="right">Vehicle VIN</TableCell>
              <TableCell align="right">From</TableCell>
              <TableCell align="right">Departure Date and Time</TableCell>
              <TableCell align="right">To</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.person.fullName}
                </TableCell>
                <TableCell align="right">{row.vehicle.vin}</TableCell>
                <TableCell align="right">{row.locationFrom.address}</TableCell>
                <TableCell align="right">{row.departureTime}</TableCell>
                <TableCell align="right">{row.locationTo.address}</TableCell>
                <TableCell align="center">
                <Stack spacing={2} direction="row" onClick={preventDefault}>
                  <Link href="#">Edit</Link>
                  <Link href="#" onClick={handleClickOpen}>Remove</Link>
                </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ReservationList
