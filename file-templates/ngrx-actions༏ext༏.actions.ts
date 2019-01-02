/**
 * Created by ${USER} on ${DATE}
 */
#set ($d = "${")
#set ($c = "}")
#set($class_name = ${StringUtils.removeAndHump(${NAME}, "-")})
#set($class_name = ${StringUtils.removeAndHump($class_name, ".")})
#set($class_name_low = $NAME.replace("-"," ").toLowerCase())
#set($class_name_cap = $NAME.replace("-","_").toUpperCase())
import {Action} from '@ngrx/store';

const $class_name_cap = '$class_name_low';

export const PAGE_DO_SOMETHING = `[$d$class_name_cap$c page] do something`;
export const SERVICE_DO_SOMETHING_COMPLETE = `[$d$class_name_cap$c service] do something complete`;
export const SERVICE_DO_SOMETHING_FAILED = `[$d$class_name_cap$c service] do something failed`;

export class PageDoSomethingAction implements Action {
  readonly type = PAGE_DO_SOMETHING;
  constructor(public payload: string) {
  }
}
export class ServiceDoSomethingCompleteAction implements Action {
  readonly type = SERVICE_DO_SOMETHING_COMPLETE;
  constructor(public payload: string) {
  }
}
export class ServiceDoSomethingFailedAction implements Action {
  readonly type = SERVICE_DO_SOMETHING_FAILED;
  constructor(public payload: string) {
  }
}


export type ${class_name}Actions =
  | PageDoSomethingAction
  | ServiceDoSomethingCompleteAction
  | ServiceDoSomethingFailedAction
  ;