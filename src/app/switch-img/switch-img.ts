import { Component } from '@angular/core';
import { Clown } from '../shared/clown';

@Component({
  selector: 'app-switch-img',
  imports: [], // רכיבים של אנגולר שמשתמשים בהם בטמפלייט
  templateUrl: './switch-img.html',
  styleUrl: './switch-img.scss',
})
export class SwitchImg {
  // public-כברירת מחדל הכל ציבורי
  // רק אם זה ציבורי ניתן לגשת בטמפלייט של הקומפ' הנוכחית

  // טיפוס מרומז לפי ההשמה - ts type inference
  clownNumber = 0;
  clownName = 'הליצן הראשון שלי';

  clownAge?: number;
  clownBorn = new Date(2020, 1, 2);

  // אם יש אותם תכונות
  // מסכים לקבל אותו בהשמה
  myC: Clown = {
    id: 100,
    name: 'ליצן קטן נחמד',
    born: new Date(),
  };

  // כששולחים פרמטר חובה לכתוב טיפוס
  changeClownTo(myClown: number) {
    // alert(myClown)

    // אפשר להשתמש בפרמטר
    this.clownNumber = myClown - 1;
    this.clownName = `הליצן ה-${this.clownNumber + 1} שלי`;
  }

  nextClown() {
    this.clownNumber = (this.clownNumber + 1) % 6;
    this.clownName = `הליצן ה-${this.clownNumber + 1} שלי`;
  }

  nextClownDisable() {
    this.clownNumber++;
    this.clownName = `הליצן ה-${this.clownNumber + 1} שלי`;
  }

  changeToBtnNum(ev: PointerEvent) {
    // console.log(ev);
    // console.log(ev.target);

    // האלמנט שנלחץ בדף
    const btn = ev.target as HTMLButtonElement;
    const num = +btn.textContent;

    this.changeClownTo(num);
  }

  changeFromInput(inp: HTMLInputElement) {
    this.changeClownTo(inp.valueAsNumber);
  }
}
