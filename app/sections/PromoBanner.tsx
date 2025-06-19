import { useEffect, useState } from "react"
import localFont from 'next/font/local';

const aderoTrial = localFont({
  src: '../fonts/AderotrialRegular-ZVreq.otf',
  variable: '--font-adero-trial',
  display: 'swap',
});

export default function PromoBanner(){

    const [ show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000);
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <> 
            <div className={`${aderoTrial.className} w-full text-white text-sm text-center py-2 px-4 font-normal transition-all duration-700 ease-out transform ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} bg-[#3C3C3C] tracking-wider`}>
                🎉 Use <span className="font-bold">“FREEBREAK”</span> to avail free complimentary breakfast.
            </div>
        </>
    )
}