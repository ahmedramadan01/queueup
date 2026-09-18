CREATE TABLE queue (
                       id UUID PRIMARY KEY,

                       tenant_id UUID NOT NULL,

                       name VARCHAR(150) NOT NULL,

                       description VARCHAR(500),

                       status VARCHAR(30) NOT NULL,

                       average_service_minutes INTEGER,

                       created_at TIMESTAMP WITH TIME ZONE NOT NULL,

                       CONSTRAINT fk_queue_tenant
                           FOREIGN KEY (tenant_id)
                               REFERENCES tenant(id),

                       CONSTRAINT chk_queue_average_service_minutes
                           CHECK (
                               average_service_minutes IS NULL
                                   OR average_service_minutes > 0
                               )
);