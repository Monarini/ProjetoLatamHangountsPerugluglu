import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
   Notify: ["title", "message", "types", "onLoad", "onClose"],
});
