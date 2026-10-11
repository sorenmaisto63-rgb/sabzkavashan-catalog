// Replace sample entries with reviewed company information before publication.
export const company = {name:'سبزکاوشان', english:'Sabz Kavoushan', phone:'', email:'', address:''};
export const categories = [{id:'chemical',name:'کودهای شیمیایی',label:'تغذیه هدفمند',color:'#b8d5bf'},{id:'organic',name:'کودهای آلی',label:'همراه با طبیعت',color:'#d9c7a7'},{id:'biological',name:'کودهای زیستی',label:'نگاه زیستی',color:'#b9cbdc'}];
export const products = [
{id:'chemical-01',name:'محصول شیمیایی — نمونه ۰۱',category:'chemical',description:'جایگاه نمونه برای معرفی یک محصول در دسته کودهای شیمیایی.',image:'images/chemical.svg'},
{id:'chemical-02',name:'محصول شیمیایی — نمونه ۰۲',category:'chemical',description:'متن معرفی این محصول پس از بررسی اطلاعات رسمی تکمیل می‌شود.',image:'images/chemical.svg'},
{id:'organic-01',name:'محصول آلی — نمونه ۰۱',category:'organic',description:'جایگاه نمونه برای معرفی یک محصول در دسته کودهای آلی.',image:'images/organic.svg'},
{id:'organic-02',name:'محصول آلی — نمونه ۰۲',category:'organic',description:'تصویر و توضیحات نهایی این محصول قابل جایگزینی هستند.',image:'images/organic.svg'},
{id:'biological-01',name:'محصول زیستی — نمونه ۰۱',category:'biological',description:'جایگاه نمونه برای معرفی یک محصول در دسته کودهای زیستی.',image:'images/biological.svg'},
{id:'biological-02',name:'محصول زیستی — نمونه ۰۲',category:'biological',description:'اطلاعات این محصول پس از تأیید شرکت منتشر خواهد شد.',image:'images/biological.svg'}
];
export function filterProducts(query='',category='all') {const normalize=s=>s.replace(/ي/g,'ی').replace(/ك/g,'ک').replace(/\u200c/g,' ').trim().toLocaleLowerCase('fa'); const q=normalize(query);return products.filter(p=>(category==='all'||p.category===category)&&normalize(p.name+' '+p.description+' '+categories.find(c=>c.id===p.category).name).includes(q));}
