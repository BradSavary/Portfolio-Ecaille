import Arrow from "../svg/Arrow";
import Logo2 from "../svg/Logo2";
import BehanceLogo from "../svg/BehanceLogo";
import InstagramLogo from "../svg/InstagramLogo";
import LinkedinLogo from "../svg/LinkedinLogo";
import PinterestLogo from "../svg/PinterestLogo";
import SectionTitle from "../SectionTitle";
import Link from "next/link";

const socials = [
  {
    name: "Behance",
    url: "https://www.behance.net/marieneloise1",
    icon: <BehanceLogo />
  },
  {
    name: "Instagram", 
    url: "https://www.instagram.com/ecaille.design/",
    icon: <InstagramLogo />
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eloise-marien/",
    icon: <LinkedinLogo />
  },
  {
    name: "Pinterest",
    url: "https://fr.pinterest.com/yooeslie/",
    icon: <PinterestLogo />
  }
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-accent-primary flex flex-col lg:flex-row lg:justify-between pt-6 px-6 md:px-12 lg:px-20 pb-10 md:pb-16 lg:pb-25 gap-6 lg:gap-6 text-background">
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full lg:max-w-1/2">
      <SectionTitle title="Contactez moi !" />
      <p className="font-medium text-base md:text-base lg:text-lg lg:max-w-3/4">
        Vous avez une question, un projet ou simplement envie de discuter ? N'hésitez pas à me contacter par mail ou sur mes réseaux sociaux ! :)
      </p>
      <a href="mailto:eloise.marien1201@gmail.com" className="text-base md:text-base lg:text-lg break-all">eloise.marien1201@gmail.com</a>
        <ul className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
          {socials.map((social) => (
            <li key={social.name} >
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" >
                {social.icon}
                <span className="underline text-sm md:text-sm lg:text-base">{social.name}</span>
              </a>
            </li>
          ))}
        </ul>
        </div>
        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-between w-full lg:w-fit">
        <Link href={"#top"}>
        <Arrow className="w-8 md:w-10 lg:w-12" />
        </Link>
        <Logo2 className="w-32 md:w-40 lg:w-50" />
        </div>
    </footer>
  );
}
