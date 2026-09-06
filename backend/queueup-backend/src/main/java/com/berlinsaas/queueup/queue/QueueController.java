package com.berlinsaas.queueup.queue;

import com.berlinsaas.queueup.queue.dto.CreateQueueRequest;
import com.berlinsaas.queueup.queue.dto.QueueResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class QueueController {

    private final QueueService queueService;

    public QueueController(QueueService queueService) {
        this.queueService = queueService;
    }

    @PostMapping("/tenants/{tenantId}/queues")
    @ResponseStatus(HttpStatus.CREATED)
    public QueueResponse create(
            @PathVariable UUID tenantId,
            @Valid @RequestBody CreateQueueRequest request
    ) {
        return queueService.create(tenantId, request);
    }

    @GetMapping("/tenants/{tenantId}/queues")
    public List<QueueResponse> getAllByTenant(
            @PathVariable UUID tenantId
    ) {
        return queueService.getAllByTenant(tenantId);
    }

    @GetMapping("/queues/{queueId}")
    public QueueResponse getById(
            @PathVariable UUID queueId
    ) {
        return queueService.getById(queueId);
    }
}