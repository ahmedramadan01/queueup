package com.berlinsaas.queueup.tenant;


import com.berlinsaas.queueup.tenant.dto.CreateTenantRequest;
import com.berlinsaas.queueup.tenant.dto.TenantResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Service
public class TenantService {

    private final TenantRepository tenantRepository;

    public TenantService(TenantRepository tenantRepository) {
        this.tenantRepository = tenantRepository;
    }

    @Transactional
    public TenantResponse create(CreateTenantRequest request) {

        if (tenantRepository.existsByBusinessEmail(request.contactEmail())) {
            throw new IllegalArgumentException(
                    "A tenant with this contact email already exists"
            );
        }

        Tenant tenant = new Tenant(
                UUID.randomUUID(),
                request.name(),
                request.owner(),
                request.contactEmail(),
                Instant.now()
        );

        Tenant savedTenant = tenantRepository.save(tenant);

        return TenantResponse.from(savedTenant);
    }

    @Transactional(readOnly = true)
    public TenantResponse getById(UUID id) {

        Tenant tenant = tenantRepository.findById(id)
                .orElseThrow(() ->
                        new IllegalArgumentException("Tenant not found")
                );

        return TenantResponse.from(tenant);
    }

    @Transactional(readOnly = true)
    public List<TenantResponse> getAll() {

        return tenantRepository.findAll()
                .stream()
                .map(TenantResponse::from)
                .toList();
    }
}