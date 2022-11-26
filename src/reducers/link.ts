import { SET_ACTIVE_LINK } from "../actions";
import { LinkType } from "../types";

interface ILinkAction {
  type: string;
  link: LinkType;
}

const Link = (
  store: LinkType = LinkType.All,
  action: ILinkAction
): LinkType => {
  console.log(store);
  switch (action.type) {
    case SET_ACTIVE_LINK:
      return action.link;
    default:
      return store;
  }
};

export default Link;
