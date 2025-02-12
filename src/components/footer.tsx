import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Empresa",
    items: ["Sobre Nós", "Home", "Entre em Contato"],
  },
  {
    title: "Páginas",
    items: ["Login", "Registro","Contato"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <Typography variant="h6" className="mb-3 text-left">
            Inscreva-se
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
            Tenha acesso a ofertas exclusivas para assinantes e seja o primeiro a ser informado sobre novas vendas.
            </Typography>
            <Typography variant="small" className="font-medium mb-2 text-left">
              Seu email
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="Email" color="gray" />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  Eu aceito os{" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Termos e Condições{" "}
                  </a>
                </Typography>
              </div>
              <Button color="gray" className="w-full lg:w-fit" size="md">
                enviar
              </Button>
            </div>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Todos os direitos reservados a ArgusTech
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
