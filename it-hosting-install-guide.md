# Police Fitness Tracker IT Hosting and Install Guide

This package is a static offline-first web app for applicant and academy fitness testing.[code_file:0] It is designed to be hosted as a normal website folder and installed to iPad Home Screens through Safari.[code_file:0]

## Files included

- `police-fitness-tracker.html` — main application.[code_file:0]
- `manifest.webmanifest` — enables Home Screen install behavior.[code_file:0]
- `service-worker.js` — caches the app for offline use after first load.[code_file:0]
- `icon-192.svg` and `icon-512.svg` — app icons for install/use.[code_file:0]
- `fpd-logo.jpg` — Farmington Police logo used in the app header and PDF exports.[code_file:0]

## Hosting requirements

- Host the entire folder at one web URL over HTTPS.[code_file:0]
- Keep all filenames and relative paths unchanged.[code_file:0]
- Serve `.webmanifest` with `application/manifest+json` if possible; if not, `application/json` usually still works.[code_file:0]
- Do not place the app behind a login flow that blocks the service worker or static assets after install.[code_file:0]

## Recommended deployment steps

1. Upload the complete folder contents to a dedicated department web path such as `/fitness-tracker/`.[code_file:0]
2. Confirm the main URL loads in Safari, for example `https://yourdepartment.gov/fitness-tracker/police-fitness-tracker.html`.[code_file:0]
3. Open Safari developer/network tools if available and confirm the manifest and service worker files load successfully.[code_file:0]
4. Test the page once while online, then refresh it to allow the service worker cache to populate.[code_file:0]
5. Put the iPad in airplane mode and relaunch the app URL to confirm offline startup before field use.[code_file:0]

## iPad user install steps

1. Open the app URL in Safari.[code_file:0]
2. Tap the Share button.[code_file:0]
3. Tap **Add to Home Screen**.[code_file:0]
4. Launch the app from the new Home Screen icon.[code_file:0]
5. Run a short test session and confirm saved data remains available after closing and reopening the app.[code_file:0]

## Storage behavior

The app stores saved sessions in IndexedDB on the device, which is more durable than basic browser key-value storage for this workflow.[code_file:0] Because the data is stored locally on each device, clearing Safari website data for the hosting origin will remove saved sessions on that device.[code_file:0]

## PDF export behavior

The app generates PDF files directly in the browser without requiring a server round trip.[code_file:0] IT should test PDF download behavior on the target iPad model and iOS version, because some managed device settings can affect where downloads are saved or how they are previewed.[code_file:0]

## Operational recommendations

- Test on at least one iPad while online and offline before live use.[code_file:0]
- Keep one backup stopwatch available for the run and sprint events.[code_file:0]
- If the app is updated later, users should reopen it while online at least once so the new version can be cached.[code_file:0]
