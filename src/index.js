import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App/>, document.getElementById("root"))

//выполняет код в строгом режиме, показывает не безопасные конструкции
ReactDOM.render( 
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const painting = {
//   "id": "id-1",
//   "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   "title": "Feathers. Art abstract",
//   "price": 500,
//   "author": {
//     "tag": "ractapopulous",
//     "url": "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   "quantity": 10
// };

// const template = (
  // <div>
  //   <img src={painting.url} alt={painting.title} width="500px"/>
  //   <h2>{painting.title}</h2>
  //   <p>
  //     Автор: <a href={painting.author.url}>{painting.author.tag}</a>
  //     </p>
  //   <p>Цена: {painting.price} кредитов</p>
  //   <button type="button">ДОбавить в корзину</button>
  // </div>
// );

// ReactDOM.render(template, document.getElementById("root"))