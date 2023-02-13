import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';


export default function NativePickers() {
  const current = dayjs();
  const time = current.format("HH:mm");
  
  return (
      <TextField
        className="time"
        //label="Alarm clock"
        type="time"
        defaultValue={time}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
      />
  );
}