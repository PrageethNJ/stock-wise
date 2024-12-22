# Use a minimal Java runtime for the final image
FROM openjdk:21-jdk-slim

EXPOSE 8090

COPY target/stockwise_backend.jar stockwise_backend.jar

ADD target/stockwise_backend.jar stockwise_backend.jar

ENTRYPOINT ["java","-jar","/stockwise_backend.jar"]