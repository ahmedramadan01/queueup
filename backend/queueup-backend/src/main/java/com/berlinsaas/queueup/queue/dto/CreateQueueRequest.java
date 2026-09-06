package com.berlinsaas.queueup.queue.dto;


import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record CreateQueueRequest(

        @NotBlank
        String name,

        String description,

        @Min(1)
        Integer averageServiceMinutes

) {
}