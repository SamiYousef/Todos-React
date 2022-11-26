import { LinkType } from "../types";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_ACTIVE_LINK = "SET_ACTIVE_LINK";

export const addTodo = (todo: string): { type: string; todo: string } => ({
  type: ADD_TODO,
  todo,
});

export const toggleTodo = (id: string): { type: string; id: string } => ({
  type: TOGGLE_TODO,
  id,
});

export const setActiveLink = (
  link: LinkType
): { type: string; link: LinkType } => ({
  type: SET_ACTIVE_LINK,
  link,
});
