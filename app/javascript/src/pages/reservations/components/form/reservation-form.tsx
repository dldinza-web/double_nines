import * as React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as Styles from '../../../../components/shared/form.styles'
import moment, { Moment } from 'moment'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ApolloError, useMutation, useQuery } from '@apollo/client';
import { queryLocation, queryPeople, queryUser, queryVehicles } from '../../graphql/queries';
import { mutationCreateReservation, mutationUpdateReservation } from '../../graphql/mutations'
import Alert from '@mui/material/Alert';
import { AlertMessage, Location, Person, InputReservation, Vehicle, RecordReservation } from '../../graphql/types';
import { constReservation } from '../../constants/reservation.constants';

interface ReservationFormProps {
  onAfterSavingReservation: Function,
  reservation: InputReservation
}

const ReservationForm = (props: ReservationFormProps) => {
  const [reservation, setReservation] = React.useState<InputReservation>(props.reservation)
  const [messages, setMessages] = React.useState<AlertMessage[]>([])

  const { loading: loadingPeopleList, error: errorPeopleList, data: dataPeopleList } = useQuery(queryPeople);
  const { loading: loadingVehiclesList, error: errorVehiclesList, data: dataVehiclesList } = useQuery(queryVehicles);
  const { loading: loadingLocationsList, error: errorLocationsList, data: dataLocationsList } = useQuery(queryLocation);
  const { loading: loadingCurrentUser, error: errorCurrentUser, data: dataCurrentUser } = useQuery(queryUser);

  if (errorPeopleList) setMessages([{ type: 'error', message: `${errorPeopleList}` } ])
  if (errorVehiclesList) setMessages([{ type: 'error', message: `${errorVehiclesList}` } ])
  if (errorLocationsList) setMessages([{ type: 'error', message: `${errorLocationsList}` } ])
  if (errorCurrentUser) setMessages([{ type: 'error', message: `${errorCurrentUser}` } ])

  React.useEffect(() => {
    setReservation(props.reservation)
  }, [props.reservation])

  const resetMessages = () => {
    setMessages([])
  }

  const onAfterSavingReservation = (message: string) => {
    setMessages([{ type: "success", message: message }])
    setTimeout(resetMessages, 3 * 1000)

    resetForm()

    props.onAfterSavingReservation()
  }

  const onSavingFailure = (message: ApolloError | string) => {
    let results = new String(message)
    results = results.replace('Error: ', '')
    results = results.replace('Validation failed: ', '')

    const errors = results.split(', ')

    setMessages(errors.map((msg: string) => ({ type: "error", message: msg })))
  }

  //mutations
  const [gqlCreateReservation] = useMutation(mutationCreateReservation, {
    onCompleted: () => onAfterSavingReservation("The Reservation has been created successfully."),
    onError: onSavingFailure
  })

  const [gqlUpdateReservation] = useMutation(mutationUpdateReservation, {
    onCompleted: () => onAfterSavingReservation("The Reservation has been updated successfully."),
    onError: onSavingFailure
  })

  const onSelectDriver = (e: SelectChangeEvent) => {
    setReservation({
      ...reservation,
      personId: parseInt(e.target.value)
    })
  }

  const onSelectVehicle = (e: SelectChangeEvent) => {
    setReservation({
      ...reservation,
      vehicleId: parseInt(e.target.value)
    })
  }

  const onSelectAddressFrom = (e: SelectChangeEvent) => {
    setReservation({
      ...reservation,
      locationFromId: parseInt(e.target.value)
    })
  }

  const onSelectAddressTo = (e: SelectChangeEvent) => {
    setReservation({
      ...reservation,
      locationToId: parseInt(e.target.value)
    })
  }

  const onChangeDepartureTime = (value: string | Moment | null) => {
    setReservation({
      ...reservation,
      departureTime: moment.isMoment(value) ? value.format() : value
    })
  }

  const onCancelReservation = () => {
    resetForm()
    setMessages([])
  }

  const resetForm = () => {
    setReservation(constReservation)
  }

  const onSaveReservation = () => {
    setMessages([])
    reservation.id
      ? gqlUpdateReservation({ variables: reservation })
      : gqlCreateReservation({ variables: reservation })
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <FormControl fullWidth>
          <b>Created By:</b>
          {!loadingCurrentUser && dataCurrentUser.user.person.fullName}
      </FormControl>

      <Styles.FormControlSeparator />

      <FormControl fullWidth>
        <InputLabel id="label-drivers">Drivers</InputLabel>
        <Select
          id="select-drivers"
          labelId="drivers-label"
          value={reservation?.personId as string | ''}
          label="Drivers"
          onChange={onSelectDriver}
        >
          { !loadingPeopleList && dataPeopleList.people.map((item: Person) => (
            <MenuItem value={item.id} key={item.id}>{item.fullName}</MenuItem>
          )) }
        </Select>
      </FormControl>

      <Styles.FormControlSeparator />

      <FormControl fullWidth>
        <InputLabel id="label-vehicles">Vehicles</InputLabel>
        <Select
          id="select-vehicles"
          labelId="vehicles-label"
          value={reservation.vehicleId as string | ''}
          label="Vehicles"
          onChange={onSelectVehicle}
        >
          { !loadingVehiclesList && dataVehiclesList.vehicles.map((item: Vehicle) => (
            <MenuItem value={item.id} key={item.id}>{`${item.vin}: ${item.make}-${item.model}`}</MenuItem>
          )) }
        </Select>
      </FormControl>

      <Styles.FormControlSeparator />

      <FormControl fullWidth>
        <InputLabel id="label-location-from">Address From</InputLabel>
        <Select
          id="select-location-from"
          labelId="location-from-label"
          value={reservation.locationFromId as string | ''}
          label="Address From"
          onChange={onSelectAddressFrom}
        >
          { !loadingLocationsList && dataLocationsList.locations.map((item: Location) => (
            <MenuItem value={item.id} key={item.id}>{item.address}</MenuItem>
          )) }
        </Select>
      </FormControl>

      <Styles.FormControlSeparator />

      <FormControl fullWidth>
        <DateTimePicker
          label="Departure Date and Time"
          value={reservation.departureTime}
          onChange={onChangeDepartureTime}
          renderInput={(params) =>
            <TextField id="input-departureTime" {...params} />
          }
        />
      </FormControl>

      <Styles.FormControlSeparator />

      <FormControl fullWidth>
        <InputLabel id="label-location-to">Address To</InputLabel>
        <Select
          labelId="location-to-label"
          id="select-location-to"
          value={reservation.locationToId as string | ''}
          label="Address To"
          onChange={onSelectAddressTo}
        >
          { !loadingLocationsList && dataLocationsList.locations.map((item: Location) => (
            <MenuItem value={item.id} key={item.id}>{item.address}</MenuItem>
          )) }
        </Select>
      </FormControl>

      <Styles.FormControlSeparator />

      {messages.length > 0 &&
        <Stack sx={{ width: '100%' }} spacing={2}>
          { messages.map((msg: AlertMessage, index: number) => (
            <Alert severity={msg.type} key={index}>{msg.message}</Alert>
          )) }
        </Stack>
      }

      <Styles.FormControlSeparator />

      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <Button variant="outlined" onClick={onCancelReservation}>Cancel</Button>

        <Button
          variant="contained"
          onClick={onSaveReservation}
          id="btn-submit"
        >Save</Button>
      </Stack>

    </LocalizationProvider>
  )
}

export default ReservationForm
