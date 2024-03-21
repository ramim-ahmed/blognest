import { HashLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-125px)]">
      <HashLoader color="#36d7b7" />
    </div>
  );
}
