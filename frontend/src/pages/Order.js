import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card'; 
import { CartButton, GreenButton, RedButton } from '../components/Button';
import { Modal } from '../components/Modal';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import placeholder from '../assets/placeholder.jpg';

const Order = () => { 
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState([]); 
  const [filterCategory, setFilterCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const { openCart, cartTotalQuantity, cartTotalItems } = useCart();

  const filterTypes = ['appetizer', 'main', 'dessert', 'drink', 'promotional'];
  const navigate = useNavigate();

  useEffect(() => { 
    const fetchItems = async () => { 
      const backend = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${ backend }/api/items/`);
      const result = await response.json();

      if (response.ok) { 
        setItems(result);
        setFilter(result);
      }
    }
    fetchItems();
  }, [])

  useEffect(() => { 
    setTotalPrice(0); 
    cartTotalItems.map((each, index) => { 
      items.map((itemEach, itemIndex) => { 
        if (each.item === itemEach._id) {
          setTotalPrice((current) => current + (itemEach.price * each.quantity))
        }
      })
    })
  }, [cartTotalItems])

  const filterOnClick = (filter) => {
    console.log('filter')
    if (filter === filterCategory) { 
      setFilterCategory('');
      setFilter(items);
    }
    else { 
      setFilterCategory(filter);
      setFilter(
        items.filter((each) => {
          return each.type === filter;
        })
      )
    }
  }

  const cartOnClick = () => { 
    setIsModalOpen(true); 
    console.log(cartTotalItems)
    console.log('Cart Click'); 
  }

  const modalOnClose = () => { 
    setIsModalOpen(false); 
  }

  const submitOnClick = () => { 
    const submitOrder = async (item) => { 
      const backend = process.env.REACT_APP_BACKEND_URL; 
      try {
        const response = await fetch(`${ backend }/api/orders/`, { 
          method: 'POST', 
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        })  
  
        if (response.ok) { 
          console.log('submitted');
        }
        else { 
          throw new Error('Error submitting order'); 
        }
      }
      catch (error) { 
        throw new Error('Error submitting order'); 
      }
    }

    try { 
      cartTotalItems.map((each, index) => { 
        submitOrder(each);
      })
  
      const path = '/submitted'; 
      navigate(path); 
    }
    catch (error) { 
      console.log('Submission Failed');
    }
  }

  return (
    <> 
      <Navbar />
      <div className='container'>
        <div className='flex px-4 my-8 gap-8 overflow-x-auto bg-green-tertiary rounded-2xl'> 
          {
            filterTypes.map((each, index) => { 
              return (
                <h1 key={ index } onClick={ () => filterOnClick(each) } className={ `m-1 px-3 ${ filterCategory === each ? 'bg-yellow' : 'bg-green-tertiary' } rounded-xl` }>
                  { each.charAt(0).toUpperCase() + each.slice(1) }s
                </h1>
              )
            })
          }
        </div>

        <article className='flex flex-col'> 
          { 
            filter.map((each, index) => { 
              return (
                <Card key={ index } id={ each._id } name={ each.name } type={ each.type } price={ each.price } />
              )
            }) 
          }
        </article>

        <CartButton onclick={ cartOnClick } quantity={ cartTotalQuantity } />

        <Modal open={ isModalOpen } onclose={ modalOnClose }>
          <article className='bg-white'>
            { 
              cartTotalItems.map((each, index) => { 
                const matchedItem = filter.map((itemEach, itemIndex) => { 
                  if (each.item === itemEach._id) {
                    return (
                      <section key={ index } className='flex justify-between gap-8 mb-4 bg-white'>
                        <div className='flex gap-5 bg-white'>
                          <img src={ placeholder } alt='Placeholder' className='w-24 h-24' />
                          <div className='flex flex-col pt-2 bg-white'> 
                            <h2 className='bg-white'>{ itemEach.name }  x{ each.quantity } </h2>
                            <h2 className='font-normal italic bg-white'>{ formatCurrency(itemEach.price) } </h2>
                          </div>
                        </div>
                        <h2 className='pt-2 bg-white'>{ formatCurrency(itemEach.price * each.quantity) } </h2>
                      </section>
                    ) 
                  }
                })
                return matchedItem
              })
            }

            <section className='flex justify-end bg-white'> 
              <h1 className='bg-white'>Total: { formatCurrency(totalPrice) }</h1>
            </section> 

            <section className='flex gap-6 justify-center bg-white'> 
              <GreenButton onclick={ submitOnClick } text='Submit Order'/> 
              <RedButton onclick={ modalOnClose } text='Cancel' /> 
            </section>
          </article>
        </Modal>
      </div>
    </>
  )
} 
  
export { Order }; 