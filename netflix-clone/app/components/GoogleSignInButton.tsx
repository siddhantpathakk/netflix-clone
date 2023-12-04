"use client";

import { Button } from "@/components/ui/button";
import GoogleIcon from "../../public/google-icon.png"
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function GithubSignInButton() {
    return (
        <Button onClick={() =>  signIn('google')} variant='outline' size='icon'>                    
        <Image 
            src={GoogleIcon} 
            alt="google icon" 
            className="w-4 h-4"
        />
        </Button>
    );
}