"use strict";

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.time === time) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({ callback, time, canCall: true });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        return `${String(currentDate.getHours())}:${String(currentDate.getMinutes())}`;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setTimeout(() => this.alarmCollection.forEach(alarm => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.canCall = false;
                alarm.callback();
            }
        }), 1000);
    }
}
