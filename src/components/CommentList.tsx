import React, { FC, useContext } from "react";
import { Text, View } from "react-native";
import { sampleEvents } from "../utils";
import { EventContext } from "../contexts";

const CommentList: FC = () => {
  const { eventID } = useContext(EventContext);
  const { events } = sampleEvents;
  const [eventComms] = events.filter(
    (singleEvent: any) => singleEvent._id === eventID
  );

  return (
    <View>
      {eventComms.comments.length === 0 ? (
        <Text>No comments yet</Text>
      ) : (
        <View>
          <Text>Comments</Text>
          {eventComms.comments.map((comment: any) => {
            return (
              <Text key={comment._id}>
                User: {[comment.username, "\n"]}
                {[comment.body, "\n"]}
              </Text>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default CommentList;

/* 

Get event by ID,
check the comments length ->  render "commnets" or "no comments yet"

Get the comments by event from the api
Map through the comment, display the username, date, body

*/
