import "./style/index.scss";
import { getUserId, userBasicInfo, userEducationInfo } from "./pages";

const userId = getUserId();
userBasicInfo(userId);
userEducationInfo(userId)