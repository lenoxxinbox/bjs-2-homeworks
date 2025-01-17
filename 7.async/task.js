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
        return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => this.alarmCollection.forEach(alarm => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.canCall = false;
                alarm.callback();
            }
        }), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
