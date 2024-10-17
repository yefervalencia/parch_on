export const formatDate = (dateString: string) => {
    const eventDate = new Date(dateString);
    const day = eventDate.toLocaleDateString("es-CO", {
        day: "numeric",
        timeZone: "UTC",
    });
    const month = eventDate
        .toLocaleDateString("es-CO", { month: "short", timeZone: "UTC" })
        .toUpperCase();

    return { day, month };
};

export const formatTimeToAMPM = (time: string) => {
    const [hour, minutes] = time.split(":").map(Number);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
};  