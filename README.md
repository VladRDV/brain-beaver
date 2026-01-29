# Work In Progress

Brain Beaver is a flashcard app that helps you memorize stuff

### requirements:

1. CRUD for flashcard decks and text flashcards with proper UI and SQLite intergration
2. learning mode(just read through the cards), challenge mode(go through cards and get a score at the end) and edit mode(CRUD cards and deck itself)
3. export of decks into files, decks can all be backuped via "Export All Decks" option or 1 by 1 via "Export Deck"
4. responsive UI, I might create a mobile build for this LATER
5. I'll avoid using WebGl or WebGPU for now, Tauri is a bit weird with those
6. Decks must be stored in SQLite database
7. LATER Deck encryption
8. no data goes over the wire, fully local and offline app
9. image support for cards
10. LATER code highlighting support for cards
11. LATER video and audio(maybe even audio CRUD) suport in cards
12. full test coverage
13. LATER mixing cards from different decks in challenge mode
14. moving cards between decks, copying them and merging decks
15. JSON import and EXPORT of individual or all decks
16. theming
17. animated card UI made with Three.js LATER, but for start I'll use CSS
18. markdown sidenotes that can be added to each deck and be used as deck description as well
19. video and audio support for cards
20. LATER Spaced Repetition settings and notifications for those
21. LATER allow hiding parts of the image to test your knowledge
22. LATER allow beeping out parts of the audio to test your knowledge
23. no complex statistics, each deck just keeps history of your challenge mode results for each session
24. cards and decks must be searchable via "look for card" adn "look for deck" modes
25. card reveal timer setting for challenge mode
26. user's confidence grade for each deck
27. LATER 3d model viewer with conceilment for knowledge testing
28. support for different languages
29. Navigation should have "Recents" section where links to last 10 visited decks are visible
