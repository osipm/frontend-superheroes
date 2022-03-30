import { updateSuperheroes } from '../../api/apiSuperheroes';
import FormInput from '../formInput/formInput';
import { useState } from 'react';
import style from './updateSuperhero.module.css';

function UpdateSuperhero({ setModal, id, setEdit }) {
  const [nickname, setNickname] = useState('');
  const [real_name, setReal_name] = useState('');
  const [origin_description, setOrigin_description] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catch_phrase, setCatch_phrase] = useState('');
  const [Images, setImages] = useState();

  const upSuperhero = async () => {
    const Superhero = new FormData();
    Superhero.append('nickname', nickname);
    Superhero.append('real_name', real_name);
    Superhero.append('origin_description', origin_description);
    Superhero.append('superpowers', superpowers);
    Superhero.append('catch_phrase', catch_phrase);
    Superhero.append('image', Images);

    const body = await updateSuperheroes(id, Superhero).finally(() =>
      setEdit(id),
    );
    alert(`superguru ${body.nickname} created`);
  };
  const addSuperhero = e => {
    e.preventDefault();
    console.log(id);
    upSuperhero();
    setNickname('');
    setReal_name('');
    setOrigin_description('');
    setSuperpowers('');
    setCatch_phrase('');
    setImages('');
    setModal(false);
  };
  return (
    <div className={style.modal}>
      <div className={style.form}>
        <FormInput
          setNickname={setNickname}
          nickname={nickname}
          real_name={real_name}
          setReal_name={setReal_name}
          origin_description={origin_description}
          setOrigin_description={setOrigin_description}
          superpowers={superpowers}
          setSuperpowers={setSuperpowers}
          catch_phrase={catch_phrase}
          setCatch_phrase={setCatch_phrase}
          setImages={setImages}
          addSuperhero={addSuperhero}
        />
        <button onClick={() => setModal(false)}>close</button>
      </div>
    </div>
  );
}

export default UpdateSuperhero;
