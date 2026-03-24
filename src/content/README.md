# Où écrire votre contenu

Écrivez votre texte ici :

- `presentation.ts` → cartes de la section Présentation
- `parcours.ts` → cartes de la section Parcours & compétences
- `realisations.ts` → cartes de la section Réalisations

Chaque objet représente **une carte** + **sa page détaillée**.

Champs à modifier :
- `title`
- `summary`
- `paragraphs`
- `table`

Ne changez pas `key` sauf si vous savez aussi mettre à jour `RouteKey` dans `src/types.ts`.


## Ajouter plusieurs tableaux / sous-titres dans une carte

Utilisez le champ optionnel `blocks` dans un objet:

```ts
blocks: [
  {
    heading: "Sous-titre 1",
    paragraphs: ["Texte..."],
    tables: [
      { title: "Tableau 1", rows: [{ label: "A", value: "B" }] },
      { title: "Tableau 2", rows: [{ label: "C", value: "D" }] }
    ]
  }
]
```

Ces blocs s'affichent dans l'onglet **Sections avancées** sur la page détaillée.


### Nouveau: `flow` pour ordre libre des composants

Vous pouvez maintenant définir un enchaînement libre:
texte → tableaux → onglets → texte, etc.

Types disponibles:
- `type: "text"`
- `type: "table"`
- `type: "tabs"`

Si `flow` est présent sur une carte, la page détaillée suit cet ordre automatiquement.
