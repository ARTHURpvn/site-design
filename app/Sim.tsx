'use client'
import Image from "next/image";
export default function Sim({ name, onClick } : { name: string, onClick?: () => void }) {
    let link = '';

    switch (name) {
        case "Instagram": {
            link = "https://www.instagram.com/design_frchaves/";
            break;
        }
    }


    return (
        <div className="scale-100 max-[480px]:scale-75 relative w-[30rem] h-40 border-2 flex items-start border-purple-500 rounded-tr-[4rem] rounded-bl-[4rem] drop-shadow-personal">
          <div className="w-3/5 h-20 bg-purple-500 rounded-br-2xl flex items-center justify-center">
            <p className="text-center font-sans text-2xl font-bold w-3/5"> {name} </p>
          </div>

          <Image
            src="/1.png"
            alt="Clara Design Logo"
            width={450}
            height={450}
            priority
            className="absolute -right-24 bottom-1"
          />
      </div>
    );
}