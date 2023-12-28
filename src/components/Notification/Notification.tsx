interface NotificationPropsInterface {
  type: string;
  messageTitle?: string;
  messageText: string;
}

const Notification = ({
  type,
  messageTitle,
  messageText,
}: NotificationPropsInterface) => {
  return (
    <div
      className={`rounded border-l-4 p-4 text-left shadow-md ${
        type === "success"
          ? "bg-sb-green-soft border-l-sb-green"
          : "bg-sb-red-soft border-l-sb-red"
      }`}
    >
      <h4 className="font-bold text-sb-grey-900">{messageTitle}</h4>
      <p className="text-sm text-sb-grey-900">{messageText}</p>
    </div>
  );
};

export default Notification;
