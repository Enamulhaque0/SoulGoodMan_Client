import { InfinitySpin } from "react-loader-spinner";


export default function Loader() {
    return (
      <div className="h-screen flex justify-center items-center backdrop-blur-[9xl]">
     <InfinitySpin width="200" color="#4fa94d" />;
      </div>
    )
  }