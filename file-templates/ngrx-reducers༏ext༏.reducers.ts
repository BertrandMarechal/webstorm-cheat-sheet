#set($class_name = ${StringUtils.removeAndHump(${NAME}, "-")})
#set($class_name_first_lower = $class_name.substring(0,1).toLowerCase() + $class_name.substring(1))
#set($class_name_low = $NAME.replace("-"," ").toLowerCase())
#set($class_name_cap = $NAME.replace("-","_").toUpperCase())

import {AppState} from '@app/store/reducers/app.reducers';
import * as ${class_name}Actions from '@app/store/actions/${NAME}.actions';

export interface FeatureState extends AppState {
  ${class_name_first_lower}: State;
}

export interface State {
  doingSomething: boolean;
}

const ${class_name_first_lower}InitialState: State = {
  doingSomething: false
};

export function ${class_name_first_lower}Reducers (
  state = ${class_name_first_lower}InitialState,
  action: ${class_name}Actions.${class_name}Actions,
) {
  switch (action.type) {
    case ${class_name}Actions.PAGE_DO_SOMETHING:
      return {
        ...state,
        doingSomething: true
      };
    case ${class_name}Actions.SERVICE_DO_SOMETHING_COMPLETE:
      return {
        ...state,
        doingSomething: false
      };
    case ${class_name}Actions.SERVICE_DO_SOMETHING_FAILED:
      return {
        ...state,
        doingSomething: false
      };
  }
  return state;
}
