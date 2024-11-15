# 컨테이너 이미지를 만들기 위한 설명서
FROM openjdk:17
ARG JAR_FILE=build/libs/npcspringbootreactgradle-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT [ "java", "-jar", "app.jar" ]