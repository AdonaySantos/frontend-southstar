import '../static/Header.css'
import logo from '../assets/react.svg'

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="links-nav">
                    <a href="/">Home</a>
                    <a href="/login">Login</a>
                    <a href="/register">Cadastro</a>
                </div>
            </header>
        </>
    )
}