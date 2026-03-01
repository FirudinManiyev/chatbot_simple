export const normalizeText = (text: string) => {
    return text
        .toLowerCase()
        .replace(/[ıi]/g, "i")
        .replace(/[əe]/g, "e")
        .replace(/[öo]/g, "o")
        .replace(/[ğg]/g, "g")
        .replace(/[şs]/g, "s")
        .replace(/[çc]/g, "c")
        .replace(/[üu]/g, "u")
}