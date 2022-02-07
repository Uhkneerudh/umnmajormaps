var allDepartments =['AAS', 'ABUS', 'ACCT', 'ACL', 'ADDS', 'ADES', 'ADPY', 'AECM', 'AEM', 'AFEE', 'AFRO', 'AGRO', 'AHS', 'AIR', 'AKKA', 'ALL', 'AMES', 'AMIN', 'AMST', 'ANAT', 'ANES', 'ANSC', 'ANTH', 'APEC', 'APS', 'APSC', 'APST', 'ARAB', 'ARCH', 'ARGN', 'ARTH', 'ARTS', 'ASL', 'AST', 'BA', 'BBE', 'BCLA', 'BIOC', 'BIOL', 'BLAW', 'BMEN', 'BSE', 'BTHX', 'CAHP', 'CAPY', 'CDED', 'CEGE', 'CESP', 'CFAN', 'CGSC', 'CHEM', 'CHEN', 'CHIC', 'CHMB', 'CHN', 'CHPH', 'CI', 'CL', 'CLA', 'CMB', 'CMBA', 'CMGT', 'CMPE', 'CNES', 'COMM', 'CONS', 'COP', 'CPMS', ' CPSY', 'CSCI', 'CSCL', 'CSDS', 'CSE', 'CSOM', 'CSPH', 'CVM', 'DAKO', 'DBLN', 'DDS', 'DENT', 'DERM', 'DES', 'DH', 'DNCE', 'DSCI', 'DSSC', 'DT', 'DTCH', 'EAS', 'ECDR', 'ECON', 'ECP', 'EDHD', 'EDUC', 'EE', 'EEB', 'EMMD', 'EMS', 'ENDO', 'ENGL', 'ENGW', 'ENT', 'ENTR', 'EPSY', 'ESCI', 'ESL', 'ESPM', 'FDSY', 'FIN', 'FINA', 'FLOR', 'FM', 'FMCH', 'FNRM', 'FOST', 'FREN', 'FRIT', 'FSCN', 'FSOS', 'FW', 'GCC', 'GCD', 'GDBA', 'GDES', 'GEND', 'GEOG', 'GER', 'GERI', 'GERO', 'GHSR', 'GIS', 'GLBT', 'GLOS', 'GME', 'GRAD', 'GRD', 'GRK', 'GSD', 'GWSS', 'HCOL', 'HEBR', 'HECU', 'HINF', 'HIST', 'HMED', 'HMNG', 'HNDI', 'HNUR', 'HORT', 'HRIR', 'HSCI', 'HSEM', 'HSEX', 'HSG', 'HSM', 'HSPH', 'HUMF', 'IBH', 'IBUS', 'ICP', 'ID', 'IDES', 'IDSC', 'IE', 'IFSL', 'INAR', 'INET', 'INMD', 'INS', 'IREL', 'ISG', 'ITAL', 'JOUR', 'JPN', 'JWST', 'KIN', 'KNYA', 'KOR', 'LA', 'LAAS', 'LAMP', 'LANG', 'LAS', 'LASK', 'LAT', 'LAW', 'LEAD', 'LGTT', 'LING', 'LM', 'LNDN', 'LS', 'MABA', 'MADR', 'MATH', 'MATS', 'MBA', 'MBS', 'MBT', 'MCDG', 'MCOM', 'MDI', 'MDP', 'MDS', 'ME', 'MED', 'MEDC', 'MEST', 'MGMT', 'MICA', 'MICB', 'MICE', 'MIL', 'MILI', 'MIMB', 'MIMS', 'MKTG', 'MLK', 'MLSP', 'MM', 'MONT', 'MORT', 'MOT', 'MPHY', 'MRCO', 'MSBA', 'MSF', 'MSID', 'MSMK', 'MST', 'MTHE', 'MUED', 'MULT', 'MUS', 'MUSA', 'NAV', 'NEUR', 'NOR', 'NPSE', 'NR', 'NSC', 'NSCI', 'NSU', 'NURS', 'NUTR', 'OBIO', 'OBST', 'OCS', 'OJIB', 'OLPD', 'OPH', 'ORSU', 'OSUR', 'OT', 'OTHO', 'OTOL', 'OUE', 'PA', 'PATH', 'PDEN', 'PDES', 'PE', 'PED', 'PERO', 'PHAR', 'PHCL', 'PHIL', 'PHM', 'PHRM', 'PHSL', 'PHYS', 'PLPA', 'PLSC', 'PMB', 'PMED', 'POL', 'PORT', 'POUL', 'PREV', 'PROS', 'PSTL', 'PSY', 'PT', 'PUBH', 'PVS', 'RAD', 'REC', 'RELS', 'RM', 'ROB', 'ROME', 'RSC', 'RUSS', 'SACP', 'SAGR', 'SAPH', 'SCAN', 'SCB', 'SCIC', 'SCMC', 'SCO', 'SDNY', 'SENG', 'SFS', 'SLHS', 'SMGT', 'SMLI', 'SNGL', 'SOC', 'SOIL', 'SPAN', 'SPPT', 'SSM', 'SST', 'ST', 'STAT', 'SURG', 'SUST', 'SW', 'SWAH', 'SWED', 'TH', 'THAI', 'TLDO', 'TMDP', 'TRAD', 'TRIN', 'TXCL', 'UC', 'UGRD', 'URBS', 'URDU', 'UROL', 'VBS', 'VCS', 'VMBA', 'VMED', 'VPM', 'VTMD', 'WRIT', 'WRS', 'YOST'];

var mathPrereqs = ['MATH 1001 - Excursions in Mathematics|(3 cr; Prereq-3 yrs high school math or placement exam or [grade of at least C- in PSTL 731 or 732]; Student Option; offered Every Fall & Spring)', 'MATH 1008 - Trigonometry|(2.67 cr; A-F or Audit; offered Every Fall, Spring & Summer)', 'MATH 1031 - College Algebra and Probability|(3 cr; Prereq-3 yrs high school math or satisfactory score on placement exam or grade of at least C- in [PSTL 731 or PSTL 732 or CI 0832]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1038 - College Algebra and Probability Submodule|(1 cr; Prereq-1051 or 1151 or 1155; A-F or Audit; offered Every Fall, Spring & Summer)', 'MATH 1040 - Topics in Mathematics|(1 cr; S-N only; offered Every Fall & Spring)', 'MATH 1042 - Mathematics of Design|(4 cr; Prereq-Satisfactory score on placement test or grade of at least C- in [1031 or 1051]; Student Option; offered Every Fall)', 'MATH 1051 - Precalculus I|(3 cr; Prereq-3 yrs of high school math or satisfactory score on placement test or grade of at least C- in [PSTL 731 or PSTL 732 or CI 0832]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1142 - Short Calculus|(4 cr; Prereq-Satisfactory score on placement test or grade of at least C- in [1031 or 1051]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1143 - Introduction to Advanced Mathematics|(4 cr; A-F or Audit; offered Periodic Fall)', 'MATH 1151 - Precalculus II|(3 cr; Prereq-Satisfactory score on placement exam or grade of at least C- in [1031 or 1051]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1155 - Intensive Precalculus|(5 cr; Prereq-3 yrs high school math or satisfactory score on placement exam or grade of at least C- in [PSTL 731 or PSTL 732]; Student Option; offered Every Fall & Spring)', 'MATH 1241 - Calculus and Dynamical Systems in Biology|(4 cr; Prereq-[4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]], CBS student; Student Option; offered Every Fall & Spring)', 'MATH 1271 - Calculus I|(4 cr; Prereq-4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1272 - Calculus II|(4 cr; Prereq-[1271 or equiv] with grade of at least C-; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1281 - Calculus with Biological Emphasis I|(4 cr; Student Option; offered Every Fall)', 'MATH 1282 - Calculus With Biological Emphasis II|(4 cr; Student Option; offered Every Spring)', 'MATH 1371 - CSE Calculus I|(4 cr; Prereq-CSE or pre-bioprod concurrent registration is required (or allowed) in  biosys engn (PRE), background in [precalculus, geometry, visualization of functions/graphs], instr consent; familiarity with graphing calculators recommended; Student Option; offered Every Fall & Spring)', 'MATH 1372 - CSE Calculus II|(4 cr; Prereq-Grade of at least C- in [1371 or equiv], CSE or pre-Bioprod/Biosys Engr; Student Option; offered Every Spring)', 'MATH 1473 - Honors Calculus IIA for Secondary Students|(2 cr; Student Option; offered Every Fall)', 'MATH 1474 - Honors Calculus IIB for Secondary Students|(3 cr; Prereq-1473H; Student Option; offered Every Spring)', 'MATH 1571H - Honors Calculus I|(4 cr; Prereq-Honors student and permission of University Honors Program; A-F only; offered Every Fall)', 'MATH 1572H - Honors Calculus II|(4 cr; Prereq-1571H, honors student, permission of University Honors Program; A-F only; offered Every Spring)', 'MATH 2066 - Elementary Differential Equations|(1 cr [max 4]; Student Option; may be repeated for 4 credits)', 'MATH 2142 - Elementary Linear Algebra|(4 cr; Student Option; offered Every Fall & Spring)', 'MATH 2241 - Mathematical Modeling of Biological Systems|(3 cr; Prereq-[1241 or 1271 or 1371] w/grade of at least C-; Student Option; offered Every Fall & Spring; may be repeated for 4 credits)', 'MATH 2243 - Linear Algebra and Differential Equations|(4 cr; Prereq-[1272 or 1282 or 1372 or 1572] w/grade of at least C-; Student Option; offered Every Fall, Spring & Summer)', 'MATH 2263 - Multivariable Calculus|(4 cr; Prereq-[1272 or 1372 or 1572] w/grade of at least C-; Student Option; offered Every Fall, Spring & Summer)', 'MATH 2373 - CSE Linear Algebra and Differential Equations|(4 cr; Prereq-[1272 or 1282 or 1372 or 1572] w/grade of at least C-, CSE or pre-Bio Prod/Biosys Engr; Student Option; offered Every Fall & Spring)', 'MATH 2374 - CSE Multivariable Calculus and Vector Analysis|(4 cr; Prereq-[1272 or 1282 or 1372 or 1572] w/grade of at least C-, CSE or pre-Bioprod/Biosys Engr; Student Option; offered Every Fall & Spring)', 'MATH 2472 - Honors Calculus IIIA for Secondary Students|(3 cr; Student Option; offered Every Fall)', 'MATH 2473 - Honors Calculus IIIB for Secondary Students|(3 cr; Student Option; offered Every Spring)', 'MATH 2474 - Advanced Topics for Secondary Students|(3 cr; Prereq-2473H; Student Option; offered Every Spring)', 'MATH 2573H - Honors Calculus III|(4 cr; Prereq-Math 1572H or Math 2574H, honors student and permission of University Honors Program; A-F only; offered Every Fall)', 'MATH 2574H - Honors Calculus IV|(4 cr; Prereq-Math 1572H or Math 2573H, honors student and permission of University Honors Program; A-F only; offered Every Spring)', 'MATH 2999 - Special Exam|(5 cr; Student Option)', 'MATH 3283W - Sequences, Series, and Foundations: Writing Intensive|(4 cr; Prereq-[concurrent registration is required (or allowed) in 2243 or concurrent registration is required (or allowed) in 2263 or concurrent registration is required (or allowed) in 2373 or concurrent registration is required (or allowed) in 2374] w/grade of at least C-; Student Option; offered Every Fall & Spring)', 'MATH 3584H - Honors Calculus IV: Advanced Placement|(5 cr; Prereq-[2583 or equiv], IT Honors office approval; Student Option; offered Periodic Fall)', 'MATH 3592H - Honors Mathematics I|(5 cr; Prereq-dept consent; for students with mathematical talent; A-F only; offered Every Fall)', 'MATH 3593H - Honors Mathematics II|(5 cr; Prereq-3592H or instr consent; A-F or Audit; offered Every Spring)', 'MATH 4005 - Calculus Refresher|(4 cr; A-F or Audit)', 'MATH 4065 - Theory of Interest|(4 cr; Prereq-1272 or 1372 or 1572; A-F only; offered Every Fall & Spring)', 'MATH 4067W - Actuarial Mathematics in Practice|(3 cr; Prereq-4065, ACCT 2050, ECON 1101, ECON 1102; A-F only; offered Every Spring)', 'MATH 4151 - Elementary Set Theory|(3 cr; Prereq-One soph math course or instr consent; Student Option; offered Every Fall)', 'MATH 4152 - Elementary Mathematical Logic|(3 cr; Prereq-one soph math course or instr consent; Student Option; offered Every Spring)', 'MATH 4242 - Applied Linear Algebra|(4 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Fall, Spring & Summer)', 'MATH 4281 - Introduction to Modern Algebra|(4 cr; Prereq-2283 or 3283 or instr consent; Student Option; offered Periodic Fall)', 'MATH 4428 - Mathematical Modeling|(4 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Spring)', 'MATH 4512 - Differential Equations with Applications|(3 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Fall & Spring)', 'MATH 4567 - Applied Fourier Analysis|(4 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Fall & Spring)', 'MATH 4603 - Advanced Calculus I|(4 cr; Prereq-[[2243 or 2373], [2263 or 2374]] or 2574 or instr consent; Student Option; offered Every Fall, Spring & Summer)', 'MATH 4604 - Advanced Calculus II|(4 cr; Prereq-4603 or 5615 or instr consent; Student Option; offered Every Spring)', 'MATH 4653 - Elementary Probability|(4 cr; Prereq-[2263 or 2374 or 2573]; [2283 or 2574 or 3283] recommended; Student Option; offered Every Fall & Spring)', 'MATH 4707 - Introduction to Combinatorics and Graph Theory|(4 cr; Prereq-2243, [2283 or 3283]; Student Option; offered Every Fall & Spring)', 'MATH 4990 - Topics in Mathematics|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4991 - Independent Study|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4992 - Directed Reading|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4993 - Directed Study|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4995 - Senior Project for CLA|(1 cr; Prereq-2 sem of upper div math, dept consent; A-F or Audit; offered Every Fall, Spring & Summer)', 'MATH 4997W - Senior project (Writing Intensive)|(1 cr; Prereq-2 sem upper div math, dept consent; A-F or Audit; offered Every Fall, Spring & Summer; may be repeated for 2 credits; may be repeated 2 times)'];

var csciPrereqs2 = ['CSCI 1001 - Overview of Computer Science|(4 cr; Prereq-Non-CSci major, non-CompE major, non-EE major; Student Option; offered Every Spring)', 'CSCI 1103 - Introduction to Computer Programming in Java|(4 cr; Student Option; offered Every Fall)', 'CSCI 1113 - Introduction to C/C++ Programming for Scientists and Engineers|(4 cr; Prereq-Math 1271 or Math 1371 or Math 1571H or instr consent; Student Option; offered Every Fall, Spring & Summer)', 'CSCI 1115 - Exploring Computer Science Exercises in C++|(1 cr; S-N only; offered Every Fall & Spring)', 'CSCI 1133 - Introduction to Computing and Programming Concepts|(4 cr; Prereq-concurrent registration is required (or allowed) in MATH 1271 or concurrent registration is required (or allowed) in MATH 1371 or concurrent registration is required (or allowed) in MATH 1571H or instr consent; Student Option; offered Every Fall, Spring & Summer)', 'CSCI 1133H - Honors Introduction to Computing and Programming Concepts|(4 cr; Prereq-[concurrent registration is required (or allowed) in MATH 1271 or concurrent registration is required (or allowed) in MATH 1371 or concurrent registration is required (or allowed) in MATH 1571H], CSci majors, pre-majors in CSE/CLA, honors student; A-F only; offered Every Fall)', 'CSCI 1135 - Exploring Computer Science Exercises in Python|(1 cr; S-N only; offered Every Fall & Spring)', 'CSCI 1913 - Introduction to Algorithms, Data Structures, and Program Development|(4 cr; Prereq-(EE major and EE 1301) or (CmpE major and EE 1301) or 1103 or 1113 or instr consent; Student Option; offered Every Fall, Spring & Summer)', 'CSCI 1933 - Introduction to Algorithms and Data Structures|(4 cr; Prereq-1133 or instr consent; Student Option; offered Every Fall, Spring & Summer)', 'CSCI 1933H - Honors Introduction to Algorithms and Data Structures|(4 cr; Prereq-[1133 or 1133H] and honors student, or inst consent; A-F only; offered Every Spring)', 'CSCI 2011 - Discrete Structures of Computer Science|(4 cr; Prereq-MATH 1271 or MATH 1371 or instr consent; Student Option; offered Every Fall & Spring)', 'CSCI 2021 - Machine Architecture and Organization|(4 cr; Prereq-1913 or 1933 or instr consent; Student Option; offered Every Fall & Spring)', 'CSCI 2033 - Elementary Computational Linear Algebra|(4 cr; Prereq-[MATH 1271 or MATH 1371], [1113 or 1133 or knowledge of programming concepts]; Student Option; offered Every Fall & Spring)', 'CSCI 2041 - Advanced Programming Principles|(4 cr; Prereq-[1913 or 1933], 2011; Student Option; offered Every Fall & Spring)', 'CSCI 2081 - Introduction to Software Development|(4 cr; Student Option; offered Every Fall & Spring)', 'CSCI 2980 - Special Topics in Computer Science|(1 cr [max 4]; A-F or Audit; offered Periodic Fall & Spring; may be repeated for 8 credits; may be repeated 2 times)', 'CSCI 2999 - Special Exam|(4 cr; Student Option)', 'CSCI 3003 - Introduction to Computing in Biology|(3 cr; Prereq-introductory biology course.; Student Option; offered Every Spring)', 'CSCI 3041 - Introduction to Discrete Structures and Algorithms|(4 cr; Student Option; offered Every Fall & Spring)', 'CSCI 3061 - Introduction to Computer Systems|(4 cr; Prereq-CSci 2081 or instructor permission\n; Student Option; offered Every Fall & Spring)', 'CSCI 3081W - Program Design and Development|(4 cr; Prereq-[2021, 2041]; CS upper div, CS grad, or dept. permission; Student Option; offered Every Fall & Spring)', 'CSCI 3921W - Social, Legal, and Ethical Issues in Computing|(3 cr; Prereq-At least soph or instr consent; Student Option; offered Every Fall)', 'CSCI 3970 - Industrial Student Co-op Assignment|(2 cr; Prereq-CSci, in co-op program, instr consent; S-N or Audit; offered Every Fall & Spring; 13 academic progress units; 13 financial aid progress units; may be repeated for 4 credits; may be repeated 2 times)', 'CSCI 4011 - Formal Languages and Automata Theory|(4 cr; Prereq-2041 or instr consent; Student Option; offered Every Fall & Spring)','CSCI 4061 - Introduction to Operating Systems|(4 cr; Prereq-2021 or EE 2361; CS upper div, CS minor, CompE upper div., EE upper div., EE grad, ITI upper div., Univ. honors student, or dept. permission; no cr for grads in CSci.; Student Option; offered Every Fall & Spring)', 'CSCI 4131 - Internet Programming|(3 cr; Prereq-4061, 4211 recommended, cannot be taken for grad CSci cr; Student Option; offered Every Fall & Spring)','CSCI 4041 - Algorithms and Data Structures|(4 cr; Prereq-[(1913 or 1933) and 2011] or instr consent; cannot be taken for grad CSci cr; Student Option; offered Every Fall & Spring)' ,'CSCI 4203 - Computer Architecture|(4 cr; Prereq-2021 or instr consent; Student Option; offered Every Fall & Spring)', 'CSCI 4211 - Introduction to Computer Networks|(3 cr; Prereq-4061 or instr consent; basic knowledge of [computer architecture, operating systems] recommended, cannot be taken for grad CSci cr; Student Option; offered Every Fall & Spring)', 'CSCI 4271W - Development of Secure Software Systems|(4 cr; A-F or Audit; offered Every Spring)', 'CSCI 4511W - Introduction to Artificial Intelligence|(4 cr; Prereq-2041 or instr consent; Student Option; offered Every Spring)', 'CSCI 4611 - Programming Interactive Computer Graphics and Games|(3 cr; Prereq-2021 or instr consent; Student Option; offered Every Spring)', 'CSCI 4707 - Practice of Database Systems|(3 cr; Prereq-4041 or instr consent; Student Option; offered Every Fall & Spring)', 'CSCI 4921 - History of Computing|(3 cr; Student Option; offered Fall Even Year)', 'CSCI 4950 - Senior Software Project|(3 cr; Prereq-Upper div CSci, instr consent; A-F only; offered Every Fall & Spring; may be repeated for 6 credits; may be repeated 2 times)', 'CSCI 4970W - Advanced Project Laboratory|(3 cr; Prereq-Upper div CSci, 4061, instr consent; cannot be taken for grad cr; Student Option; offered Every Fall & Spring; may be repeated for 9 credits; may be repeated 3 times)', 'CSCI 4980 - Special Topics in Computer Science for Undergraduates|(1 cr [max 3]; Prereq-Undergrad, instr consent; no cr for grads in [CSci or CompE]; A-F or Audit; offered Periodic Fall & Spring; may be repeated for 9 credits; may be repeated 9 times)', 'CSCI 4994H - Honors Thesis|(1 cr [max 3]; Prereq-Honors student, instr consent; A-F only; offered Every Fall, Spring & Summer; may be repeated for 6 credits; may be repeated 2 times)'];

var dept = "CSCI";
var cHeight = 0;
var cWidth = 0;
const rWidth = 325;
const rHeight = 180;
var allClasses = [[],[],[],[]];
var grid = [];
var colLengths = [];

class Class {
  constructor(department, name, number, prerequisites, prerequisiteClasses=[], corequisiteClasses=[], externalClasses=[], outgoingClasses=[], xPos=0, yPos=0, filled=false) {
    this.department = department;
    this.name = name;
    this.number = number;
    this.prerequisites = prerequisites;
    this.prerequisiteClasses = prerequisiteClasses;
    this.corequisiteClasses = corequisiteClasses;
    this.externalClasses = externalClasses;
    this.outgoingClasses = outgoingClasses;
    this.xPos = xPos;
    this.yPos = yPos;
    this.filled = filled;
  }
}

class Grid {
  constructor(xPos, yPos, course, filled=false, maxAffinity=0) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.course = course;
    this.filled = filled;
    this.maxAffinity = maxAffinity;
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

class Affinity {
  constructor(affinity, row, col) {
    this.affinity = affinity;
    this.row = row;
    this.col = col;
  }
}

parseFromArray(csciPrereqs2); //parse array
findPrereqs(allClasses) //puts prerequisites into array
findOutgoing(allClasses) //puts outgoing prereqs into array;
allClasses = fixArray();
// console.log(allClasses);
calcWidth();
var maxElems = calcHeight();
// console.log(colLengths);


function setup() {
  createCanvas(cWidth,cHeight);
  background(255);
  stroke(0);
  rect(0,0,cWidth,cHeight);
  populateGrid();
  console.log(grid);
  textAlign(CENTER, CENTER);
  textSize(25);
  // console.log(allClasses[0][6]);
  // console.log(calculateAffinity(allClasses[0][6]))


  // calcColumns();

  console.log(colLengths);
  var start = 0;
  var end = 0;
  for(var i = 0;  i < 4; i++) {
    end += colLengths[i];
    bigBrainAlgorithm(start, end);
    start = end;
  }
  // bigBrainAlgorithm(5,11);
  drawGrid();
  // line(50,50,400,750);

}

//issue: corequisites have same level prereqs that don't get locked in
//pass in variables that determine scope of level (i.e 3 columns belong to first year classes)
function bigBrainAlgorithm(startIndex, numCols) {
  var resetClause = false;
  //find maxAffinities
  while(!resetClause) { //run until resetClause is true
    for(var i = startIndex; i < numCols; i++) {
      for(var j = 0; j < allClasses[i].length; j++) {
        var c = allClasses[i][j];
        if(c.filled) {
          continue;
        }
        console.log(c);
        var maxAffinity = calculateAffinity(c, startIndex, numCols);
        console.log(maxAffinity);
        console.log(grid[maxAffinity.row][maxAffinity.col].maxAffinity);
        if(maxAffinity.affinity > grid[maxAffinity.row][maxAffinity.col].maxAffinity && !grid[maxAffinity.row][maxAffinity.col].filled) {
          grid[maxAffinity.row][maxAffinity.col].maxAffinity = maxAffinity.affinity; //set maxAffinity
          grid[maxAffinity.row][maxAffinity.col].course = c;
          c.xPos = i;
          c.yPos = j;
        }
      }
  }
  //lock in grid positions and classes
  for(var i = startIndex; i < numCols; i++) {
    for(var j = 0; j < grid[i].length; j++) {
      if(grid[i][j].maxAffinity > 0 && !grid[i][j].filled) {
        grid[i][j].course.filled = true; //lock in class
        grid[i][j].filled = true; // lock in grid position
      }
    }
  }
  //check if any classes have prerequisites and are not locked in
  // console.log(allClasses[0]);
  resetClause = true;
  for(var i = startIndex; i < numCols; i++) {
    for(var j = 0; j < allClasses[i].length; j++) {
      let c = allClasses[i][j];
      if((c.prerequisites.length - c.externalClasses.length) > 0 && !c.filled) {
        // console.log(c);
        resetClause = false;
      }
    }
  }
}
  //at the end, fill all free grid places with not locked in classes
  var freeClasses = []
  for(var i = startIndex; i < numCols; i++) {
    for(var j = 0; j < allClasses[i].length; j++) {
      let c = allClasses[i][j];
      if(!c.filled) {
        // console.log(c.filled);
        freeClasses.push(c);
      }
    }
  }
  console.log(freeClasses);
  var k = 0;
  for(var i = startIndex; i < numCols; i++) {
    for(var j = 0; j < grid[i].length; j++) {
      if(!grid[i][j].filled) {
        grid[i][j].course = freeClasses[k];
        grid[i][j].filled = true;
        freeClasses[k].filled = true;
        k++;
      }
    }
  }
}

function calculateAffinity(c, startIndex, numCols) { //takes in class, returns Affinity object
  let max = 0;
  let maxRow = 0;
  let maxCol = 0;
  for(var i = startIndex; i < numCols; i++) { //iterates through grid.
    for(var j = 0; j < grid[i].length; j++) {
      let verticalAffinity = 0;
      let horizontalAffinity = 0;
      let totalAffinity = 0;

      //outgoing
      if(c.outgoingClasses.length > 0) {
      horizontalAffinity += (1000*c.outgoingClasses.length) - (100*(numCols-i))//prefer pushed to right
      var middle = Math.floor((grid[i].length)/2) - 1;
      verticalAffinity += (1000*c.outgoingClasses.length) - (100*(Math.abs(j - middle)))//prefer middle vertically
    }

    //regular prerequisite
    if(c.prerequisiteClasses.length > 0) {
      //xPos saves row, yPos saves column.
      horizontalAffinity += (1000*c.prerequisiteClasses.length) - (100*(i)) //prefer left
      let preferedIndex = findPreferedPrereq(c, i) //this function will find the prefered prereq to gravitate towards, returning a column index.
      verticalAffinity += (1000*c.prerequisiteClasses.length) - (100*(Math.abs(preferedIndex - j)));
    }

    //same level prerequisites
    if(c.corequisiteClasses.length > 0) {
      //horizontally prefer to be in same column as prerequisite
      //vertically prefer to be very close to prerequisite (add a lot of value to this)
      let index = findLockedPrereq(c) //this function will find a prereq that is locked and return an array [row,col] or return [-1,-1];
      // console.log(index);
      if(index[0] == -1) { //class cannot be locked in yet, make affinity 0
        horizontalAffinity = 0;
        verticalAffinity = 0;
      } else { //class may be locked in
        horizontalAffinity += 3000 - (1000*(Math.abs(index[0]-i)));
        verticalAffinity += 3000 - (2000*(Math.abs(index[1]-j)));
      }
    }
    totalAffinity = horizontalAffinity * verticalAffinity;
    if(totalAffinity > max && !grid[i][j].filled) {
      max = totalAffinity;
      maxRow = i;
      maxCol = j;
    }
    }
  }
  var ans = new Affinity(max, maxRow, maxCol);
  return ans;
}

function findPreferedPrereq(c, index) {
  var maxCol = -10000;
  var max = -10000;
  //prefered prereq is the one closest to the edge and closest to middle (all will be locked in at this point)
  for(var i = 0; i < c.prerequisiteClasses.length; i++) {
    var score = 1000;
    score -= (100*(index - c.prerequisiteClasses[i].xPos)) //decreases based on difference b/w row of current class and row of prerequisite
    console.log(c.prerequisiteClasses[i])
    score -= (100*(Math.abs(c.prerequisiteClasses[i].yPos - (Math.floor(grid[c.prerequisiteClasses[i].xPos].length/2))))); //(Math.floor(grid[c.prerequisiteClasses[i].row].length/2)) finds difference b/w the col position of prerequisite and the middle position
    if(score > max) {
      max = score;
      maxCol = c.prerequisiteClasses[i].yPos;
    }
  }
  return maxCol;
}

function findLockedPrereq(c) { //just select the first one idc this program is draining my life force
  for(var i = 0; i < c.corequisiteClasses.length; i++) {
    if(c.corequisiteClasses[i].filled) {
      return [c.corequisiteClasses[i].xPos, c.corequisiteClasses[i].yPos];
    }
  }
  return [-1,-1];
}

function findPrereqs(classes) {
  for(var i = 0; i < classes.length; i++) {
    for(var j = 0; j < classes[i].length; j++) {
      var c1 = classes[i][j];
      for(var k = 0; k < c1.prerequisites.length; k++) { //iterates through prerequisites
        var prerequisite = c1.prerequisites[k];
        if(prerequisite.department.toUpperCase() != dept) { //external prerequisite
          let c = new Class(prerequisite.department, "", prerequisite.number, []);
          c1.externalClasses.push(c); //adds external prerequisite to course array.
        } else { //either same level or different level prerequisite.
          let c = searchForPrereq(prerequisite.number);
          if(c.number == 0) {
            continue;
          }
          if((""+prerequisite.number).charAt(0) == (""+c1.number).charAt(0)) { //corequisite
            c1.corequisiteClasses.push(c);
          } else {
            c1.prerequisiteClasses.push(c);
          }
        }
      }
    }
  }
  allClasses = classes;
}

function searchForPrereq(number) {
  for(var i = 0; i < allClasses.length; i++) {
    for(var j = 0; j < allClasses[i].length; j++) {
      if(allClasses[i][j].number == number) {
        return allClasses[i][j];
      }
    }
  }
  let fakeClass = new Class("","",0,[]);
  return fakeClass;
}

function findOutgoing(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      for(var k = 0; k < arr[i][j].prerequisites.length; k++) {
        let prereq = arr[i][j].prerequisites[k];
        if(prereq.department == dept) {
          console.log(prereq);
          let index = parseInt(("" + prereq.number).substring(0,1));
          // console.log(arr[i][j].name + " - " + prereq.number + " - " + index);
          appendOutgoing(index-1, prereq.number);
        }
      }
    }
  }
}

function appendOutgoing(index, num) {
  console.log(index);
  for(var i = 0; i < allClasses[index].length; i++) {
    let c = allClasses[index][i];
    if(c.number == num) {
      allClasses[index][i].outgoingClasses.push(c);
    }
  }
}


function parseFromArray(classes) {
//Example: CSCI 1103 - Introduction to Computer Programming in Java|(4 cr; Student Option; offered Every Fall)
  for(var i = 0; i < classes.length; i++) {
    let course = classes[i].split("|")[0]; //CSCI 1103 - Introduction to Computer Programming in Java
    let prereqs = classes[i].split("|")[1]; //(4 cr; Student Option; offered Every Fall)
    let name = course.split(" - ")[0]; //CSCI 1103
    let description = course.split(" - ")[1]; //Introduction to Computer Programming in Java
    let number = removeLetters(name);
    if(description.toUpperCase().includes("HONORS") || number<1000) {
      continue;
    }
    let index = (Math.floor(number/1000)) - 1;
    var prereqs2 = [];

    let split = prereqs.split(";")
    for(var j = 1; j < split.length; j++) {
      if((split[j].substring(1,7)) == ("Prereq")) {
        var text = (replaceCommaWithAnd(split[j])).substring(8);
        console.log(name + ": " + text);
        text = recursivelyParse(text);
        text = recursivelyParse(text,prereqs2);
        splitByAnd = splitByChar(text, ' and ');
        assignIndices(prereqs2,splitByAnd);
        console.log(prereqs2);
      }
  }
  let c = new Class(dept,description,number,prereqs2);
  (allClasses[index]).push(c);
  }
}

function recursivelyParse(str, prereqs=[], dotted="#000000",depth=0) {
    // str is string, dotted is boolean to represent if line should be dotted
    // if an "and" exists, split by and. Then merge the various splits.
    var and  = splitByChar(str,' and ');
    var or = splitByChar(str, ' or ');
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
      var color1 = genRandomColor();
      var first = recursivelyParse(or[0],prereqs,color1,depth);
      var ans = "";
      if(first != "") {
        ans += first;
      }
      for(var i = 1; i < or.length; i++) {
        var parsed = recursivelyParse(or[i],prereqs,color1,depth);
        if(parsed != "") {
        ans += ' or ' + parsed;
        }
      }
      if(first == "") {
        ans = ans.substring(4);
      }
      return ans;

    } else if(str.includes('[') || (str.includes('(') && !str.includes("or allowed") && !str.includes("lecture") && !str.includes("lab")) ) { // if a bracket exists, split by bracket (exclude certain edge cases)
      depth++;
      if(checkForCorrectness(str)) { //handles an edge case
        return "";
      }
      return '[' + recursivelyParse(parseBrackets(str),prereqs,dotted,depth) + ']';

    } else {// base case: string cannot be split by and, or, or bracket. check if a prerequisite can be parsed, if so return the prerequisite, if not return empty string
      var prereq = parsePrerequisites(str, dotted);
      // console.log(prereq);
      if(prereq.number >= 1000 && !duplicatePrereq(prereq, prereqs)) {
        prereqs.push(prereq);
        return prereq.department + " " + prereq.number;
      }
      return "";
    }
}

function genRandomColor() {
  let colorSet = ["#FFFF00", "#1CE6FF", "#FF34FF", "#FF4A46", "#008941", "#006FA6", "#A30059",
"#FFDBE5", "#7A4900", "#0000A6", "#63FFAC", "#B79762", "#004D43", "#8FB0FF", "#997D87",
"#5A0007", "#809693", "#FEFFE6", "#1B4400", "#4FC601", "#3B5DFF", "#4A3B53", "#FF2F80",
"#61615A", "#BA0900", "#6B7900", "#00C2A0", "#FFAA92", "#FF90C9", "#B903AA", "#D16100",
"#DDEFFF", "#000035", "#7B4F4B", "#A1C299", "#300018", "#0AA6D8", "#013349", "#00846F",
"#372101", "#FFB500", "#C2FFED", "#A079BF", "#CC0744", "#C0B9B2", "#C2FF99", "#001E09",
"#00489C", "#6F0062", "#0CBD66", "#EEC3FF", "#456D75", "#B77B68", "#7A87A1", "#788D66",
"#885578", "#FAD09F", "#FF8A9A", "#D157A0", "#BEC459", "#456648", "#0086ED", "#886F4C",
"#34362D", "#B4A8BD", "#00A6AA", "#452C2C", "#636375", "#A3C8C9", "#FF913F", "#938A81",
"#575329", "#00FECF", "#B05B6F", "#8CD0FF", "#3B9700", "#04F757", "#C8A1A1", "#1E6E00",
"#7900D7", "#A77500", "#6367A9", "#A05837", "#6B002C", "#772600", "#D790FF", "#9B9700",
"#549E79", "#FFF69F", "#201625", "#72418F", "#BC23FF", "#99ADC0", "#3A2465", "#922329",
"#5B4534", "#FDE8DC", "#404E55", "#0089A3", "#CB7E98", "#A4E804", "#324E72", "#6A3A4C"]

        var z = Math.floor(Math.random() * colorSet.length);
        var color1 = colorSet[z];
        return color1;
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
      if(Math.floor(num/1000) > 4) {
        return prereq;
      }
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
      if(Math.floor(num/1000) > 4) {
        return prereq;
      }
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
      if(Math.floor(num/1000) > 4) {
        return prereq;
      }
      prereq = new Prerequisite(department, num, dotted);
      return prereq;
    }
  }

  for(var i = 0; i < text.length - 3; i++) {
    if(parseInt(text.substring(i,i+4)) >= 1000) {
     var num = parseInt(text.substring(i, i+4));
     if(Math.floor(num/1000) > 4) {
       return prereq;
     }
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

function duplicatePrereq(prereq, prereqs) {
  for(var i = 0; i < prereqs.length; i++) {
    if(prereq.number == prereqs[i].number) {
      return true;
    }
  }
  return false;
}

function checkForCorrectness(str) {
  return (str.includes("] [") || str.includes("]  ["))
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

function fixArray() { //cuts array into pieces (this is my last resort)
  newClasses = [];
  for(var i = 0; i < allClasses.length; i++) {
    if(allClasses[i].length > 0 && allClasses[i].length <= 9) {
      newClasses.push(allClasses[i]);
    }
    if(allClasses[i].length > 9) {
      var startIndex = 0;
      var length = allClasses[i].length;
      numNewArrays = Math.ceil(length/9);
      colLengths.push(numNewArrays);
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
    } else {
      colLengths.push(1);
    }
  }
  return newClasses;
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
    cHeight = ((max+2)*275+rHeight) + 475;
    return max;
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
      heightOffset = rHeight/2*j+(275)*j;
      if(j >= start && j < end) {
        if(i%2==0) {
        var g = new Grid((200+rWidth/2) + ((rWidth/2 * (i*2)) + (300*i)), s + heightOffset, col[k]);
      } else {
        var g = new Grid((200+rWidth/2) + ((rWidth/2 * (i*2)) + (300*i)), s + heightOffset+rHeight, col[k]);
      }
      // col[k].xPos = g.xPos;
      // col[k].yPos = g.yPos;
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
      for(var k = 0; k < grid[i][j].course.prerequisites.length; k++) {
        var prereq =  grid[i][j].course.prerequisites[k];

        if(prereq.department.toUpperCase() == dept) {
          searchPrereqs(grid[i][j].xPos, grid[i][j].yPos, prereq.number, grid[i][j].course.number, prereq.dotted);
        }
      }
      // console.log(grid[i][j].course.prerequisites)

  }

  }
  for(var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[i].length; j++) {
      var txt = grid[i][j].course.name + '\n' + grid[i][j].course.department + ' ' + String(grid[i][j].course.number);
      strokeWeight(5);
      rect(grid[i][j].xPos,grid[i][j].yPos, rWidth, rHeight);
      strokeWeight(0);
      text(txt,grid[i][j].xPos, grid[i][j].yPos, rWidth, rHeight);

      var index = Math.floor(grid[i][j].course.number/1000) - 1;
      let c = color(colors[index]);
      push();
      fill(c);
      strokeWeight(5);
      rect((200+rWidth/2) + ((rWidth/2 * (i*2)) + (300*i)), 175, rWidth, 75);
      textSize(30);
      pop();
      text(names[index], (200+rWidth/2) + ((rWidth/2 * (i*2)) + (300*i)), 175, rWidth, 75);
    }
  }
}

function searchPrereqs(x2, y2, num, currentNum, color) {
  console.log(color);
  var x1 = 0;
  var y1 = 0;
  for(var i = 0; i < grid.length; i++) {

    for(var j = 0; j < grid[i].length; j++) {
        var pre = grid[i][j];
        x1 = pre.xPos;
        y1 = pre.yPos;
        if(pre.course.number == num) {
          if(pre.xPos == x2) {
            // console.log(num + " is prereq");
            // console.log(currentNum);
            x1 = pre.xPos + rWidth/2;
            x2 = x2 + rWidth/2;
              if(pre.yPos < y2) {
                y1 = pre.yPos + rHeight;

              } else {
                y1 = pre.yPos;
                y2 = y2 + rHeight;
              }
          } else {
            y1 = pre.yPos + rHeight/2;
            y2 = y2 + rHeight/2;
            if(pre.xPos < x2) {
              x1 = pre.xPos + rWidth;
            } else {
              x2 = x2 + rWidth;
            }
          }
          push();
          // console.log(pre.course.prereq);
          stroke(color);
          strokeWeight(5);
          line(x1,y1,x2,y2);
          // circle(x1+5,y1,10);
          drawArrow(x1,x2,y1,y2);
          // drawGrid();
          pop();
        }
    }
}
}

function drawArrow(x1,x2,y1,y2) {
  var angle = atan2(y1 - y2, x1 - x2); //gets the angle of line
  translate(x2,y2)
  rotate(angle-HALF_PI);
  var offset = 16;
  fill(0);
  triangle(-offset*0.5, offset, offset*0.5, offset, 0, -offset/2); //draws the arrow point as a triangle
}


//x
var mathPrereqs = ['MATH 1001 - Excursions in Mathematics|(3 cr; Prereq-3 yrs high school math or placement exam or [grade of at least C- in PSTL 731 or 732]; Student Option; offered Every Fall & Spring)', 'MATH 1008 - Trigonometry|(2.67 cr; A-F or Audit; offered Every Fall, Spring & Summer)', 'MATH 1031 - College Algebra and Probability|(3 cr; Prereq-3 yrs high school math or satisfactory score on placement exam or grade of at least C- in [PSTL 731 or PSTL 732 or CI 0832]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1038 - College Algebra and Probability Submodule|(1 cr; Prereq-1051 or 1151 or 1155; A-F or Audit; offered Every Fall, Spring & Summer)', 'MATH 1040 - Topics in Mathematics|(1 cr; S-N only; offered Every Fall & Spring)', 'MATH 1042 - Mathematics of Design|(4 cr; Prereq-Satisfactory score on placement test or grade of at least C- in [1031 or 1051]; Student Option; offered Every Fall)', 'MATH 1051 - Precalculus I|(3 cr; Prereq-3 yrs of high school math or satisfactory score on placement test or grade of at least C- in [PSTL 731 or PSTL 732 or CI 0832]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1142 - Short Calculus|(4 cr; Prereq-Satisfactory score on placement test or grade of at least C- in [1031 or 1051]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1143 - Introduction to Advanced Mathematics|(4 cr; A-F or Audit; offered Periodic Fall)', 'MATH 1151 - Precalculus II|(3 cr; Prereq-Satisfactory score on placement exam or grade of at least C- in [1031 or 1051]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1155 - Intensive Precalculus|(5 cr; Prereq-3 yrs high school math or satisfactory score on placement exam or grade of at least C- in [PSTL 731 or PSTL 732]; Student Option; offered Every Fall & Spring)', 'MATH 1241 - Calculus and Dynamical Systems in Biology|(4 cr; Prereq-[4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]], CBS student; Student Option; offered Every Fall & Spring)', 'MATH 1271 - Calculus I|(4 cr; Prereq-4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1272 - Calculus II|(4 cr; Prereq-[1271 or equiv] with grade of at least C-; Student Option; offered Every Fall, Spring & Summer)', 'MATH 1281 - Calculus with Biological Emphasis I|(4 cr; Student Option; offered Every Fall)', 'MATH 1282 - Calculus With Biological Emphasis II|(4 cr; Student Option; offered Every Spring)', 'MATH 1371 - CSE Calculus I|(4 cr; Prereq-CSE or pre-bioprod concurrent registration is required (or allowed) in  biosys engn (PRE), background in [precalculus, geometry, visualization of functions/graphs], instr consent; familiarity with graphing calculators recommended; Student Option; offered Every Fall & Spring)', 'MATH 1372 - CSE Calculus II|(4 cr; Prereq-Grade of at least C- in [1371 or equiv], CSE or pre-Bioprod/Biosys Engr; Student Option; offered Every Spring)', 'MATH 1473 - Honors Calculus IIA for Secondary Students|(2 cr; Student Option; offered Every Fall)', 'MATH 1474 - Honors Calculus IIB for Secondary Students|(3 cr; Prereq-1473H; Student Option; offered Every Spring)', 'MATH 1571H - Honors Calculus I|(4 cr; Prereq-Honors student and permission of University Honors Program; A-F only; offered Every Fall)', 'MATH 1572H - Honors Calculus II|(4 cr; Prereq-1571H, honors student, permission of University Honors Program; A-F only; offered Every Spring)', 'MATH 2066 - Elementary Differential Equations|(1 cr [max 4]; Student Option; may be repeated for 4 credits)', 'MATH 2142 - Elementary Linear Algebra|(4 cr; Student Option; offered Every Fall & Spring)', 'MATH 2241 - Mathematical Modeling of Biological Systems|(3 cr; Prereq-[1241 or 1271 or 1371] w/grade of at least C-; Student Option; offered Every Fall & Spring; may be repeated for 4 credits)', 'MATH 2243 - Linear Algebra and Differential Equations|(4 cr; Prereq-[1272 or 1282 or 1372 or 1572] w/grade of at least C-; Student Option; offered Every Fall, Spring & Summer)', 'MATH 2263 - Multivariable Calculus|(4 cr; Prereq-[1272 or 1372 or 1572] w/grade of at least C-; Student Option; offered Every Fall, Spring & Summer)', 'MATH 2373 - CSE Linear Algebra and Differential Equations|(4 cr; Prereq-[1272 or 1282 or 1372 or 1572] w/grade of at least C-, CSE or pre-Bio Prod/Biosys Engr; Student Option; offered Every Fall & Spring)', 'MATH 2374 - CSE Multivariable Calculus and Vector Analysis|(4 cr; Prereq-[1272 or 1282 or 1372 or 1572] w/grade of at least C-, CSE or pre-Bioprod/Biosys Engr; Student Option; offered Every Fall & Spring)', 'MATH 2472 - Honors Calculus IIIA for Secondary Students|(3 cr; Student Option; offered Every Fall)', 'MATH 2473 - Honors Calculus IIIB for Secondary Students|(3 cr; Student Option; offered Every Spring)', 'MATH 2474 - Advanced Topics for Secondary Students|(3 cr; Prereq-2473H; Student Option; offered Every Spring)', 'MATH 2573H - Honors Calculus III|(4 cr; Prereq-Math 1572H or Math 2574H, honors student and permission of University Honors Program; A-F only; offered Every Fall)', 'MATH 2574H - Honors Calculus IV|(4 cr; Prereq-Math 1572H or Math 2573H, honors student and permission of University Honors Program; A-F only; offered Every Spring)', 'MATH 2999 - Special Exam|(5 cr; Student Option)', 'MATH 3283W - Sequences, Series, and Foundations: Writing Intensive|(4 cr; Prereq-[concurrent registration is required (or allowed) in 2243 or concurrent registration is required (or allowed) in 2263 or concurrent registration is required (or allowed) in 2373 or concurrent registration is required (or allowed) in 2374] w/grade of at least C-; Student Option; offered Every Fall & Spring)', 'MATH 3584H - Honors Calculus IV: Advanced Placement|(5 cr; Prereq-[2583 or equiv], IT Honors office approval; Student Option; offered Periodic Fall)', 'MATH 3592H - Honors Mathematics I|(5 cr; Prereq-dept consent; for students with mathematical talent; A-F only; offered Every Fall)', 'MATH 3593H - Honors Mathematics II|(5 cr; Prereq-3592H or instr consent; A-F or Audit; offered Every Spring)', 'MATH 4005 - Calculus Refresher|(4 cr; A-F or Audit)', 'MATH 4065 - Theory of Interest|(4 cr; Prereq-1272 or 1372 or 1572; A-F only; offered Every Fall & Spring)', 'MATH 4067W - Actuarial Mathematics in Practice|(3 cr; Prereq-4065, ACCT 2050, ECON 1101, ECON 1102; A-F only; offered Every Spring)', 'MATH 4151 - Elementary Set Theory|(3 cr; Prereq-One soph math course or instr consent; Student Option; offered Every Fall)', 'MATH 4152 - Elementary Mathematical Logic|(3 cr; Prereq-one soph math course or instr consent; Student Option; offered Every Spring)', 'MATH 4242 - Applied Linear Algebra|(4 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Fall, Spring & Summer)', 'MATH 4281 - Introduction to Modern Algebra|(4 cr; Prereq-2283 or 3283 or instr consent; Student Option; offered Periodic Fall)', 'MATH 4428 - Mathematical Modeling|(4 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Spring)', 'MATH 4512 - Differential Equations with Applications|(3 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Fall & Spring)', 'MATH 4567 - Applied Fourier Analysis|(4 cr; Prereq-2243 or 2373 or 2573; Student Option; offered Every Fall & Spring)', 'MATH 4603 - Advanced Calculus I|(4 cr; Prereq-[[2243 or 2373], [2263 or 2374]] or 2574 or instr consent; Student Option; offered Every Fall, Spring & Summer)', 'MATH 4604 - Advanced Calculus II|(4 cr; Prereq-4603 or 5615 or instr consent; Student Option; offered Every Spring)', 'MATH 4653 - Elementary Probability|(4 cr; Prereq-[2263 or 2374 or 2573]; [2283 or 2574 or 3283] recommended; Student Option; offered Every Fall & Spring)', 'MATH 4707 - Introduction to Combinatorics and Graph Theory|(4 cr; Prereq-2243, [2283 or 3283]; Student Option; offered Every Fall & Spring)', 'MATH 4990 - Topics in Mathematics|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4991 - Independent Study|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4992 - Directed Reading|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4993 - Directed Study|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 12 credits; may be repeated 12 times)', 'MATH 4995 - Senior Project for CLA|(1 cr; Prereq-2 sem of upper div math, dept consent; A-F or Audit; offered Every Fall, Spring & Summer)', 'MATH 4997W - Senior project (Writing Intensive)|(1 cr; Prereq-2 sem upper div math, dept consent; A-F or Audit; offered Every Fall, Spring & Summer; may be repeated for 2 credits; may be repeated 2 times)', 'MATH 5067 - Actuarial Mathematics I|(4 cr; Prereq-4065, [one sem [4xxx or 5xxx] [probability or statistics] course]; Student Option; offered Every Fall)', 'MATH 5068 - Actuarial Mathematics II|(4 cr; Prereq-5067; Student Option; offered Every Spring)', 'MATH 5075 - Mathematics of Options, Futures, and Derivative Securities I|(4 cr; Prereq-Two yrs calculus, basic computer skills; Student Option; offered Every Fall)', 'MATH 5076 - Mathematics of Options, Futures, and Derivative Securities II|(4 cr; Prereq-5075; A-F or Audit; offered Every Spring)', 'MATH 5165 - Mathematical Logic I|(4 cr; Prereq-2283 or 3283 or Phil 5201 or CSci course in theory of algorithms or instr consent; Student Option; offered Every Fall)', 'MATH 5248 - Cryptology and Number Theory|(4 cr; Prereq-2 sems soph math; Student Option; offered Every Fall)', 'MATH 5251 - Error-Correcting Codes, Finite Fields, Algebraic Curves|(4 cr; Prereq-2 sems soph math; Student Option; offered Every Spring)', 'MATH 5285H - Honors: Fundamental Structures of Algebra I|(4 cr; Prereq-[2243 or 2373 or 2573], [2283 or 2574 or 3283]; Student Option; offered Every Fall)', 'MATH 5286H - Honors: Fundamental Structures of Algebra II|(4 cr; Prereq-5285; Student Option; offered Every Fall & Spring)', 'MATH 5335 - Geometry I|(4 cr; Prereq-[2243 or 2373 or 2573], [concurrent registration is required (or allowed) in  2263 or concurrent registration is required (or allowed) in  2374 or concurrent registration is required (or allowed) in  2574]; Student Option; offered Every Fall)', 'MATH 5345H - Honors: Introduction to Topology|(4 cr; Prereq-[2263 or 2374 or 2573], [concurrent registration is required (or allowed) in 2283 or concurrent registration is required (or allowed) in 2574 or concurrent registration is required (or allowed) in 3283]; A-F only; offered Every Fall)', 'MATH 5378 - Differential Geometry|(4 cr; Prereq-[2263 or 2374 or 2573], [2243 or 2373 or 2574]; [2283 or 3283] recommended]; Student Option; offered Every Spring)', 'MATH 5385 - Introduction to Computational Algebraic Geometry|(4 cr; Prereq-[2263 or 2374 or 2573], [2243 or 2373 or 2574]; Student Option; offered Every Fall)', 'MATH 5445 - Mathematical Analysis of Biological Networks|(4 cr; Prereq-Linear algebra, differential equations; Student Option; offered Every Spring)', 'MATH 5447 - Theoretical Neuroscience|(4 cr; Prereq-2243 or 2373 or 2574; Student Option; offered Every Fall)', 'MATH 5467 - Introduction to the Mathematics of Image and Data Analysis|(4 cr; Prereq-[2243 or 2373 or 2573], [2283 or 2574 or 3283 or instr consent]; [[2263 or 2374], 4567] recommended; Student Option; offered Every Spring)', 'MATH 5485 - Introduction to Numerical Methods I|(4 cr; Prereq-[2243 or 2373 or 2573], familiarity with some programming language; Student Option; offered Every Fall)', 'MATH 5486 - Introduction To Numerical Methods II|(4 cr; Prereq-5485; Student Option; offered Every Spring)', 'MATH 5490 - Topics in Applied Mathematics|(4 cr; Student Option; offered Periodic Fall & Spring; may be repeated for 12 credits; may be repeated 3 times)', 'MATH 5525 - Introduction to Ordinary Differential Equations|(4 cr; Prereq-[2243 or 2373 or 2573], [2283 or 2574 or 3283]; Student Option; offered Periodic Fall & Spring)', 'MATH 5535 - Dynamical Systems and Chaos|(4 cr; Prereq-[2243 or 2373 or 2573], [2263 or 2374 or 2574]; Student Option; offered Every Fall & Spring)', 'MATH 5583 - Complex Analysis|(4 cr; Prereq-2 sems soph math [including [2263 or 2374 or 2573], [2283 or 3283]] recommended; Student Option; offered Every Fall, Spring & Summer)', 'MATH 5587 - Elementary Partial Differential Equations I|(4 cr; Prereq-[2243 or 2373 or 2573], [2263 or 2374 or 2574]; Student Option; offered Every Fall)', 'MATH 5588 - Elementary Partial Differential Equations II|(4 cr; Prereq-[[2243 or 2373 or 2573], [2263 or 2374 or 2574], 5587] or instr consent; A-F or Audit; offered Every Spring)', 'MATH 5615H - Honors: Introduction to Analysis I|(4 cr; Prereq-[[2243 or 2373], [2263 or 2374], [2283 or 3283]] or 2574; Student Option; offered Every Fall)', 'MATH 5616H - Honors: Introduction to Analysis II|(4 cr; Prereq-5615; Student Option; offered Every Spring)', 'MATH 5651 - Basic Theory of Probability and Statistics|(4 cr; Prereq-[2263 or 2374 or 2573], [2243 or 2373]; [2283 or 2574 or 3283] recommended.; Student Option; offered Every Fall & Spring)', 'MATH 5652 - Introduction to Stochastic Processes|(4 cr; Prereq-5651 or Stat 5101; Student Option; offered Every Fall & Spring)', 'MATH 5654 - Prediction and Filtering|(4 cr; Prereq-5651 or Stat 5101; Student Option; offered Every Spring)', 'MATH 5705 - Enumerative Combinatorics|(4 cr; Prereq-[2243 or 2373 or 2573], [2263 or 2283 or 2374 or 2574 or 3283]; Student Option; offered Every Fall & Spring)', 'MATH 5707 - Graph Theory and Non-enumerative Combinatorics|(4 cr; Prereq-[2243 or 2373 or 2573], [2263 or 2374 or 2574]; [2283 or 3283 or experience in writing proofs] highly recommended; Credit will not be granted if credit has been received for: 4707; Student Option; offered Every Fall & Spring)', 'MATH 5711 - Linear Programming and Combinatorial Optimization|(4 cr; Prereq-2 sems soph math [including 2243 or 2373 or 2573]; Student Option; offered Every Fall & Spring)', 'MATH 5900 - Tutorial in Advanced Mathematics|(1 cr [max 6]; A-F or Audit; offered Every Fall, Spring & Summer; may be repeated for 120 credits; may be repeated 20 times)', 'MATH 5990 - Topics in Mathematics|(3 cr [max 4]; Student Option; offered Periodic Fall & Spring; may be repeated for 12 credits; may be repeated 3 times)'];

var chemPrereqs = ['CHEM 1015 - Introductory Chemistry: Lecture|(3 cr; Prereq-[High school chemistry or equiv], two yrs high school math, not passed chem placement exam, high school physics recommended;\n\nStudents who will go on to take CHEM 1061/1065 should take CHEM 1015 only. Students who will NOT be continuing on to CHEM 1061/1065 and need to fulfill the Physical Science/Lab core requirement need take the 1-credit lab course CHEM 1017 either concurrently or consecutively. This course will NOT fulfill the Physical Science/Lab core requirement unless the CHEM 1017 lab course is completed either concurrently or consecutively.; Student Option; offered Every Fall, Spring & Summer)', 'CHEM 1016 - Exploring Chemical Thinking|(1 cr; S-N only; offered Every Fall & Spring; may be repeated for 2 credits; may be repeated 2 times)', 'CHEM 1017 - Introductory Chemistry: Laboratory|(1 cr; Prereq-[1015 or concurrent registration is required (or allowed) in 1015], dept consent; credit will not be granted if credit received for: 1011; CHEM 1017 is a 1-credit lab-only course. This course is not intended for students who are planning to take CHEM 1061/1065. Intended only for students who need the course to fulfill the Physical Science/Lab requirement, and are taking CHEM 1015 either concurrently or consecutively. This course will NOT fulfill the Physical Science/Lab core requirement, unless CHEM 1015 is completed either concurrently or consecutively.; meets Lib Ed req of Physical Sciences); A-F only; offered Every Fall, Spring & Summer)', 'CHEM 1061 - Chemical Principles I|(3 cr; Student Option; offered Every Fall, Spring & Summer)', 'CHEM 1062 - Chemical Principles II|(3 cr; Prereq-Grade of at least C- in 1061 or equiv, concurrent registration is required (or allowed) in 1066; registration for 1066 must precede registration for 1062; Student Option; offered Every Fall, Spring & Summer)', 'CHEM 1065 - Chemical Principles I Laboratory|(1 cr; Prereq-concurrent registration is required (or allowed) in 1061; A-F only; offered Every Fall, Spring & Summer)', 'CHEM 1066 - Chemical Principles II Laboratory|(1 cr; Prereq-concurrent registration is required (or allowed) in 1062; A-F only; offered Every Fall, Spring & Summer)', 'CHEM 1071H - Honors Chemistry I|(3 cr; Prereq-Honors student, permission of University Honors Program, concurrent registration is required (or allowed) in 1075H; registration for 1075H must precede registration for 1071H; A-F only; offered Every Fall)', 'CHEM 1072H - Honors Chemistry II|(3 cr; Prereq-1071H, concurrent registration is required (or allowed) in 1076H, honors student, registration for 1076H must precede registration for 1072H; A-F only; offered Every Spring)', 'CHEM 1075H - Honors Chemistry I Laboratory|(1 cr; A-F only; offered Every Fall)', 'CHEM 1076H - Honors Chemistry II Laboratory|(1 cr; Prereq-concurrent registration is required (or allowed) in 1072H; A-F only; offered Every Spring)', 'CHEM 1081 - Chemistry for the Life Sciences I|(3 cr; Prereq-grade of a C- or better in CHEM 1015 or passing chemistry placement exam. This course is recommended for CBS majors.; Student Option; offered Every Fall)', 'CHEM 1082 - Chemistry for the Life Sciences II|(3 cr; Prereq-grade of a C- or better in CHEM 1081 (lecture) and CHEM 1065 (lab); concurrent registration is required (or allowed) in 1086; registration for 1086 must precede registration for 1082. This course is recommended for CBS majors. ; Student Option; offered Every Spring)', 'CHEM 1086 - Chemistry for the Life Sciences II Laboratory|(1 cr; Prereq-grade of a C- or better in CHEM 1081 (lecture) and CHEM 1065 (lab). Concurrent registration in CHEM 1082 is required. This course is recommended for CBS majors.; Student Option; offered Every Spring)', 'CHEM 1901 - Ideas Worth Spreading: Digging into TED Talks|(3 cr; Student Option; offered Periodic Fall & Spring; may be repeated for 6 credits; may be repeated 2 times)', 'CHEM 1903 - Chemistry in the Kitchen|(3 cr; Student Option; offered Periodic Fall & Spring; may be repeated for 6 credits; may be repeated 2 times)', 'CHEM 1911W - Quantum Mechanics and Popular Philosophy|(2 cr; Student Option; offered Periodic Fall & Spring; may be repeated for 4 credits)', 'CHEM 1913 - The Art in Science|(2 cr; Student Option; offered Periodic Fall & Spring; may be repeated for 4 credits; may be repeated 2 times)', 'CHEM 2081 - Chemistry for the Life Sciences III|(3 cr; Prereq-grade of a C- or better in CHEM 1082 (lecture) and CHEM 1086 (lab). This course is recommended for CBS majors.; Student Option; offered Every Fall)', 'CHEM 2085 - Chemistry for the Life Sciences III Laboratory|(2 cr; Prereq-grade of a C- or better in CHEM 1082 (lecture) and CHEM 1086 (lab). Concurrent registration in CHEM 2081 is required. This course is recommended for CBS majors.; Student Option; offered Every Fall)', 'CHEM 2094 - Directed Research|(1 cr [max 3]; Prereq-instr consent; Student Option; offered Every Fall, Spring & Summer; may be repeated for 3 credits)', 'CHEM 2301 - Organic Chemistry I|(3 cr; Prereq-C- or better in 1062/1066 or 1072H/1076H ; Student Option; offered Every Fall, Spring & Summer)', 'CHEM 2302 - Organic Chemistry II|(3 cr; Prereq-Grade of at least C- in 2301; Student Option; offered Every Fall, Spring & Summer)', 'CHEM 2311 - Organic Lab|(4 cr; Prereq-Grade of at least C- in [2302] or [concurrent registration is required (or allowed) in 2302; Student Option; offered Every Fall, Spring & Summer)', 'CHEM 2312H - Honors Organic Lab|(5 cr; Prereq-[2301 or concurrent registration is required (or allowed) in 2301], [Chem or ChemE or BioC] major, instr consent; A-F only; offered Every Fall)', 'CHEM 2331H - Honors Elementary Organic Chemistry I|(3 cr; Prereq-At least B+ in 1072H, UHP student; A-F only; offered Every Fall)', 'CHEM 2332H - Honors Elementary Organic Chemistry II|(3 cr; Prereq-At least C- in 2331H, UHP student; A-F only; offered Every Spring)', 'CHEM 2910 - Special Topics in Chemistry|(1 cr; Prereq-1 sem 1xxx chemistry or instr consent; S-N or Audit; offered Every Fall; may be repeated for 6 credits; may be repeated 6 times)', 'CHEM 2920 - Special Topics in Chemistry|(1 cr; Prereq-1 sem 1xxx chemistry or instr consent; S-N or Audit; offered Every Spring; may be repeated for 6 credits; may be repeated 6 times)', 'CHEM 3101 - Introductory Analytical Chemistry Lecture|(3 cr; Prereq-1062/1066 or equiv; Student Option; offered Every Fall, Spring & Summer)', 'CHEM 3111 - Introductory Analytical Chemistry Lab|(2 cr; Prereq-3101 or concurrent registration is required (or allowed) in 3101; Student Option; offered Every Fall & Summer)', 'CHEM 3121 - Process Analytical Chemistry|(3 cr; Prereq-[2302 or concurrent registration is required (or allowed) in 2302], [4501 or concurrent registration is required (or allowed) in 4501], CSE student; A-F or Audit; offered Every Spring)', 'CHEM 4001 - Chemistry of Biomass and Biomass Conversion to Fuels and Products|(4 cr; Prereq-2301, [jr or sr or instr consent]; A-F or Audit; offered Every Fall)', 'CHEM 4011 - Mechanisms of Chemical Reactions|(3 cr; Prereq-[2302, 4501] or equiv; Student Option; offered Every Fall)', 'CHEM 4021 - Computational Chemistry|(3 cr; Prereq-[4502 or equiv], instr consent; Student Option; offered Every Spring)', 'CHEM 4066 - Chemistry of Industry|(3 cr; Prereq-Chem sr or grad student or instr consent; Student Option; offered Every Spring)', 'CHEM 4094W - Directed Research|(1 cr [max 5]; Prereq-Any 3xxx or 4xxx chem course, instr consent; Student Option; offered Every Fall, Spring & Summer; may be repeated for 30 credits; may be repeated 6 times)', 'CHEM 4101 - Modern Instrumental Methods of Chemical Analysis|(3 cr; Prereq-2101, 2111; A-F or Audit; offered Every Spring)', 'CHEM 4111W - Modern Instrumental Methods of Chemical Analysis Lab|(2 cr; Prereq-4101 or concurrent registration is required (or allowed) ; A-F or Audit; offered Every Spring)', 'CHEM 4201 - Materials Chemistry|(3 cr; Prereq-[[4502 or equiv], 4701] or instr consent; Student Option; offered Every Fall)', 'CHEM 4214 - Polymers|(3 cr; Prereq-[MATS 3011, [CHEN 3101 or CHEN 4101 or MATS 4001], [upper div MatS or ChEn or CHEM]] or instr consent; A-F or Audit; offered Every Spring)', 'CHEM 4221 - Introduction to Polymer Chemistry|(3 cr; Prereq-[2302, 4501] or instr consent; Student Option; offered Every Fall)', 'CHEM 4223W - Polymer Laboratory|(2 cr; Prereq-4221 or 4214 or CHEN 4214 or MATS 4214 or instr consent; Student Option; offered Every Spring)', 'CHEM 4301 - Applied Surface and Colloid Science|(3 cr; Prereq-3043 or BMEN 2101 or CHEN 3101 or CHEM 4501 or instr consent; Student Option; offered Every Fall)', 'CHEM 4311W - Advanced Organic Chemistry Lab|(4 cr; Prereq-2311; Student Option; offered Every Fall & Spring)', 'CHEM 4321 - Organic Synthesis|(3 cr; Prereq-[2302 or equiv], 4501, instr consent; Student Option; offered Every Fall)', 'CHEM 4322 - Advanced Organic Chemistry|(3 cr; Prereq-[2302 or equiv], 4501, instr consent; Student Option; offered Every Spring)', 'CHEM 4352 - Physical Organic Chemistry|(3 cr; Prereq-4501, [4011 or 8011]; Student Option; offered Every Spring)', 'CHEM 4361 - Interpretation of Organic Spectra|(3 cr; Prereq-[2302 or equiv], 4501, instr consent; Student Option; offered Every Fall)', 'CHEM 4411 - Introduction to Chemical Biology|(3 cr; Prereq-[2302 or 2081 equiv]; Student Option; offered Every Fall)', 'CHEM 4412 - Chemical Biology of Enzymes|(3 cr; Prereq-[2302 or equiv], 4501; Student Option; offered Periodic Spring)', 'CHEM 4423W - Foundations of Chemical Biology Laboratory|(2 cr; Prereq-[2302 or 2304], 2311, 2111; Student Option; offered Every Fall & Spring)', 'CHEM 4501 - Introduction to Thermodynamics, Kinetics, and Statistical Mechanics|(3 cr; Prereq-[1062/1066 or 1071H/1075H], [MATH 2263 or concurrent registration is required (or allowed) in MATH 2263 or MATH 2374 or concurrent registration is required (or allowed) in MATH 2374], [PHYS 1302 or PHYS 1402V or PHYS 1502V]; A-F or Audit; offered Every Fall & Spring)', 'CHEM 4502 - Introduction to Quantum Mechanics and Spectroscopy|(3 cr; Prereq-[1062/1066 or 1072H/1076H of 1082/1086], [MATH 2263 or concurrent registration is required (or allowed) in MATH 2263 or MATH 2374 or concurrent registration is required (or allowed) in MATH 2374 or MATH 2243 or concurrent registration is required (or allowed) in MATH 2243 or MATH 2373 or concurrent registration is required (or allowed) in MATH 2373], [PHYS 1302 or PHYS 1402V or PHYS 1502V]; A-F or Audit; offered Every Fall & Spring)', 'CHEM 4511W - Advanced Physical Chemistry Lab|(3 cr; Prereq-4502, chemistry major; Student Option; offered Every Fall)', 'CHEM 4601 - Green Chemistry|(3 cr; Prereq-[2302 or 2081 or equiv]; Student Option; offered Every Spring)', 'CHEM 4701 - Inorganic Chemistry|(3 cr; Prereq-[2311 or concurrent registration is required (or allowed) in 2311], [4501 or concurrent registration is required (or allowed) in 4501 or 4502 or concurrent registration is required (or allowed) in 4502]; Student Option; offered Every Fall & Spring)', 'CHEM 4711W - Advanced Inorganic Chemistry Lab|(3 cr; Prereq-4701, chem major; A-F or Audit; offered Every Spring)', 'CHEM 4715 - Physical Inorganic Chemistry|(3 cr; Prereq-4701 or equiv, chem major or instr consent; Student Option; offered Every Fall)', 'CHEM 4725 - Organometallic Chemistry|(3 cr; Prereq-4701 or equiv, chem major or instr consent; Student Option; offered Periodic Fall)', 'CHEM 4735 - Bioinorganic Chemistry|(3 cr; Prereq-4701 or equiv, chem grad or instr consent; Student Option; offered Periodic Spring)', 'CHEM 4745 - Advanced Inorganic Chemistry|(3 cr; Prereq-4701, chem major, instr consent; Student Option; offered Periodic Spring)', 'CHEM 4894 - Directed Thesis|(1 cr [max 3]; Prereq-instr consent; A-F only; offered Every Fall, Spring & Summer; may be repeated for 6 credits; may be repeated 2 times)', 'CHEM 5210 - Materials Characterization|(4 cr; Prereq-grad student or instr consent; Student Option; offered Every Spring)', 'CHEM 5245 - Introduction to Drug Design|(3 cr; Prereq-2302 or equiv; A-F or Audit; offered Periodic Fall)', 'CHEM 5755 - X-Ray Crystallography|(4 cr; Prereq-Chem grad student or instr consent; A-F or Audit; offered Every Spring)'];

var espmPrereqs = ['ESPM 1001 - Freshmen Orientation to Environmental Sciences, Policy, and Management|(1 cr; A-F or Audit; offered Every Fall)', 'ESPM 1002 - Transfer Orientation Seminar|(1 cr; A-F or Audit; offered Every Fall & Spring)', 'ESPM 1011 - Issues in the Environment|(3 cr; Student Option; offered Every Fall & Spring)', 'ESPM 1012H - Environmental Science and Society|(3 cr; A-F only; offered Every Spring)', 'ESPM 1202 - People, Land, and Water: Systems Under Stress|(3 cr; A-F only; offered Every Spring)', 'ESPM 1425 - Introduction to Weather and Climate|(4 cr; Student Option; offered Every Fall & Spring)', 'ESPM 2021 - Environmental Sciences: Integrated Problem Solving|(3 cr; Prereq-1011, ESPM major; A-F or Audit; offered Periodic Fall & Spring)', 'ESPM 2401 - Environmental Education/Interpretation|(3 cr; Student Option; offered Every Fall)', 'ESPM 2886 - Pollinator Conservation: From Biodiversity to Food Production|(3 cr; A-F only; offered Every Spring)', 'ESPM 3000 - Seminar on Current Issues for ESPM|(1 cr; Prereq-Jr; A-F or Audit; offered Every Fall & Spring; may be repeated for 6 credits; may be repeated 6 times)', 'ESPM 3003 - Sustainable People, Sustainable Planet|(3 cr; Student Option; offered Every Fall)', 'ESPM 3011W - Ethics in Natural Resources|(3 cr; Student Option; offered Every Fall & Spring)', 'ESPM 3012 - Statistical Methods for Environmental Scientists and Managers|(4 cr; Prereq-Two yrs of high school math; A-F or Audit; offered Every Spring)', 'ESPM 3014 - Tribal and Indigenous Natural Resource Management|(3 cr; Student Option; offered Every Fall)', 'ESPM 3015 - Invasive Plants and Animals: Ecology and Management|(3 cr; Student Option; offered Fall Odd Year)', 'ESPM 3031 - Applied Global Positioning Systems for Geographic Information Systems|(3 cr; Prereq-Intro GIS course; A-F or Audit; offered Every Spring)', 'ESPM 3051 - Lands and Humans in World Cultures: the Past and the Present|(3 cr; A-F only; offered Every Spring)', 'ESPM 3108 - Ecology of Managed Systems|(3 cr; Prereq-BIOL 1001 or BIOL 1009 or HORT 1001 or instr consent; Student Option; offered Every Fall)', 'ESPM 3111 - Hydrology and Water Quality Field Methods|(3 cr; A-F or Audit; offered Every Spring)', 'ESPM 3131 - Environmental Physics|(3 cr; Prereq-Phys 1101; A-F or Audit; offered Every Spring)', 'ESPM 3202W - Environmental Conflict Management, Leadership, and Planning|(3 cr; A-F or Audit; offered Every Spring)', 'ESPM 3211 - Survey, Measurement, and Modeling for Environmental Analysis|(3 cr; Prereq-[MATH 1031 or MATH 1051], [3012 or FW 4001 or STAT 3011 or SOC 3811], computer competency; Student Option; offered Every Spring)', 'ESPM 3221 - Soil Conservation and Land-Use Management|(3 cr; Prereq-SOIL 2125 or instr consent; Student Option; offered Every Spring)', 'ESPM 3241W - Natural Resource and Environmental Policy|(3 cr; Student Option; offered Every Spring)', 'ESPM 3245 - Sustainable Land Use Planning and Policy|(3 cr; A-F or Audit; offered Every Fall)', 'ESPM 3251 - Natural Resources in Sustainable International Development|(3 cr; A-F or Audit; offered Every Fall)', 'ESPM 3261 - Economics and Natural Resources Management|(4 cr; Prereq-MATH 1031 or equivalent.; A-F or Audit; offered Every Spring)', 'ESPM 3271 - Environmental Policy, Law, and Human Behavior|(3 cr; A-F or Audit; offered Every Fall)', 'ESPM 3425 - Atmospheric Pollution: From Smog to Climate Change|(3 cr; Prereq-[CHEM 1061, PHYS 1101W, MATH 1142 or 1271] or equiv or instr consent; A-F only; offered Periodic Fall)', 'ESPM 3480 - Topics in Natural Resources|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 6 credits; may be repeated 6 times)', 'ESPM 3575 - Wetlands|(3 cr; Student Option; offered Every Spring)', 'ESPM 3601 - Sustainable Housing--Community, Environment, and Technology|(3 cr; A-F or Audit; offered Every Fall & Spring)', 'ESPM 3602 - Regulations and Corporate Environmental Management|(3 cr; Prereq-APEC 1101 or ECON 1101 or 3261W; A-F only; offered Every Spring)', 'ESPM 3603 - Environmental Life Cycle Analysis|(3 cr; A-F only; offered Every Fall)', 'ESPM 3604 - Environmental Management Systems and Strategy|(3 cr; A-F only; offered Every Fall)', 'ESPM 3605 - Recycling: Extending Raw Materials|(3 cr; A-F only; offered Every Spring)', 'ESPM 3607 - Natural Resources Consumption and Sustainability|(3 cr; A-F only; offered Every Spring)', 'ESPM 3612W - Soil and Environmental Biology|(4 cr; Prereq-Biol 1009 or equiv, Chem 1021 or equiv; SOIL 2125 recommended; Student Option; offered Every Fall)', 'ESPM 3777 - Climate Change- Physics, Myths, Mysteries, and Uncertainties|(3 cr; A-F only; offered Every Spring)', 'ESPM 3921 - Science and Critical Thinking for Understanding Our World|(3 cr; A-F only; offered Every Fall)', 'ESPM 3993 - Directed Study|(1 cr [max 4]; Prereq-Department consent, instructor consent, no more than 6 credits of directed study counts towards CFANS major requirements; Student Option; offered Every Fall, Spring & Summer; may be repeated for 6 credits; may be repeated 6 times)', 'ESPM 3994 - Directed Research|(1 cr [max 4]; Prereq-Department consent, instructor consent, no more than 6 credits of directed research counts towards CFANS major requirements.; Student Option; offered Every Fall, Spring & Summer; may be repeated for 6 credits; may be repeated 6 times)', 'ESPM 4004 - Sustainable Communities|(3 cr; A-F only; offered Every Spring)', 'ESPM 4021W - Problem Solving: Environmental Review|(4 cr; Prereq-ESPM 2021 and jr or sr; Student Option; offered Every Spring)', 'ESPM 4041W - Problem Solving for Environmental Change|(4 cr; A-F or Audit; offered Every Fall)', 'ESPM 4061W - Water Quality and Natural Resources|(3 cr; Student Option; offered Every Fall)', 'ESPM 4096 - Professional Experience Program: Internship|(1 cr; Prereq-CFANS undergrad, instr consent, completed internship contract; A-F only; offered Every Fall, Spring & Summer; may be repeated for 6 credits; may be repeated 6 times)', 'ESPM 4216 - Contaminant Hydrology|(3 cr; A-F or Audit; offered Every Fall)', 'ESPM 4242 - Methods for Environmental and Natural Resource Policy Analysis|(3 cr; A-F only; offered Fall Even Year)', 'ESPM 4256 - Natural Resource Law and the Management of Public Lands and Waters|(3 cr; Prereq-3241W or instructor consent; A-F or Audit; offered Spring Odd Year)', 'ESPM 4295W - GIS in Environmental Science and Management|(4 cr; Prereq-FNRM 3131 or Geog 3561 or instr consent; A-F or Audit; offered Every Fall)', 'ESPM 4601 - Environmental Pollution|(3 cr; Prereq-SOIL 2125, CHEM 1061 and 1062 or equiv,  or permission; Student Option; offered Every Spring)', 'ESPM 4607 - Industrial Biotechnology and the Environment|(3 cr; Prereq-BIOL 1009, CHEM 1021; A-F only; offered Every Spring)', 'ESPM 4608 - Bioremediation|(3 cr; A-F only; offered Every Fall)', 'ESPM 4811 - Environmental Interpretation|(3 cr; A-F or Audit; offered Every Spring)', 'ESPM 5014 - Tribal and Indigenous Natural Resource Management|(3 cr; Student Option; offered Every Fall)', 'ESPM 5015 - Invasive Plants and Animals: Ecology and Management|(3 cr; Student Option; offered Fall Odd Year)', 'ESPM 5031 - Applied Global Positioning Systems for Geographic Information Systems|(3 cr; Prereq-Grad student or instr consent; A-F or Audit; offered Every Spring)', 'ESPM 5061 - Water Quality and Natural Resources|(3 cr; Student Option; offered Every Fall & Spring)', 'ESPM 5071 - Ecological Restoration|(4 cr; Student Option; offered Every Fall)', 'ESPM 5108 - Ecology of Managed Systems|(4 cr; Prereq-Sr or grad student; A-F or Audit; offered Every Fall)', 'ESPM 5111 - Hydrology and Water Quality Field Methods|(3 cr; Prereq-Grad student or instr consent; A-F or Audit; offered Every Spring)', 'ESPM 5202 - Environmental Conflict Management, Leadership, and Planning|(3 cr; A-F or Audit; offered Every Spring)', 'ESPM 5211 - Survey, Measurement, and Modeling for Environmental Analysis|(3 cr; Student Option; offered Every Spring)', 'ESPM 5241 - Natural Resource and Environmental Policy|(3 cr; Prereq-Grad student or instr consent; Student Option; offered Every Spring)', 'ESPM 5242 - Methods for Environmental and Natural Resource Policy Analysis|(3 cr; Prereq-grad student; A-F only; offered Fall Even Year)', 'ESPM 5245 - Sustainable Land Use Planning and Policy|(3 cr; A-F or Audit; offered Every Fall)', 'ESPM 5251 - Natural Resources in Sustainable International Development|(3 cr; Prereq-Grad student or instr consent; A-F or Audit; offered Every Fall)', 'ESPM 5256 - Natural Resource Law and the Management of Public Lands and Waters|(3 cr; Prereq-grad student; A-F or Audit; offered Spring Odd Year)', 'ESPM 5261 - Economics and Natural Resources Management|(4 cr; A-F or Audit; offered Every Spring)', 'ESPM 5295 - GIS in Environmental Science and Management|(4 cr; A-F or Audit; offered Every Fall)', 'ESPM 5402 - Biometeorology|(3 cr; Prereq-MATH 1271, PHYS 1201, STAT 3011, [instr consent]; Student Option; offered Fall Even Year)', 'ESPM 5480 - Topics in Natural Resources|(1 cr [max 4]; Student Option; offered Every Fall, Spring & Summer; may be repeated for 6 credits; may be repeated 6 times)', 'ESPM 5555 - Wetland Soils|(3 cr; Prereq-SOIL 1125 or 2125 or equiv or instr consent; concurrent registration is required (or allowed) in SOIL 4511 recommended; A-F or Audit; offered Every Fall)', 'ESPM 5575 - Wetlands|(3 cr; Prereq-3575, [sr or grad student or instr consent]; Student Option; offered Every Spring)', 'ESPM 5602 - Regulations and Corporate Environmental Management|(3 cr; Prereq-APEC 1101 or ECON 1101; A-F only; offered Every Spring)', 'ESPM 5603 - Environmental Life Cycle Analysis|(3 cr; Prereq-[Math 1142 or [Math 1271, Math 1282]], [Econ 1101 or ApEc 1101]; A-F only; offered Every Fall)', 'ESPM 5604 - Environmental Management Systems and Strategy|(3 cr; A-F only; offered Every Fall)', 'ESPM 5605 - Recycling: Extending Raw Materials Supplies|(3 cr; A-F only; offered Every Spring)', 'ESPM 5607 - Industrial Biotechnology and the Environment|(3 cr; Prereq-BIOL 1009, CHEM 1021; A-F only; offered Every Spring)', 'ESPM 5608 - Bioremediation|(3 cr; A-F only; offered Every Fall)', 'ESPM 5811 - Environmental Interpretation|(3 cr; A-F or Audit; offered Every Spring)'];

/*
var cHeight = 0;
var cWidth = 0;
const rWidth = 325;
const rHeight = 180;
var allClasses = [[],[],[],[],[]];
var grid = [];

class Class {
  constructor(department, name, number, prerequisites, prerequisiteClasses=[], corequisiteClasses=[], externalClasses=[], xPos=0, yPos=0, outgoingClasses=[], filled=false) {
    this.department = department;
    this.name = name;
    this.number = number;
    this.prerequisites = prerequisites;
    this.prerequisiteClasses = prerequisiteClasses;
    this.corequisiteClasses = corequisiteClasses;
    this.externalClasses = externalClasses;
    this.xPos = xPos;
    this.yPos = yPos;
    this.outgoingClasses = outgoingClasses;
    this.filled = filled;
  }
}

class Grid {
  constructor(xPos, yPos, course, filled=false) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.course = course;
    this.filled = filled;
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
findOutgoing(allClasses);
findPrereqs(allClasses);
allClasses = fixArray();
console.log(allClasses);
calcWidth();
var maxElems = calcHeight();

function setup() {
  createCanvas(cWidth,cHeight);
  background(255);
  stroke(0);
  rect(0,0,cWidth,cHeight);
  populateGrid();
  console.log(grid);
  textAlign(CENTER, CENTER);
  textSize(25);
  drawGrid();

  line(50,50,400,750);

}

function findPrereqs(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      for(var k = 0; k < arr[i][j].prerequisites.length; k++) {
        let prereq = arr[i][j].prerequisites[k];
        if(prereq.department != dept) {
          pre = new Class(prereq.department, "", prereq.number, []);
          arr[i][j].externalClasses.push(pre);
        }
      }
    }
  }
}

function findOutgoing(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      for(var k = 0; k < arr[i][j].prerequisites.length; k++) {
        let prereq = arr[i][j].prerequisites[k];
        if(prereq.department == dept) {
          let index = parseInt(("" + prereq.number).substring(0,1));
          // console.log(arr[i][j].name + " - " + prereq.number + " - " + index);
          appendOutgoing(index-1, prereq.number);
        }
      }
    }
  }
}

function appendOutgoing(index, num) {
  for(var i = 0; i < allClasses[index].length; i++) {
    let c = allClasses[index][i];
    if(c.number == num) {
      allClasses[index][i].outgoingClasses.push(c);
    }
  }
}

function bigBrainAlg(level, gridLevel) {
  // while loop till all non-zero affinities are filled
    // if there are still same-level prerequisites, calculate all affinities
    // iterate over all grid positions
    while(true) {
    var allFilled = false;
    for(var i = 0; i < level.length; i++) {
      for(var j = 0; j < level[i].length; j++) {
        var c = level[i][j];
        if(c.prerequisiteClasses.length != 0 && c.outgoingClasses.length != 0 && !c.filled) {
          allFilled = true;
        }
        calculateAffinity(c);
      }
    }
    if(!allFilled) {
      break;
    }
  }
}

function calculateAffinity(c) {
  return 0;
}

function parseFromArray(arr) {
  for(var i = 0; i < arr.length; i++) {
    let course = arr[i].split("|")[0];
    let prereqs = arr[i].split("|")[1];
    let name = course.split(" - ")[0];
    let description = course.split(" - ")[1];
    if(name.includes("H")) {
      continue;
    }
    let number = removeLetters(name);
    let index = (Math.floor(number/1000)) - 1;
    var prereqs2 = [];

    // allClasses[index].prerequisites.push("hello");
    let split = prereqs.split(";")
    for(var j = 1; j < split.length; j++) {
      if((split[j].substring(1,7)) == ("Prereq")) {
        var text = (replaceCommaWithAnd(split[j])).substring(8);
        // console.log(recursivelyParse(text, prereqs2));
        console.log(name + ": " + text);

        text = recursivelyParse(text);
        console.log(text);
        text = recursivelyParse(text,prereqs2);
        splitByAnd = splitByChar(text, ' and ');
        assignIndices(prereqs2,splitByAnd);
        console.log(prereqs2);
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
    cHeight = ((max+2)*275+rHeight) + 475;
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

// function fixPrereqs(arr) {
//   var ans = "";
//   split1 = arr.split(' or ');
//   for(var i = 0; i < split1.length; i++) {
//     if(split1[i] != "") {
//       ans += split1[i] + " or ";
//     }
//
//   }
//   return ans.substring(0, ans.length-4);
// }

function recursivelyParse(str, prereqs=[], dotted=false,depth=0) {
    // str is string, dotted is boolean to represent if line should be dotted
    // if an "and" exists, split by and. Then merge the various splits.
    var and  = splitByChar(str,' and ');
    var or = splitByChar(str, ' or ');
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

    } else if(or.length > 1) { // if an "or" exists, split byå or
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

    } else if(str.includes('[') || (str.includes('(') && !str.includes("or allowed") && !str.includes("lecture") && !str.includes("lab")) ) { // if a bracket exists, split by bracket (exclude certain edge cases)
      depth++;
      if(checkForCorrectness(str)) { //handles an edge case
        return "";
      }
      return '[' + recursivelyParse(parseBrackets(str),prereqs,dotted,depth) + ']';

    } else {// base case: string cannot be split by and, or, or bracket. check if a prerequisite can be parsed, if so return the prerequisite, if not return empty string
      var prereq = parsePrerequisites(str, dotted);
      // console.log(prereq);
      if(prereq.number >= 100 && !duplicatePrereq(prereq, prereqs)) {
        prereqs.push(prereq);
        return prereq.department + " " + prereq.number;
      }
      return "";
    }
}

function duplicatePrereq(prereq, prereqs) {
  for(var i = 0; i < prereqs.length; i++) {
    if(prereq.number == prereqs[i].number) {
      return true;
    }
  }
  return false;
}

function checkForCorrectness(str) {
  return (str.includes("] [") || str.includes("]  ["))
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
      heightOffset = rHeight/2*j+(275)*j;
      if(j >= start && j < end) {
        if(i%2==0) {
        var g = new Grid((200+rWidth/2) + ((rWidth/2 * (i*2)) + (300*i)), s + heightOffset, col[k]);
      } else {
        var g = new Grid((200+rWidth/2) + ((rWidth/2 * (i*2)) + (300*i)), s + heightOffset+rHeight, col[k]);
      }
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
      strokeWeight(5);
      rect(grid[i][j].xPos,grid[i][j].yPos, rWidth, rHeight);
      strokeWeight(0);
      text(txt,grid[i][j].xPos, grid[i][j].yPos, rWidth, rHeight);
      console.log(grid[i][j].course.prerequisites)

      for(var k = 0; k < grid[i][j].course.prerequisites.length; k++) {
        var prereq =  grid[i][j].course.prerequisites[k];

        if(prereq.department.toUpperCase() == dept) {
          searchPrereqs(grid[i][j].xPos, grid[i][j].yPos, prereq.number, grid[i][j].course.number);
        }
      }
  }
  }
  for(var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[i].length; j++) {
      var index = Math.floor(grid[i][j].course.number/1000) - 1;
      let c = color(colors[index]);
      push();
      fill(c);
      strokeWeight(5);
      rect((200+rWidth/2) + ((rWidth/2 * (i*2)) + (300*i)), 175, rWidth, 75);
      textSize(30);
      pop();
      text(names[index], (200+rWidth/2) + ((rWidth/2 * (i*2)) + (300*i)), 175, rWidth, 75);
    }
  }
}

function searchPrereqs(x2, y2, num, currentNum) {
  var x1 = 0;
  var y1 = 0;
  for(var i = 0; i < grid.length; i++) {

    for(var j = 0; j < grid[i].length; j++) {
        var pre = grid[i][j];
        x1 = pre.xPos;
        y1 = pre.yPos;
        if(pre.course.number == num) {
          if(pre.xPos == x2) {
            // console.log(num + " is prereq");
            // console.log(currentNum);
            x1 = pre.xPos + rWidth/2;
            x2 = x2 + rWidth/2;
              if(pre.yPos < y2) {
                y1 = pre.yPos + rHeight;

              } else {
                y1 = pre.yPos;
                y2 = y2 + rHeight;
              }
          } else {
            y1 = pre.yPos + rHeight/2;
            y2 = y2 + rHeight/2;
            if(pre.xPos < x2) {
              x1 = pre.xPos + rWidth;
            } else {
              x2 = x2 + rWidth;
            }
          }
          push();
          strokeWeight(5);
          line(x1,y1,x2,y2)
          drawArrow(x1,x2,y1,y2);
          pop();
        }
    }
}
}

function drawArrow(x1,x2,y1,y2) {
  var angle = atan2(y1 - y2, x1 - x2); //gets the angle of line
  translate(x2,y2)
  rotate(angle-HALF_PI);
  var offset = 16;
  fill(0);
  triangle(-offset*0.5, offset, offset*0.5, offset, 0, -offset/2); //draws the arrow point as a triangle
}



function draw() {
}
*/
