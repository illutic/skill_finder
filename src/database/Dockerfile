FROM postgres:13.2
WORKDIR /
ENV POSTGRES_USER $DB_USER
ENV POSTGRES_PASSWORD $DB_PASSWORD
ENV POSTGRES_DB $DB_DATABASE
COPY ./schemas/* docker-entrypoint-initdb.d/
COPY ./scripts/* docker-entrypoint-initdb.d/
EXPOSE 5432
USER postgres