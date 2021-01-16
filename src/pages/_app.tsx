import { AppProps } from 'next/app'
import '../../styles/globals.css'
import { RecoilRoot } from 'recoil'

function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default App
