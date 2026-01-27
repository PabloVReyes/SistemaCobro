import type { ReactNode } from "react";

///// Modal /////
interface ModalData {
    title?: string;
    subtitle?: string;
    content: ReactNode;
    autoClose?: number;
}

export interface ModalStore {
    opened: boolean
    modal: ModalData | null
    openModal: (data: ModalData) => void;
    closeModal: () => void;
};
