import { ActionIcon, Avatar, Badge, Group, Table, Text } from "@mantine/core"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import styles from "./ResidentsTable.module.css"
import { useModalStore } from "../../../../store/UIStore"
import { Delete } from "../Delete"
import { Edit } from "../Edit"

export const ResidentsTable = ({ residents }: { residents: any[] }) => {
    const { openModal } = useModalStore()

    const handleRemove = ({ name, id }: { name: string, id: number }) => {
        openModal({
            title: "Eliminar residente",
            content: (
                <Delete
                    name={name}
                    id={id}
                />
            )
        })
    }

    const handleEdit = ({ id, name, address, phone, email }: { id: string, name: string, address: string, phone: string, email: string }) => {
        openModal({
            title: "Editar residente",
            content: (
                <Edit
                    id={id}
                    name={name}
                    address={address}
                    phone={phone}
                    email={email}
                />
            )
        })
    }

    const rows = () => {

        if (residents.length < 1) {
            return (
                <Table.Tr>
                    <Table.Td colSpan={6}>
                        <Text
                            mt={20}
                            size="sm"
                            truncate="end"
                            c="dimmed"
                            style={{ textAlign: "center" }}
                        >
                            Sin elementos
                        </Text>
                    </Table.Td>
                </Table.Tr>
            )
        }

        return residents.map((resident) => (
            <Table.Tr key={resident.id}>
                <Table.Td>
                    <Avatar />
                </Table.Td>
                <Table.Td>{resident.name}</Table.Td>
                <Table.Td>{resident.address}</Table.Td>
                <Table.Td>{resident.phone}</Table.Td>
                <Table.Td>{resident.email}</Table.Td>
                <Table.Td>
                    <Badge
                        size="xs"
                        variant="light"
                        color={resident.status ? "green" : "gray"}
                    >
                        {resident.status ? "Activo" : "Inactivo"}
                    </Badge>
                </Table.Td>
                <Table.Td style={{ textAlign: "center" }}>
                    <Group justify="center" gap={5} wrap="nowrap">
                        <ActionIcon
                            className={styles.action}
                            variant="transparent"
                            onClick={() => handleEdit(resident)}
                        >
                            <IconEdit color="white" size={16} stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon
                            className={styles.action}
                            onClick={() => handleRemove(resident)}
                            variant="transparent"
                        >
                            <IconTrash color="red" size={16} stroke={1.5} />
                        </ActionIcon>
                    </Group>
                </Table.Td>
            </Table.Tr>
        ))
    }

    return (
        <Table.ScrollContainer minWidth={100}>
            <Table verticalSpacing={"xs"}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Foto</Table.Th>
                        <Table.Th>Nombre</Table.Th>
                        <Table.Th>Dirección</Table.Th>
                        <Table.Th>Teléfono</Table.Th>
                        <Table.Th>Correo electronico</Table.Th>
                        <Table.Th>Estado</Table.Th>
                        <Table.Th style={{ textAlign: "center" }}>Acciones</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {rows()}
                </Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    )
}