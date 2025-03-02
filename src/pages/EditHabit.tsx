import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const EditHabit = () => {
  const { id } = useParams();

  return (
    <Layout>
      <h1>Editar Hábito {id}</h1>
    </Layout>
  );
};

export default EditHabit;
