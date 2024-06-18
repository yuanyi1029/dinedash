const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { currency: 'MYR', style: 'currency' });

const formatCurrency = (value) => { 
  return CURRENCY_FORMATTER.format(value);
}

export { formatCurrency };