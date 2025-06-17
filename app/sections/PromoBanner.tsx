import { useEffect, useState } from "react"

export default function PromoBanner(){

    const [ show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000);
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
            <div className={`w-full text-white text-sm text-center py-2 px-4 font-semibold transition-all duration-700 ease-out transform ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} bg-red-600`}>
                🎉 Use code <span className="font-bold"> MAYUR10 </span> to get 10% off! Limited time only.
            </div>
        </>
    )
}