
const Button = (prop) => {
    return (
      <>
        <button style={{  padding: '1% 2.5%',
    fontSize: '1.5rem',
    backgroundColor: 'rgb(255, 101, 45)',
    outline: 'none',
    border: 'none',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer'}}>{prop.name}</button>
      </>
    );
  };
  
  export default Button;
  