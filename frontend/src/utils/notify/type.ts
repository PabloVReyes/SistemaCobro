export type NotifyType = 'success' | 'error' | 'info' | 'warning';

export interface NotifyOptionProps {
    title?: string;
    message: string;
    type?: NotifyType;
    autoClose?: number | false;
    id?: string;
}
