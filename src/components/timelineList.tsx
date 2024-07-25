import { CircleDot } from "lucide-react";

interface TimelineListPorps {
  lists: {
    id?: number;
    headline: string;
    content: string;
  }[];
}

export default function TimelineList({ lists }: TimelineListPorps) {
  return (
    <div className="grid grid-cols-1 gap-2 border-l-2 border-l-blue-500 ml-2">
      {lists.map((list, idx) => (
        <div key={list.id || idx}>
          <h4 className="flex items-center relative -left-3">
            <CircleDot color="blue" className="bg-white" />{" "}
            <span className="ml-3 font-medium">{list.headline}</span>
          </h4>
          <p className="text-gray-500 ml-6">{list.content}</p>
        </div>
      ))}
    </div>
  );
}
