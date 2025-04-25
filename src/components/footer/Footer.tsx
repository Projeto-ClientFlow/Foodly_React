import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <footer className="bg-[#FF4D38] text-white font-rubik">
      <div className="container mx-auto flex justify-between items-center py-6 px-8 text-lg font-bold">
        <p>Desenvolvido com ♥</p>

        <p>© {data} - Foodly</p>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/school/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={40} weight="bold" />
          </a>
          <a
            href="https://www.instagram.com/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo size={40} weight="bold" />
          </a>
          <a
            href="https://www.facebook.com/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogo size={40} weight="bold" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
