import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// here this auth will be called to verify the token and than do the next() task
const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Extract the token from the header
    console.log("token is ", token);
    if (token != null) {
      const decodedData = jwt.verify(token, process.env.JWTSECRET);
      req.userId = decodedData.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
export default auth;
