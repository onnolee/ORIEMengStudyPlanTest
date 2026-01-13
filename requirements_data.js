// Requirements data
const REQUIREMENTS_DATA = 
{
  "courses": [
    {
      "code": "AEM 5230",
      "department": "AEM",
      "number": "5230",
      "name": "Behavioral Finance",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "AEM 5270",
      "department": "AEM",
      "number": "5270",
      "name": "Supply Chain Strategy and Supermarket Simulation",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "AEM 5280",
      "department": "AEM",
      "number": "5280",
      "name": "Valuation of Capital Investment",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "AEM 6030",
      "department": "AEM",
      "number": "6030",
      "name": "Contemporary Issues in Agricultural Finance",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "AEM 6061",
      "department": "AEM",
      "number": "6061",
      "name": "Risk Simulation and Monte Carlo Methods",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CEE 5930",
      "department": "CEE",
      "number": "5930",
      "name": "Data Analytics",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CEE 6620",
      "department": "CEE",
      "number": "6620",
      "name": "Analysis and Control of Transportation Systems and Networks",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CHEME 5820",
      "department": "CHEME",
      "number": "5820",
      "name": "Machine Learning and Artificial Intelligence Methods for Engineers",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5150",
      "department": "CS",
      "number": "5150",
      "name": "Software Engineering",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Managing Implementation)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5154",
      "department": "CS",
      "number": "5154",
      "name": "Software Testing",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Managing Implementation)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5220",
      "department": "CS",
      "number": "5220",
      "name": "Applied High-Performance and Parallel Computing",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5223",
      "department": "CS",
      "number": "5223",
      "name": "Numerical Analysis: Linear and Nonlinear Problems",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Tech and Infrastructure)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5320",
      "department": "CS",
      "number": "5320",
      "name": "Introduction to Database Systems",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": "Elective: IT (Tech and Infrastructure)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5410",
      "department": "CS",
      "number": "5410",
      "name": "Operating Systems",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (General)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5414",
      "department": "CS",
      "number": "5414",
      "name": "Distributed Computing Principles",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Tech and Infrastructure)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5420",
      "department": "CS",
      "number": "5420",
      "name": "Advanced Computer Architecture",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Tech and Infrastructure)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5430",
      "department": "CS",
      "number": "5430",
      "name": "System Security",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Tech and Infrastructure)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5456",
      "department": "CS",
      "number": "5456",
      "name": "Introduction to Computer Networks",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Tech and Infrastructure)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5470",
      "department": "CS",
      "number": "5470",
      "name": "Systems for Large-Scale ML",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5670",
      "department": "CS",
      "number": "5670",
      "name": "Introduction to Computer Vision",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5700",
      "department": "CS",
      "number": "5700",
      "name": "Foundations of AI Reasoning and Decision-Making",
      "credits": 3,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": "Elective: IT (General)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5740",
      "department": "CS",
      "number": "5740",
      "name": "Natural Language Processing",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5777",
      "department": "CS",
      "number": "5777",
      "name": "Principles of Large-Scale Machine Learning Systems",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5780",
      "department": "CS",
      "number": "5780",
      "name": "Introduction to Machine Learning",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": "Elective: IT (General)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5782",
      "department": "CS",
      "number": "5782",
      "name": "Introduction to Deep Learning",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 5789",
      "department": "CS",
      "number": "5789",
      "name": "Introduction to Reinforcement Learning",
      "credits": 3,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 6210",
      "department": "CS",
      "number": "6210",
      "name": "Matrix Computations",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 6241",
      "department": "CS",
      "number": "6241",
      "name": "Numerical Methods for Data Science",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "CS 6386",
      "department": "CS",
      "number": "6386",
      "name": "Data to Decisions: Principles of Efficient Data Science",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ECE 5110",
      "department": "ECE",
      "number": "5110",
      "name": "Random Signals in Communications and Signal Processing",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ECE 5200",
      "department": "ECE",
      "number": "5200",
      "name": "Foundations Machine Learning",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ECE 5250",
      "department": "ECE",
      "number": "5250",
      "name": "Digital Signal Processing and Statistical Inference",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ECE 5280",
      "department": "ECE",
      "number": "5280",
      "name": "Optimal System Analysis and Design",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ECE 5420",
      "department": "ECE",
      "number": "5420",
      "name": "Fundamentals of Machine Learning",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ECE 5660",
      "department": "ECE",
      "number": "5660",
      "name": "Computer Networks and Telecommunications",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Tech and Infrastructure)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ECE 5740",
      "department": "ECE",
      "number": "5740",
      "name": "Computer Architecture",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Tech and Infrastructure)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ECE 5830",
      "department": "ECE",
      "number": "5830",
      "name": "Introduction to Technical Management",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Managing Implementation)",
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "ECON 6190",
      "department": "ECON",
      "number": "6190",
      "name": "Econometrics I",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ECON 6200",
      "department": "ECON",
      "number": "6200",
      "name": "Econometrics II",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ENGRG 5351",
      "department": "ENGRG",
      "number": "5351",
      "name": "Professional Development for Engineers",
      "credits": 1,
      "satisfies": {
        "general": "Practicum",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ENMGT 5900",
      "department": "ENMGT",
      "number": "5900",
      "name": "Project Management",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Managing Implementation)",
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "ENMGT 5920",
      "department": "ENMGT",
      "number": "5920",
      "name": "Product Management",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ENMGT 5940",
      "department": "ENMGT",
      "number": "5940",
      "name": "Economics and Finance for Engineering Management",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Econ and Strategy)",
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "ENMGT 5980",
      "department": "ENMGT",
      "number": "5980",
      "name": "Decision Framing and Analytics",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "HADM 6050",
      "department": "HADM",
      "number": "6050",
      "name": "Revenue Management",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "HADM 6235",
      "department": "HADM",
      "number": "6235",
      "name": "Intermediate Corporate Finance",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "HADM 6250",
      "department": "HADM",
      "number": "6250",
      "name": "Securitization and Structured Financial Products",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "HADM 6280",
      "department": "HADM",
      "number": "6280",
      "name": "Real Estate Finance and Investments",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "HADM 6285",
      "department": "HADM",
      "number": "6285",
      "name": "Derivatives: Forwards, Futures, Swaps, and Options",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "INFO 5100",
      "department": "INFO",
      "number": "5100",
      "name": "Visual Data Analytics for the Web",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": "Elective: IT (Managing Implementation)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "INFO 5125",
      "department": "INFO",
      "number": "5125",
      "name": "Project Management",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": "Elective: IT (General)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "INFO 5140",
      "department": "INFO",
      "number": "5140",
      "name": "Law, Policy, and Politics of Cybersecurity",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Econ and Strategy)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "INFO 5311",
      "department": "INFO",
      "number": "5311",
      "name": "Interactive Information Visualization",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "INFO 5312",
      "department": "INFO",
      "number": "5312",
      "name": "Data Communication",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "INFO 5355",
      "department": "INFO",
      "number": "5355",
      "name": "Human Computer Interaction Design",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Econ and Strategy)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "INFO 5556",
      "department": "INFO",
      "number": "5556",
      "name": "Business Intelligence Systems",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "INFO 6220",
      "department": "INFO",
      "number": "6220",
      "name": "Networks II: Market Design",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Econ and Strategy)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "MAE 5210",
      "department": "MAE",
      "number": "5210",
      "name": "Dimensional Tolerancing in Mechanical Design",
      "credits": 1,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "MAE 5240",
      "department": "MAE",
      "number": "5240",
      "name": "Materials Processing and Manufacturing",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "MAE 5250",
      "department": "MAE",
      "number": "5250",
      "name": "Computer-Aided Manufacture",
      "credits": 1,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "MAE 5260",
      "department": "MAE",
      "number": "5260",
      "name": "Design for Manufacture and Assembly",
      "credits": 1,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "MAE 5270",
      "department": "MAE",
      "number": "5270",
      "name": "Design Failure Modes and Effects Analysis (DFMEA)",
      "credits": 1,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "NBA 5020",
      "department": "NBA",
      "number": "5020",
      "name": "Managerial Accounting and Reporting I: Fundamentals of Cost Analysis",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Manufacturing Focus",
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "NBA 5060",
      "department": "NBA",
      "number": "5060",
      "name": "Financial Statement Analysis",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 5070",
      "department": "NBA",
      "number": "5070",
      "name": "Entrepreneurship for Scientists and Engineers",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 5090",
      "department": "NBA",
      "number": "5090",
      "name": "Advanced Financial Statement Analysis",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 5220",
      "department": "NBA",
      "number": "5220",
      "name": "Equity Investment Research and Analysis",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 5330",
      "department": "NBA",
      "number": "5330",
      "name": "Management Cases",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "NBA 5420",
      "department": "NBA",
      "number": "5420",
      "name": "Investment and Portfolio Management",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 5430",
      "department": "NBA",
      "number": "5430",
      "name": "Financial Markets and Institutions",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 5530",
      "department": "NBA",
      "number": "5530",
      "name": "Accounting and Financial Decision Making",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Manufacturing Focus",
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "NBA 5540",
      "department": "NBA",
      "number": "5540",
      "name": "International Finance",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 5550",
      "department": "NBA",
      "number": "5550",
      "name": "Fixed Income Securities and Interest Rate Options",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 5580",
      "department": "NBA",
      "number": "5580",
      "name": "Corporate Financial Policy",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "NBA 5600",
      "department": "NBA",
      "number": "5600",
      "name": "Demystifying Big Data and FinTech",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 5690",
      "department": "NBA",
      "number": "5690",
      "name": "Management Consulting Essentials",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 5980",
      "department": "NBA",
      "number": "5980",
      "name": "Behavioral Finance",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 6060",
      "department": "NBA",
      "number": "6060",
      "name": "Evaluating Capital Investment Projects",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 6070",
      "department": "NBA",
      "number": "6070",
      "name": "Designing Data Products",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "NBA 6100",
      "department": "NBA",
      "number": "6100",
      "name": "Applied Operations Strategy",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Elective: MIE",
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "NBA 6200",
      "department": "NBA",
      "number": "6200",
      "name": "Marketing Research",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 6215",
      "department": "NBA",
      "number": "6215",
      "name": "Introduction to Python for Business",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 6390",
      "department": "NBA",
      "number": "6390",
      "name": "Data Driven Marketing",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 6410",
      "department": "NBA",
      "number": "6410",
      "name": "Supply Chain Strategy",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 6420",
      "department": "NBA",
      "number": "6420",
      "name": "Supply Chain Analytics",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "NBA 6500",
      "department": "NBA",
      "number": "6500",
      "name": "Strategic Operations Immersion Practicum",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "NBA 6560",
      "department": "NBA",
      "number": "6560",
      "name": "Valuation Principles",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "NBA 6650",
      "department": "NBA",
      "number": "6650",
      "name": "The Strategic Management of Technology and Innovation",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 6730",
      "department": "NBA",
      "number": "6730",
      "name": "Derivatives Securities Part I",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 6740",
      "department": "NBA",
      "number": "6740",
      "name": "Derivatives Securities Part II",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NCC 5080",
      "department": "NCC",
      "number": "5080",
      "name": "Managing Operations",
      "credits": 2.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "NCC 5580",
      "department": "NCC",
      "number": "5580",
      "name": "Managing Operations",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "ORIE 5100",
      "department": "ORIE",
      "number": "5100",
      "name": "Manufacturing Systems Design: A Consulting Boot Camp",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": "Elective: AOR",
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": "Manufacturing Focus",
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "ORIE 5110",
      "department": "ORIE",
      "number": "5110",
      "name": "Engineering Economics and Strategic Decision-Making",
      "credits": 1,
      "satisfies": {
        "general": "Project Prep",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5126",
      "department": "ORIE",
      "number": "5126",
      "name": "Principles of Supply Chain Management",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (General)",
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "ORIE 5130",
      "department": "ORIE",
      "number": "5130",
      "name": "Service System Modeling and Design",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (General)",
        "MIE": "Elective: MIE",
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "ORIE 5134",
      "department": "ORIE",
      "number": "5134",
      "name": "OR Modeling for Real",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (General)",
        "MIE": "Elective: MIE",
        "SSO": "Elective: SSO"
      }
    },
    {
      "code": "ORIE 5140",
      "department": "ORIE",
      "number": "5140",
      "name": "Model Based Systems Engineering",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Managing Implementation)",
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "ORIE 5142",
      "department": "ORIE",
      "number": "5142",
      "name": "Systems Analysis Behavior and Optimization",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Tech and Infrastructure)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5160",
      "department": "ORIE",
      "number": "5160",
      "name": "Topics in DS: Machine Learning",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": "Elective: AOR",
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5160",
      "department": "ORIE",
      "number": "5160",
      "name": "Topics in DS: Optimized Democracy",
      "credits": 3,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5210",
      "department": "ORIE",
      "number": "5210",
      "name": "Financial Engineering Colloquium",
      "credits": 1,
      "satisfies": {
        "general": "Colloquium",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5215",
      "department": "ORIE",
      "number": "5215",
      "name": "Financial Engineering Career Practicum",
      "credits": 1,
      "satisfies": {
        "general": "Practicum",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5220",
      "department": "ORIE",
      "number": "5220",
      "name": "Applied Financial Engineering (in NYC)",
      "credits": 5,
      "satisfies": {
        "general": "Project",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5230",
      "department": "ORIE",
      "number": "5230",
      "name": "Quantitative Trading Strategies",
      "credits": 2,
      "satisfies": {
        "general": "CFEM Only",
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5240",
      "department": "ORIE",
      "number": "5240",
      "name": "Bond Mathematics and Mortgage-Backed Securities",
      "credits": 2,
      "satisfies": {
        "general": "CFEM Only",
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5252",
      "department": "ORIE",
      "number": "5252",
      "name": "Special Topics in Financial Engineering",
      "credits": 2,
      "satisfies": {
        "general": "CFEM Only",
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5253",
      "department": "ORIE",
      "number": "5253",
      "name": "Special Topics in Financial Engineering II",
      "credits": 2,
      "satisfies": {
        "general": "CFEM Only",
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5254",
      "department": "ORIE",
      "number": "5254",
      "name": "Special Topics in Financial Engineering III",
      "credits": 2,
      "satisfies": {
        "general": "CFEM Only",
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5255",
      "department": "ORIE",
      "number": "5255",
      "name": "Special Topics in Financial Engineering IV",
      "credits": 2,
      "satisfies": {
        "general": "CFEM Only",
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5256",
      "department": "ORIE",
      "number": "5256",
      "name": "Special Topics in Financial Engineering V",
      "credits": 2,
      "satisfies": {
        "general": "CFEM Only",
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5257",
      "department": "ORIE",
      "number": "5257",
      "name": "Special Topics in Financial Engineering VI",
      "credits": 2,
      "satisfies": {
        "general": "CFEM Only",
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5258",
      "department": "ORIE",
      "number": "5258",
      "name": "Python for Finance",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5259",
      "department": "ORIE",
      "number": "5259",
      "name": "Market Microstructure and Algorithmic Trading: Theory and Practice",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5260",
      "department": "ORIE",
      "number": "5260",
      "name": "Special Topics in Quantitative Finance",
      "credits": 2,
      "satisfies": {
        "general": "CFEM Only",
        "AOR": null,
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5270",
      "department": "ORIE",
      "number": "5270",
      "name": "Big Data Technologies",
      "credits": 2,
      "satisfies": {
        "general": null,
        "AOR": "Elective: AOR",
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5300",
      "department": "ORIE",
      "number": "5300",
      "name": "Optimization I",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5310",
      "department": "ORIE",
      "number": "5310",
      "name": "Optimization II",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5320",
      "department": "ORIE",
      "number": "5320",
      "name": "Optimization for AI",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5330",
      "department": "ORIE",
      "number": "5330",
      "name": "Discrete Models",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "ORIE 5340",
      "department": "ORIE",
      "number": "5340",
      "name": "Applications of Optimization: Modeling and Computation",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5350",
      "department": "ORIE",
      "number": "5350",
      "name": "Introduction to Game Theory",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Econ and Strategy)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5370",
      "department": "ORIE",
      "number": "5370",
      "name": "Optimization Modeling in Finance",
      "credits": 3,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5500",
      "department": "ORIE",
      "number": "5500",
      "name": "Eng Probability and Statistics: Modeling and Data Science II",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5510",
      "department": "ORIE",
      "number": "5510",
      "name": "Introduction to Engineering Stochastic Processes I",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5550",
      "department": "ORIE",
      "number": "5550",
      "name": "Applied Time Series Analysis",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5570",
      "department": "ORIE",
      "number": "5570",
      "name": "Reinforcement Learning with Operations Research Applications",
      "credits": 3,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5580",
      "department": "ORIE",
      "number": "5580",
      "name": "Simulation Modeling and Analysis",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5581",
      "department": "ORIE",
      "number": "5581",
      "name": "Monte Carlo Simulation",
      "credits": 2,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5582",
      "department": "ORIE",
      "number": "5582",
      "name": "Monte Carlo Methods in Financial Engineering",
      "credits": 2,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5600",
      "department": "ORIE",
      "number": "5600",
      "name": "Financial Engineering with Stochastic Calculus I",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5610",
      "department": "ORIE",
      "number": "5610",
      "name": "Financial Engineering with Stochastic Calculus II",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5630",
      "department": "ORIE",
      "number": "5630",
      "name": "Operations Research Tools for Financial Engineering",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5640",
      "department": "ORIE",
      "number": "5640",
      "name": "Statistics for Financial Engineering",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5650",
      "department": "ORIE",
      "number": "5650",
      "name": "Quantitative Methods of Financial Risk Management",
      "credits": 3,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": "Elective: Financial Applications",
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5656",
      "department": "ORIE",
      "number": "5656",
      "name": "Extreme Values in Finance",
      "credits": 3,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5740",
      "department": "ORIE",
      "number": "5740",
      "name": "Statistical Data Mining I",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5741",
      "department": "ORIE",
      "number": "5741",
      "name": "Learning with Big Messy Data",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5742",
      "department": "ORIE",
      "number": "5742",
      "name": "Info Theory, Probabilistic Modeling, and Deep Learning with Scientific and Financial Apps",
      "credits": 3,
      "satisfies": {
        "general": "Core",
        "AOR": "Elective: AOR",
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5820",
      "department": "ORIE",
      "number": "5820",
      "name": "Data-Driven Decision Modeling and Analysis",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": "Elective: AOR",
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": "Elective: IT (General)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5910",
      "department": "ORIE",
      "number": "5910",
      "name": "Manufacturing Option Project",
      "credits": 5,
      "satisfies": {
        "general": "Project",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5911",
      "department": "ORIE",
      "number": "5911",
      "name": "Manufacturing Option Project",
      "credits": 5,
      "satisfies": {
        "general": "Project",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5915",
      "department": "ORIE",
      "number": "5915",
      "name": "MEng Career Practicum",
      "credits": 1,
      "satisfies": {
        "general": "Practicum",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5920",
      "department": "ORIE",
      "number": "5920",
      "name": "Enterprise Engineering Colloquium",
      "credits": 1,
      "satisfies": {
        "general": "Colloquium",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Manufacturing Focus",
        "SSO": null
      }
    },
    {
      "code": "ORIE 5925",
      "department": "ORIE",
      "number": "5925",
      "name": "M.Eng. Professional Review",
      "credits": 1,
      "satisfies": {
        "general": "CPT",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5980",
      "department": "ORIE",
      "number": "5980",
      "name": "ORIE Master of Engineering Project",
      "credits": 1,
      "satisfies": {
        "general": "Project",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 5981",
      "department": "ORIE",
      "number": "5981",
      "name": "ORIE Master of Engineering Project",
      "credits": "=IF(EAAnswerReal=\"Yes\", IF(COUNTIF('Study Plan'!EnrolledClassListAll,\"ORIE 5980\")=1,4,5),4)",
      "satisfies": {
        "general": "Project",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 9000",
      "department": "ORIE",
      "number": "9000",
      "name": "ORIE Graduate Colloquium",
      "credits": 1,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "ORIE 9100",
      "department": "ORIE",
      "number": "9100",
      "name": "Enterprise Engineering Colloquium",
      "credits": 1,
      "satisfies": {
        "general": "Colloquium",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": "Manufacturing Focus",
        "SSO": null
      }
    },
    {
      "code": "STSCI 5030",
      "department": "STSCI",
      "number": "5030",
      "name": "Linear Models with Matrices",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "STSCI 5045",
      "department": "STSCI",
      "number": "5045",
      "name": "Python Programming and its Applications in Statistics",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "STSCI 5065",
      "department": "STSCI",
      "number": "5065",
      "name": "Big Data Management and Analysis",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "STSCI 5090",
      "department": "STSCI",
      "number": "5090",
      "name": "Theory of Statistics",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "STSCI 5100",
      "department": "STSCI",
      "number": "5100",
      "name": "Statistical Sampling",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "STSCI 5160",
      "department": "STSCI",
      "number": "5160",
      "name": "Categorical Data",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "STSCI 5520",
      "department": "STSCI",
      "number": "5520",
      "name": "Statistical Computing",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": "Elective: Data Analytics",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "STSCI 5740",
      "department": "STSCI",
      "number": "5740",
      "name": "Data Mining and Machine Learning",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "SYSEN 5140",
      "department": "SYSEN",
      "number": "5140",
      "name": "Economic and Financial Decisions for Engineers",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Econ and Strategy)",
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "SYSEN 5260",
      "department": "SYSEN",
      "number": "5260",
      "name": "Software Systems Engineering: Design, Develop, and Deliver Software in the Modern Enterprise",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Managing Implementation)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "SYSEN 5280",
      "department": "SYSEN",
      "number": "5280",
      "name": "Adaptive and Learning Systems",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Managing Implementation)",
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "SYSEN 5300",
      "department": "SYSEN",
      "number": "5300",
      "name": "Systems Engineering and Six Sigma for the Design and Operation of Reliable Systems",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (General)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "SYSEN 5350",
      "department": "SYSEN",
      "number": "5350",
      "name": "Multidisciplinary Design Optimization",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Econ and Strategy)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "SYSEN 5400",
      "department": "SYSEN",
      "number": "5400",
      "name": "Theory and Practice of Systems Architecture",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Tech and Infrastructure)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "SYSEN 5420",
      "department": "SYSEN",
      "number": "5420",
      "name": "Network Systems and Games",
      "credits": 3,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Tech and Infrastructure)",
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "SYSEN 5680",
      "department": "SYSEN",
      "number": "5680",
      "name": "Optimal Control and Decision Theory",
      "credits": 3,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "SYSEN 5740",
      "department": "SYSEN",
      "number": "5740",
      "name": "Design Thinking for Complex Systems",
      "credits": 2,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "SYSEN 5930",
      "department": "SYSEN",
      "number": "5930",
      "name": "Project Management and Leadership for Complex Systems",
      "credits": 4,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": "Elective: IT (Managing Implementation)",
        "MIE": "Elective: MIE",
        "SSO": null
      }
    },
    {
      "code": "SYSEN 6800",
      "department": "SYSEN",
      "number": "6800",
      "name": "Computational Optimization",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "SYSEN 6880",
      "department": "SYSEN",
      "number": "6880",
      "name": "Industrial Big Data Analytics and Machine Learning",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "SYSEN 6888",
      "department": "SYSEN",
      "number": "6888",
      "name": "Deep Learning",
      "credits": 4,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "NBA 5110",
      "department": "NBA",
      "number": "5110",
      "name": "Financial Modeling",
      "credits": 1.5,
      "satisfies": {
        "general": null,
        "AOR": null,
        "DA": null,
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    },
    {
      "code": "STSCI 5720",
      "department": "STSCI",
      "number": "5720",
      "name": "Applied Neural Networks",
      "credits": 2,
      "satisfies": {
        "general": "Core",
        "AOR": null,
        "DA": "Elective: DSSM",
        "FE": null,
        "IT": null,
        "MIE": null,
        "SSO": null
      }
    }
  ],
  "requirements": {
    "universal": {
      "total_credits": 30,
      "core": {
        "DSSM": 3,
        "Optimization": 3,
        "Stochastic": 3,
        "total": 12
      },
      "project": 5,
      "practicum": 1,
      "project_prep": {
        "credits": 1,
        "exempt_concentrations": [
          "FE"
        ],
        "course_code": "ORIE 5110"
      },
      "sci_credits_max": 8
    },
    "concentrations": {
      "AOR": {
        "name": "Applied Operations Research",
        "code": "AOR",
        "elective_credits": 9,
        "rules": [
          {
            "type": "min_credits",
            "description": "General elective credits from any elective category",
            "credits": 9,
            "categories": [
              "Elective: AOR"
            ]
          }
        ]
      },
      "DA": {
        "name": "Data Analytics",
        "code": "DA",
        "elective_credits": 9,
        "rules": [
          {
            "type": "min_courses",
            "description": "At least 1 DSSM elective course",
            "count": 1,
            "categories": [
              "Elective: DSSM"
            ]
          },
          {
            "type": "min_courses",
            "description": "At least 1 Data Analytics elective course",
            "count": 1,
            "categories": [
              "Elective: Data Analytics"
            ]
          },
          {
            "type": "min_courses",
            "description": "At least 3 total elective courses (from DSSM or DA categories)",
            "count": 3,
            "categories": [
              "Elective: DSSM",
              "Elective: Data Analytics"
            ]
          }
        ]
      },
      "FE": {
        "name": "Financial Engineering",
        "code": "FE",
        "elective_credits": 9,
        "rules": [
          {
            "type": "location_credits",
            "description": "At least 6 credits from Ithaca campus (Fall or Spring)",
            "credits": 6,
            "location": "Ithaca",
            "categories": [
              "Elective: Financial Applications"
            ]
          },
          {
            "type": "location_credits",
            "description": "At least 3 credits from CFEM (Summer)",
            "credits": 3,
            "location": "CFEM",
            "categories": [
              "Elective: Financial Applications"
            ]
          }
        ]
      },
      "IT": {
        "name": "Information Technology",
        "code": "IT",
        "elective_credits": 9,
        "rules": [
          {
            "type": "min_credits",
            "description": "General IT electives",
            "credits": 3,
            "categories": [
              "Elective: IT (General)"
            ]
          },
          {
            "type": "min_credits",
            "description": "Tech and Infrastructure electives",
            "credits": 3,
            "categories": [
              "Elective: IT (Tech and Infrastructure)"
            ]
          },
          {
            "type": "min_credits",
            "description": "Economics and Strategy electives",
            "credits": 3,
            "categories": [
              "Elective: IT (Econ and Strategy)"
            ]
          },
          {
            "type": "min_credits",
            "description": "Managing Implementation electives",
            "credits": 3,
            "categories": [
              "Elective: IT (Managing Implementation)"
            ]
          },
          {
            "type": "note",
            "description": "Total of 9 credits across all IT subcategories, with at least one course from 3 distinct subcategories"
          }
        ]
      },
      "MIE": {
        "name": "Manufacturing and Industrial Engineering",
        "code": "MIE",
        "elective_credits": 9,
        "rules": [
          {
            "type": "required_courses",
            "description": "Must take ORIE 5100",
            "courses": [
              "ORIE 5100"
            ]
          },
          {
            "type": "required_one_of",
            "description": "Must take either NBA 5020 or NBA 5530",
            "courses": [
              "NBA 5020",
              "NBA 5530"
            ]
          },
          {
            "type": "required_courses",
            "description": "Must take ORIE 5920 (Colloquium)",
            "courses": [
              "ORIE 5920"
            ]
          },
          {
            "type": "min_courses",
            "description": "At least 2 Manufacturing Focus courses",
            "count": 2,
            "categories": [
              "Manufacturing Focus"
            ]
          }
        ]
      },
      "SSO": {
        "name": "Strategic Operations",
        "code": "SSO",
        "elective_credits": 9,
        "rules": [
          {
            "type": "min_credits",
            "description": "At least 9 credits from SSO electives",
            "credits": 9,
            "categories": [
              "Elective: SSO"
            ]
          }
        ]
      }
    }
  }
};
