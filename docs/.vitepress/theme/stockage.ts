// Sauvegarde locale (dans le navigateur de l'appareil).
// À l'étape 5, ces données seront synchronisées avec Supabase.

export function lire<T>(cle: string, defaut: T): T {
  try {
    const brut = localStorage.getItem(cle)
    return brut ? (JSON.parse(brut) as T) : defaut
  } catch {
    return defaut
  }
}

export function ecrire(cle: string, valeur: unknown) {
  try {
    localStorage.setItem(cle, JSON.stringify(valeur))
  } catch {
    // stockage indisponible (navigation privée…) : on ignore
  }
}

// Parties terminées d'une leçon, ex. [1, 2]
export const cleParties = (lecon: string) => `progression:${lecon}`
