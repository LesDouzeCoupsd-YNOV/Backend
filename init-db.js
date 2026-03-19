import Database from "better-sqlite3";

const db = new Database("quiz.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS "Célébrités" (
        "CélébritéID" INTEGER PRIMARY KEY,
        "Name" TEXT
    );
    CREATE TABLE IF NOT EXISTS "Questions" (
        "QuestionID" INTEGER PRIMARY KEY,
        "Name" TEXT,
        "RéponseID" INTEGER
    );
    CREATE TABLE IF NOT EXISTS "Réponse" (
        "RéponseID" INTEGER PRIMARY KEY,
        "Name" TEXT,
        "QuestionID" INTEGER
    );
`);

const insertQuestion = db.prepare(
    `INSERT OR IGNORE INTO "Questions" (QuestionID, Name, RéponseID) VALUES (?, ?, ?)`
);
const insertReponse = db.prepare(
    `INSERT OR IGNORE INTO "Réponse" (RéponseID, Name, QuestionID) VALUES (?, ?, ?)`
);

// Question 1 - Bonne réponse : "apt update" (ID 2)
insertQuestion.run(1, "Quel commande permet de mettre à jour la liste de packages sur Linux ?", 2);
insertReponse.run(1, "apt remove", 1);
insertReponse.run(2, "apt update", 1);
insertReponse.run(3, "apt install", 1);
insertReponse.run(4, "apt upgrade", 1);

// Question 2 - Bonne réponse : "XVIIe siècle" (ID 8)
insertQuestion.run(2, "A quel siècle Louis XIV a-t-il régné ?", 8);
insertReponse.run(5, "XVIe siècle", 2);
insertReponse.run(6, "XIXe siècle", 2);
insertReponse.run(7, "XVIIIe siècle", 2);
insertReponse.run(8, "XVIIe siècle", 2);

// Question 3 - Bonne réponse : "The Crux" (ID 11)
insertQuestion.run(3, "Comment s'appelle le dernier album sorti par le chanteur américain Djo ?", 11);
insertReponse.run(9, "Twenty Twenty", 3);
insertReponse.run(10, "Decide", 3);
insertReponse.run(11, "The Crux", 3);
insertReponse.run(12, "End of Beginning", 3);

// Question 4 - Bonne réponse : "Ryan Gosling" (ID 13)
insertQuestion.run(4, "Qui récemment a été décrit comme le roi des mèmes ?", 14);
insertReponse.run(13, "Ryan Gosling", 4);
insertReponse.run(14, "Léonardo Dicaprio", 4);
insertReponse.run(15, "Nicolas Cage", 4);
insertReponse.run(16, "Keanu Reeves", 4);

// Question 5 - Bonne réponse : "Sylvain Bagland" (ID 19)
insertQuestion.run(5, "Qui est le fondateur de NSAM et du célèbre groupe d'expert en cybersécurité CyberFi ?", 19);
insertReponse.run(17, "Marc Lefèvre", 5);
insertReponse.run(18, "Jean Dupont", 5);
insertReponse.run(19, "Sylvain Bagland", 5);
insertReponse.run(20, "Pierre Martin", 5);

// Question 6 - Bonne réponse : "Virtual Private Network" (ID 24)
insertQuestion.run(6, "Que signifie le sigle de VPN ?", 24);
insertReponse.run(21, "Very Protected Network", 6);
insertReponse.run(22, "Virtual Public Node", 6);
insertReponse.run(23, "Verified Private Network", 6);
insertReponse.run(24, "Virtual Private Network", 6);

// Question 7 - Bonne réponse : "Canberra" (ID 26)
insertQuestion.run(7, "Quelle est la capitale de l'Australie ?", 26);
insertReponse.run(25, "Sydney", 7);
insertReponse.run(26, "Canberra", 7);
insertReponse.run(27, "Melbourne", 7);
insertReponse.run(28, "Brisbane", 7);

// Question 8 - Bonne réponse : "Léonard de Vinci" (ID 31)
insertQuestion.run(8, "Qui a peint la Joconde ?", 31);
insertReponse.run(29, "Michel-Ange", 8);
insertReponse.run(30, "Botticelli", 8);
insertReponse.run(31, "Léonard de Vinci", 8);
insertReponse.run(32, "Raphaël", 8);

// Question 9 - Bonne réponse : "Portugais" (ID 35)
insertQuestion.run(9, "Quelle est la langue officielle du Brésil ?", 35);
insertReponse.run(33, "Espagnol", 9);
insertReponse.run(34, "Brésilien", 9);
insertReponse.run(35, "Portugais", 9);
insertReponse.run(36, "Anglais", 9);

// Question 10 - Bonne réponse : "Oxygène" (ID 39)
insertQuestion.run(10, "Quel est l'élément chimique dont le symbole est O ?", 39);
insertReponse.run(37, "Or", 10);
insertReponse.run(38, "Oganesson", 10);
insertReponse.run(39, "Oxygène", 10);
insertReponse.run(40, "Osmium", 10);

// Question 11 - Bonne réponse : "Spyware" (ID 42)
insertQuestion.run(11, "Quel type de logiciel est conçu pour voler vos informations personnelles ?", 42);
insertReponse.run(41, "Firmware", 11);
insertReponse.run(42, "Spyware", 11);
insertReponse.run(43, "Adware", 11);
insertReponse.run(44, "Freeware", 11);

// Question 12 - Bonne réponse : "George Washington" (ID 48)
insertQuestion.run(12, "Qui était le premier président des États-Unis ?", 48);
insertReponse.run(45, "Thomas Jefferson", 12);
insertReponse.run(46, "Abraham Lincoln", 12);
insertReponse.run(47, "John Adams", 12);
insertReponse.run(48, "George Washington", 12);

// Question 13 - Bonne réponse : "Blanc" (ID 50)
insertQuestion.run(13, "Quelle est la couleur du cheval blanc de Napoléon ?", 50);
insertReponse.run(49, "Gris", 13);
insertReponse.run(50, "Blanc", 13);
insertReponse.run(51, "Brun", 13);
insertReponse.run(52, "Noir", 13);

// Question 14 - Bonne réponse : "Le chien Laïka" (ID 55)
insertQuestion.run(14, "Quel animal de compagnie a été envoyé dans l'espace en premier ?", 55);
insertReponse.run(53, "Le singe Albert", 14);
insertReponse.run(54, "La tortue Tortilla", 14);
insertReponse.run(55, "Le chien Laïka", 14);
insertReponse.run(56, "Le chat Félicette", 14);

// Question 15 - Bonne réponse : "Chasseur" (ID 57)
insertQuestion.run(15, "Quel est le métier le plus ancien selon certaines études historiques ?", 57);
insertReponse.run(57, "Chasseur", 15);
insertReponse.run(58, "Boulanger", 15);
insertReponse.run(59, "Agriculteur", 15);
insertReponse.run(60, "Forgeron", 15);

// Question 16 - Bonne réponse : "Un virus qui bloque vos fichiers et demande une rançon" (ID 63)
insertQuestion.run(16, "Qu'est-ce qu'une attaque par ransomware ?", 63);
insertReponse.run(61, "Un outil de sauvegarde automatique", 16);
insertReponse.run(62, "Un programme qui supprime vos mails", 16);
insertReponse.run(63, "Un virus qui bloque vos fichiers et demande une rançon", 16);
insertReponse.run(64, "Un logiciel qui accélère votre ordinateur", 16);

// Question 17 - Bonne réponse : "Le mur de Berlin" (ID 66)
insertQuestion.run(17, "Quel mur est tombé en 1989, symbolisant la fin de la guerre froide ?", 66);
insertReponse.run(65, "Le mur d'Hadrien", 17);
insertReponse.run(66, "Le mur de Berlin", 17);
insertReponse.run(67, "Le mur de Chine", 17);
insertReponse.run(68, "Le mur des Lamentations", 17);

// Question 18 - Bonne réponse : "4/52 soit 1/13" (ID 70)
insertQuestion.run(18, "Quelle est la probabilité de tirer un As dans un jeu de 52 cartes ?", 70);
insertReponse.run(69, "1/52", 18);
insertReponse.run(70, "4/52 soit 1/13", 18);
insertReponse.run(71, "2/52 soit 1/26", 18);
insertReponse.run(72, "4/48 soit 1/12", 18);

// Question 19 - Bonne réponse : "3600" (ID 75)
insertQuestion.run(19, "Combien de secondes y a-t-il dans une heure ?", 75);
insertReponse.run(73, "4000", 19);
insertReponse.run(74, "1800", 19);
insertReponse.run(75, "3600", 19);
insertReponse.run(76, "3200", 19);

// Question 20 - Bonne réponse : "La pomme" (ID 79)
insertQuestion.run(20, "Quel fruit flotte toujours sur l'eau, même s'il est coupé en deux ?", 80);
insertReponse.run(77, "La banane", 20);
insertReponse.run(78, "L'orange", 20);
insertReponse.run(79, "La pomme", 20);
insertReponse.run(80, "La noix de coco", 20);

// Question 21 - Bonne réponse : "Pays-Bas" (ID 83)
insertQuestion.run(21, "Quel pays est célèbre pour ses tulipes et ses moulins à vent ?", 83);
insertReponse.run(81, "Danemark", 21);
insertReponse.run(82, "Allemagne", 21);
insertReponse.run(83, "Pays-Bas", 21);
insertReponse.run(84, "Belgique", 21);

// Question 22 - Bonne réponse : "Authentification à deux facteurs" (ID 86)
insertQuestion.run(22, "Que signifie \"A2F\" en sécurité informatique ?", 86);
insertReponse.run(85, "Analyse à deux fréquences", 22);
insertReponse.run(86, "Authentification à deux facteurs", 22);
insertReponse.run(87, "Accès à deux fichiers", 22);
insertReponse.run(88, "Autorisation à double flux", 22);

// Question 23 - Bonne réponse : "Bloquer les connexions non autorisées" (ID 91)
insertQuestion.run(23, "Quel est l'objectif d'un firewall ?", 91);
insertReponse.run(89, "Stocker les mots de passe", 23);
insertReponse.run(90, "Supprimer les virus", 23);
insertReponse.run(91, "Bloquer les connexions non autorisées", 23);
insertReponse.run(92, "Accélérer la connexion Internet", 23);

// Question 24 - Bonne réponse : "Le trojan se cache dans un logiciel légitime" (ID 94)
insertQuestion.run(24, "Quelle est la différence entre un virus et un trojan ?", 94);
insertReponse.run(93, "Le trojan se réplique automatiquement", 24);
insertReponse.run(94, "Le trojan se cache dans un logiciel légitime", 24);
insertReponse.run(95, "Il n'y a aucune différence", 24);
insertReponse.run(96, "Le virus est plus récent que le trojan", 24);

// Question 25 - Bonne réponse : "Tor" (ID 99)
insertQuestion.run(25, "Quel navigateur est considéré comme le plus sécurisé ?", 99);
insertReponse.run(97, "Safari", 25);
insertReponse.run(98, "Google Chrome", 25);
insertReponse.run(99, "Tor", 25);
insertReponse.run(100, "Firefox", 25);

// Question 26 - Bonne réponse : "1453" (ID 102)
insertQuestion.run(26, "En quelle année a eu lieu la chute de Constantinople ?", 102);
insertReponse.run(101, "1517", 26);
insertReponse.run(102, "1453", 26);
insertReponse.run(103, "1492", 26);
insertReponse.run(104, "1389", 26);

// Question 27 - Bonne réponse : "Bataille de Borodino" (ID 108)
insertQuestion.run(27, "Quelle bataille célèbre a opposé Napoléon à la Russie en 1812 ?", 108);
insertReponse.run(105, "Bataille de Trafalgar", 27);
insertReponse.run(106, "Bataille d'Austerlitz", 27);
insertReponse.run(107, "Bataille de Waterloo", 27);
insertReponse.run(108, "Bataille de Borodino", 27);

// Question 28 - Bonne réponse : "Corée" (ID 110)
insertQuestion.run(28, "Quel pays a été divisé en deux après la Seconde Guerre mondiale ?", 110);
insertReponse.run(109, "Vietnam", 28);
insertReponse.run(110, "Corée", 28);
insertReponse.run(111, "Japon", 28);
insertReponse.run(112, "Chine", 28);

// Question 29 - Bonne réponse : "299 792 458 m/s" (ID 115)
insertQuestion.run(29, "Quelle est la vitesse de la lumière en mètre par seconde ?", 115);
insertReponse.run(113, "250 792 458 m/s", 29);
insertReponse.run(114, "150 000 000 m/s", 29);
insertReponse.run(115, "299 792 458 m/s", 29);
insertReponse.run(116, "300 000 000 m/s", 29);

// Question 30 - Bonne réponse : "Bryan Cranston" (ID 119)
insertQuestion.run(30, "Quel acteur a gagné le Emmy Award du Meilleur Acteur dans une série dramatique en 2010 ?", 119);
insertReponse.run(117, "Jon Hamm", 30);
insertReponse.run(118, "Michael C. Hall", 30);
insertReponse.run(119, "Bryan Cranston", 30);
insertReponse.run(120, "Hugh Laurie", 30);

// Question 31 - Bonne réponse : "L'intestin" (ID 124)
insertQuestion.run(31, "Quel est l'organe le plus long du corps humain ?", 124);
insertReponse.run(121, "La peau", 31);
insertReponse.run(122, "Le foie", 31);
insertReponse.run(123, "L'oesophage", 31);
insertReponse.run(124, "L'intestin", 31);

// Question 32 - Bonne réponse : "Noir" (ID 126)
insertQuestion.run(32, "Selon un sondage, quelle est la couleur de cheveux la plus répandue dans le monde ?", 126);
insertReponse.run(125, "Blond", 32);
insertReponse.run(126, "Noir", 32);
insertReponse.run(127, "Roux", 32);
insertReponse.run(128, "Brun", 32);

// Question 33 - Bonne réponse : "Tomate" (ID 131)
insertQuestion.run(33, "D'après une étude, quel est le légume préféré des Français ?", 131);
insertReponse.run(129, "Pomme de terre", 33);
insertReponse.run(130, "Haricot vert", 33);
insertReponse.run(131, "Tomate", 33);
insertReponse.run(132, "Carotte", 33);

// Question 34 - Bonne réponse : "20h" (ID 134)
insertQuestion.run(34, "En moyenne, combien d'heures par semaine les adultes français passent-ils devant la télévision ?", 134);
insertReponse.run(133, "25h", 34);
insertReponse.run(134, "20h", 34);
insertReponse.run(135, "10h", 34);
insertReponse.run(136, "15h", 34);

// Question 35 - Bonne réponse : "Voiture" (ID 139)
insertQuestion.run(35, "Dans une étude sur les transports, quel moyen de transport est le plus utilisé par les Français pour aller travailler ?", 139);
insertReponse.run(137, "Bus", 35);
insertReponse.run(138, "Vélo", 35);
insertReponse.run(139, "Voiture", 35);
insertReponse.run(140, "Train", 35);

// Question 36 - Bonne réponse : "Chat" (ID 143)
insertQuestion.run(36, "D'après un sondage, quel est l'animal de compagnie le plus présent dans les foyers français ?", 143);
insertReponse.run(141, "Chien", 36);
insertReponse.run(142, "Lapin", 36);
insertReponse.run(143, "Chat", 36);
insertReponse.run(144, "Poisson", 36);

// Question 37 - Bonne réponse : "Café" (ID 147)
insertQuestion.run(37, "Selon une enquête, quelle boisson les Français consomment-ils le plus au petit-déjeuner ?", 147);
insertReponse.run(145, "Chocolat chaud", 37);
insertReponse.run(146, "Thé", 37);
insertReponse.run(147, "Café", 37);
insertReponse.run(148, "Jus d'orange", 37);

// Question 38 - Bonne réponse : "Samedi" (ID 152)
insertQuestion.run(38, "Dans un sondage international, quelle est la journée de la semaine préférée des gens ?", 152);
insertReponse.run(149, "Dimanche", 38);
insertReponse.run(150, "Vendredi", 38);
insertReponse.run(151, "Mercredi", 38);
insertReponse.run(152, "Samedi", 38);

// Question 39 - Bonne réponse : "L'arachnophobie" (ID 154)
insertQuestion.run(39, "Selon une étude, quelle est la peur la plus courante chez les adultes ?", 154);
insertReponse.run(153, "La claustrophobie", 39);
insertReponse.run(154, "L'arachnophobie", 39);
insertReponse.run(155, "L'acrophobie", 39);
insertReponse.run(156, "L'agoraphobie", 39);

// Question 40 - Bonne réponse : "WhatsApp" (ID 159)
insertQuestion.run(40, "Selon une étude, quelle est l'application la plus utilisée sur les smartphones en France ?", 159);
insertReponse.run(157, "Facebook", 40);
insertReponse.run(158, "TikTok", 40);
insertReponse.run(159, "WhatsApp", 40);
insertReponse.run(160, "Instagram", 40);

// Question 41 - Bonne réponse : "Vin" (ID 162)
insertQuestion.run(41, "Selon une enquête, quel est la boisson alcoolisée la plus consommée en France ?", 162);
insertReponse.run(161, "Whisky", 41);
insertReponse.run(162, "Vin", 41);
insertReponse.run(163, "Pastis", 41);
insertReponse.run(164, "Bière", 41);

// Question 42 - Bonne réponse : "Un logiciel qui enregistre les frappes au clavier" (ID 167)
insertQuestion.run(42, "Qu'est-ce qu'un keylogger ?", 167);
insertReponse.run(165, "Un outil pour verrouiller le clavier", 42);
insertReponse.run(166, "Un raccourci clavier avancé", 42);
insertReponse.run(167, "Un logiciel qui enregistre les frappes au clavier", 42);
insertReponse.run(168, "Un périphérique de saisie", 42);

// Question 43 - Bonne réponse : "Manipulation psychologique pour obtenir des informations sensibles" (ID 170)
insertQuestion.run(43, "Que signifie social engineering en cybersécurité ?", 170);
insertReponse.run(169, "Développement d'applications sociales", 43);
insertReponse.run(170, "Manipulation psychologique pour obtenir des informations sensibles", 43);
insertReponse.run(171, "Création de réseaux sociaux sécurisés", 43);
insertReponse.run(172, "Analyse des comportements en ligne", 43);

// Question 44 - Bonne réponse : "Faille qui est là depuis le début" (ID 176)
insertQuestion.run(44, "Que signifie le terme zero-day ?", 176);
insertReponse.run(173, "Un logiciel mis à jour quotidiennement", 44);
insertReponse.run(174, "Une attaque qui dure zéro seconde", 44);
insertReponse.run(175, "Un virus qui s'active à minuit", 44);
insertReponse.run(176, "Faille qui est là depuis le début", 44);

// Question 45 - Bonne réponse : "Injection de code malveillant dans une page web" (ID 178)
insertQuestion.run(45, "Qu'est-ce qu'un XSS (Cross-Site Scripting) ?", 178);
insertReponse.run(177, "Un type de certificat SSL", 45);
insertReponse.run(178, "Injection de code malveillant dans une page web", 45);
insertReponse.run(179, "Un protocole de transfert sécurisé", 45);
insertReponse.run(180, "Un langage de programmation web", 45);

// Question 46 - Bonne réponse : "Piège pour attirer les hackers et les étudier" (ID 183)
insertQuestion.run(46, "Qu'est-ce qu'un honeypot ?", 183);
insertReponse.run(181, "Un réseau Wi-Fi public", 46);
insertReponse.run(182, "Un mot de passe très sécurisé", 46);
insertReponse.run(183, "Piège pour attirer les hackers et les étudier", 46);
insertReponse.run(184, "Un antivirus puissant", 46);

// Question 47 - Bonne réponse : "Bob Thomas" (ID 186)
insertQuestion.run(47, "Qui a créé le premier virus informatique connu sous le nom de Creeper en 1971 ?", 186);
insertReponse.run(185, "Dennis Ritchie", 47);
insertReponse.run(186, "Bob Thomas", 47);
insertReponse.run(187, "Steve Jobs", 47);
insertReponse.run(188, "Bill Gates", 47);
