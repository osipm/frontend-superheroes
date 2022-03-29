import style from './formInput.module.css';

function FormInput({
  setNickname,
  nickname,
  real_name,
  setReal_name,
  origin_description,
  setOrigin_description,
  superpowers,
  setSuperpowers,
  catch_phrase,
  setCatch_phrase,
  Images,
  setImages,
  addSuperhero,
}) {
  return (
    <div>
      <form className={style.form}>
        <input
          className={style.inputForm}
          type="string"
          value={nickname}
          placeholder="nickname"
          onChange={e => setNickname(e.target.value)}
        />
        <input
          className={style.inputForm}
          type="text"
          value={real_name}
          placeholder="real name"
          onChange={e => setReal_name(e.target.value)}
        />
        <input
          className={style.inputForm}
          type="text"
          value={origin_description}
          placeholder="origin description"
          onChange={e => setOrigin_description(e.target.value)}
        />
        <input
          className={style.inputForm}
          type="text"
          value={superpowers}
          placeholder="superpowers"
          onChange={e => setSuperpowers(e.target.value)}
        />
        <input
          className={style.inputForm}
          type="text"
          value={catch_phrase}
          placeholder="catch phrase"
          onChange={e => setCatch_phrase(e.target.value)}
        />
        <input
          className={style.inputForm}
          name="myFile"
          type="file"
          onChange={e => setImages(e.target.value)}
        />
      </form>
      <button onClick={addSuperhero}>Add superhero</button>
    </div>
  );
}

export default FormInput;
