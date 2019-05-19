export class AuthResponse {
  success: boolean;
  data: {
    preferences: string[],
    _id: string,
    login: string;
    name: string;
  };
}
