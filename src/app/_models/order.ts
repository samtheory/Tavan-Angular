export interface Order {
    id: number;
    price: number;
    isfinally: boolean;
    userId: number;
    productId: number;
    productName: string;
    userEmail: string;
    isActive: boolean;
    created_at: Date;

}
