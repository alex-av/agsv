import { createAction, props } from '@ngrx/store';
import { ModelNavigation } from 'src/app/core/models/navigation.model';


export const onLoadding = createAction(
    '[Activate Loadding] LoaddingOn'
)

export const offLoadding = createAction(
    '[Activate Loadding] LoaddingOff'
)

export const setMenu = createAction(
    '[Set Menu] setMenu', 
    props< ModelNavigation >()
)