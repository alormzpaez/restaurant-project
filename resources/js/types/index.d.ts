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
    orderItems: OrderItem[];
    invoice: Invoice;
}

export interface Invoice {
    id: number;
    order_group_id: number;
    client: string;
    rfc: string;
    tax_domicile: string;
    payment_mode: string;
    tax_folio: string;
    voucher_number: number;
    voucher_date: string;
    payment_method: InvoicePaymentMethod;
    cfdi_date: string;
    created_at: string;
    updated_at: string;
    subtotal: number;
    iva: number;
    total: number;
}

export interface OrderItem {
    id: number;
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

export interface InventoryGroup {
    id: number;
    type: InventoryGroupType;
    date: string;
    hamburger_sold_quantity?: number;
    baguette_sold_quantity?: number;
    big_pizza_remaining_quantity?: number | null;
    big_pizza_made_quantity?: number | null;
    big_pizza_useful_quantity?: number | null;
    big_pizza_sold_quantity?: number;
    small_pizza_remaining_quantity?: number | null;
    small_pizza_made_quantity?: number | null;
    small_pizza_useful_quantity?: number | null;
    small_pizza_sold_quantity?: number;

    // hamburger_sold_quantity?: number;
    // baguette_sold_quantity?: number;
    pasta_sold_quantity?: number;
    salad_sold_quantity?: number;
    quesoFundido_sold_quantity?: number;
    alambre_sold_quantity?: number;
    corte_sold_quantity?: number;
    mollete_sold_quantity?: number;
    arrachera_remaining_quantity?: number|null;
    arrachera_made_quantity?: number|null;
    arrachera_useful_quantity?: number|null;
    arrachera_sold_quantity?: number;
    pollo_remaining_quantity?: number|null;
    pollo_made_quantity?: number|null;
    pollo_useful_quantity?: number|null;
    pollo_sold_quantity?: number;
    chistorra_remaining_quantity?: number|null;
    chistorra_made_quantity?: number|null;
    chistorra_useful_quantity?: number|null;
    chistorra_sold_quantity?: number;
    panHams_remaining_quantity?: number|null;
    panHams_made_quantity?: number|null;
    panHams_useful_quantity?: number|null;
    panHams_sold_quantity?: number;
    panBags_remaining_quantity?: number|null;
    panBags_made_quantity?: number|null;
    panBags_useful_quantity?: number|null;
    panBags_sold_quantity?: number;
    papas_remaining_quantity?: number|null;
    papas_made_quantity?: number|null;
    papas_useful_quantity?: number|null;
    papas_sold_quantity?: number;
    chuleta_remaining_quantity?: number|null;
    chuleta_made_quantity?: number|null;
    chuleta_useful_quantity?: number|null;
    chuleta_sold_quantity?: number;
    molida_remaining_quantity?: number|null;
    molida_made_quantity?: number|null;
    molida_useful_quantity?: number|null;
    molida_sold_quantity?: number;
    asada_remaining_quantity?: number|null;
    asada_made_quantity?: number|null;
    asada_useful_quantity?: number|null;
    asada_sold_quantity?: number;
    pastor_remaining_quantity?: number|null;
    pastor_made_quantity?: number|null;
    pastor_useful_quantity?: number|null;
    pastor_sold_quantity?: number;
    fettuccine_remaining_quantity?: number|null;
    fettuccine_made_quantity?: number|null;
    fettuccine_useful_quantity?: number|null;
    fettuccine_sold_quantity?: number;
    carneHamb_remaining_quantity?: number|null;
    carneHamb_made_quantity?: number|null;
    carneHamb_useful_quantity?: number|null;
    carneHamb_sold_quantity?: number;
}

export type OrderGroupDeliveryType = "residence"|"restaurant";
export type OrderGroupPaymentMethod = "cash"|"card";
export type InvoicePaymentMethod = "cash"|"card";
export type OrderGroupStatus = "unfinished"|"finished"|"cancelled";
export type InventoryGroupType = "kitchen"|"pizza";

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
