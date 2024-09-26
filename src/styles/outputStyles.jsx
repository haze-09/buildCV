import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Times-Roman",
    padding: "10 50",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "thin",
    gap: 10,
    margin: 10,
  },
  headerDetails: {
    fontSize: 9,
  },
  section: {
    margin: "7 0",
  },
  sectionHeader: {
    borderBottom: "1px solid black",
  },
  sectionContent: {
    padding: "10 5 0 15"

  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bold: {
    fontFamily: "Times-Bold",
  },
  underline: {
    textDecoration: "underline",
  },
});

export default styles;
