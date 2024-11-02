import DishCard from '@/Components/OrderGroups/DishCard';
import OrderItemCard from '@/Components/OrderGroups/OrderItemCard';
import VariantCard from '@/Components/OrderGroups/VariantCard';
import { Dish, OrderItem, Variant } from '@/types';
import { Button } from 'flowbite-react';

export default function CreateOrderItemsForm({
    dishes,
    setSelectedDish,
    selectedDish,
    addOrderItem,
    orderItems,
    total,
    changeToAnotherForm
}: {
    dishes: Dish[];
    setSelectedDish: (dish: Dish) => void;
    selectedDish: Dish|null;
    addOrderItem: (variant: Variant, quantity: number) => void;
    orderItems: OrderItem[];
    total: number;
    changeToAnotherForm: () => void
}) {
    return (
        <section className="flex gap-5">
            <div className="flex flex-col justify-center flex-1 gap-5 p-3 border">
                {dishes.map((dish, index) => (
                    <DishCard
                        dish={dish}
                        onClick={() => {
                            setSelectedDish(dish);
                        }}
                    />
                ))}
            </div>
            <div className="flex flex-col justify-start flex-1 gap-5 p-3 border">
                {selectedDish?.variants.map((variant, index) => (
                    <VariantCard
                        variant={variant}
                        onAddOrderItem={(internalVariant, quantity) => {
                            addOrderItem(internalVariant, quantity);
                        }}
                        selectedOrderItems={orderItems}
                    />
                ))}
            </div>
            <div className="flex flex-col justify-start flex-1 gap-5 p-3 border">
                {orderItems.map((orderItem, index) => (
                    <OrderItemCard orderItem={orderItem} key={index} />
                ))}

                <div className="space-y-4 border-b-4">
                    <dl className="flex items-center justify-between gap-4 dark:border-gray-700">
                        <dt className="text-base font-bold text-gray-900 dark:text-white">
                            Total
                        </dt>
                        <dd className="text-base font-bold text-gray-900 dark:text-white">
                            ${total.toFixed(2)}
                        </dd>
                    </dl>
                </div>

                <Button className="self-center w-1/2" onClick={changeToAnotherForm}>Registrar orden</Button>
            </div>
        </section>
    );
}
