import CustomScrollBar from "@/app/generic-components/scrollBar";
import NavigationComponents from "./navigationComponents";

export default function GenericNavigation() {
    return (
        <div className="generic-navigation">
          <CustomScrollBar />
          <NavigationComponents />
        </div>
    );
}