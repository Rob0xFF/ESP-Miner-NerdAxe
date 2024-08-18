import { eASICModel } from './enum/eASICModel';

export interface ISystemInfo {

    flipscreen: number;
    invertscreen: number;
    autoscreenoff: number;
    power: number,
    voltage: number,
    current: number,
    temp: number,
    vrTemp: number,
    hashRate: number,
    bestDiff: string,
    bestSessionDiff: string,
    freeHeap: number,
    usedNVS: number,
    coreVoltage: number,
    hostname: string,
    ssid: string,
    resetReason: string,
    nerdDisplayStatus: number,
    hasFoundBlock: number,
    wifiStatus: string,
    sharesAccepted: number,
    sharesRejected: number,
    uptimeSeconds: number,
    asicCount: number,
    smallCoreCount: number,
    ASICModel: eASICModel,
    stratumURL: string,
    stratumPort: number,
    stratumUser: string,
    frequency: number,
    version: string,
    boardVersion: string,
    invertfanpolarity: number,
    autofanspeed: number,
    autofanSetpoint: number,
    tempSetpoint: number,
    fanspeed: number,
    fanrpm: number,
    coreVoltageActual: number,

    boardtemp1?: number,
    boardtemp2?: number
}
