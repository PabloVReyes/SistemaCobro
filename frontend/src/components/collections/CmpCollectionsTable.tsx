import { Table } from "@mantine/core";

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffSec = Math.floor(diffMs / 1000)
    const diffMin = Math.floor(diffSec / 60)
    const diffHour = Math.floor(diffMin / 60)
    const diffDay = Math.floor(diffHour / 24)

    if (diffDay >= 1) {
        return date.toLocaleDateString("es-MX", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    } else if (diffHour >= 1) {
        return `hace ${diffHour} hora${diffHour > 1 ? "s" : ""}`
    } else if (diffMin >= 1) {
        return `hace ${diffMin} minuto${diffMin > 1 ? "s" : ""}`
    } else {
        return `hace unos segundos`
    }
}

export const CmpCollectionsTable = ({ collections }: any) => {

    const renderRows = () => {
        return collections.map((item: any, index: number) => (
            <Table.Tr key={index}>
                <Table.Td>{item.id}</Table.Td>
                <Table.Td>{formatDate(item.fecha)}</Table.Td>
                <Table.Td>{item.metodo}</Table.Td>
                <Table.Td>${item.monto}</Table.Td>
                <Table.Td>{item.vecino.nombre}</Table.Td>
                <Table.Td>{item.usuario.nombre}</Table.Td>
            </Table.Tr>
        ));
    };

    return (
        <Table.ScrollContainer minWidth={100}>
            <Table verticalSpacing={"xs"}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Numero</Table.Th>
                        <Table.Th>Fecha</Table.Th>
                        <Table.Th>Metodo de cobro</Table.Th>
                        <Table.Th>Monto</Table.Th>
                        <Table.Th>Vecino</Table.Th>
                        <Table.Th>Usuario que realizo el cobro</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{renderRows()}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
};
