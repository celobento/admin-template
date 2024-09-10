interface AuthInputProps {
    label: string
    valor: any
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'email'
    valorMudou: (novoValor: any) => any
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className={`
            flex flex-col mt-4
        `}>
            <label>{props.label}</label>
            <input className={`
                px-4 py-3 rounded-lg bg-gray-300 
                border focus:border-blue-500
                focus:outline-none focus:bg-white
                `}
                type={props.tipo ?? 'text'} 
                value={props.valor} 
                required={props.obrigatorio}
                onChange={e => props.valorMudou?.(e.target.value)}/>
        </div>
    )
}