export const productHrefs = [
  '/productos/cartonizacion',
  '/productos/catalogo'
];

/** Localized product list: hrefs are fixed, names/taglines come from the dictionary. */
export const localizeProducts = (
  items: { name: string; tagline: string }[]
) => productHrefs.map((href, i) => ({ href, ...items[i] }));
