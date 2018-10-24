import {API_BASE, HTTP_PLAYER} from '../config';
import httpBase from '../http-base';


class HttpPlayers {

//metodo para retornar usuarios
    async getPlayers (teamId){
        try {
            console.log('============================Inicia')
            const url = `${API_BASE}${HTTP_PLAYER.getPlayers}?id=${teamId}`
            console.log(url)
            const data = await httpBase.baseGet( url, {} );
            console.log(data)
            return data.player;
        } catch( err ){
            console.log(err);
        }
    }

/*    async getProductByID (ID){
        try {
            //let ID = '5b2e5cddb610750014703b55';
            const url = `${ API_BASE }${ HTTP_PRODUCT.getProduct}/${ ID }`;
            
           /* const config = {
                headers: {
                    Authorization: `Bearer: ${ ID }`
                }
            }*/
 /*           const data = await httpBase.baseGet(url, {});
            return data;
        } catch (err) {
            console.log(err);
        }
    }
*/
}

export default new HttpPlayers;