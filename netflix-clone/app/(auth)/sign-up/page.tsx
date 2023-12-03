import { Button } from "@/components/ui/button";
import {FacebookIcon} from "lucide-react";
import GoogleIcon from "../../../public/google-icon.png"
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignUp() {
    return (
        <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
            <form>
                <h1 className="text-3xl font-semibold text-white">
                    Sign up.
                </h1>

                <div className="space-y-4 mt-5">
                    <Input type="email" name="email" placeholder="Email" 
                    className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
                    />
                    <Button type='submit' variant="destructive" className="w-full bg-[#e50914]">Sign Up</Button>
                    
                </div>
                
            </form>

            <div className="text-gray-500 text-sm mt-2">
                 Already have an account?&nbsp;&nbsp;
                 <Link className='text-white hover-underline' href="/login">
                    Log in.
                </Link>
            </div>


            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <Button variant='outline' size='icon'>
                    <Image 
                        src={GoogleIcon} 
                        alt="google icon" 
                        className="w-4 h-4"
                    />
                </Button>

                <Button variant='outline' size='icon'>
                     <FacebookIcon className="w-4 h-4"/>
                </Button>
            </div>

        </div>
    )
}