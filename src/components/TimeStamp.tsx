export const TimeStamp = ({ time }: { time: string }) => {
  return (
    <p className="text-sm text-slate-600">
      {new Date(time).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </p>
  );
};
