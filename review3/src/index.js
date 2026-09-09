import { fetchPhotos } from "./util/getData.js";

const processRequest = (id)=>{
    const numberOfArgs = process.argv.length
    if (numberOfArgs>2){
        // validate we have numeric values
        for (let i=2; i<numberOfArgs; i++){
            fetchPhotos(process.argv[i])
            .then( (p)=>{
                console.log(p)
            } )
            .catch( (err)=>{ console.log(`Problem: ${err}`)} )
        }
    }
}
processRequest()