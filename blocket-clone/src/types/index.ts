export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user';
}

export interface Listing {
    id: string;
    title: string;
    description: string;
    price: number;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface AdminStats {
    totalUsers: number;
    totalListings: number;
    activeUsers: number;
}

export interface LoginCredentials {
    email: string;
    password: string;
}