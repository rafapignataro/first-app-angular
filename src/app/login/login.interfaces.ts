import User from '../shared/interfaces/user.interfaces';

export default interface LoginResponse {
  user: User;
  token: string;
}
