import { Button, Group, Stack, Text, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useModalStore } from "../../../../store/UIStore"
import { useState } from "react"
import { useResidentsStore } from "../../store"
import { notify } from "../../../../utils"
import { IconCheck } from "@tabler/icons-react"

interface Props {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
}

export const Edit = ({id, name, address, phone, email}: Props) => {
    const { closeModal, openModal } = useModalStore()
    const [loading, setLoading] = useState<boolean>(false)
    const { add } = useResidentsStore()

    const form = useForm({
        initialValues: {
            id,
            name,
            address,
            phone,
            email
        },
        validate: {
            name: (value) =>
                value.trim().length < 3
                    ? "El nombre debe tener al menos 3 caracteres"
                    : null,

            address: (value) =>
                value.trim().length < 5
                    ? "La dirección es obligatoria y debe ser más específica"
                    : null,

            phone: (value) =>
                /^[0-9]{10}$/.test(value)
                    ? null
                    : "El teléfono debe tener 10 dígitos",

            email: (value) =>
                /^\S+@\S+\.\S+$/.test(value)
                    ? null
                    : "Correo electrónico inválido"
        }
    })

    const handleSumbit = (values: typeof form.values) => {
        try {
            setLoading(true)

            add(values)

            openModal({
                title: "Residente editado",
                autoClose: 2500,
                content: (
                    <Stack align="center" p="xl">
                        <IconCheck size={60} color="green" />
                        <Text ta="center">
                            El residente ha sido editado correctamente.
                        </Text>
                    </Stack>
                ),
            });

        } catch (error: any) {
            notify({
                type: "error",
                title: "Error al ediar residente",
                message: error.message
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <form onSubmit={form.onSubmit(handleSumbit)}>
            <Stack>
                <TextInput
                    autoFocus
                    withAsterisk
                    label="Nombre"
                    description="Nombre del residente seguido de su apellido paterno y finalizando con materno"
                    placeholder="Ej: Juan Pérez"
                    {...form.getInputProps("name")}
                />

                <TextInput
                    autoFocus
                    withAsterisk
                    label="Dirección"
                    description="Dirección del residente"
                    placeholder="Ej: Calle 1 #123"
                    {...form.getInputProps("address")}
                />

                <TextInput
                    autoFocus
                    withAsterisk
                    label="Teléfono"
                    description="Numero de Teléfono"
                    placeholder="Ej: 555-0001"
                    {...form.getInputProps("phone")}
                />

                <TextInput
                    autoFocus
                    withAsterisk
                    label="Correo Electrónico"
                    description="Dirección de correo electrónico"
                    placeholder="Ej: correo@ejemplo.com"
                    {...form.getInputProps("email")}
                />

                <Group justify="flex-end" gap={5}>
                    <Button
                        variant="outline"
                        onClick={closeModal}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        loading={loading}
                    >
                        Editar
                    </Button>
                </Group>
            </Stack>
        </form>
    )
}