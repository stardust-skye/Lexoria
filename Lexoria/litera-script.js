function showJournals(category) {
    var displayContainer = document.getElementById('display-container');
    var content = '';

    switch (category) {
        case 'national':
            content = `
                <h2>National Journals</h2>
                <ul>
                <li>Advanced Multimedia and Image Processing</li>
                <li>Advanced Research in Computer Engineering</li>
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Artificial Intelligence Research Advances</li>
                <li>Augmented & Virtual Reality</li>
                <li>CIGRE</li>
                <li>Circuits and Systems</li>
                <li>Cloud Computing</li>
                <li>Communication Engineering & Systems</li>
                <li>Communication Technology(ICTACT)</li>
                <li>Computational Intelligence in Bioinformatics</li>
                <li>Computer Science</li>
                <li>Computer Technology & Applications</li>
                <li>CPRI(renamed as Power Research)</li>
                <li>Current Development in Artificial Intelligence</li>
                <li>Data Processing</li>
                <li>Data Science & Big Data Analytics</li>
                <li>Defence Science Journal</li>
                <li>Digital Information Management</li>
                <li>Digital Information Technology</li>
                <li>Digital Signal Processing</li>
                <li>Digital Signal Processing and Artificial Intelligence for Automatic Learning</li>
                <li>Education(IETE)</li>
                <li>Electrical Engineering</li>
                <li>Electronic Design Technology</li>
                <li>Electronic Devices</li>
                <li>Electronic Systems</li>
                <li>Electronics Engg</li>
                <li>Embedded Systems</li>
                <li>Entrepreneurship Development</li>
                <li>E-Technology</li>
                <li>Future Engineering & Technology</li>
                <li>IEI: Journals Series "B" (Electrical, Electronics & Telecommunication and Computer)</li>
                <li>IEI: Journals Series "C" (Aerospace, Industrial & Manufacturing, Mechanical & Ocean Engineering)</li>
                <li>Image and Video Processing(ICTACT)</li>
                <li>Image Processing</li>
                <li>Information & Systems Management</li>
                <li>Information Organization</li>
                <li>Information Security & Computer</li>
                <li>Information Security Education Journal</li>
                <li>Information Security Research</li>
                <li>Information Technology</li>
                <li>Intelligent Computing</li>
                <li>Knowledge Management and Information Technology</li>
                <li>Library & Information Technology(DESIDOC)</li>
                <li>Micro Electronics(ICTACT)</li>
                <li>Mobile Applications and Technologies</li>
                <li>Multimedia Processing and Technologies</li>
                <li>Networking Technology</li>
                <li>Pattern recognition</li>
                <li>Power Engineer Journal</li>
                <li>Progress in Computing Applications</li>
                <li>Progress in Machines and Systems</li>
                <li>Progress in Signals and Telecommunications Engg.</li>
                <li>Research(IETE)</li>
                <li>Resonance (Journal of Science Education)</li>
                <li>Signals and Telecommunication Journal</li>
                <li>Soft Computing(ICTACT)</li>
                <li>Soft Skills</li>
                <li>Software Engineering</li>
                <li>Technical Review(IETE)</li>
                <li>Transaction on Machine Design</li>
                <li>VLSI Design Tools & Technology</li>
                <li>Wireless Communication and Networking</li>
                <li>Wireless Communication Networks</li>                
                </ul>
            `;
            break;


        case 'international':
            content = `
                <h2>International Journals</h2>
                <ul>
                <li>Anificial innelligence and Computational Research</li>
                <li>Antennas and Wave Propagation, IEEE Transactions on</li>
                <li>Applied Artificial Intelligence in Engineering Systems</li>
                <li>Applied Marketing and Management</li>
                <li>Automation Science and Engineering, IEEE Transactions on</li>
                <li>Banking, Risk and Insurance</li>
                <li>Biomedical Ortuits and Systems, IEEE Transactions on</li>
                <li>Business</li>
                <li>Business Analytics and Intelligence</li>
                <li>Business and Management Research</li>
                <li>Business Ethics in Developing Economies</li>
                <li>Circuits and Systems for Vides Testinology, IEEE Transactions on</li>
                <li>Computational Linguistics Research</li>
                <li>Computer Engineering and Software Technology</li>
                <li>Computer Networks & Communications Technology (GRP)</li>
                <li>Computer Sciences and Engineering Systems (UCSES)</li>
                <li>Computer, Mathematical Sciences and Applications</li>
                <li>Computing and Artificial Intelligence</li>
                <li>Customer Relations</li>
                <li>Data Analysis & Information Systems</li>
                <li>Data Warehousing</li>
                <li>Digital Communication and Analog Signals</li>
                <li>Electronics & Communication Engineering</li>
                <li>Electronics & Telecommunication Instrument Engineering & Technology</li>
                <li>Embedded Systems & Communication Systems</li>
                <li>Emerging and Selected topics in Circuits and Systems, IEEE Journal on</li>
                <li>Emerging and Selected Topics in Industrial Electronics, IEEE Journal on</li>
                <li>Financial Management</li>
                <li>Image Processing and Applications</li>
                <li>Industrial Informatics, IEEE Transactions on</li>
                <li>Information and Communication Technologies</li>
                <li>Information Studies</li>
                <li>Information Theory, IEEE Transactions on (E&P)</li>
                <li>Knowledge Management and Practices</li>
                <li>Leadership</li>
                <li>Marketing & Trade Policy</li>
                <li>Marketing and Business Communication</li>
                <li>Mechatronics, IEEE/ASME Transactions on</li>
                <li>Multimedia, Computer Vision and Machine Learning</li>
                <li>Neural Networks and Applications</li>
                <li>Very Large Scale integration Systems, IEEE Transactions on</li>
                <li>Web Applications</li>
                
                </ul>
            `;
            break;


        case 'story':
            content = `
                <h2>Other Books</h2>
                <ul>
                <li>2 States: The Story of My Marriage</li>
                <li>332 Indian Food Recipes - Sanjeev Kapoor</li>
                <li>400 Days</li>
                <li>7 The habits of Highly effective people</li>
                <li>A Caribbean Mystery</li>
                <li>A Place called here</li>
                <li>A Promise Land</li>
                <li>A Tale of Two cities</li>
                <li>A Twist in the Tale</li>
                <li>Aanati Adbhuta Chitralu</li>
                <li>Ajaya Epic of the Kaurava Clan Book 1: Roll of the Dice</li>
                <li>And the Mountains Echoed</li>
                <li>Angels and Demons</li>
                <li>Atlas Shrugged</li>
                <li>Atomic Habits</li>
                <li>Autobiography of a Yogi</li>
                <li>Bhagavad-Gita As It Is</li>
                <li>Bloodline</li>
                <li>By The Pricking of my Thumbs</li>
                <li>Cambridge English pronouncing Dictionary</li>
                <li>Cambridge Idioms Dictionary</li>
                <li>Cambridge Phrasal Verbs Dictionary</li>
                <li>Closing the Innovation Gap</li>
                <li>Collins English Dictionary & Thesaurus</li>
                <li>Collins German Dictionary</li>
                <li>Collins Italian Dictionary</li>
                <li>Collins Portuguese Concise Dictionary</li>
                <li>Complete Work of Sherlock Holmes - Vol I</li>
                <li>Complete Work of Sherlock Holmes - Vol II</li>
                <li>Daughter of Smoke Bone</li>
                <li>Don't Lose your mind: Lose your weight</li>
                <li>Ebglish-English-Telugu Dictionary</li>
                <li>E-Habits</li>
                <li>Emerson - Spiritual Laws</li>
                <li>Ethics in Governance: Resolution of Dilemmas</li>
                <li>Fables: The Mean Seasons</li>
                <li>Fire & Blood</li>
                <li>First Among Equals</li>
                <li>Gone Girl</li>
                <li>Great Directions</li>
                <li>Great Expectations</li>
                <li>Great Works of Rabindranath Tagore</li>
                <li>Half Girl Friend</li>
                <li>Harry Potter and the Chamber of Secrets</li>
                <li>Harry Potter and the Deathly Hallows</li>
                <li>Harry Potter and the Goblet of Fire</li>
                <li>Harry Potter and the Half - Blood Prince</li>
                <li>Harry Potter and the Order of the Phoenix</li>
                <li>Harry Potter and the Philosopher\`s Stone</li>
                <li>Harry Potter and the Prisoner of Azkaban</li>
                <li>Hindu Tales From Sanskrit - S.M.Mitra</li>
                <li>Homo Deus: A Brief History of Tomorrow</li>
                <li>How to manage organisational change</li>
                <li>I Do What I Do</li>
                <li>Inferno</li>
                <li>Kane and Abel</li>
                <li>Keepers of the Kalachakra</li>
                <li>Lifes Amazing Secrets</li>
                <li>Make Time: How to Focus on What Matters Every day</li>
                <li>Managing Customers as Investments</li>
                <li>Me Before You</li>
                <li>Mein Kampf : ( My Struggle)</li>
                <li>Never Go Back</li>
                <li>Not a Penny More, Not a Penny Less</li>
                <li>One Indian Girl</li>
                <li>One Night @ The Call Center</li>
                <li>One Yogi Athma Katha (Telugu)</li>
                <li>Only time will tell</li>
                <li>Origin</li>
                <li>Oxford Advanced Learner's Dictionary of Current English</li>
                <li>Oxford American Dictionary</li>
                <li>Oxford Collocations Dictionary</li>
                <li>Oxford English-Hindi Dictionary</li>
                <li>Pedda Bala Siksha - 2</li>
                <li>Pictorial Biographies of A P J Abdul Kalam</li>
                <li>Pictorial Biographies of Abraham Lincoln</li>
                <li>Pictorial Biographies of Adolf Hitler</li>
                <li>Pictorial Biographies of Albert Einstein</li>
                <li>Pictorial Biographies of Alexander Graham Bell</li>
                <li>Pictorial Biographies of Aung San Suu Kyi</li>
                <li>Pictorial Biographies of Barack Hussein Obama</li>
                <li>Pictorial Biographies of Bil Gates</li>
                <li>Pictorial Biographies of Charles Darwin</li>
                <li>Pictorial Biographies of Chatrapati Shivaji</li>
                <li>Pictorial Biographies of Dr Bhimrao Ramji Ambedkar</li>
                <li>Pictorial Biographies of Galileo Galilei</li>
                <li>Pictorial Biographies of Gautam Buddha</li>
                <li>Pictorial Biographies of Isaac Newton</li>
                <li>Pictorial Biographies of Jawarlal Nehru</li>
                <li>Pictorial Biographies of Karl Marx</li>
                <li>Pictorial Biographies of Lal Bahadur Shastri</li>
                <li>Pictorial Biographies of Leonardo Da Vinci</li>
                <li>Pictorial Biographies of Lokmanya Bal Gangadhar Tilak</li>
                <li>Pictorial Biographies of Louis Pasteur</li>
                <li>Pictorial Biographies of Mahatma Gandhi</li>
                <li>Pictorial Biographies of Martin Luther King JR</li>
                <li>Pictorial Biographies of Mother Teresa</li>
                <li>Pictorial Biographies of Nelson Mandela</li>
                <li>Pictorial Biographies of Rabindranath Tagore</li>
                <li>Pictorial Biographies of Sardar Vallabh Bhai Patel</li>
                <li>Pictorial Biographies of Stephen Hawking</li>
                <li>Pictorial Biographies of Steve Jobs</li>
                <li>Pictorial Biographies of Subhash Chandra Bose</li>
                <li>Pictorial Biographies of Swami Vivekananda</li>
                <li>Pictorial Biographies of Thomas Alva Edison</li>
                <li>Pictorial Biographies ofDr Rajendra Prasad</li>
                <li>PS, I Love You</li>
                <li>Rich Dad Poor Dad</li>
                <li>Riding the Blue Train</li>
                <li>Sapiens : A Brief History of Humankind</li>
                <li>Scrabble Dictionary</li>
                <li>Sense and Sensibility</li>
                <li>Servant Leadership</li>
                <li>Shall we tell the President?</li>
                <li>Sherlock Holmes</li>
                <li>Spiritual Heritage & Cultural Symbols of India</li>
                <li>Start with Why</li>
                <li>Success - A Spiritual Matter</li>
                <li>Tales from the Hindu Dramatists - R. N. Dutta</li>
                <li>Tell Tale</li>
                <li>Tess of the D'Urbervilles: A Pure Woman</li>
                <li>Thanks for the Memories</li>
                <li>The 7 Habits of Highly Effective People</li>
                <li>The Alchemist</li>
                <li>The Big book of words you should know</li>
                <li>The Book of Tomorrow</li>
                <li>The Book Thief</li>
                <li>The Bourne Betrayal</li>
                <li>The Bourne Sanction</li>
                <li>The Brethren</li>
                <li>The Complete Works</li>
                <li>The Fountainhead</li>
                <li>The Gift</li>
                <li>The Girl who kicked the Hornets' Nest</li>
                <li>The Gril on the Train</li>
                <li>The Hundred-Year- old Man Who Climbed out of the Window Disappeared</li>
                <li>The Immortals of Meluba (Book 1 of the Shiva Trilogy)</li>
                <li>The Interpretation of Dreams</li>
                <li>The Kite Runner</li>
                <li>The Krishna Key</li>
                <li>The Leadership Masterclass</li>
                <li>The Oath of the Vayuputras</li>
                <li>The One Thing</li>
                <li>The Oxford Dictionary of Synonyms and Antonyms</li>
                <li>The Oxford-Hachette French Dictionary</li>
                <li>The Prodigal Daughter</li>
                <li>The Return of The Native</li>
                <li>The Rise of Sivagami - Book I</li>
                <li>The Rooster Bar</li>
                <li>The Rozabal Line</li>
                <li>The Runaway Jury</li>
                <li>The Secret</li>
                <li>The Secret of the Nagas (Book 2 of the Shiva Trilogy)</li>
                <li>The Silent Patient</li>
                <li>The Stage With Two Horns</li>
                <li>The Subtle Art of Not Giving a Fuck</li>
                <li>The Time of My life</li>
                <li>The Year I met you</li>
                <li>Think Like a Monk</li>
                <li>To Cut a Long Story Short</li>
                <li>Twelve Red Herrings</li>
                <li>Vanity Fair</li>
                <li>Vikram And The Vampire - Sir Richard F. Burton</li>
                <li>Windmills of the Gods</li>
                <li>Yoga: Wisdom and Practice</li>
                <li>You Can Sell</li>
                <li>You Can Win</li>
                </ul>
            `;
            break;
        default:
            content = '<p>No content available</p>';
            break;
    }

    displayContainer.innerHTML = content;
}
