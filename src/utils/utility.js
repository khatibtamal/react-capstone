const monthMap = new Map();
monthMap.set(0, 'January');
monthMap.set(1, 'February');
monthMap.set(2, 'March');
monthMap.set(3, 'April');
monthMap.set(4, 'May');
monthMap.set(5, 'June');
monthMap.set(6, 'July');
monthMap.set(7, 'August');
monthMap.set(8, 'September');
monthMap.set(9, 'October');
monthMap.set(10, 'November');
monthMap.set(11, 'December');

const dayMap = new Map();
dayMap.set(0, 'Sunday');
dayMap.set(1, 'Monday');
dayMap.set(2, 'Tuesday');
dayMap.set(3, 'Wednesday');
dayMap.set(4, 'Thursday');
dayMap.set(5, 'Friday');
dayMap.set(6, 'Saturday');

export function convertTo12Hour(time) {
    let [hours, minutes] = time.split(':');
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${period}`;
}

export function getTodaysDate() {
    return new Date();
}

export function getYesterdayDate() {
    let yesterday = getTodaysDate();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
}

export function getTomorrowDate() {
    let tomorrow = getTodaysDate();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
}

export function getTwoWeeksAdvanceDate() {
    let twoWeeks = getTodaysDate();
    twoWeeks.setDate(twoWeeks.getDate() + 13);
    return twoWeeks;
}

export function convertDateObjectToSimpleDateString(dateObj) {
    let date = new Date(dateObj);

    const dateDate = date.getDate();
    const day = dayMap.get(date.getDay());
    const month = monthMap.get(date.getMonth());
    const year = date.getFullYear();
    
    return `${day}, ${dateDate} ${month}, ${year}`;
}

export function convertStringDateToObject(dateString) {
    return new Date(dateString);
}
