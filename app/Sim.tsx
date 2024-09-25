'use client'
import Image from "next/image";

export default function Sim({ name } : { name: string }) {
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
        <div className = {
            `text-white relative w-[30rem] h-[8.5rem] border-2 flex items-start border-purple-500 rounded-tr-[4rem] rounded-bl-[4rem] drop-shadow-personal
            max-[580px]:w-[22rem] max-[580px]:h-[6.6rem]`
          }>

          <div className = {
            `w-10/12 h-20 bg-purple-500 rounded-br-2xl flex items-center justify-center
            max-[580px]:h-[3.5rem]`
          }>
            <p className="text-center font-sans text-2xl font-bold w-3/5 max-[580px]:text-lg max-[580px]:leading-5"> { name } </p>
          </div>

          <Image
            src={ value }
            alt="Clara Design Logo"
            width={ 200 }
            height={ 200 }
            priority
            className="absolute -right-12 bottom-6 w-[35%] max-[580px]:w-[40%] max-[580px]:-right-6 max-[580px]:bottom-2"
          />
      </div>
    );
}