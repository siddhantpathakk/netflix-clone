"use client";

import { Heart, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import PlayVideoModel from "./PlayVideoModel";
import { time } from "console";
import { useState } from "react";

interface iAppProps{
    title: string;
    overview: string;
    movieId: number;
    watchList: boolean;
    watchListId: string;
    youtubeUrl: string;
    year: number;
    age: number;
    duration: number;
}

export default function MovieCard({movieId, overview, title, watchList, watchListId, youtubeUrl, age, year, duration} : iAppProps) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)}className="-mt-14 mb-3">
                <PlayCircle className="w-20 h-20"/>
            </button>

            <div className="right-5 top-5 absolute z-10">
                {watchList ? (
                    <form>
                        <Button variant="outline" size="icon">
                            <Heart className="w-4 h-4 text-red-500 "/>
                        </Button>
                    </form>
                 ) : ( 
                    <form>
                        <Button variant="outline" size="icon">
                            <Heart className="w-4 h-4 text-red-500 "/>
                        </Button>
                    </form>
                 )}
            </div>
            <div className="bottom-0 absolute p-5 left-0">
                <h1 className="text-lg font-bold line-clamp-1">{title}</h1>
                <div className="gap-x-2 flex items-center">
                    <p className="font-normal text-sm">{year}</p>
                    <p className="font-normal py-0.5 px-1 border border-gray-200 rounded text-sm ">{age}+</p>
                    <p className="font-normal text-sm">{duration}h</p>
                </div>
                <p className="mt-1 text-xs line-clamp-2 text-gray-300 font-light">{overview}</p>
            </div>
            <PlayVideoModel 
                title={title} 
                overview={overview} 
                youtubeUrl={youtubeUrl} 
                state={open} 
                changeState={setOpen} 
                age={age} 
                duration={duration} 
                release={year}
            /> 
        </>
    );
}