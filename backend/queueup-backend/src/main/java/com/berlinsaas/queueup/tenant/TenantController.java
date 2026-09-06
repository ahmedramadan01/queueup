package com.berlinsaas.queueup.tenant;

import com.berlinsaas.queueup.tenant.dto.CreateTenantRequest;
import com.berlinsaas.queueup.tenant.dto.TenantResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/tenants")
public class TenantController {

    private final TenantService tenantService;

    public TenantController(TenantService tenantService) {
        this.tenantService = tenantService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TenantResponse create(
            @Valid @RequestBody CreateTenantRequest request
    ) {
        return tenantService.create(request);
    }

    @GetMapping("/{id}")
    public TenantResponse getById(
            @PathVariable UUID id
    ) {
        return tenantService.getById(id);
    }

    @GetMapping
    public List<TenantResponse> getAll() {
        return tenantService.getAll();
    }
}
