import Link from "next/link";
import Image from "next/image"

export default function Instagram() {
    const posts = [
        "post.jpeg", "post2.jpeg", "post3.jpeg",
        "post4.jpeg", "post5.jpeg", "post6.jpeg",
        "post7.jpeg", "post8.jpeg", "post9.jpeg",
    ]

    const rendPosts = () => {
        return posts.map((post, index) => {
            return (
                <div className="w-[240px] h-[240px] max-[480px]:w-[120px] max-[480px]:h-[120px]" key={index}>
                    <Image
                        src={"/" + post}
                        width={240}
                        height={240}
                        alt="Clara Post"
                    />
                </div>
            )
        })
    }
    return (
        <div className="w-screen h-screen flex flex-col items-center overflow-x-hidden justify-between">
            <Link href="/" className="mt-6 ml-6 max-[480px]:mt-3 max-[480px]:ml-3 self-start"> Voltar </Link>
            
            <div className="flex text-center mt-16 mb-16">
                <p className="font-serif font-bold text-4xl"> Veja Alguns dos Meus <span className="text-purple-500"> Designs </span></p>
            </div>

            <div className="flex flex-wrap gap-[10px] mx-auto items-start justify-center w-full">
               { rendPosts() }
            </div>

            <footer className="flex items-center justify-around w-screen bg-white h-40 mt-6">
                <div className="text-black flex flex-col items-center justify-around">
                    <p className="text-center font-sans text-2xl font-bold"> Gostou das Artes? </p>

                    <Link href="https://wa.me/5534984083200?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram.%0AGostaria%20de%20saber%20mais!">
                        <button className="bg-purple-500 px-6 h-14 rounded-3xl mt-4"> FAÇA JÁ SEU ORÇAMENTO </button>
                    </Link>
                </div>

                <Image
                    src="/logo.png" 
                    alt="Clara Design Logo" 
                    width={100} 
                    height={100} 
                    className="rounded-full border-2 max-[480px]:w-[90px] max-[480px]:h-[90px] border-purple-500 shadow-md shadow-purple-500/40" 
                />
            </footer>
        </div>
    )
}