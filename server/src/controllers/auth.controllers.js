import config from "../config.js";

const {COOKIE_NAME, JWT_SECRET} = config;


export const register = async (req,res) => {
    try {

        return res
        .status(200)
        .send({ status: "success", message: "User registered" });
    
      } catch (error) {
        console.log(`Failed to register user: ${error}`);
        return res
        .status(404)
        .send({ status: "error", error: "Failed to register user" });
    }
}



export const logout = async (req, res) => {

  return res
    .clearCookie(COOKIE_NAME)
    .send({ status: 'success', message: 'Logout successful!' })
  
}