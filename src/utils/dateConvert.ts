export const dateConvert = (date) => {
    const d = new Date(date);
    const currentDate = new Date().getTime();
    const fullDate = new Intl.DateTimeFormat("fa-IR")
        .format(d)
        .substring(5, 9)
        .replace("/", " / ");
    const month = new Intl.DateTimeFormat("fa-IR", { month: "short" }).format(d);
    const day = new Intl.DateTimeFormat("fa-IR", { day: "numeric" }).format(d);

    const diffDays = Math.floor(
        (d.getTime() - currentDate) / (1000 * 60 * 60 * 24)
    );

    const weekday =
      diffDays === 0
        ? "امروز"
        : diffDays === 1
        ? "فردا"
        : diffDays === 2
        ? "پس فردا"
        : new Intl.DateTimeFormat("fa-IR", { weekday: "short" }).format(d);


    return { fullDate, month, day, weekday }
}