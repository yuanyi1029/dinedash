const Modal = (props) => {   
  const backgroundOnClick = (event) => { 
    event.stopPropagation(); 
    props.onclose();
  }
  
  const modalOnClick = (event) => {
    event.stopPropagation();
  }

  return (
    <div onClick={ backgroundOnClick } className={`fixed inset-0 flex justify-center items-center ${ props.open ? 'visible bg-black bg-opacity-20' : 'invisible' }`}>
      <div onClick={ modalOnClick } className={`p-6 bg-white rounded-xl drop-shadow-sm`}>
        { props.children }
      </div>
    </div>
  )
}

export { Modal };