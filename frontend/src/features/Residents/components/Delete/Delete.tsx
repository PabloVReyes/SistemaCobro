import { Alert, Button, Divider, Group, Stack, Text, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form";
import { IconAlertTriangleFilled, IconCheck } from "@tabler/icons-react"
import { useResidentsStore } from "../../store";
import { useState } from "react";
import { useModalStore } from "../../../../store/UIStore";
import { notify } from "../../../../utils";

interface Props {
    name: string;
    id: number;
}

export const Delete = ({ id, name }: Props) => {
    const { closeModal, openModal } = useModalStore();
    const { remove } = useResidentsStore();
    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm({
        initialValues: {
            value: ""
        },
        validate: {
            value: (values) => values === `Eliminar ${name}` ? null : "Escribe lo solicitado"
        }
    })

    const handleSubmit = async () => {
        try {
            setLoading(true);

            await remove(id)

            openModal({
                title: "Residente eliminado",
                autoClose: 2500,
                content: (
                    <Stack align="center" p="xl">
                        <IconCheck size={60} color="green" />
                        <Text ta="center">
                            El permiso ha sido eliminado correctamente.
                        </Text>
                    </Stack>
                ),
            });

        } catch (error: any) {
            notify({
                type: "error",
                title: "Error al eliminar residente",
                message: error.message
            });
        } finally {
            setLoading(false);
        }

    }

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <Alert
                    color="yellow"
                    mt={10}
                    icon={<IconAlertTriangleFilled />}
                    title="¡Antes de continuar....!"
                >
                    <Stack>
                        <Text size="sm">
                            Estás a punto de eliminar el residente “{name}”.
                        </Text>

                        <Text size="sm">
                            Esta acción es <b>permanente e irreversible</b>. Una vez eliminado, no podrás recuperar este permiso, y cualquier cobro que dependiera de él perderá dicha información.
                        </Text>
                        <Text size="sm">
                            Para continuar, escribe exactamente:
                        </Text>

                        <Text size="sm" fw={700}>
                            Eliminar {name}
                        </Text>

                        <Text size="sm">
                            Esto garantiza que comprendes el impacto de esta acción.
                        </Text>
                    </Stack>
                </Alert>

                <Divider />

                <TextInput
                    autoFocus
                    withAsterisk
                    placeholder="Eliminar residente"
                    {...form.getInputProps("value")}
                />

                <Group gap={5} justify="flex-end">
                    <Button variant="outline" onClick={closeModal}>
                        Cancelar
                    </Button>
                    <Button
                        loading={loading}
                        color="red"
                        type="submit"
                    >
                        Eliminar
                    </Button>
                </Group>
            </Stack>
        </form>
    )
}