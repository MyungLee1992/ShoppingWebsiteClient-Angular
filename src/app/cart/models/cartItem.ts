import { Item } from "src/app/item/models/item";
import { Cart } from "./cart";

export class CartItem {
    id: string;
    cart: Cart;
    item: Item;
    quantity: number;
    price: number;
}
