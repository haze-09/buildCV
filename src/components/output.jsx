// import "../styles/output.css";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {},
  section: {
    margin: 10,
    padding: 10,
  },
});

function Output({ formData, handleEdit }) {
  console.log(formData);
    let {personalInfo, education, experience, projects, skills } = formData;
    console.log(personalInfo.name);
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "70vh" }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View debug={true} style={styles.section}>
              <Text>{personalInfo.name}</Text>
            </View>
            <View debug={true} style={styles.section}>
              <Text>Section #2</Text>
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
