export class JwtResponse {
  private readonly _jwtToken: string;


  constructor(jwtToken: string) {
    this._jwtToken = jwtToken;
  }

  get jwtToken(): string {
    return this._jwtToken;
  }
}
