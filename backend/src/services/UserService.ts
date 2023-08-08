import { ServiceResponse } from "../interfaces/ServiceResponse";
import UserModel from "../models/UserModel";
import JwtUtils from "../utils/JwtUtils";
import { Token } from "../interfaces";
import * as bcrypt from "bcryptjs";
import { emailQueue } from "./QueueService";
import buildActivationUrl from "../utils/activationUrlBuilder";
import activationCodeGenerator from "../utils/activationCodeGenerator";

export default class UserService {
  constructor (private userModel = new UserModel()) {}
}