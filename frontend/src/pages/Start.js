import { RedButton } from '../components/Button';
import { useNavigate } from 'react-router-dom';

import logo2 from '../assets/logo2.png';

const Start = () => { 
  const navigate = useNavigate();

  const startOnClick = () => { 
    const path = '/order';
    navigate(path);
  }

  return (
    <article className='container full-screen flex flex-col justify-center gap-8'>
      <img src={ logo2 } alt='Logo2' /> 
      <section id='start-div' className='flex flex-col items-center gap-4 bg-green-secondary p-8 rounded-2xl'>
        <h1 className='text-center bg-green-secondary text-yellow'>Comforting Food At Your Fingertips</h1>
        <RedButton onclick={ startOnClick } text='Start Order' /> 
      </section> 
    </article>
  )
}

export { Start };