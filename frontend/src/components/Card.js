import { Modal } from './Modal';
import { GreenButton, RedButton } from './Button';
import { formatCurrency } from '../utilities/formatCurrency';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

import placeholder from '../assets/placeholder.jpg';
import add from '../assets/add.png'; 

const Card = (props) => { 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getTotalQuantity, getItemQuantity, increaseItemQuantity, decreaseItemQuantity, updateItemRemark, removeItem } = useCart(); 

  const cardOnClick = () => { 
    setIsModalOpen(true);
    console.log('card click');
  }
    
  const modalOnAdd = () => { 
    increaseItemQuantity(props.id);
    setIsModalOpen(false);
    console.log('modal add');
  }

  const modalOnClose = () => { 
    setIsModalOpen(false);
    console.log('modal close');
  }

  const remarkOnChange = (event) => { 
    console.log('change remark');
    // updateItemRemark(props.id, event.target.value); 
  }

  return (
    <article onClick={ cardOnClick } className='p-4 -mt-1 border-2 border-green-primary'>
      <section className='flex gap-5'>
        <img src={ placeholder } alt='Placeholder' className='w-24 h-24' />
        <div className='flex flex-col pt-2'>
          <h1>{ props.name }</h1>
          <h2 className='font-normal italic'>{ formatCurrency(props.price) }</h2>
        </div>
        <img src={ add } alt='Add' className='ml-auto self-center w-6 h-6'/>
      </section>

      <Modal open={ isModalOpen } onclose={ modalOnClose }>
        <section className='flex gap-10 mb-4 bg-white'>
          <img src={ placeholder } alt='Placeholder' className='w-24 h-24' />
          <div className='flex flex-col justify-between pt-2 bg-white'>
            <h1 className='bg-white'>{ props.name }</h1>
            <h2 className='bg-white'>{ formatCurrency(props.price) }</h2>
          </div>
        </section>

        <section className='bg-white'>
          <h2 className='bg-white'>Remarks:</h2>
          <textarea onChange={ remarkOnChange } type='textarea' rows='5' className='p-2 bg-slate-200 rounded-xl resize-none'/>
        </section>

        <section className='flex gap-10 bg-white'>
          <h2 className='bg-white'>Quantity</h2>
        </section>

        <section className='flex gap-6 justify-center bg-white'>
          <GreenButton onclick={ modalOnAdd } text='Add Item' /> 
          <RedButton onclick={ modalOnClose } text='Cancel' /> 
        </section>

      </Modal>
    </article>
  )
}

export { Card }; 