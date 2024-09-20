'use client'
import Image from "next/image";

export default function Sim({ name, onClick } : { name: string, onClick?: () => void }) {
    let value = '';

    switch (name) {
        case "Instagram": {
            value = "/3.png";
            break;
        }
        case "Peça Já seu Orçamento" : {
          value = "/2.png";
          break;
        }
        case "Design para Redes Sociais" : {
          value = "/1.png";
          break;
        }
    }


    return (
        <div className="scale-100 text-white max-[580px]:scale-75 relative w-[30rem] h-40 border-2 flex items-start border-purple-500 rounded-tr-[4rem] rounded-bl-[4rem] drop-shadow-personal">
          <div className="w-10/12 h-20 bg-purple-500 rounded-br-2xl flex items-center justify-center">
            <p className="text-center font-sans text-2xl font-bold w-3/5"> {name} </p>
          </div>

          <Image
            src={value}
            alt="Clara Design Logo"
            width={230}
            height={230}
            priority
            className="absolute -right-12 bottom-1"
          />
      </div>
    );
}