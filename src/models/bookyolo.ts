export type TBookYolo = {
    adults?: number;
    kids?: number;
    weeks?: number;
    startDate?: Date;
    leaveOn?: 'weekends' | 'anytime';
    transport?: 'car' | 'public';
}

export type Yolo = {
    title: string;
    period: string;
    price: number;
    imageUrl: string;
}