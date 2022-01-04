import React, { FC } from 'react';

interface ReadonlyInputProps {
  label?: string;
  value?: string | number;
  additionalContent?: string;
}

const ReadonlyInput: FC<ReadonlyInputProps> = ({ label, value, additionalContent, children }) => (
  <section style={{ width: '95%' }} className='text-break'>
    <span className='fw-bold'>{label}</span>
    <div className='w-100 p-1'/>
    {children || `${value || '-'}`} <span>{additionalContent}</span>
  </section>
);

export default ReadonlyInput;
