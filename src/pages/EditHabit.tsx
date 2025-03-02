import React from 'react';
import { useParams } from 'react-router-dom';

const EditHabit = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Editar Hábito {id}</h1>
    </div>
  );
};

export default EditHabit;
