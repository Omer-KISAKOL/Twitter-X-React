import {topics} from "~/utils/consts";
import SidebarSection from "~/components/sidebar-section";
import Topic from "~/layouts/main/rightbar/topics/topic/index.jsx";

function Topics() {
    return(
        <SidebarSection
            title="İlgini çekebilecek gündemler"
            more="/trends"
        >
            {topics.map((topic, index) => <Topic item={topic} key={index} />)}
        </SidebarSection>
    )
}
export default Topics;