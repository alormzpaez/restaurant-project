import { Dish } from "@/types"
import { Button, Card } from "flowbite-react"

export default function DishCard({
    dish,
    onClick
}: {
    dish: Dish,
    onClick: () => void
}) {
    return (
        <Card>
            <div className="flex items-center justify-center gap-5">
                <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                    {dish.name}
                </h5>
                <Button onClick={onClick}>
                    Ver
                </Button>
            </div>
        </Card>
    ) 
}