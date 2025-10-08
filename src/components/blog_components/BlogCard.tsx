import { useTheme } from "@/src/contexts/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Markdown from "react-native-markdown-display";

type RootStackParamList = {
  BlogList: undefined;
  BlogPost: {
    title: string;
    image: any;
    tags: string[];
    content: string;
    author: string;
    date: string;
  };
};

type BlogCardNavigationProp = StackNavigationProp<
  RootStackParamList,
  "BlogList"
>;

interface BlogCardProps {
  image: any;
  tags: string[];
  author: string;
  title: string;
  content: string;
  date: string;
}

function BlogCard({
  image,
  tags,
  author,
  title,
  content,
  date,
}: BlogCardProps) {
  const { theme, setTheme } = useTheme();
  const navigation = useNavigation<BlogCardNavigationProp>();
  2;

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
    },
    card: {
      backgroundColor: theme.itemBackground,
      display: "flex",
      flexDirection: "column",
      margin: 30,
      marginBottom: 0,
      width: 400,
      borderRadius: 12,
      padding: 40,
      gap: 8,
      paddingTop: 0,
    },
    image: {
      height: 250,
      width: 400,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      marginLeft: -40,
    },
    list: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 4 },
    tags: {
      fontFamily: "Orbitron-Medium",
      color: theme.background,
      fontSize: 16,
      borderWidth: 1,
      borderColor: theme.background,
      borderRadius: 10,
      padding: 8,
      margin: 4,
      backgroundColor: theme.text,
    },
    title: { fontFamily: "Epilogue-Bold", color: theme.text, fontSize: 24 },
    content: {
      fontFamily: "Epilogue-Regular",
      color: theme.text,
      fontSize: 14,
      opacity: 0.8,
    },
    author: {
      fontFamily: "Epilogue-Regular",
      color: theme.text,
      fontSize: 14,
      opacity: 0.6,
    },
    date: {
      fontFamily: "Epilogue-Regular",
      color: theme.text,
      fontSize: 12,
      opacity: 0.6,
    },
  });

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("BlogPost", {
          title: title,
          image: image,
          tags: tags,
          content: content,
          author: author,
          date: date,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={image} style={styles.image} />
          <View>
            <FlatList
              data={tags}
              renderItem={({ item }) => <Text style={styles.tags}>{item}</Text>}
              keyExtractor={(item) => item}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            ></FlatList>
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>par {author}</Text>

          <Markdown
            style={{
              blockquote: {
                backgroundColor: theme.background,
                borderLeftWidth: 4,
                borderLeftColor: theme.primary,
                paddingHorizontal: 12,
                paddingVertical: 8,
                marginVertical: 8,
              },
              text: { color: theme.text },
            }}
          >
            {content.slice(0, 300).concat("...")}
          </Markdown>

          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default BlogCard;
