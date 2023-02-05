import { Grid, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { CurrencyContext } from '../context/currencyContext';

const InputAmount = () => {
    const {firstAmount, setFirstAmount} = useContext(CurrencyContext);
    return (
        <Grid item xs={12} md > 
            <TextField 
            value={firstAmount}
            onChange={(event) => setFirstAmount(event.target.value)}
            label= "Amount"
            fullWidth
            InputProps={{ type: "number",
            startAdornment: <InputAdornment position="start"> $ </InputAdornment>}}
            />

        
         </Grid> 
    )
    }
    
export default InputAmount;
