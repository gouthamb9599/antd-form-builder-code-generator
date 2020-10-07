import { Subject } from "rxjs";
import { filter } from "rxjs/operators";

const globalSubject = new Subject();
const subscriptions = {};
const initialState = {
 values:null
};
let state = initialState;

const MessageBus = {
  init: () => {
    state = { ...state, values: null };
    globalSubject.next(state);
  },
  send: (globalSubject, data) => 
  {
    state = {
      ...state,
      values:data
    };
    globalSubject.next({ topic: globalSubject, data: data })
  }

}
export { MessageBus };
