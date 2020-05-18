# Weapons of Mass Injusice 
## Data & Methodology

Weapons of Mass Injustice focuses draws from three central datasets. The first two are from federal agencies, the Centers for Disease Control (CDC), and the Bureau of Justice Statistics (BJS), and the final was compiled for this project from a literature review of local gun violence intervention strategies across the US. The sources and data queries are detailed below. See Table 1 for a full list of data sources for the project’s visualizations.

#### Table 1. Key visualization data sources

| Source Title | Description / Citation | URL |
| ----------- | ----------- | ----------- |
| Underlying Cause of Death, Firearm-Related, CDC Wonder, 2018. | Queries included all ICD-10 codes for external causes of death related to firearms. Data were disaggregated by state, age, race, and ethnicity | https://wonder.cdc.gov/ucd-icd10.html |
| Arrests for Weapons Offenses By Race Ethnicity, 1980-2014 | Snyder, Howard N.; Cooper, Alexia D.; and Mulako-Wangota, Joseph. Bureau of Justice Statistics. Arrest in the United States, 1980-2014. Generated using the Arrest Data Analysis Tool at www.bjs.gov. April 18th, 2020. | https://www.bjs.gov/index.cfm?ty=datool&surl=/arrests/index.cfm |
| Jail incarceration rates at midyear, by race or ethnicity, 1990-2018 | Bureau of Justice Statistics, Annual Survey of Jails, 1990-2004 and 2006-2018; and Census of Jail Inmates, 2005. | https://www.bjs.gov/index.cfm?ty=pbdetail&iid=6826 |
| Imprisonment rate of sentenced state and federal prisoners per 100,000 U.S. residents, by sex, race, Hispanic origin, and age, 2016.  | Includes data from the Bureau of Justice Statistics, National Prisoner Statistics Program, 2016; Federal Justice Statistics Program, 2016; National Corrections Reporting Program, 2015; Survey of Prison Inmates, 2016 (preliminary). Generated using the Corrections Statistical Analysis Tool at www.bjs.gov.| https://www.bjs.gov/index.cfm?ty=nps |
| Directory of Hospital Based Violence Intervention Programs | The Health Alliance for Violence Intervention (The Havi) | https://www.thehavi.org/directory-by-name |
| Directory of Cure Violence program sites | Cure Violence | https://cvg.org/where-we-work/ |
| Group Violence Intervention sites | National Network for Safe Communities at John Jay College | https://nnscommunities.org/strategies/group-violence-intervention/ |
| Homicide rates, fatal & non-fatal shootings  | Richmond Police Department Homicide data | n/a |
| Homicide by firearm rate per 100,000 population in the United States from 2006 to 2018 | Uniform Crime Reporting, FBI Compiled by Statista  | https://www.statista.com/statistics/249805/homicide-by-firearm-rate-in-the-united-states/ |
 

### Gun death rates
Gun death data from 2018 were obtained in CSV format using the CDC WONDER (Centers for Disease Control Wide-ranging Online Data for Epidemiologic Research) application. To obtain gun death counts and rates, the CDC Wonder Underlying Cause of Death database was queried using all ICD-10 (International Classification of Diseases, Tenth Revision) codes for firearm-related death for all states in 2018 by age, race, and ethnicity. Because differences in the impact of gun violence based on age were of interest, the project utilizes crude rates rather than age-adjusted rates. CSV files were compiled and converted into JSON format for final integration and implementation. CDC Wonder queries included the following codes for external causes of death: 

Accidental: 
- W32 (Handgun discharge); 
- W33 (Rifle, shotgun and larger firearm discharge); 
- W34 (Discharge from other and unspecified firearms); 

Intentional self-harm:
- X72 (Intentional self-harm by handgun discharge); 
- X73 (Intentional self-harm by rifle, shotgun and larger firearm discharge); 
- X74 (Intentional self-harm by other and unspecified firearm discharge); 

Assault:
- X93 (Assault by handgun discharge); 
- X94 (Assault by rifle, shotgun and larger firearm discharge); 
- X95 (Assault by other and unspecified firearm discharge); 

Undetermined nature:
- Y22 (Handgun discharge, undetermined intent); 
- Y23 (Rifle, shotgun and larger firearm discharge, undetermined intent); 
- Y24 (Other and unspecified firearm discharge, undetermined intent)

For the choropleth map visualization, gun homicide rate data (cause of death due to firearm assault) was spatially joined with US states and territories data from the Census Bureau and exported in GeoJSON format using QGIS. 

### Criminal justice data

Criminal justice data visualized in Weapons of Mass Injustice draws from a range of Bureau of Justice Statistics (BJS) datasets including Arrests for Weapons Offenses By Race Ethnicity, 1980-2014; Jail incarceration rates at midyear, by race or ethnicity, 1990-2018; and Imprisonment rate of sentenced state and federal prisoners per 100,000 U.S. residents, by sex, race, Hispanic origin, and age, 2011-2016. Arrest data was generated using the Arrest Data Analysis Tool and Imprisonment rate data was generated using the Corrections Statistical Analysis Tool, both at www.bjs.gov. Data were accessed in CSV format, condensed using pivot tables in Microsoft Excel, and converted to JSON format.
Local intervention strategies 

Data on local gun violence intervention strategies were manually compiled based on a literature review of US-based programs that fall into the following categories: Hospital Based Violence Intervention Programs (HVIPs), Cure Violence, Group Violence Intervention, and hybrid programs. The main sources include The Health Alliance for Violence Intervention (The Havi), Cure Violence, The National Network for Safe Communities at John Jay College, and Advance Peace. Here programs were aggregated by city, geocoded, and converted to GeoJSON format. This dataset, while representative of the myriad of local strategies adopted in cities across the US, is not intended to be a comprehensive directory and should not be considered exhaustive.

### Libraries, Media, and Data Manipulation 

Weapons of Mass Injustice was developed using Vue.js and Nuxt.js. The project is deployed using Netlify. The following additional libraries were used to create individual visualizations and components of the visual essay: 

- Vue-Scrollama - scroll-based storytelling, visualizations are triggered as the user scrolls through each section of the narrative.

- GreenSock Animation Platform (GSAP) - SVG based animations of position, scale, and opacity are triggered by scrollama and implemented using GSAP

- Vue-Chart.js - line graphs for gun death rates, arrest trends, jail rates, and incarceration rates were implemented using vue-chart.js due to the library’s built-in legend toggling and user interaction features.

- D3.js - the interactive map of gun homicide rates by state, and local intervention programs by city, was created using D3 and GeoJSON data described above.

Two videos are utilized in the opening section of the visual essay. The first draws from youtube footage of CitiField baseball stadium on opening day in 2015 by Matt Sabban. The second is an aerial video of the stadium generated using Google Earth Studio.

SVG based illustrations were created in Adobe Illustrator, and incorporate the following Noun Project icons: 
- User - Lil Squid
- Balloon - Misirlou
- Photo frame - Musmellow
- Tulips - ANTON icon
- Tulips - Istuningrum
- Candle - Abdo
- Tribune Seats - Félix Péault
- Emblem - Blink@design
- Hospital - Bmijnlieff 
