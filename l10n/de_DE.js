OC.L10N.register(
    "cookbook",
    {
    "No image with the matching MIME type was found on the server." : "Auf dem Server wurde kein Bild mit dem passenden MIME-Typ gefunden.",
    "Recipe with ID %d was not found in database." : "Rezept mit der ID %d wurde in der Datenbank nicht gefunden.",
    "Downloading of a file failed returned the following error message: %s" : "Das Herunterladen einer Datei ist fehlgeschlagen, es wurde die folgende Fehlermeldung zurückgegeben: %s",
    "No content encoding was detected in the content." : "Im Inhalt wurde keine Inhaltscodierung erkannt.",
    "The given image for the recipe %s cannot be parsed. Aborting and skipping it." : "Das Foto zum Rezept %s kann nicht gelesen werden. Breche ab und überspringe es.",
    "No valid recipe was left after heuristics of recipe %s." : "Auch mit heuristischer Suche wurde kein Rezept gefunden %s.",
    "Heuristics failed for image extraction of recipe %s." : "Fehler bei der heuristischen Suche nach einem Bild für das Rezept  %s.",
    "Could not guess image URL as no recipe URL was found." : "Eine Bild-URL konnte nicht ermittelt werden, da keine Rezept-URL gefunden wurde.",
    "Could not guess image URL scheme from recipe URL %s" : "Ein Bild-URL-Schema konnte nicht aus der Rezept-URL %sermittelt werden.",
    "Could not parse recipe ingredients. It is no array." : "Rezept-Zutaten konnten nicht analysiert werden. Kein Array.",
    "Could not parse recipe instructions as they are no array." : "Rezept-Anleitung konnten nicht gelesen werden, da kein Array.",
    "Cannot parse recipe: Unknown object found during flattening of instructions." : "Rezept konnte nicht eingelesen werden: Unbekanntes Objekt beim Reduzieren von Anweisungen gefunden.",
    "Did not find any p or li entries in the raw string of the instructions." : "Keine p- oder li-Einträge in der Roh-Zeichenfolge der Anleitung gefunden.",
    "Could not parse the keywords for recipe {recipe}." : "Schlüsselwörter für das Rezept {recipe} konnten nicht analysiert werden.",
    "Could not parse the nutrition information successfully for recipe {name}." : "Die Nährwertangaben für das Rezept {name} konnten nicht analysiert werden.",
    "Using heuristics to parse the \"recipeYield\" field representing the number of servings of recipe {name}." : "Verwenden von Heuristiken zum Analysieren des Felds \"recipeYield\", das die Anzahl der Portionen des Rezepts {name} enthält.",
    "_Only a single number was found in the \"recipeYield\" field. Using it as number of servings._::_There are %n numbers found in the \"recipeYield\" field. Using the highest number found as number of servings._" : ["Es wurden nur eine Zahl im Feld \"recipeYield\" gefunden, verwende sie als Anzahl der Portionen.","Es wurden %n Zahlen im Feld \"recipeYield\" gefunden, verwende die größte Zahl als Anzahl von Portionen."],
    "Could not parse \"recipeYield\" field. Falling back to 1 serving." : "Das Feld \"recipeYield\" konnte nicht eingelesen werden. Setze Anzahl der Portionen auf 1.",
    "Could not parse recipe tools. Expected array or string." : "Rezept-Werkzeuge konnten nicht gelesen werden. Array oder String erwartet.",
    "Could not find recipe in HTML code." : "Rezept in HTML-Code nicht gefunden.",
    "JSON cannot be decoded." : "JSON kann nicht dekodiert werden.",
    "No recipe was found." : "Kein Rezept gefunden.",
    "Parsing of HTML failed." : "Parsen von HTML fehlgeschlagen.",
    "Unsupported error level during parsing of XML output." : "Nicht unterstützte Fehlerstufe beim Analysieren der XML-Ausgabe.",
    "_Warning %u occurred while parsing %s._::_Warning %u occurred %n times while parsing %s._" : ["Warnung %u trat beim Parsen von %s auf.","Warnung %u trat %n Mal beim Parsen von %s auf."],
    "_Error %u occurred while parsing %s._::_Error %u occurred %n times while parsing %s._" : ["Fehler %u trat beim Parsen von %s auf.","Fehler %u trat %n Mal beim Parsen von %s auf."],
    "_Fatal error %u occurred while parsing %s._::_Fatal error %u occurred %n times while parsing %s._" : ["Fataler Fehler %u trat beim Parsen von %s auf.","Fataler Fehler %u trat %n Mal beim Parsen von %s auf."],
    "First time it occurred in line %u and column %u" : "Er trat zum ersten Mal in Zeile %u und Spalte %u auf",
    "Could not parse duration {duration}" : "Dauer {duration} konnte nicht eingelesen werden",
    "The recipe has already an image file. Cannot create a new one." : "Das Rezept hat bereits ein Bilddatei, eine neue Bilddatei kann nicht erstellt werden.",
    "There is no primary image for the recipe present." : "Es ist kein primäres Bild für das Rezept vorhanden.",
    "Cannot parse non-POST multipart encoding. This is a bug." : "Multipart-Kodierung von Nicht-POST kann nicht geparst werden. Dies ist ein Fehler.",
    "Cannot detect type of transmitted data. This is a bug, please report it." : "Kann den Typ der übertragenen Daten nicht erkennen. Dies ist ein Fehler, bitte melden Sie diesen.",
    "Invalid URL-encoded string found. Please report a bug." : "Ungültige URL-kodierte Zeichenfolge gefunden. Bitte melden Sie den Fehler.",
    "Could not parse timestamp {timestamp}" : "Der Zeitstempel {timestamp} konnte nicht ausgewertet werden",
    "The user is not logged in. No user configuration can be obtained." : "Der Benutzer ist nicht angemeldet. Es kann keine Benutzerkonfiguration abgerufen werden.",
    "Recipes" : "Rezepte",
    "The user folder cannot be created due to missing permissions." : "Der Benutzerordner kann aufgrund fehlender Berechtigungen nicht erstellt werden.",
    "The configured user folder is a file." : "Der konfigurierte Benutzerordner ist eine Datei.",
    "User cannot create recipe folder" : "Benutzer konnte Rezeptordner nicht erstellen",
    "in %s" : "in %s",
    "The JSON file in the folder with ID %d does not have a valid name." : "Die JSON-Datei im Ordner mit der ID %d hat keinen gültigen Namen.",
    "Could not parse URL" : "URL konnte nicht geparst werden",
    "Exception while downloading recipe from %s." : "Ausnahmefehler beim Herunterladen des Rezepts von %s.",
    "Download from %s failed as HTTP status code %d is not in expected range." : "Herunterladen von %s fehlgeschlagen, da der HTTP-Statuscode %d nicht im erwarteten Bereich liegt.",
    "Could not find a valid encoding when parsing %s." : "Beim Analysieren von %s konnte keine gültige Kodierung gefunden werden.",
    "No parser found for the given import." : "Für den angegeben Import konnte kein Parser gefunden werden.",
    "No recipe name was given. A unique name is required to store the recipe." : "Es wurde kein Name für das Rezept angegeben. Zum Speichern wird ein eindeutiger Name benötigt.",
    "Another recipe with that name already exists" : "Ein Rezept mit diesem Namen existiert bereits",
    "No recipe data found. This is a bug" : "Keine Rezeptdaten gefunden. Dies ist ein Fehler.",
    "Recipe with ID %d not found." : "Rezept mit der ID %d wurde nicht gefunden.",
    "Image size \"%s\" is not recognized." : "Bildgröße \"%s\" wurde nicht erkannt.",
    "The full-sized image is not a thumbnail." : "Das Bild in voller Größe ist kein Vorschaubild.",
    "The thumbnail type %d is not known." : "Der Typ des Vorschaubilds %d ist unbekannt.",
    "Cookbook" : "Kochbuch",
    "An integrated cookbook using schema.org JSON files as recipes" : "Ein integriertes Kochbuch, das schema.org-JSON-Dateien als Speicher für Rezepte verwendet",
    "A library for all your recipes. It uses JSON files following the schema.org recipe format. To add a recipe to the collection, you can paste in the URL of the recipe, and the provided web page will be parsed and downloaded to whichever folder you specify in the app settings." : "Eine Bibliothek für all Ihre Rezepte. Sie nutzt JSON-Dateien, die dem schema.org-Standard für Rezepte folgen. Um weitere Rezepte zu der Sammlung hinzuzufügen, kann die URL des Rezepts eingefügt werden, so dass die Webseite heruntergeladen, verarbeitet und in einem benutzerspezifizierten Verzeichnis abgelegt wird.",
    "Editing recipe" : "Rezept bearbeiten",
    "Viewing recipe" : "Rezept anzeigen",
    "All recipes" : "Alle Rezepte",
    "None" : "Keine",
    "Loading app" : "Lade App",
    "Loading recipe" : "Rezept wird geladen",
    "Recipe not found" : "Rezept nicht gefunden",
    "Page not found" : "Seite nicht gefunden",
    "Creating new recipe" : "Neues Rezept anlegen",
    "Edit" : "Bearbeiten",
    "Save" : "Speichern",
    "Search" : "Suche",
    "Filter" : "Filter",
    "Reload recipe" : "Rezept neu laden",
    "Abort editing" : "Bearbeitung abbrechen",
    "Print recipe" : "Rezept drucken",
    "Clone recipe" : "Rezept duplizieren",
    "Delete recipe" : "Rezept löschen",
    "Category" : "Kategorie",
    "Recipe name" : "Rezept-Name",
    "Tags" : "Schlagworte",
    "Search for recipes" : "Nach Rezepten suchen",
    "Are you sure you want to delete this recipe?" : "Möchten Sie wirklich dieses Rezept löschen?",
    "Delete failed" : "Löschen fehlgeschlagen",
    "Cannot access recipe folder." : "Auf den Rezeptordner konnte nicht zugegriffen werden.",
    "Select recipe folder" : "Rezeptordner auswählen",
    "Path to your recipe collection" : "Pfad zur Rezept-Sammlung",
    "You are logged in with a guest account. Therefore, you are not allowed to generate arbitrary files and folders on this Nextcloud instance. To be able to use the Cookbook app as a guest, you need to specify a folder where all recipes are stored. You will need write permission to this folder." : "Sie sind mit einem Gastkonto eingeloggt. Daher ist es Ihnen nicht erlaubt, beliebige Dateien und Ordner auf dieser Nextcloud-Instanz zu erzeugen. Um die Cookbook-App als Gast nutzen zu können, müssen Sie einen Ordner angeben, in dem alle Rezepte gespeichert werden. Sie benötigen Schreibrechte für diesen Ordner.",
    "Create recipe" : "Rezept erstellen",
    "Download recipe from URL" : "Rezept von URL herunterladen",
    "Uncategorized recipes" : "Nicht kategorisierte Rezepte",
    "Categories" : "Kategorien",
    "Rename" : "Umbenennen",
    "Enter new category name" : "Bitte neuen Kategorienamen eingeben",
    "Cookbook settings" : "Kochbuch-Einstellungen",
    "Failed to load category {category} recipes" : "Fehler beim Laden der Rezepte aus Kategorie {category} ",
    "Failed to update name of category \"{category}\"" : "Fehler beim Aktualisieren des Namens der Kategorie \"{category}\"",
    "The server reported an error. Please check." : "Der Server meldete einen Fehler. Bitte prüfen.",
    "Could not query the server. This might be a network problem." : "Server kann nicht erreicht werden. Dies könnte ein Netzwerkproblem sein.",
    "Loading category recipes …" : "Lade Kategorie-Rezepte …",
    "Failed to fetch categories" : "Kategorien konnten nicht abgerufen werden.",
    "Enter URL or select from your Nextcloud instance on the right" : "URL eingeben oder aus Ihrer Nextcloud-Instanz auf der rechten Seite auswählen",
    "Pick a local image" : "Bitte wählen Sie eine lokale Bilddatei",
    "Path to your recipe image" : "Pfad zum Rezeptbild",
    "Move entry up" : "Eintrag nach oben verschieben",
    "Move entry down" : "Eintrag nach unten verschieben",
    "Insert entry above" : "Eintrag oben einfügen",
    "Delete entry" : "Eintrag löschen",
    "Add" : "Hinzufügen",
    "Select option" : "Option auswählen",
    "No recipes created or imported." : "Keine Rezepte erstellt oder importiert",
    "To get started, you may use the text box in the left navigation bar to import a new recipe. Click below to create a recipe from scratch." : "Um zu beginnen, können Sie das Textfeld in der linken Navigationsleiste verwenden, um ein neues Rezept zu importieren. Klicken Sie unten, um ein Rezept von Grund auf neu zu erstellen.",
    "No recipes" : "Keine Rezepte",
    "Create new recipe!" : "Neues Rezept erstellen!",
    "Select order" : "Sortierung auswählen",
    "Name" : "Name",
    "Creation date" : "Erstellungsdatum",
    "Modification date" : "Bearbeitungsdatum",
    "Toggle keyword" : "Schlüsselwort umschalten",
    "Keyword not contained in visible recipes" : "Das Schlüsselwort ist in den sichtbaren Rezepten nicht enthalten",
    "Toggle keyword area size" : "Größe des Schlüsselwortbereichs umschalten",
    "Order keywords by number of recipes" : "Schlüsselwörter nach Anzahl von Rezepten sortieren",
    "Order keywords alphabetically" : "Schlüsselwörter alphabetisch sortieren",
    "Recipe folder" : "Rezept-Ordner",
    "Rescan library" : "Bibliothek neu einlesen",
    "Please pick a folder" : "Bitte einen Ordner auswählen",
    "Update interval in minutes" : "Aktualisierungsintervall in Minuten",
    "Recipe display settings" : "Einstellungen der Rezeptdarstellung",
    "Print image with recipe" : "Bild mit Rezept drucken",
    "Show keyword cloud in recipe lists" : "Wolke mit Schlüsselwörtern in Rezeptliste anzeigen",
    "Info blocks" : "Infoblöcke",
    "Control which blocks of information are shown in the recipe view. If you do not use some features and find them distracting, you may hide them." : "Steuern Sie, welche Informationsblöcke in der Rezeptansicht angezeigt werden. Wenn Sie einige Funktionen nicht verwenden und sie als störend empfinden, können Sie sie ausblenden.",
    "Preparation time" : "Vorbereitungsdauer",
    "Cooking time" : "Kochdauer",
    "Total time" : "Gesamtzeit",
    "Nutrition information" : "Nährwertangaben",
    "Tools" : "Utensilien",
    "Frontend debug settings" : "Frontend-Debug-Einstellungen",
    "This allows to temporarily enable logging in the browser console in case of problems. You will not need these settings by default." : "Dadurch kann die Protokollierung bei Problemen in der Browserkonsole vorübergehend aktiviert werden. Standardmäßig wird diese Einstellung nicht benötigt.",
    "Enable debugging" : "Fehlersuche aktivieren",
    "Could not set preference for image printing" : "Die Voreinstellung für den Druck von Bildern konnten nicht festgelegt werden",
    "Could not set recipe update interval to {interval}" : "Konnte das Rezept-Aktualisierungsintervall nicht auf {interval} setzen",
    "Could not save visible info blocks" : "Sichtbare Infoblöcke konnten nicht gespeichert werden",
    "Could not set recipe folder to {path}" : "Konnte den Pfad '{path}' nicht als Rezept-Ordner setzen",
    "Dismiss" : "Ablehnen",
    "Cancel" : "Abbrechen",
    "OK" : "OK",
    "The page was not found" : "Die Seite wurde nicht gefunden",
    "Description" : "Beschreibung",
    "URL" : "URL",
    "Image" : "Bild",
    "Preparation time (hours:minutes)" : "Vorbereitungszeit (Stunden:Minuten)",
    "Cooking time (hours:minutes)" : "Kochdauer (Stunden:Minuten)",
    "Total time (hours:minutes)" : "Gesamtzeit (Stunden:Minuten)",
    "Choose category" : "Kategorie auswählen",
    "Keywords" : "Schlüsselwörter",
    "Choose keywords" : "Schlüsselwörter auswählen",
    "Servings" : "Portionen",
    "Toggle if the number of servings is present" : "Umschalten, wenn die Anzahl der Portionen vorhanden ist",
    "Nutrition Information" : "Nährwertangaben",
    "Pick option" : "Option wählen",
    "Ingredients" : "Zutaten",
    "Instructions" : "Zubereitung",
    "You have unsaved changes! Do you still want to leave?" : "Sie haben nicht gespeicherte Änderungen! Wollen Sie immer noch gehen?",
    "Calories" : "Kalorien",
    "E.g.: 450 kcal (amount & unit)" : "Z. B.: 450 kcal (Menge & Einheit)",
    "Carbohydrate content" : "Kohlenhydratgehalt",
    "E.g.: 2 g (amount & unit)" : "Z. B.: 2 g (Menge & Einheit)",
    "Cholesterol content" : "Cholesteringehalt",
    "Fat content" : "Fettgehalt",
    "Fiber content" : "Fasergehalt",
    "Protein content" : "Proteingehalt",
    "Saturated-fat content" : "Gehalt an gesättigten Fettsäuren",
    "Serving size" : "Portionsgröße",
    "Enter serving size (volume or mass)" : "Portionsgröße eingeben (Volumen oder Masse)",
    "Sodium content" : "Natriumgehalt",
    "Sugar content" : "Zuckergehalt",
    "Trans-fat content" : "Gehalt an Transfetten",
    "Unsaturated-fat content" : "Gehalt an ungesättigten Fettsäuren",
    "Failed to fetch keywords" : "Schlüsselwörter konnten nicht abgerufen werden",
    "Unknown answer returned from server. See logs." : "Unbekannte Antwort vom Server zurückgegeben. Siehe Protokolle.",
    "No answer for request was received." : "Keine Antwort auf die Anfrage erhalten.",
    "Could not start request to save recipe." : "Die Anforderung zum Speichern des Rezepts konnte nicht gestartet werden.",
    "Clone of {name}" : "Klon von {name}",
    "Loading recipe failed" : "Laden des Rezepts fehlgeschlagen",
    "Recipe image" : "Rezept-Bild",
    "Cooking time is up!" : "Die Kochzeit ist vorbei!",
    "Search recipes with this keyword" : "Rezepte mit diesem Schlüsselwort suchen",
    "Date created" : "Erstellungsdatum",
    "Last modified" : "Zuletzt geändert",
    "Source" : "Quelle",
    "Preparation time (H:MM)" : "Vorbereitungsdauer (H:MM):",
    "Cooking time (H:MM)" : "Kochdauer (H:MM)",
    "Total time (H:MM)" : "Gesamtzeit (H:MM)",
    "Copy ingredients" : "Zutaten kopieren",
    "Serving Size" : "Portionsgröße",
    "Energy" : "Energie",
    "Sugar" : "Zucker",
    "Carbohydrate" : "Kohlenhydrate",
    "Cholesterol" : "Cholesterin",
    "Fiber" : "Faser",
    "Protein" : "Protein",
    "Sodium" : "Natrium",
    "Fat total" : "Fett gesamt",
    "Saturated Fat" : "Gesättigte Fettsäuren",
    "Unsaturated Fat" : "Ungesättigte Fettsäuren",
    "Trans Fat" : "Transfette",
    "Loading…" : "Lade …",
    "The ingredient cannot be recalculated due to incorrect syntax. Please change it to this syntax: amount unit ingredient. Examples: 200 g carrots or 1 pinch of salt" : "Die Menge der Zutat kann aufgrund einer falschen Syntax nicht neu berechnet werden. Bitte in diese Syntax ändern: Menge Einheit Zutat. Beispiele: 200 g Karotten oder 1 Prise Salz",
    "Failed to load recipes with keywords: {tags}" : "Fehler beim Laden der Rezepte mit Schlagworten: {tags}",
    "Failed to load search results" : "Fehler beim Laden der Suchergebnisse",
    "Cannot read content of JSON file %s" : "Inhalt der JSON-Datei %s kann nicht gelesen werden",
    "Cannot download image using curl" : "Bild kann mit curl nicht heruntergeladen werden.",
    "Filter current recipes" : "Aktuelle Rezepte filtern",
    "Search recipes" : "Rezepte suchen",
    "Delete nutrition item" : "Nährstoffelement löschen",
    "Please select option first." : "Bitte zuerst eine Option auswählen.",
    "Show settings for filtering recipe list" : "Einstellungen für das Filtern der Rezeptliste anzeigen",
    "Order" : "Reihenfolge",
    "Show filter settings" : "Filtereinstellungen anzeigen",
    "Filter name" : "Filtername",
    "Search term" : "Suchbegriff",
    "All categories" : "Alle Kategorien",
    "Show recipes containing any selected category" : "Rezepte anzeigen, die irgendeine ausgewählte Kategorie enthalten",
    "Show recipes containing all selected categories" : "Rezepte anzeigen, die alle ausgewählten Kategorien enthalten",
    "All keywords" : "Alle Schlüsselwörter",
    "Show recipes containing any selected keyword" : "Rezepte anzeigen, die irgendein ausgewähltes Schlüsselwort enthalten",
    "Show recipes containing all selected keywords" : "Rezepte anzeigen, die alle ausgewählten Schlüsselworte enthalten",
    "Clear" : "Leeren",
    "_1 category selected_::_{n} categories selected_" : ["{n} Kategorie ausgewählt","{n} Kategorien ausgewählt"],
    "_1 keyword selected_::_{n} keywords selected_" : ["{n} Schlüsselwort ausgewählt","{n} Schlüsselworte ausgewählt"],
    "Recipe filters" : "Rezeptfilter",
    "Matching all selected categories" : "Passend zu allen ausgewählten Kategorien",
    "Matching any selected category" : "Passend zu irgendeiner der ausgewählten Kategorien",
    "Matching all selected keywords" : "Passend zu allen ausgewählten Schlüsselworten",
    "Matching any selected keyword" : "Passend zu irgendeinem der ausgewählten Schlüsselworte",
    "Apply" : "Anwenden",
    "Show filters and sorting in recipe lists" : "Filter und Sortierung in Rezeptliste anzeigen",
    "Preparation time (hours:minutes:seconds)" : "Vorbereitungszeit (Stunden:Minuten:Sekunden)",
    "Cooking time (hours:minutes:seconds)" : "Kochzeit (Stunden:Minuten:Sekunden)",
    "Total time (hours:minutes:seconds)" : "Gesamtzeit (Stunden:Minuten:Sekunden)",
    "_{hours}h_::_{hours}h_" : ["{hours}Std","{hours}Std"],
    "_{minutes}m_::_{minutes}m_" : ["{minutes}Min","{minutes}Min"],
    "_{seconds}s_::_{seconds}s_" : ["{seconds}Sek","{seconds}Sek"],
    "Copy ingredients to the clipboard" : "Zutaten in die Zwischenablage kopieren",
    "{item} copied to clipboard" : "{item} wurde in die Zwischenablage kopiert",
    "Copying {item} to clipboard failed" : "Fehler beim Kopieren von {item} in die Zwischenablage",
    "ingredients" : "Zutaten",
    "The ingredient cannot be recalculated due to incorrect syntax. Please ensure the syntax follows this format: amount unit ingredient and that a specific number of portions is set for this function to work correctly. Examples: 200 g carrots or 1 pinch of salt." : "Die Menge der Zutat kann aufgrund einer nicht unterstützen Syntax nicht neu berechnet werden. Bitte stelle sicher, dass die Syntax diesem Format folgt: Menge Einheit Zutat und dass eine bestimmte Anzahl von Portionen eingegegeben ist, damit diese Funktion korrekt funktioniert. Beispiele: 200 g Karotten oder 1 Prise Salz."
},
"nplurals=2; plural=(n != 1);");
