import Tab from "~/components/tab/index.jsx";
import StickyHeader from "~/components/sticky-header/index.jsx";

function Home() {
    return(
        <>
            <Tab activeTab="for-you">

                <StickyHeader title="Anasayfa">
                    <Tab.Items>
                        <Tab.Item id="for-you">
                            Sana Özel
                        </Tab.Item>
                        <Tab.Item id="followings">
                            Takip Edilenler
                        </Tab.Item>
                    </Tab.Items>
                </StickyHeader>

                <Tab.Content id={"for-you"}>
                    <div className="text-3xl text-red-600 font-bold flex items-center justify-center min-h-screen w-[100%]">
                        For you
                    </div>
                </Tab.Content>
                <Tab.Content id={"followings"}>
                    <div className="text-3xl text-red-600 font-bold flex items-center justify-center min-h-screen w-[100%]">
                        Followings
                    </div>
                </Tab.Content>

            </Tab>
        </>
    )
}

export default Home;