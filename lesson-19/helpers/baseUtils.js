class BaseUtils {
    async toDoClick(element) {
        await element.waitForClickable();
        await element.click();
    }
}

module.exports = new BaseUtils