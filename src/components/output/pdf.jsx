import { Text, View } from "@react-pdf/renderer";
import styles from "../../styles/outputStyles";

function School({ grade, data }) {
  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <Text style={styles.bold}>Class {grade}</Text>
        <Text>{data.percentage}%</Text>
        
      </View>
      <View style={styles.row}>
        <Text>{data.schoolName}</Text>
        <Text>{data.location}</Text>
      </View>
    </View>
  );
}

function Degrees({ degrees }) {
  return degrees.map((degree, index) => (
    <View key={index} style={styles.item}>
      <View style={styles.row}>
        <Text style={styles.bold}>{degree.name}</Text>
        <Text>
          {degree.start} - {degree.end}
        </Text>
      </View>
      <View style={styles.row}>
        <Text>{degree.university}</Text>
        <Text>{degree.location}</Text>
      </View>
    </View>
  ));
}

function Experience({ jobs }) {
  return jobs.map((job, index) => (
    <View key={index} style={styles.item}>
      <View style={styles.row}>
        <Text style={styles.bold}>{job.role}</Text>
        <Text>
          {job.start} - {job.end}
        </Text>
      </View>
      <View style={styles.row}>
        <Text>{job.org}</Text>
        <Text>{job.location}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.desc}>{job.desc}</Text>
      </View>
    </View>
  ));
}

function Projects({ projects }) {
  return projects.map((project, index) => (
    <View key={index} style={styles.item}>
      <View style={styles.row}>
        <Text style={styles.bold}>{project.name}</Text>
        <Text>{project.stack}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.desc}>{project.desc}</Text>
      </View>
    </View>
  ));
}

export { School, Degrees, Experience, Projects };
