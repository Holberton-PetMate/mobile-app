import SettingsList from '../components/SettingsList';
import PageHeading from '../components/PageHeading';
import ModalCard from '../components/ModalCard';
import { TextField, InputAdornment } from '@mui/material';
import { useEffect, useState } from 'react';
import RoundedButton from '../components/RoundedButton';
import { Edit } from '../components/Icons';
import dayjs from 'dayjs';
import FeedingTimesApi, { FeedingTimesProps } from '../lib/FeedingTimes';

const SettingsPage: React.FC = () => {
  const [time, setTime] = useState<string>(dayjs().format('HH:mm'));
  const [quantity, setQuantity] = useState<number | null>(null);
  const [createModalState, setCreateModalState] = useState<boolean>(false);
  const [feedingtimes, setFeedingTimes] = useState<FeedingTimesProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = await FeedingTimesApi.getFeedingTimes();
      console.log(response.data);
      setFeedingTimes(response.data as FeedingTimesProps[]);
    })();
  }, []);

  const validateQuantity = (e: any) => {
    const value = e.target.value;
    setQuantity(value);
    if (value === undefined) return;
    if (value < 0) {
      e.target.value = 0;
    } else if (value > 500) {
      e.target.value = 500;
    }
  };

  const onSubmit = () => {
    console.log({
      time,
      quantity,
    });
  };

  return (
    <>
      <PageHeading backUrl="/my-petmates" title="Settings" />
      <SettingsList  feedingTimes={feedingtimes}/>
      <div className="roundedButtonContainer">
        <RoundedButton onClick={() => setCreateModalState(true)} />
      </div>
      <ModalCard
        isActive={createModalState}
        action="create"
        title="New feeding time"
        onSubmit={onSubmit}
        closeModal={() => setCreateModalState(false)}
        style={{ minHeight: '350px' }}
      >
        <TextField
          defaultValue={time}
          className="time"
          label="Alarm clock"
          type="time"
          InputLabelProps={{ shrink: true }}
          onChange={(e: any) => setTime(e.target.value)}
          // 5 min
          inputProps={{ step: 300 }}
          sx={{ width: '100%', marginBottom: '0.5rem' }}
        />
        <TextField
          label="Quantity of food"
          defaultValue=""
          id="outlined-start-adornment"
          sx={{ m: 1, width: '100%' }}
          type="number"
          onChange={validateQuantity}
          InputProps={{
            endAdornment: <InputAdornment position="end">gr.</InputAdornment>,
            inputProps: { min: 0, max: 500 },
          }}
        />
      </ModalCard>
    </>
  );
};

export default SettingsPage;
