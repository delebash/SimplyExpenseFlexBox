import {Router} from 'aurelia-router';
import 'src/css/style.min.css!';

export class App {
  router:Router;

  configureRouter(config, router:Router) {

    config.title = 'Aurelia';
    config.map([
      {route: ['', 'main'], moduleId: './views/mainpage', nav: false},
      { route: 'expenses',  moduleId: './views/expenses', nav: true, title:'First' },
      { route: 'receipts',  moduleId: './views/receipts', nav: true, title:'Second' }
    ]);

    this.router = router;
  }


}
