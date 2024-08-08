import Image from "next/image";
import Sim from "./Sim";
import Link from "next/link";

export default function Home() {


  return (
      <div className="w-full h-screen flex flex-col items-center mt-20 ">
        <figure>
          <Image
            src="/logo.png"
            alt="Clara Design Logo"
            width={120}
            height={120}
            priority
            className="rounded-full border-2 scale-100 min-[320px]:scale-75 border-purple-500 shadow-md shadow-purple-500/40"
          />

          <p className="text-center mt-6 min-[320px]:mt-2 font-serif min-[320px]:text-sm"> Clara Ferreira </p>

        </figure>
        <div className="pb-20 min-[320px]:pb-10 mt-10" >
          <Link href="/Instagram">
            <Sim name="Design para Redes Sociais" />
          </Link>
          <Sim name="Peça Já seu Orçamento"/>
          <Sim name="Instagram"/>
        </div>
      </div>
    );
}