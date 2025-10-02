import { Image, Linking, StyleSheet, TouchableOpacity } from "react-native";

const ICONS = {
  github: require("../../assets/images/github-icon.png"),
  linkedin: require("../../assets/images/linkedin-icon.png"),
} as const;

type IconName = keyof typeof ICONS;

interface IconLinkProps {
  url: string;
  iconName: IconName;
}

function IconLink({ url, iconName }: IconLinkProps) {
  const styles = StyleSheet.create({
    container: {
      width: 40,
      height: 40,
    },
    icon: {
      width: 40,
      height: 40,
      borderRadius: 50,
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Linking.openURL(url)}
    >
      <Image source={ICONS[iconName]} style={styles.icon} />
    </TouchableOpacity>
  );
}

export default IconLink;
