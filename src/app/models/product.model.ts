export class Product {
  name: string;
  imgUrl: string;
  price: number;
  quantity: number;

  constructor(pName: string, pImgUrl: string, pPrice: number) {
    this.name = pName;
    this.imgUrl = pImgUrl;
    this.price = pPrice;
    this.quantity = 0;
  }
}