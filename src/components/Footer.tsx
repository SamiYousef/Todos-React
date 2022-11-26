import Link from "./Link";
import { LinkType } from "../types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveLink } from "../actions";

const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const linkHandler = (link: LinkType) => dispatch(setActiveLink(link));
  const activeLink = useSelector((store: { link: LinkType }) => store.link);

  return (
    <div>
      <span>Show: </span>
      <Link
        disabled={activeLink === LinkType.All}
        onClick={() => linkHandler(LinkType.All)}
      >
        <span>{LinkType[0]}</span>
      </Link>
      <Link
        disabled={activeLink === LinkType.Active}
        onClick={() => linkHandler(LinkType.Active)}
      >
        <span>{LinkType[1]}</span>
      </Link>
      <Link
        disabled={activeLink === LinkType.Completed}
        onClick={() => linkHandler(LinkType.Completed)}
      >
        <span>{LinkType[2]}</span>
      </Link>
    </div>
  );
};

export default Footer;
