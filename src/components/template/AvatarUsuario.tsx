import useAuth from "@/src/data/hook/useAuth";
import Link from "next/link";

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const {usuario} = useAuth()
    return (
        <Link href='/perfil'>
            <img 
                src={usuario?.imagemUrl ?? '/images/avatar.svg'} 
                alt="Avatar do Usuário"
                className={`
                    w-10 h-10 pointer rounded-full
                    ${props.className}`} />
        </Link>
    )
}