import MovieButtons from "./MovieButtons";
import prisma from "../utils/db"

async function getData() {
    const data = await prisma.movie.findFirst({
        select: {
            title: true,
            overview: true,
            videoSource: true,
            imageString: true,
            release: true,
            duration: true,
            id: true,
            age:true
        }
    });

    return data;
}


export default async function MovieVideo() {
    
    const data = await getData();
    
    return (
        <div className="h-[55vh] lg:h-[60vh] w-full flex justify-center items-center">
            <video poster={data?.imageString} autoPlay muted loop src={data?.videoSource} 
            className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]">
            </video>
            
            <div className="absolute w-[90%] lg:w-[90%] mx-auto">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">{data?.title}</h1>
                <p className="text-white mt-5 text-lg line-clamp-3">{data?.overview}</p>
                <div className="flex gap-x-3 mt-4">
                    <MovieButtons 
                        title={data?.title as string }
                        overview={data?.overview as string}
                        youtubeUrl={data?.videoSource as string}
                        age={data?.age as number}
                        duration={data?.duration as number}
                        releaseDate={data?.release as number}
                        id={data?.id as number}
                        key= {data?.id as number}
                    />
                </div>
            </div>
        </div>
    )
}