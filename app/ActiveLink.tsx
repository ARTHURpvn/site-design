'use server'
import { useRouter } from "next/router";

export default function ActiveLink({ href, children }: {href: string; children: React.ReactNode;}) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        router.push(href);
    };

    return (
        <a href={href} onClick={handleClick}>{children}</a>
    );
}