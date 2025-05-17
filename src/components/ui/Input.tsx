interface Iprops extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: Iprops) => {
  return (
    <input
      className='mt-1 block w-full p-2 rounded-md text-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
      {...rest}
    />
  );
};

export default Input;
