package com.berlinsaas.queueup.tenant.dto;

import com.berlinsaas.queueup.tenant.Tenant;

import java.time.Instant;
import java.util.UUID;

public record TenantResponse(
        UUID id,
        String name,
        String owner,
        String contactEmail,
        Instant createdAt
) {

    public static TenantResponse from(Tenant tenant) {
        return new TenantResponse(
                tenant.getId(),
                tenant.getBusinessName(),
                tenant.getOwnerName(),
                tenant.getBusinessEmail(),
                tenant.getCreatedAt()
        );
    }
}