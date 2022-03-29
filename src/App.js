import AddFormSuperhero from './component/addFormSuperhero/addFormSuperhero';
import SuperheroesList from './component/superheroesList/superheroesList';
import UpdateSuperhero from './component/updateSuperhero/updateSuperhero';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState('');
  const [edit, setEdit] = useState('');
  return (
    <div>
      <h2>Add a new superhero</h2>
      <AddFormSuperhero setEdit={setEdit} />
      <hr />
      {modal && (
        <UpdateSuperhero id={id} setModal={setModal} setEdit={setEdit} />
      )}
      <SuperheroesList
        setModal={setModal}
        setId={setId}
        edit={edit}
        setEdit={setEdit}
      />
    </div>
  );
}

export default App;
