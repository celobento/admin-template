
import { ThemeProvider } from 'next-themes'
import styles from '../styles/Layout.module.css'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import MenuLateral from './MenuLateral'
import useAppData from '@/src/data/hook/useAppData'
import forcarAuthenticacao from '@/src/functions/ForcarAuthenticacao'
//import ForcarAuthenticacao from '../auth/ForcarAuthenticacao'


interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const ctx = useAppData()
    //return (
    return forcarAuthenticacao(
        //<ForcarAuthenticacao>
            <div className={`${ctx.tema} flex h-screen w-screen`}>
                <MenuLateral/>
                <div className={`flex 
                                flex-col 
                                w-full 
                                p-7 
                                bg-gray-300
                                dark:bg-gray-800`}>
                    <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                    <Conteudo>
                        {props.children}
                    </Conteudo>
                </div>
            </div>
        //</ForcarAuthenticacao>
    )
}
