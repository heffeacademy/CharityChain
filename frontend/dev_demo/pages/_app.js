// pages/_app.js
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";

function MyApp({ Component, pageProps }) {
    return (
        <WalletProvider>
            <Component {...pageProps} />
        </WalletProvider>
    );
}

export default MyApp;
