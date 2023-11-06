import React from 'react';
import Button from "./components/buttons/Button/Button";

function App() {
  return (
    <div>
      <Button text="пробная кнопка" onClick={() => console.log('click')}></Button>
    </div>
  );
}

export default App;
