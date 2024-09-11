import useAuth from "@/src/data/hook/useAuth";
import { IconeAjustes, IconeCasa, IconeLogout, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    const { logout } = useAuth()
    return (
        <aside className={`flex flex-col`}>
            <div className={`
                flex flex-col items-center justify-center
                dark:bg-gray-900 bg-gray-200 text-gray-700
                h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800  
            `}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" texto="Inicio" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
            <ul>
                <MenuItem onClick={logout}
                 texto="Logout" icone={IconeLogout} 
                 classname={`text-red-600 
                             hover:bg-red-400
                             hover:text-white
                             dark:hover:bg-red-200
                             dark:text-gray-400`}/>
            </ul>
        </aside>
    )
}