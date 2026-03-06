# Clinical Profile Demo

**Portale paziente educativo** — Un caso clinico reale, anonimizzato, trasformato in un portale interattivo per la comprensione del percorso diagnostico-terapeutico.

🔗 **[Visita il portale →](https://salvofedele.github.io/clinical-profile-demo/)**

---

## Il caso

Donna di 68 anni, fisioterapista in pensione, canottiera agonista. Stile di vita esemplare (non fumatrice, no alcol, attività fisica intensa) che si confronta con una genetica sfavorevole (familiarità per aterosclerosi, diabete, neoplasie) e un profilo clinico complesso con 13 problemi attivi tracciati.

Il progetto dimostra come gli strumenti digitali possano trasformare una relazione clinica densa e tecnica in un percorso comprensibile per il paziente e la sua famiglia.

## Contenuti

| Risorsa | Descrizione |
|---------|-------------|
| [**Portale clinico**](https://salvofedele.github.io/clinical-profile-demo/portale-clinico-integrato.html) | Dashboard con matrice di triage, status card, cronoprogramma interattivo, schede esplicative |
| [**Flashcard**](https://salvofedele.github.io/clinical-profile-demo/flashcard-cliniche.html) | 54 domande/risposte con flip animato, filtri per categoria, autovalutazione |
| [**Podcast annotato**](https://salvofedele.github.io/clinical-profile-demo/podcast-annotato.html) | 15 min, due voci — transcript sincronizzato con 12 correzioni editoriali |
| [**Video guida**](https://salvofedele.github.io/clinical-profile-demo/video-guida.html) | 7 min, voce singola — transcript con 6 correzioni essenziali |
| [**Timeline**](https://salvofedele.github.io/clinical-profile-demo/timeline-clinica-interattiva.html) | 35 eventi dal 1998 al 2026, filtrabili per 9 categorie cliniche |

## Flusso di lavoro

```
Relazione clinica (medico)
        ↓
NotebookLM (Google) → podcast, video, flashcard, roadmap PDF
        ↓
Claude Opus 4.6 (Anthropic) → revisione editoriale + portale HTML interattivo
        ↓
GitHub Pages → deploy pubblico
```

### Revisione editoriale

Tutto il materiale generato da NotebookLM è stato sottoposto a revisione editoriale con Claude per:

- **Correzione errori terminologici** (es. "cistifella" → cistifellea, "RCP" → ERCP)
- **Verifica accuratezza clinica** (es. transaminasi etichettate come "nella norma" quando lievemente elevate)
- **Segnalazione imprecisioni** (es. CEA confuso con marcatore NET, cromogranina A presentata con tono polemico)
- **Arricchimento contenuti** (risposte flashcard ampliate con contesto clinico)

Le correzioni sono visibili in-line nei transcript (barrato rosso + correzione verde) e nelle annotazioni a margine.

## Stack tecnico

- **HTML/CSS/JS** — File singoli self-contained, nessun framework, nessun build step
- **Google Fonts** — DM Serif Display + IBM Plex Sans + IBM Plex Mono
- **GitHub Pages** — Deploy statico
- **NotebookLM** — Generazione podcast, video e flashcard
- **Claude Opus 4.6** — Revisione editoriale e sviluppo portale interattivo

## Privacy e consenso

- Tutti i dati clinici sono **anonimizzati**: nessun nome, codice fiscale o dato identificativo diretto
- L'ID paziente (181257-F) è derivato dalla data di nascita, non è un identificativo reale
- Il progetto è pubblicato con il **consenso esplicito** della paziente
- Finalità esclusivamente **educativa e divulgativa**

## Struttura del repository

```
clinical-profile-demo/
├── index.html                        ← Landing page
├── portale-clinico-integrato.html    ← Portale principale (4 tab)
├── flashcard-cliniche.html           ← Modulo studio interattivo
├── podcast-annotato.html             ← Player audio + transcript annotato
├── audio-podcast.m4a                 ← File audio podcast (15:42)
├── video-guida.html                  ← Player video + transcript annotato
├── video-guida.mp4                   ← File video guida (7:07)
├── timeline-clinica-interattiva.html ← Timeline standalone
├── README.md                         ← Questo file
└── CHANGELOG.md                      ← Diario aggiornamenti
```

## Autore

**Salvo Fedele** — Pediatra, consulente clinico volontario  
Newsletter: [Segnale e Rumore](https://salvofedele.substack.com/) · GitHub: [@salvofedele](https://github.com/salvofedele)

## Licenza

Questo progetto è condiviso a scopo educativo. I contenuti clinici sono specifici per il caso descritto e non devono essere utilizzati per scopi diagnostici o terapeutici su altri pazienti.
