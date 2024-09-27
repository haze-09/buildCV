import styles from "../styles/outputStyles";
import { Page, Text, View, Document, PDFViewer } from "@react-pdf/renderer";

import { School, Degrees, Experience, Projects } from "./output/pdf";

function Output({ formData, handleEdit }) {
  console.log(formData);
  let { personalInfo, education, experience, projects, skills } = formData;
  console.log(personalInfo.name);
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "70vh" }}>
        <Document title={personalInfo.name+"'s Resume"}>
          <Page size="A4" style={styles.page}>
            <View style={styles.header}>
              <Text style={styles.bold}>{personalInfo.name}</Text>
              <View style={styles.headerDetails}>
                <Text>
                  {personalInfo.phoneNumber} |{" "}
                  <Text style={styles.underline}>{personalInfo.email}</Text> |{" "}
                  <Text style={styles.underline}>{personalInfo.linkedIn}</Text>{" "}
                  | <Text style={styles.underline}>{personalInfo.github}</Text>
                </Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Education</Text>
              <View style={styles.sectionContent}>
                <School grade={10} data={education.school.class10} />
                <School grade={12} data={education.school.class12} />
                <Degrees degrees={education.university} />
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Experience</Text>
              <View style={styles.sectionContent}>
                <Experience jobs={experience} />
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Projects</Text>
              <View style={styles.sectionContent}>
                <Projects projects={projects} />
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Skills</Text>
              <View style={styles.sectionContent}>
                <View style={styles.skills}>
                  <View style={styles.skillRow}>
                    <Text style={styles.bold}>Languages: </Text>
                    <Text>{skills.languages}</Text>
                  </View>
                  <View style={styles.skillRow}>
                    <Text style={styles.bold}>Frameworks: </Text>
                    <Text>{skills.frameworks}</Text>
                  </View>
                  <View style={styles.skillRow}>
                    <Text style={styles.bold}>Developer Tools: </Text>
                    <Text>{skills.devTools}</Text>
                  </View>
                  <View style={styles.skillRow}>
                    <Text style={styles.bold}>Libraries: </Text>
                    <Text>{skills.libraries}</Text>
                  </View>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      <div className="buttons">
        <button style={{marginTop:"1rem"}} onClick={handleEdit}> edit</button>
      </div>
    </>
  );
}

export default Output;
