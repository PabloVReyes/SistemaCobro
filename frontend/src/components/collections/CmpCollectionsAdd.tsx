import { Button, Divider, Group, Select, Stack, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useModalStore } from "../../store/UIStore"
import { IconReceiptDollar } from "@tabler/icons-react";
import { useEffect, useMemo, useState } from "react";
import { getNeighbors } from "../../api/neighbor";

interface CollectionFormValues {
    metodo: string;
    monto: number;
    vecino: string;
}

export const CmpCollectionsAdd = () => {
    const [neighbor, setNeighbor] = useState<any[]>([])

    const loadData = async () => {
        getNeighbors()
            .then(setNeighbor)
    };

    useEffect(() => {
        loadData()
    }, [])

    const { closeModal } = useModalStore()

    const neighborData = useMemo(() => {
        return neighbor
            .map((item) => ({
                value: item.nombre,
                label: item.nombre,
            }))
    }, [neighbor])

    console.log(neighborData)

    const form = useForm<CollectionFormValues>({
        mode: "uncontrolled",
        initialValues: {
            metodo: '',
            monto: 0,
            vecino: '',
        },

        validate: {
            metodo: (value => value ? null : "Selecciona el metodo de pago"),
            monto: (value => value > 0 ? null : "Ingresa el monto a cobrar"),
            vecino: (value => value ? null : "Selecciona al vecino")
        }
    })

    const handleSubmit = async (values: typeof form.values) => {
        console.log(values)
    }

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
                <Select
                    autoFocus
                    withAsterisk
                    label='Metodo de pago'
                    placeholder='Metodo de pago'
                    data={['Efectivo', 'Transferencia', 'Tarjera']}
                    key={form.key("metodo")}
                    {...form.getInputProps("metodo")}
                />

                <Divider />

                <TextInput
                    withAsterisk
                    leftSection={<IconReceiptDollar />}
                    label='Monto'
                    placeholder='Monto del pago'
                    key={form.key("monto")}
                    {...form.getInputProps("monto")}
                />

                <Divider />
                <Select
                    data={neighborData}
                    withAsterisk
                    label="Vecino"
                    placeholder="Seleccion de vecino"
                    key={form.key("vecino")}
                    {...form.getInputProps("vecino")}
                />
                <Divider />

                <Group mt="lg" gap={5} justify="flex-end">
                    <Button
                        variant="outline"
                        onClick={closeModal}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                    >
                        Crear
                    </Button>
                </Group>
            </Stack>
        </form>
    )
}