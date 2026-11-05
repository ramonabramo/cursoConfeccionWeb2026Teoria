export function formatearEuros(numero) {
    return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(numero);
}
