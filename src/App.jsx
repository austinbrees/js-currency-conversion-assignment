import { Button, Container, Typography, Grid, Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import InputAmount from './components/inputAmount'
import SelectCountry from './components/selectCountry'
import SwitchCurrency from './components/switchCurrency'
import { CurrencyContext } from './context/currencyContext'


let exchange = (from, to, value) => {
  let result = 0
  const exchangeRate = {
      "BRL": 0.18,
      "GBP": 1.13,
      "JPY": 0.0071,
      "MAD": 0.091,
      "NZD": 0.6,
      "USD": 0.92,
      "EUR": 1
  }
      if (to in exchangeRate){
          if (to == "EUR"){
              result = value * exchangeRate[from]
              return result
          }
          else{
              let newRate = exchangeRate[from] / exchangeRate[to]
              result = value * newRate
              return result
          }
      }
      else{
          return "NaN"
      }
  }

function App() {
  const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount,
  } = useContext(CurrencyContext);
  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[0];
  const codeToCurrency = toCurrency.split(" ")[0];

  useEffect(() => {
    setResultCurrency(exchange(codeFromCurrency, codeToCurrency, firstAmount))
  } , [fromCurrency, toCurrency, firstAmount])

  const boxStyle = {
    background: "#fdfdfd",
    marginTop: "10rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative",
  }

  return (
    <Container maxWidth="md" sx={boxStyle} >
      <Typography variant= 'h5' sx= {{marginBottom: "2rem"}}> Convert Your Currencies Here! </Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From"/>
        <SwitchCurrency />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label="To"/>
      </Grid>

      {firstAmount ? (
        <Box sx={{ textAlign: "left", marginTop: "1rem"}}>
          <Typography> {firstAmount} {fromCurrency}= </Typography>
            <Typography variant="h5" sx={{marginTop: "5px", fontWeight: "bold"}}> {resultCurrency} {resultCurrency} </Typography>
        </Box> ) : ""}
    </Container>
  )
}

export default App
