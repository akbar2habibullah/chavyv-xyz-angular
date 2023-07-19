import { Component, OnInit } from '@angular/core';
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faGitlab,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { environment } from '../../../environments/environment.variables';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  instagram = faInstagram;
  linkedin = faLinkedin;
  github = faGithub;
  gitlab = faGitlab;
  youtube = faYoutube;
  tiktok = faTiktok;

  contactsInfo = environment.contactsInfo;

  constructor() {}

  ngOnInit(): void {}
}
