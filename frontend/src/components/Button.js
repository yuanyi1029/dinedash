const GreenButton = (props) => { 
  return ( 
    <button onClick={ props.onclick } className="px-6 py-3 md:px-8 md:py-4 text-[1.25rem] md:text-[1.5rem] bg-green-primary text-yellow font-bold rounded-2xl drop-shadow-sm hover:bg-green-tertiary active:bg-green-tertiary">
      { props.text }
    </button>
  )
}

const RedButton = (props) => { 
  return ( 
    <button onClick={ props.onclick } className="px-6 py-3 md:px-8 md:py-4 text-[1.25rem] md:text-[1.5rem] bg-red-primary text-yellow font-bold rounded-2xl drop-shadow-sm hover:bg-red-secondary active:bg-red-secondary">
      { props.text }
    </button>
  )
}

const IncreaseButton = (props) => { 
  return (
    <>
    </>
  )
}

const DecreaseButton = (props) => { 
  return ( 
    <>
    </>
  )
}

const CartButton = (props) => { 
  return (
    <div onClick={ props.onclick }>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' fill='currentColor' className='fixed bottom-8 right-8 w-16 h-16 p-4 fill-green-primary outline outline-3 rounded-3xl outline-green-primary hover:bg-green-tertiary active:hover:bg-green-tertiary'>
        <path d='M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z' />
      </svg>
      <div className='fixed bottom-4 right-4 p-2 w-11 h-11 bg-red-secondary rounded-2xl text-center text-2xl font-bold text-yellow'>
        { props.quantity }
      </div>
    </div>
  )
}

export { GreenButton, RedButton, CartButton };