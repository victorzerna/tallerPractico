import React, { Component } from 'react';
import { View, Text, FlatList} from 'react-native';
import ItemPlayer from './Components/item-player';
import ItemSeparator from './Components/item-separator';
import httpPlayers from './../../services/Players/http-players';

class Players extends Component {

    constructor(props){
        super(props);
        this.state = {
            playerList: []
        };
    }

    componentDidMount= ()=>{
        console.log('================Llamado a el servicio')
        this.invokeGetPlayerList();
    };

    async invokeGetPlayerList(){
        console.log('================Llamado a el servicio')
        const data = await httpPlayers.getPlayers( 133604 );
        //console.log( data );
        this.setState( { playerList: data } );
    }

    static navigationOptions = {
        title: 'Players List',
    }

    renderItem=({item}) => <ItemPlayer navigation={this.props.navigation} team={item}/>
    separatorComponent=()=> <ItemSeparator />
    emptyComponent=()=> <Text>No hay jugadores</Text> 
    keyExtractor=item => item.idTeam

    render() {
        return (
            <View>               
                <FlatList
                    data={this.state.catalogoList}
                    renderItem={this.renderItem}
                    ListItemComponent={this.emptyComponent}
                    ItemSeparatorComponent={this.separatorComponent}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }

}

export default Players;