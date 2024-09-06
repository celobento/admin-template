import Link from "next/link"

interface MenuProps {
    url?: string
    onClick?: (evento: any) => void
    texto: string
    classname?: string
    icone: any
}

export default function MenuItem(props: MenuProps) {
    function renderizarLink() {
        return (
            <div className={`flex flex-col ${props.classname} 
                justify-center items-center h-20 w-20 text-gray-600`}>
                {props.icone}
                <span className={`text-xs font-light `}>{props.texto}</span>
            </div>
        )
    }
    return (
        <li onClick={props.onClick} className={`
            list-none hover:bg-gray-100
            cursor-pointer`}>
            {props.url ? (
                <Link href={props.url}>
                    {renderizarLink()}
                </Link>
            ) : (
                renderizarLink()
            )}
        </li>
    )
}