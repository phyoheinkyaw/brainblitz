/* ═══════════════════════════════════════════
   BRAINBLITZ — Application
   ═══════════════════════════════════════════ */

'use strict';

// ─── QUESTION BANK ────────────────────────

const CATEGORY_ICONS = {
  science: '🔬', history: '📜', geography: '🌍',
  technology: '💻', sports: '⚽', entertainment: '🎬'
};

const QUESTIONS = {
  science: {
    easy: [
      { q: "What is the chemical symbol for water?", a: "H2O", options: ["H2O", "CO2", "NaCl", "O2"] },
      { q: "What planet is known as the Red Planet?", a: "Mars", options: ["Venus", "Mars", "Jupiter", "Saturn"] },
      { q: "What gas do plants absorb from the atmosphere?", a: "Carbon dioxide", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"] },
      { q: "How many bones are in the adult human body?", a: "206", options: ["186", "206", "226", "256"] },
      { q: "What is the hardest natural substance?", a: "Diamond", options: ["Gold", "Iron", "Diamond", "Platinum"] },
      { q: "What is the boiling point of water in Celsius?", a: "100°C", options: ["50°C", "75°C", "100°C", "125°C"] },
      { q: "What organ pumps blood through the body?", a: "Heart", options: ["Liver", "Heart", "Lungs", "Brain"] },
      { q: "What force keeps us on the ground?", a: "Gravity", options: ["Magnetism", "Gravity", "Friction", "Inertia"] },
      { q: "What is the largest organ in the human body?", a: "Skin", options: ["Liver", "Brain", "Skin", "Heart"] },
      { q: "What element does 'H' represent on the periodic table?", a: "Hydrogen", options: ["Helium", "Hydrogen", "Hafnium", "Holmium"] },
      { q: "What type of animal is a dolphin?", a: "Mammal", options: ["Fish", "Reptile", "Mammal", "Amphibian"] },
      { q: "What is the speed of light approximately?", a: "300,000 km/s", options: ["150,000 km/s", "300,000 km/s", "500,000 km/s", "1,000,000 km/s"] },
      { q: "What planet is closest to the Sun?", a: "Mercury", options: ["Venus", "Earth", "Mercury", "Mars"] },
      { q: "What do bees produce?", a: "Honey", options: ["Milk", "Honey", "Wax", "Silk"] },
      { q: "How many legs does a spider have?", a: "8", options: ["6", "8", "10", "12"] },
      { q: "What gas is most abundant in Earth's atmosphere?", a: "Nitrogen", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"] },
      { q: "What is the center of an atom called?", a: "Nucleus", options: ["Electron", "Nucleus", "Proton", "Neutron"] },
      { q: "What type of rock is formed from cooled magma?", a: "Igneous", options: ["Sedimentary", "Igneous", "Metamorphic", "Fossil"] },
      { q: "What is the largest mammal in the world?", a: "Blue whale", options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"] },
      { q: "What planet has the most moons?", a: "Saturn", options: ["Jupiter", "Saturn", "Uranus", "Neptune"] },
      { q: "What is the chemical formula for table salt?", a: "NaCl", options: ["KCl", "NaCl", "CaCl2", "MgCl2"] },
      { q: "What is the smallest particle of an element?", a: "Atom", options: ["Molecule", "Atom", "Electron", "Proton"] },
      { q: "Which vitamin is produced when skin is exposed to sunlight?", a: "Vitamin D", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"] },
      { q: "What is the main gas found in the air we breathe?", a: "Nitrogen", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"] },
      { q: "How many teeth does an adult human typically have?", a: "32", options: ["28", "30", "32", "34"] },
    ],
    medium: [
      { q: "What is the powerhouse of the cell?", a: "Mitochondria", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"] },
      { q: "What element has the atomic number 79?", a: "Gold", options: ["Silver", "Gold", "Platinum", "Copper"] },
      { q: "What is the SI unit of force?", a: "Newton", options: ["Joule", "Newton", "Pascal", "Watt"] },
      { q: "What type of bond involves sharing of electrons?", a: "Covalent", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"] },
      { q: "What is the largest organ inside the human body?", a: "Liver", options: ["Heart", "Liver", "Lungs", "Kidneys"] },
      { q: "What gas is produced during photosynthesis?", a: "Oxygen", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"] },
      { q: "What is the study of fungi called?", a: "Mycology", options: ["Botany", "Zoology", "Mycology", "Virology"] },
      { q: "What planet has the Great Red Spot?", a: "Jupiter", options: ["Saturn", "Mars", "Jupiter", "Neptune"] },
      { q: "What is the chemical symbol for potassium?", a: "K", options: ["P", "Po", "K", "Pt"] },
      { q: "What is the most abundant element in the universe?", a: "Hydrogen", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"] },
      { q: "How many chromosomes do humans have?", a: "46", options: ["23", "44", "46", "48"] },
      { q: "What layer of the atmosphere contains the ozone layer?", a: "Stratosphere", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"] },
      { q: "What is the pH of pure water?", a: "7", options: ["5", "6", "7", "8"] },
      { q: "What type of blood cells fight infections?", a: "White blood cells", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"] },
      { q: "What is the smallest planet in our solar system?", a: "Mercury", options: ["Mars", "Mercury", "Venus", "Pluto"] },
      { q: "What metal is liquid at room temperature?", a: "Mercury", options: ["Lead", "Mercury", "Gallium", "Sodium"] },
      { q: "What is the process of converting liquid to gas called?", a: "Evaporation", options: ["Condensation", "Evaporation", "Sublimation", "Melting"] },
      { q: "What element is essential for thyroid function?", a: "Iodine", options: ["Iron", "Calcium", "Iodine", "Zinc"] },
      { q: "What is the speed of sound in air approximately?", a: "343 m/s", options: ["243 m/s", "343 m/s", "443 m/s", "543 m/s"] },
      { q: "What is the largest moon of Saturn?", a: "Titan", options: ["Europa", "Titan", "Ganymede", "Io"] },
    ],
    hard: [
      { q: "What is the half-life of Carbon-14?", a: "5,730 years", options: ["3,450 years", "5,730 years", "7,850 years", "10,100 years"] },
      { q: "What particle is responsible for the strong nuclear force?", a: "Gluon", options: ["Photon", "Gluon", "W boson", "Graviton"] },
      { q: "What is the Chandrasekhar limit (in solar masses)?", a: "1.44", options: ["1.0", "1.44", "2.0", "3.0"] },
      { q: "What is the only letter not appearing on the periodic table?", a: "J", options: ["Q", "J", "X", "Z"] },
      { q: "What is the most toxic naturally occurring substance?", a: "Botulinum toxin", options: ["Cyanide", "Mercury", "Botulinum toxin", "Arsenic"] },
      { q: "What is the chemical formula of ozone?", a: "O3", options: ["O2", "O3", "O4", "CO2"] },
      { q: "What is the process of nuclear fusion in stars called that creates elements heavier than iron?", a: "Supernova nucleosynthesis", options: ["Stellar fusion", "Supernova nucleosynthesis", "Big Bang nucleosynthesis", "Cosmic ray spallation"] },
      { q: "What is the rarest blood type?", a: "AB negative", options: ["O negative", "AB negative", "B negative", "A negative"] },
      { q: "What is the longest bone in the human body?", a: "Femur", options: ["Tibia", "Femur", "Humerus", "Spine"] },
      { q: "What element has the highest melting point?", a: "Tungsten", options: ["Platinum", "Tungsten", "Rhenium", "Osmium"] },
      { q: "What is the study of earthquakes called?", a: "Seismology", options: ["Volcanology", "Seismology", "Geology", "Tectonics"] },
      { q: "What is the only planet that rotates clockwise?", a: "Venus", options: ["Mars", "Venus", "Uranus", "Neptune"] },
      { q: "What is the most abundant protein in the human body?", a: "Collagen", options: ["Keratin", "Collagen", "Elastin", "Albumin"] },
      { q: "What is the pH of stomach acid?", a: "1.5-3.5", options: ["0.5-1.0", "1.5-3.5", "4.0-5.5", "6.0-7.0"] },
      { q: "What is the phenomenon where light changes direction when passing through different media?", a: "Refraction", options: ["Reflection", "Diffraction", "Refraction", "Dispersion"] },
    ]
  },
  history: {
    easy: [
      { q: "In which year did World War II end?", a: "1945", options: ["1943", "1944", "1945", "1946"] },
      { q: "Who was the first President of the United States?", a: "George Washington", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"] },
      { q: "What ancient civilization built the pyramids?", a: "Egyptians", options: ["Romans", "Greeks", "Egyptians", "Mayans"] },
      { q: "What year did the Titanic sink?", a: "1912", options: ["1910", "1912", "1914", "1916"] },
      { q: "Who discovered America in 1492?", a: "Christopher Columbus", options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Amerigo Vespucci"] },
      { q: "What was the longest war in history?", a: "The Hundred Years' War", options: ["World War I", "World War II", "The Hundred Years' War", "The Cold War"] },
      { q: "What empire was known as the 'Empire on which the sun never sets'?", a: "British Empire", options: ["Roman Empire", "Mongol Empire", "British Empire", "Ottoman Empire"] },
      { q: "Who painted the Mona Lisa?", a: "Leonardo da Vinci", options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"] },
      { q: "What wall divided Berlin during the Cold War?", a: "Berlin Wall", options: ["Great Wall", "Berlin Wall", "Iron Curtain", "Checkpoint Charlie"] },
      { q: "Which ancient wonder was located in Alexandria, Egypt?", a: "Lighthouse of Alexandria", options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Great Pyramid", "Hanging Gardens"] },
      { q: "What year did the French Revolution begin?", a: "1789", options: ["1776", "1789", "1799", "1804"] },
      { q: "What civilization created the first written language?", a: "Sumerians", options: ["Egyptians", "Sumerians", "Chinese", "Greeks"] },
      { q: "What ship brought the Pilgrims to America?", a: "Mayflower", options: ["Santa Maria", "Mayflower", "Endeavour", "Beagle"] },
      { q: "Who was the first woman to fly solo across the Atlantic?", a: "Amelia Earhart", options: ["Harriet Quimby", "Amelia Earhart", "Bessie Coleman", "Jacqueline Cochran"] },
      { q: "What ancient civilization invented the wheel?", a: "Mesopotamians", options: ["Egyptians", "Chinese", "Mesopotamians", "Greeks"] },
    ],
    medium: [
      { q: "What treaty ended World War I?", a: "Treaty of Versailles", options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Ghent", "Treaty of Vienna"] },
      { q: "Who was the last Pharaoh of Egypt?", a: "Cleopatra VII", options: ["Nefertiti", "Hatshepsut", "Cleopatra VII", "Ramesses II"] },
      { q: "What year was the United Nations founded?", a: "1945", options: ["1943", "1945", "1947", "1949"] },
      { q: "What dynasty built the Forbidden City?", a: "Ming", options: ["Tang", "Song", "Ming", "Qing"] },
      { q: "What explorer first circumnavigated the globe?", a: "Ferdinand Magellan", options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "James Cook"] },
      { q: "What battle is considered the turning point of the American Civil War?", a: "Battle of Gettysburg", options: ["Battle of Antietam", "Battle of Gettysburg", "Battle of Bull Run", "Battle of Vicksburg"] },
      { q: "What year did the Berlin Wall fall?", a: "1989", options: ["1985", "1987", "1989", "1991"] },
      { q: "Who was the first Emperor of Rome?", a: "Augustus", options: ["Julius Caesar", "Augustus", "Nero", "Caligula"] },
      { q: "What civilization built Machu Picchu?", a: "Inca", options: ["Maya", "Aztec", "Inca", "Olmec"] },
      { q: "What pandemic killed the most people in history?", a: "The Black Death", options: ["Spanish Flu", "The Black Death", "Smallpox", "HIV/AIDS"] },
      { q: "Who invented the printing press?", a: "Johannes Gutenberg", options: ["William Caxton", "Johannes Gutenberg", "Benjamin Franklin", "Thomas Edison"] },
      { q: "What year was the Magna Carta signed?", a: "1215", options: ["1066", "1215", "1315", "1415"] },
      { q: "What empire was ruled by Genghis Khan?", a: "Mongol Empire", options: ["Ottoman Empire", "Mongol Empire", "Persian Empire", "Roman Empire"] },
      { q: "Who was the first woman in space?", a: "Valentina Tereshkova", options: ["Sally Ride", "Valentina Tereshkova", "Mae Jemison", "Peggy Whitson"] },
      { q: "What ancient wonder was located in Olympia, Greece?", a: "Statue of Zeus", options: ["Colossus of Rhodes", "Statue of Zeus", "Temple of Artemis", "Mausoleum at Halicarnassus"] },
    ],
    hard: [
      { q: "What year marked the beginning of the Spanish Inquisition?", a: "1478", options: ["1478", "1492", "1500", "1517"] },
      { q: "Who was the last ruler of the Aztec Empire?", a: "Moctezuma II", options: ["Cuauhtémoc", "Moctezuma II", "Cortés", "Atahualpa"] },
      { q: "What treaty divided the world between Spain and Portugal in 1494?", a: "Treaty of Tordesillas", options: ["Treaty of Zaragoza", "Treaty of Tordesillas", "Treaty of Alcáçovas", "Treaty of Córdoba"] },
      { q: "What year was the Rosetta Stone discovered?", a: "1799", options: ["1779", "1799", "1819", "1839"] },
      { q: "Who was the first European to reach India by sea?", a: "Vasco da Gama", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Pedro Álvares Cabral"] },
    ]
  },
  geography: {
    easy: [
      { q: "What is the largest continent?", a: "Asia", options: ["Africa", "Asia", "North America", "Europe"] },
      { q: "What is the longest river in the world?", a: "Nile", options: ["Amazon", "Nile", "Mississippi", "Yangtze"] },
      { q: "What is the capital of France?", a: "Paris", options: ["London", "Paris", "Berlin", "Madrid"] },
      { q: "What is the smallest country in the world?", a: "Vatican City", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"] },
      { q: "What ocean is the largest?", a: "Pacific", options: ["Atlantic", "Indian", "Pacific", "Arctic"] },
      { q: "What is the highest mountain in the world?", a: "Mount Everest", options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"] },
      { q: "What is the capital of Japan?", a: "Tokyo", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"] },
      { q: "How many continents are there?", a: "7", options: ["5", "6", "7", "8"] },
      { q: "What country has the most people?", a: "India", options: ["China", "India", "United States", "Indonesia"] },
      { q: "What desert is the largest hot desert?", a: "Sahara", options: ["Gobi", "Sahara", "Arabian", "Kalahari"] },
      { q: "What is the capital of Australia?", a: "Canberra", options: ["Sydney", "Melbourne", "Canberra", "Perth"] },
      { q: "What is the largest lake in Africa?", a: "Lake Victoria", options: ["Lake Tanganyika", "Lake Victoria", "Lake Malawi", "Lake Turkana"] },
      { q: "What country has the most natural lakes?", a: "Canada", options: ["United States", "Russia", "Canada", "Finland"] },
      { q: "What is the capital of Brazil?", a: "Brasília", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"] },
      { q: "What mountain range separates Europe from Asia?", a: "Ural Mountains", options: ["Alps", "Himalayas", "Ural Mountains", "Caucasus"] },
    ],
    medium: [
      { q: "What is the deepest point in the ocean?", a: "Mariana Trench", options: ["Tonga Trench", "Mariana Trench", "Philippine Trench", "Puerto Rico Trench"] },
      { q: "What country has the longest coastline?", a: "Canada", options: ["Australia", "Russia", "Canada", "Indonesia"] },
      { q: "What is the only sea without any coasts?", a: "Sargasso Sea", options: ["Dead Sea", "Sargasso Sea", "Caribbean Sea", "Mediterranean Sea"] },
      { q: "What is the largest island in the world?", a: "Greenland", options: ["New Guinea", "Borneo", "Greenland", "Madagascar"] },
      { q: "What strait separates Asia from North America?", a: "Bering Strait", options: ["Strait of Gibraltar", "Bering Strait", "Strait of Malacca", "Strait of Hormuz"] },
      { q: "What is the capital of Mongolia?", a: "Ulaanbaatar", options: ["Astana", "Ulaanbaatar", "Bishkek", "Tashkent"] },
      { q: "What is the driest inhabited continent?", a: "Australia", options: ["Africa", "Australia", "Antarctica", "Asia"] },
      { q: "What country has the most time zones?", a: "France", options: ["Russia", "United States", "France", "United Kingdom"] },
      { q: "What is the most populous city in the world?", a: "Tokyo", options: ["Delhi", "Shanghai", "Tokyo", "São Paulo"] },
      { q: "What is the largest archipelago in the world?", a: "Indonesia", options: ["Philippines", "Indonesia", "Japan", "Maldives"] },
      { q: "What river flows through the Grand Canyon?", a: "Colorado River", options: ["Mississippi River", "Colorado River", "Rio Grande", "Columbia River"] },
      { q: "What is the capital of New Zealand?", a: "Wellington", options: ["Auckland", "Christchurch", "Wellington", "Hamilton"] },
      { q: "What is the largest freshwater lake by surface area?", a: "Lake Superior", options: ["Lake Victoria", "Lake Superior", "Lake Baikal", "Great Bear Lake"] },
      { q: "What mountain is the tallest in Africa?", a: "Mount Kilimanjaro", options: ["Mount Kenya", "Mount Kilimanjaro", "Rwenzori Mountains", "Mount Stanley"] },
      { q: "What is the most widely spoken language by native speakers?", a: "Mandarin Chinese", options: ["English", "Spanish", "Mandarin Chinese", "Hindi"] },
    ],
    hard: [
      { q: "What is the capital of Burkina Faso?", a: "Ouagadougou", options: ["Bamako", "Ouagadougou", "Niamey", "Accra"] },
      { q: "What is the lowest point on Earth's surface?", a: "Dead Sea", options: ["Death Valley", "Dead Sea", "Qattara Depression", "Turpan Depression"] },
      { q: "What country has the highest number of active volcanoes?", a: "Indonesia", options: ["Japan", "Indonesia", "Iceland", "United States"] },
      { q: "What is the world's largest delta?", a: "Ganges Delta", options: ["Mekong Delta", "Ganges Delta", "Nile Delta", "Mississippi Delta"] },
      { q: "What is the only country to span all four hemispheres?", a: "Kiribati", options: ["France", "United States", "Kiribati", "Fiji"] },
    ]
  },
  technology: {
    easy: [
      { q: "What does 'CPU' stand for?", a: "Central Processing Unit", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"] },
      { q: "Who co-founded Apple Inc.?", a: "Steve Jobs", options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"] },
      { q: "What does 'HTML' stand for?", a: "HyperText Markup Language", options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "HyperTransfer Markup Language"] },
      { q: "What year was the internet invented?", a: "1983", options: ["1975", "1983", "1991", "1995"] },
      { q: "What company created Windows?", a: "Microsoft", options: ["Apple", "IBM", "Microsoft", "Google"] },
      { q: "What does 'RAM' stand for?", a: "Random Access Memory", options: ["Read Access Memory", "Random Access Memory", "Run Access Module", "Rapid Action Memory"] },
      { q: "What was the first social media platform?", a: "Six Degrees", options: ["Facebook", "MySpace", "Six Degrees", "Friendster"] },
      { q: "What programming language is known as the 'language of the web'?", a: "JavaScript", options: ["Python", "Java", "JavaScript", "C++"] },
      { q: "What does 'URL' stand for?", a: "Uniform Resource Locator", options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Reference Link", "Uniform Reference Link"] },
      { q: "What company makes the Android operating system?", a: "Google", options: ["Apple", "Samsung", "Google", "Microsoft"] },
      { q: "What does 'SSD' stand for?", a: "Solid State Drive", options: ["Super Speed Drive", "Solid State Drive", "System Storage Device", "Serial State Disk"] },
      { q: "What is the most popular search engine?", a: "Google", options: ["Bing", "Yahoo", "Google", "DuckDuckGo"] },
      { q: "What was the first iPhone released?", a: "2007", options: ["2005", "2007", "2009", "2011"] },
      { q: "What does 'AI' stand for?", a: "Artificial Intelligence", options: ["Automated Interface", "Artificial Intelligence", "Advanced Integration", "Automated Intelligence"] },
      { q: "What video game console was released by Nintendo in 2017?", a: "Nintendo Switch", options: ["Nintendo Wii U", "Nintendo Switch", "Nintendo 3DS", "Nintendo DS"] },
    ],
    medium: [
      { q: "What programming language was created by James Gosling?", a: "Java", options: ["Python", "Java", "C#", "Ruby"] },
      { q: "What does 'API' stand for?", a: "Application Programming Interface", options: ["Application Programming Interface", "Automated Program Integration", "Advanced Platform Interface", "Application Process Integration"] },
      { q: "What year was the World Wide Web created?", a: "1989", options: ["1983", "1989", "1991", "1993"] },
      { q: "What company developed the first web browser?", a: "Netscape", options: ["Microsoft", "Google", "Netscape", "Mozilla"] },
      { q: "What does 'JSON' stand for?", a: "JavaScript Object Notation", options: ["Java Standard Object Notation", "JavaScript Object Notation", "Java Serialized Object Network", "JavaScript Online Network"] },
      { q: "What was the first video game ever created?", a: "Pong", options: ["Space Invaders", "Pong", "Tetris", "Pac-Man"] },
      { q: "What does 'SQL' stand for?", a: "Structured Query Language", options: ["Simple Query Language", "Structured Query Language", "Standard Question Language", "Sequential Query Logic"] },
      { q: "Who is known as the father of the World Wide Web?", a: "Tim Berners-Lee", options: ["Vint Cerf", "Tim Berners-Lee", "Robert Cailliau", "Marc Andreessen"] },
      { q: "What programming language is used for iOS app development?", a: "Swift", options: ["Kotlin", "Swift", "Java", "C#"] },
      { q: "What year was Google founded?", a: "1998", options: ["1996", "1998", "2000", "2002"] },
      { q: "What does 'CSS' stand for?", a: "Cascading Style Sheets", options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets"] },
      { q: "What is the most popular database management system?", a: "MySQL", options: ["Oracle", "MySQL", "PostgreSQL", "MongoDB"] },
      { q: "What was the first commercially successful smartphone?", a: "IBM Simon", options: ["Apple iPhone", "BlackBerry", "IBM Simon", "Nokia 9000"] },
      { q: "What does 'DNS' stand for?", a: "Domain Name System", options: ["Digital Network Service", "Domain Name System", "Data Network Server", "Domain Navigation System"] },
      { q: "What company created the Python programming language?", a: "Python Software Foundation", options: ["Google", "Microsoft", "Python Software Foundation", "Mozilla"] },
    ],
    hard: [
      { q: "What algorithm is used in Bitcoin mining?", a: "SHA-256", options: ["MD5", "SHA-1", "SHA-256", "Scrypt"] },
      { q: "What year was the first email sent?", a: "1971", options: ["1969", "1971", "1973", "1975"] },
      { q: "What language was the first object-oriented programming language?", a: "Simula", options: ["Smalltalk", "C++", "Simula", "Java"] },
      { q: "What programming paradigm does Haskell follow?", a: "Functional", options: ["Object-Oriented", "Functional", "Procedural", "Logic"] },
      { q: "What was the name of the first electronic general-purpose computer?", a: "ENIAC", options: ["UNIVAC", "ENIAC", "COLOSSUS", "EDSAC"] },
    ]
  },
  sports: {
    easy: [
      { q: "What sport is played at Wimbledon?", a: "Tennis", options: ["Cricket", "Tennis", "Golf", "Badminton"] },
      { q: "How many players are on a soccer team?", a: "11", options: ["9", "10", "11", "12"] },
      { q: "What color are the Olympic rings?", a: "Blue, yellow, black, green, red", options: ["Blue, yellow, black, green, red", "Red, white, blue, green, yellow", "Black, white, red, blue, green", "Gold, silver, bronze, blue, red"] },
      { q: "In which sport would you perform a slam dunk?", a: "Basketball", options: ["Volleyball", "Basketball", "Handball", "Netball"] },
      { q: "What country invented football (soccer)?", a: "England", options: ["Brazil", "Italy", "England", "Germany"] },
      { q: "How many holes are in a standard golf course?", a: "18", options: ["9", "18", "27", "36"] },
      { q: "What is the most-watched sporting event in the world?", a: "FIFA World Cup", options: ["Olympics", "Super Bowl", "FIFA World Cup", "Tour de France"] },
      { q: "In which sport do you use a shuttlecock?", a: "Badminton", options: ["Tennis", "Badminton", "Squash", "Cricket"] },
      { q: "What country hosted the 2016 Summer Olympics?", a: "Brazil", options: ["China", "United Kingdom", "Brazil", "Japan"] },
      { q: "What is the fastest ball sport in the world?", a: "Jai Alai", options: ["Tennis", "Badminton", "Jai Alai", "Squash"] },
      { q: "How many points is a touchdown worth in American football?", a: "6", options: ["3", "6", "7", "8"] },
      { q: "What is the national sport of Canada?", a: "Ice hockey", options: ["Lacrosse", "Ice hockey", "Curling", "Baseball"] },
      { q: "In which sport is the term 'love' used?", a: "Tennis", options: ["Cricket", "Tennis", "Golf", "Bowling"] },
      { q: "What ring sport is known as 'the sweet science'?", a: "Boxing", options: ["Wrestling", "Boxing", "MMA", "Fencing"] },
      { q: "What country has won the most World Cups in soccer?", a: "Brazil", options: ["Germany", "Italy", "Brazil", "Argentina"] },
    ],
    medium: [
      { q: "What year were the first modern Olympics held?", a: "1896", options: ["1890", "1896", "1900", "1904"] },
      { q: "Who holds the record for most home runs in MLB history?", a: "Barry Bonds", options: ["Babe Ruth", "Hank Aaron", "Barry Bonds", "Willie Mays"] },
      { q: "What sport has the most participants worldwide?", a: "Fishing", options: ["Soccer", "Cricket", "Fishing", "Basketball"] },
      { q: "In which sport do you compete for the Stanley Cup?", a: "Ice hockey", options: ["Baseball", "Ice hockey", "Basketball", "Soccer"] },
      { q: "What is the only Grand Slam tennis tournament played on clay?", a: "French Open", options: ["Australian Open", "French Open", "Wimbledon", "US Open"] },
      { q: "How long is a marathon in miles?", a: "26.2", options: ["24.2", "25.2", "26.2", "27.2"] },
      { q: "What country invented basketball?", a: "United States", options: ["Canada", "United States", "England", "Greece"] },
      { q: "Who has the most Olympic gold medals in history?", a: "Michael Phelps", options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"] },
      { q: "What is the oldest golf tournament in the world?", a: "The Open Championship", options: ["US Open", "The Open Championship", "The Masters", "PGA Championship"] },
      { q: "In what sport is the term 'deuce' used?", a: "Tennis", options: ["Badminton", "Tennis", "Volleyball", "Table Tennis"] },
      { q: "What country has won the most Olympic medals in total?", a: "United States", options: ["China", "Russia", "United States", "Germany"] },
      { q: "What is the longest distance race in the Olympics?", a: "50km walk", options: ["Marathon", "10,000m", "50km walk", "20km walk"] },
      { q: "What sport uses a pommel horse?", a: "Gymnastics", options: ["Track and field", "Gymnastics", "Equestrian", "Fencing"] },
      { q: "Who is the most decorated Olympian of all time?", a: "Michael Phelps", options: ["Larisa Latynina", "Michael Phelps", "Usain Bolt", "Paavo Nurmi"] },
      { q: "What country has won the most Rugby World Cups?", a: "New Zealand", options: ["South Africa", "Australia", "New Zealand", "England"] },
    ],
    hard: [
      { q: "What year was the first Super Bowl played?", a: "1967", options: ["1965", "1967", "1969", "1971"] },
      { q: "Who is the only player to win FIFA World Player of the Year with three different clubs?", a: "Ronaldo Nazário", options: ["Lionel Messi", "Ronaldo Nazário", "Zinedine Zidane", "Cristiano Ronaldo"] },
      { q: "What country has never missed an Olympic Games?", a: "Australia", options: ["United States", "Great Britain", "Australia", "Greece"] },
      { q: "In what year was the first recorded cricket match?", a: "1646", options: ["1586", "1646", "1746", "1846"] },
      { q: "Who was the first athlete to win Olympic gold in the same event four times?", a: "Al Oerter", options: ["Carl Lewis", "Michael Phelps", "Al Oerter", "Usain Bolt"] },
    ]
  },
  entertainment: {
    easy: [
      { q: "What movie won the first Academy Award for Best Picture?", a: "Wings", options: ["Sunrise", "Wings", "The Jazz Singer", "Metropolis"] },
      { q: "What band performed 'Bohemian Rhapsody'?", a: "Queen", options: ["Led Zeppelin", "Queen", "The Beatles", "Pink Floyd"] },
      { q: "Who played Iron Man in the Marvel movies?", a: "Robert Downey Jr.", options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"] },
      { q: "What is the highest-grossing film of all time?", a: "Avatar", options: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars: The Force Awakens"] },
      { q: "What TV series features dragons and White Walkers?", a: "Game of Thrones", options: ["Lord of the Rings", "Game of Thrones", "The Witcher", "Vikings"] },
      { q: "Who painted the ceiling of the Sistine Chapel?", a: "Michelangelo", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"] },
      { q: "What instrument has 88 keys?", a: "Piano", options: ["Organ", "Piano", "Accordion", "Harpsichord"] },
      { q: "What animated film features a clownfish named Nemo?", a: "Finding Nemo", options: ["The Little Mermaid", "Finding Nemo", "Shark Tale", "The SpongeBob Movie"] },
      { q: "What dance style is associated with the 1920s?", a: "Charleston", options: ["Salsa", "Charleston", "Tango", "Waltz"] },
      { q: "Who wrote the novel '1984'?", a: "George Orwell", options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"] },
      { q: "What year was the first Harry Potter book published?", a: "1997", options: ["1995", "1997", "1999", "2001"] },
      { q: "What video game franchise features a plumber named Mario?", a: "Super Mario", options: ["Sonic the Hedgehog", "Super Mario", "Crash Bandicoot", "Spyro"] },
      { q: "Who played the Joker in 'The Dark Knight' (2008)?", a: "Heath Ledger", options: ["Jack Nicholson", "Heath Ledger", "Jared Leto", "Joaquin Phoenix"] },
      { q: "What streaming service produced 'Stranger Things'?", a: "Netflix", options: ["Amazon Prime", "Netflix", "Hulu", "Disney+"] },
      { q: "What act won the first season of America's Got Talent?", a: "Bianca Ryan", options: ["Terry Fator", "Bianca Ryan", "Paul Potts", "Neal E. Boyd"] },
    ],
    medium: [
      { q: "What movie won the Oscar for Best Picture in 2024?", a: "Oppenheimer", options: ["Barbie", "Oppenheimer", "Killers of the Flower Moon", "Poor Things"] },
      { q: "What band released the album 'The Dark Side of the Moon'?", a: "Pink Floyd", options: ["Led Zeppelin", "Pink Floyd", "The Who", "Queen"] },
      { q: "What is the longest-running Broadway show?", a: "The Phantom of the Opera", options: ["Cats", "Les Misérables", "The Phantom of the Opera", "Chicago"] },
      { q: "Who directed 'Jurassic Park'?", a: "Steven Spielberg", options: ["James Cameron", "Steven Spielberg", "Ridley Scott", "George Lucas"] },
      { q: "What video game console sold the most units of all time?", a: "PlayStation 2", options: ["Nintendo DS", "PlayStation 2", "Game Boy / Game Boy Color", "Nintendo Switch"] },
      { q: "What movie features the song 'My Heart Will Go On'?", a: "Titanic", options: ["The Bodyguard", "Titanic", "Dirty Dancing", "Pretty Woman"] },
      { q: "What author wrote 'The Great Gatsby'?", a: "F. Scott Fitzgerald", options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "Mark Twain"] },
      { q: "What TV show has the most Emmy wins?", a: "Saturday Night Live", options: ["Game of Thrones", "The Simpsons", "Saturday Night Live", "Frasier"] },
      { q: "What band has sold the most albums in history?", a: "The Beatles", options: ["Elvis Presley", "Michael Jackson", "The Beatles", "Madonna"] },
      { q: "What movie franchise has the most installments?", a: "Godzilla", options: ["James Bond", "Star Wars", "Godzilla", "MCU"] },
      { q: "Who sculpted 'David'?", a: "Michelangelo", options: ["Donatello", "Michelangelo", "Bernini", "Rodin"] },
      { q: "What year was the first MTV Video Music Awards?", a: "1984", options: ["1981", "1984", "1987", "1990"] },
      { q: "What is the most-streamed song on Spotify of all time?", a: "Blinding Lights", options: ["Shape of You", "Blinding Lights", "Ed Sheeran", "Dance Monkey"] },
      { q: "What movie was the first to gross $1 billion at the box office?", a: "Titanic", options: ["Jurassic Park", "Titanic", "Star Wars", "E.T."] },
      { q: "What TV series holds the record for most viewed finale?", a: "M*A*S*H", options: ["Friends", "Game of Thrones", "M*A*S*H", "Seinfeld"] },
    ],
    hard: [
      { q: "What film won the Palme d'Or at Cannes in 2023?", a: "Anatomy of a Fall", options: ["Anatomy of a Fall", "The Zone of Interest", "Oppenheimer", "Past Lives"] },
      { q: "What Beethoven symphony is known as the 'Choral'?", a: "Symphony No. 9", options: ["Symphony No. 5", "Symphony No. 6", "Symphony No. 9", "Symphony No. 3"] },
      { q: "Who was the first actor to win Best Actor at the Oscars?", a: "Emil Jannings", options: ["Ronald Colman", "Emil Jannings", "Warner Baxter", "George Arliss"] },
      { q: "What painting sold for the highest price at auction?", a: "Salvator Mundi", options: ["Mona Lisa", "Salvator Mundi", "Les Femmes d'Alger", "The Scream"] },
      { q: "What year was the first Cannes Film Festival?", a: "1946", options: ["1939", "1946", "1951", "1955"] },
    ]
  }
};

// ─── STATE ─────────────────────────────────

const state = {
  currentPage: 'home',
  category: 'science',
  difficulty: 'easy',
  questionCount: 10,
  playerName: 'Player',
  questions: [],
  currentIndex: 0,
  score: 0,
  correct: 0,
  incorrect: 0,
  totalTime: 0,
  answers: [],
  timer: null,
  timerValue: 15,
  maxTimer: 15,
  isAnswered: false,
};

// ─── DOM REFS ──────────────────────────────

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const DOM = {};

function cacheDOM() {
  DOM.navbar = $('#navbar');
  DOM.navToggle = $('#navToggle');
  DOM.navLinks = $('#navLinks');
  DOM.pages = $$('.page');
  DOM.navLinkEls = $$('.nav-link');

  // Home
  DOM.homeCategoryGrid = $('#homeCategoryGrid');
  DOM.startQuizBtn = $('#startQuizBtn');

  // Setup
  DOM.categoryOptions = $('#categoryOptions');
  DOM.playerName = $('#playerName');
  DOM.beginQuizBtn = $('#beginQuizBtn');

  // Quiz
  DOM.quizCategory = $('#quizCategory');
  DOM.quizDifficulty = $('#quizDifficulty');
  DOM.quizPlayer = $('#quizPlayer');
  DOM.progressFill = $('#progressFill');
  DOM.progressText = $('#progressText');
  DOM.timerFill = $('#timerFill');
  DOM.timerText = $('#timerText');
  DOM.timerRing = $('#quizTimer');
  DOM.questionText = $('#questionText');
  DOM.quizAnswers = $('#quizAnswers');
  DOM.correctCount = $('#correctCount');
  DOM.incorrectCount = $('#incorrectCount');
  DOM.currentScore = $('#currentScore');

  // Results
  DOM.resultsIcon = $('#resultsIcon');
  DOM.resultsTitle = $('#resultsTitle');
  DOM.resultsScore = $('#resultsScore');
  DOM.resultsCorrect = $('#resultsCorrect');
  DOM.resultsIncorrect = $('#resultsIncorrect');
  DOM.resultsAccuracy = $('#resultsAccuracy');
  DOM.resultsTime = $('#resultsTime');
  DOM.resultsBreakdown = $('#resultsBreakdown');
  DOM.retryBtn = $('#retryBtn');
  DOM.leaderboardBtn = $('#leaderboardBtn');

  // Leaderboard
  DOM.lbBody = $('#lbBody');
  DOM.lbEmpty = $('#lbEmpty');
  DOM.lbStartBtn = $('#lbStartBtn');
  DOM.clearLbBtn = $('#clearLbBtn');

  // Toast
  DOM.toastContainer = $('#toastContainer');
}

cacheDOM();

// ─── UTILITY ───────────────────────────────

function getFromStorage(key, def) {
  try { return JSON.parse(localStorage.getItem(key)) || def; }
  catch { return def; }
}

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function setLoading(btn, loading) {
  if (!btn) return;
  if (loading) {
    btn.disabled = true;
    btn.dataset.origHtml = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
  } else {
    btn.disabled = false;
    btn.innerHTML = btn.dataset.origHtml || btn.innerHTML;
  }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ─── TOAST ─────────────────────────────────

function showToast(message, type = 'success') {
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle', warning: 'fa-exclamation-triangle' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${escapeHtml(message)}`;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('toast-out');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ─── NAVIGATION ────────────────────────────

function navigateTo(page) {
  if (page === state.currentPage) return;
  state.currentPage = page;

  DOM.pages.forEach(p => p.classList.remove('active'));
  const target = $(`#page-${page}`);
  if (target) {
    target.classList.add('active');
    target.style.animation = 'none';
    void target.offsetHeight;
    target.style.animation = '';
  }

  DOM.navLinkEls.forEach(link => {
    const isActive = link.dataset.page === page;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  DOM.navLinks.classList.remove('open');
  DOM.navToggle.classList.remove('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'home') initHome();
  if (page === 'setup') initSetup();
  if (page === 'leaderboard') renderLeaderboard();

  setTimeout(checkAOS, 400);
}

// Nav events
$$('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-page]');
  if (link && !link.closest('.nav-link')) {
    e.preventDefault();
    navigateTo(link.dataset.page);
  }
});

DOM.navToggle.addEventListener('click', () => {
  const open = DOM.navLinks.classList.toggle('open');
  DOM.navToggle.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (DOM.navLinks.classList.contains('open') &&
      !DOM.navLinks.contains(e.target) &&
      !DOM.navToggle.contains(e.target)) {
    DOM.navLinks.classList.remove('open');
    DOM.navToggle.classList.remove('active');
  }
});

window.addEventListener('scroll', () => {
  DOM.navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── HOME ──────────────────────────────────

function initHome() {
  renderHomeCategories();
}

function renderHomeCategories() {
  DOM.homeCategoryGrid.innerHTML = Object.entries(CATEGORY_ICONS).map(([key, icon]) => {
    const count = Object.values(QUESTIONS[key] || {}).reduce((s, qs) => s + qs.length, 0);
    return `<div class="cat-card" data-aos="fade-up" onclick="selectCategory('${key}')">
      <span class="cat-icon">${icon}</span>
      <h4>${key.charAt(0).toUpperCase() + key.slice(1)}</h4>
      <span>${count} questions</span>
    </div>`;
  }).join('');
}

function selectCategory(cat) {
  state.category = cat;
  navigateTo('setup');
}

DOM.startQuizBtn.addEventListener('click', () => navigateTo('setup'));

// ─── SETUP ─────────────────────────────────

function initSetup() {
  renderCategoryOptions();

  // Set default name from storage
  const savedName = getFromStorage('bb_player_name', '');
  if (savedName) DOM.playerName.value = savedName;
}

function renderCategoryOptions() {
  DOM.categoryOptions.innerHTML = Object.entries(CATEGORY_ICONS).map(([key, icon]) =>
    `<label class="option-btn${key === state.category ? ' active' : ''}">
      <input type="radio" name="category" value="${key}" ${key === state.category ? 'checked' : ''} />
      <span>${icon} ${key.charAt(0).toUpperCase() + key.slice(1)}</span>
    </label>`
  ).join('');

  // Listen for changes
  $$('input[name="category"]').forEach(input => {
    input.addEventListener('change', () => {
      state.category = input.value;
      $$('input[name="category"]').forEach(r => r.closest('.option-btn').classList.remove('active'));
      input.closest('.option-btn').classList.add('active');
    });
  });
}

// Difficulty and question count listeners
$$('input[name="difficulty"]').forEach(input => {
  input.addEventListener('change', () => {
    state.difficulty = input.value;
    $$('input[name="difficulty"]').forEach(r => r.closest('.option-btn').classList.remove('active'));
    input.closest('.option-btn').classList.add('active');
  });
});

$$('input[name="qcount"]').forEach(input => {
  input.addEventListener('change', () => {
    state.questionCount = parseInt(input.value);
    $$('input[name="qcount"]').forEach(r => r.closest('.option-btn').classList.remove('active'));
    input.closest('.option-btn').classList.add('active');
  });
});

DOM.beginQuizBtn.addEventListener('click', beginQuiz);

function beginQuiz() {
  state.playerName = DOM.playerName.value.trim() || 'Player';
  saveToStorage('bb_player_name', state.playerName);

  // Load and shuffle questions
  const pool = QUESTIONS[state.category]?.[state.difficulty] || [];
  if (!pool.length) {
    showToast('No questions available for this category/difficulty.', 'error');
    return;
  }

  const count = Math.min(state.questionCount, pool.length);
  state.questions = shuffleArray([...pool]).slice(0, count);
  state.currentIndex = 0;
  state.score = 0;
  state.correct = 0;
  state.incorrect = 0;
  state.totalTime = 0;
  state.answers = [];

  setLoading(DOM.beginQuizBtn, true);
  navigateTo('quiz');
  setTimeout(() => {
    setLoading(DOM.beginQuizBtn, false);
    showQuestion();
  }, 300);
}

// ─── QUIZ ──────────────────────────────────

function showQuestion() {
  const q = state.questions[state.currentIndex];
  if (!q) { endQuiz(); return; }

  state.isAnswered = false;

  // Update header
  DOM.quizCategory.textContent = state.category.charAt(0).toUpperCase() + state.category.slice(1);
  DOM.quizDifficulty.textContent = state.difficulty.charAt(0).toUpperCase() + state.difficulty.slice(1);
  DOM.quizPlayer.textContent = state.playerName;

  // Progress
  const total = state.questions.length;
  const progress = ((state.currentIndex) / total) * 100;
  DOM.progressFill.style.width = `${progress}%`;
  DOM.progressText.textContent = `${state.currentIndex + 1} / ${total}`;

  // Score
  DOM.correctCount.textContent = state.correct;
  DOM.incorrectCount.textContent = state.incorrect;
  DOM.currentScore.textContent = state.score;

  // Question
  DOM.questionText.textContent = q.q;

  // Answers - shuffle
  const letters = ['A', 'B', 'C', 'D'];
  const options = shuffleArray([...q.options]);

  DOM.quizAnswers.innerHTML = options.map((opt, i) =>
    `<button class="answer-btn" data-answer="${escapeHtml(opt)}">
      <span class="answer-letter">${letters[i]}</span>
      ${escapeHtml(opt)}
    </button>`
  ).join('');

  // Start timer
  startTimer();
}

function selectAnswer(btn) {
  if (!btn || state.isAnswered) return;
  state.isAnswered = true;
  clearInterval(state.timer);

  const q = state.questions[state.currentIndex];
  const selected = btn.dataset.answer;
  const isCorrect = selected === q.a;
  const btns = $$('.answer-btn');
  const timeTaken = state.maxTimer - state.timerValue;

  // Disable all buttons
  btns.forEach(b => b.classList.add('disabled'));

  // Highlight correct answer
  btns.forEach(b => {
    if (b.dataset.answer === q.a) b.classList.add('correct');
  });

  if (isCorrect) {
    btn.classList.add('correct');
    const bonus = Math.ceil(state.timerValue);
    const points = 10 + bonus;
    state.score += points;
    state.correct++;
  } else {
    btn.classList.add('incorrect');
    state.incorrect++;
  }

  state.totalTime += timeTaken;
  state.answers.push({ question: q.q, correct: q.a, given: selected, isCorrect });

  // Update score display
  DOM.correctCount.textContent = state.correct;
  DOM.incorrectCount.textContent = state.incorrect;
  DOM.currentScore.textContent = state.score;

  // Move to next question
  setTimeout(nextQuestion, 1200);
}

// ─── TIMER ─────────────────────────────────

function startTimer() {
  state.timerValue = state.maxTimer;
  const circumference = 282.74;
  DOM.timerFill.style.strokeDashoffset = 0;
  DOM.timerText.textContent = state.timerValue;
  DOM.timerRing.classList.remove('warning', 'danger');

  if (state.timer) clearInterval(state.timer);
  state.timer = setInterval(() => {
    state.timerValue--;
    DOM.timerText.textContent = state.timerValue;

    // Update ring
    const offset = circumference * (1 - state.timerValue / state.maxTimer);
    DOM.timerFill.style.strokeDashoffset = offset;

    // Color changes
    DOM.timerRing.classList.remove('warning', 'danger');
    if (state.timerValue <= 5) DOM.timerRing.classList.add('danger');
    else if (state.timerValue <= 8) DOM.timerRing.classList.add('warning');

    if (state.timerValue <= 0) {
      clearInterval(state.timer);
      timeUp();
    }
  }, 1000);
}

function timeUp() {
  if (state.isAnswered) return;
  state.isAnswered = true;

  const q = state.questions[state.currentIndex];
  const btns = $$('.answer-btn');
  btns.forEach(b => b.classList.add('disabled'));

  // Show correct answer
  btns.forEach(b => {
    if (b.dataset.answer === q.a) b.classList.add('correct');
  });

  state.incorrect++;
  DOM.incorrectCount.textContent = state.incorrect;
  state.totalTime += state.maxTimer;
  state.answers.push({ question: q.q, correct: q.a, given: 'Time up', isCorrect: false });

  setTimeout(nextQuestion, 1200);
}

function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= state.questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

// ─── RESULTS ───────────────────────────────

function endQuiz() {
  const total = state.questions.length;
  const accuracy = total > 0 ? Math.round((state.correct / total) * 100) : 0;
  const avgTime = total > 0 ? Math.round(state.totalTime / total) : 0;

  // Icon and title
  let iconClass, title;
  if (accuracy === 100) { iconClass = 'perfect'; title = '🎉 Perfect Score!'; }
  else if (accuracy >= 80) { iconClass = 'great'; title = '🌟 Excellent Job!'; }
  else if (accuracy >= 60) { iconClass = 'good'; title = '👍 Good Effort!'; }
  else { iconClass = 'tryagain'; title = '💪 Keep Practicing!'; }

  DOM.resultsIcon.className = `results-icon ${iconClass}`;
  const iconMap = { perfect: 'fa-crown', great: 'fa-star', good: 'fa-thumbs-up', tryagain: 'fa-rocket' };
  DOM.resultsIcon.innerHTML = `<i class="fas ${iconMap[iconClass]}"></i>`;
  DOM.resultsTitle.textContent = title;
  DOM.resultsScore.textContent = state.score;
  DOM.resultsCorrect.textContent = state.correct;
  DOM.resultsIncorrect.textContent = state.incorrect;
  DOM.resultsAccuracy.textContent = `${accuracy}%`;
  DOM.resultsTime.textContent = `${avgTime}s`;

  // Breakdown
  DOM.resultsBreakdown.innerHTML = state.answers.map((a, i) => `
    <div class="breakdown-item ${a.isCorrect ? 'breakdown-correct' : 'breakdown-incorrect'}">
      <div class="bd-icon"><i class="fas ${a.isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i></div>
      <div class="bd-text">
        <strong>Q${i + 1}: ${escapeHtml(a.question)}</strong>
        <span>${a.isCorrect ? 'Correct!' : `You answered: ${escapeHtml(a.given)} — Correct answer: ${escapeHtml(a.correct)}`}</span>
      </div>
    </div>
  `).join('');

  // Save to leaderboard
  const scores = getFromStorage('bb_scores', []);
  scores.push({
    player: state.playerName,
    score: state.score,
    correct: state.correct,
    total: total,
    accuracy: accuracy,
    category: state.category,
    difficulty: state.difficulty,
    date: new Date().toISOString().split('T')[0],
  });
  scores.sort((a, b) => b.score - a.score);
  if (scores.length > 50) scores.length = 50;
  saveToStorage('bb_scores', scores);

  navigateTo('results');
  setTimeout(checkAOS, 400);
}

// Retry button
DOM.retryBtn.addEventListener('click', () => navigateTo('setup'));
DOM.leaderboardBtn.addEventListener('click', () => navigateTo('leaderboard'));

// ─── LEADERBOARD ───────────────────────────

function renderLeaderboard() {
  const scores = getFromStorage('bb_scores', []);

  if (!scores.length) {
    DOM.lbBody.innerHTML = '';
    DOM.lbEmpty.style.display = 'block';
    DOM.lbEmpty.querySelector('h3').textContent = 'No scores yet';
    DOM.lbEmpty.querySelector('p').textContent = 'Be the first to make the leaderboard!';
    return;
  }

  DOM.lbEmpty.style.display = 'none';

  DOM.lbBody.innerHTML = scores.slice(0, 20).map((s, i) => {
    const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const rankIcon = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`;

    return `<tr>
      <td><span class="lb-rank ${rankClass}">${rankIcon}</span></td>
      <td><span class="lb-player">${escapeHtml(s.player)}</span></td>
      <td><span class="lb-score">${s.score}</span></td>
      <td>${s.correct}/${s.total} (${s.accuracy}%)</td>
      <td>${s.category ? s.category.charAt(0).toUpperCase() + s.category.slice(1) : '—'}</td>
      <td>${s.difficulty ? s.difficulty.charAt(0).toUpperCase() + s.difficulty.slice(1) : '—'}</td>
    </tr>`;
  }).join('');
}

DOM.lbStartBtn.addEventListener('click', () => navigateTo('setup'));

// ─── CONFIRM MODAL ────────────────────────────

function showConfirmModal(message, onConfirm) {
  const existing = document.querySelector('.confirm-modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'confirm-modal-overlay';
  overlay.innerHTML = `
    <div class="confirm-modal">
      <i class="fas fa-exclamation-triangle" style="font-size:36px;color:var(--warning);margin-bottom:12px;display:block;text-align:center"></i>
      <p style="text-align:center;font-size:15px;color:var(--text-light);margin-bottom:20px;line-height:1.6">${escapeHtml(message)}</p>
      <div style="display:flex;gap:10px">
        <button class="btn btn-outline confirm-cancel" style="flex:1"><i class="fas fa-times"></i> Cancel</button>
        <button class="btn btn-primary confirm-ok" style="flex:1"><i class="fas fa-trash-alt"></i> Clear</button>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .confirm-modal-overlay {
      position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,0.5);backdrop-filter:blur(6px);
      display:flex;align-items:center;justify-content:center;padding:24px;
      animation:fadeIn 0.2s ease;
    }
    .confirm-modal {
      background:var(--surface);border-radius:var(--radius-lg);padding:32px 28px;
      max-width:400px;width:100%;box-shadow:var(--shadow-xl);
      animation:modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }
    @keyframes fadeIn { from{opacity:0} to{opacity:1} }
    @keyframes modalIn { from{transform:scale(0.9) translateY(20px);opacity:0} to{transform:scale(1) translateY(0);opacity:1} }
  `;
  document.head.appendChild(style);
  document.body.appendChild(overlay);

  overlay.querySelector('.confirm-cancel').focus();

  overlay.querySelector('.confirm-cancel').addEventListener('click', () => overlay.remove());
  overlay.querySelector('.confirm-ok').addEventListener('click', () => {
    overlay.remove();
    onConfirm();
  });
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape' && document.body.contains(overlay)) {
      overlay.remove();
      document.removeEventListener('keydown', escHandler);
    }
  });
}

DOM.clearLbBtn.addEventListener('click', () => {
  showConfirmModal('Clear all leaderboard scores? This cannot be undone.', () => {
    saveToStorage('bb_scores', []);
    renderLeaderboard();
    showToast('Leaderboard cleared.', 'info');
  });
});

// ─── SCROLL ANIMATIONS ─────────────────────

function checkAOS() {
  $$('[data-aos]').forEach(el => {
    const rect = el.getBoundingClientRect();
    const threshold = window.innerHeight * 0.88;
    if (rect.top < threshold && rect.bottom > 0) {
      el.classList.add('aos-animate');
    }
  });
}

window.addEventListener('scroll', checkAOS);
window.addEventListener('resize', checkAOS);

// ─── ANSWER CLICK DELEGATION ──────────────────

// Register once — never accumulates
DOM.quizAnswers?.addEventListener('click', (e) => {
  const btn = e.target.closest('.answer-btn');
  if (!btn || state.isAnswered) return;
  selectAnswer(btn);
});

// ─── INIT ──────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  navigateTo('home');
  setTimeout(checkAOS, 200);
  setTimeout(checkAOS, 600);
});
