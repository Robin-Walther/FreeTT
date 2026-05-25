# FreeTT Starter
# Removes ELECTRON_RUN_AS_NODE so Electron opens actual GUI windows

$electronExe = Join-Path $PSScriptRoot "node_modules\electron\dist\electron.exe"
$appDir      = $PSScriptRoot

$psi = New-Object System.Diagnostics.ProcessStartInfo
$psi.FileName         = $electronExe
$psi.Arguments        = "`"$appDir`""
$psi.UseShellExecute  = $false
$psi.WorkingDirectory = $appDir

# Remove variable that suppresses Electron GUI (set by some Electron hosts)
if ($psi.EnvironmentVariables.Contains("ELECTRON_RUN_AS_NODE")) {
    $psi.EnvironmentVariables.Remove("ELECTRON_RUN_AS_NODE")
}

$proc = New-Object System.Diagnostics.Process
$proc.StartInfo = $psi
Write-Host "Starting FreeTT..." -ForegroundColor Cyan
$proc.Start() | Out-Null
Write-Host "Running (PID $($proc.Id)). Close the app window to exit." -ForegroundColor Green
$proc.WaitForExit()
