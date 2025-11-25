import { Card, Container, Group, Stack, Text, Title } from "@mantine/core"
import { useEffect, useState } from "react"
import { getNeighbors } from "../api/neighbor";
import { CmpNeighborsTable } from "../components/neighbors/CmpNeighborsTable";

export const Neighbors = () => {
    const [neighbor, setNeighbor] = useState<any[]>([])

    const loadData = async () => {
        getNeighbors()
            .then(setNeighbor)
    };

    useEffect(() => {
        loadData()
    }, []);


    return (
        <Container>
            <Stack gap="md">
                <Group>
                    <Stack gap={1} style={{ flex: '1 1 auto' }}>
                        <Title order={2}>Lista de vecinos</Title>
                        <Text size="sm" c="dimmed">Lista de todos los vecinos registrados</Text>
                    </Stack>
                </Group>

                <Card>
                    <CmpNeighborsTable
                        neighbors={neighbor}
                    />
                </Card>
            </Stack>
        </Container>
    )
}