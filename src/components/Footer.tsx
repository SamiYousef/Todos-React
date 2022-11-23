import Link from "./Link";
import { LinkType } from "../types";

interface IFooter {
  activeLink: LinkType;
  linkClickHandler: (link: LinkType) => void;
}

export default function Footer({ activeLink, linkClickHandler }: IFooter) {
  return (
    <div>
      <span>Show: </span>
      <Link
        disabled={activeLink === LinkType.All}
        onClick={() => {
          linkClickHandler(LinkType.All);
        }}
      >
        <span>{LinkType[0]}</span>
      </Link>
      <Link
        disabled={activeLink === LinkType.Active}
        onClick={() => {
          linkClickHandler(LinkType.Active);
        }}
      >
        <span>{LinkType[1]}</span>
      </Link>
      <Link
        disabled={activeLink === LinkType.Completed}
        onClick={() => {
          linkClickHandler(LinkType.Completed);
        }}
      >
        <span>{LinkType[2]}</span>
      </Link>
    </div>
  );
}
