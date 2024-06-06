// const calculateBMI = (weight: number, height: number): number => {
//     const heightInMeters = height / 100;
//     return weight / (heightInMeters * heightInMeters);
//   };
  
//   export default calculateBMI;

import { useState } from 'react';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState('00.00');
  const [bmiStatus, setBmiStatus] = useState('');

  const calculateBMI = () => {
    if (height === '' || weight === '') {
      alert('Please fill out the input fields!');
      return;
    }

    let heightInMeters = height / 100;
    let BMI = weight / (heightInMeters * heightInMeters);
    BMI = BMI.toFixed(2);
    setBmiResult(BMI);

    let status = '';
    if (BMI < 18.5) {
      status = 'Underweight';
    } else if (BMI >= 18.5 && BMI < 25) {
      status = 'Healthy';
    } else if (BMI >= 25 && BMI < 30) {
      status = 'Overweight';
    } else {
      status = 'Obese';
    }
    setBmiStatus(status);
  };

  return (
    <div className=' border border-slate-300 bg-green-200 rounded-[12px]'>
      <div className="">
        <h1 className='mt-5 text-3xl md:text-5xl font-bold flex items-center justify-center'>BMI Calculator</h1>
        <div className="content px-12">
          <div className="input bg-cyan-400 shadow-[0px 0px 95px -30px rgba(0, 0, 0, 0.15)] rounded-[30px] py-5 mb-5 mt-6">
            <label htmlFor="height" className=" flex items-center justify-center font-semibold text-lg text-black mb-5 ">Height(cm)</label>
            <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} className=" flex  border rounded-full border-slate-400 w-3/5 text-center text-2xl mx-auto" />
          </div>
          <div className="input bg-cyan-400 shadow-[0px 0px 95px -30px rgba(0, 0, 0, 0.15)] rounded-[30px] py-5 mb-5">
            <label htmlFor="weight" className="flex font-semibold text-lg text-black mb-5 items-center justify-center">Weight(kg)</label>
            <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} className="flex border rounded-full border-slate-400  w-3/5 text-center text-2xl mx-auto" />
          </div>
          <button id="calculate" onClick={calculateBMI} className="font-semibold text-white bg-cyan-500 hover:bg-green-600 rounded-[22px] py-3 w-full outline-none transition-colors duration-200">Calculate BMI</button>
        </div>
        <div className="result py-8 px-5">
          <p className=" flex items-center justify-center font-semibold text-lg text-black mb-4">Your BMI is</p>
          <div id="result" className="font-extrabold text-3xl text-blue-500 bg-gray-300 inline-block px-8 py-2 rounded-[55px] mb-8 flex items-center justify-center">{bmiResult}</div>
          <p className="comment font-semibold text-blue-500 flex items-center justify-center">Comment: you are <span id="comment">{bmiStatus}</span></p>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
