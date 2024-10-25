import { TOKEN_SECRET } from "../config.js";
import jwt from '../libs/jwt.js'

export const requiredAuth = (requese, response, next) => {
    const { token } = requese.cookies;

    if(!token) {
        return response.status(401)-json({message: 'No token, no authrotization Denied'});
    }

    jwt.verify( token, TOKEN_SECRET, (err, user) =>{
        if(err)response.status(403).json({message: 'Invalid Token'});
        requese.user = user;
        next();
    })
} 