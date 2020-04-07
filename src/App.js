import React, {useState} from 'react';
import './App.css';

function App() {
      const [count, setCount] = useState('');
      const [todo, setTodo] = useState([]);
      const todoChange = (n) => {
            setCount(+n);
            // arr.push(n)
    };

      const changeValue = (change, i) => {
          let arr = [...todo];
          arr[i] += change;
          setTodo(arr);
      };

      const todoSent = () => {
            let arr = [...todo];
            arr.push(count);
            setTodo([...arr]);
            setCount('');
      };

  return (
    <div>

        <p>Click on button</p>
        <input type="number"
               placeholder="write numbers here"
               value={count}
               onChange={(e) => todoChange(e.target.value)}/>
    <div>
        {todo.map((el, i) =>
            <div>

                <button onClick={() => changeValue (-3, i)}> -3</button>
                <button onClick={() => changeValue (-2, i)}> -2</button>
                <button onClick={() => changeValue (-1, i)}> -1</button>
                {el}
                <button onClick={() => changeValue (+1, i)}> +1</button>
                <button onClick={() => changeValue (+2, i)}> +2</button>
                <button onClick={() => changeValue (+3, i)}> +3</button>

            </div>
        )}

        <div><button onClick={todoSent}>add</button></div>
    </div>

    </div>
  );
}

export default App;
