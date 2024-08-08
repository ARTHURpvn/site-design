import Link from "next/link";

export default function Instagram() {

    return (
        <div className="p-6 w-screen h-screen flex flex-col">
            <Link href="/">Voltar</Link>
            
            <div className="self-center font-serif font-bold text-4xl mt-16 mb-16">
                <p> Veja Alguns dos Meus <span className="text-purple-500">Designs</span></p>
            </div>

            <div className="flex flex-wrap gap-[10px] mx-auto items-start justify-center w-11/12 ">
                <div className="w-[190px] h-[247px] min-[320px]:w-[150px] min-[320px]:h-[207px] bg-white"></div>
                <div className="w-[190px] h-[247px] min-[320px]:w-[150px] min-[320px]:h-[207px] bg-white"></div>
                <div className="w-[190px] h-[247px] min-[320px]:w-[150px] min-[320px]:h-[207px] bg-white"></div>
                <div className="w-[190px] h-[247px] min-[320px]:w-[150px] min-[320px]:h-[207px] bg-white"></div>

            </div>

            <footer className="absolute bottom-0">
                <div>
                    teste
                </div>
            </footer>
        </div>
    )
}