/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Nav = () => {
    return (
        <nav id="nav">
            <div className="logo">
                <Link href="/">
                    <a>PIZZARO</a>
                </Link>
            </div>
            <ul className="menu-nav">
                <Link href="/">
                    <a className="nav-home">
                        <img src="/images/home.svg" alt="home" />
                        <div className="nav-home-des">Home</div>
                    </a>
                </Link>
                <Link href="/menu">
                    <a className="nav-menu">
                        <img src="/images/menu.svg" alt="menu" />
                        <div className="nav-menu-des">Menu</div>
                    </a>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;
