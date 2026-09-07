package com.berlinsaas.queueup.tenant;


import com.berlinsaas.queueup.tenant.dto.CreateTenantRequest;
import com.berlinsaas.queueup.tenant.dto.TenantResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Service
public class TenantService {

    private final TenantRepository tenantRepository;
    private final PasswordEncoder passwordEncoder;

    public TenantService(TenantRepository tenantRepository, PasswordEncoder passwordEncoder) {
        this.tenantRepository = tenantRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public TenantResponse create(CreateTenantRequest request) {

        if (tenantRepository.existsByBusinessEmail(request.businessEmail())) {
            throw new IllegalArgumentException(
                    "A tenant with this contact email already exists"
            );
        }

        if(!request.password().equals(request.confirmPassword())) {
            throw new IllegalArgumentException("Passwords do not match");
        }

        String passwordHash = passwordEncoder.encode(request.password());

        Tenant tenant = Tenant.builder()
                .id(UUID.randomUUID())
                .createdAt(Instant.now())
                .businessEmail(request.businessEmail())
                .businessName(request.businessName())
                .hashedPassword(passwordHash)
                .ownerName(request.ownerName())
                .build();

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