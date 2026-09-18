import { httpClient } from "../../../api/httpClient";
import type {
    AuthResponse,
    RegisterRequest,
} from "../types/auth.types";

export const authApi = {
    async register(request: {
        businessName: string;
        ownerName: string;
        businessEmail: string;
        password: string;
        confirmPassword: string
    }): Promise<AuthResponse> {
        const response = await httpClient.post<AuthResponse>(
            "/tenants/auth/register",
            request
        );

        return response.data;
    },
};