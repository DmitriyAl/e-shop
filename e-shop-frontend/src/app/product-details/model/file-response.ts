export class FileResponse {
  public name: string;
  public uri: string;
  public type: string;
  public size: number;


  constructor(name: string, uri: string, type: string, size: number) {
    this.name = name;
    this.uri = uri;
    this.type = type;
    this.size = size;
  }
}
