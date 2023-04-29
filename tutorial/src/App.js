import './App.css';
import { useState } from 'react';

function MyButton({ count, setCount }) {
  function handleClick(e) {
    e.preventDefault();
    setCount(count + 1);
    alert(count);
  }

  return (
    <>
    <button onClick={handleClick}> I'm a button</button>
    {count} 
    </>
  );
}

function Header() {
  return (
    <header className="j-header">
      <h1>My Header</h1>
      <span>this is the awesome project</span>
      <br />
      <br />
    </header>
  );
}

function HelloName() {
  const users = [{ "name" :'John Doe' }, { "name" :'Jane Doe' }, { "name" :'John Smith' }, { "name" :'juha' }];

  const showUsers = users.map((user) => {
    return <li style={{
      color: user.name === "juha" ? "blue" : "black"
    }}
    >{user.name === "juha" ? user.name + " good man" : user.name }</li>
  });
  console.log(showUsers);
  return (
      <ol>
        {showUsers}
      </ol>
  );
}

function ByeName() { 
  const users = [{ "name" :'John Doe' }, { "name" :'Jane Doe' }, { "name" :'John Smith' }];
  return (
    <div>
      <h1>
        Bye, my name is {users[2].name}
      </h1>
    </div>
  );
}

function App() {
  let condition = true;
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MyButton setCount={setCount} count={count} />
      <MyButton setCount={setCount} count={count} />
      {MyButton({count, setCount})}
      {condition ? <HelloName/> : <ByeName/>}
    </>
  );
}


export default App;

