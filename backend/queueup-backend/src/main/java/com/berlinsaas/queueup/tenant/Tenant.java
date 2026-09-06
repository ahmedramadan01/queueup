package com.berlinsaas.queueup.tenant;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Table(name = "tenant")
@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Tenant {

    @Id
    private UUID id;
    private String businessName;
    private String owner;
    private String businessEmail;
    private Instant createdAt;

}
