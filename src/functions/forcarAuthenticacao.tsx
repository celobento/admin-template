import Image from 'next/image'
import loading from '../../public/images/loagind.gif'
import useAuth from '@/src/data/hook/useAuth'
import router from 'next/router'
import Head from 'next/head'

export default function forcarAuthenticacao(jsx){
    
    const { usuario, carregando } = useAuth()

    function renderizarConteudo() {
        return (
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            if(!document.cookie?.includes("admin-template-mbf-auth")){
                                window.location.href = "/authenticacao"
                            }
                            `
                    }} />
                </Head>
                {jsx}
            </>
        )
    }
    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading} alt='loading'/>
            </div>
        )
    }
    if(!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if(carregando) {
        return renderizarCarregando()
    } else {
        router.push('/authenticacao')
        return null
    }
}