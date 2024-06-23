import Search from "~/layouts/main/rightbar/search";
import Premium from "~/layouts/main/rightbar/premium";
import Topics from "~/layouts/main/rightbar/topics/index.jsx";
import Footer from "~/layouts/main/rightbar/footer/index.jsx";

function RightBar() {
    return(
        <aside className="max-w-[350px] w-[100%] ml-8">
            <Search/>
            <Premium/>
            <Topics/>
            <Footer/>
        </aside>
    )
}

export default RightBar;