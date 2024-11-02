import { OrderItem, Variant } from "@/types"
import { Button, Card } from "flowbite-react"
import { useEffect, useState } from "react"

export default function VariantCard({
    variant,
    selectedOrderItems,
    onAddOrderItem
}: {
    variant: Variant,
    selectedOrderItems: OrderItem[],
    onAddOrderItem: (variant: Variant, quantity: number) => void
}) {
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        const existingOrderItem = selectedOrderItems.find(item => item.variant_id == variant.id)
        
        if (existingOrderItem) {
            setQuantity(existingOrderItem.quantity)
        } else {
            setQuantity(0)
        }
    }, [variant])

    const onAdd = () => {
        const newQuantity = quantity + 1
        setQuantity(newQuantity)

        onAddOrderItem(variant, newQuantity)
    }

    const onSubstract = () => {
        if (quantity > 0) {
            const newQuantity = quantity - 1
            setQuantity(newQuantity)

            onAddOrderItem(variant, newQuantity)
        }
    }

    return (
        <Card>
            <div className="flex items-center justify-center gap-5">
                <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                    {variant.name}
                </h5>
                <div className="flex items-center justify-between lg:order-3 lg:justify-end">
                    <div className="flex items-center">
                        <Button
                            onClick={onSubstract}
                            color={"transparent"}
                            className="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <svg
                                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h16"
                                />
                            </svg>
                        </Button>
                        <input
                            type="text"
                            className="w-10 text-sm font-medium text-center text-gray-900 bg-transparent border-0 shrink-0 focus:outline-none focus:ring-0 dark:text-white"
                            placeholder=""
                            value={quantity}
                            required
                        />
                        <Button
                            onClick={onAdd}
                            color={"transparent"}
                            className="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <svg
                                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    ) 
}