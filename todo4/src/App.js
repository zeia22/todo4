import React, { useState } from "react";
import "./App.css";
import "./index.css";

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  }
  const submit = () => {
    console.log('submit', value);
      erase();
  }

  const onChange =(event) => {
    setValue(event.target.value);
  }

  const onKeyDow = (event)  => {
    if (event.which === ENTER_KEY) {
      submit();
    }else if (event.wich === ESCAPE_KEY)  {
      erase();
    }
  }

  return(
  <section>
    <header>
  <h1 className='title'>Todo</h1>
    </header>




   <section className='main'>
    <input
    className="new-todo"
    placeholder="o que precisa ser feito?"
    value={value}
    onChange={onChange}
    onkeyDow={onkeyDow}
    />
    </section>
   </section>
  );
}


export default App;
