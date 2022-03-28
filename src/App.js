import AddFormSuperhero from './component/addFormSuperhero/addFormSuperhero';
import SuperheroesList from './component/superheroesList/superheroesList';
import UpdateSuperhero from './component/updateSuperhero/updateSuperhero';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState('');

  return (
    <div>
      <AddFormSuperhero />
      {modal && <UpdateSuperhero id={id} setModal={setModal} />}
      <SuperheroesList setModal={setModal} setId={setId} />
    </div>
  );
}

export default App;
