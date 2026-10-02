import katex from 'katex'

// Transforme un texte d'exercice en HTML : $...$ et $$...$$ en formules KaTeX,
// **gras**, sauts de ligne. Le reste du texte est échappé (pas de HTML injecté).
const echapper = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const formule = (tex: string, display = false) =>
  katex.renderToString(tex, { displayMode: display, throwOnError: false })

export function rendreTexte(s: string): string {
  return s
    .split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g)
    .map((morceau) => {
      if (morceau.startsWith('$$')) return formule(morceau.slice(2, -2), true)
      if (morceau.startsWith('$')) return formule(morceau.slice(1, -1))
      return echapper(morceau)
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>')
    })
    .join('')
}
