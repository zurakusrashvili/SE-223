import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  


  products = [
    {
      productId: 1,
      productImg:"https://i.imgur.com/MGorDUi.png",
      productName: "IKEA",
      productMatt: "BLANDA MATT",
      productCategory:"VASE",
      productRate:"4/5",
      productColors:["red", "blue", "yellow", "purple", "green"]
    },
  
    {
      productId: 2,
      productImg:"https://img.zoommer.ge/zoommer-images/thumbs/0153128_oneplus-nord-2-5g-12256gb-blue-haze_220.jpeg",
      productName: "Iphone-11",
      productMatt: "BLANDA MATT",
      productCategory:"VASE",
      productRate:"4/5",
      productColors:["red", "blue", "yellow", "purple", "green"]
    },
  
    {
      productId: 3,
      productImg:"https://img.zoommer.ge/zoommer-images/thumbs/0153143_zte-nubia-redmagic-6r-5g-8128gb-black_220.jpeg",
      productName: "Iphone-12",
      productMatt: "BLANDA MATT",
      productCategory:"VASE",
      productRate:"4/5",
      productColors:["red", "blue", "yellow", "purple", "green"]
    },
  
    {
      productId: 4,
      productImg:"https://img.zoommer.ge/zoommer-images/thumbs/0154560_nokia-6310-2021-black_220.jpeg",
      productName: "Nokia-220-black",
      productMatt: "BLANDA MATT",
      productCategory:"VASE",
      productRate:"4/5",
      productColors:["red", "blue", "yellow", "purple", "green"]
    },
  
  ]





}