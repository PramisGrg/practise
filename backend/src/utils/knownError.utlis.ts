export default class KnownError extends Error {
  message: string;
  status?: number;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status ? status : 500;
  }
}
