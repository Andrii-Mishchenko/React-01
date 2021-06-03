import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from './defaultImg.jpg'

const Painting = ({quantity, url, title, price, profileUrl, tag}) =>(
    <div>
        <img src={url} alt={title} width="500px"/>
        <h2>{title}</h2>
        <p>
            Автор: <a href={profileUrl}>{tag}</a>
        </p>
        <p>Цена: {price} кредитов</p>
        <p>Доступность: {quantity<10?"заканчивается":"есть в наличии"}</p>
        <button type="button">ДОбавить в корзину</button>
    </div>
);

Painting123.defaultProps={
    url: defaultImage
}

Painting.propTypes = {
    quantity: PropTypes.number.isRequired, 
    url: PropTypes.string, 
    title: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
    profileUrl: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired,
}

export default Painting