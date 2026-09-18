CREATE TABLE tenant
(
    id             UUID NOT NULL,
    business_name  VARCHAR(255),
    owner_name          VARCHAR(255),
    business_email VARCHAR(255),
    created_at     TIMESTAMP WITHOUT TIME ZONE,
    hashed_password VARCHAR(255),
    PRIMARY KEY (id)

);