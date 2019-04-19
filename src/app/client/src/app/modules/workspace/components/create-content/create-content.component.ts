import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ResourceService, ConfigService, IUserProfile, IUserData } from '@sunbird/shared';
import { Subscription } from 'rxjs';
import { SuiModule } from 'ng2-semantic-ui/dist';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';
import { FrameworkService, PermissionService, UserService } from '@sunbird/core';
import { IInteractEventInput, IImpressionEventInput } from '@sunbird/telemetry';
@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  /*
 roles allowed to create textBookRole
 */
  textBookRole: Array<string>;
  userProfile: IUserProfile;
  userDataSubscription: Subscription;
  public userService: UserService;
  /**
   * courseRole  access roles
  */
  courseRole: Array<string>;
  /**
    * lessonRole   access roles
  */
  lessonRole: Array<string>;
  /**
 * collectionRole  access roles
 */
  collectionRole: Array<string>;
  /**
  *  lessonplanRole access roles
  */
  lessonplanRole: Array<string>;
  /**
  *  lessonplanRole access roles
  */
  contentUploadRole: Array<string>;
  /**
   * To call resource service which helps to use language constant
   */
  public resourceService: ResourceService;
  /**
   * Reference for framework service
  */
  public frameworkService: FrameworkService;

  /**
   * reference of permissionService service.
  */
  public permissionService: PermissionService;
  /**
  * reference of config service.
 */
  public configService: ConfigService;
  /**
	 * telemetryImpression
	*/
  telemetryImpression: IImpressionEventInput;
  /**
  * Constructor to create injected service(s) object
  *
  * Default method of DeleteComponent class

  * @param {ResourceService} resourceService Reference of ResourceService
 */
  constructor(configService: ConfigService, resourceService: ResourceService,
    frameworkService: FrameworkService, userService: UserService, permissionService: PermissionService, private activatedRoute: ActivatedRoute) {
    this.resourceService = resourceService;
    this.userService = userService;
    this.frameworkService = frameworkService;
    this.permissionService = permissionService;
    this.configService = configService;
  }

  ngOnInit() {
    this.frameworkService.initialize();
    this.textBookRole = this.configService.rolesConfig.workSpaceRole.textBookRole;
    this.courseRole = this.configService.rolesConfig.workSpaceRole.courseRole;
    this.lessonRole = this.configService.rolesConfig.workSpaceRole.lessonRole;
    this.collectionRole = this.configService.rolesConfig.workSpaceRole.collectionRole;
    this.lessonplanRole = this.configService.rolesConfig.workSpaceRole.lessonplanRole;
    this.contentUploadRole = this.configService.rolesConfig.workSpaceRole.contentUploadRole;
    this.telemetryImpression = {
      context: {
        env: this.activatedRoute.snapshot.data.telemetry.env
      },
      edata: {
        type: this.activatedRoute.snapshot.data.telemetry.type,
        pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
        uri: this.activatedRoute.snapshot.data.telemetry.uri
      }
    };
    this.userDataSubscription = this.userService.userData$.subscribe(
      (user: IUserData) => {
        if (user && !user.err) {
          this.userProfile = user.userProfile;
        }
      });
  }
}
