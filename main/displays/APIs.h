// APIs.h  ─────────────────────────────────────────────
#ifndef APIS_H
#define APIS_H

// Zeitintervall für NTP oder Task-Scheduler (wie bisher)
#define UPDATE_PERIOD_h   5

/* ▼ ALTER EINTRAG WIRD ERSETZT ▼
#define getBTCAPI "http://api.coindesk.com/v1/bpi/currentprice.json"
#define UPDATE_BTC_min   1
*/

/* ▼ NEU: Binance-Endpoint, kein Token nötig  */
#define getBTCAPI "http://data-api.binance.vision/api/v3/ticker/price?symbol=BTCUSDT"
#define UPDATE_BTC_min   1   // belassen; der Endpoint hat 60 s-TTL

unsigned int getBTCprice(void);

#endif // APIS_H
