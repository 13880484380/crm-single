@echo off

rem -------------------------------------------------------------------------
rem
rem 使用说明：
rem
rem 1: 打包时默认使用application-test.yml配置文件，如需要更改，直接更改下面的命令即可，如 -Dspring.profiles.include=core,prod
rem
rem -------------------------------------------------------------------------

setlocal & pushd

set JAVA_OPTS=-Dspring.profiles.include=core,test
if "${project.artifactId}" == "wk_gateway" (
java -Xms128m -Xmx512m -jar ${project.artifactId}-${project.version}.jar
)  else  (
java -Xms128m -Xmx512m -jar %JAVA_OPTS% ${project.artifactId}-${project.version}.jar
)

endlocal & popd
pause



