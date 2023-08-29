/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class AppService {
  sendEmail(API_KEY: string): any {
    const resend = new Resend(API_KEY);
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'yo@aymkh.tn',
      subject: 'Hello World',
      html: '<p>hi from backend! this is a template EMAIL</p>'
    });
  }

  sendCustomEmail(payload: any): any {
    const resend = new Resend(payload.key);
    const DUMMY_EMAIL = {
      from: payload.EMAIL.from,
      to: payload.EMAIL.to,
      subject: payload.EMAIL.subject,
      html: payload.EMAIL.html
    }
    resend.emails.send({ ...DUMMY_EMAIL });
  }
}
