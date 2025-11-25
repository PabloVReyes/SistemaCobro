import { Button, Card, Container, Group, Stack, Text, Title } from "@mantine/core"
import { useEffect, useState } from "react"
import { getCollections } from "../api/collections";
import { CmpCollectionsTable } from "../components/collections/CmpCollectionsTable";
import { IconPlus } from "@tabler/icons-react";
import { useModalStore } from "../store/UIStore";
import { CmpCollectionsAdd } from "../components/collections/CmpCollectionsAdd";

export const Collections = () => {
    const [collection, setCollection] = useState<any[]>([])
    const { openModal } = useModalStore();

    const loadData = async () => {
        getCollections()
            .then(setCollection)
    };

    useEffect(() => {
        loadData()
    }, []);

    const handleAdd = () => {
        openModal({
            title: "Nuevo cobro",
            content: <CmpCollectionsAdd/>
        })
    }

    return (
        <Container>
            <Stack gap="md">
                <Group>
                    <Stack gap={1} style={{ flex: '1 1 auto' }}>
                        <Title order={2}>Lista de cobros</Title>
                        <Text size="sm" c="dimmed">Lista de todos los cobros registrados</Text>
                    </Stack>

                    <Button leftSection={<IconPlus />} onClick={handleAdd}>
                        Nuevo cobro
                    </Button>
                </Group>

                <Card>
                    <CmpCollectionsTable
                        collections={collection}
                    />
                </Card>
            </Stack>
        </Container>
    )
}