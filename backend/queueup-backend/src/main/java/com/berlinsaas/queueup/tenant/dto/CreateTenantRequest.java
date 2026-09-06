package com.berlinsaas.queueup.tenant.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record CreateTenantRequest(

        @NotBlank
        String name,

        @NotBlank
        String owner,

        @NotBlank
        @Email
        String contactEmail

) {
}