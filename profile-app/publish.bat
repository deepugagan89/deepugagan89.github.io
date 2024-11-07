rem rmdir /s/q "./dist/profile-app/browser/assets"
rem rmdir /s/q "../docs"
rem mkdir "../docs"
rem copy "./build/static/" "../PlayFair-BE/wwwroot/static"
rem copy "./build/" "../PlayFair-BE/wwwroot"
xcopy /s /y "%cd%\dist\profile-app\browser" "%cd%\..\docs"
pause