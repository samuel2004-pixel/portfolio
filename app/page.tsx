import Landing from "@/components/landing/Landing";
import LoadingScreen from "@/components/loading/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Landing />
    </>
  );
}