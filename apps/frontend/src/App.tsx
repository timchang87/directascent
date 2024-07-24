import axios from 'axios';
import { FC, useEffect } from 'react';

const App: FC = () => {
  useEffect(() => {
    axios.get('/api/test').then(function (response) {
      console.log(response);
    });
  }, []);
  return (
    <div>
      <h1>Hello, World!!!</h1>
    </div>
  );
};

export default App;
