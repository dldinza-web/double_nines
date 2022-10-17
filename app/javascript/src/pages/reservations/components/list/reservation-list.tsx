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
import DialogTitle from '@mui/material/DialogTitle';
import { AlertMessage, InputReservation, RecordReservation } from '../../graphql/types';
import moment from 'moment';
import { ApolloError, useMutation } from '@apollo/client';
import { mutationRemoveReservation } from '../../graphql/mutations';
import Alert from '@mui/material/Alert';
import * as Styles from 'src/components/shared/form.styles'

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

interface ReservationListPros {
  reservations: RecordReservation[]
  onSetEditReservation: (row: InputReservation) => void
  onAfterRemovingReservation: Function
}

const ReservationList = (props: ReservationListPros) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [messages, setMessages] = React.useState<AlertMessage[]>([])
  const [reservationRemove, setReservationRemove] = React.useState<RecordReservation | null>(null)

  const onAfterRemovingReservation = () => {
    setMessages([{
      type: 'success',
      message: 'The reservation has been remove successfully.'
    }])

    setReservationRemove(null)

    props.onAfterRemovingReservation()
  }

  const onRemoveReservationFailure = (message: ApolloError) => {
    let results = new String(message)
    results = results.replace('Error: ', '')
    results = results.replace('Validation failed: ', '')

    const errors = results.split(', ')

    setMessages(errors.map((msg: string) => ({ type: "error", message: msg })))
  }

  const [ gqlRemoveReservation ] = useMutation(mutationRemoveReservation, {
    onCompleted: onAfterRemovingReservation,
    onError: onRemoveReservationFailure
  })

  const onRemove = (row: RecordReservation) => {
    setReservationRemove(row)
    setOpenDialog(true);
  };

  const onCloseDialog = (confirmed: boolean) => {
    if (confirmed) {
      gqlRemoveReservation({ variables: { reservationId: reservationRemove?.id } })
    }
    setOpenDialog(false);
  };

  const onEdit = (row: RecordReservation) => {
    props.onSetEditReservation({
      id: row.id as number,
      vehicleId: row.vehicle.id,
      locationFromId: row.locationFrom.id,
      locationToId: row.locationTo.id,
      departureTime: row.departureTime,
      personId: row.person.id
    })
  }

  const confirmationDialog = reservationRemove && <Dialog
      open={openDialog}
      onClose={() => onCloseDialog(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Delete confirmation"}
      </DialogTitle>
      <DialogContent>
          <p>Do you confirm to remove the following reservation?</p>

          <p><b>Driver: </b> <span>{reservationRemove.person.fullName}</span></p>
          <p><b>Vehicle VIN: </b><span>{reservationRemove.vehicle.vin}</span></p>
          <p><b>Location From: </b><span>{reservationRemove.locationFrom.address}</span></p>
          <p><b>Departure Date and Time: </b><span>{moment(reservationRemove.departureTime).format('llll')}</span></p>
          <p><b>Location To: </b><span>{reservationRemove.locationTo.address}</span></p>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onCloseDialog(true)} color="error" variant="outlined">Delete</Button>
        <Button onClick={() => onCloseDialog(false)} variant="outlined">Cancel</Button>
      </DialogActions>
    </Dialog>

  return (
    <>
      {messages.length > 0 &&
        <>
          <Stack sx={{ width: '100%' }} spacing={2}>
            { messages.map((msg: AlertMessage, index: number) => (
              <Alert severity={msg.type} key={index}>{msg.message}</Alert>
            )) }
          </Stack>

          <Styles.FormControlSeparator />
        </>
      }


      <b>Total: {props.reservations && props.reservations.length}</b>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="reservations-table" id="reservations-table" >
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
            {props.reservations && props.reservations.map((row: any) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell scope="row">{row.person.fullName}</TableCell>
                <TableCell align="right">{row.vehicle.vin}</TableCell>
                <TableCell align="right">{row.locationFrom.address}</TableCell>
                <TableCell align="right">{moment(row.departureTime).format('llll')}</TableCell>
                <TableCell align="right">{row.locationTo.address}</TableCell>
                <TableCell align="center">
                <Stack spacing={2} direction="row" onClick={preventDefault}>
                  <Link href="#" onClick={() => onEdit(row)}>Edit</Link>
                  <Link href="#" onClick={() => onRemove(row)}>Remove</Link>
                </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      { confirmationDialog }
    </>
  )
}

export default ReservationList
