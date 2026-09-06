package com.berlinsaas.queueup.queue;

import com.berlinsaas.queueup.queue.dto.CreateQueueRequest;
import com.berlinsaas.queueup.queue.dto.QueueResponse;
import com.berlinsaas.queueup.tenant.Tenant;
import com.berlinsaas.queueup.tenant.TenantRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Service
public class QueueService {

    private final QueueRepository queueRepository;
    private final TenantRepository tenantRepository;

    public QueueService(
            QueueRepository queueRepository,
            TenantRepository tenantRepository
    ) {
        this.queueRepository = queueRepository;
        this.tenantRepository = tenantRepository;
    }

    @Transactional
    public QueueResponse create(UUID tenantId, CreateQueueRequest request) {

        Tenant tenant = tenantRepository.findById(tenantId)
                .orElseThrow(() ->
                        new IllegalArgumentException("Tenant not found")
                );

        Queue queue = new Queue(
                UUID.randomUUID(),
                request.name(),
                request.description(),
                QueueStatus.CLOSED,
                request.averageServiceMinutes(),
                Instant.now(),
                tenant
        );

        return QueueResponse.from(
                queueRepository.save(queue)
        );
    }

    @Transactional
    public List<QueueResponse> getAllByTenant(UUID tenantId) {
        return queueRepository.findAllByTenantId(tenantId)
                .stream()
                .map(QueueResponse::from)
                .toList();
    }

    @Transactional
    public QueueResponse getById(UUID queueId) {
        Queue queue = queueRepository.findById(queueId)
                .orElseThrow(() ->
                        new IllegalArgumentException("Queue not found")
                );

        return QueueResponse.from(queue);
    }
}