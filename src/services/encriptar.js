import cript from 'bcryptjs';
//const salt=cript.genSaltSync(process.env.HASH);
//const hash=cript.hashSync(process.env.HASH,salt);

export async function crearHash(contraseña) {
    const salt=await cript.genSalt(10)
    return await cript.hash(contraseña,salt)
}
export async function verifyHash(hash,userPass) {
   // console.log(hash)
    return await cript.compare(hash,userPass)
}
