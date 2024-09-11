import Layout from "../components/template/Layout";
import { AppConsumer } from "../data/context/AppContext";
import useAppData from "../data/hook/useAppData";


export default function Perfil() {
  return (
    <>
      <Layout titulo="Perfil do Usuário" subtitulo="Subtitulo">
        <h3>Perfil do Usuário</h3>
       
      </Layout>
    </>
  );
}
