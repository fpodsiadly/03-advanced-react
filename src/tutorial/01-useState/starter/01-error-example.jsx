const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count++;
    console.log(count);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        add
      </button>
    </div>
  );
};



export default ErrorExample;
