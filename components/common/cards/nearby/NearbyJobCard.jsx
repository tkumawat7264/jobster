import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { CheckImageURL } from "../../../../utils";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ handleNavigate, job }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: CheckImageURL(job?.employer_logo)
              ? job?.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
          {/* Frontend Developer */}
        </Text>
        {/* <Text style={styles.jobType}>Full-time</Text> */}
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;