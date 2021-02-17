import { createReducer } from "reduxsauce";

import { Types } from "./actions";
import { INITIAL_STATE } from './state';

const notify = (state = INITIAL_STATE, { title, message, types, onLoad, onClose }: any) => ({
   title,
   message,
   types,
   onLoad,
   onClose
});

export default createReducer(INITIAL_STATE, {
   [Types.NOTIFY!.toString()]: notify
} as any);
