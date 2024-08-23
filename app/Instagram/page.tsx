import Link from "next/link";
import Image from "next/image"

export default function Instagram() {

    return (
        <div className="w-screen h-screen flex flex-col items-center overflow-x-hidden">
            <Link href="/" className="mt-6 ml-6 max-[480px]:mt-3 max-[480px]:ml-3 self-start"> Voltar </Link>
            
            <div className="flex text-center mt-16 mb-16 mx-2">
                <p className="font-serif font-bold text-4xl"> Veja Alguns dos Meus <span className="text-purple-500"> Designs </span></p>
            </div>

            <div className="flex flex-wrap gap-[10px] mx-auto items-start justify-center w-11/12 ">
                <div className="w-[240px] h-[240px] max-[480px]:w-[120px] max-[480px]:h-[120px]">
                    <Image
                        src={"/post.jpeg"}
                        width={200}
                        height={200}
                        alt=" Clara Design Logo "
                        className="w-full"
                    />
                </div>
                <div className="w-[240px] h-[240px] max-[480px]:w-[120px] max-[480px]:h-[120px]">
                    <Image
                        src={"/post2.jpeg"}
                        width={200}
                        height={200}
                        alt=" Clara Design Logo "
                        className="w-full"
                    />
                </div>
                <div className="w-[240px] h-[240px] max-[480px]:w-[120px] max-[480px]:h-[120px]">
                    <Image
                        src={"/post3.jpeg"}
                        width={200}
                        height={200}
                        alt=" Clara Design Logo "
                        className="w-full"
                    />
                </div>
                <div className="w-[240px] h-[240px] max-[480px]:w-[120px] max-[480px]:h-[120px]">
                    <Image
                        src={"/post4.jpeg"}
                        width={200}
                        height={200}
                        alt=" Clara Design Logo "
                        className="w-full"
                    />
                </div>
                <div className="w-[240px] h-[240px] max-[480px]:w-[120px] max-[480px]:h-[120px]">
                    <Image
                        src={"/post5.jpeg"}
                        width={200}
                        height={200}
                        alt=" Clara Design Logo "
                        className="w-full"
                    />
                </div>
                <div className="w-[240px] h-[240px] max-[480px]:w-[120px] max-[480px]:h-[120px]">
                    <Image
                        src={"/post6.jpeg"}
                        width={200}
                        height={200}
                        alt=" Clara Design Logo "
                        className="w-full"
                    />
                </div>
                <div className="w-[240px] h-[240px] max-[480px]:w-[120px] max-[480px]:h-[120px]">
                    <Image
                        src={"/post7.jpeg"}
                        width={200}
                        height={200}
                        alt=" Clara Design Logo "
                        className="w-full"
                    />
                </div>
                <div className="w-[240px] h-[240px] max-[480px]:w-[120px] max-[480px]:h-[120px]">
                    <Image
                        src={"/post8.jpeg"}
                        width={200}
                        height={200}
                        alt=" Clara Design Logo "
                        className="w-full"
                    />
                </div>
                <div className="w-[240px] h-[240px] max-[480px]:w-[120px] max-[480px]:h-[120px]">
                    <Image
                        src={"/post9.jpeg"}
                        width={200}
                        height={200}
                        alt=" Clara Design Logo "
                        className="w-full"
                    />
                </div>
            </div>

            <footer className="flex items-center justify-around w-screen bg-white h-40 mt-6">
                <div className="text-black flex flex-col items-center justify-center">
                    <p className="text-center font-sans text-2xl font-bold"> Gostou das Artes? </p>

                    <Link href="https://wa.me/5534984083200?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram.%0AGostaria%20de%20saber%20mais!">
                        <button className="bg-purple-500 px-6 h-14 rounded-3xl mt-4"> FAÇA JÁ SEU ORÇAMENTO </button>
                    </Link>
                </div>

                <Image
                    src="/logo.png" 
                    alt="Clara Design Logo" 
                    width={120} 
                    height={120} 
                    priority 
                    className="rounded-full border-2 scale-100 min-[320px]:scale-75 border-purple-500 shadow-md shadow-purple-500/40" 
                />
            </footer>
        </div>
    )
}