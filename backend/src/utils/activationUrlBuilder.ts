import { ActivationUrlPayload } from '../types/ActivationUrlPayload';

const buildActivationUrl = (payload: ActivationUrlPayload): string => 
  `${process.env.HOST}:${process.env.API_PORT}/user/activate/${payload.id}/${payload.activationCode}`;

export default buildActivationUrl;