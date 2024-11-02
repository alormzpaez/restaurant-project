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
    id: number;
    apply_invoice: boolean;
    delivery_type: OrderGroupDeliveryType;
    payment_method: OrderGroupPaymentMethod;
    status: OrderGroupStatus;
    total: number;
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

export type OrderGroupDeliveryType = "residence"|"restaurant";
export type OrderGroupPaymentMethod = "cash"|"card";
export type OrderGroupStatus = "unfinished"|"finished"|"cancelled";

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
