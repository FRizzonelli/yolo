export type TBookYolo = {
    adults?: number;
    kids?: number;
    weeks?: number;
    startDate?: Date;
    leaveOn?: 'weekends' | 'anytime';
    transport?: 'car' | 'public';
}