import requests
from bs4 import BeautifulSoup
import time
quote_page = 'https://dept.aem.umn.edu/cgi-bin/courses/noauth/course-catalog?QFCHK=0&search=yes&ns=1&subject=CSCI'
page = requests.get(quote_page)
soup = BeautifulSoup(page.content, 'html.parser')
main_div=soup.find("div",{"class":"umn_body"})
data=[b.string for b in main_div.findAll('b')]

allDepartments =['AAS', 'ABUS', 'ACCT', 'ACL', 'ADDS', 'ADES', 'ADPY', 'AECM', 'AEM', 'AFEE', 'AFRO', 'AGRO', 'AHS', 'AIR', 'AKKA', 'ALL', 'AMES', 'AMIN', 'AMST', 'ANAT', 'ANES', 'ANSC', 'ANTH', 'APEC', 'APS', 'APSC', 'APST', 'ARAB', 'ARCH', 'ARGN', 'ARTH', 'ARTS', 'ASL', 'AST', 'BA', 'BBE', 'BCLA', 'BIOC', 'BIOL', 'BLAW', 'BMEN', 'BSE', 'BTHX', 'CAHP', 'CAPY', 'CDED', 'CEGE', 'CESP', 'CFAN', 'CGSC', 'CHEM', 'CHEN', 'CHIC', 'CHMB', 'CHN', 'CHPH', 'CI', 'CL', 'CLA', 'CMB', 'CMBA', 'CMGT', 'CMPE', 'CNES', 'COMM', 'CONS', 'COP', 'CPMS', 'CPSY', 'CSCI', 'CSCL', 'CSDS', 'CSE', 'CSOM', 'CSPH', 'CVM', 'DAKO', 'DBLN', 'DDS', 'DENT', 'DERM', 'DES', 'DH', 'DNCE', 'DSCI', 'DSSC', 'DT', 'DTCH', 'EAS', 'ECDR', 'ECON', 'ECP', 'EDHD', 'EDUC', 'EE', 'EEB', 'EMMD', 'EMS', 'ENDO', 'ENGL', 'ENGW', 'ENT', 'ENTR', 'EPSY', 'ESCI', 'ESL', 'ESPM', 'FDSY', 'FIN', 'FINA', 'FLOR', 'FM', 'FMCH', 'FNRM', 'FOST', 'FREN', 'FRIT', 'FSCN', 'FSOS', 'FW', 'GCC', 'GCD', 'GDBA', 'GDES', 'GEND', 'GEOG', 'GER', 'GERI', 'GERO', 'GHSR', 'GIS', 'GLBT', 'GLOS', 'GME', 'GRAD', 'GRD', 'GRK', 'GSD', 'GWSS', 'HCOL', 'HEBR', 'HECU', 'HINF', 'HIST', 'HMED', 'HMNG', 'HNDI', 'HNUR', 'HORT', 'HRIR', 'HSCI', 'HSEM', 'HSEX', 'HSG', 'HSM', 'HSPH', 'HUMF', 'IBH', 'IBUS', 'ICP', 'ID', 'IDES', 'IDSC', 'IE', 'IFSL', 'INAR', 'INET', 'INMD', 'INS', 'IREL', 'ISG', 'ITAL', 'JOUR', 'JPN', 'JWST', 'KIN', 'KNYA', 'KOR', 'LA', 'LAAS', 'LAMP', 'LANG', 'LAS', 'LASK', 'LAT', 'LAW', 'LEAD', 'LGTT', 'LING', 'LM', 'LNDN', 'LS', 'MABA', 'MADR', 'MATH', 'MATS', 'MBA', 'MBS', 'MBT', 'MCDG', 'MCOM', 'MDI', 'MDP', 'MDS', 'ME', 'MED', 'MEDC', 'MEST', 'MGMT', 'MICA', 'MICB', 'MICE', 'MIL', 'MILI', 'MIMB', 'MIMS', 'MKTG', 'MLK', 'MLSP', 'MM', 'MONT', 'MORT', 'MOT', 'MPHY', 'MRCO', 'MSBA', 'MSF', 'MSID', 'MSMK', 'MST', 'MTHE', 'MUED', 'MULT', 'MUS', 'MUSA', 'NAV', 'NEUR', 'NOR', 'NPSE', 'NR', 'NSC', 'NSCI', 'NSU', 'NURS', 'NUTR', 'OBIO', 'OBST', 'OCS', 'OJIB', 'OLPD', 'OPH', 'ORSU', 'OSUR', 'OT', 'OTHO', 'OTOL', 'OUE', 'PA', 'PATH', 'PDEN', 'PDES', 'PE', 'PED', 'PERO', 'PHAR', 'PHCL', 'PHIL', 'PHM', 'PHRM', 'PHSL', 'PHYS', 'PLPA', 'PLSC', 'PMB', 'PMED', 'POL', 'PORT', 'POUL', 'PREV', 'PROS', 'PSTL', 'PSY', 'PT', 'PUBH', 'PVS', 'RAD', 'REC', 'RELS', 'RM', 'ROB', 'ROME', 'RSC', 'RUSS', 'SACP', 'SAGR', 'SAPH', 'SCAN', 'SCB', 'SCIC', 'SCMC', 'SCO', 'SDNY', 'SENG', 'SFS', 'SLHS', 'SMGT', 'SMLI', 'SNGL', 'SOC', 'SOIL', 'SPAN', 'SPPT', 'SSM', 'SST', 'ST', 'STAT', 'SURG', 'SUST', 'SW', 'SWAH', 'SWED', 'TH', 'THAI', 'TLDO', 'TMDP', 'TRAD', 'TRIN', 'TXCL', 'UC', 'UGRD', 'URBS', 'URDU', 'UROL', 'VBS', 'VCS', 'VMBA', 'VMED', 'VPM', 'VTMD', 'WRIT', 'WRS', 'YOST'];
quote_page = 'https://dept.aem.umn.edu/cgi-bin/courses/noauth/course-catalog?QFCHK=0&search=yes&ns=1&subject=ESPM'
page = requests.get(quote_page)
soup = BeautifulSoup(page.content, 'html.parser')
data2=[b.string for b in soup.findAll('b')]
data=[dd.string for dd in soup.findAll('dd') if (" cr;" in str(dd.string) or " cr " in str(dd.string))]
data3 = []
for i in range(len(data)):
    if(int(data2[i][5]) <= 5):
        data3.append(data2[i] + "|" + data[i])
print(data3)
