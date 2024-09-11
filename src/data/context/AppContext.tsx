import { cookies } from "next/headers"
import { createContext, useEffect, useState } from "react"

//type Tema = 'dark' | ''

interface AppContextProps {
    tema?: string
    nome?: string
    children?: any
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({
    nome: null
})

export function AppProvider(props: AppContextProps) {

    const [tema, setTema] = useState<Tema>('')

    function alternarTema() {
        console.log('alternarTema ...')
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo)
    }, [])

    return (
        <AppContext.Provider value={{
            tema,
            nome: "Teste Context API",
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext

export const AppConsumer = AppContext.Consumer