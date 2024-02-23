let questions = [
    // Fragen zu Videospiele
    {
        "question": "Welches dieser Spiele gehört zum Battle Royale-Genre?",
        "answer1": "Super Mario Bros.",
        "answer2": "Fortnite",
        "answer3": "The Legend of Zelda",
        "answer4": "Pac-Man",
        "correct_answer": "Fortnite"
    },
    {
        "question": "Welche Gaming-Plattform wird oft für Indie-Spiele bevorzugt?",
        "answer1": "Xbox",
        "answer2": "PlayStation",
        "answer3": "Steam",
        "answer4": "Nintendo Switch",
        "correct_answer": "Steam"
    },
    {
        "question": "Wer ist der Entwickler des Spiels 'Minecraft'?",
        "answer1": "Mojang Studios",
        "answer2": "Blizzard Entertainment",
        "answer3": "Electronic Arts",
        "answer4": "Ubisoft",
        "correct_answer": "Mojang Studios"
    },
    {
        "question": "Welches ist das meistverkaufte Videospiel aller Zeiten?",
        "answer1": "Grand Theft Auto V",
        "answer2": "Tetris",
        "answer3": "Minecraft",
        "answer4": "The Legend of Zelda: Breath of the Wild",
        "correct_answer": "Tetris"
    },
    {
        "question": "Welcher der folgenden Charaktere stammt aus der 'Cyberpunk 2077'-Reihe?",
        "answer1": "V",
        "answer2": "Ezio Auditore",
        "answer3": "Nathan Drake",
        "answer4": "Lara Croft",
        "correct_answer": "V"
    },

    // Fragen zu Filme
    {
        "question": "Welcher dieser Filme gehört zum Action-Genre?",
        "answer1": "The Shawshank Redemption",
        "answer2": "Forrest Gump",
        "answer3": "Die Hard",
        "answer4": "The Godfather",
        "correct_answer": "Die Hard"
    },
    {
        "question": "Welcher Schauspieler spielt die Hauptrolle in 'Inception'?",
        "answer1": "Tom Hanks",
        "answer2": "Leonardo DiCaprio",
        "answer3": "Brad Pitt",
        "answer4": "Johnny Depp",
        "correct_answer": "Leonardo DiCaprio"
    },
    {
        "question": "Welcher Film gewann den Oscar für den besten Film im Jahr 2020?",
        "answer1": "Joker",
        "answer2": "1917",
        "answer3": "Parasite",
        "answer4": "Once Upon a Time in Hollywood",
        "correct_answer": "Parasite"
    },
    {
        "question": "In welchem Film spielt Keanu Reeves einen Hacker, der 'die Matrix' entdeckt?",
        "answer1": "The Matrix",
        "answer2": "Inception",
        "answer3": "Blade Runner",
        "answer4": "The Terminator",
        "correct_answer": "The Matrix"
    },
    {
        "question": "Wer führte Regie bei 'Schindler's List'?",
        "answer1": "Quentin Tarantino",
        "answer2": "Steven Spielberg",
        "answer3": "Christopher Nolan",
        "answer4": "Martin Scorsese",
        "correct_answer": "Steven Spielberg"
    },

    // Fragen zu Technik
    {
        "question": "Welches dieser Unternehmen entwickelte das erste kommerziell erhältliche Mikroprozessor-Produkt?",
        "answer1": "IBM",
        "answer2": "Intel",
        "answer3": "Microsoft",
        "answer4": "Apple",
        "correct_answer": "Intel"
    },
    {
        "question": "Was bedeutet die Abkürzung 'HTML' in Bezug auf Webentwicklung?",
        "answer1": "Hyper Text Makeup Language",
        "answer2": "High Tech Multimedia Language",
        "answer3": "Hyper Transfer Markup Language",
        "answer4": "Hyper Text Markup Language",
        "correct_answer": "Hyper Text Markup Language"
    },
    {
        "question": "Welches Betriebssystem wurde von Microsoft entwickelt?",
        "answer1": "Linux",
        "answer2": "Windows",
        "answer3": "macOS",
        "answer4": "Android",
        "correct_answer": "Windows"
    },
    {
        "question": "Welche Programmiersprache wird häufig für die Entwicklung von künstlicher Intelligenz verwendet?",
        "answer1": "Java",
        "answer2": "Python",
        "answer3": "C++",
        "answer4": "JavaScript",
        "correct_answer": "Python"
    },
    {
        "question": "Was ist der Hauptzweck von VPN (Virtual Private Network)?",
        "answer1": "Virus Protection Network",
        "answer2": "Virtual Programming Network",
        "answer3": "Virtual Private Network",
        "answer4": "Visual Processing Node",
        "correct_answer": "Virtual Private Network"
    },

    // Fragen zu KI
    {
        "question": "Was ist künstliche Intelligenz (KI)?",
        "answer1": "Ein Mensch, der sich als Roboter ausgibt",
        "answer2": "Die Fähigkeit einer Maschine, intelligentes Verhalten nachzuahmen",
        "answer3": "Eine neue Form von Energie",
        "answer4": "Ein spezielles Computerbetriebssystem",
        "correct_answer": "Die Fähigkeit einer Maschine, intelligentes Verhalten nachzuahmen"
    },
    {
        "question": "Welcher Begriff bezieht sich auf Algorithmen, die lernen und sich selbst verbessern können?",
        "answer1": "Statische Algorithmen",
        "answer2": "Selbstoptimierende Algorithmen",
        "answer3": "Lernende Algorithmen (richtige Antwort)",
        "answer4": "Fixe Algorithmen",
        "correct_answer": "Lernende Algorithmen"
    },
    {
        "question": "Was bedeutet der Begriff 'Neuronales Netzwerk' in Bezug auf KI?",
        "answer1": "Ein Netzwerk von Gehirnen, die miteinander kommunizieren",
        "answer2": "Ein Netzwerk von Computern in einem Rechenzentrum",
        "answer3": "Ein mathematisches Modell, das auf biologischen Neuronen basiert",
        "answer4": "Ein Netzwerk von künstlichen Neuronen (richtige Antwort)",
        "correct_answer": "Ein Netzwerk von künstlichen Neuronen"
    },
    {
        "question": "Welche Art von KI wird als 'starke KI' bezeichnet?",
        "answer1": "KI, die besonders leistungsstark ist",
        "answer2": "KI, die nur auf bestimmte Aufgaben spezialisiert ist",
        "answer3": "KI, die menschenähnliche Intelligenz besitzt (richtige Antwort)",
        "answer4": "KI, die auf schwachen Computern läuft",
        "correct_answer": "KI, die menschenähnliche Intelligenz besitzt"
    },
    {
        "question": "Welcher Bereich der KI befasst sich mit der Verbesserung der Computerleistung durch Erfahrung?",
        "answer1": "Künstliche Neuronen",
        "answer2": "Maschinelles Lernen (richtige Antwort)",
        "answer3": "Robotersteuerung",
        "answer4": "Algorithmische Optimierung",
        "correct_answer": "Maschinelles Lernen"
    }
]


let currentQuestion = [0];


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer1'];
    document.getElementById('answer_2').innerHTML = question['answer2'];
    document.getElementById('answer_3').innerHTML = question['answer3'];
    document.getElementById('answer_4').innerHTML = question['answer4'];
}