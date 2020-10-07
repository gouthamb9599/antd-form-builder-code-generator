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
    subject.next(state);
  },
  send: (subject, data) => 
  {
    state = {
      ...state,
      values:data
    };
    globalSubject.next({ topic: subject, data: data })
  }

}
export { MessageBus };
