const API_ENDPOINT = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal";

class Api {

    
    /**POr medio de la ejecución de este metodo se obtiene una promesa
     * 
     */

    getPlayers(){

        let promise = new Promise ( (resolve, reject) => {

            fetch(`${API_ENDPOINT}`)
            .then( response => response.json() )
            .then( data => resolve(data) )
            .catch( error => {
                //TODO
                //console.log('error JSON');
                //console.log(error);
                reject(error);
                }
            ) 
            .catch( error => reject(error) );
        });
        return promise;
    }

    async getProductsAwait(){
        try{
            const query = await fetch(`${API_ENDPOINT}/products`);
            const data = await query.json();
            return data;
        }catch( error  ){
            console.log(error);
        }
        

    }

    getProductsById(id){
        let promise = new Promise( (resolve, reject) => {
            fetch(`${API_ENDPOINT}/products/${id}`)
            .then( response => response.json())
            .then( data => resolve(data) )
            .catch (error =>{
                reject(error)
            })
            .catch( error => reject(error) )
        });
        return promise;
    }

}

export default new Api();