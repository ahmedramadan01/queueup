package com.berlinsaas.queueup.tenant.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record CreateTenantRequest(

        @NotBlank
        String businessName,

        @NotBlank
        String ownerName,

        @NotBlank
        @Email
        String businessEmail,

        @NotBlank
        String password,

        @NotBlank String confirmPassword

) {
}