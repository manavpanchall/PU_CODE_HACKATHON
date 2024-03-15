import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Team() {
 const [inputData, setInputData] = useState([0, 0, 0, 0]); // Initialize with default values
 const [prediction, setPrediction] = useState(null);

 const handleInputChange = (index, event) => {
    const newInputData = [...inputData];
    newInputData[index] = event.target.value;
    setInputData(newInputData);
 };

 const handlePredict = () => {
    // Simulate a prediction based on the input data
    // For demonstration, we'll randomly select an answer
    const randomAnswer = Math.random() < 0.5 ? "Your database is healthy" : "Your database needs optimization";
    setPrediction(randomAnswer);
 };

 return (
    <Box m={2} p={2}>
      <TextField
        label="Shared Buffers"
        variant="outlined"
        value={inputData[0]}
        onChange={(event) => handleInputChange(0, event)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Max work Proccesses"
        variant="outlined"
        value={inputData[1]}
        onChange={(event) => handleInputChange(1, event)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="AutoVacuum Max Workers"
        variant="outlined"
        value={inputData[2]}
        onChange={(event) => handleInputChange(2, event)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Work memory"
        variant="outlined"
        value={inputData[3]}
        onChange={(event) => handleInputChange(3, event)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handlePredict} style={{ marginTop: '20px' }}>
        Predict
      </Button>
      {prediction && <p>{prediction}</p>}
    </Box>
 );
}

export default Team;
