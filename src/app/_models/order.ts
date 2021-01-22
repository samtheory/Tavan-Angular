export interface Order {
    id: number;
    price: number;
    isfinally: boolean;
    userId: number;
    productId: number;
    productName: string;
    userEmail: string;
    created_at: Date;

}
