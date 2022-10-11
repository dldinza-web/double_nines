import * as React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as Styles from './reservation-form.styles'
import moment from 'moment'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ReservationForm = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <FormControl fullWidth>
          <b>Created By:</b>
          User's Full Name
      </FormControl>

      <Styles.FormControlSeparator />

      <FormControl fullWidth>
        <InputLabel id="label-drivers">Drivers</InputLabel>
        <Select
          labelId="drivers-label"
          id="select-drivers"
          value={undefined}
          label="Drivers"
          onChange={() => {}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Styles.FormControlSeparator />

      <FormControl fullWidth>
        <InputLabel id="label-vehicles">Vehicles</InputLabel>
        <Select
          labelId="vehicles-label"
          id="select-vehicles"
          value={undefined}
          label="Vehicles"
          onChange={() => {}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Styles.FormControlSeparator />

      <FormControl fullWidth>
        <InputLabel id="label-location-from">Address From</InputLabel>
        <Select
          labelId="location-from-label"
          id="select-location-from"
          value={undefined}
          label="Address From"
          onChange={() => {}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Styles.FormControlSeparator />

      <FormControl fullWidth>
        <DateTimePicker
          label="Departure Date and Time"
          value={moment()}
          onChange={() => {}}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormControl>

      <Styles.FormControlSeparator />

      <FormControl fullWidth>
        <InputLabel id="label-location-from">Address To</InputLabel>
        <Select
          labelId="location-to-label"
          id="select-location-to"
          value={undefined}
          label="Address To"
          onChange={() => {}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Styles.FormControlSeparator />

      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <Button variant="outlined">Cancel</Button>

        <Button variant="contained">Save</Button>
      </Stack>

    </LocalizationProvider>
  )
}

export default ReservationForm
