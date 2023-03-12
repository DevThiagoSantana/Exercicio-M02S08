import'./Footer.css';

export const Footer=() =>{
  return(
    <footer className='footer'>
      <p>RestaurantInDev | {new Date().getFullYear()}</p>
    </footer>
  );
};
