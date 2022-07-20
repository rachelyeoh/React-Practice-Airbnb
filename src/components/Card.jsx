import React from 'react'
function Card(props) {
    return (
        <div className='card-div'>
            <img src={props.img} alt='pool-house.jpg' className='card-image' />
            <img src='./star.png' alt='star' className='card-star' />
            <span>{props.rating}</span>
            <span>{props.reviewCount}</span>
            <span>{props.country}</span>
            <p>{props.title}</p>
        </div>
    )
}
export default Card