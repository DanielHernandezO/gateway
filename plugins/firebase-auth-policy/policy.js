import { db, admi } from "../config/firebase";

module.exports = {
    name: 'firebaseAuth',
    policy: () => {
      return async (req, res, next) => {
        try {
            const { path } = req.body;
            const jwt = req.cookies['jwt'];
    
            const decodedToken = await admi.auth().verifyIdToken(jwt);
    
            if (!decodedToken) {
                return res.status(401).send({
                    message: 'unauthenticated'
                });
            }
    
            const is_ambassador = path.indexOf('api/ambassador') >= 0;
    
            const userDocRef = doc(db, "users", decodedToken.uid);
            
            const userAmbassador = await getDoc(userDocRef);
            if ((is_ambassador && !userAmbassador.data().is_ambassador) || (!is_ambassador && userAmbassador.data().is_ambassador)) {
                return res.status(401).send({
                    message: 'unauthorized'
                });
            }
            console.log(decodedToken);
            next();
        } catch (e) {
            return res.status(401).send({
                message: 'unauthenticated'
            });
        }
      };
    }
  };