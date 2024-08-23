import Image from "next/image";
import Sim from "./Sim";
import Link from "next/link";

export default function Home() {
  return (
      <div className="w-full h-screen flex flex-col items-center pt-10 max-[480px]:pt-2 overflow-x-hidden">
        <figure>
          <Image
            src="/logo.png"
            alt=" Clara Design Logo "
            width={120}
            height={120}
            priority
            className="rounded-full border-2 scale-100 max-[480px]:scale-75 border-purple-500 shadow-md shadow-purple-500/40"
          />

          <p className="text-center mt-6 max-[480px]:mt-2 font-serif max-[480px]:text-sm"> Clara Ferreira </p>

        </figure>
        <div className="flex flex-col gap-24 max-[480px]:gap-6 pt-24 pb-6">
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