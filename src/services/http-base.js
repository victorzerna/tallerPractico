class HttpBase{

    async basePost(url, config){
        try {
            const options = {
                method: 'POST',
                headers: this.headersConfig(config.headers),
                //Convertir un javascript en objeto en JSON
                body: JSON.stringify(config.params)
            };
            let query = this.callHttp( url, options);
            const data = await query.json();

        } catch (err) {
            throw new Error(err);
        }
    }

    headersConfig( customHeaders ){
        const defaultHeaders = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
        const headersConfigObject = Object.assign(defaultHeaders, customHeaders);
        let headers = new Headers(headersConfigObject);
        return headers;
    }

    async baseGet(url, config){
        try {
            const options = {
                method: 'GET',
                headers: this.headersConfig(config.headers),
            };
            let query = this.callHttp( url, options);
            const data = await query.json();
            return data;
        } catch (err) {
            throw new Error(err);
        }
    }



    callHttp(url, options){
        let promise = new Promise( (resolve, reject) => {
            fetch(url, options)
            .then( response => resolve( response) )
            .catch( error => reject( error) )
            
        });
        return promise;
    }

}

export default new HttpBase;