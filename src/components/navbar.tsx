import React from 'react';
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button
} from '@material-tailwind/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || '#'}
        target={href ? '_blank' : '_self'}
        variant="small"
        className="font-medium"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? 'white' : 'transparent'}
      className="fixed top-0 z-50 border-0"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          variant="h6"
          color={isScrolling ? 'blue-gray' : 'white'}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          ArgusTech
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? 'text-gray-900' : 'text-white'
          }`}
        >
          <NavItem>Home</NavItem>
          <NavItem>Sobre Nós</NavItem>
          <NavItem>Entre em Contato</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex">
          <IconButton
            variant="text"
            color={isScrolling ? 'gray' : 'white'}
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? 'gray' : 'white'}
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-whatsapp text-base" />
          </IconButton>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? 'gray' : 'white'}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>Sobre Nós</NavItem>
            <NavItem>Entre em Contato</NavItem>
          </ul>
          <div className="mt-4 flex gap-2">
            <IconButton
              variant="text"
              color="gray"
              size="sm"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <IconButton
              variant="text"
              color="gray"
              size="sm"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-whatsapp text-base" />
            </IconButton>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
