"use client";

import { Bell, Search } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import UserNav from "./UserNav";
import {usePathname} from "next/navigation";

interface linkProps{
    name: string;
    href: string;
}
const links: linkProps [] = [
    {name: "Home", href: "/home"},
    {name: "TV Shows", href: "/home/shows"},
    {name: "Movies", href: "/home/movies"},
    {name: "Recently Added", href: "/home/recently"},
    {name: "My List", href: "/home/user/list"}
];

export default function NavBar() {
    const pathName = usePathname();
    return (
        <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <div className="flex items-center">
                <Link href="/home" className="w-32">
                    <Image src = {Logo} alt="logo" priority/>
                </Link>
                <ul className="lg:flex ml-14 gap-x-10 hidden">
                    {links.map((link, idx) => (
                        <div key = {idx}>
                            {pathName === link.href ? (
                                <li>
                                    <Link href= {link.href} className="text-white font-semibold underline">{link.name}</Link>
                                </li>
                            ): (
                                <li>
                                    <Link href= {link.href} className="text-gray-300 font-normal">{link.name}</Link>
                                </li>
                            )} 
                        </div>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-x-8">
                <Search className="cursor-pointer"/>
                <Bell className='cursor-pointer'/>
                <UserNav/>
            </div>
        </div>
    );
}