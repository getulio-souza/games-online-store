import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from './product';
import { ProductComponent } from "./product/product.component";
import { FilterComponent } from "./filter/filter.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, FilterComponent, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {


  constructor() {}

  disableBtn: boolean = false;
  name: string = '';
  addToCart: number = 0;

  ngOnInit(): void {
    this.calculateDiscountedPrices();
  }

    videogames: Product[] = [
    {
      id: 2,
      name: "PlayStation 5",
      brand: "Sony",
      storage: "825 GB SSD",
      color: "White",
      model: "PS5 Disc Edition",
      inStock: 0, // Number of units in stock
      price: 699.99, // in USD
      isAvaliable: false,
      imageProduct: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrijce74T1y8gVPtfM1Pz6I3D_sBpc63Pzw&s" // Real image URL
    },
    {
      id: 3,
      name: "Xbox Series X",
      brand: "Microsoft",
      storage: "1 TB SSD",
      color: "Black",
      model: "Xbox Series X",
      price: 499.99, // in USD
      discount: 0, // No discount
      inStock: 200, // Number of units in stock
      isAvaliable: true,
      imageProduct: "https://cdn.awsli.com.br/600x1000/53/53761/produto/312721643/01-5irmxpqpev.jpg" // Real image URL
    },
    {
      id: 4,
      name: "Nintendo Switch Lite",
      brand: "Nintendo",
      storage: "32 GB",
      color: "Yellow",
      model: "Switch Lite",
      price: 199.99, // in USD
      inStock: 500, // Number of units in stock
      isAvaliable: true,
      imageProduct: "https://images.tcdn.com.br/img/img_prod/1297101/console_nintendo_switch_lite_hyrule_edition_com_pacote_de_expansao_nintendo_switch_online_639_1_c42819d773af51def583e09845bb31b9.jpg" // Real image URL
    },
    {
      id: 5,
      name: "PlayStation 4 Pro",
      brand: "Sony",
      storage: "1 TB HDD",
      color: "Black",
      model: "PS4 Pro",
      price: 399.99, // in USD
      discount: 2, // 20% off
      inStock: 350, // Number of units in stock
      isAvaliable: true,
      imageProduct: "https://static.wixstatic.com/media/0baeeb_092bd57a730e47dd8301b1129f9087e8~mv2.jpg/v1/fill/w_520,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0baeeb_092bd57a730e47dd8301b1129f9087e8~mv2.jpg" // Real image URL
    },
    {
      id: 6,
      name: "Xbox Series S",
      brand: "Microsoft",
      storage: "512 GB SSD",
      color: "White",
      model: "Xbox Series S",
      price: 299.99, // in USD
      discount: 1, // 10% off
      inStock: 450, // Number of units in stock
      isAvaliable: true,
      imageProduct: "https://m.media-amazon.com/images/I/51UTUHO90sL.jpg" // Real image URL
    },
    {
      id: 7,
      name: "Nintendo 3DS XL",
      brand: "Nintendo",
      storage: "4 GB",
      color: "Red",
      model: "3DS XL",
      price: 199.99, // in USD
      discount: 5, // 5% off
      inStock: 0, // Number of units in stock
      isAvaliable: false,
      imageProduct: "https://ae01.alicdn.com/kf/S28f051fde9e0463db267ccf36458471dK/Handheld-Recondicionado-Game-Console-Tela-IPS-Touch-Displays-Cross-Keypad-System-Novo-3DS-XL-LL-IPS.jpg" // Real image URL
    },
    {
      id: 8,
      name: "PlayStation Vita",
      brand: "Sony",
      storage: "1 GB (expandable)",
      color: "Black",
      model: "PS Vita",
      price: 249.99, // in USD
      inStock: 75, // Number of units in stock
      isAvaliable: true,
      imageProduct: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PlayStation-Vita-1101-FL.png/1200px-PlayStation-Vita-1101-FL.png" // Real image URL
    },
    {
      id: 9,
      name: "Xbox One X",
      brand: "Microsoft",
      storage: "1 TB HDD",
      color: "Black",
      model: "Xbox One X",
      price: 499.99, // in USD
      discount: 15, // 15% off
      inStock: 0, // Number of units in stock
      isAvaliable: false,
      imageProduct: "https://cdn.awsli.com.br/2511/2511718/produto/248335046/33af9622-376f-4464-8190-30e6944c8f0d-wn9vi7nrqm.jpg" // Real image URL
    },
    {
      id: 10,
      name: "PlayStation 3",
      brand: "Sony",
      storage: "500 GB HDD",
      color: "Charcoal Black",
      model: "PS3 Super Slim",
      price: 299.99, // in USD
      inStock: 60, // Number of units in stock
      isAvaliable: true,
      imageProduct: "https://cdn.awsli.com.br/600x1000/396/396949/produto/13434488/7828a08f03.jpg" // Real image URL
    },
    {
      id: 11,
      name: "Sega Genesis Mini",
      brand: "Sega",
      storage: "Built-in games (40 titles)",
      color: "Black",
      model: "Genesis Mini",
      price: 79.99, // in USD
      discount: 10, // 10% off
      inStock: 200, // Number of units in stock
      isAvaliable: false,
      imageProduct: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-coqvp2jY2qLt__Fjm5gnV9UBNOY-MmQk_g&s" // Real image URL
    },
    {
      id: 12,
      name: "Sega Genesis Mini",
      brand: "Sega",
      storage: "Built-in games (40 titles)",
      color: "Black",
      model: "Genesis Mini",
      price: 79.99, // in USD
      discount: 10, // 10% off
      inStock: 200, // Number of units in stock
      isAvaliable: true,
      imageProduct: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-coqvp2jY2qLt__Fjm5gnV9UBNOY-MmQk_g&s" // Real image URL
    },
  ];

  //getting all the products from store
  totalVideogames: any = this.videogames.length;

  //getting all in stock products
  inStockVideogames: any = this.videogames.filter(product => product.isAvaliable === true).length;

  //getting all out of stock products
  outOfStockVideogames: any = this.videogames.filter(product => product.inStock == 0 && product.isAvaliable === false).length;

  @Input()searchText: string = ""

  //property to keep track of the radio button
  selectedFilterRadioButton: string = 'all';

  calculateDiscountedPrices() {
    this.videogames.forEach((item: any) => {
      const discontedPrice = item.price - (item.price * item.discount);
      // console.log('valor com desconto:', discontedPrice);
      item.itemWithDiscont = Number(discontedPrice);
    });
  }

  getDiscontedPrice(item: any) {
    if (item && item.price && item.discont) {
      const discontedPrice = item.price - (item.price * item.discount);
      return discontedPrice;
    }
    return null;
  }

  // decrementCartValue(){
  //   if(this.addToCart > 0){
  //     this.addToCart--;
  //   }
  // }

  // incrementCartValue(){
  //   //if the products i wanna add to the cart are less than the products i have in stock, i will be able to add more items to my cart
  //   // if(this.addToCart < this.videogame.inStock){
  //     this.addToCart++;
  //   // }
  // }

   onNameChange(event: any){
    console.log(event.target.value)
    this.name = event.target.value;
  }

  onFilterChange(value: string) {
    console.log(value)
    this.selectedFilterRadioButton = value;
  }

}
