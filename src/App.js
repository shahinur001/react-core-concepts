import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$69.99'},
    {name: 'Premere Pro', price: '$109.99'}
  ]


  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter></Counter> */}

        <Users></Users>



        {/* <Products products={products[0]}></Products>
        <Products products={products[1]}></Products> */}
        {/* <Person name="Shahinur Islam"></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person> */}

        {/* <ul>

          { 
            products.map(pri => <li>{pri.price}</li>)
          }
        </ul> */}

        

      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])


  return (
    <div>
      
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
      
    </div>
  )
}



function Counter() {
  const [count, setCount] = useState(42);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Products(props) {
  const productsStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    width: '200px',
    height: '200px',
    float: 'left',
  }
  const {name, price}=props.products
  return (
    <div style={productsStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  const personStyle={
    color: 'red'
  }
  return (
    <div style={{border: '2px solid red', margin: '20px', padding: '10px'}}>
      <h1>Name: {props.name}</h1>
      <h3>Hello Boss</h3>
    </div>
  )
}

export default App;
