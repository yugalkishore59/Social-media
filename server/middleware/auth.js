import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// here this auth will be called to verify the token and than do the next() task
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      let decodedData = jwt.verify(token, process.env.JWTSECRET);
      req.userId = decodedData?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
export default auth;
