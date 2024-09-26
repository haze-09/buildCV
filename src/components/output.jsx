import styles from "../styles/outputStyles";
import { Page, Text, View, Document, PDFViewer } from "@react-pdf/renderer";

import { School } from "./output/pdf";

function Output({ formData, handleEdit }) {
  console.log(formData);
  let { personalInfo, education, experience, projects, skills } = formData;
  console.log(personalInfo.name);
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "70vh" }}>
        <Document>
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
                {console.log(education.class10)}
                {console.log(education.class12)}
                <School grade={10} data={education.school.class10}/>
                <School grade={12} data={education.school.class12}/>
              </View>
              <View style={styles.sectionContent}>
                <View style={styles.sectionContentItem}>
                  <View></View>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      <div className="buttons">
        <button onClick={handleEdit}> edit</button>
      </div>
    </>
  );
}

export default Output;
