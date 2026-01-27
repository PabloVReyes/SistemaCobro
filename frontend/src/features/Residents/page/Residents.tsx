import { useEffect } from "react"
import { useResidentsStore } from "../store"
import { Button, Card, Container, Divider, Group, Stack, Text, Title } from "@mantine/core"
import { Add, ResidentsTable } from "../components"
import { IconPlus } from "@tabler/icons-react"
import { useModalStore } from "../../../store/UIStore"
import { Pagination, Search } from "../../../components"

export const Residents = () => {
    const { openModal } = useModalStore()
    const { fetch, residents, search, setSearch } = useResidentsStore()

    useEffect(() => {
        fetch()
    }, [search])

    const handleAdd = () => {
        openModal({
            title: "Agregar residente",
            content: <Add />
        })
    }

    return (
        <Container size="lg">
            <Stack>
                <Title order={2}>
                    Gestión de Residentes
                </Title>

                <Text c="dimmed">
                    Administra la información de los residentes
                </Text>

                <Card>
                    <Stack>

                        <Group gap={4}>
                            <Search
                                value={search}
                                onChange={setSearch}
                            />

                            <Button
                                leftSection={
                                    <IconPlus size={14} />
                                }
                                onClick={handleAdd}
                            >
                                Agregar residente
                            </Button>
                        </Group>

                        <Divider />

                        <ResidentsTable
                            residents={residents}
                        />
                        
                        <Pagination
                            useStore={useResidentsStore}
                        />
                    </Stack>
                </Card>
            </Stack>
        </Container>
    )
}