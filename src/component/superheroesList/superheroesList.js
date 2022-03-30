import { getSuperheroes, deleteSuperheroes } from '../../api/apiSuperheroes';
import { useState, useEffect } from 'react';
import style from './superheroesList.module.css';

function SuperheroesList({ setModal, setId, edit, setEdit }) {
  const [superheroes, setSuperheroes] = useState([]);

  const fetchSuperheroes = async e => {
    const data = await getSuperheroes().finally(() => setEdit(''));
    setSuperheroes(data);
  };

  useEffect(() => {
    fetchSuperheroes();
  }, [edit]);

  const removeSuperhero = async id => {
    const body = await deleteSuperheroes(id).finally(() => setEdit(id));
    alert(body.message);
  };

  const openModal = id => {
    setModal(true);
    setId(id);
  };

  return (
    <div>
      <h1>List of superheroes</h1>
      {superheroes.map(item => (
        <div key={item.id} className={style.container}>
          <ul>
            <li>
              <strong>nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>real_name:</strong> {item.real_name}
            </li>
            <li>
              <strong>origin_description:</strong> {item.origin_description}
            </li>
            <li>
              <strong>superpowers:</strong> {item.superpowers}
            </li>
            <li>
              <strong>catch_phrase:</strong> {item.catch_phrase}
            </li>
            <li>
              <img
                src={`http://localhost:4000/${item.Images}`}
                alt={item.nickname}
              />
            </li>
          </ul>
          <div>
            <button onClick={() => openModal(item.id)}>edit</button>
            <button
              onClick={() => {
                removeSuperhero(item.id);
              }}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuperheroesList;
