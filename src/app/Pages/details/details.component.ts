import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent {
  
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
  private queryParams: any;

  chosenProduct: any;

  constructor(private route: ActivatedRoute) {
    route.queryParams.forEach((param) => {
      this.queryParams = param;
    })

    this.chosenProduct = this.products.find((product) => {
      return product.productId == this.queryParams.id;
    })

    window.history.replaceState(null, '', this.chosenProduct.productName)

  }

}
