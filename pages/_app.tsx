import { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import '../styles/globals.css'
import AppHeader from "@/components/header";
import AppFooter from "@/components/footer";

const nunito = Nunito({ subsets: ['latin'] });

export default function BikerBagels({Component, pageProps}: AppProps) {
    return (
        <main className={nunito.className}>
            <AppHeader />
            <section>
                <Component {...pageProps} />
            </section>
            <AppFooter />
        </main>
    )
}