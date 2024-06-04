"Use Client"
import Link from "next/link";
import Spline from "../app/libs/r3f";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen h-fit flex-col items-center justify-center relative">
    <Navbar/>
    <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden:">
    <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black md:text-8xl">3Z-Bio</h1>
        <h3 className="text-md md:text-2xl">Start growing today!</h3>
      </div>
      <p className="max-w-text text-sm md:text-base text-zinc-500"> Insightful is an AI-powered sales optimization tool that provides data-driven insights to boosts sales performance. </p>
      <div className='w-full flex items-center justify-center md:justify-start gap-4'>
            <button  className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors'>Visit our web-site</button>
            <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors'>Contact</button>
          </div>
    </div>

    <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
          <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start"/>
        </div>

    </header>
    <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
        <div className='absolute -z-10 h-full w-full overflow-hidden'>
          <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl"/>
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className='text-4xl md:text-5xl font-bold'></h3>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
            {/* {infoCards.map((infoCard) => {
              return (
                <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                  <p className="text-sm sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
                </InfoCard>
              )
            })} */}
          </div>
        </div>
      </section>
   </main>
  );
}

function Navbar (){
  return(
    <div className="w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between p-4">
    <h6 className="font-bold">3Z-Bio</h6>
    <ul className="flex gap-8">
      <li><Link className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base" href={'#home'}>Home</Link></li>
      <li><Link className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base" href={'#about'}>About</Link></li>
      <li><Link className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base" href={'#contact'}>Contact</Link></li>
    </ul>
      </div>
    </div>
  )
}
