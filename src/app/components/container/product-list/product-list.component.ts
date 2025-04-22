import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { FilterComponent } from "./filter/filter.component";
import { FormsModule } from '@angular/forms';
import { Product } from '../../../models/Product';
import { StoreSingletonService } from '../../../services/singleton/store-singleton.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, FilterComponent, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {


  constructor(private storeSingletonService: StoreSingletonService) {}

  disableBtn: boolean = false;
  name: string = '';
  addToCart: number = 0;

  isProductDetailOpen: boolean = false;

  ngOnInit(): void {
    this.calculateDiscountedPrices();
    console.log(this.videogames)

    this.videogames = [...this.originalVideogames]
  }

  selectedProduct!: Product;
  filteredList: any[] = [];

originalVideogames: Product[] = [
  {
    id: 2,
    name: "PlayStation 5",
    brand: "Sony",
    storage: "825 GB SSD",
    color: "White",
    model: "PS5 Disc Edition",
    inStock: 0,
    price: 699.99,
    isAvaliable: false,
    imageProduct: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrijce74T1y8gVPtfM1Pz6I3D_sBpc63Pzw&s",
    description: "A next-gen console by Sony, offering ultra-fast loading and ray tracing for immersive gameplay.",
    features: ["Ray tracing", "Haptic feedback", "Ultra-fast SSD", "4K gaming", "3D audio"]
  },
  {
    id: 3,
    name: "Xbox Series X",
    brand: "Microsoft",
    storage: "1 TB SSD",
    color: "Black",
    model: "Xbox Series X",
    price: 499.99,
    discount: 0,
    inStock: 200,
    isAvaliable: true,
    imageProduct: "https://cdn.awsli.com.br/600x1000/53/53761/produto/312721643/01-5irmxpqpev.jpg",
    description: "Microsoft’s most powerful console to date, designed for 4K gaming and seamless performance.",
    features: ["4K resolution", "Quick Resume", "Game Pass support", "HDR", "Fast SSD"]
  },
  {
    id: 4,
    name: "Nintendo Switch Lite",
    brand: "Nintendo",
    storage: "32 GB",
    color: "Yellow",
    model: "Switch Lite",
    price: 199.99,
    inStock: 500,
    isAvaliable: true,
    imageProduct: "https://images.tcdn.com.br/img/img_prod/1297101/console_nintendo_switch_lite_hyrule_edition_com_pacote_de_expansao_nintendo_switch_online_639_1_c42819d773af51def583e09845bb31b9.jpg",
    description: "A compact, handheld-only version of the Nintendo Switch perfect for gaming on the go.",
    features: ["Handheld-only design", "Integrated controls", "Nintendo exclusives", "Lightweight", "Great battery life"]
  },
  {
    id: 5,
    name: "PlayStation 4 Pro",
    brand: "Sony",
    storage: "1 TB HDD",
    color: "Black",
    model: "PS4 Pro",
    price: 399.99,
    discount: 2,
    inStock: 350,
    isAvaliable: true,
    imageProduct: "https://static.wixstatic.com/media/0baeeb_092bd57a730e47dd8301b1129f9087e8~mv2.jpg/v1/fill/w_520,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0baeeb_092bd57a730e47dd8301b1129f9087e8~mv2.jpg",
    description: "Enhanced version of PS4 with 4K support and improved graphics performance.",
    features: ["4K upscaling", "Boost mode", "HDR support", "Remote Play", "Wide game library"]
  },
  {
    id: 6,
    name: "Xbox Series S",
    brand: "Microsoft",
    storage: "512 GB SSD",
    color: "White",
    model: "Xbox Series S",
    price: 299.99,
    discount: 1,
    inStock: 450,
    isAvaliable: true,
    imageProduct: "https://m.media-amazon.com/images/I/51UTUHO90sL.jpg",
    description: "An affordable next-gen Xbox with digital-only gaming and fast load times.",
    features: ["Digital only", "Next-gen speed", "Compact design", "120fps support", "Game Pass access"]
  },
  {
    id: 7,
    name: "Nintendo 3DS XL",
    brand: "Nintendo",
    storage: "4 GB",
    color: "Red",
    model: "3DS XL",
    price: 199.99,
    discount: 5,
    inStock: 0,
    isAvaliable: false,
    imageProduct: "https://ae01.alicdn.com/kf/S28f051fde9e0463db267ccf36458471dK/Handheld-Recondicionado-Game-Console-Tela-IPS-Touch-Displays-Cross-Keypad-System-Novo-3DS-XL-LL-IPS.jpg",
    description: "Portable 3D gaming without glasses, featuring a large screen and wide game library.",
    features: ["Glasses-free 3D", "Dual screens", "Backward compatibility", "StreetPass", "Touch screen"]
  },
  {
    id: 8,
    name: "PlayStation Vita",
    brand: "Sony",
    storage: "1 GB (expandable)",
    color: "Black",
    model: "PS Vita",
    price: 249.99,
    inStock: 75,
    isAvaliable: true,
    imageProduct: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PlayStation-Vita-1101-FL.png/1200px-PlayStation-Vita-1101-FL.png",
    description: "Sony’s handheld console with vibrant OLED display and support for AAA titles on the go.",
    features: ["OLED display", "Remote Play", "Touch controls", "Dual analog sticks", "PSP compatibility"]
  },
  {
    id: 9,
    name: "Xbox One X",
    brand: "Microsoft",
    storage: "1 TB HDD",
    color: "Black",
    model: "Xbox One X",
    price: 499.99,
    discount: 15,
    inStock: 0,
    isAvaliable: false,
    imageProduct: "https://cdn.awsli.com.br/2511/2511718/produto/248335046/33af9622-376f-4464-8190-30e6944c8f0d-wn9vi7nrqm.jpg",
    description: "A powerful Xbox console supporting 4K gaming and high dynamic range visuals.",
    features: ["4K native gaming", "HDR10", "Dolby Atmos", "High-speed performance", "Backward compatibility"]
  },
  {
    id: 10,
    name: "PlayStation 3",
    brand: "Sony",
    storage: "500 GB HDD",
    color: "Charcoal Black",
    model: "PS3 Super Slim",
    price: 299.99,
    inStock: 60,
    isAvaliable: true,
    imageProduct: "https://cdn.awsli.com.br/600x1000/396/396949/produto/13434488/7828a08f03.jpg",
    description: "Classic Sony console featuring Blu-ray support and a massive library of exclusives.",
    features: ["Blu-ray player", "Free online multiplayer", "HD graphics", "PS1 compatibility", "PlayStation Network"]
  },
  {
    id: 11,
    name: "Sega Genesis Mini",
    brand: "Sega",
    storage: "Built-in games (40 titles)",
    color: "Black",
    model: "Genesis Mini",
    price: 79.99,
    discount: 10,
    inStock: 200,
    isAvaliable: false,
    imageProduct: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-coqvp2jY2qLt__Fjm5gnV9UBNOY-MmQk_g&s",
    description: "A miniaturized classic Sega console pre-loaded with 40 retro games.",
    features: ["40 built-in games", "Save states", "HDMI output", "Classic design", "Plug and play"]
  },
  {
    id: 12,
    name: "Sega Genesis Mini",
    brand: "Sega",
    storage: "Built-in games (40 titles)",
    color: "Black",
    model: "Genesis Mini",
    price: 79.99,
    discount: 10,
    inStock: 200,
    isAvaliable: true,
    imageProduct: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-coqvp2jY2qLt__Fjm5gnV9UBNOY-MmQk_g&s",
    description: "Enjoy 40 built-in Sega classics on this compact and nostalgic Genesis Mini console.",
    features: ["Retro gaming", "Preloaded titles", "Compact size", "HDMI ready", "Classic controllers included"]
  }
  ];

  videogames: any[] = [];

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

   onNameChange(event: any){
    console.log(event.target.value)
    this.name = event.target.value;
  }

  onSelectedAll(value: any) {
    this.videogames = [...this.originalVideogames];
    console.log('todos:', this.videogames)
  }

  onSelectedAvaliable(value: any) {
    this.videogames = this.originalVideogames.filter(item => item.isAvaliable == true);
    console.log('disponiveis:', this.videogames)
  }

  onSelectedNotAvaliable(value: any) {
    this.videogames = this.originalVideogames.filter(item => item.isAvaliable == false);
      console.log('nao disponiveis:', this.videogames)
  }

  onOpenProductDetail(){
    this.isProductDetailOpen = !this.isProductDetailOpen;
  }

  onSelectedProduct(product: any) {
    this.storeSingletonService.selectProduct = product
  }
}
