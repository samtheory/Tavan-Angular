import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { faq } from 'src/app/_Constant/data';
import { Ticket } from 'src/app/_models/ticket';
import { AuthService } from 'src/app/_services/auth.service';
import { TicketService } from 'src/app/_services/ticket.service';



@Component({
  selector: 'app-faq-u',
  templateUrl: './faq-u.component.html',
  styleUrls: ['./faq-u.component.scss']
})
export class FAQUComponent implements OnInit {
  DB_const = { faq };
  toggle = [
    {
    question: `چطور از طریق وب‌سایت توان از ویدیوهای آموزشی استفاده کنم؟`,
    answer : `برای دسترسی به ویدیوهای آموزشی:

    🔸اگر در وب‌سایت توان عضو هستید:
    
    وارد پنل کاربری خود شوید و در بخش دوره‌های من با لمس دکمه هر کارگاه آنلاین و سپس ورود به صفحه آن دوره، ویدیوی مدنظرتان را مشاهده نمایید.
    
    🔸اگر در وب‌سایت توان عضو نیستید:
    
    ابتدا عضو وب‌سایت شوید و سپس ویدیوی موردنظرتان را انتخاب، خریداری و در پنل کاربری خود مشاهده‌ نمایید.`,
    isOpen : "false"
    },
    {
      question: `✅ مزایای استفاده از وب‌سایت توان چیست؟`,
      answer : `این وب‌سایت یک بستر چندوجهی با اهدافی گسترده است‌ و با عضویت در آن به امکانات زیر دسترسی پیدا می‌کنید:

      ▪️اطلاع از تخفیف‌ها
      ▪️آشنایی با اساتید فیزیوتراپی
      ▪️دسترسی دائمی به بیش از .... ساعت ویدیوی آموزشی`,
      isOpen : "false"
    },
    {
      question: `✅ وب‌سایت توان از چه دستگاه‌هایی پشتیبانی می‌کند؟`,
      answer : `🔸کامپیوتر
      🔸لپ تاپ
      🔸سیستم عامل ویندوز
      🔸سیستم عامل IOS
      🔸گوشی‌های هوشمند اندروید و IOS`,
      isOpen : "false"
    },
    {
      question: `✅ چگونه در کارگاه‌های آنلاین توان ثبت‌نام کنم؟`,
      answer : `🔸اگر در وب‌سایت توان عضو هستید و از طریق آن در کارگاه آنلاین ثبت‌نام نموده‌اید:

      کارگاه دلخواه خود را از میان کارگاه‌های آنلاین در حال برگزاری انتخاب و خریداری نمایید.
      پس از خرید، کارگاه آنلاین در پنل کاربری شما در وب‌سایت توان قرار می‌گیرد. (می‌توانید نیم‌ساعت قبل از آغاز دوره با مراجعه به پنل کاربری خود در وب‌سایت توان با لمس دکمه ورود به کارگاه آنلاین، وارد فضای دوره شوید.)
      
      🔸اگر در وب‌سایت توان عضو هستید ولی از این طریق در کارگاه آنلاین ثبت‌نام ننموده‌اید:
      
      به پشتیبانی توان (09056919286) پیام دهید و به آسانی وارد فضای دوره شوید.
      
      🔸اگر در وب‌سایت توان عضو نیستید:
      
      وارد منوی وب‌سایت شوید و با لمس دکمه عضویت به راحتی مراحل ثبت‌نام در وب‌سایت توان را طی کنید؛ پس از احراز هویت توسط ادمین به‌عنوان همکار فیزیوتراپیست یا دانشجوی فیزیوتراپی، شما می‌توانید وارد صفحه کارگاه آنلاین مدنظرتان شوید و آن دوره را خریداری نمایید.`,
      isOpen : "false"
    },
    {
      question: `✅ پس از پرداخت وجه و ثبت‌نام در کارگاه آنلاین چه کاری باید انجام دهم؟`,
      answer : `بعد از پرداخت هزینه، کارگاه آنلاین در پنل کاربری شما در وب‌سایت توان قرار می‌گیرد.

      قبل از آغاز کارگاه آنلاین، وارد پنل کاربری خود در وب‌سایت توان شوید و سپس در صفحه کارگاه آنلاین، دکمه ورود به کارگاه آنلاین را لمس کنید.
       
      در صورت بُروز هر گونه مشکل و یا دریافت پاسخ سوالات خود با پشتیبانی توان (09056919286) تماس بگیرید.`,
      isOpen : "false"
    },
    {
      question: `✅ آیا پس از برگزاری کارگاه آنلاین، ویدیوی کارگاه آنلاین در قالب فایل به شبکه‌های اجتماعی من ارسال می‌شود؟`,
      answer : `خیر؛ فیلم‌های مربوطه به‌صورت دائمی فقط در پنل کاربری شما در وب‌سایت توان قابل دسترسی است.`,
      isOpen : "false"
    },
    {
      question: `✅ آیا ویدیوی کارگاه‌های آنلاین در اختیار شرکت‌کنندگان قرار می‌گیرد؟`,
      answer : `له. در صورت ثبت‌نام قطعی و پرداخت هزینه کارگاه، ویدیوی دوره به‌صورت آنلاین و دائمی در پنل کاربری شما در وب‌سایت توان قرار می‌گیرد.`,
      isOpen : "false"
    },
    {
      question: `✅ اگر علی‌رغم ثبت‌نام در کارگاه آنلاین در زمان برگزاری آن حضور نداشته باشم، می‌توانم ویدیوی دوره را دریافت کنم؟`,
      answer : `بله. اگر به هر دلیلی نتوانستید در کارگاه حضور داشته باشید، ویدیوی کارگاه به‌صورت آنلاین و دائمی در پنل کاربری شما در وب‌سایت توان قرار می‌گیرد.`,
      isOpen : "false"
    },
    {
      question: `✅ چند روز پس از برگزاری کارگاه آنلاین، ویدیوی دوره در اختیار شرکت‌کنندگان قرار می‌گیرد؟`,
      answer : `حداکثر ۲ روز پس از برگزاری هر سطح از کارگاه آنلاین، ویدیوی دوره در پنل کاربری شما به‌صورت دائمی در وب‌سایت توان قرار می‌گیرد.`,
      isOpen : "false"
    },
    {
      question: `✅ چه افرادی می‌توانند در کارگاه‌های آنلاین توان شرکت نمایند؟`,
      answer : `در حال حاضر اکثر کارگاه‌های آنلاین توان کاملا تخصصی و مرتبط با رشته فیزیوتراپی هستند؛ بنابراین فقط فیزیوتراپیستهایی که به‌وسیله ارائه کارت نظام پزشکی و یا کارت دانشجویی احراز هویت شده‌اند، امکان حضور خواهند دارند.

      ⚠️ در مورد کارگاه‌های آنلاین غیرتخصصی توان حضور سایر حِرف پزشکی بلامانع است.`,
      isOpen : "false"
    },
    {
      question: `✅ چطور اطلاعات شخصی خود مانند نام، ایمیل یا شماره موبایلم را در وب‌سایت توان تغییر دهم؟`,
      answer : `اگر در وب‌سایت توان عضو هستید، ابتدا وارد پنل کاربری خود شوید و سپس در بخش ویرایش پروفایل، تغییرات مدنظرتان را اعمال نمایید.`,
      isOpen : "false"
    },
    {
      question: `✅ آیا کارگاه‌های آنلاین توان امتیاز بازآموزی دارد؟`,
      answer : `در حال حاضر اکثر کارگاه‌هایی که به‌صورت آنلاین برگزار می‌شود امتیاز بازآموزی ندارد؛
      و فقط به سمپوزیوم‌های آنلاینی که توسط مجموعه برگزار می‌شود، امتیاز بازآموزی تعلق می‌گیرد.`,
      isOpen : "false"
    },
    {
      question: `✅ آیا می‌توانم ویدیوهای خریداری شده را روی فلش یا هارد اکسترنال و ... ذخیره کنم؟`,
      answer : `خیر؛ با هدف احترام به حقوق صاحبان محتوا و اساتید امکان دانلود، جابه‌جایی، انتشار و پخش ویدیوها از وب‌سایت توان وجود ندارد.

      شما می‌توانید با خریداری ویدیوهای آموزشی و یا ثبت‌نام در کارگاه‌های آنلاین، فیلم‌های مربوطه را به‌صورت دائمی در پنل کاربری خود مشاهده نمایید.`,
      isOpen : "false"
    },
    {
      question: `✅ برای شرکت در کارگاه آنلاین، سرعت اینترنت‌ باید چقدر باشد؟`,
      answer : `برای شرکت در کارگاه آنلاین، سرعتی در حد ۱ مگابیت بر ثانیه کافی است. شاید برایتان این سوال پیش بیاید که چرا با وجود سرعت بالای اینترنت من، بارها دچار قطعی شدم. پاسخ آن است که پایداری خط اینترنت شما بسیار اهمیت دارد. مثلا ممکن است سرعت شما ۱۰ مگابیت است اما اینترنت شما مرتب قطع و وصل می‌شود. معمولا اینترنت ADSL پایداری بیشتری دارد و بهتر است از آن استفاده شود.`,
      isOpen : "false"
    },
    {
      question: `✅ آیا امکان پرسش و پاسخ بین مدرس و شرکت‌کنندگان حین برگزاری کارگاه آنلاین وجود دارد؟`,
      answer : `له ارتباط میان مدرس و شرکت‌کنندگان در زمان برگزاری کارگاه به‌صورت دو‌طرفه است و همانند کارگاه‌های حضوری امکان پرسش و پاسخ وجود دارد. پرسش و پاسخ بر‌ اساس انتخاب شما می‌تواند در قالب متن (چت) و یا در قالب گفتاری و پخش صدا با استفاده از میکروفون باشد.`,
      isOpen : "false"
    },
    {
      question: `✅ کارگاه آنلاین یا وبینار چیست؟`,
      answer : `بینار (Webinar) یا سمینار تحت‌وب (Web-Based Seminar) یک کنفرانس (Conference) است که در زمان واقعی (Real-Time) با استفاده از نرم‌افزارهای وب کنفرانس (Web Conference) بر بستر اینترنت برای گروه بزرگی از مخاطبین برگزار می‌شود.`,
      isOpen : "false"
    },
    {
      question: `✅ چگونه می‌توانم برای توان، فیلم آموزشی ارسال کنم؟`,
      answer : `شما می‌توانید کلیه فیلم‌های آموزشی خود را به پست الکترونیکی Tavangroupp@gmail.com ارسال کنید تا با نام خودتان در سایت قرار داده شود.

      لطفا پس از ارسال فیلم حتما این موضوع را به پشتیبان توان (09056919286) اطلاع دهید.`,
      isOpen : "false"
    }

];
  model: any = {};
  dialog = false;
  toggleFN(i: number) {
    this.toggle[i] = !this.toggle[i];
  }

  ticket: any = {};

  constructor(private ticketService: TicketService, private toastr: ToastrService, private authService: AuthService) { }




  ngOnInit() {

  }

  logedIn() {
    return this.authService.logedIn();
  }

  sendTicket() {
    if (this.logedIn() == true) {
      this.ticketService.createTicket(this.ticket).subscribe(next => {
        this.toastr.success("تیکت با موفقیت ثبت شد");
      });

    } else {
      this.openDialog();
    }
  }
  openDialog() {
    this.dialog = true;
  }
  hideDialog() {

    this.dialog = false;
  }

  loginreal() {
    this.authService.login(this.model).subscribe(response => {
      console.log(response);
      this.hideDialog();
      // if(this.authService.decodeToken.role === 'admin'){
      //   this.router.navigate(['/admin/dashboard']);
      // } else {
      //   this.router.navigate(['/customer-panel']);
      // }
    });
  }

}

