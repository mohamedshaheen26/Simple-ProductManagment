interface Iprops {
  message: string;
}

const ErrorMsg = ({ message }: Iprops) => {
  return message ? (
    <span className='block text-red-700 font-semibold text-sm'>{message}</span>
  ) : null;
};

export default ErrorMsg;
