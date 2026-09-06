package com.berlinsaas.queueup.queue;


import com.berlinsaas.queueup.tenant.Tenant;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Table(name = "queue")
@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Queue {

    @Id
    private UUID id;

    @Column(nullable = false)
    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private QueueStatus status;

    @Column(name = "average_service_minutes")
    private Integer averageServiceMinutes;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tenant_id", nullable = false)
    private Tenant tenant;
}