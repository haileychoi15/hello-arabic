export const useDate = (date) => {
    const day = date.toLocaleDateString().replaceAll('.', '').replaceAll(' ', '.');
    const [hours, minutes] = date.toLocaleTimeString().split(':');
    return `${day} ${hours}:${minutes}`;
}