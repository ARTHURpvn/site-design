'use client'
import Link from "next/link";
import Image from "next/image"
import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { IoChevronBackOutline, IoCloseOutline } from "react-icons/io5";
import Theme from "../theme";

export default function Instagram() {
    const posts = [
        "post1.jpeg", "post2.jpeg", "post3.jpeg",
        "post4.jpeg", "post5.jpeg", "post6.jpeg",
        "post7.jpeg", "post8.jpeg", "post9.jpeg",
    ]

    const [postView, setPostView] = useState(false)
    const [clickedPost, setClickedPost] = useState("")
    const [postPosition, setPostPosition] = useState(0)
    const [postPositionMax, setPostPositionMax] = useState(posts.length)

    const rendPostView = (post: string, index: number) => {
        if (!postView) {
            setClickedPost(post)
            setPostPosition(index)
            setPostView(true)
        }
    }

    const closePostView = () => {
        if (postView) {
            setPostView(false)
        }
    }

    const prevPost = () => {
        setPostPosition(postPosition - 1)
        setClickedPost(posts[postPosition - 1])
        console.log(postPosition)
        console.log(clickedPost)
    }

    const nextPost = () => {
        setPostPosition(postPosition + 1)
        setClickedPost(posts[postPosition + 1])
        console.log(postPosition)
        console.log(clickedPost)
    }

    const rendPosts = () => {
        return posts.map((post, index) => {
            return (
                <div onClick={() => rendPostView( post, index )} className="w-[240px] h-[240px] max-[580px]:w-[120px] max-[580px]:h-[120px]" key={ index }>
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
        <>
            { postView && (
                <div className="z-50 min-[580px]:w-96 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    
                    <div>
                        { postPosition > 0 && <MdArrowBackIos className="absolute scale-150 -left-[20%] top-[50%] translate-x-[50%] cursor-pointer" onClick={prevPost}/>}
                        
                        <img 
                            src={"/" + clickedPost}
                            className="drop-shadow-2xl"
                        />
                        { postPosition < postPositionMax - 1 && <MdArrowBackIos className="absolute scale-150 rotate-180 -right-[15%] top-[50%] translate-[50%] cursor-pointer" onClick={nextPost}/> }
                    </div>
                    <IoCloseOutline className="w-7 h-7 absolute -top-10 right-0 cursor-pointer" onClick={ closePostView }/>
                </div>
            )}

            <div className={`w-screen h-screen transition-all duration-500 bg-white text-black dark:bg-black dark:text-white flex flex-col items-center overflow-x-hidden justify-between ${ postView && "blur-md brightness-[.3] overflow-y-hidden"}`} >

                <Link href="/" className="flex  font-bold text-lg items-center mt-6 ml-6 max-[580px]:mt-3 max-[580px]:ml-3 self-start">
                    <IoChevronBackOutline className="w-9 h-9"/> Voltar
                </Link>
                
                <div className="flex text-center mt-16 mb-16">
                    <p className="font-serif font-bold text-4xl"> Confira Alguns dos Meus <span className="text-purple-500"> Designs </span></p>
                </div>

                <div className="flex flex-wrap gap-[10px] mx-auto items-start justify-center w-full">
                { rendPosts() }
                </div>

                <footer className="flex items-center transition-all duration-500 justify-around w-screen bg-black dark:bg-white h-auto mt-6 py-4">
                    <div className="dark:text-black text-white flex flex-col items-center justify-around">
                        <p className="text-center font-sans text-2xl font-bold max-sm:text-lg"> Gostou das Artes? </p>

                        <Link href="https://wa.me/5534984083200?text=Ol%C3%A1%2C%20vim%20pelo%20Site.%0AGostaria%20de%20saber%20mais!%20Sobre%20os%20design">
                            <button 
                                className="bg-purple-500 px-6 h-14 rounded-3xl mt-4 max-sm:h-10 max-sm:text-sm max-sm:mt-2 max-sm:px-3 max-sm:rounded-2xl"
                            > FAÇA JÁ SEU ORÇAMENTO </button>
                        </Link>
                    </div>
                    <Image
                        src="/logo.png" 
                        alt="Clara Design Logo" 
                        width={100} 
                        height={100} 
                        className="rounded-full border-2 max-[580px]:w-[90px] max-[580px]:h-[90px] border-purple-500 shadow-md shadow-purple-500/40" 
                    />
                </footer>
            </div>
        </>
    )
}