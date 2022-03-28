import { updateSuperheroes } from '../../api/apiSuperheroes';
import FormInput from '../formInput/formInput';
import { useState } from 'react';
import style from './updateSuperhero.module.css';

function UpdateSuperhero({ setModal, id }) {
  const [nickname, setNickname] = useState('');
  const [real_name, setReal_name] = useState('');
  const [origin_description, setOrigin_description] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catch_phrase, setCatch_phrase] = useState('');
  const [Images, setImages] = useState('');

  const fetchSuperheroes = async () => {
    const Superhero = {
      nickname: nickname,
      real_name: real_name,
      origin_description: origin_description,
      superpowers: superpowers,
      catch_phrase: catch_phrase,
      Images: Images,
    };
    const body = await updateSuperheroes(id, Superhero);
    alert(`superguru ${body.nickname} created`);
  };
  const addSuperhero = e => {
    e.preventDefault();
    fetchSuperheroes();
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
          Images={Images}
          setImages={setImages}
          addSuperhero={addSuperhero}
        />
      </div>
    </div>
  );
}

export default UpdateSuperhero;
