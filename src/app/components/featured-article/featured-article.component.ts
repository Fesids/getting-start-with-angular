import {CommonModule, DatePipe, registerLocaleData} from "@angular/common"
import localePt from "@angular/common/locales/pt";
import { Component, Input } from "@angular/core";


@Component({
    selector: "app-featured-article",
    standalone: true,
    imports: [],
    providers: [
        DatePipe
    ],
    templateUrl: "./featured-article.component.html",
    styleUrl: "./featured-article.component.scss"
})
export class FeaturedArticleComponent {
    @Input() date!: string;
    @Input() title!: string;
    @Input() description!: string;
    @Input() postUrl!: string;
    @Input() author!: string;

    dateISO!: string;
    dateFormatted!: string;

    constructor(private datePipe: DatePipe) {
        registerLocaleData(localePt);
    }

    ngOnInit(): void {
        this.dateISO = this.date;
        this.dateFormatted = this.datePipe.transform(this.date, 'dd MM yyyy', '', 'pt-BR')!;
    }




}
