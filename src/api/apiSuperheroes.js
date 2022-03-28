import axios from 'axios';

export const getSuperheroes = async () => {
  const { data } = await axios.get('http://localhost:4000/api/superheroes');
  return data;
};

export const addSuperheroes = async newSuperheroes => {
  const { data } = await axios.post(
    'http://localhost:4000/api/superheroes',
    newSuperheroes,
  );
  return data;
};

export const deleteSuperheroes = async id => {
  const { data } = await axios.delete(
    `http://localhost:4000/api/superheroes/${id}`,
  );
  return data;
};

export const updateSuperheroes = async (id, update) => {
  const { data } = await axios.put(
    `http://localhost:4000/api/superheroes/${id}`,
    update,
  );
  return data;
};
