import React from 'react'
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from 'react-navigation'
import { HomeScreen, ProfileScreen, DetailsScreen, ProfileFormScreen } from './screens/index'
import { connect } from 'react-redux'

export const ProfileScreenNavigator = StackNavigator({
    ProfileHome: { screen: ProfileScreen },
    ProfileForm: { screen: ProfileFormScreen }
})

export const RootNavigator = DrawerNavigator({
    Home: { screen: HomeScreen },
    Profile: { 
        screen: ProfileScreenNavigator,
        navigationOptions: {
            title: 'Profile Home',
        }, 
    },
    Detail: { screen: DetailsScreen }
})

const RootNavigatorWithState = ({ dispatch, nav }) => (
    <RootNavigator navigation={ addNavigationHelpers({ dispatch, state: nav }) } />
)

const mapStateToProps = state => ({
    nav: state.nav
})

export default connect(mapStateToProps)(RootNavigatorWithState)