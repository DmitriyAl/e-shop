export class Product {
  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public image: string;

  constructor(id: number, name: string, description: string, price: number, image:string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
