import { Grid, Autocomplete, TextField } from '@mui/material';
import React from 'react';


const exchangeRates = {
    "BRL": 0.18,
    "GBP": 1.13,
    "JPY": 0.0071,
    "MAD": 0.091,
    "NZD": 0.6,
    "USD": 0.92,
    "EUR": 1
} 

const SelectCountry = (props) => {
    const {value, setValue, label} = props;

    const countries = Object.keys(exchangeRates);

    return (
        <Grid item xs= {12} md= {3}> <Autocomplete
           value={value}
           disableClearable
           onChange={(event, newValue) => {
                setValue(newValue);}}
           options={countries}
           renderInput={(params) => <TextField {...params} label={label} />}        
      /> </Grid>
    )
}

export default SelectCountry;
