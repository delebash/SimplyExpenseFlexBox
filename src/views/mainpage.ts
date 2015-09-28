import  jq from 'jquery';
export class MainPage {
    attached() {
        jq("#target").click(function () {
            alert('test')
        });
    }
}
