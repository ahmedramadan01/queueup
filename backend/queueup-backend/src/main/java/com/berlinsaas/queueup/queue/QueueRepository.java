package com.berlinsaas.queueup.queue;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface QueueRepository extends JpaRepository<Queue, UUID> {

    List<Queue> findAllByTenantId(UUID tenantId);
}