# Clinical Profile Demo

**La stessa informazione clinica, nel formato che funziona meglio per quel paziente, in quel momento.**

🔗 **[Esplora la demo →](https://salvofedele.github.io/clinical-profile-demo/)**

---

## Il problema

I medici lo sanno ma raramente lo dicono ad alta voce: la relazione clinica che prepariamo con cura spesso non viene letta. O viene letta e non capita. O capita a metà.

Non è colpa del paziente. È che non esiste un formato universale per la comprensione. Un paziente la sera prima di dormire può voler ascoltare. Un familiare che l'accompagna agli esami vuole qualcosa da guardare. Un figlio adulto che non era in studio ha bisogno di rileggere con calma.

## La soluzione

Questo progetto prende una relazione clinica reale — 12 pagine, 13 problemi attivi, piani terapeutici, tabelle di laboratorio, checklist con scadenze — e la trasforma in un portale interattivo multi-formato. La relazione tecnica continua ad esistere: non viene né semplificata né sostituita. Ma ora la stessa informazione è accessibile in tanti formati diversi.

Non è ridondanza. È lo stesso contenuto che cerca il canale giusto per quella persona, in quel momento.

## Il caso

Donna di 68 anni, fisioterapista in pensione, canottiera agonista. Stile di vita esemplare — non fumatrice, no alcol, attività fisica intensa — che si confronta con una genetica sfavorevole e un profilo clinico complesso con 13 problemi attivi tracciati. Tutti i dati sono anonimizzati e pubblicati con il consenso della paziente.

## Contenuti

| Risorsa | Per chi | Formato |
|---------|---------|---------|
| [**Portale clinico**](https://salvofedele.github.io/clinical-profile-demo/portale-clinico-integrato.html) | Paziente + famiglia + medici | Dashboard interattiva, 4 tab |
| [**Flashcard**](https://salvofedele.github.io/clinical-profile-demo/flashcard-cliniche.html) | Chi vuole verificare di aver capito | 54 domande, flip, autovalutazione |
| [**Podcast annotato**](https://salvofedele.github.io/clinical-profile-demo/podcast-annotato.html) | Chi preferisce ascoltare | 15 min, due voci, transcript sync |
| [**Video guida**](https://salvofedele.github.io/clinical-profile-demo/video-guida.html) | Chi preferisce guardare | 7 min, voce singola, didattico |
| [**Timeline**](https://salvofedele.github.io/clinical-profile-demo/timeline-clinica-interattiva.html) | Chi vuole la visione d'insieme | 35 eventi, 1998–2026, filtrabili |

## Flusso di lavoro

```
    ┌──────────────────────────────┐
    │   Relazione clinica (medico) │
    │   12 pagine · 13 problemi   │
    └──────────────┬───────────────┘
                   │
                   ▼
    ┌──────────────────────────────┐
    │   NotebookLM (Google)        │
    │   Genera: podcast, video,    │
    │   flashcard, roadmap PDF     │
    └──────────────┬───────────────┘
                   │
                   ▼
    ┌──────────────────────────────┐
    │   Claude (Anthropic)         │
    │   Revisione editoriale:      │
    │   - Correzione errori        │
    │   - Verifica clinica         │
    │   - Portale HTML interattivo │
    │   - Architettura aggiornabile│
    └──────────────┬───────────────┘
                   │
                   ▼
    ┌──────────────────────────────┐
    │   GitHub Pages               │
    │   Deploy pubblico            │
    │   Open source                │
    └──────────────────────────────┘
```

### Revisione editoriale

Il materiale generato da NotebookLM è stato sottoposto a revisione con Claude per:

- **Correzione errori terminologici** — "cistifella" → cistifellea, "RCP" → ERCP, "alter" → Holter
- **Verifica accuratezza clinica** — transaminasi rietichettate da "nella norma" a "lievemente sopra ULN"
- **Segnalazione imprecisioni** — CEA non è marcatore NET, cromogranina A con tono editoriale corretto
- **Arricchimento contenuti** — flashcard ampliate con contesto clinico

Le correzioni sono visibili in-line nei transcript: barrato rosso + correzione verde + annotazioni a margine.

## Architettura aggiornabile

Il progetto è pensato per essere mantenuto nel tempo. I dati clinici sono centralizzati in un unico file:

**`dati-clinici.json`** — contiene problemi, terapie, scadenze, biomarcatori. Per aggiornare il profilo (nuovi esami, scadenze completate, nuove diagnosi) si modifica solo questo file. Non serve programmare: è testo strutturato, VS Code evidenzia errori di sintassi.

Esempio di aggiornamento — spuntare una scadenza completata:

```json
{ "voce": "Densitometria DEXA", "completata": false }
                                                 ↓
{ "voce": "Densitometria DEXA", "completata": true }
```

Esempio — aggiungere un nuovo biomarcatore:

```json
{ "nome": "LDL", "valore": 68, "unita": "mg/dL", "rif": "<70", "data": "2026-03-15", "status": "ok" }
```

Una barra di navigazione condivisa (`nav.js`) collega tutte le pagine tra loro. Aggiungere una nuova pagina al portale significa aggiungere una riga a quel file.

## Stack tecnico

- **HTML/CSS/JS** — File singoli self-contained, nessun framework, nessun build step
- **JSON** — Dati clinici centralizzati per aggiornamenti semplificati
- **GitHub Pages** — Deploy statico, nessun server
- **NotebookLM** — Generazione contenuti multimediali
- **Claude Opus 4.6** — Revisione editoriale e sviluppo portale

## Struttura del repository

```
clinical-profile-demo/
├── index.html                        ← Landing page
├── portale-clinico-integrato.html    ← Portale principale (4 tab)
├── flashcard-cliniche.html           ← 54 domande interattive
├── podcast-annotato.html             ← Player + transcript annotato
├── audio-podcast.m4a                 ← Audio podcast (15:42)
├── video-guida.html                  ← Player + transcript annotato
├── video-guida.mp4                   ← Video guida (7:07)
├── timeline-clinica-interattiva.html ← Timeline 1998–2026
├── nav.js                            ← Navigazione condivisa
├── dati-clinici.json                 ← Dati centralizzati (aggiornabile)
├── README.md
├── CHANGELOG.md                      ← Diario aggiornamenti clinici
└── .vscode/
    ├── settings.json                 ← Configurazione progetto
    └── extensions.json               ← Estensioni consigliate
```

## Privacy e consenso

- Tutti i dati sono **anonimizzati**: nessun nome, codice fiscale o dato identificativo
- Pubblicato con il **consenso esplicito** della paziente
- Finalità esclusivamente **educativa e divulgativa**
- I contenuti clinici sono specifici per questo caso e non devono essere usati per altri pazienti

## Come contribuire

Questo progetto è open source proprio perché chiunque voglia prendere questo template, adattarlo al proprio contesto o migliorarlo, può farlo. Che siate medici, pazienti o sviluppatori.

Cosa manca? Cosa cambiereste? Aprite un issue o un pull request.

## Autore

**Salvo Fedele** — Pediatra, consulente clinico volontario  
Newsletter: [Segnale e Rumore](https://salvofedele.substack.com/) · GitHub: [@salvofedele](https://github.com/salvofedele)
