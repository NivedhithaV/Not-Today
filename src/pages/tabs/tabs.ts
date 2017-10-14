import { Component } from '@angular/core';

import { MoodPage } from '../mood/mood';
import { DashboardPage } from '../dashboard/dashboard';
import { HomePage } from '../home/home';
import {PanicPage} from "../panic/panic";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MoodPage;
  tab3Root = DashboardPage;
  tab4Root = PanicPage;

  constructor() {

  }
}
