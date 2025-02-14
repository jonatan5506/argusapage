'use client';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';

export function FixedPlugin() {
  return (
    <a href="https://wa.me/5521969103370" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <i className="fa-brands fa-whatsapp text-base" />
        Whatsapp
      </Button>
    </a>
  );
}

{
  /* <IconButton
            variant="text"
            color={isScrolling ? 'gray' : 'white'}
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            onClick={() => window.open('https://wa.me/5521969103370', '_blank')}
          >
            <i className="fa-brands fa-whatsapp text-base" />
          </IconButton> */
}
