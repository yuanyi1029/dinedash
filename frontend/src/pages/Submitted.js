import { RedButton } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import cooking from '../assets/cooking.png';

const Submitted = () => { 
  const { resetCart } = useCart(); 
  const navigate = useNavigate(); 

  const newOnClick = () => { 
    resetCart();
    const path = '/order';
    navigate(path);
  }

  return ( 
    <article className='container full-screen flex flex-col justify-center gap-8'>
      <section id='start-div' className='flex flex-col items-center gap-4 bg-green-secondary p-8 rounded-2xl'>
        <img src={ cooking } alt='Cooking' className='w-96 bg-transparent'/> 
        <h1 className='text-center bg-green-secondary text-yellow'>Your Order Has Been Submitted,<br />We are Preparing Your Order!</h1>
        <div className='flex gap-6 justify-center bg-green-secondary'> 
          <RedButton onclick={ newOnClick } text='New Order' /> 
        </div>
      </section> 
    </article>
  )
}

export { Submitted };