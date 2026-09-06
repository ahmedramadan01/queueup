package com.berlinsaas.queueup.queue.dto;


import com.berlinsaas.queueup.queue.Queue;
import com.berlinsaas.queueup.queue.QueueStatus;

import java.time.Instant;
import java.util.UUID;

public record QueueResponse(
        UUID id,
        String name,
        String description,
        QueueStatus status,
        Integer averageServiceMinutes,
        UUID tenantId,
        Instant createdAt
) {

    public static QueueResponse from(Queue queue) {
        return new QueueResponse(
                queue.getId(),
                queue.getName(),
                queue.getDescription(),
                queue.getStatus(),
                queue.getAverageServiceMinutes(),
                queue.getTenant().getId(),
                queue.getCreatedAt()
        );
    }
}
