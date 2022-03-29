import { useState } from 'react';

import { addSuperheroes } from '../../api/apiSuperheroes';
import FormInput from '../formInput/formInput';
function AddFormSuperhero({ setEdit }) {
  const [nickname, setNickname] = useState('');
  const [real_name, setReal_name] = useState('');
  const [origin_description, setOrigin_description] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catch_phrase, setCatch_phrase] = useState('');
  const [Images, setImages] = useState('');

  const newSuperheroes = async () => {
    const Superhero = {
      nickname: nickname,
      real_name: real_name,
      origin_description: origin_description,
      superpowers: superpowers,
      catch_phrase: catch_phrase,
      Images: Images,
    };
    const body = await addSuperheroes(Superhero).finally(() =>
      setEdit(nickname),
    );
    alert(`superguru ${body.nickname} created`);
  };
  const addSuperhero = e => {
    e.preventDefault();
    newSuperheroes();
    setNickname('');
    setReal_name('');
    setOrigin_description('');
    setSuperpowers('');
    setCatch_phrase('');
    setImages('');
  };

  return (
    <div>
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
  );
}

export default AddFormSuperhero;
