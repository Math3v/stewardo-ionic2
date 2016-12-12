import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Device } from 'ionic-native';

interface IDevice {
    _uuid: string;
    _platform: string;
    _version: string;
    _model: string;
    _manufacturer: string;
};

@Injectable()
export class DeviceService {

    constructor(
        private platform: Platform
    ) { }

    getDeviceInfo(): Promise<IDevice> {
        return new Promise((resolve, reject) => {
            this.platform.ready().then(() => {
                resolve({
                    _uuid: Device.uuid,
                    _platform: Device.platform,
                    _version: Device.version,
                    _model: Device.model,
                    _manufacturer: Device.manufacturer
                });
            });
        });
    }
}