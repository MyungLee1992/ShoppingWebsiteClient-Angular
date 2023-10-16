import { User } from "src/app/auth/models/user";
import { CartItem } from "./cartItem";

export class Cart {
    id: string;
    user: User;
    cartItems: CartItem[];
}
