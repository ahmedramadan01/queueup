package com.berlinsaas.queueup.tenant.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginTenantRequest(
        @NotBlank
        @Email
        String businessEmail,
        @NotBlank
        String password
) {
}
