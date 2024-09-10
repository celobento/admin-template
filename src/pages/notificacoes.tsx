import Layout from "../components/template/Layout";
import { AppConsumer } from "../data/context/AppContext";
import useAppData from "../data/hook/useAppData";


export default function Notificacoes() {
  const ctx = useAppData()
  return (
    <>
      <Layout titulo="Página Notificações" subtitulo="Subtitulo">
        <h3>Notificacoes</h3>
        <AppConsumer>{dados => <h3>{dados.nome}</h3>}</AppConsumer>
        <h3>{ctx.tema}</h3>
        <button onClick={ctx.alternarTema}>Alternar Tema</button>
      </Layout>
    </>
  );
}
