import express from "express";
import cors from "cors";

const initConfiguracionExpress={
    port:process.env.PORT || 3000,
    origin:"*",
    limitJson:"50mb",

}


export default class expressModule{
    constructor(ConfiguracionExpress=initConfiguracionExpress){
        const config={...initConfiguracionExpress,...ConfiguracionExpress}
        this.port = config.port
        this.app = express()
        this.origin=config.origin;
        this.limitJson=config.limitJson
        this.app.use(cors(
            {
                origin:this.origin
            }
        ))
        this.app.use(express.json({
            limit:this.limitJson
        }))

    }
    star (mensajeInicio= "Servidor iniciado"){
        try {
            
      
           

            this.app.listen(this.port,()=>{
                console.log(mensajeInicio+" "+this.port)
            })
        } catch (error) {
            return new Error(error)
        }

    }
    usar(contenido1,contenido2){
       this.app.use(contenido1,contenido2);
    }
    estaticos(patch,ruta){
        this.app.use(patch,express.static(ruta));
    }

}