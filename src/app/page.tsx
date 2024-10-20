import Course from "@/components/course";
import Quarter from "@/components/Quarter";

export default function Home() {
  return (
    <div className="grid grid-cols-3 items-center justify-items-center min-h-screen p-8 pb-10 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Fall"} year={"2021"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
      </div>
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Winter"} year={"2021"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
      </div>
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Spring"} year={"2021"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
      </div>
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Fall"} year={"2022"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
        <Course courseName={"Networks"} id={"CSEN 146"} unit={"4"} />
        <Course courseName={"Programming Languages"} id={"CSEN 171"} unit={"4"} />
        <Course courseName={"Software Engineering"} id={"CSEN 174"} unit={"4"} />

      </div>
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Winter"} year={"2022"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
      </div>
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Spring"} year={"2022"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
      </div>
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Fall"} year={"2023"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
      </div>
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Winter"} year={"2023"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
      </div>
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Spring"} year={"2023"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
      </div>
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Fall"} year={"2024"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
      </div>
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Winter"} year={"2024"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
      </div>
      <div className="border-2 #000 p-5">
        <Quarter quarterSeason={"Spring"} year={"2024"}></Quarter>
        <Course courseName={"Operating Systems"} id={"CSEN 177"} unit={"4"} />
      </div>
    </div>
  );
}
