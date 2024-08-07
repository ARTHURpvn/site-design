'use client'

import Image from "next/image";
import Sim from "./Sim";
import Instagram from "./Instagram";
import { useState } from "react";


export default function Home() {
  const[navegation, setNavegation] = useState("Home")

  return (
    <>
      {navegation === "Home" ? (
        <div  className="w-full flex flex-col items-center mt-20 ">
          <figure>
            <Image
              src="/logo.png"
              alt="Clara Design Logo"
              width={120}
              height={120}
              priority
              className="rounded-full border-2 border-purple-500 shadow-md shadow-purple-500/40"
            />

            <p className="text-center mt-6 font-serif"> Clara Ferreira </p>

          </figure>
          <div className="pb-20 mt-10">
            <Sim name="Design para Redes Sociais" onClick={() => setNavegation("Instagram")}/>
            <Sim name="Peça Já seu Orçamento"/>
            <Sim name="Instagram"/>
          </div>
        </div>
        ) : navegation === "Instagram" && (
        <Instagram onClick={() => setNavegation("Home")}/>
      )}
    </>
    );
}