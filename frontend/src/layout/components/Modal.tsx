import { Modal as ModalMantine, Stack, Text } from "@mantine/core"
import { useEffect } from "react";
import { useModalStore } from "../../store/UIStore";

export const Modal = () => {
    const { opened, closeModal, modal } = useModalStore()

    useEffect(() => {
        if (!opened || !modal?.autoClose) return;

        const timer = setTimeout(() => {
            closeModal();
        }, modal.autoClose);

        return () => clearTimeout(timer);
    }, [opened, modal?.autoClose, closeModal]);

    return (
        <ModalMantine.Root
            opened={opened}
            onClose={closeModal}
            centered
            size="lg"
        >
            <ModalMantine.Overlay />
            <ModalMantine.Content>
                {(modal?.title || modal?.subtitle) &&
                    (
                        <ModalMantine.Header>
                            <ModalMantine.Title style={{ width: "100%", textAlign: "center" }}>
                                {modal?.title}
                                {modal?.subtitle && (
                                    <Text size="sm" c="dimmed">
                                        {modal.subtitle}
                                    </Text>
                                )}
                            </ModalMantine.Title>
                        </ModalMantine.Header>
                    )
                }
                <ModalMantine.Body>
                    <Stack>{modal?.content}</Stack>
                </ModalMantine.Body>
            </ModalMantine.Content>
        </ModalMantine.Root>
    )
}