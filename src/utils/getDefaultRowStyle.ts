export const getDefaultRowStyle = (rowIndex: number) => {
  const sharedClasses = 'border-0 row-transition';

  if (rowIndex % 2 === 0) {
    return `bg-dark ${sharedClasses}`;
  }
  return `bg-secondary-dark ${sharedClasses}`;
};