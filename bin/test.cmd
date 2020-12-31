FOR /F "tokens=* USEBACKQ" %%F IN (`tzutil /g`) DO SET PREVIOUS_TZ=%%F
tzutil /s "UTC"
cmd.exe /c yarn test -u
tzutil /s "%PREVIOUS_TZ%"