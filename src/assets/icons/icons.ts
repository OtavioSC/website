import ReactIcon from "./react.svg";
import TypescriptIcon from "./typescript.svg";
import NestIcon from "./nest.svg";
import NodeIcon from "./node.svg";
import MeteorIcon from "./meteor.svg";

type Icon = {
  name: string;
  src: string;
};

const techIcons: Icon[] = [
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

export default techIcons;
