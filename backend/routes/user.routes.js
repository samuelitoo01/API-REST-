import { Router } from 'express'
import { crearUsuarioPOST, obtenerUsuariosGET , obtenerUsuarioIDGET , eliminarUsuarioDELETE , actualizarUsuarioPUT} from '../controllers/user.controller.js';
const router = Router();

router.get('/' , obtenerUsuariosGET )
router.get('/:id' , obtenerUsuarioIDGET )
router.post('/', crearUsuarioPOST )
router.delete('/:id' , eliminarUsuarioDELETE )
router.put('/:id' , actualizarUsuarioPUT )
export default router