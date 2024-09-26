import { Text, View } from "@react-pdf/renderer";
import styles from "../../styles/outputStyles";

function School({grade, data}) {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.bold}>Class {grade}</Text>
        <Text>{data.location}</Text>
        
      </View>
      <View>
      <Text>{data.schoolName}</Text>
      </View>
    </View>
  );
}

export { School };
