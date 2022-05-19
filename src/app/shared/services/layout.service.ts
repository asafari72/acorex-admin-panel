import { AXPlatform } from '@acorex/core';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    public mode: 'light' | 'dark' = 'light';

    constructor(private platform: AXPlatform){}
    detectMode() {
        const _mode = localStorage.getItem('MODE');
        if (_mode === 'dark') {
            this.enableDarkMode();
        } else {
            this.enableLightMode();
        }
    }
    
    switchMode() {
        if (this.mode === 'light') {
            this.enableDarkMode()
        } else {
            this.enableLightMode()
        }
    }

    enableLightMode() {
        this.mode = "light";
        localStorage.setItem("MODE", 'light')
        this.platform.switchLightMode();
    }
    enableDarkMode() {
        this.mode = "dark";
        localStorage.setItem("MODE", 'dark')
        this.platform.switchDarkMode();
    }
}