"use client";

import {  Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Reduza problemas de TI e foque no que realmente importa!
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          A <strong>Argus</strong>Tech é uma empresa especializada em suporte de TI, oferecendo serviços personalizados. Nosso objetivo é garantir segurança, eficiência e continuidade dos processos tecnológicos de nossos clientes..
        </Typography>
        <div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
