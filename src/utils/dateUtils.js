export function getMonthAndYear() {
    const currentDate = new Date();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // To display the month name, you can use an array of month names:
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (`${monthNames[monthIndex]} ${year}`);
}