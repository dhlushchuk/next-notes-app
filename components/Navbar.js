import Link from 'next/link'
import Head from 'next/head'

const Navbar = ({ title, children }) => (
    <>
        <Head>
            <title>{title} | Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
            <div className='navbar-brand'>
                Note app
            </div>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link href='/'><a className='nav-link'>Главная</a></Link>
                </li>
                <li>
                    <Link href='/about'><a  className='nav-link'>Информация</a></Link>
                </li>
            </ul>
        </nav>
        <main>
            {children}
        </main>
    </>
)

export default Navbar