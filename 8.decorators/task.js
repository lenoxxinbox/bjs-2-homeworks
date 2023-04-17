"use strict";

//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(JSON.stringify(args));
        let objectInCache = cache.find((item) => item.hash === hash);

        if (objectInCache) {
            return "Из кэша: " + objectInCache.result;
        }

        let result = func(...args);
        cache.push({ hash, result });

        if (cache.length > 5) {
            cache.shift();
        }
        return "Вычисляем: " + result;
    }
    return wrapper;
}

// //Задача № 2

function debounceDecoratorNew(func, delay) {
    let isThrottled = false;
    let count = 0;
    let allCount = 0;

    function wrapper(...args) {
        allCount++;
        if (!isThrottled) {
            func(...args);
            count++;
            isThrottled = true;
            setTimeout(() => isThrottled = false, delay);
        }
        wrapper.count = count;
        wrapper.allCount = allCount;
    }
    wrapper.count = count;
    wrapper.allCount = allCount;

    return wrapper;
}
