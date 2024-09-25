'use client'

import Image from "next/image";
import Sim from "./Sim";
import Link from "next/link";
import Theme from "./theme";


export default function Home() {
  return (
      <div className="w-full transition-all duration-500 dark:bg-black dark:text-white text-black bg-white h-screen flex flex-col items-center pt-10 max-[580px]:pt-2 overflow-x-hidden">
          <Theme />
          <Image
            src="/logo.png"
            alt=" Clara Design Logo "
            width={120}
            height={120}
            priority
            className="rounded-full border-2 scale-100 max-[580px]:scale-75 border-purple-500 shadow-md shadow-purple-500/40"
          />

          <p className="text-center mt-6 max-[580px]:mt-2 font-serif max-[580px]:text-sm"> CLARA FERREIRA </p>
          <p  className="max-[580px]:w-3/4 w-[80%] text-justify mt-6 max-[580px]:mt-4 font-serif max-[580px]:text-sm"> Sou a Clara, cursando técnico em Informática. Trabalho em projetos para lojas variadas, pequenas empresas, e estou sempre buscando criar designes, garantindo soluções criativas e personalizadas. </p>

        <div className="flex flex-col gap-14 max-[580px]:gap-10 max-[580px]:pt-24 pt-24 pb-6">
          <Link href="/Instagram">
            <Sim name="Design para Redes Sociais" />
          </Link>

          <Link href="https://wa.me/5534984083200?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram.%0AGostaria%20de%20saber%20mais">
            <Sim name="Peça Já seu Orçamento" />
          </Link>

          <Link href="https://www.instagram.com/design_frchaves">
            <Sim name="Instagram" />
          </Link>
        </div>
      </div>
    );
}