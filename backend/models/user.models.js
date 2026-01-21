import { poolConec } from "../database/config.db.js";

export async function obtenerUsuarios() {

try{  

    const [rows] = await poolConec.query('SELECT * FROM `usuarios`')
    return rows 

}catch(e){
    throw e 
}
}

export async function obtenerUsuarioID(id) {

try{

    const [rows] = await poolConec.query('SELECT * FROM usuarios WHERE id = ?' , [id])

    return rows[0]

}catch(e){

    throw e 
}
}

export async function crearUsuario(usuario){

try{
    const { nombre , correo } = usuario 

    let data = await poolConec.query('INSERT INTO `usuarios` (`nombre`,`correo`) VALUES (?,?)',
        [ nombre , correo ]
    )

    return data

}catch(err){

    throw err

}
}

export async function eliminarUsuario(id){

try{

    const [result] = await poolConec.query('DELETE FROM usuarios WHERE id = ?' , [id]);

    return result

}catch(e){

        throw e
        
}
}

