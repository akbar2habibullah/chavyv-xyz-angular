import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { environment } from '../../../environments/environment.variables';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  envelope = faEnvelope;
  instagram = faInstagram;
  twitter = faTwitter;
  linkedin = faLinkedin;
  github = faGithub;
  gitlab = faGitlab;

  contactsInfo = environment.contactsInfo;

  constructor() {}

  ngOnInit(): void {}
}
