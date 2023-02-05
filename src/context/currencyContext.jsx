import { createContext, useState } from 'react';

export const CurrencyContext = createContext();

const CurrencyProvider = ({children}) => {
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [firstAmount, setFirstAmount] = useState("");
    const [resultCurrency, setResultCurrency] = useState(0);

    const value = {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount,
        setResultCurrency
    }

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};

export default CurrencyProvider;