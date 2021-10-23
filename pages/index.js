/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home() {
    return (
        <div id="home">
            <div className="hero-container">
                <img src="/images/hero.jpg" alt="pizza" />
                <div className="hero-inf">
                    <h2>
                        Enjoy a unique and delicious taste with{" "}
                        <span>Pizzaro</span>
                    </h2>
                    <Link href="/menu">
                        <a className="home-button">
                            <span className="home-button__mask"></span>
                            <span className="home-button__text">THE MENU</span>
                            <span className="home-button__text button__text--bis">
                                THE MENU
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
