import { createContext, useState } from "react"

type Tema = 'dark' | ''

interface AppContextProps {
    tema?: Tema
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
        setTema(tema === '' ? 'dark' : '')
    }

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