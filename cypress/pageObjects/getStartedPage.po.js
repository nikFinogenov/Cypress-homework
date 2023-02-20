import BasePage from "./basePage.po";
import CONFIG from "../contants";

export class GetStartedPage extends BasePage {
    constructor() {
        super(CONFIG.getStartedPage.path);
    }
}
