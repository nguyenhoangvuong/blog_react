import Sidebar from "../../components/sidebar/Sidebar"
import Singlepost from "../../components/singlepost/SinglePost"
import "./single.css"

export default function Single() {
    return (
        <div className="single">
            <Singlepost/>
            <Sidebar/>
        </div>
    )
}
