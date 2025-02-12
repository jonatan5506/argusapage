'use client';

import React from 'react';
import { Typography } from '@material-tailwind/react';
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon
} from '@heroicons/react/24/solid';
import Image from 'next/image';

import BackgroundCard from '@/components/background-card';

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray">
        Virtualização de Servidores!
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
        💻 Modernize sua infraestrutura! Migre seu servidor on-premise para a
        nuvem com segurança, desempenho e escalabilidade.
      </Typography>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <BackgroundCard title="">
            <Image
              src="/image/saas.jpg"
              alt="Imagem de VM"
              width={500}
              height={300}
              className="mb-4 rounded-lg"
            />
          </BackgroundCard>
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={CloudIcon} title="Utilização otimizada de recursos">
                A virtualização permite consolidar vários servidores físicos em
                máquinas virtuais (VMs), aproveitando melhor os recursos de
                hardware.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option
                icon={ChartPieIcon}
                title="Flexibilidade e escalabilidade"
              >
                É possível criar, mover e gerenciar servidores virtuais de forma
                mais rápida e flexível. Isso torna mais fácil escalar a
                infraestrutura de TI conforme as necessidades da empresa.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title="Isolamento e segurança">
              A virtualização oferece uma camada de isolamento entre as VMs, o
              que significa que se uma máquina virtual falhar ou for
              comprometida, ela não afeta diretamente outras VMs no mesmo host
              físico.
            </Option>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={KeyIcon} title="Routing with React Router">
                Create single-page applications (SPAs) with seamless navigation
                using React Router.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={UsersIcon} title="Handling Forms">
                Master form handling in React and manage user input effectively.
              </Option>
            </div>
            <Option icon={CloudArrowDownIcon} title="State Management">
              Explore state management options, including local component state
              and global state using Redux or Context API.
            </Option>
          </div>
          <BackgroundCard title="Supportive Community">
            Connect with fellow learners, share experiences, and get support
            from instructors and peers.
          </BackgroundCard>
        </div> */}
      </div>
    </section>
  );
}

export default WhyChooseUs;
