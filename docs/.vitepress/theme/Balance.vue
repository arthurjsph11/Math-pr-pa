<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

// Balance à deux plateaux : a sacs identiques (x kg chacun) + b poids de 1 kg  ⟷  c poids de 1 kg
// L'équation correspondante : a·x + b = c

const a = ref(3)
const x = ref(4)
const b = ref(2)
const gaucheSacs = ref(3)
const gaucheKg = ref(2)
const droiteKg = ref(14)
const penche = ref(false)
const message = ref('')
const reponse = ref('')
const verdict = ref<'' | 'juste' | 'faux'>('')

const hasard = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1))

function installer(aa: number, xx: number, bb: number) {
  a.value = aa
  x.value = xx
  b.value = bb
  gaucheSacs.value = aa
  gaucheKg.value = bb
  droiteKg.value = aa * xx + bb
  penche.value = false
  reponse.value = ''
  verdict.value = ''
  message.value =
    "Les deux plateaux sont en équilibre : il y a autant de masse à gauche qu'à droite. " +
    "C'est exactement ce que veut dire le signe =. Tous les sacs ont la même masse x, inconnue. " +
    'Ton but : arriver à un seul sac sur un plateau, sans jamais casser l’équilibre.'
}

function recommencer() {
  installer(a.value, x.value, b.value)
}
function nouvelle() {
  installer(hasard(2, 4), hasard(2, 6), hasard(1, 5))
}

function enleverDesDeux() {
  gaucheKg.value--
  droiteKg.value--
  message.value = gaucheKg.value > 0
    ? 'Toujours en équilibre ✓ : on a enlevé la même masse des deux côtés. Continue.'
    : `Toujours en équilibre ✓. Il ne reste que des sacs à gauche : ${gaucheSacs.value} sacs pèsent autant que ${droiteKg.value} kg. Comment n'en garder qu'un seul ?`
}
function enleverGauche() {
  gaucheKg.value--
  penche.value = true
  message.value =
    "Oups ! La balance penche : on a enlevé 1 kg d'un seul côté. Les deux plateaux n'ont plus la même masse, " +
    "l'égalité est devenue fausse. C'est pour ça qu'on fait toujours la même chose des deux côtés. Touche « Recommencer »."
}
function partager() {
  const n = gaucheSacs.value
  droiteKg.value = droiteKg.value / n
  gaucheSacs.value = 1
  message.value =
    `Toujours en équilibre ✓ : on a divisé chaque plateau en ${n} parts égales et gardé une seule part de chaque côté. ` +
    'Il reste 1 sac face à un certain nombre de kilos. À toi de répondre à la question ci-dessous.'
}

const fini = computed(() => !penche.value && gaucheSacs.value === 1 && gaucheKg.value === 0)

function verifier() {
  const n = Number(String(reponse.value).replace(',', '.'))
  verdict.value = n === x.value ? 'juste' : 'faux'
}

// Écriture de l'équation qui correspond à la balance
const membreGauche = computed(() => {
  const sacs = gaucheSacs.value === 1 ? 'x' : `${gaucheSacs.value}x`
  return gaucheKg.value > 0 ? `${sacs} + ${gaucheKg.value}` : sacs
})
const equation = computed(() =>
  penche.value
    ? `${membreGauche.value} ≠ ${droiteKg.value}`
    : `${membreGauche.value} = ${droiteKg.value}`
)

// ----- Dessin -----
const PIVOT = { x: 200, y: 60 }
const BRAS = 130
const FIL = 110
const angleCible = computed(() => {
  const ecart = droiteKg.value - (gaucheSacs.value * x.value + gaucheKg.value)
  return Math.max(-12, Math.min(12, ecart * 4))
})
const angle = ref(0)
let animation = 0
function animer() {
  const d = angleCible.value - angle.value
  angle.value = Math.abs(d) < 0.05 ? angleCible.value : angle.value + d * 0.12
  if (angle.value !== angleCible.value) animation = requestAnimationFrame(animer)
}
watch(angleCible, () => {
  cancelAnimationFrame(animation)
  animation = requestAnimationFrame(animer)
})
onMounted(() => installer(3, 4, 2)) // premier exemple : celui de la leçon
onBeforeUnmount(() => cancelAnimationFrame(animation))

const rad = computed(() => (angle.value * Math.PI) / 180)
const bout = (signe: number) => ({
  x: PIVOT.x + signe * BRAS * Math.cos(rad.value),
  y: PIVOT.y + signe * BRAS * Math.sin(rad.value)
})
const g = computed(() => bout(-1))
const d = computed(() => bout(1))

// Position des objets posés sur un plateau (rangées de 7 poids, sacs en bas)
function objets(cx: number, plateauY: number, sacs: number, kg: number) {
  const liste: { type: 'sac' | 'kg'; x: number; y: number }[] = []
  const largeurSacs = sacs * 26
  for (let i = 0; i < sacs; i++) liste.push({ type: 'sac', x: cx - largeurSacs / 2 + i * 26, y: plateauY - 30 })
  const base = sacs > 0 ? plateauY - 32 : plateauY
  for (let i = 0; i < kg; i++) {
    const rang = Math.floor(i / 7)
    const col = i % 7
    const nbDansRang = Math.min(7, kg - rang * 7)
    liste.push({ type: 'kg', x: cx - (nbDansRang * 15) / 2 + col * 15, y: base - 15 - rang * 15 })
  }
  return liste
}
const objetsG = computed(() => objets(g.value.x, g.value.y + FIL, gaucheSacs.value, gaucheKg.value))
const objetsD = computed(() => objets(d.value.x, d.value.y + FIL, 0, droiteKg.value))
</script>

<template>
  <div class="balance">
    <svg viewBox="0 0 400 300" role="img" :aria-label="`Balance : ${equation}`">
      <!-- support -->
      <rect x="194" y="60" width="12" height="215" rx="3" class="support" />
      <rect x="140" y="272" width="120" height="12" rx="4" class="support" />
      <!-- fléau -->
      <line :x1="g.x" :y1="g.y" :x2="d.x" :y2="d.y" class="fleau" />
      <circle :cx="PIVOT.x" :cy="PIVOT.y" r="7" class="pivot" />
      <!-- plateaux -->
      <template v-for="p in [g, d]" :key="p === g ? 'g' : 'd'">
        <line :x1="p.x" :y1="p.y" :x2="p.x - 55" :y2="p.y + FIL" class="fil" />
        <line :x1="p.x" :y1="p.y" :x2="p.x + 55" :y2="p.y + FIL" class="fil" />
        <path :d="`M ${p.x - 62} ${p.y + FIL} Q ${p.x} ${p.y + FIL + 16} ${p.x + 62} ${p.y + FIL} Z`" class="plateau" />
      </template>
      <!-- objets -->
      <template v-for="(o, i) in [...objetsG, ...objetsD]" :key="i">
        <g v-if="o.type === 'sac'">
          <rect :x="o.x" :y="o.y" width="24" height="30" rx="6" class="sac" />
          <text :x="o.x + 12" :y="o.y + 20" class="etiquette-sac">x</text>
        </g>
        <g v-else>
          <rect :x="o.x" :y="o.y" width="13" height="13" rx="2" class="poids" />
          <text :x="o.x + 6.5" :y="o.y + 10" class="etiquette-poids">1</text>
        </g>
      </template>
    </svg>

    <p class="equation" :class="{ penche }">{{ equation }}</p>
    <p class="message" aria-live="polite">{{ message }}</p>

    <div class="boutons">
      <button type="button" :disabled="penche || gaucheKg === 0" @click="enleverDesDeux">
        Enlever 1 kg des deux côtés
      </button>
      <button type="button" :disabled="penche || gaucheKg === 0" @click="enleverGauche">
        Enlever 1 kg à gauche seulement
      </button>
      <button type="button" :disabled="penche || gaucheKg > 0 || gaucheSacs === 1" @click="partager">
        Partager chaque plateau en {{ gaucheSacs }}
      </button>
      <button type="button" class="secondaire" @click="recommencer">Recommencer</button>
      <button type="button" class="secondaire" @click="nouvelle">Nouvelle balance</button>
    </div>

    <div v-if="fini" class="question">
      <label>
        <strong>Question :</strong> combien pèse un sac (en kg) ?
        <input v-model="reponse" type="text" inputmode="decimal" @keyup.enter="verifier" />
      </label>
      <button type="button" @click="verifier">Vérifier</button>
      <p v-if="verdict === 'juste'" class="juste">
        Exact : x = {{ x }}. Vérification sur la balance de départ :
        {{ a }} × {{ x }} + {{ b }} = {{ a * x + b }} ✓
      </p>
      <p v-else-if="verdict === 'faux'" class="faux">
        Pas tout à fait. Regarde la balance : un seul sac est en équilibre avec les poids de droite.
        Compte-les.
      </p>
    </div>
  </div>
</template>

<style scoped>
.balance {
  margin: 20px 0;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
svg { width: 100%; max-width: 480px; display: block; margin: 0 auto; }
.support { fill: var(--vp-c-text-3); }
.fleau { stroke: var(--vp-c-text-1); stroke-width: 6; stroke-linecap: round; }
.pivot { fill: var(--vp-c-brand-1); }
.fil { stroke: var(--vp-c-text-3); stroke-width: 1.5; }
.plateau { fill: var(--vp-c-text-2); }
.sac { fill: var(--encadre-application); }
.etiquette-sac { fill: #fff; font-size: 15px; font-weight: 700; font-style: italic; text-anchor: middle; }
.poids { fill: var(--encadre-definition); }
.etiquette-poids { fill: #fff; font-size: 9px; font-weight: 700; text-anchor: middle; }
.equation {
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  font-family: KaTeX_Main, 'Times New Roman', serif;
  margin: 8px 0 !important;
}
.equation.penche { color: var(--encadre-erreur); }
.message { min-height: 3em; }
.boutons { display: flex; flex-wrap: wrap; gap: 8px; }
button {
  min-height: 44px;
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  background: var(--vp-c-brand-3);
  color: var(--vp-c-white);
}
button:disabled { opacity: 0.35; cursor: not-allowed; }
button.secondaire { background: var(--vp-c-default-soft); color: var(--vp-c-text-1); }
.question { margin-top: 16px; padding-top: 12px; border-top: 1px dashed var(--vp-c-divider); }
.question label { display: block; margin-bottom: 8px; }
input {
  width: 90px;
  min-height: 44px;
  margin-left: 8px;
  padding: 4px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  font-size: 18px;
}
.juste { color: var(--vp-c-success-1); font-weight: 600; }
.faux { color: var(--encadre-erreur); font-weight: 600; }
</style>
