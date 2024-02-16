import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import { useParams } from 'react-router-dom';

function Pizza() {
  const { pizzas,agregarAlCarro } = useContext(PizzaContext);
  const { pizzaId } = useParams();
  const pizza = pizzas.find(p => p.id === pizzaId);

return (
    <div className="pizza-detail">
      {pizza && (
        <>
          <img src={pizza.img} alt={pizza.name} />
          <div className="pizza-content">
            <h2 className='title'>{pizza.name}</h2>
            <p className='description'>{pizza.desc}</p>
            <h3 className='ingredientes'>Ingredientes:</h3>
            <ul>
                {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p className="price">Precio: ${pizza.price}</p>
            <button className="btn" onClick={() => agregarAlCarro(pizza)}>Añadir</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Pizza;