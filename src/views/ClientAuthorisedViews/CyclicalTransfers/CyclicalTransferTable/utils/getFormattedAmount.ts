export const getFormattedAmount = (amount: string | number) => {
  if (typeof amount === 'string') {
    const stringValueAmount = amount.split(' ')[0];
    return parseFloat(stringValueAmount);
  }

  return 0;
};
