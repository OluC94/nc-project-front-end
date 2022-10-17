import React, { FC, useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { sampleEvents, sampleComments } from "../utils";
import { EventContext } from "../contexts";
import fetchEventComments from "../utils/comments-api";

const CommentList: FC = () => {
  const [comments, setComments] = useState<any>([]); // bring back when linked to BE
  const { eventID } = useContext(EventContext);
  const { events } = sampleEvents;
  // transfer to util file

  useEffect(() => {
    fetchEventComments(eventID)
      .then((result) => {
        setComments(result.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [eventID]);

  return (
    <View>
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
                <Text>{["Posted on", comment.createdAt]}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default CommentList;

/* 

New util function:
- fetchEventComments, 
- filter so that the comments are returned for the specifiv id
- return the array of comments

Optimistic rendering
Add comment 

Delete button

*/
