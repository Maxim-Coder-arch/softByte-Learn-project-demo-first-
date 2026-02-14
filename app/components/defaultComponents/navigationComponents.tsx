import ScrollDown from "@/app/generic-components/scrollDown";
import ScrollUp from "@/app/generic-components/scrollUp";
import ToHomeButton from "@/app/generic-components/toHomeButton";
// import "../../scss/corsePageStyle/mainCourse/mainCourse.css";

export default function NavigationComponents() {
    return (
      <div className="navigation-components-block">
        <div className="navigation-components">
          <ToHomeButton />
          <ScrollDown />
          <ScrollUp />
        </div>
      </div>
    );
}