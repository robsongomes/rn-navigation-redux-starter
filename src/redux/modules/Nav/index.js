import { RootNavigator, ProfileScreenNavigator } from '../../../RootNavigator'
import { NavigationActions } from 'react-navigation'

// const homeAction = RootNavigator.router.getActionForPathAndParams('Home')
// const homeNavState = RootNavigator.router.getStateForAction(homeAction)

// const profileAction = RootNavigator.router.getActionForPathAndParams('Profile')
// const profileNavState = RootNavigator.router.getStateForAction(profileAction)

const initialState = RootNavigator.router.getStateForAction(NavigationActions.init())

const navReducer = (state = initialState, action) => {
    console.log(state, action)
    return RootNavigator.router.getStateForAction(action, state)
    // switch(action.type) {
    //     case 'Home':
    //         return state;
    //     default:
    //         return RootNavigator.router.getStateForAction(action, state)
    // }
}

export default navReducer