export type UserRole = 'OWNER' | 'EMPLOYEE';

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  tenantId: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  ownerName: string;
  tenantName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
}