import { Avatar, Table } from "@mantine/core";

export const CmpNeighborsTable = ({ neighbors }: any) => {

    const renderRows = () => {
        return neighbors.map((item: any, index: number) => (
            <Table.Tr key={index}>
                <Table.Td>
                    <Avatar/>
                </Table.Td>
                <Table.Td>{item.nombre}</Table.Td>
                <Table.Td>{item.direccion}</Table.Td>
            </Table.Tr>
        ));
    };

    return (
        <Table.ScrollContainer minWidth={800}>
            <Table verticalSpacing={"xs"}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Avatar</Table.Th>
                        <Table.Th>Nombre</Table.Th>
                        <Table.Th>Direccion</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{renderRows()}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
};
