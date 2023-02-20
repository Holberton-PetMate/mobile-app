import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import '../styles/components/createPetMateForm.css';

interface CreatePetMateFormProps {
	setName: (name: string | null) => void;
	setPetMateId: (id: string | null) => void;
	setFood: (foodId: number | null) => void;
}

const CreatePetMateForm = ({ setName, setPetMateId, setFood }: CreatePetMateFormProps) => {
	return (
    <>
      <div className="pic-container">
        <img src="/assets/orange.png" alt="" />
      </div>

      <TextField
        label="Name"
        InputLabelProps={{ shrink: true }}
        onChange={(e: any) => setName(e.target.value)}
        inputProps={{ step: 300 }}
        sx={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <TextField
        label="PetMate Serial Code"
        InputLabelProps={{ shrink: true }}
        onChange={(e: any) => setPetMateId(e.target.value)}
        inputProps={{ step: 300 }}
        sx={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Food</InputLabel>
        <Select
          label="Age"
          defaultValue={''}
          onChange={(e: any) => setFood(e.target.value)}
        >
          <MenuItem value="1">DogChow</MenuItem>
          <MenuItem value="2">CatChow</MenuItem>
          <MenuItem value="3">Pedigree</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default CreatePetMateForm;
