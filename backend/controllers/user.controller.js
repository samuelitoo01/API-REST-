import { obtenerUsuarios , crearUsuario , obtenerUsuarioID , eliminarUsuario , actualizarusuario} from "../models/user.models.js";

export async function obtenerUsuariosGET( req , res ) {
try{

    let data = await obtenerUsuarios();
    return res.status(200).json({
        message : 'Todos los usuarios se han obtenido con exito ' , 
        res : data
    })

}catch(e){

    return res.status(500).json({
        message : 'Algo ha salido mal ' + e
    })

}
}

export async function crearUsuarioPOST( req , res ){

    try{

        const { nombre , correo } = req.body
        
        if(!nombre || !correo){
            return res.status(500).json({
                message : 'Por favor complete los campos para continuar'
            })
        }

        let data = await crearUsuario({nombre,correo}) 
        
        return res.status(201).json({
            message: 'Usuario creado correctamente ' , 
            data : data
        })
    }catch(err){

        return res.status(500).json({
            message : 'Algo ha salido mal al intentar crear el usuario ' + err
        })

    }
}

export async function obtenerUsuarioIDGET(req , res ) {
try{
    const { id }= req.params

    let data = await obtenerUsuarioID(id)

    if(!data){
        return res.status(404).json({
            message : 'usuario no encontrado'
        })
    }
    return res.status(200).json({
        message : 'Usuario encontrado con exito ' , 
        data : data
    })


}catch(err){
    return res.status(500).json({
        message : 'Algo ha salido mal al intentar obtener el usuario' + err
    }) 
}
}

export async function eliminarUsuarioDELETE( req , res ) {
    
    const {id} = req.params

    let data = await eliminarUsuario(id)

    if(data.affectedRows === 0 ){
        return res.status(404).json({
            message : 'Usuario no encontrado'
        })
    }

    return res.status(200).json({
        message : 'Usuario eliminado con exito '
    })
}
export async function actualizarUsuarioPUT(req , res ){
try{
    const { id } = req.params;
    const {nombre , correo} = req.body

    if(!nombre || !correo){
        return res.status(500).json({
            message : 'Por favor complete los campos '
        })
    }
    
    const data = await actualizarusuario(id , {nombre , correo });
    
    if(data.affectedRows === 0 ){
        return res.status(500).json({
            message : 'Usuario no encontrado '
        })
    }

    return res.status(200).json({
        message : 'Usuario actualizado con exito '
    })

}catch(e){
    return res.status(500).json({
        message : 'Algo ha salido mal al intentar actualizar el usuario ' + e 
    })
}}