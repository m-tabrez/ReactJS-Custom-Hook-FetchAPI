import React from 'react'

const Card = (props) => {

    const DelClicked = () => {
        props.onClick(props.id)
    }

  return (
    // <div className='card' onClick={DelClicked}>
    //     <div className="card-body">
    //         {props.children}
    //     </div>
    // </div>
    <div className='card'>
        <div className="card-body">
            {props.children}
        </div>
    </div>
  )
}

export default Card