import type { AppProps } from 'next/app';
import '../app/globals.css'; // Correct path to globals.css
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
