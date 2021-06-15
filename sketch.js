var allDepartments =['AAS', 'ABUS', 'ACCT', 'ACL', 'ADDS', 'ADES', 'ADPY', 'AECM', 'AEM', 'AFEE', 'AFRO', 'AGRO', 'AHS', 'AIR', 'AKKA', 'ALL', 'AMES', 'AMIN', 'AMST', 'ANAT', 'ANES', 'ANSC', 'ANTH', 'APEC', 'APS', 'APSC', 'APST', 'ARAB', 'ARCH', 'ARGN', 'ARTH', 'ARTS', 'ASL', 'AST', 'BA', 'BBE', 'BCLA', 'BIOC', 'BIOL', 'BLAW', 'BMEN', 'BSE', 'BTHX', 'CAHP', 'CAPY', 'CDED', 'CEGE', 'CESP', 'CFAN', 'CGSC', 'CHEM', 'CHEN', 'CHIC', 'CHMB', 'CHN', 'CHPH', 'CI', 'CL', 'CLA', 'CMB', 'CMBA', 'CMGT', 'CMPE', 'CNES', 'COMM', 'CONS', 'COP', 'CPMS', 'CPSY', 'CSCI', 'CSCL', 'CSDS', 'CSE', 'CSOM', 'CSPH', 'CVM', 'DAKO', 'DBLN', 'DDS', 'DENT', 'DERM', 'DES', 'DH', 'DNCE', 'DSCI', 'DSSC', 'DT', 'DTCH', 'EAS', 'ECDR', 'ECON', 'ECP', 'EDHD', 'EDUC', 'EE', 'EEB', 'EMMD', 'EMS', 'ENDO', 'ENGL', 'ENGW', 'ENT', 'ENTR', 'EPSY', 'ESCI', 'ESL', 'ESPM', 'FDSY', 'FIN', 'FINA', 'FLOR', 'FM', 'FMCH', 'FNRM', 'FOST', 'FREN', 'FRIT', 'FSCN', 'FSOS', 'FW', 'GCC', 'GCD', 'GDBA', 'GDES', 'GEND', 'GEOG', 'GER', 'GERI', 'GERO', 'GHSR', 'GIS', 'GLBT', 'GLOS', 'GME', 'GRAD', 'GRD', 'GRK', 'GSD', 'GWSS', 'HCOL', 'HEBR', 'HECU', 'HINF', 'HIST', 'HMED', 'HMNG', 'HNDI', 'HNUR', 'HORT', 'HRIR', 'HSCI', 'HSEM', 'HSEX', 'HSG', 'HSM', 'HSPH', 'HUMF', 'IBH', 'IBUS', 'ICP', 'ID', 'IDES', 'IDSC', 'IE', 'IFSL', 'INAR', 'INET', 'INMD', 'INS', 'IREL', 'ISG', 'ITAL', 'JOUR', 'JPN', 'JWST', 'KIN', 'KNYA', 'KOR', 'LA', 'LAAS', 'LAMP', 'LANG', 'LAS', 'LASK', 'LAT', 'LAW', 'LEAD', 'LGTT', 'LING', 'LM', 'LNDN', 'LS', 'MABA', 'MADR', 'MATH', 'MATS', 'MBA', 'MBS', 'MBT', 'MCDG', 'MCOM', 'MDI', 'MDP', 'MDS', 'ME', 'MED', 'MEDC', 'MEST', 'MGMT', 'MICA', 'MICB', 'MICE', 'MIL', 'MILI', 'MIMB', 'MIMS', 'MKTG', 'MLK', 'MLSP', 'MM', 'MONT', 'MORT', 'MOT', 'MPHY', 'MRCO', 'MSBA', 'MSF', 'MSID', 'MSMK', 'MST', 'MTHE', 'MUED', 'MULT', 'MUS', 'MUSA', 'NAV', 'NEUR', 'NOR', 'NPSE', 'NR', 'NSC', 'NSCI', 'NSU', 'NURS', 'NUTR', 'OBIO', 'OBST', 'OCS', 'OJIB', 'OLPD', 'OPH', 'ORSU', 'OSUR', 'OT', 'OTHO', 'OTOL', 'OUE', 'PA', 'PATH', 'PDEN', 'PDES', 'PE', 'PED', 'PERO', 'PHAR', 'PHCL', 'PHIL', 'PHM', 'PHRM', 'PHSL', 'PHYS', 'PLPA', 'PLSC', 'PMB', 'PMED', 'POL', 'PORT', 'POUL', 'PREV', 'PROS', 'PSTL', 'PSY', 'PT', 'PUBH', 'PVS', 'RAD', 'REC', 'RELS', 'RM', 'ROB', 'ROME', 'RSC', 'RUSS', 'SACP', 'SAGR', 'SAPH', 'SCAN', 'SCB', 'SCIC', 'SCMC', 'SCO', 'SDNY', 'SENG', 'SFS', 'SLHS', 'SMGT', 'SMLI', 'SNGL', 'SOC', 'SOIL', 'SPAN', 'SPPT', 'SSM', 'SST', 'ST', 'STAT', 'SURG', 'SUST', 'SW', 'SWAH', 'SWED', 'TH', 'THAI', 'TLDO', 'TMDP', 'TRAD', 'TRIN', 'TXCL', 'UC', 'UGRD', 'URBS', 'URDU', 'UROL', 'VBS', 'VCS', 'VMBA', 'VMED', 'VPM', 'VTMD', 'WRIT', 'WRS', 'YOST'];

var mathPrereqs = ['MATH 1001 - Excursions in Mathematics|(3 cr; Prereq-3 yrs high school math or placement exam or [grade of at least C- in PSTL 731 or 732]; Student Option; offered Every Fall & Spring)', 'MATH 1008 - Trigonometry|(2.67 cr; A-F or Audit; offered Every Fall, Spring & Summer)', 'MATH 1031 - College Algebra and Probability|(3 cr; Prereq-3 yrs high school math or satisfactory score on placement exam or grade of at least C- in [PSTL 731 or PSTL 732 or CI 0832]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1038 - College Algebra and Probability Submodule|(1 cr; Prereq-1051 or 1151 or 1155; A-F or Audit; offered Every Fall, Spring & Summer)', 'MATH 1040 - Topics in Mathematics|(1 cr; S-N only; offered Every Fall & Spring)', 'MATH 1042 - Mathematics of Design|(4 cr; Prereq-Satisfactory score on placement test or grade of at least C- in [1031 or 1051]; Student Option; offered Every Fall)', 'MATH 1051 - Precalculus I|(3 cr; Prereq-3 yrs of high school math or satisfactory score on placement test or grade of at least C- in [PSTL 731 or PSTL 732 or CI 0832]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1142 - Short Calculus|(4 cr; Prereq-Satisfactory score on placement test or grade of at least C- in [1031 or 1051]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1143 - Introduction to Advanced Mathematics|(4 cr; A-F or Audit; offered Periodic Fall)', 'MATH 1151 - Precalculus II|(3 cr; Prereq-Satisfactory score on placement exam or grade of at least C- in [1031 or 1051]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1155 - Intensive Precalculus|(5 cr; Prereq-3 yrs high school math or satisfactory score on placement exam or grade of at least C- in [PSTL 731 or PSTL 732]; Student Option; offered Every Fall & Spring)', 'MATH 1241 - Calculus and Dynamical Systems in Biology|(4 cr; Prereq-[4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]], CBS student; Student Option; offered Every Fall & Spring)', 'MATH 1271 - Calculus I|(4 cr; Prereq-4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1272 - Calculus II|(4 cr; Prereq-[1271 or equiv] with grade of at least C-; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1281 - Calculus with Biological Emphasis I|(4 cr; Student Option; offered Every Fall)', 'MATH 1282 - Calculus With Biological Emphasis II|(4 cr; Student Option; offered Every Spring)', 'MATH 1371 - CSE Calculus I|(4 cr; Prereq-CSE or pre-bioprod concurrent registration is required (or allowed) in  biosys engn (PRE), background in [precalculus, geometry, visualization of functions/graphs], instr consent; familiarity with graphing calculators recommended; Student Option; offered Every Fall & Spring)', 'MATH 1372 - CSE Calculus II|(4 cr; Prereq-Grade of at least C- in [1371 or equiv], CSE or pre-Bioprod/Biosys Engr; Student Option; offered Every Spring)', 'MATH 1473 - Honors Calculus IIA for Secondary Students|(2 cr; Student Option; offered Every Fall)', 'MATH 1474 - Honors Calculus IIB for Secondary Students|(3 cr; Prereq-1473H; Student Option; offered Every Spring)', 'MATH 1571H - Honors Calculus I|(4 cr; Prereq-Honors student and permission of University Honors Program; A-F only; offered Every Fall)', 'MATH 1572H - Honors Calculus II|(4 cr; Prereq-1571H, honors student, permission of University Honors Program; A-F only; offered Every Spring)', 'MATH 2066 - Elementary Differential Equations|(1 cr [max 4]; Student Option; may be repeated for 4 credits)', 'MATH 2142 - Elementary Linear Algebra|(4 cr; Student Option; offered Every Fall & Spring)', 'MATH 2241 - Mathematical Modeling of Biological Systems|(3 cr; Prereq-[1241 or 1271 or 1371] w/grade of at least C-; Student Option; offered Every Fall & Spring; may be repeated for 4 credits)', 'MATH 2243 - Linear Algebra and Differential Equations|(4 cr; Prereq-[1272 or 1282 or 1372 or 1572] w/grade of at least C-; Student Option; offered Every Fall, Spring & Summer)', 'MATH 2263 - Multivariable Calculus|(4 cr; Prereq-[1272 or 1372 or 1572] w/grade of at least C-; Student Option; offered Every Fall, Spring & Summer)', 'MATH 2373 - CSE Linear Algebra and Differential Equations|(4 cr; Prereq-[1272 or 1282 or 1372 or 1572] w/grade of at least C-, CSE or pre-Bio Prod/Biosys Engr; Student Option; offered Every Fall & Spring)', 'MATH 2374 - CSE Multivariable Calculus and Vector Analysis|(4 cr; Prereq-[1272 or 1282 or 1372 or 1572] w/grade of at least C-, CSE or pre-Bioprod/Biosys Engr; Student Option; offered Every Fall & Spring)', 'MATH 2472 - Honors Calculus IIIA for Secondary Students|(3 cr; Student Option; offered Every Fall)', 'MATH 2473 - Honors Calculus IIIB for Secondary Students|(3 cr; Student Option; offered Every Spring)', 'MATH 2474 - Advanced Topics for Secondary Students|(3 cr; Prereq-2473H; Student Option; offered Every Spring)', 'MATH 2573H - Honors Calculus III|(4 cr; Prereq-Math 1572H or Math 2574H, honors student and permission of University Honors Program; A-F only; offered Every Fall)', 'MATH 2574H - Honors Calculus IV|(4 cr; Prereq-Math 1572H or Math 2573H, honors student and permission of University Honors Program; A-F only; offered Every Spring)', 'MATH 2999 - Special Exam|(5 cr; Student Option)', 'MATH 3283W - Sequences, Series, and Foundations: Writing Intensive|(4 cr; Prereq-[concurrent registration is required (or allowed) in 2243 or concurrent registration is required (or allowed) in 2263 or concurrent registration is required (or allowed) in 2373 or concurrent registration is required (or allowed) in 2374] w/grade of at least C-; Student Option; offered Every Fall & Spring)', 'MATH 3584H - Honors Calculus IV: Advanced Placement|(5 cr; Prereq-[2583 or equiv], IT Honors office approval; Student Option; offered Periodic Fall)', 'MATH 3592H - Honors Mathematics I|(5 cr; Prereq-dept consent; for students with mathematical talent; A-F only; offered Every Fall)', 'MATH 3593H - Honors Mathematics II|(5 cr; Prereq-3592H or instr consent; A-F or Audit; offered Every Spring)', 'MATH 4005 - Calculus Refresher|(4 cr; A-F or Audit)', 'MATH 4065 - Theory of Interest|(4 cr; Prereq-1272 or 1372 or 1572; A-F only; offered Every Fall & Spring)', 'MATH 4067W - Actuarial Mathematics in Practice|(3 cr; Prereq-4065, ACCT 2050, ECON 1101, ECON 1102; A-F only; offered Every Spring)', 'MATH 4151 - Elementary Set Theory|(3 cr; Prereq-One soph math course or instr consent; Student Option; offered Every Fall)', 'MATH 4152 - Elementary Mathematical Logic|(3 cr; Prereq-one soph math course or instr consent; Student Option; offered Every Spring)', 'MATH 4242 - Applied Linear Algebra|(4 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Fall, Spring & Summer)', 'MATH 4281 - Introduction to Modern Algebra|(4 cr; Prereq-2283 or 3283 or instr consent; Student Option; offered Periodic Fall)', 'MATH 4428 - Mathematical Modeling|(4 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Spring)', 'MATH 4512 - Differential Equations with Applications|(3 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Fall & Spring)', 'MATH 4567 - Applied Fourier Analysis|(4 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Fall & Spring)', 'MATH 4603 - Advanced Calculus I|(4 cr; Prereq-[[2243 or 2373], [2263 or 2374]] or 2574 or instr consent; Student Option; offered Every Fall, Spring & Summer)', 'MATH 4604 - Advanced Calculus II|(4 cr; Prereq-4603 or 5615 or instr consent; Student Option; offered Every Spring)', 'MATH 4653 - Elementary Probability|(4 cr; Prereq-[2263 or 2374 or 2573]; [2283 or 2574 or 3283] recommended; Student Option; offered Every Fall & Spring)', 'MATH 4707 - Introduction to Combinatorics and Graph Theory|(4 cr; Prereq-2243, [2283 or 3283]; Student Option; offered Every Fall & Spring)', 'MATH 4990 - Topics in Mathematics|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4991 - Independent Study|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4992 - Directed Reading|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4993 - Directed Study|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4995 - Senior Project for CLA|(1 cr; Prereq-2 sem of upper div math, dept consent; A-F or Audit; offered Every Fall, Spring & Summer)', 'MATH 4997W - Senior project (Writing Intensive)|(1 cr; Prereq-2 sem upper div math, dept consent; A-F or Audit; offered Every Fall, Spring & Summer; may be repeated for 2 credits; may be repeated 2 times)', 'MATH 5067 - Actuarial Mathematics I|(4 cr; Prereq-4065, [one sem [4xxx or 5xxx] [probability or statistics] course]; Student Option; offered Every Fall)', 'MATH 5068 - Actuarial Mathematics II|(4 cr; Prereq-5067; Student Option; offered Every Spring)', 'MATH 5075 - Mathematics of Options, Futures, and Derivative Securities I|(4 cr; Prereq-Two yrs calculus, basic computer skills; Student Option; offered Every Fall)', 'MATH 5076 - Mathematics of Options, Futures, and Derivative Securities II|(4 cr; Prereq-5075; A-F or Audit; offered Every Spring)', 'MATH 5165 - Mathematical Logic I|(4 cr; Prereq-2283 or 3283 or Phil 5201 or CSci course in theory of algorithms or instr consent; Student Option; offered Every Fall)', 'MATH 5248 - Cryptology and Number Theory|(4 cr; Prereq-2 sems soph math; Student Option; offered Every Fall)', 'MATH 5251 - Error-Correcting Codes, Finite Fields, Algebraic Curves|(4 cr; Prereq-2 sems soph math; Student Option; offered Every Spring)', 'MATH 5285H - Honors: Fundamental Structures of Algebra I|(4 cr; Prereq-[2243 or 2373 or 2573], [2283 or 2574 or 3283]; Student Option; offered Every Fall)', 'MATH 5286H - Honors: Fundamental Structures of Algebra II|(4 cr; Prereq-5285; Student Option; offered Every Fall & Spring)', 'MATH 5335 - Geometry I|(4 cr; Prereq-[2243 or 2373 or 2573], [concurrent registration is required (or allowed) in  2263 or concurrent registration is required (or allowed) in  2374 or concurrent registration is required (or allowed) in  2574]; Student Option; offered Every Fall)', 'MATH 5345H - Honors: Introduction to Topology|(4 cr; Prereq-[2263 or 2374 or 2573], [concurrent registration is required (or allowed) in 2283 or concurrent registration is required (or allowed) in 2574 or concurrent registration is required (or allowed) in 3283]; A-F only; offered Every Fall)', 'MATH 5378 - Differential Geometry|(4 cr; Prereq-[2263 or 2374 or 2573], [2243 or 2373 or 2574]; [2283 or 3283] recommended]; Student Option; offered Every Spring)', 'MATH 5385 - Introduction to Computational Algebraic Geometry|(4 cr; Prereq-[2263 or 2374 or 2573], [2243 or 2373 or 2574]; Student Option; offered Every Fall)', 'MATH 5445 - Mathematical Analysis of Biological Networks|(4 cr; Prereq-Linear algebra, differential equations; Student Option; offered Every Spring)', 'MATH 5447 - Theoretical Neuroscience|(4 cr; Prereq-2243 or 2373 or 2574; Student Option; offered Every Fall)', 'MATH 5467 - Introduction to the Mathematics of Image and Data Analysis|(4 cr; Prereq-[2243 or 2373 or 2573], [2283 or 2574 or 3283 or instr consent]; [[2263 or 2374], 4567] recommended; Student Option; offered Every Spring)', 'MATH 5485 - Introduction to Numerical Methods I|(4 cr; Prereq-[2243 or 2373 or 2573], familiarity with some programming language; Student Option; offered Every Fall)', 'MATH 5486 - Introduction To Numerical Methods II|(4 cr; Prereq-5485; Student Option; offered Every Spring)', 'MATH 5490 - Topics in Applied Mathematics|(4 cr; Student Option; offered Periodic Fall & Spring; may be repeated for 12 credits; may be repeated 3 times)', 'MATH 5525 - Introduction to Ordinary Differential Equations|(4 cr; Prereq-[2243 or 2373 or 2573], [2283 or 2574 or 3283]; Student Option; offered Periodic Fall & Spring)', 'MATH 5535 - Dynamical Systems and Chaos|(4 cr; Prereq-[2243 or 2373 or 2573], [2263 or 2374 or 2574]; Student Option; offered Every Fall & Spring)', 'MATH 5583 - Complex Analysis|(4 cr; Prereq-2 sems soph math [including [2263 or 2374 or 2573], [2283 or 3283]] recommended; Student Option; offered Every Fall, Spring & Summer)', 'MATH 5587 - Elementary Partial Differential Equations I|(4 cr; Prereq-[2243 or 2373 or 2573], [2263 or 2374 or 2574]; Student Option; offered Every Fall)', 'MATH 5588 - Elementary Partial Differential Equations II|(4 cr; Prereq-[[2243 or 2373 or 2573], [2263 or 2374 or 2574], 5587] or instr consent; A-F or Audit; offered Every Spring)', 'MATH 5615H - Honors: Introduction to Analysis I|(4 cr; Prereq-[[2243 or 2373], [2263 or 2374], [2283 or 3283]] or 2574; Student Option; offered Every Fall)', 'MATH 5616H - Honors: Introduction to Analysis II|(4 cr; Prereq-5615; Student Option; offered Every Spring)', 'MATH 5651 - Basic Theory of Probability and Statistics|(4 cr; Prereq-[2263 or 2374 or 2573], [2243 or 2373]; [2283 or 2574 or 3283] recommended.; Student Option; offered Every Fall & Spring)', 'MATH 5652 - Introduction to Stochastic Processes|(4 cr; Prereq-5651 or Stat 5101; Student Option; offered Every Fall & Spring)', 'MATH 5654 - Prediction and Filtering|(4 cr; Prereq-5651 or Stat 5101; Student Option; offered Every Spring)', 'MATH 5705 - Enumerative Combinatorics|(4 cr; Prereq-[2243 or 2373 or 2573], [2263 or 2283 or 2374 or 2574 or 3283]; Student Option; offered Every Fall & Spring)', 'MATH 5707 - Graph Theory and Non-enumerative Combinatorics|(4 cr; Prereq-[2243 or 2373 or 2573], [2263 or 2374 or 2574]; [2283 or 3283 or experience in writing proofs] highly recommended; Credit will not be granted if credit has been received for: 4707; Student Option; offered Every Fall & Spring)', 'MATH 5711 - Linear Programming and Combinatorial Optimization|(4 cr; Prereq-2 sems soph math [including 2243 or 2373 or 2573]; Student Option; offered Every Fall & Spring)', 'MATH 5900 - Tutorial in Advanced Mathematics|(1 cr [max 6]; A-F or Audit; offered Every Fall, Spring & Summer; may be repeated for 120 credits; may be repeated 20 times)', 'MATH 5990 - Topics in Mathematics|(3 cr [max 4]; Student Option; offered Periodic Fall & Spring; may be repeated for 12 credits; may be repeated 3 times)'];

var csciPrereqs2 = ['CSCI 1001 - Overview of Computer Science|(4 cr; Prereq-Non-CSci major, non-CompE major, non-EE major; Student Option; offered Every Spring)', 'CSCI 1103 - Introduction to Computer Programming in Java|(4 cr; Student Option; offered Every Fall)', 'CSCI 1113 - Introduction to C/C++ Programming for Scientists and Engineers|(4 cr; Prereq-Math 1271 or Math 1371 or Math 1571H or instr consent; Student Option; offered Every Fall, Spring & Summer)', 'CSCI 1115 - Exploring Computer Science Exercises in C++|(1 cr; S-N only; offered Every Fall & Spring)', 'CSCI 1133 - Introduction to Computing and Programming Concepts|(4 cr; Prereq-concurrent registration is required (or allowed) in MATH 1271 or concurrent registration is required (or allowed) in MATH 1371 or concurrent registration is required (or allowed) in MATH 1571H or instr consent; Student Option; offered Every Fall, Spring & Summer)', 'CSCI 1133H - Honors Introduction to Computing and Programming Concepts|(4 cr; Prereq-[concurrent registration is required (or allowed) in MATH 1271 or concurrent registration is required (or allowed) in MATH 1371 or concurrent registration is required (or allowed) in MATH 1571H], CSci majors, pre-majors in CSE/CLA, honors student; A-F only; offered Every Fall)', 'CSCI 1135 - Exploring Computer Science Exercises in Python|(1 cr; S-N only; offered Every Fall & Spring)', 'CSCI 1913 - Introduction to Algorithms, Data Structures, and Program Development|(4 cr; Prereq-(EE major and EE 1301) or (CmpE major and EE 1301) or 1103 or 1113 or instr consent; Student Option; offered Every Fall, Spring & Summer)', 'CSCI 1933 - Introduction to Algorithms and Data Structures|(4 cr; Prereq-1133 or instr consent; Student Option; offered Every Fall, Spring & Summer)', 'CSCI 1933H - Honors Introduction to Algorithms and Data Structures|(4 cr; Prereq-[1133 or 1133H] and honors student, or inst consent; A-F only; offered Every Spring)', 'CSCI 2011 - Discrete Structures of Computer Science|(4 cr; Prereq-MATH 1271 or MATH 1371 or instr consent; Student Option; offered Every Fall & Spring)', 'CSCI 2011H - Honors Discrete Structures of Computer Science|(4 cr; Prereq-[MATH 1271 or MATH 1371 or MATH 1571H], honors student.; A-F only; offered Every Spring)', 'CSCI 2021 - Machine Architecture and Organization|(4 cr; Prereq-1913 or 1933 or instr consent; Student Option; offered Every Fall & Spring)', 'CSCI 2033 - Elementary Computational Linear Algebra|(4 cr; Prereq-[MATH 1271 or MATH 1371], [1113 or 1133 or knowledge of programming concepts]; Student Option; offered Every Fall & Spring)', 'CSCI 2041 - Advanced Programming Principles|(4 cr; Prereq-[1913 or 1933], 2011; Student Option; offered Every Fall & Spring)', 'CSCI 2081 - Introduction to Software Development|(4 cr; Student Option; offered Every Fall & Spring)', 'CSCI 2980 - Special Topics in Computer Science|(1 cr [max 4]; A-F or Audit; offered Periodic Fall & Spring; may be repeated for 8 credits; may be repeated 2 times)', 'CSCI 2999 - Special Exam|(4 cr; Student Option)', 'CSCI 3003 - Introduction to Computing in Biology|(3 cr; Prereq-introductory biology course.; Student Option; offered Every Spring)', 'CSCI 3041 - Introduction to Discrete Structures and Algorithms|(4 cr; Student Option; offered Every Fall & Spring)', 'CSCI 3061 - Introduction to Computer Systems|(4 cr; Prereq-CSci 2081 or instructor permission\n; Student Option; offered Every Fall & Spring)', 'CSCI 3081W - Program Design and Development|(4 cr; Prereq-[2021, 2041]; CS upper div, CS grad, or dept. permission; Student Option; offered Every Fall & Spring)', 'CSCI 3921W - Social, Legal, and Ethical Issues in Computing|(3 cr; Prereq-At least soph or instr consent; Student Option; offered Every Fall)', 'CSCI 3970 - Industrial Student Co-op Assignment|(2 cr; Prereq-CSci, in co-op program, instr consent; S-N or Audit; offered Every Fall & Spring; 13 academic progress units; 13 financial aid progress units; may be repeated for 4 credits; may be repeated 2 times)', 'CSCI 4011 - Formal Languages and Automata Theory|(4 cr; Prereq-2041 or instr consent; Student Option; offered Every Fall & Spring)', 'CSCI 4041 - Algorithms and Data Structures|(4 cr; Prereq-[(1913 or 1933) and 2011] or instr consent; cannot be taken for grad CSci cr; Student Option; offered Every Fall & Spring)', 'CSCI 4061 - Introduction to Operating Systems|(4 cr; Prereq-2021 or EE 2361; CS upper div, CS minor, CompE upper div., EE upper div., EE grad, ITI upper div., Univ. honors student, or dept. permission; no cr for grads in CSci.; Student Option; offered Every Fall & Spring)', 'CSCI 4131 - Internet Programming|(3 cr; Prereq-4061, 4211 recommended, cannot be taken for grad CSci cr; Student Option; offered Every Fall & Spring)', 'CSCI 4203 - Computer Architecture|(4 cr; Prereq-2021 or instr consent; Student Option; offered Every Fall & Spring)', 'CSCI 4211 - Introduction to Computer Networks|(3 cr; Prereq-4061 or instr consent; basic knowledge of [computer architecture, operating systems] recommended, cannot be taken for grad CSci cr; Student Option; offered Every Fall & Spring)', 'CSCI 4271W - Development of Secure Software Systems|(4 cr; A-F or Audit; offered Every Spring)', 'CSCI 4511W - Introduction to Artificial Intelligence|(4 cr; Prereq-2041 or instr consent; Student Option; offered Every Spring)', 'CSCI 4611 - Programming Interactive Computer Graphics and Games|(3 cr; Prereq-2021 or instr consent; Student Option; offered Every Spring)', 'CSCI 4707 - Practice of Database Systems|(3 cr; Prereq-4041 or instr consent; Student Option; offered Every Fall & Spring)', 'CSCI 4921 - History of Computing|(3 cr; Student Option; offered Fall Even Year)', 'CSCI 4950 - Senior Software Project|(3 cr; Prereq-Upper div CSci, instr consent; A-F only; offered Every Fall & Spring; may be repeated for 6 credits; may be repeated 2 times)', 'CSCI 4970W - Advanced Project Laboratory|(3 cr; Prereq-Upper div CSci, 4061, instr consent; cannot be taken for grad cr; Student Option; offered Every Fall & Spring; may be repeated for 9 credits; may be repeated 3 times)', 'CSCI 4980 - Special Topics in Computer Science for Undergraduates|(1 cr [max 3]; Prereq-Undergrad, instr consent; no cr for grads in [CSci or CompE]; A-F or Audit; offered Periodic Fall & Spring; may be repeated for 9 credits; may be repeated 9 times)', 'CSCI 4994H - Honors Thesis|(1 cr [max 3]; Prereq-Honors student, instr consent; A-F only; offered Every Fall, Spring & Summer; may be repeated for 6 credits; may be repeated 2 times)', 'CSCI 5103 - Operating Systems|(3 cr; Prereq-4061 or instr consent; Student Option; offered Every Fall)', 'CSCI 5105 - Introduction to Distributed Systems|(3 cr; Prereq-[5103 or equiv] or instr consent; Student Option; offered Periodic Spring)', 'CSCI 5106 - Programming Languages|(3 cr; Prereq-4011 or instr consent; Student Option; offered Every Fall)', 'CSCI 5115 - User Interface Design, Implementation and Evaluation|(3 cr; Prereq-4041 or instr consent; Student Option; offered Every Fall)', 'CSCI 5117 - Developing the Interactive Web|(3 cr; Prereq-4131 or 5131 or instr consent; upper div or grad in CSci recommended; Student Option; offered Spring Even Year)', 'CSCI 5123 - Recommender Systems|(3 cr; Prereq-Java programming and 2033 and 3081, or instructor consent.; Student Option; offered Fall Odd Year)', 'CSCI 5125 - Collaborative and Social Computing|(3 cr; Prereq-5115 or instr consent; Student Option; offered Spring Even Year)', 'CSCI 5127W - Embodied Computing: Design & Prototyping|(3 cr; Prereq-CSci 4041, upper division or graduate student, or instructor permission; CSci 5115 or equivalent recommended.; Student Option; offered Fall Even Year)', 'CSCI 5143 - Real-Time and Embedded Systems|(3 cr; Prereq-[4061 or instr consent], experience with C language; A-F only; offered Periodic Spring)', 'CSCI 5161 - Introduction to Compilers|(3 cr; Prereq-[2021, 5106] or instr consent; Student Option; offered Every Spring)', 'CSCI 5204 - Advanced Computer Architecture|(3 cr; Prereq-4203 or EE 4363; Student Option; offered Every Fall)', 'CSCI 5211 - Data Communications and Computer Networks|(3 cr; Prereq-[4061 or instr consent], basic knowledge of [computer architecture, operating systems, probability], grad student; Student Option; offered Every Fall)', 'CSCI 5221 - Foundations of Advanced Networking|(3 cr; Prereq-4211 or 5211 or equiv; intro course in computer networks recommended; Student Option; offered Spring Even Year)', 'CSCI 5271 - Introduction to Computer Security|(3 cr; Prereq-4061 or equiv or instr consent; Student Option; offered Every Fall)', 'CSCI 5302 - Analysis of Numerical Algorithms|(3 cr; Prereq-2031 or 2033 or instr consent; Student Option; offered Every Spring)', 'CSCI 5304 - Computational Aspects of Matrix Theory|(3 cr; Prereq-2031 or 2033 or instr consent; Student Option; offered Every Fall)', 'CSCI 5421 - Advanced Algorithms and Data Structures|(3 cr; Prereq-4041 or instr consent; Student Option; offered Every Fall & Spring)', 'CSCI 5451 - Introduction to Parallel Computing: Architectures, Algorithms, and Programming|(3 cr; Prereq-4041 or instr consent; Student Option; offered Every Spring)', 'CSCI 5461 - Functional Genomics, Systems Biology, and Bioinformatics|(3 cr; Prereq-3003 or 4041 or instr consent; Student Option; offered Every Spring)', 'CSCI 5465 - Introduction to Computing for Biologists|(3 cr; Prereq-Introductory biology course; non-CSE students only.; Student Option; offered Fall Odd Year)', 'CSCI 5471 - Modern Cryptography|(3 cr; Prereq-[2011, 4041, [familiarity with number theory or finite fields]] or instr consent; Student Option; offered Periodic Fall & Spring)', 'CSCI 5481 - Computational Techniques for Genomics|(3 cr; Prereq-4041 or instr consent; Student Option; offered Every Fall)', 'CSCI 5511 - Artificial Intelligence I|(3 cr; Prereq-[2041 or instr consent], grad student; Student Option; offered Every Fall)', 'CSCI 5512 - Artificial Intelligence II|(3 cr; Prereq-[STAT 3021, 4041] or instr consent; Student Option; offered Every Spring)', 'CSCI 5521 - Machine Learning Fundamentals|(3 cr; Prereq-[2031 or 2033], STAT 3021, and knowledge of partial derivatives; Student Option; offered Periodic Fall)', 'CSCI 5523 - Introduction to Data Mining|(3 cr; Prereq-4041 or equiv or instr consent; Student Option; offered Periodic Fall & Spring)', 'CSCI 5525 - Machine Learning: Analysis and Methods|(3 cr; Prereq-Grad student or instr consent; Student Option; offered Fall Even Year)', 'CSCI 5551 - Introduction to Intelligent Robotic Systems|(3 cr; Prereq-2031 or 2033 or instr consent; Student Option; offered Periodic Fall)', 'CSCI 5552 - Sensing and Estimation in Robotics|(3 cr; Prereq-[5551, Stat 3021] or instr consent; Student Option; offered Periodic Spring)', 'CSCI 5561 - Computer Vision|(3 cr; Prereq-CSci 5511, 5521, or instructor consent.; Student Option; offered Every Spring)', 'CSCI 5563 - Multiview 3D Geometry in Computer Vision|(3 cr; Prereq-Students enrolling in this course must have completed CSCI 5561 or have instructor consent. ; A-F or Audit; offered Every Spring)', 'CSCI 5607 - Fundamentals of Computer Graphics 1|(3 cr; Prereq-concurrent registration is required (or allowed) in 2033, concurrent registration is required (or allowed) in 3081; Student Option; offered Every Fall)', 'CSCI 5608 - Fundamentals of Computer Graphics II|(3 cr; Prereq-5607 or instr consent; Student Option; offered Periodic Spring)', 'CSCI 5609 - Visualization|(3 cr; Prereq-[1913, 4041] or equiv or instr consent; Student Option; offered Fall Even Year)', 'CSCI 5611 - Animation & Planning in Games|(3 cr; Prereq-4041 or 4611 or instr consent; Student Option; offered Fall Odd Year)', 'CSCI 5619 - Virtual Reality and 3D Interaction|(3 cr; Prereq-4611 or 5607 or 5115 or equiv or instr consent; Student Option; offered Spring Odd Year)', 'CSCI 5707 - Principles of Database Systems|(3 cr; Prereq-[4041 or instr consent], grad student; Student Option; offered Every Fall)', 'CSCI 5708 - Architecture and Implementation of Database Management Systems|(3 cr; Prereq-4707 or 5707 or instr consent; Student Option; offered Every Spring)', 'CSCI 5715 - From GPS, Google Maps, and Uber to Spatial Data Science|(3 cr; Prereq-Familiarity with Java, C++, or Python; Student Option; offered Spring Even Year)', 'CSCI 5751 - Big Data Engineering and Architecture|(3 cr; Prereq-4041, 5707, or instructor consent.\n\n; Student Option; offered Every Fall)', 'CSCI 5801 - Software Engineering I|(3 cr; Prereq-2041 or instr consent; Student Option; offered Every Fall)', 'CSCI 5802 - Software Engineering II|(3 cr; Prereq-5801 or instr consent; Student Option; offered Periodic Spring)', 'CSCI 5980 - Special Topics in Computer Science|(1 cr [max 3]; Prereq-instr consent; may be repeated for cr; Student Option; offered Periodic Fall & Spring; may be repeated for 27 credits; may be repeated 9 times)', 'CSCI 5991 - Independent Study|(1 cr [max 3]; Prereq-instr consent; may be repeated for cr; Student Option; offered Every Fall, Spring & Summer; may be repeated for 9 credits; may be repeated 9 times)', 'CSCI 5994 - Directed Research|(1 cr [max 3]; Prereq-instr consent; may be repeated for cr; Student Option; offered Every Fall, Spring & Summer; may be repeated for 9 credits; may be repeated 9 times)', 'CSCI 5996 - Curricular Practical Training|(1 cr; Prereq-[CSci or CompE] major, instr consent; S-N or Audit; offered Every Fall, Spring & Summer; may be repeated for 3 credits; may be repeated 3 times)'];


var cHeight = 0;
var cWidth = 0;
const rWidth = 325;
const rHeight = 180;
var allClasses = [[],[],[],[],[]];
var grid = [];

class Class {
  constructor(department, name, number, prerequisites) {
    this.department = department;
    this.name = name;
    this.number = number;
    this.prerequisites = prerequisites;
  }
}

class Grid {
  constructor(xPos, yPos, course) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.course = course;
  }
}

class Prerequisite {
  constructor(department, number, dotted, coreqs="") {
    this.department = department;
    this.number = number;
    this.dotted = dotted;
    this.coreqs = coreqs;
  }
}
var dept = "CSCI";

parseFromArray(csciPrereqs2);
//
allClasses = fixArray();
calcWidth();
var maxElems = calcHeight();
var prereqArray = [[],[],[],[],[]];

function setup() {
  createCanvas(cWidth,cHeight);
  background(255);
  stroke(0);
  rect(0,0,cWidth,cHeight);
  populateGrid();
  fillPrereqArray();
  // console.log(allClasses);
  console.log(grid);
  console.log(prereqArray);
  textAlign(CENTER, CENTER);
  textSize(25);
  drawGrid();

  line(50,50,400,750);

}

function fillPrereqArray() {
  for(var i = 0; i < grid.length; i++) {
    var c = grid[i];
    var num = Math.floor(c[0].course.number/1000);
    prereqArray[num-1] = (prereqArray[num-1]).concat(c);
  }
}

function parseFromArray(arr) {
  for(var i = 0; i < arr.length; i++) {
    let course = arr[i].split("|")[0];
    let prereqs = arr[i].split("|")[1];
    let name = course.split(" - ")[0];
    let description = course.split(" - ")[1];
    let number = removeLetters(name);
    let index = (Math.floor(number/1000)) - 1;
    var prereqs2 = [];

    // allClasses[index].prerequisites.push("hello");
    let split = prereqs.split(";")
    for(var j = 1; j < split.length; j++) {
      if((split[j].substring(1,7)) == ("Prereq")) {
        var text = (replaceCommaWithAnd(split[j])).substring(8);
        // console.log(recursivelyParse(text, prereqs2));
        // console.log(text);

        text = recursivelyParse(text);
        // console.log(text);
        text = recursivelyParse(text,prereqs2);
        splitByAnd = splitByChar(text, ' and ');
        assignIndices(prereqs2,splitByAnd);
        // console.log(prereqs2);
        // prereqs = parsePrerequisites(replaceCommaWithAnd(split[j]));
      }
  }
  let c = new Class(dept,description,number,prereqs2);
  (allClasses[index]).push(c);

  }
}
function assignIndices(prereqs, split) {
  for(var i = 0; i < prereqs.length; i++) {
    for(var j = 0; j < split.length; j++) {
      var pre = prereqs[i];
      if(split[j].includes(String(pre.number)) && pre.name != "") {
        pre.coreqs = split[j];
      }
    }
  }
}

function replaceCommaWithAnd(text) {
  var ans = "";
  for(var i = 0; i < text.length; i++) {
    if(text.charAt(i) == ',') {
      ans += ' and';
    } else {
      ans += text.charAt(i);
    }
  }
  return ans;
}

function splitByChar(str, char) {
  var depth = 0;
  var beginning = 0;
  var ans = [];


  for(var i = 0; i < (str.length - char.length); i++) {
    if(str.charAt(i) == '(' || str.charAt(i) == '[') {
      depth++;
    } else if (str.charAt(i) == ')' || str.charAt(i) == ']') {
      depth--;
    }
    var sub = str.substring(i, i+char.length);
    if(sub == char && depth == 0) {
      ans.push(str.substring(beginning,i));
      beginning = i + char.length;
    }

  }
  ans.push(str.substring(beginning));
  return ans;
}

function removeLetters(num) {
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  let newString = "";
  for(var i = 0; i < num.length; i++) {
    var c = num.charAt(i);
    if(numbers.indexOf(c) != -1) {
        newString += c;
    }
  }
  return parseInt(newString);
}

function calcWidth() {
  var totalCols = 0;
  for(var i = 0; i < allClasses.length; i++) {
    if(allClasses[i].length > 9) {
      totalCols += Math.ceil(allClasses[i].length/9);
    } else if(allClasses[i].length > 0) { totalCols++; }
  }
  cWidth = rWidth*totalCols + 300*(totalCols+1)+150;
}

function calcHeight() {
    var max = 0;
    for(var i = 0; i < allClasses.length; i++) {
      if(allClasses[i].length > max) {
        max = allClasses[i].length;
      }

    }
    if(max > 9) {
      max = 9;
    }
    cHeight = ((max+2)*100+max*rHeight) + 425;
    return max;
}

function fixArray() {
  newClasses = [];
  for(var i = 0; i < allClasses.length; i++) {
    if(allClasses[i].length > 0 && allClasses[i].length <= 9) {
      newClasses.push(allClasses[i]);
    }
    if(allClasses[i].length > 9) {
      var startIndex = 0;
      var length = allClasses[i].length;
      numNewArrays = Math.ceil(length/9);
      numToRemove = Math.round(length/numNewArrays);
      while(true) {
        if(length - numToRemove > 1) {
            newClasses.push(allClasses[i].slice(startIndex,startIndex+numToRemove));
            length -= numToRemove;
            startIndex += numToRemove;
        } else {
          newClasses.push(allClasses[i].slice(startIndex));
          break;
        }
      }
    }
  }
  return newClasses;
}
// var ands = [];
// var ors = [];

function fixPrereqs(arr) {
  var ans = "";
  split1 = arr.split(' or ');
  for(var i = 0; i < split1.length; i++) {
    if(split1[i] != "") {
      ans += split1[i] + " or ";
    }

  }
  return ans.substring(0, ans.length-4);
}

function recursivelyParse(str, prereqs=[], dotted=false,depth=0) {
  // console.log(dotted)
    // str is string, dotted is boolean to represent if line should be dotted
    // if an "and" exists, split by and. Then merge the various splits.
    var and  = splitByChar(str,' and ');
    var or = splitByChar(str, ' or ');
    // console.log(or);
    if(and.length > 1) {
      var first = recursivelyParse(and[0],prereqs,dotted,depth);
      var ans = "";
      if(first != "") {
        ans += first;
      }

      for(var i = 1; i < and.length; i++) {
        var parsed = recursivelyParse(and[i],prereqs,dotted,depth);
        if(parsed != "") {
        ans += ' and ' + parsed;
      }
    }
    if(first == "") {
      ans = ans.substring(4);
    }
      return ans;

    } else if(or.length > 1) { // if an "or" exists, split by or
      var first = recursivelyParse(or[0],prereqs,true,depth);
      var ans = "";
      if(first != "") {
        ans += first;
      }
      for(var i = 1; i < or.length; i++) {
        var parsed = recursivelyParse(or[i],prereqs,true,depth);
        if(parsed != "") {
        ans += ' or ' + parsed;
        }
      }
      if(first == "") {
        ans = ans.substring(4);
      }
      return ans;

    } else if(str.includes('[') || (str.includes('(') && !str.includes("or allowed"))) { // if a bracket exists, split by bracket
      depth++;
      if(!checkForCorrectness(str)) {
        return "";
      }
      return '[' + recursivelyParse(parseBrackets(str),prereqs,dotted,depth) + ']';

    } else {// base case: string cannot be split by and, or, or bracket. check if a prerequisite can be parsed, if so return prerequisites
      var prereq = parsePrerequisites(str, dotted);
      // console.log(prereq);
      prereqs.push(prereq);
      if(prereq.number >= 100) {
        return prereq.department + " " + prereq.number;
      }
      return "";
    }
}
function checkForCorrectness(str) {
  return !(str.includes("] [") || str.includes("]  ["))
}

function parseBrackets(str) {
  var start = 0;
  var end = 0;
  var start1 = 9999;
  var start2 = 9999;
  if(str.indexOf('(') == -1 && str.indexOf(']')== -1) {
    return str;
  }
  if(str.indexOf('(') != -1) {
    start1 = str.indexOf('(') + 1;
  }
  if(str.indexOf('[') != -1) {
    start2 = str.indexOf('[') + 1;
  }
  start = Math.min(start1,start2);
  for(var i = str.length - 1; i >= 0; i--) {
    if(str.charAt(i) == ')' || str.charAt(i) == ']') {
      end = i;
      break;
    }
  }
  return str.substring(start, end);
}

function parsePrerequisites(text, dotted) {
  var prereq = new Prerequisite("", 0, false);
  for(var i = 0; i < text.length - 1; i++) {
    if(allDepartments.indexOf((text.substring(i,i+2)).toUpperCase()) != -1 && (i == 0 || text.charAt(i-1) == ' ') && (text.charAt(i+2) == ' ')) {
      // _Ma 1472_
      // 012345678910 i+=7
      var department = text.substring(i, i+2);
      var num = parseInt(text.substring(i+3, i+7));
      prereq = new Prerequisite(department, num, dotted);
      return prereq;
    }
  }

  for(var i = 0; i < text.length - 2; i++) {
    if(allDepartments.indexOf((text.substring(i,i+3)).toUpperCase()) != -1 && (i == 0 || text.charAt(i-1) == ' ') && (text.charAt(i+3) == ' ')) {
      // _Ma 1472_
      // 012345678910 i+=7
      var department = text.substring(i, i+3);
      var num = parseInt(text.substring(i+4, i+8));
      prereq = new Prerequisite(department, num, dotted);
      return prereq;
    }
  }

  for(var i = 0; i < text.length - 3; i++) {
    if(allDepartments.indexOf((text.substring(i,i+4)).toUpperCase()) != -1 && (i == 0 || text.charAt(i-1) == ' ') && (text.charAt(i+4) == ' ')) {
      // _Math 1472_
      // 012345678910 i+=7
      var department = text.substring(i, i+4);
      var num = parseInt(text.substring(i+5, i+9));
      prereq = new Prerequisite(department, num, dotted);
      return prereq;
    }
  }



  for(var i = 0; i < text.length - 3; i++) {
    if(parseInt(text.substring(i,i+4)) >= 1000) {
     var num = parseInt(text.substring(i, i+4));
     prereq = new Prerequisite(dept, num, dotted);
     return prereq;
   }
  }

  for(var i = 0; i < text.length - 2; i++) {
    if(parseInt(text.substring(i,i+3)) >= 100) {
     var num = parseInt(text.substring(i, i+3));
     prereq = new Prerequisite(dept, num, dotted);
     return prereq;
   }
  }

  return prereq;
}


function populateGrid() {
  var start = 0;
  var end = 0;
  var heightOffset = 0;
  var s = 275+rHeight/2;
  var k = 0;
  for(var i = 0; i < allClasses.length; i++) {
    var col = allClasses[i];
    var newGrid = [];
    start = Math.floor((maxElems - col.length)/2);
    end = start + col.length;

    for(var j = 0; j < maxElems; j++) {
      heightOffset = rHeight/2*j+200*j;
      if(j >= start && j < end) {
        var g = new Grid((200+rWidth/2) + ((rWidth/2 * (i*2)) + (300*i)), s + heightOffset, col[k]);
        k++;
        newGrid.push(g);
      }
    }
    k = 0;
    grid.push(newGrid);
  }
}

function drawGrid() {
  var names = ["1000s","2000s","3000s","4000s","5000s"]
  var colors = ["#FF6600","#FFA500","#FFFF00","#00FF00","#00CFF6","#4BAF82","#EE82EE","#23FEF6"]

  for(var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[i].length; j++) {

      var txt = grid[i][j].course.name + '\n' + grid[i][j].course.department + ' ' + String(grid[i][j].course.number);
      console.log(grid[i][j].course.prerequisites);
      for(var k = 0; k < grid[i][j].course.prerequisites.length; k++) {
        var prereq =  grid[i][j].course.prerequisites[k];
        if(prereq.department.toUpperCase() == dept) {
          console.log(prereq);
          searchPrereqs(grid[i][j].xPos, grid[i][j].yPos, prereq.number, grid[i][j].course.number);
        }
      }

      // if(i%2==0) {
      strokeWeight(5);
      rect(grid[i][j].xPos,grid[i][j].yPos,rWidth, rHeight);
      strokeWeight(0);
      text(txt,grid[i][j].xPos, grid[i][j].yPos, rWidth, rHeight);

      /*
    } else {
      strokeWeight(5);
      rect(grid[i][j].xPos,grid[i][j].yPos + rHeight, rWidth, rHeight);
      strokeWeight(0);
      text(txt,grid[i][j].xPos, grid[i][j].yPos + rHeight, rWidth, rHeight);

    }
    */
  }
  }
  for(var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[i].length; j++) {
      var index = Math.floor(grid[i][j].course.number/1000) - 1;
      let c = color(colors[index]);
      fill(c);
      strokeWeight(5);
      rect((200+rWidth/2) + ((rWidth/2 * (i*2)) + (300*i)), 175, rWidth, 75);
      textSize(30);
      strokeWeight(0);
      fill("#000000");
      text(names[index], (200+rWidth/2) + ((rWidth/2 * (i*2)) + (300*i)), 175, rWidth, 75);
    }
  }
}

function searchPrereqs(x1, y1, num, currentNum) {
  for(var i = 0; i < prereqArray.length; i++) {
    for(var j = 0; j < prereqArray[i].length; j++) {
        var pre = prereqArray[i][j];
        if(pre.course.number == num) {
          console.log(num);
          console.log(currentNum);
          strokeWeight(5);
          line(x1, y1+rHeight/2, pre.xPos+rWidth, pre.yPos+rHeight/2);
            strokeWeight(0);
        }
    }
  }
}




function draw() {
}
