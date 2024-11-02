export interface Dish {
    id: number;
    name: string;
    variants: Variant[];
}

export interface Variant {
    id: number;
    dish_id: number;
    name: string;
    price: number;
    dish: Dish;
}

export interface OrderGroup {

}

export interface OrderItem {
    quantity: number;
    variant_id: number;
    subtotal: number;
    variant: Variant;
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
