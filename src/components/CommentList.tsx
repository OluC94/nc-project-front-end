import React, { FC, useContext, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { EventContext } from "../contexts";
import { addComment, fetchEventComments } from "../utils/comments-api";
import Button from "./Button";
import Input from "./Input";
import { UserContext } from "../contexts/UserContext";

const CommentList: FC = () => {
  const [comments, setComments] = useState<any>([]);
  const [newComm, setNewComm] = useState<string | null>(null);
  const { username } = useContext(UserContext);
  const { eventID } = useContext(EventContext);

  useEffect(() => {
    fetchEventComments(eventID)
      .then((result) => {
        setComments(result.comments);
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
          createdAt: "Just added",
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

  return (
    <View>
      <Input
        placeholder="Add your comment..."
        onChangeText={(text) => setNewComm(text)}
      />
      <Button title="Add comment" onPress={handleAddComm} />
      {comments.length === 0 ? (
        <Text>No comments yet</Text>
      ) : (
        <View>
          <Text>Comments</Text>
          {comments.map((comment: any) => {
            return (
              <View key={comment._id}>
                <Text>User: {[comment.username, "\n"]}</Text>
                <Text>{[comment.body, "\n"]}</Text>
                <Text>{["Posted on: ", comment.createdAt]}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default CommentList;
