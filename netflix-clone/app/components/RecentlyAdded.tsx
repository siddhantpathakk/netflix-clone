import Image from "next/image";
import MovieCard from "./MovieCard";
import prisma from "../utils/db"

async function getData() {
    const data = await prisma.movie.findMany({
        select: {
            title: true,
            overview: true,
            youtubeString: true,
            imageString: true,
            id: true,
            WatchLists: true,
            age: true,
            duration: true,
            release: true,
        },
        orderBy: {
            createdAt: "desc"
        },
        take:4,
    })

    return data;
}


export default async function RecentlyAdded(){
    const data = await getData();
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
            {data.map((movie) => (
                <div key={movie.id} className="relative h-48 flex">
                    <Image src={movie.imageString} alt={movie.title} 
                    width={500}
                    height={400}
                    className="rounded-sm absolute w-full h-full object-cover"/>
                    <div className="relative z-10 w-full h-60 transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                        <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
                            <Image src={movie.imageString} alt={movie.title}
                            width={800}
                            height={800}
                            className="absolute w-full h-full -z-10 rounded-lg object-cover"/>
                            <MovieCard 
                                movieId={movie.id} title={movie.title} overview={movie.overview} 
                                youtubeUrl={movie.youtubeString} 
                                watchListId={movie.WatchLists[0]?.id} 
                                watchList={movie.WatchLists.length > 0 ? true : false}
                                key={movie.id}
                                age={movie.age}
                                duration={movie.duration}
                                year={movie.release}/>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}