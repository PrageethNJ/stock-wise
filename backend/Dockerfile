# Stage 1: Build the application
FROM maven:3.9.8-eclipse-temurin-21 AS build
WORKDIR /app

# Copy only the pom.xml first to leverage Docker layer caching for dependencies
COPY pom.xml /app
RUN mvn dependency:go-offline

# Copy the source code after dependencies are cached
COPY src /app/src
RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM openjdk:21-slim
EXPOSE 8090
WORKDIR /app
COPY --from=build /app/target/stockwise_backend.jar stockwise_backend.jar
ENTRYPOINT ["java", "-jar", "stockwise_backend.jar"]
