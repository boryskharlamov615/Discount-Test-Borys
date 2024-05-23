import React from 'react';

interface HelperTextProps {
  message: string;
  isError: boolean;
}

const HelperText: React.FC<HelperTextProps> = (props: HelperTextProps) => {

  const {message, isError} = props;
  
  return (
    <p className={`mt-2 text-sm ${isError ? 'text-red-600' : 'text-green-600'}`}>
      {message}
    </p>
  );
};

export default HelperText;