import VideoSectionContent from "./content";

export default function VideoSection({
  scrollToContactUs,
}: {
  scrollToContactUs: () => void;
}) {
  return (
    <>
      <VideoSectionContent scrollToContactUs={scrollToContactUs} />
    </>
  );
}
