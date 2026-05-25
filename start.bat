@echo off
:: FreeTT Starter
:: Unsets ELECTRON_RUN_AS_NODE so the app opens proper GUI windows
set "ELECTRON_RUN_AS_NODE="
echo Starting FreeTT...
set "APP_DIR=%~dp0"
set "APP_DIR=%APP_DIR:~0,-1%"
"%APP_DIR%\node_modules\electron\dist\electron.exe" "%APP_DIR%"
