import React, { useState } from "react";
import Notifications from "react-notifications-menu";

const DEFAULT_NOTIFICATION = {
  image:
    "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
  message: "Notification one.",
  detailPage: "/events",
  receivedTime: "12h ago",
};

const Notification = () => {
  const [data, setData] = useState([DEFAULT_NOTIFICATION]);
  const [message, setMessage] = useState("");

  const onClick = () => {
    if (message.length > 0) {
      setData([
        ...data,
        {
          ...DEFAULT_NOTIFICATION,
          message,
        },
      ]);
      setMessage("");
      alert("notification added");
    }
  };

  return (
    <div>
      <div className="flex relative mr-10 ">
        <div
          style={{
            marginLeft: "50%",
            marginBottom: 100,
            border: "1px solid black",
          }}
        >
          <Notifications
            data={data}
            header={{
              title: "Notifications",
              option: {
                text: "View All",
                onClick: () => console.log("Clicked"),
              },
            }}
            style={{ background: "red" }}
            markAsRead={(data) => {
              console.log(data);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Notification;
