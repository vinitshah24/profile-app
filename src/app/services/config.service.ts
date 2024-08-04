import { Injectable } from '@angular/core';
import { configuration } from './app.data';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  conf = configuration;

  constructor() { }

  getHeaderConf() {
    return this.conf.header;
  }

  getHomeConf() {
    return this.conf.home;
  }

  getAboutConf() {
    return this.conf.about;
  }

  getSkillsConf() {
    return this.conf.services;
  }

  getPortfolioConf() {
    return this.conf.portfolio;
  }

  getContactConf() {
    return this.conf.contact;
  }

  getFooterConf() {
    return this.conf.footer;
  }

  getErrorConf() {
    return this.conf.error;
  }
}
