cd "./frontend/vue"

REM cmd /k "npm run buildlocal"
npm run buildlocal

cd ..
cd ..

dir

rd /s /Q "./Client/dist/"
md "./Client/dist/"

xcopy "./frontend/vue/dist" "./Client/dist" /s /e /y

rd /s /Q "./Server/server/express/"
md "./Server/server/express/"

xcopy "./backend/express" "./Server/server/express" /s /e /y

pause