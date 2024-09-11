import { createContext, useEffect } from 'react'
import firebase from '../../firebase/config'
import Usuario from '@/src/model/Usuario'
import { useState } from 'react'
import route from 'next/router'
import  Cookies  from 'js-cookie'

interface AuthContextProps {
    usuario?: Usuario
    loginGoogle: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}


function gerenciarCookie(logado: boolean) {
    if(logado) {
        Cookies.set('admin-template-mbf-auth', logado, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-mbf-auth')
    }
}

export function AuthProvider(props) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario>(null)
    async function configurarSessao(usuarioFirebase) {
        if(usuarioFirebase?.email){
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }
    async function loginGoogle() {
        console.log('Login Google...')
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
        configurarSessao(resp.user)
        route.push('/')
        
    }
    useEffect(() => {
        const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
        return () => cancelar()
    }, [])
    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext