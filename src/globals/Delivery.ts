import { GlobalConfig } from "payload";


export const DeliveryFee: GlobalConfig = {
    slug: "deliveryFee",
    label: "Taxa de entrega",
    fields: [
        {
            name: 'fee',
            label: 'Taxa (em R$)',
            type: 'number',

        },
        {
            name: 'minPrice',
            label: 'Valor mínimo (em R$)',
            type: 'number',
        }
    ],
}