interface SampleEvents {
  events: any;
}

const sampleEvents: SampleEvents = {
  events: [
    {
      _id: "634942892e014d1c457b4e9b",
      event_name: "test-event-3",
      details: "test event added for testing",
      time: 16657445999,
      comments: [
        {
          username: "Aran",
          body: "this is a another test comment",
          time: 1665745850712,
          _id: "89176950799059780",
          votes: 0,
        },
        {
          username: "Aran",
          body: "2nd comment",
          time: 1665745854761,
          _id: "89176950799059781",
          votes: 0,
        },
      ],
      interested_in: ["aran"],
      createdAt: "2022-10-14T11:05:45.789Z",
      updatedAt: "2022-10-17T09:12:08.445Z",
      __v: 4,
    },
    {
      _id: "634943cfb94cdcf80c498521",
      event_name: "test-event-3",
      details: "test event added for testing",
      time: 16657445999,
      comments: [],
      interested_in: [],
      createdAt: "2022-10-14T11:11:11.818Z",
      updatedAt: "2022-10-14T11:11:11.818Z",
      __v: 0,
    },
    {
      _id: "634943d4b94cdcf80c498523",
      event_name: "test-event-1",
      details: "test event added for testing",
      time: 16657445999,
      comments: [],
      interested_in: [],
      createdAt: "2022-10-14T11:11:16.911Z",
      updatedAt: "2022-10-14T11:11:16.911Z",
      __v: 0,
    },
  ],
};

const sampleComments = {
  __v: 4,
  _id: "634942892e014d1c457b4e9b",
  comments: [
    {
      _id: "89176950799059780",
      body: "this is a another test comment",
      time: 1665745850712,
      username: "Aran",
      votes: 0,
    },
    {
      _id: "89176950799059781",
      body: "2nd comment",
      time: 1665745854761,
      username: "Aran",
      votes: 0,
    },
  ],
  createdAt: "2022-10-14T11:05:45.789Z",
  details: "test event added for testing",
  event_name: "test-event-3",
  interested_in: ["aran"],
  time: 16657445999,
  updatedAt: "2022-10-17T09:12:08.445Z",
};

export { sampleEvents, sampleComments };
