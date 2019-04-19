import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './components/get/get.component';
import { DialCodeComponent } from './components/dial-code/dial-code.component';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import {
  LandingPageComponent, SignupComponent, PublicContentPlayerComponent,
  PublicCollectionPlayerComponent
} from './components';
import { SignupGuard, LandingpageGuard } from './services';
import { MankindComponent, AboutusComponent, DashboardMR, DashboardRegionalSalesManager, Blog, Queryone, Querytwo } from './module/mankind';

const routes: Routes = [
  {
    path: '', // root path '/' for the app
    component: LandingPageComponent,
    canActivate: [LandingpageGuard],
    data: {
      telemetry: {
        env: 'public', pageid: 'landing-page', type: 'edit', subtype: 'paginate'
      }
    }
  },
  {
    path: 'signup', component: SignupComponent,
    canActivate: [SignupGuard],
    data: {
      telemetry: {
        env: 'public', pageid: 'signup', type: 'edit', subtype: 'paginate'
      }
    }
  },
  {
    path: 'get', component: GetComponent, data: {
      telemetry: {
        env: 'public', pageid: 'get', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'get/dial/:dialCode', component: DialCodeComponent, data: {
      telemetry: {
        env: 'public', pageid: 'get-dial', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'play/content/:contentId', component: PublicContentPlayerComponent, data: {
      telemetry: {
        env: 'public', pageid: 'play-content', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'play/collection/:collectionId', component: PublicCollectionPlayerComponent, data: {
      telemetry: {
        env: 'public', pageid: 'play-collection', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'explore', loadChildren: './module/explore/explore.module#ExploreModule'
  },
  {
    path: ':slug/explore', loadChildren: './module/explore/explore.module#ExploreModule'
  },
  {
    path: 'mankind', component: MankindComponent, data: {
      telemetry: {
        env: 'public', pageid: 'mankind', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'aboutus', component: AboutusComponent, data: {
      telemetry: {
        env: 'public', pageid: 'aboutus', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'dashboardmr', component: DashboardMR, data: {
      telemetry: {
        env: 'public', pageid: 'dashboardmr', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'dashboardrm', component: DashboardRegionalSalesManager, data: {
      telemetry: {
        env: 'public', pageid: 'dashboardrm', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'blog', component: Blog, data: {
      telemetry: {
        env: 'public', pageid: 'blog', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'queryone', component: Queryone, data: {
      telemetry: {
        env: 'public', pageid: 'queryone', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'querytwo', component: Querytwo, data: {
      telemetry: {
        env: 'public', pageid: 'querytwo', type: 'view', subtype: 'paginate'
      }
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }