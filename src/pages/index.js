// Step 1: Import React
import * as React from 'react'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Karlie's CV</title>
      <h1>Karlie Bold</h1>
     <p>
    <em>I like Big Ideas.</em>
         </p>
     <p>
    I like nature, process, non-dualism, calculus, culture & language.
    </p>
  <hr />
  <h3>About</h3>
  <p>
I notice a trend of gravitating toward tech roles at each step of my career:
<ol><li>data entry role to a SQL data manager</li>
  <li>technical assistant to an applications specialist</li>
  <li>part-time role as church secretary to managing technical projects</li>
</ol>
Let me know if you have a project that might be a fit! Part-time, remote preferred.
</p>

  <h3>Education</h3>
  <ul>
    <li>
      Trinity High School c/o 2004: International Baccalaureate diploma with emphasis on Calculus, Higher level Biology, and French.
    </li>
    <li>
      Cornell University c/o 2008: Degree in Anthropology with focus on human evolution, biology, and rocks.
    </li>
    <li>
      Post-Bac: Completed undergraduate geology work and began masters program for geophysics which was interrupted by a move & motherhood.
    </li>
  </ul>
  <h3>What am I into? </h3>
  <ol>
    <li>
      Homesteading, Foraging & Farm Life
    </li>
    <li>
      The Future of Education
    </li>
    <li>
      Building Community within Spiritual & Third Spaces
    </li>
  </ol>
  <hr />
  <h3>Work Experience</h3>
  <table>
  <tr>
      <td>
        Office Manager at First Christian Church of Granbury
      </td>
      <td>
        2020-present
      </td>
      <td>
Routine business tasks like bills, payroll & visioning in a non-profit setting. Also spearheaded migrations to cloud-based Church CRM and accounting system.
      </td>
    </tr>
    <tr>
      <td>
        Contract Engineering Applications Specialist
      </td>
      <td>
        2016-2018
      </td>
      <td>
        I built custom applications and scripts to support a team of engineers and geologists.
      </td>
    </tr>
    <tr>
      <td>
        Geoscience Applications Specialist at <a href="https://web.archive.org/web/20120205041431/http://www.excoresources.com/">EXCO Resources</a>
      </td>
      <td>
        2011-2016
      </td>
      <td>
        I was responsible for software used by the geology team and engineers. I planned and implemented new versions of software and onboarded new software acquisitions.
      </td>
    </tr>
 
    <tr>
      <td>
        Data Content Manager at Lanyon Inc.
      </td>
      <td>
        2008-2011
      </td>
      <td>
        I wrote custom scripts for a travel industry SQL database to assist account managers, customer support.
      </td>
    </tr>
</table>
<hr></hr>
<h3>Skills</h3>
<table>
  <tr>
    <td>

I have some experience in really specific oil & gas software (Petra, Kingdom, Petrel/Eclipse, ArcGIS), and some general business software (Quickbooks, MS Office, SQL Server, Constant Contact, G-Suite, Asana).
<br></br>
Still deciding what Stack I like best. Not sure if I like NoSQL or SQL better, they both are neat. React is really cool and where I'm currently trying to grow my skillset. Planning to pivot to a React Native project next.

        </td>
</tr>
   <br></br>
   <tr><td>

I can count on one hand the number of people I have met who are better than me at Excel.

    </td></tr>

</table>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage