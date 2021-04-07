export interface IServiceProps {
  logo: string;
  title: string;
  description: string;
  additionalData: string[];
  bottomSection?: boolean;
}

export interface INewsProps {
  date: string;
  title: string;
  content: string;
  image: string;
}

export interface IFooterDataProps {
  header: string;
  data: string[];
}

export const servicesList: IServiceProps[] = [
  {
    logo: "images/services/1.png",
    description:
      "Property Tax Exemptions and Abatements incentives calculations are an important part of the financial analysis of a new construction or a rehabilitation development. Whether it is a residential, commercial, or a mixed-use project, our office can offer advisory services to find the tax benefits that would offer the greatest savings available for your development.",
    title: "NYC Property Tax Incentives & Benefits",
    additionalData: [
      "421-a(16) Affordable Housing New York (AHNYP) Program",
      "Industrial & Commercial Abatement (ICAP) Program",
      "J-51 Tax Exemption Program",
      "421-a (15) Tax Exemption Reinstatement",
      "Project Eligility Review & Analysis",
      "Financing Opinion Letter",
    ],
    bottomSection: true,
  },
  {
    logo: "images/services/2.png",
    description:
      "Inclusionary Housing program was created to promote affordable housing in the areas where zoning has been modified to encourage new development. The program offers developers additional bonus square footage as known as FAR in return for creating affordable housing units. Our office helps to maximize the benefits of providing affordable housing and increase the return on investment under NYC’s rezoning requirement. ",
    title: "Inclusionary & Senior Housing",
    additionalData: [
      "Mandatory Inclusionary Housing Program (VIH)",
      "Voluntary Inclusionary Housing Program",
      "Unit Mix Review & Analysis",
      "Affordable Independent Residence for Seniors  (AIRS)",
    ],
  },
  {
    logo: "images/services/3.png",
    description:
      "City5 Consulting is an approved marketing agent of NYC Housing reservation and Development (HPD) and HDC agencies. Our office is authorized to work on marketing, leased up, and compliance monitoring & reporting of affordable housing under various programs such as 421-a(1) Affordable New York, LIHTC, Inclusionary Housing, AIRs and other.",
    title: "Affordable Housing Marketing, Lease-up & Monitoring",
    additionalData: [
      "HPD Marketing Agent for Affordable Housing NY",
      "HPD Marketing Agent for Inclusionary Housing ",
      "ICAP",
      "J51",
    ],
  },
  {
    logo: "images/services/2.png",
    description:
      "New York State Home and Community Renewal (HCR) is the state agency responsible for implementing the laws and regulations that govern rent controlled and rent stabilized tenancies. Our DHCR professional represents property owners in various proceedings with this agency.",
    title: "New York State DHCR",
    additionalData: [
      "Initial and Annual Rent Registrations and Amendments",
      "Substantial Rehabilitation Exemtion Application",
      "High Rent Vacancy Exemption Application",
      "DHCR compliance & case management",
      "Rent-regulated building management",
      "Overcharge Complaints",
      "Initial and Annual Rent Registrations and Amendments",
      "Substantial Rehabilitation Exemtion Application",
      "High Rent Vacancy Exemption Application",
      "DHCR compliance & case management",
      "Rent-regulated building management",
      "Overcharge Complaints",
    ],
    bottomSection: true,
  },
  {
    logo: "images/services/5.png",
    description:
      "Our violation removal specialists are highly skilled professionals who represent our clients for violations issued by the DOB, FDNY, DSNY, DOT, NYPD, DEP, DOH, DOHMH, Landmark Preservation and HPD agencies.",
    title: "Violations",
    additionalData: [
      "OATH Hearing appearances on ECB violations",
      "Certificate of Correction for DOB and FDNY violations",
      "DOB Violation Removal for Elevator, AEU HAZ, Boiler, Construction ...",
      "HPD Violation Removal",
      "Civil Penalty Refund for HAZ, Work Without Permit (WWP) ...",
      "L2 filing for Civil Penalty Waiver, Refund and Reduction",
      "HPD Judgment Settlement",
      "AEP, PPI, and LL6 Program Resolution",
      "AEP, PPI, and LL6 Program Resolution",
    ],
  },
];

export const newsList: INewsProps[] = [
  {
    date: "May 11 2019",
    content:
      "A lottery offering 3 newly constructed affordable apartments is officially open in the Bushwick neighborhood.A lottery offering 3 newly constructed...",
    title: "Newly Constructed Affordable Units Available in Bushwick",
    image: "images/news/1.png",
  },
  {
    date: "May 10 2019",
    content:
      "A new affordable housing lottery is now open in Bedford-Stuyvesant neighborhood of Brooklyn. Managed...",
    title: "New Affordable Housing Lottery Open in Bedford-Stuyvesant",
    image: "images/news/2.png",
  },
  {
    date: "May 10 2019",
    content:
      "Located at 141 Utica Avenue, the four-story building developed by Twin Builders will rise...",
    title:
      "Modern Design Building Will Bring Affordable Housing to Crown Heights this May",
    image: "images/news/3.png",
  },
  {
    date: "May 9 2019",
    content:
      "Newly renovated residential buildings at the center of Bushwick neighborhood of Brooklyn is now accepting...",
    title: "5 Newly Renovated Affordable Apartments Available in Bushwick",
    image: "images/news/4.png",
  },
];

export const footerData: IFooterDataProps[] = [
  {
    header: "Tax Department",
    data: [
      "421-a Tax Exemption",
      "Voluntary Inclusionary Housing",
      "Affordable Housing",
      "ICAP",
      "J51",
      "RPIE filings",
    ],
  },
  {
    header: "Inclusionary Housing",
    data: ["Mandatory and Voluntary...", "Affordable Housing", "ICAP"],
  },
  {
    header: "Affordable Housing Marketing",
    data: [
      "Mandatory Inclusionary Housing",
      "Voluntary Inclusionary Housing",
      "Affordable Independent Residences...",
    ],
  },
  {
    header: "NY State DHCR",
    data: [
      "Extended due diligence",
      "Destabilization based on sub...",
      "DHCR compliance & case management",
      "Rent-regulated building management",
      "General consultation",
    ],
  },
  {
    header: "Violations",
    data: [
      "DOB",
      "HPD",
      "ECB Settlement",
      "DSNY,DON,DOT,DEP",
      "FDNY",
      "Obtain records from city",
    ],
  },
];

export const companies: string[] = [
  "images/companies/1.png",
  "images/companies/2.png",
  "images/companies/3.png",
  "images/companies/4.png",
  "images/companies/5.png",
  "images/companies/6.png",
];
