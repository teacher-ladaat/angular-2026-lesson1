import { Component, signal } from '@angular/core';

// כל קומפוננטה מורכבת מ-4 חלקים
// 1. תצוגה - HTML template
// 2. עיצוב - CSS/SCSS, לא חובה
// 3. לוגיקה - TS class with @Component decorator
// 4. בדיקות יחידה - unit testing (.spec.ts), לא חובה
@Component({
  selector: 'app-root', // שם הקומפוננטה
  templateUrl: './app.html',
  // template: `
  //   <h1>hello angular</h1>
  //   <p class="nice">lesson 1</p>
  // `,

  // עיצובים ששייכים רק לקומפוננטה
  // styleUrls: ['./app.scss'],
  styleUrl: './app.scss',
  // styles: [
  //   `
  //     .nice {
  //       color: blue;
  //     }
  //     div {
  //       border: 1px solid blue;
  //     }
  //   `,
  // ],
})
export class App {
  
}
