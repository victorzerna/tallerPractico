/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import Players from './src/scenes/Players';

import{ StackNavigator } from 'react-navigation';

//Aca se crean todos los screen o escenas de la navegación
const AppNavigator = StackNavigator(
    {
        PlayerScreen : { 
            screen : Players
        },
/*        ContactsScreen :{
            screen : Contacts
        },
        //DiaryScreen : Diary es igual que el llamado de abajo sin navigation
        DiaryScreen: {
            screen : Diary,
            navigatiosOptions: () => ({
                title : 'Diary'
            })
        }
*/        
    },
    {
        initialRouteName: 'PlayerScreen',
        navigationOptions:{
            title: 'View Player',
            headerStyle:{
                backgroundColor: '#2B1FA2',
                borderBottomColor: '#2B1FA2',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: '500',
                fontSize: 26,
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: '500',
                fontSize: 10,
            }
        }
    }
);

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);

    };


    render() {
        return (

           <AppNavigator />
        );
    }
}