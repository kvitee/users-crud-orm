import { pgDataSource } from "./dataSource.js";
import { User } from "../models/User.js";


const userRepository = pgDataSource.getRepository(User);


export { userRepository };
