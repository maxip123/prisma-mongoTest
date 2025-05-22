import Jwt from 'jsonwebtoken'

export function crearTokent(datos) {
   // console.log({m:"crear tokent",datos})
    return Jwt.sign(datos,"process.env.SECRET_TOKENT",{
        expiresIn:'1h'
    });
}

export function desifrar(wt) {
    return Jwt.decode(wt,"process.env.SECRET_TOKENT")
}
export function wtVer(req,res,next) {
    //buscamos el tokent
    const tokent=req.headers["tokent"];
    if (!tokent) return res.status(500).json({ok:false,mensaje:"tokent no existe "});
    try {
        const verificacion=Jwt.verify(tokent,"process.env.SECRET_TOKENT")
        req.tokentData=verificacion;
        next();
    } catch (error) {
        console.log("error -- wtokent")
        res.status(500).json({
            ok:false,mensaje:error
        });
    }
}