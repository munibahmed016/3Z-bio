"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCheck, LucideIcon } from 'lucide-react';
import infoCards from '../app/libs/infoCards';
import BmiCalculator from '../app/libs/heroSection';
// import pricingCards from '../app/libs/pricingCards';
import { ReactElement } from "react";
import Footer from "../app/libs/Footer";
import Spline from '@splinetool/react-spline'

const Home: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBMI] = useState<number | null>(null);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const bmiResult = calculateBMI(weight, height);
  //   setBMI(bmiResult);
  // };

  return (
    <main className="min-h-screen h-fit flex-col items-center justify-center relative">
      <Navbar />
      <header className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black md:text-8xl">3Z-Bio</h1>
            <h3 className="text-md md:text-2xl">Start growing today!</h3>
          </div>
          <p className="max-w-text text-sm md:text-base text-zinc-500">
            Insightful is an AI-powered sales optimization tool that provides data-driven insights to boosts sales performance.
          </p>
          <div className='w-full flex items-center justify-center md:justify-start gap-4'>
            <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-blue-500 hover:text-white transition-colors'>
              Visit our web-site
            </button>
            <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-green-600 hover:text-white hover:bg-opacity-60 transition-colors'>
              Contact
            </button>
          </div>
        </div>
        {/* Uncomment the Spline section if you want to use it */}
        <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
          <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'/>
        </div>
      </header>

      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8 ">
        <div className='absolute -z-10 h-full w-full overflow-hidden'>
          <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl" />
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className='text-4xl md:text-5xl font-bold'></h3>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
            {infoCards.map((infoCard) => (
              <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                <p className="text-sm sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="pricing" className="h-fit min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8">
        <h4 className="text-4xl md:text-5xl font-bold">Pricing</h4>
        <div className='grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8'>
          {pricingCards.map((pricingCard) => (
            <PricingCard oneliner={pricingCard.oneliner} title={pricingCard.title} price={pricingCard.price} benefits={pricingCard.benefits} key={pricingCard.id} />
          ))}
        </div>
      </section> */}

      <section id="BMI Checker" className="bg-teal-50 h-fit min-h-screen w-full flex relative items-center justify-center p-8">
        {/* <h4 className='text-4xl md:text-5xl font-bold'>BMI</h4> */}
        <BmiCalculator />
        {/* <Image src="/bg.png" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl" /> */}
      </section>
      <section id="contact" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-5 relative overflow-x-hidden">
        <div className="input bg-blue-500 rounded-3xl px-10 py-10">
          <div className="flex justify-start items-start">
        <h1 className="font-semibold text-white mb-2 text-3xl md:text-3xl px-2">Ready to get started?</h1></div>
        <div className="flex">
        <p className="flex font-semibold text-white px-2 mt-3">Unsure which product is best for you? We're happy to help!
          Contact our health experts today!</p>
          <div className=" ml-9"><button className="border rounded-md px-5 py-1 bg-white hover:bg-white text-blue-500">Contact</button></div>
          </div>
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  );
};

interface IInfoCardProps {
  title: string;
  Icon: LucideIcon;
  children: ReactElement<any, any>
}

function InfoCard({ title, Icon, children }: IInfoCardProps) {
  return (
    <div className='w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className='text-lg font-bold sm:text-xl'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-gray-900 w-full h-20 backdrop-filter backdrop-blur-xl border-b flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between p-4">
        <img src="/3z_bio_logo.svg" alt="3z-bio" className="w-38 h-28" />
        {/* <h6 className="font-bold">3Z-Bio</h6> */}
        <ul className="flex gap-8">
          <li><Link className="hover:text-blue-500 text-white transition-colors text-xs sm:text-base" href={'#BMI Checker'}>BMI Checker</Link></li>
          <li><Link className="hover:text-blue-500 text-white transition-colors text-xs sm:text-base" href={'#about'}>About</Link></li>
          <li><Link className="hover:text-blue-500 text-white transition-colors text-xs sm:text-base" href={'#contact'}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
