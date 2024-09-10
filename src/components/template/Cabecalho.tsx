import useAppData from "@/src/data/hook/useAppData"
import BotaoAlterarTema from "./BotaoAlternarTema"
import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
    const { tema, alternarTema } = useAppData()
    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`flex flex-grow justify-end`}>
                <BotaoAlterarTema tema={tema} alternarTema={alternarTema}></BotaoAlterarTema>
            </div>
        </div>
    )
}
