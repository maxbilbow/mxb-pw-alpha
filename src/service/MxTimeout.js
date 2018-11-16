/* eslint-disable no-undef */


export default function $interval(callback, timeout, repeat) {
    return setInterval(callback, timeout, repeat);
}

export function $timeout(callback, timeout) {
    return setTimeout(callback, timeout);
}

$interval.cancel = (n) => {
    clearTimeout(n);
};

$timeout.cancel = (n) => {
    clearTimeout(n);
};
