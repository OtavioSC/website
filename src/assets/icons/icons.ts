import ReactIcon from "./react.svg";
import TypescriptIcon from "./typescript.svg";
import NestIcon from "./nest.svg";
import NodeIcon from "./node.svg";
import MeteorIcon from "./meteor.svg";
import GithubIcon from "./github.svg";
import LinkedinIcon from "./linkedin.svg";
import TwitterIcon from "./twitter.svg";

type Icon = {
  name: string;
  src: string;
};

export const techIcons: Icon[] = [
  {
    name: "React icon",
    src: ReactIcon,
  },
  {
    name: "Typescript icon",
    src: TypescriptIcon,
  },
  {
    name: "Nest icon",
    src: NestIcon,
  },
  {
    name: "Node icon",
    src: NodeIcon,
  },
  {
    name: "Meteor icon",
    src: MeteorIcon,
  },
];

export const socialIcons: Icon[] = [
  {
    name: "Github Icon",
    src: GithubIcon,
  },
  {
    name: "Linkedin Icon",
    src: LinkedinIcon,
  },
  {
    name: "Twitter Icon",
    src: TwitterIcon,
  },
];
