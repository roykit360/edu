import app from './app.js' 
import auth from './rutas/auth.ruta.js'; 

app.use('/auth', auth);

app.listen(4000)
console.log('Server is running on port', 4000)