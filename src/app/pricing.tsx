"use client";
import React from "react";
import { Card, CardBody, Button, Typography } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";


const PRICING_OPTIONS = [
  "💻 Suporte Técnico Remoto e Presencial",
  "🛠️ Manutenção de Sistemas e Infraestrutura",
  "🔒 Segurança de Redes e Dados",
  "📦 Gerenciamento de Backup e Recuperação de Dados",
  "🌐 Suporte a Redes e Conectividade",
  "🖥️ Instalação e Configuração de Software",
  "🔧 Suporte à Infraestrutura de Servidores e Data Centers",
];

export function Pricing() {
  return (
    <div className="grid min-h-screen place-items-center">
      <section className="container mx-auto px-10">
        <div className="grid place-items-center pb-20 text-center">
          {/* <Typography variant="h2" color="blue-gray">
          💰 Pague de acordo com os serviços prestados!.
          </Typography> */}
        </div>
        <Card className="px-6 pb-5">
          <CardBody>
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap items-center gap-x-20 gap-y-6">
                  <Typography variant="h6" color="blue-gray">
                    Serviços Prestados
                  </Typography>
                  <hr className="w-72 bg-gray-500" />
                </div>

                <div className="mt-8 grid grid-cols-2 justify-between gap-x-12 gap-y-2">
                  {PRICING_OPTIONS.map((option, key) => (
                    <div key={key} className="flex items-center gap-4">
                      <CheckIcon
                        className="h-4 w-4 text-gray-900"
                        strokeWidth={3}
                      />
                      <Typography
                        variant="paragraph"
                        className="font-normal !text-gray-500"
                      >
                        {option}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid place-items-center lg:justify-end">
                <Typography variant="h6" color="blue-gray">
                  Planos a partir de 
                </Typography>
                <Typography variant="h1" color="blue-gray">
                  R$399
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal !text-gray-500"
                >
                  Consulte demais valores!
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}


export default Pricing;
