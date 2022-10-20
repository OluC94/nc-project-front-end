import React, { FC, useContext, useEffect, useState } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { EventContext } from "../contexts";
import {
  addComment,
  deleteComment,
  fetchEventComments,
} from "../utils/comments-api";
import Button from "./Button";
import Input from "./Input";
import { UserContext } from "../contexts/UserContext";
import { unixToDate } from "../utils/date";
import { Loading } from "./Loading";

const CommentList: FC = () => {
  const [comments, setComments] = useState<any>([]);
  const [newComm, setNewComm] = useState<string | null>(null);
  const { username } = useContext(UserContext);
  const { eventID } = useContext(EventContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetchEventComments(eventID)
      .then((result) => {
        setComments(result.comments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [eventID]);

  const handleAddComm = () => {
    interface ReqObj {
      username: string;
      body: string | null;
    }
    const reqObj: ReqObj = { username: username, body: newComm };
    if (newComm) {
      Alert.alert("comment added!");
      setComments((currComments: []) => [
        ...comments,
        {
          _id: comments.length + 1,
          body: newComm,
          username: username,
          time: Date.now(),
        },
      ]);
      addComment(eventID, reqObj)
        .then((result) => {
          setNewComm("");
        })
        .catch((err) => {
          const errComments: any[] = [...comments];
          errComments.pop();
          setComments(errComments);
          Alert.alert("Comment failed to post");
        });
    } else {
      Alert.alert("Cannot submit a blank comment");
    }
  };

  const handleDeleteComm = (event_id: string, comment_id: string) => {
    deleteComment(event_id, comment_id)
      .then(() => {
        Alert.alert("This comment has been deleted");
        setComments((currComments: []) => {
          const newComms = currComments.filter((comment: any) => {
            return comment._id !== comment_id;
          });
          return newComms;
        });
      })
      .catch((err) => {
        Alert.alert("Something went wrong, please try again.");
      });
  };

  if (isLoading) return <Loading />;

  return (
    <View>
      <Input
        placeholder="Add your comment..."
        onChangeText={(text) => setNewComm(text)}
      />
      <TouchableOpacity style={styles.addCommentButton} onPress={handleAddComm}>
        <Text style={{ textAlign: "center", color: "#fff" }}>Add comment</Text>
      </TouchableOpacity>
      {comments.length === 0 ? (
        <View style={styles.commentSection}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#fff",
              margin: 10,
              padding: 5,
            }}
          >
            No comments added
          </Text>
          <Image
            style={styles.sad}
            source={require("../../assets/sadicon.png")}
          />
        </View>
      ) : (
        <View style={styles.commentSection}>
          <Text style={styles.comment}>Comments</Text>
          {comments.map((comment: any) => {
            return (
              <View style={styles.commentCard} key={comment._id}>
                <Text style={styles.commentBody}>{[comment.body]}</Text>
                <Text style={styles.commentDetails}>
                  {[comment.username]} @ {[unixToDate(comment.time)]}
                </Text>
                {username === comment.username ? (
                  <TouchableOpacity
                    onPress={() => handleDeleteComm(eventID, comment._id)}
                  >
                    <Text style={styles.delete}>Delete comment</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default CommentList;

const styles = StyleSheet.create({
  addCommentButton: {
    backgroundColor: "#1a2c54",
    marginRight: 125,
    marginLeft: 125,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  commentSection: {
    backgroundColor: "#1a2c54",
    margin: 5,
    paddingTop: 2,
    paddingBottom: 11,
    borderRadius: 10,
  },
  comment: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    padding: 5,
    color: "#fff",
    fontWeight: "bold",
  },
  commentCard: {
    backgroundColor: "#5a6bad",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    padding: 5,
    borderRadius: 10,
  },
  commentBody: {
    color: "#fff",
    paddingTop: 5,
    paddingLeft: 5,
  },
  commentDetails: {
    paddingTop: 5,
    paddingLeft: 5,
    fontStyle: "italic",
    color: "#1a2c54",
  },
  delete: {
    paddingLeft: 5,
    color: "#232a45",
  },
  sad: {
    opacity: 0.5,
    width: 75,
    height: 75,
    alignSelf: "center",
    margin: 10,
    padding: 10,
  },
});
