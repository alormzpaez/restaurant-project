import { Badge } from 'flowbite-react';

export default function InventoryGroupStatus({
    usefulQuantity,
}: {
    usefulQuantity: number | null | undefined;
}) {
    return (
        <>
            {usefulQuantity == null ? (
                <Badge color="gray" size="sm" className="w-fit">
                    No disponible
                </Badge>
            ) : usefulQuantity == 0 ? (
                <Badge color="red" size="sm" className="w-fit">
                    Agotado
                </Badge>
            ) : usefulQuantity == 1 ||
              usefulQuantity == 2 ||
              usefulQuantity == 3 ? (
                <Badge color="warning" size="sm" className="w-fit">
                    Por agotarse
                </Badge>
            ) : (
                <Badge color="success" size="sm" className="w-fit">
                    Disponible
                </Badge>
            )}
        </>
    );
}
