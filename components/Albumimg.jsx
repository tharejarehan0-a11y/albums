import Image from "next/image"
export default function Albumimg({src},num){
    return(
    <div className="flex justify-center items-center">
        <Image src={src} height="600" width="600" alt="albums" loading="eager" className={"h-fit w-fit rounded-2xl border-4 border-white shadow-2xl shadow-black album-box z-1"} id={num}/>
    </div>
    )
}