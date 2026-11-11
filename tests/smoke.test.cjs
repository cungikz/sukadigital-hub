const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const elements = {}, handlers = {}, store = {};
let testData = {};
function element(id) {
  return elements[id] ||= {
    id, innerHTML:'', textContent:'', value:'', hidden:false, dataset:{},
    classList:{ values:new Set(), add(x){this.values.add(x)}, remove(x){this.values.delete(x)}, contains(x){return this.values.has(x)}, toggle(x){this.contains(x)?this.remove(x):this.add(x)} },
    addEventListener(event, callback) { handlers[id+':'+event] = callback; },
    showModal() {}, close() {}, click() {}, focus() {}, setSelectionRange() {}, reportValidity() { return true; },
  };
}
const document = {
  getElementById:element,
  querySelectorAll(selector) {
    if (selector === '.nav-item') return ['dashboard','tickets','apps','security','analytics','settings'].map(page => { const el=element('nav-'+page);el.dataset.page=page;el.classList={toggle(){}};return el; });
    return [];
  },
  addEventListener(name,fn){handlers['document:'+name]=fn},
  createElement(){return {click(){},remove(){},set href(x){},set download(x){}}},
  body:{classList:element('body').classList,appendChild(){}},
};
class MockFormData {
  constructor(){this.entriesList=Object.entries(testData)}
  [Symbol.iterator](){return this.entriesList[Symbol.iterator]()}
}
const sandbox = {
  document, localStorage:{getItem(k){return store[k]??null},setItem(k,v){store[k]=v}},
  window:{scrollTo(){}}, Intl, Date, Math, JSON, String, Array, Object, Number, Set, Map, RegExp,
  console, Blob, FormData:MockFormData, URL:{createObjectURL(){return 'blob:test'},revokeObjectURL(){}},
  setTimeout(){return 1},clearTimeout(){},confirm(){return true},
};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(__dirname,'..','assets','app.js'),'utf8'),sandbox);

assert.match(element('app').innerHTML,/Selamat datang di SukaDigital Hub/);
assert.match(element('app').innerHTML,/Tren tiket layanan/);
const titles={tickets:'Tiket Layanan TIK',apps:'Katalog Aplikasi',security:'Pemantauan Insiden',analytics:'Analitik Layanan Digital',settings:'Pengaturan & Data'};
function navigate(page){handlers['document:click']({target:{closest(selector){return selector==='[data-page]'?{dataset:{page}}:null}}});return element('app').innerHTML}
for(const [page,title] of Object.entries(titles)) assert.ok(navigate(page).includes(title),'page '+page);
function openEntry(action){handlers['document:click']({target:{closest(selector){return selector==='[data-action]'?{dataset:{action}}:null}}})}

navigate('tickets');
openEntry('new-ticket');
testData={title:'Portal uji open source',opd:'OPD Demo',category:'Aplikasi',priority:'Sedang',description:'Data simulasi'};
handlers['entryForm:submit']({preventDefault(){},currentTarget:{reportValidity(){return true}}});
assert.match(element('app').innerHTML,/Portal uji open source/);
let saved=JSON.parse(store['sukadigital-hub-v1']);
assert.equal(saved.tickets[0].title,'Portal uji open source');
const id=saved.tickets[0].id;
handlers['document:change']({target:{id:'',value:'Selesai',matches(sel){return sel==='[data-status-ticket]'},dataset:{statusTicket:id}}});
saved=JSON.parse(store['sukadigital-hub-v1']);
assert.equal(saved.tickets[0].status,'Selesai');

navigate('apps');
openEntry('new-app');
testData={name:'Aplikasi Simulasi',category:'Layanan Internal',owner:'Bidang Demo',status:'Aktif',description:'Contoh aplikasi'};
handlers['entryForm:submit']({preventDefault(){},currentTarget:{reportValidity(){return true}}});
saved=JSON.parse(store['sukadigital-hub-v1']);
assert.equal(saved.apps[0].name,'Aplikasi Simulasi');

navigate('security');
openEntry('new-incident');
testData={title:'Latihan insiden',severity:'Rendah',scope:'Simulasi',summary:'Tidak ada kejadian nyata'};
handlers['entryForm:submit']({preventDefault(){},currentTarget:{reportValidity(){return true}}});
saved=JSON.parse(store['sukadigital-hub-v1']);
assert.equal(saved.incidents[0].title,'Latihan insiden');
assert.equal(saved.incidents[0].status,'Dilaporkan');

console.log('LULUS: 6 halaman, penyimpanan lokal, tambah tiket, ubah status, tambah aplikasi, dan catat insiden.');
