@echo off
title LingoHero Web Server (Port 5500)
echo ===================================================
echo     Menjalankan Server Lokal LingoHero...
echo     Alamat: http://localhost:5500/
echo ===================================================
start "" "http://localhost:5500/"
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
