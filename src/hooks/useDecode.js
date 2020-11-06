export const useDecode = (...rest) => {
    const element = document.createElement('textarea');
    element.innerHTML = rest.join(',');
    return element.value.split(',');
}