import BackgroundImage from "../../public/bg.webp";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { ReactNode } from "react";

export default function AuthLayout({children}: {children: ReactNode}){
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Image
                src = {BackgroundImage}
                alt = 'background image'
                className = 'hidden sm:flex sm:object-cover -z-10 brightness-80 md:brightness-50'
                priority
                fill
            />
            <Image 
                src = {Logo}
                alt = 'logo'
                width = {200}
                height = {100}
                className = 'absolute top-10 md:align-middle brightness-150'
                priority
            />
            {children}
        </div>
        
    )
}