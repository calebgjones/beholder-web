import contentArray from "../../contentArray";
import { parseMarkup } from "../../../utils/parseMarkup";

const ApplicationMain = () => {
    const applicationModule = contentArray.find(item => item.module === "Application");
    
    return (
        <div className="text-2xl font-bold mb-4">
            <div>
                <h1>Application Component</h1>
            </div>
        </div>
    );
}


export default ApplicationMain;