"use strict";

function parseCount(parsedValue) {
    const newValue = parseFloat(parsedValue);
    if (isNaN(newValue)) {
        const error = new Error("Невалидное значение");
        throw error;
    }
    return newValue;
}

function validateCount(parsedValue) {
    try {
        return parseCount(parsedValue);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const halfOfPerimeter = this.perimeter / 2;
        return +Math.sqrt(halfOfPerimeter * (halfOfPerimeter - this.a) * (halfOfPerimeter - this.b) * (halfOfPerimeter - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
        };
    }
}
