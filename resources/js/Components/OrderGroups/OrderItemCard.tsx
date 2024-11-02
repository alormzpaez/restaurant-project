import { OrderItem } from "@/types"
import { Card } from "flowbite-react"

export default function OrderItemCard({
    orderItem
}: {
    orderItem: OrderItem
}) {
    return (
        <Card>
            <div className="flex items-center justify-between gap-5">
                <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                    {orderItem.variant.dish.name} / {orderItem.variant.name}
                </h5>
                <span className="font-normal text-gray-700 dark:text-gray-400">
                    ${orderItem.variant.price.toFixed(2)}
                </span>
                <span className="font-normal text-gray-700 dark:text-gray-400">
                    x{orderItem.quantity}
                </span>
            </div>
        </Card>
    ) 
}